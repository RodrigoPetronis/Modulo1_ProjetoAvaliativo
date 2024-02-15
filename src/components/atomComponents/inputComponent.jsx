import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Input({ id,rows ,label, variant}) {
  return (

      <TextField
        id={id}
        label={label}
        multiline
        rows={rows}
        variant={variant}
      />
  );
}
