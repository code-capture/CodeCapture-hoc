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
        file: URL.createObjectURL(event.target.files[0])
      })
    }
    render() {
        
      return (
        
          <Container maxWidth="sm">
            <br/>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Upload code image
            </Typography>
            {/* <Typography variant="h5" align="center" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
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
                    <Button variant="contained" color="secondary" component="span">
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
                      alt="" src={this.state.file}
                      height="50%"
                      width="50%"
                  />
              </Grid>
            </Grid>
          
        </Container>
      );
    }
  }
export default Upload;