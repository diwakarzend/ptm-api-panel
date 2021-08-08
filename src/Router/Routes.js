import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DashBoard from "../Pages/DashBoard/DashBoard";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashBoard} exact />
      </Switch>
    </div>
  );
};

export default Routes;
