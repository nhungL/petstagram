import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UnfoundPage from "../pages/UnfoundPage";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};
