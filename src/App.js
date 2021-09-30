import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
//  import "./assests/css/style.css";
//  import "./assests/css/themify-icons.css";
//  import "./assests/css/jquery.mCustomScrollbar.css";
//   import "./assests/css/simple-line-icons.css";
//   import "./assests/css/ionicons.css";

//import "../public/css/style.css";
import React, { Component, Fragment } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Routes from "./Router/Routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header {...this.props} />
        <Routes />
        <Footer {...this.props} />
      </Fragment>
    );
  }
}

export default withRouter(connect()(App));
