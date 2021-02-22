import React, {useEffect} from 'react';
import Editor from './Editor';
import { Container,Grid,Button,Typography } from '@material-ui/core';
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


function EditorPage() {
    const classes = useStyles();

    useEffect(() => {
        if (window.console) {
            // eslint-disable-next-line
            console = { 
                log: function(){
                    var output='',
                        console=document.getElementById('console');
                    for (var i=0;i<arguments.length;i++) {
                        output+=arguments[i]+' ';
                    }
                    console.innerText+=output+"\n";
                },
                error : window.console.error
            };
        }
    },[])


    return (
        <Container>
            <br/>
            < Typography variant="h2" align="center">
                Your Code
            </Typography>
            <br/>
            <Grid
                row
                justify="center"
                alignItems="center"
            >
                <Grid item>
                        <Editor/>   
                </Grid>
            </Grid>   
            <br />
            <Grid row>
            <Grid item justify="flex-end" align="right">
                <div className={classes.root}>
                <Link to="/done">
                    <Button variant="contained" color="secondary" component="span">
                    One hour is up, finish
                    </Button>
                </Link>
                    <Link to="/out">
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            component="span"
                            >
                            Show output
                        </Button>
                    </Link>
                </div>
                </Grid>
            </Grid>
            <br />
        </Container>
    )
}

export default EditorPage;
