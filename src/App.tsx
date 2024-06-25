import { Box } from "@mui/material"
import { useState } from "react"
import "./App.css"
import Calculator from "./Calculator"
import Controls from "./Controls"
import Display from "./Display"

function App() {
  const [firstNumber, setFirstNumber] = useState<string>("")
  const [secondNumber, setSecondNumber] = useState<string>("")
  const [totalResult, setTotalResult] = useState<string>("")
  const [inputLabel, setInputLabel] = useState<string>("")
  const [heading, setHeading] = useState<string>("")

  const updateFirstNumber = (value: string) => {
    setFirstNumber(value)
  }

  const updateSecondNumber = (value: string) => {
    setSecondNumber(value)
  }

  return (
    <Box
      className="App"
      sx={{
        width: 500,
        textAlign: "center",
        height: 590,
        margin: 10,
        marginRight: 10,
        backgroundColor: "lightblue",
        boxShadow:
          "5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <hr />
      <br />
      <Box className="inputOutputDiv" sx={{ margin: 2 }}>
        <Calculator
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          setFirstNumber={updateFirstNumber}
          setSecondNumber={updateSecondNumber}
        />
        <Display totalResult={totalResult} inputLabel={inputLabel} />
      </Box>
      <br />
      <br />
      <Box className="buttonDiv" sx={{ margin: 2 }}>
        <Controls
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          setTotalResult={setTotalResult}
          setInputLabel={setInputLabel}
          setFirstNumber={updateFirstNumber}
          setSecondNumber={updateSecondNumber}
        />
        <br />
        <br />
        <hr />
      </Box>
    </Box>
  )
}

export default App
