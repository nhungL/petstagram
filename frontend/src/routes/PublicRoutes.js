import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import UnfoundPagePublicRoutes from "../pages/UnfoundPagePublicRoutes";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route path="/signin" exact component={LoginPage} />
      <Route path="/" exact component={LoginPage} />
      <Route component={UnfoundPagePublicRoutes} />
    </Switch>
  );
};
