import Navbar from "../components/Navbar";
import React from "react";
import UserDetails from "../components/UserDetails";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DashboardPage() {
  const history = useHistory();
  const authObj = useSelector(state => state.loginActionsReducer.payload);

  if (!authObj || Object.keys(authObj) === 0) {
    history.replace("/");
  }

  return (
    <div>
      <Navbar />
      <UserDetails />
    </div>
  );
}
