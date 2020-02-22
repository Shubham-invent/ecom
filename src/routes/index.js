import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import React from "react";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}
