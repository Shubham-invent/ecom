import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useEffect } from "react";
import {
  getOrderItemsSystem1,
  getOrderItemsSystem2,
  getOrderPage
} from "../actions/orderActions";

import CardItem from "../components/CardItem";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Pagination from "@material-ui/lab/Pagination";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "react-google-login";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  body: {
    padding: theme.spacing(5),
    paddingTop: theme.spacing(15),
    margin: "auto"
  },
  cardItem: {
    display: "flex",
    justifyContent: "center"
  },
  paginationComponent: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function DashboardPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderItemsSystem1());
    dispatch(getOrderItemsSystem2());
  }, [getOrderItemsSystem1, getOrderItemsSystem2]);
  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    // setPage(value);

    dispatch(getOrderPage(value));
  };

  const orders = useSelector(state => state.orderActionsReducer);
  const authObj = useSelector(state => state.loginActionsReducer.payload);
  //console.log("orders", orders);

  if (!authObj || !authObj.googleId) {
    history.replace("/");
  }

  return (
    <div>
      <Navbar />
      <Grid container spacing={3} className={classes.body}>
        {orders.payload.map((obj, index) => {
          return (
            orders.page * 6 > index && (
              <Grid item xs={12} md={4} sm={12} className={classes.cardItem}>
                <CardItem details={obj} />
              </Grid>
            )
          );
        })}
      </Grid>
      <Grid container spacing={3} className={classes.paginationComponent}>
        <Pagination
          count={Math.ceil(orders.payload.length / 6)}
          page={orders.page}
          onChange={handleChange}
        />
      </Grid>
    </div>
  );
}
