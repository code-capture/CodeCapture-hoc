import React, {useState} from 'react';
import { Paper, Typography, Button, Grid,Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));
  

function Output() {
    const [code, setCode] = useState(window.sessionStorage.getItem('code'));
    const [output, setOutput] = useState('');
    
    
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
                <Paper elevation={3} className={classes.paper}>
                    <Typography  variant="h5" component="h1">
                        Code
                    </Typography>
                    <Typography variant="body1" >
                        {code}
                    </Typography>
                </Paper>
                </Grid>
                <br /> 
                <Grid item>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography  variant="h5" component="h1">
                            Output
                        </Typography>
                        <Typography variant="body1" >
                            {output}
                        </Typography>
                    </Paper>
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
