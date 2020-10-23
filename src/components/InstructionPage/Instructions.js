import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid,Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Instructions.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


export default function Instructions() {
  const classes = useStyles();

  return (
    <Container>
      <br/>
      < Typography variant="h2" align="center">
        Instructions For The Activity
      </Typography>
      <Grid
        row
        justify="center"
        alignItems="center"
      >
        <Grid item 
          sm={12}
        >
          <iframe
            title="ppt"
            src="https://onedrive.live.com/embed?cid=703B19A0781C4859&amp;resid=703B19A0781C4859%21157&amp;authkey=AGUrpqVqRZGBX_E&amp;em=2&amp;wdAr=1.7777777777777777" 
            frameborder="0"
          >
            This is an embedded
            <a target="_blank" rel="noopener noreferrer" href="https://office.com">
                Microsoft Office
            </a>
              presentation, powered by
            <a target="_blank" rel="noopener noreferrer" href="https://office.com/webapps">
                Office
            </a>.
          </iframe>
        
        </Grid>
        <Grid item justify="flex-end" align="right">
        <div className={classes.root}>
            <Link to="/done">
              <Button variant="contained" color="secondary" component="span">
                One hour is up, finish
              </Button>
            </Link>
            <Link to="/upload">
              <Button variant="contained" color="secondary" component="span">
                Continue
              </Button>
            </Link>
        </div>
        </Grid>
      </Grid>
      <br/>
      <img alt="" src="http://code.org/api/hour/begin_codecapture.png"/>
    </Container>
  );
}


