import { Typography, Container, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";
import React, {useState, useRef} from 'react';
// import axios from 'axios';

function Upload() {
  
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    // console.log(imageSrc);
  }, [webcamRef, setImgSrc]);

  
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment"
  };

  const extract = async (img) => {
    let base64 = img.substring((img.indexOf(",")+1))
    var url = "https://cc-ocr.azurewebsites.net/api/HttpTriggerCSharp1"
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            base64: base64
        })
    };
  const res = await fetch(url, requestOptions);
  const data = await res.json();
    if (data.code === "Base64 String is Missing")
        return null;
    else 
        return data.code;
}

const getCode = async () =>{
  const code = await extract(imgSrc);
  window.sessionStorage.setItem('code', code)
  console.log(code)
  if (code != null) setRedirect(true)
  else
    alert("Take another image please")
}

      return (
        
          <Container maxWidth="sm">
            <br/>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Upload Code Image
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <label htmlFor="contained-button-file">
                        <Button 
                        variant="contained" 
                        color="secondary" 
                        component="span"
                        onClick ={imgSrc===null?capture:()=>{setImgSrc(null)}}
                        >
                            {imgSrc===null?"Capture":"Take another image"}
                        </Button>
                    </label>
                </Grid>
                <Grid item>
                  <Link to="/edit">
                  { redirect ?
                    <Button
                      variant="contained"
                      color="secondary"
                      component="span"
                    >
                      Continue to editor
                    </Button> 
                    :
                    <Button variant="contained" disabled color="secondary" component="span">
                      Wait for it
                    </Button>
                  }
                  </Link>  
                </Grid>
              </Grid>
            </div> 
            <br />
            <Typography variant="h6" align="center">
                  Image Preview
            </Typography>
            <hr/>  
            <Grid
                row
                justify="center"
                alignItems="center"
            >
          </Grid>
          <Grid
                row
                justify="center"
                alignItems="center"
            >
              <Grid item align="center">           
              { imgSrc == null
            ?
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            videoConstraints={videoConstraints}
          />
          :
          null
        }
        
        {imgSrc && (
                <img
                    alt="preview"
                    src={imgSrc}
          />
        )}
              </Grid>
            </Grid>
          <Grid container spacing={2} justify="center">
          <Grid item>
            <Link to="/done">
                <Button variant="contained" color="secondary" component="span">
                  One hour is up, finish
                </Button>
            </Link>
          </Grid>
          <Grid item>
            { imgSrc!=null ?
                    <Button
                      variant="contained"
                      color="secondary"
                      component="span"
      
                      onClick={getCode}
                    >
                      Submit Image
                    </Button> 
                    :
                    <Button variant="contained" disabled color="secondary" component="span">
                      Waiting...
                    </Button>
            }

          </Grid>
        </Grid>
        </Container>
      );
}
export default Upload;
