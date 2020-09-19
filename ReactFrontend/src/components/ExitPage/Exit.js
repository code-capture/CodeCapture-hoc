import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import '../LandingPage/landing.css';

const Exit = () => {
  
  return (
    <body>
    <Container>
      <Grid row>
        <Grid item lg={12}>
          <div class="content">
            <h2> Thank you for using Code Capture! </h2>
              <h3>
                {`If you have the time, please fill put a short feedback of the platform!\n
                Then please head over to the HoC site to collect your certificate.`}
              </h3>
              <hr />
              
              <Button variant="contained" color="secondary" >
                Give Feedback
              </Button>
              <br />
              <br/>
              <Button variant="contained" color="secondary" >
                Collect your certificate!      
              </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
    </body>
  );
}

export default Exit;
