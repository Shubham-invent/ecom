import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import { CLIENT_ID } from "../constants/app-contants";
import Divider from "@material-ui/core/Divider";
import { GoogleLogout } from "react-google-login";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";
import { Redirect } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
  const handleLogout = responseGoogle => {
    setIsRedirect(true);
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
          <ListItem button key={text}>
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleLogout}
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
