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
    justifyContent: "center",
    padding: theme.spacing(5)
  }
}));

export default function DashboardPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    // setPage(value);

    dispatch(getOrderPage(value));
  };

  let orders = useSelector(state => state.orderActionsReducer);

  const authObj = useSelector(state => state.loginActionsReducer.payload);

  const [searchVal, setSearchVal] = React.useState("");
  const [ordersState, setOrdersState] = React.useState([]);

  //console.log("orders", orders);

  if (!authObj || !authObj.googleId) {
    history.replace("/");
  }
  useEffect(() => {
    console.log("orders changed", orders);
    console.log("searchVal changed", searchVal);
    setOrdersState(orders);
    handleSearch(searchVal);
  }, [orders, searchVal]);

  const handleSearch = searchVal => {
    let toBeSearched = String(searchVal);
    let toBeFilteredArr = Object.assign({}, orders);
    toBeFilteredArr.payload = toBeFilteredArr.payload.filter(value => {
      return (
        value.title.includes(toBeSearched) ||
        value.price.toString().includes(toBeSearched) ||
        value.seller.includes(toBeSearched) ||
        value.date.includes(toBeSearched)
      );
    });

    setOrdersState(toBeFilteredArr);

    if (searchVal === "") {
      console.log("searchval empty", searchVal);
      console.log("orders", orders);

      setOrdersState(orders);
    }
  };
  console.log("ordersState", ordersState);
  return (
    <div>
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal} />
      <Grid container spacing={3} className={classes.body}>
        {ordersState &&
          ordersState.payload &&
          ordersState.payload.map((obj, index) => {
            return (
              ordersState.page * 6 > index && (
                <Grid item xs={12} md={4} sm={12} className={classes.cardItem}>
                  <CardItem details={obj} />
                </Grid>
              )
            );
          })}
      </Grid>
      <Grid container spacing={3} className={classes.paginationComponent}>
        <Pagination
          count={
            ordersState && ordersState.payload
              ? Math.ceil(ordersState.payload.length / 6)
              : 1
          }
          page={ordersState.page}
          onChange={handleChange}
        />
      </Grid>
    </div>
  );
}
