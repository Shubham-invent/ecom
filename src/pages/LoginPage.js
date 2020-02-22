import { GoogleLogin, GoogleLogout } from "react-google-login";

import { CLIENT_ID } from "../constants/app-contants";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { authRoute } from "../routes";
import { getLoginUser } from "../actions/loginActions";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "react-google-login";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  loginCard: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25%"
  },
  loginText: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleAuth = responseGoogle => {
    if (responseGoogle.profileObj.googleId) {
      dispatch(getLoginUser(responseGoogle.profileObj));
      history.replace("/dashboard");
    }
  };

  return (
    <div>
      <p className={classes.loginText}>
        Login to Intuit Cart using Google Credentials
      </p>
      <div className={classes.loginCard}>
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={handleAuth}
          onFailure={handleAuth}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}
