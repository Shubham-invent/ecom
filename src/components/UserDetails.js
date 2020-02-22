import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-password-input"
          label="Name"
          type="text"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField id="Age" label="Age" type="number" variant="outlined" />
        <TextField
          id="Dob"
          label="Date of Birth"
          type="text"
          variant="outlined"
        />
        <TextField id="Phone" label="Phone" type="text" variant="outlined" />
        <TextField id="Email" label="Email" type="text" variant="outlined" />
        <TextField
          id="Timezone"
          label="Timezone"
          type="text"
          variant="outlined"
        />
      </div>
    </form>
  );
}
