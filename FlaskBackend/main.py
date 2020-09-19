from flask import Flask,request,jsonify,render_template
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import os
from subprocess import call, Popen, PIPE
from array import array
from PIL import Image
import sys
import time

from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
from azure.cognitiveservices.vision.computervision.models import VisualFeatureTypes
from msrest.authentication import CognitiveServicesCredentials

region = 'centralindia'
key = 'ffc60f43d45049b185f8ab5c9b79c2d3'

credentials = CognitiveServicesCredentials(key)
client = ComputerVisionClient(
    endpoint="https://" + region + ".api.cognitive.microsoft.com/",
    credentials=credentials
)

UPLOAD_FOLDER = './uploads'
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload',methods=['POST'])
@cross_origin(supports_credentials=True)
def upload():
    codedatafile = request.files.get('file')
    if codedatafile:
        filename = secure_filename(codedatafile.filename)
        codedatafile.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        textcode = detect_document(filepath)
        output = compilejs(textcode)
        return jsonify({'status':'ok','text':textcode,'output':output})
    return jsonify({'status':'No file !!'})

def detect_document(path):
    rawHttpResponse = client.read(path, language="en", raw=True)
    operationLocation = rawHttpResponse.headers["Operation-Location"]
    idLocation = len(operationLocation)
    operationId = operationLocation[idLocation:]

    result = client.get_read_result(operationId)

    if result.status == OperationStatusCodes.succeeded:
        codedata = result.analyze_result.read_results[0].lines

    return codedata

def compilejs(textcode):
    with open('submission.js','w+') as mycode:
        mycode.write(textcode)
    ccompile = Popen(["node","submission.js"], stderr=PIPE)
    ccompileerr = ccompile.communicate()[1].decode()
    if ccompileerr != '':
        return ccompileerr
    runoutput = Popen(["node ./submission..jsc"], stdout=PIPE)
    output = runoutput.communicate()[0]
    call(["rm","submission.js", "submission.jsc"])
    return output.decode()


if __name__ == '__main__':
    app.run(debug=True)