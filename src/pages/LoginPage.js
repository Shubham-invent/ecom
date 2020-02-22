import { GoogleLogin, GoogleLogout } from "react-google-login";

import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useGoogleLogin } from "react-google-login";
import { useGoogleLogout } from "react-google-login";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const CLIENT_ID =
  "488178903011-shb3fcpuj4b14hn3j4gkuh3ss4ifjdfv.apps.googleusercontent.com";

export default function FormPropsTextFields() {
  const classes = useStyles();
  const handleAuth = responseGoogle => {
    console.log(responseGoogle);
  };
  const handleLogout = responseGoogle => {
    console.log(responseGoogle);
  };
  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={handleAuth}
        onFailure={handleAuth}
        cookiePolicy={"single_host_origin"}
      />

      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      ></GoogleLogout>
    </div>
  );
}
