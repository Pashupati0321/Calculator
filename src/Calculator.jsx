import React from 'react';
import { TextField, InputLabel} from '@mui/material';

const Calculator = ({ firstNumber, secondNumber, setFirstNumber, setSecondNumber}) => {

  const handleChangeFirst = (e) => {
    console.log("On change first");
    setFirstNumber(e.target.value);
  }

  const handleChangeSecond = (e) => {
    console.log("On change second");
    setSecondNumber(e.target.value);
  }

  return (
    <>
    <InputLabel sx={{ fontWeight: 'bold', fontSize: 20, fontFamily: 'unset', marginTop: -3, color: 'black' }}>
       Calculator
      </InputLabel>
      <TextField 
        type='number' 
        id="outlined-basic" 
        label="Enter 1st number (Use: 0 to 9)" 
        variant="outlined"   
        sx={{marginTop: 2}}
        value={firstNumber} 
        onChange={handleChangeFirst} 
      />
      <br /><br />
      <TextField 
        type='number' 
        id="outlined-basic" 
        label="Enter 2nd number (Use: 0 to 9)" 
        variant="outlined" 
        value={secondNumber} 
        onChange={handleChangeSecond} 
      />
      <br /><br />
    </>
  );
}

export default Calculator;
