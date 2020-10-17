from flask import Flask,request,jsonify,render_template, redirect, url_for, session
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import os
import io
import requests
from subprocess import call, Popen, PIPE
from array import array
from PIL import Image
import sys
import json
import time


remote_image_handw_text_url = "https://raw.githubusercontent.com/MicrosoftDocs/azure-docs/master/articles/cognitive-services/Computer-vision/Images/readsample.jpg"


key = <Azure Computer Vision Subscription Key>



THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(THIS_FOLDER, 'uploads')
app = Flask(__name__, static_folder = "../../build", static_url_path="/")
app.config["SECRET_KEY"] = "GtzMjllbxItI9Q-nw6JqCg"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/uploadImage',methods=['GET','POST'])
@cross_origin(supports_credentials=True)
def uploadImage():
    codedatafile = request.files['file']
    if codedatafile:
        filename = secure_filename(codedatafile.filename)
        codedatafile.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        response = sendRequest(filepath)
        time.sleep(2)
        getResponse(response.headers["Operation-Location"],key)
        # output = compilejs(textcode)
        return (session["output"])
    return jsonify({'status':'file not found!!'})


# @app.route('/populateEditor',methods=['GET','POST'])
# def populateEditor():



def sendRequest(path):

    requestUrl = <Azure Computer Vision Endpoint>

    headers = {
    "Content-Type" : "application/octet-stream",
    "Ocp-Apim-Subscription-Key" : key,
    }

    params = {
    "language" : "en"
    }

    # this was a file which was on my local machine so change it accordingly
    body = open(path ,"rb").read()

    response = requests.request("POST",requestUrl,params = params,headers = headers, data = body)
    print(response.headers)

    return response

def getResponse(responseUrl,key):

    headers = {
        "Ocp-Apim-Subscription-Key" : key,
    }

    response = requests.request("GET",responseUrl,headers = headers)

    analysis = response.json()
    json.dumps(analysis, indent=4)
    data2 = analysis["analyzeResult"]["readResults"][0]["lines"]
    print(data2)


    # f = open('submission.js', 'w')
    # for line in data2:
    #     f.write(line['text'] + '\n')
    # f.close()
    stringx = ""

    for line in data2:
       stringx += line['text'] + '\n'

    print(stringx)

    session["output"] = stringx

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
