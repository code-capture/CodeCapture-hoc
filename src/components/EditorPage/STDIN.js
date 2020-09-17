import React from 'react';
import {TextField,Grid} from '@material-ui/core';



export default function STDIN() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
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
                value={value}
                onChange={handleChange}
                variant="filled"
                helperText="Standard input"
            />
        </form>

    </Grid>
      
  );
}

