import { Typography, Container, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

class Upload extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        file: null,
        done: false,
        fileUrl : null
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        file: event.target.files[0],
        fileUrl: URL.createObjectURL(event.target.files[0])
      })
    }
  
  async uploadImage(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('file', this.state.file);
    this.setState({
      file: null
    })
    axios
    .post("/uploadImage", data)
      .then(res => {
        window.sessionStorage.setItem('code', res.data)
        this.setState({
          done: true,
          file: data['file']
        })
      })
    .catch(err => console.warn(err));
  }

    render() {  
      return (
        
          <Container maxWidth="sm">
            <br/>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Upload Code Image
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
                  { this.state.done ?
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
                  <img
                      alt="" src={this.state.fileUrl}
                      height="50%"
                      width="50%"
                  />
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
            { this.state.file ?
                    <Button
                      variant="contained"
                      color="secondary"
                      component="span"
      
                      onClick={(e)=>this.uploadImage(e)}
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
  }
export default Upload;
