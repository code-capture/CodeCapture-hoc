import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import '../LandingPage/landing.css';
import { Link } from 'react-router-dom';
const Exit = () => {
  
  return (
    <body>
    <Container>
      <Grid row>
        <Grid item lg={12}>
          <div class="content">
            <h2> Congratulations! </h2>
              <h3>
                {`You have successfully learned the basics of programming and computer science using JavaScript!`}
              </h3>
              <hr />
              
              <Button variant="contained" color="secondary" style={{margin:"3px"}}>
                Give Feedback
              </Button>
              <Button href="http://code.org/api/hour/finish" variant="contained" color="secondary" >
                Collect your certificate!      
              </Button>
              <br />
              <br />
              <Link to="/">
                    <Button variant="contained" color="secondary" component="span">
                    Back to home page
                    </Button>
              </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
    </body>
  );
}

export default Exit;
