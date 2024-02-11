import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({name,height}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0.5, width: '25ch' },
        height:{height}
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={name} variant="outlined" />
    </Box>
  );
}