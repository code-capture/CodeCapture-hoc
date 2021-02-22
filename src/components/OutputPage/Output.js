import React, {useState} from 'react';
import { Paper, Typography, Button, Grid,Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";

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
    const code = window.sessionStorage.getItem('code');
    // eslint-disable-next-line
    const [output, setOutput] = useState('');
    

    const classes = useStyles();
    return (
        <div>
            <Container>
                <br/>
                < Typography variant="h2" align="center">
                    Output
                </Typography>
                <br />
                < Typography variant="h5" align="center">
                    In case the output is blank, please check the code for errors
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
                                Output
                            </Typography>
                            <Typography variant="body1" id="console" >
                                {output}
                            </Typography>
                        </Paper>
                    </Grid>
                    <br/>     
                         
                    <Grid item justify="flex-end" align="right">
                    <div className={classes.root}>    
                        <Link to="/edit">
                            <Button variant="contained" color="secondary" component="span">
                                Edit code
                            </Button>
                        </Link>
                        <Link to="/done">
                            <Button variant="contained" color="secondary" component="span">
                                Finish
                            </Button>
                        </Link>
                    </div>
                    </Grid>
                    <Grid item justify="flex-end" align="right">
                    <div className={classes.root}>
                        <Link to="/instructions">
                                <Button style={{margin:"10px"}}variant="contained" color="secondary" component="span">
                                Go to instructions
                            </Button>
                        </Link>
                        <Link to="/upload">
                            <Button variant="contained" color="secondary" component="span">
                                Take another picture
                            </Button>
                        </Link>
                    </div>
                    </Grid>
                    <br/>
                </Grid>
                <br />
            </Container>
            <Helmet>
                <script type="text/javascript">
                    {code}
                </script>
            </Helmet>
        </div>
    )
}

export default Output;
