import React, { useEffect } from "react";
import { getOrderPage, getOrderPayload } from "../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";

import CardItem from "../components/CardItem";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Navbar from "../components/Navbar";
import Pagination from "@material-ui/lab/Pagination";
import Select from "@material-ui/core/Select";
import ViewDetails from "../components/ViewDetails";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  body: {
    padding: theme.spacing(5),
    paddingTop: theme.spacing(5),
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
  },
  select: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(10)
  },
  sortBy: {
    display: "flex",
    minWidth: theme.spacing(25)
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
  if (!authObj || Object.keys(authObj) === 0) {
    history.replace("/");
  }

  const [searchVal, setSearchVal] = React.useState("");
  const [ordersState, setOrdersState] = React.useState([]);
  const [sortBy, setSortBy] = React.useState("");

  const handleSort = () => {
    dispatch(getOrderPage(1));
    setSearchVal("");
    let toBeSortedArr = Object.assign({}, orders);
    toBeSortedArr.payload = toBeSortedArr.payload.sort((valueA, valueB) => {
      if (typeof valueA[sortBy] === "number") {
        return valueA[sortBy] - valueB[sortBy];
      } else if (sortBy === "date") {
        return (
          moment(valueA[sortBy], "DD/MM/YYYY").toDate() -
          moment(valueB[sortBy], "DD/MM/YYYY").toDate()
        );
      } else {
        let valA = valueA && valueA[sortBy] ? valueA[sortBy].toUpperCase() : "";
        let valB = valueB && valueB[sortBy] ? valueB[sortBy].toUpperCase() : "";
        if (valA < valB) {
          return -1;
        }
        if (valA > valB) {
          return 1;
        }

        return 0;
      }
    });
    setOrdersState(toBeSortedArr);
  };

  const handleSearch = searchVal => {
    let toBeSearched = String(searchVal).toLowerCase();
    let toBeFilteredArr = Object.assign({}, orders);
    toBeFilteredArr.payload = toBeFilteredArr.payload.filter(value => {
      return (
        value.title.toLowerCase().includes(toBeSearched) ||
        value.price
          .toString()
          .toLowerCase()
          .includes(toBeSearched) ||
        value.seller.toLowerCase().includes(toBeSearched) ||
        value.date.toLowerCase().includes(toBeSearched)
      );
    });

    setOrdersState(toBeFilteredArr);

    if (searchVal === "") {
      setOrdersState(orders);
    }
  };
  const [viewDetailsVisibility, handleViewDetailsVisibility] = React.useState(
    false
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [addressUpdated, updateAddressLocal] = React.useState("");

  const updateAddressStore = () => {
    ordersState.payload[selectedIndex].address = addressUpdated;
    toast.success("Successfully Updated");
    dispatch(getOrderPayload(ordersState.payload));
  };

  useEffect(() => {
    setOrdersState(orders);
    handleSearch(searchVal);
    updateAddressLocal(
      selectedIndex >= 0 &&
        orders &&
        orders[selectedIndex] &&
        orders[selectedIndex].address
    );
  }, [orders, searchVal, selectedIndex]);
  useEffect(() => {
    handleSort();
  }, [sortBy]);

  return (
    <div>
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal} />
      <ViewDetails
        viewDetailsVisibility={viewDetailsVisibility}
        handleViewDetailsVisibility={handleViewDetailsVisibility}
        selectedIndex={selectedIndex}
        orders={ordersState.payload}
        updateAddressLocal={updateAddressLocal}
        updateAddressStore={updateAddressStore}
        addressUpdated={
          addressUpdated
            ? addressUpdated
            : selectedIndex >= 0 &&
              ordersState &&
              ordersState.payload &&
              ordersState.payload[selectedIndex] &&
              ordersState.payload[selectedIndex].address
        }
      />
      <Grid container className={classes.select}>
        <FormControl variant="filled" className={classes.sortBy}>
          <InputLabel>Sort By</InputLabel>
          <Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"price"}>Price</MenuItem>
            <MenuItem value={"seller"}>Seller</MenuItem>
            <MenuItem value={"date"}>Date</MenuItem>
            <MenuItem value={"rating"}>Rating</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container spacing={3} className={classes.body}>
        {ordersState &&
          ordersState.payload &&
          ordersState.payload.map((obj, index) => {
            return (
              ordersState.page * 6 > index && (
                <Grid
                  item
                  xs={12}
                  md={4}
                  sm={12}
                  className={classes.cardItem}
                  key={index}
                >
                  <CardItem
                    details={obj}
                    setSelectedIndex={setSelectedIndex}
                    index={index}
                    handleViewDetailsVisibility={handleViewDetailsVisibility}
                  />
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
          page={orders.page}
          onChange={handleChange}
        />
      </Grid>
    </div>
  );
}
