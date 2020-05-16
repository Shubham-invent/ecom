import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { CLIENT_ID } from "../constants/app-contants";
import FormControl from "@material-ui/core/FormControl";
import { GoogleLogin } from "react-google-login";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { getLoginUser } from "../actions/loginActions";
import { getOrderItemsSystem1 } from "../actions/orderActions";
import { getSideMenu } from "../actions/sideMenuActions";
import { makeStyles } from "@material-ui/core/styles";
import mapbox from "mapbox-gl/dist/mapbox-gl.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2h1YmhhbTQ0MiIsImEiOiJjazlpZm8wNDQwMm5xM2Rtc2R4ZnV6MnA4In0.8grx_Rx_110MmsTV_AaqCA";

const useStyles = makeStyles((theme) => ({
  loginCard: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25%",
  },
  loginText: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  setTimeout(() => {
    var map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/light-v10",
      zoom: 2,
    });
  }, 0);

  return (
    <div>
      <AppBar
        position="static"
        className="appbar"
        style={{ display: "flex", flexDirection: "row" }}
        color="white"
      >
        <Typography variant="h6" color="inherit" className="login-title">
          Developers
        </Typography>
        <Typography variant="h6" color="inherit" className="login-other">
          YOU ARE NOT LOGGED IN
        </Typography>
      </AppBar>
      <div className="div-padding-normal">
        <div>
          <text className="login-world-text">
            WORLD OF OPENSOURCE DEVELOPERS
          </text>
          <text className="login-github-text">Github on the map</text>
        </div>
        <div>
          <TextField
            className="login-search"
            id="input-with-icon-textfield"
            label=" "
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start" className="login-icon">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <div className="div-padding-normal" style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Button
            variant="contained"
            color="primary"
            className="login-developer-btn"
          >
            I am A developer
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="login-developer-btn-inactive "
          >
            <text style={{ color: "#333333" }}> I am hiring</text>
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button
            variant="contained"
            color="primary"
            className="login-selected"
          >
            <text style={{ color: "#4F4F4F" }}> Developer density </text>
          </Button>

          <Select
            value={10}
            onChange={() => {}}
            className="login-select login-select-text"
            style={{ minWidth: "300px" }}
          >
            <MenuItem value={10}>PROGRAMMING LANGUAGE</MenuItem>
          </Select>

          <Select
            value={10}
            onChange={() => {}}
            className="login-select login-select-text"
            style={{ minWidth: "200px" }}
          >
            <MenuItem value={10}>WORLDWIDE</MenuItem>
          </Select>
        </div>
      </div>
      <div className="div-padding-normal">
        <div
          id="mapbox"
          style={{ position: "absolute", width: "100%", minHeight: "500px" }}
        />
      </div>
    </div>
  );
}
