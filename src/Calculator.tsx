import { InputLabel, TextField } from "@mui/material"
import React from "react"

interface Props {
  firstNumber: string
  secondNumber: string
  setFirstNumber: (value: string) => void
  setSecondNumber: (value: string) => void
}
const Calculator: React.FC<Props> = ({
  firstNumber,
  secondNumber,
  setFirstNumber,
  setSecondNumber,
}) => {
  const handleChangeFirst = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("On change first")
    setFirstNumber(e.target.value as string)
  }

  const handleChangeSecond = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("On change second")
    setSecondNumber(e.target.value as string)
  }

  return (
    <>
      <InputLabel
        sx={{
          fontWeight: "bold",
          fontSize: 20,
          fontFamily: "unset",
          marginTop: -3,
          color: "black",
        }}
      >
        Calculator
      </InputLabel>
      <TextField
        type="number"
        id="outlined-basic"
        label="Enter 1st number (Use: 0 to 9)"
        variant="outlined"
        sx={{ marginTop: 2 }}
        value={firstNumber}
        onChange={handleChangeFirst}
      />
      <br />
      <br />
      <TextField
        type="number"
        id="outlined-basic"
        label="Enter 2nd number (Use: 0 to 9)"
        variant="outlined"
        value={secondNumber}
        onChange={handleChangeSecond}
      />
      <br />
      <br />
    </>
  )
}

export default Calculator
