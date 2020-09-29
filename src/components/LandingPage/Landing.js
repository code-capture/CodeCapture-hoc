import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  
  return (
    <body>
    <Container>
      <Grid row>
        <Grid item lg={12}>
          <div className="content">
            <Grid
                row
                justify="center"
                alignItems="center"
            >
            <Grid item align="center">           
                  <img
                    alt=""
                    src="https://upload.wikimedia.org/wikipedia/commons/8/84/CodeCapture-Edit.png"
                    height="40%"
                    width="40%"
                  />
            </Grid>
            </Grid>
            <h3>From pen and paper to editor and compiler!</h3>
            <hr />
            <Link to="/instructions">
              <Button variant="contained" color="secondary" >
                    Get Started!
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
    </body>
  );
}

export default Landing;
