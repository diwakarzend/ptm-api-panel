import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Company from "../Pages/Company/Company";
import Users from "../Pages/Users/Users";
import UPI from "../Pages/UPI/UPI";
import AddMoney from "../Pages/AddMoney/AddMoney";
import FundRequest from "../Pages/FundRequest/FundRequest";
import BeneficiaryLoadable from "../Pages/Benificiary/BeneficiaryLoadable";

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashBoard} exact />
        {/*   <PrivateRoute path="/company" component={Company} exact />    */}
        <PrivateRoute path="/upi" component={UPI} exact />
        <PrivateRoute path="/add/money" component={AddMoney} exact />
        <PrivateRoute path="/users" component={Users} exact />
        <PrivateRoute path="/fund/request" component={FundRequest} exact />
        <PrivateRoute
          path="/beneficiary"
          component={BeneficiaryLoadable}
          exact
        />
      </Switch>
    </div>
  );
};

export default Routes;
