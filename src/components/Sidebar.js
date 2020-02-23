import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { CLIENT_ID } from "../constants/app-contants";
import Divider from "@material-ui/core/Divider";
import { GoogleLogout } from "react-google-login";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { logOut } from "../actions/loginActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function Sidebar({
  sidebarVisibility,
  handleSidebarVisibility
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleLogout = responseGoogle => {
    setIsRedirect(true);
    setTimeout(() => dispatch(logOut()));
  };
  const history = useHistory();
  const [isRedirect, setIsRedirect] = React.useState(false);

  const sideMenuItems = useSelector(
    state => state.sideMenuActionsReducer.payload
  );

  const sideList = () => (
    <div className={classes.list} role="presentation">
      <List>
        {sideMenuItems.map((item, index) => (
          <ListItem button key={index} onClick={() => history.push(item.route)}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Logout"].map((text, index) => (
          <ListItem button key={text} onClick={handleLogout}>
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={() => {}}
            ></GoogleLogout>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      {isRedirect ? <Redirect to="/" push={false} /> : ""}
      <SwipeableDrawer
        open={sidebarVisibility}
        onClose={() => handleSidebarVisibility(false)}
        onOpen={() => handleSidebarVisibility(true)}
      >
        {sideMenuItems && sideList()}
      </SwipeableDrawer>
    </div>
  );
}
