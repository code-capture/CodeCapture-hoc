import React from 'react';
import { Typography, Button, Grid,Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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
  

function Output() {
    const classes = useStyles();
    return (
        <div>
            <Container>
            <br/>
            < Typography variant="h2" align="center">
                Output
            </Typography>
            <br/>
            <Grid
                row
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    code input output
                </Grid>
                <br/>
                <Grid item justify="flex-end" align="right">
                <div className={classes.root}>
                    <Link to="/done">
                        <Button variant="contained" color="secondary" component="span">
                            Finish
                        </Button>
                    </Link>
                </div>
                </Grid>
            </Grid>
            <br />
        </Container>
        </div>
    )
}

export default Output;
