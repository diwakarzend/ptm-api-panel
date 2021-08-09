import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Company from "../Pages/Company/Company";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashBoard} exact />
        <PrivateRoute path="/company" component={Company} exact />
      </Switch>
    </div>
  );
};

export default Routes;
