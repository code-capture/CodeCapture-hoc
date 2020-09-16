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
        Instructions for the activity
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
            src="https://stdntpartners-my.sharepoint.com/personal/simran_makhija_studentambassadors_com/_layouts/15/Doc.aspx?sourcedoc={63016ab5-64f6-4836-b8d6-f75e0c6ad21b}&amp;action=embedview&amp;wdAr=1.7777777777777777"
            frameborder="0">
            This is an embedded
            <a target="_blank" rel="noopener noreferrer" href="https://office.com">
              Microsoft Office
            </a>
            presentation, powered by
            <a target="_blank" rel="noopener noreferrer" href="https://office.com/webapps">
            Office</a>.
          </iframe>
        </Grid>
        <Grid item justify="flex-end" align="right">
        <div className={classes.root}>
            <Link to="/upload">
              <Button variant="contained" color="secondary" component="span">
                Continue
              </Button>
            </Link>
        </div>
        </Grid>
      </Grid>
      <br />
      
    </Container>
  );
}


