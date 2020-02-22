import { GoogleLogin, GoogleLogout } from "react-google-login";

import CardItem from "../components/CardItem";
import Navbar from "../components/Navbar";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
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
  }
}));

export default function DashboardPage() {
  const classes = useStyles();
  const history = useHistory();
  const authObj = useSelector(state => state.loginActionsReducer.payload);
  console.log(authObj);
  if (!authObj.googleId) {
    history.replace("/");
  }

  return (
    <div>
      <Navbar />
      <CardItem />
    </div>
  );
}
