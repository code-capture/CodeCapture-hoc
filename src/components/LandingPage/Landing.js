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
          <div class="content">
            <h1>Code Capture</h1>
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
