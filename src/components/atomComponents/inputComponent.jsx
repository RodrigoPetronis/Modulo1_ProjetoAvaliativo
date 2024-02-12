import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ name, height, rows }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        height: { height },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-multiline-static"
        label={name}
        multiline
        rows={rows}
        variant="filled"
      />
    </Box>
  );
}
