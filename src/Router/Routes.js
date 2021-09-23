import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Users from "../Pages/Users/Users";
import UPI from "../Pages/UPI/UPI";
import AddMoney from "../Pages/AddMoney/AddMoney";
import FundRequest from "../Pages/FundRequest/FundRequest";
import BeneficiaryLoadable from "../Pages/Benificiary/BeneficiaryLoadable";
import Reports from "../Pages/Payout/Reports";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashBoard} exact />
        <PrivateRoute path="/upi" component={UPI} exact />
        <PrivateRoute path="/add/money" component={AddMoney} exact />
        <PrivateRoute path="/users" component={Users} exact />
        <PrivateRoute path="/fund/request" component={FundRequest} exact />
        <PrivateRoute
          path="/beneficiary"
          component={BeneficiaryLoadable}
          exact
        />
        <PrivateRoute path="/payout/reports" component={Reports} exact />
      </Switch>
    </div>
  );
};

export default Routes;
