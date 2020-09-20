import React from 'react';
import {TextField,Grid} from '@material-ui/core';



export default function STDIN() {
  const [STDIN, setSTDIN] = React.useState('');

  const handleChange = (event) => {
    setSTDIN(event.target.value);
  };

  return (
    <Grid item >
        <form
            noValidate
            autoComplete="off">
        
            <TextField
                id="outlined-multiline-flexible "
                label="STDIN"
                multiline
                color="secondary"
                fullWidth
                rowsMax={4}
                value={STDIN}
                onChange={handleChange}
                variant="filled"
                helperText="Standard input"
            />
        </form>

    </Grid>
      
  );
}

