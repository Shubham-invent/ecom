import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import React from "react";
import TodoPage from "../pages/TodoPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/todo">
          <TodoPage />
        </Route>
      </Switch>
    </Router>
  );
}
