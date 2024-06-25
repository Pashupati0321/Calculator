import './App.css';
import { useState } from 'react';
import { Box} from '@mui/material';
import Calculator from './Calculator';
import Display from './Display';
import Controls from './Controls';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [totalResult, setTotalResult] = useState('');
  const [inputLabel, setInputLabel] = useState('');
  const [heading, setHeading] = useState('');


  return (
    <Box className="App" sx={{
      width: 500,
      textAlign:'center',
      height: 590,
      margin: 10,
      marginRight: 10,
      backgroundColor: 'lightblue',
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <hr />
      <br />
      <Box className='inputOutputDiv' sx={{ margin: 2 }} variant="contained">
      
        <Calculator 
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          heading={heading}
          setFirstNumber={setFirstNumber}
          setSecondNumber={setSecondNumber}
          setHeading={setHeading}
        />
        <Display 
          totalResult={totalResult}
          inputLabel={inputLabel}
        />
      </Box>
      <br /><br />
      <Box className='buttonDiv' sx={{ margin: 2 }} variant="contained">
        <Controls 
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          setTotalResult={setTotalResult}
          setInputLabel={setInputLabel}
          setFirstNumber={setFirstNumber}
          setSecondNumber={setSecondNumber}
        />
        <br /><br />
        <hr />
      </Box>
    </Box>
  );
}

export default App;
