import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  container: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4)
  },
  item: {
    justifyContent: "center",
    display: "flex"
  }
}));

export default function UserDetails() {
  const classes = useStyles();
  const userObj = useSelector(state => state.loginActionsReducer.payload);
  const [updateUser, setUpdateUser] = React.useState(
    userObj &&
      userObj.googleId &&
      localStorage.getItem(userObj.googleId + "_user")
      ? JSON.parse(localStorage.getItem(userObj.googleId + "_user"))
      : {}
  );
  const handleUpdate = (key, e) => {
    setUpdateUser({ ...updateUser, [key]: e.target.value });
  };
  const persistUpdatedData = () => {
    localStorage.setItem(
      userObj.googleId + "_user",
      JSON.stringify(updateUser)
    );
    toast.success("Successfully Updated");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12} sm={12} className={classes.item}>
            <TextField
              id="outlined-input1"
              label="First Name"
              type="text"
              variant="outlined"
              value={userObj.givenName}
              disabled
              fullwidth
            />
          </Grid>
          <Grid item md={4} xs={12} sm={12} className={classes.item}>
            <TextField
              id="outlined-input2"
              label="Last Name"
              type="text"
              variant="outlined"
              value={userObj.familyName}
              disabled
              fullwidth
            />
          </Grid>
          <Grid item md={4} xs={12} sm={12} className={classes.item}>
            <TextField
              id="Email"
              label="Email"
              type="text"
              variant="outlined"
              value={userObj.email}
              disabled
              fullwidth
            />
          </Grid>
          <Grid item md={4} xs={12} sm={12} className={classes.item}>
            <TextField
              id="Age"
              label="Age"
              type="number"
              variant="outlined"
              fullwidth
              value={updateUser.age}
              onChange={e => handleUpdate("age", e)}
            />
          </Grid>
          <Grid item md={4} xs={12} sm={12} className={classes.item}>
            <TextField
              id="Phone"
              label="Phone"
              type="text"
              variant="outlined"
              fullwidth
              value={updateUser.phone}
              onChange={e => handleUpdate("phone", e)}
            />
          </Grid>
          <Grid item md={4} xs={12} sm={12} className={classes.item}>
            <TextField
              id="Country"
              label="Country"
              type="text"
              variant="outlined"
              fullwidth
              value={updateUser.country}
              onChange={e => handleUpdate("country", e)}
            />
          </Grid>
          <Grid item md={21} xs={12} sm={12} className={classes.item}>
            <Button
              variant="contained"
              color="primary"
              onClick={persistUpdatedData}
            >
              Update Details
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
