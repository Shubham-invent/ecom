import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: "auto"
  },
  inline: {
    display: "inline"
  }
}));

export default function ListItemComponent({
  title,
  text,
  noteMapped,
  navigateToOrderDetails
}) {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={title} />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                ></Typography>
                {text}
              </React.Fragment>
            }
          />
          {noteMapped && noteMapped !== "none" ? (
            <Button onClick={() => navigateToOrderDetails(noteMapped)}>
              Go to Order of OrderId:{noteMapped}
            </Button>
          ) : (
            ""
          )}
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
}
