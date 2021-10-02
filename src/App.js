import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//  import "./assests/css/style.css";
//  import "./assests/css/themify-icons.css";
//  import "./assests/css/jquery.mCustomScrollbar.css";
//   import "./assests/css/simple-line-icons.css";
//   import "./assests/css/ionicons.css";

//import "../public/css/style.css";
import React, { Component, Fragment, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAuthToken } from "./utils/common";
import { fetchUserDetailsIfNeeded, updateLoginStatus } from "./actions/Login";

import Routes from "./Router/Routes";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (getAuthToken()) {
      dispatch(fetchUserDetailsIfNeeded());
      dispatch(updateLoginStatus(true));
    }
  }
  componentDidUpdate(prevProps, PrevState) {
    const { login, dispatch } = this.props;
    const prevLogedIn =
      prevProps && prevProps.login && prevProps.login.isLoggedIn;
    if (login.isLoggedIn && login.isLoggedIn !== prevLogedIn) {
      dispatch(fetchUserDetailsIfNeeded());
    }

    console.log("App's Didupdate Called");
  }

  render() {
    console.log(this.props);
    const { login } = this.props;
    const permissions = login && login.userData && login.userData.apiPermission;

    console.log("permissions", permissions);

    if (login.isLoggedIn && permissions && permissions.length == 0) {
      return (
        <div className="app-container">
          <Header {...this.props} />
          <div className="no-access">
            <h1>
              You are not authorize to access this page, please contact to site
              Administrator
            </h1>
          </div>
          <Footer {...this.props} />
        </div>
      );
    }

    return (
      <div className="app-container">
        <Header {...this.props} />
        <Routes />
        <Footer {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default withRouter(connect(mapStateToProps)(App));
