import {
  getOrderItemsSystem1,
  getOrderItemsSystem2
} from "../actions/orderActions";

import { CLIENT_ID } from "../constants/app-contants";
import { GoogleLogin } from "react-google-login";
import React from "react";
import { getLoginUser } from "../actions/loginActions";
import { getSideMenu } from "../actions/sideMenuActions";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
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
      dispatch(getSideMenu());
      dispatch(getLoginUser(responseGoogle.profileObj));

      dispatch(getOrderItemsSystem1());
      dispatch(getOrderItemsSystem2());

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
