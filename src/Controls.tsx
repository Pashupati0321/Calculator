import { Button } from "@mui/material"
import React from "react"

interface Props {
  firstNumber: string
  secondNumber: string
  setTotalResult: (value: string) => void
  setInputLabel: (value: string) => void
  setFirstNumber: (value: string) => void
  setSecondNumber: (value: string) => void
}
const Controls: React.FC<Props> = ({
  firstNumber,
  secondNumber,
  setTotalResult,
  setInputLabel,
  setFirstNumber,
  setSecondNumber,
}) => {
  const validateInputs = () => {
    return firstNumber === "" || secondNumber === ""
  }

  //Add
  const add = () => {
    if (validateInputs()) {
      setInputLabel("***Please enter the blank field(s)")
      console.log(
        "Result Status: Addition clicked: Please enter the blank input field(s)"
      )
    } else {
      const result = parseInt(firstNumber) + parseInt(secondNumber)
      setTotalResult(result.toString())
      console.log("Result : Addition " + result)
    }
  }

  //Subtract
  const subtract = () => {
    if (validateInputs()) {
      setInputLabel("***Please enter the blank field(s)")
      console.log(
        "Result Status: Subtraction clicked : Please enter the blank input field(s)"
      )
    } else {
      const result = parseInt(firstNumber) - parseInt(secondNumber)
      setTotalResult(result.toString())
      console.log("Result : Subtraction : " + result)
    }
  }

  //Multiply
  const multiply = () => {
    if (validateInputs()) {
      setInputLabel("***Please enter the blank field(s)")
      console.log(
        "Result Status: Multiplication clicked : Please enter the blank input field(s)"
      )
    } else {
      const result = parseInt(firstNumber) * parseInt(secondNumber)
      setTotalResult(result.toString())
      console.log("Result : Multiplication : " + result)
    }
  }

  //Divide
  const divide = () => {
    if (validateInputs()) {
      setInputLabel("***Please enter the blank field(s)")
      console.log(
        "Result Status: Division clicked : Please enter the blank input field(s)"
      )
    } else {
      const result = parseInt(firstNumber) / parseInt(secondNumber)
      setTotalResult(result.toString())
      console.log("Result : Division : " + result)
    }
  }

  //Remainder
  const remainder = () => {
    if (validateInputs()) {
      setInputLabel("***Please enter the blank field(s)")
      console.log(
        "Result Status: Remainder clicked : Please enter the blank input field(s)"
      )
    } else {
      const result = parseInt(firstNumber) % parseInt(secondNumber)
      setTotalResult(result.toString())
      console.log("Result : Remainder :" + result)
    }
  }

  //Factorial
  const factorial = () => {
    if (firstNumber === "") {
      setInputLabel("***Please enter the blank field")
      console.log(
        "Result Status: Factorial clicked : Please enter the blank input field"
      )
    } else {
      let number = parseInt(firstNumber)
      if (number < 0) {
        setInputLabel("***Factorial of a negative number is undefined")
        console.log(
          "Result Status: Factorial clicked : Factorial of a negative number is undefined"
        )
      } else {
        let fact = 1
        for (let i = 1; i <= number; i++) {
          fact = fact * i
        }
        setTotalResult(fact.toString())
        console.log("Result : Factorial :" + fact)
      }
    }
  }

  //To check even or odd
  const toCheckEvenOdd = () => {
    if (firstNumber === "") {
      setInputLabel("***Please enter the blank field")
      console.log(
        "Result Status: Even/Odd clicked : Please enter the blank input field"
      )
    } else {
      let number = parseInt(firstNumber)
      {
        number % 2 === 0
          ? setInputLabel("'" + number + "' is Even")
          : setInputLabel("'" + number + "' is Odd")
      }
    }
  }

  //Clear
  const clear = () => {
    setFirstNumber("")
    setSecondNumber("")
    setTotalResult("")
    setInputLabel("")
    console.log("Fields Status : Clear clicked : All fields are cleared!!!")
  }

  return (
    <>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="primary"
        onClick={add}
      >
        +
      </Button>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="secondary"
        onClick={subtract}
      >
        -
      </Button>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="success"
        onClick={multiply}
      >
        *
      </Button>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="info"
        onClick={divide}
      >
        /
      </Button>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="warning"
        onClick={remainder}
      >
        %
      </Button>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="primary"
        onClick={factorial}
      >
        Factorial
      </Button>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="secondary"
        onClick={toCheckEvenOdd}
      >
        Even/Odd
      </Button>
      <Button
        sx={{ margin: 2, fontWeight: "bold" }}
        variant="contained"
        color="error"
        onClick={clear}
      >
        Clear
      </Button>
    </>
  )
}

export default Controls
