import React from "react";
import { Route, Redirect } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";
import { isAuthenticated } from "../utils/common";

const PrivateRoute = ({ component: Component, ...rest }) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? 
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          <Component {...props} />
        </div>
      </div>
       
      : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
