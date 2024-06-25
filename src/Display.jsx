import React from 'react';
import { TextField, InputLabel } from '@mui/material';

const Display = ({ totalResult, inputLabel }) => {
  return (
    <>
      <TextField
        type='text'
        variant="outlined"
        value={totalResult}
        label="Your Result here"
        InputProps={{
          readOnly: true,
        }}
        sx={{ margin: 1 }}
      />
      <InputLabel sx={{ fontWeight: 'bold', fontFamily: 'unset', marginTop: 2, marginBottom: -4, color: 'error.main' }}>
        {inputLabel}
      </InputLabel>
    </>
  );
}

export default Display;
