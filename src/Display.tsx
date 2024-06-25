import { InputLabel, TextField } from "@mui/material"
import React from "react"

interface Props {
  totalResult: string
  inputLabel: string
}
const Display: React.FC<Props> = ({ totalResult, inputLabel }) => {
  return (
    <>
      <TextField
        type="text"
        variant="outlined"
        value={totalResult}
        label="Your Result here"
        InputProps={{
          readOnly: true,
        }}
        sx={{ margin: 1 }}
      />
      <InputLabel
        sx={{
          fontWeight: "bold",
          fontFamily: "unset",
          marginTop: 2,
          marginBottom: -4,
          color: "error.main",
        }}
      >
        {inputLabel}
      </InputLabel>
    </>
  )
}

export default Display
