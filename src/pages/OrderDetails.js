import Navbar from "../components/Navbar";
import OrderItem from "../components/OrderItem";
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200
//     },
//     centerAlign: {
//       display: "flex",
//       paddingTop: theme.spacing(20),
//       justifyContent: "center"
//     }
//   }
// }));

export default function TodoPage() {
  // const classes = useStyles();
  const history = useHistory();
  const authObj = useSelector(state => state.loginActionsReducer.payload);
  const orderIdQueryParams =
    window.location &&
    window.location.search &&
    window.location.search.includes("=")
      ? window.location.search.split("=")[1]
      : "";
  if (!authObj || Object.keys(authObj) === 0) {
    history.replace("/");
  }
  const goBackToOrders = () => {
    history.push("/dashboard");
  };
  const navigateToNotesWithOrderId = orderId => {
    history.replace("todo?orderId=" + orderId);
  };
  const details = useSelector(state =>
    state.orderActionsReducer.payload.find(
      v => v.orderId === orderIdQueryParams
    )
  );
  console.log(details);
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          paddingTop: "100px",
          justifyContent: "center"
        }}
      >
        <OrderItem
          details={details ? details : {}}
          goBackToOrders={goBackToOrders}
          navigateToNotesWithOrderId={navigateToNotesWithOrderId}
        />
      </div>
    </div>
  );
}
