import React, {useState, useEffect} from 'react';
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
    const [code, setCode] = useState(window.sessionStorage.getItem('code'));
    const [output, setOutput] = useState('');
    
    useEffect(() => {
        if (window.console) {
            console = { 
                log: function(){
                    var output='',
                        console=document.getElementById('console');
                    for (var i=0;i<arguments.length;i++) {
                        output+=arguments[i]+' ';
                    }
                    console.innerText+=output+"\n";
                }
            };
        }
    })

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
                        <Link to="/instructions">
                            <Button variant="contained" color="secondary" component="span">
                                Go to instructions
                            </Button>
                        </Link>
                        <Link to="/upload">
                            <Button variant="contained" color="secondary" component="span">
                                Take another picture
                            </Button>
                        </Link>
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
