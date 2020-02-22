import { GoogleLogin, GoogleLogout } from "react-google-login";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "../components/ListItem";
import Navbar from "../components/Navbar";
import React from "react";
import TextField from "@material-ui/core/TextField";
import UserDetails from "../components/UserDetails";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { useGoogleLogin } from "react-google-login";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  container: {
    display: "flex",
    padding: theme.spacing(5)
  },
  item: {
    margin: theme.spacing(4)
  }
}));

export default function TodoPage() {
  const classes = useStyles();
  const history = useHistory();
  const authObj = useSelector(state => state.loginActionsReducer.payload);

  if (!authObj.googleId) {
    history.replace("/");
  }

  const [noteObj, setNoteObj] = React.useState({});
  const [noteArr, setNoteArr] = React.useState(
    localStorage.getItem(authObj.googleId + "_notes")
      ? JSON.parse(localStorage.getItem(authObj.googleId + "_notes"))
      : []
  );
  console.log("noteArr", noteArr);

  const handleText = (key, e) => {
    setNoteObj({ ...noteObj, [key]: e.target.value });
  };
  const persistNotes = () => {
    let temp = noteArr;
    temp.push(noteObj);
    setNoteArr([...temp]);
    console.log(noteArr);
    localStorage.setItem(authObj.googleId + "_notes", JSON.stringify(noteArr));
    toast.success("Successfully Updated");
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={5} className={classes.container}>
        <Grid md={12} xs={12} sm={12} spacing={5} item>
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            fullWidth
            onChange={e => handleText("title", e)}
          />
        </Grid>

        <Grid md={12} xs={12} sm={12} spacing={5} item>
          <TextField
            id="outlined-basic"
            label="Content"
            variant="outlined"
            fullWidth
            onChange={e => handleText("text", e)}
          />
        </Grid>
        <Grid md={12} xs={12} sm={12} spacing={5} item>
          <Button variant="contained" color="primary" onClick={persistNotes}>
            Save Notes
          </Button>
        </Grid>
      </Grid>
      <br />

      {noteArr.map(value => {
        return <ListItem title={value.title} text={value.text} />;
      })}
    </div>
  );
}
