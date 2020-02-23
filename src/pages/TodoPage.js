import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "../components/ListItem";
import Navbar from "../components/Navbar";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  containerMain: {
    display: "flex",
    padding: theme.spacing(5),
    paddingTop: theme.spacing(10)
  },
  item: {
    margin: theme.spacing(4)
  }
}));

export default function TodoPage() {
  const classes = useStyles();
  const history = useHistory();
  const authObj = useSelector(state => state.loginActionsReducer.payload);

  if (!authObj || Object.keys(authObj) === 0) {
    history.replace("/");
  }

  const [noteObj, setNoteObj] = React.useState({});
  const [noteArr, setNoteArr] = React.useState(
    authObj &&
      authObj.googleId &&
      localStorage.getItem(authObj.googleId + "_notes")
      ? JSON.parse(localStorage.getItem(authObj.googleId + "_notes"))
      : []
  );

  const handleText = (key, e) => {
    setNoteObj({ ...noteObj, [key]: e.target.value });
  };
  const persistNotes = () => {
    let temp = noteArr;
    temp.push(noteObj);
    setNoteArr([...temp]);
    localStorage.setItem(authObj.googleId + "_notes", JSON.stringify(noteArr));
    toast.success("Successfully Updated");
    setNoteObj({});
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={5} className={classes.containerMain}>
        <Grid md={12} xs={12} sm={12} item>
          <TextField
            id="outlined-basic1"
            label="Subject"
            variant="outlined"
            fullWidth
            value={noteObj["title"] || ""}
            onChange={e => handleText("title", e)}
          />
        </Grid>

        <Grid md={12} xs={12} sm={12} item>
          <TextField
            id="outlined-basic2"
            label="Content"
            variant="outlined"
            fullWidth
            value={noteObj["text"] || ""}
            onChange={e => handleText("text", e)}
          />
        </Grid>
        <Grid md={12} xs={12} sm={12} item>
          <Button variant="contained" color="primary" onClick={persistNotes}>
            Save Notes
          </Button>
        </Grid>
      </Grid>
      <br />

      {noteArr.map((value, index) => {
        return <ListItem title={value.title} text={value.text} key={index} />;
      })}
    </div>
  );
}
