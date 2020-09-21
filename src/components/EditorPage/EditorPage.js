import React from 'react';
import Editor from './Editor';
import STDIN from './STDIN'
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

async function clickOutput() {
    const response = await fetch('/output', {
        method: 'POST', 
        contentType: false,
        cache: false,
        processData: false,
      },
    );
      console.log(response);
}

function EditorPage() {
    const classes = useStyles();
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
            <STDIN/>
            <Grid row>
            <Grid item justify="flex-end" align="right">
                <div className={classes.root}>
                    <Link to="/out">
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            component="span"
                            OnClick={clickOutput}
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
