import React, { useEffect } from "react";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import ListItem from "../components/ListItem";
import MenuItem from "@material-ui/core/MenuItem";
import Navbar from "../components/Navbar";
import Select from "@material-ui/core/Select";
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
  },
  mapBy: {
    display: "flex",
    minWidth: theme.spacing(25)
  },
  menu: {
    display: "flex"
  }
}));

export default function TodoPage() {
  const classes = useStyles();
  const history = useHistory();
  const authObj = useSelector(state => state.loginActionsReducer.payload);
  const orderIdQueryParams =
    window.location &&
    window.location.search &&
    window.location.search.includes("=")
      ? window.location.search.split("=")[1]
      : "";

  if (!authObj || Object.keys(authObj) === 0) {
    history.replace("/");
  }

  const [noteObj, setNoteObj] = React.useState({});
  const [selectedMappedOrder, setSelectedMappedOrder] = React.useState("none");

  const [noteArr, setNoteArr] = React.useState([]);
  useEffect(() => {
    if (orderIdQueryParams) {
      let noteArrCopy =
        authObj &&
        authObj.googleId &&
        localStorage.getItem(authObj.googleId + "_notes")
          ? JSON.parse(localStorage.getItem(authObj.googleId + "_notes"))
          : [];
      let noteArrCopyFiltered = noteArrCopy.filter(
        v => v.noteMapped === orderIdQueryParams
      );
      console.log("noteArrCopyFiltered", noteArrCopyFiltered);
      setNoteArr(noteArrCopyFiltered);
    } else {
      let noteArrCopy =
        authObj &&
        authObj.googleId &&
        localStorage.getItem(authObj.googleId + "_notes")
          ? JSON.parse(localStorage.getItem(authObj.googleId + "_notes"))
          : [];
      setNoteArr(noteArrCopy);
    }
  }, [setNoteArr]);

  const handleText = (key, e) => {
    setNoteObj({ ...noteObj, [key]: e.target.value });
  };
  const persistNotes = () => {
    if (noteObj.title === "" || noteObj.text === "") {
      toast.error("Enter Title and/or Text");
      return;
    }
    let temp = noteArr;
    if (selectedMappedOrder) {
      noteObj.noteMapped = selectedMappedOrder;
    }
    temp.push(noteObj);
    setNoteArr([...temp]);
    localStorage.setItem(authObj.googleId + "_notes", JSON.stringify(noteArr));
    toast.success("Successfully Updated");
    setNoteObj({});
    if (orderIdQueryParams) {
      history.push("/todo");
    }
  };
  const orders = useSelector(state => state.orderActionsReducer.payload);
  console.log(orders);
  const navigateToOrderDetails = orderId => {
    history.push("/orderdetails?orderId=" + orderId);
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

        <Grid md={12} xs={12} sm={12} item fullWidth>
          <FormControl variant="filled" className={classes.mapBy}>
            <InputLabel>Map Order</InputLabel>
            <Select
              value={selectedMappedOrder.orderId}
              onChange={e => setSelectedMappedOrder(e.target.value)}
            >
              <MenuItem value={"none"}>None</MenuItem>
              {orders &&
                orders.length >= 1 &&
                orders.map((item, index) => {
                  return (
                    <MenuItem value={item.orderId} className={classes.menu}>
                      <p>Order ID : {item.orderId}&nbsp;</p>
                      <p>Title : {item.title}</p>
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
        <Grid md={12} xs={12} sm={12} item>
          <Button variant="contained" color="primary" onClick={persistNotes}>
            Save Notes
          </Button>
        </Grid>
      </Grid>
      <br />

      {noteArr.map((value, index) => {
        return (
          <ListItem
            title={value.title}
            text={value.text}
            key={index}
            noteMapped={value.noteMapped}
            navigateToOrderDetails={navigateToOrderDetails}
          />
        );
      })}
    </div>
  );
}
