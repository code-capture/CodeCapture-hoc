import { Typography, Container, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

class Upload extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        file: event.target.files[0]
      })
    }
  
  async uploadImage(event) {
    event.preventDefault();const data = new FormData();
    data.append('file', this.state.file);
    //post req to upload
      fetch('/uploadImage', {
        type: "POST",
        data: data, 
        contentType: false,
        cache: false,
        processData: false
      });
  }

  async continueToEditor(event) {
    event.preventDefault();
      //post req to populate editor
      const response = await fetch('/populateEditor', {
        method: 'POST', 
        contentType: false,
        cache: false,
        processData: false,
      },
      );
      console.log(response);
    }
  
    render() {
        
      return (
        
          <Container maxWidth="sm">
            <br/>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Upload code image
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <input 
                        type="file"
                        style={{ display: 'none' }}
                        accept="image/*"
                        id="contained-button-file"  
                        onChange={this.handleChange}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="secondary" component="span">
                            Capture
                        </Button>
                    </label>
                </Grid>
                <Grid item>
                  <Link to="/edit">
                  { this.state.file ?
                    <Button
                      variant="contained"
                      color="secondary"
                      component="span"
                      onClick={(e)=>this.continueToEditor(e)}
                    >
                      Continue to editor
                    </Button> 
                    :
                    <Button variant="contained" disabled color="secondary" component="span">
                      Continue to editor
                    </Button>
                  }
                  </Link>  
                </Grid>
              </Grid>
            </div> 
            <br />
            <Typography variant="h6" align="center">
                  Image preview
            </Typography>
            <hr/>  
            <Grid
                row
                justify="center"
                alignItems="center"
            >
              <Grid item align="center">           
                  <img
                      alt="" src={URL.createObjectURL(this.state.file)}
                      height="50%"
                      width="50%"
                  />
              </Grid>
            </Grid>
          <Grid container spacing={2} justify="center">
            { this.state.file ?
                    <Button
                      variant="contained"
                      color="secondary"
                      component="span"
                      onClick={(e)=>this.uploadImage(e)}
                    >
                      Upload Image
                    </Button> 
                    :
                    <Button variant="contained" disabled color="secondary" component="span">
                      Upload image
                    </Button>
            }
          </Grid>
        </Container>
      );
    }
  }
export default Upload;