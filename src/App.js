import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component, Fragment } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Routes from "./Router/Routes";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "metropolisregular", "sans-serif";
    }

    body {
        font-family: "Roboto", "sans-serif";
        font-weight: 400;
        color: #000;
        &.modal-open {
          overflow: hidden;
          height: 100%;
        }
    }

    h1,h2,h3,h4 {
        font-weight: 400;
    }
    h3{
      font-size: 12px;
      color: rgb(74,74,74);
      font-weight: 600;
      margin-bottom: 15px;
    }
    input,img,button {
        outline: none;
        font-family: "Roboto", "sans-serif";
    }
    .errorMsg {
        color: #d93025;
        font-size: 12px;
        display: flex;
        padding-top: 5px;
        align-items: center;
        &:before {
            content: "!";
            width: 14px;
            height: 14px;
            border-radius: 50%;
            color: #fff;
            background-color: #d93025;
            text-align: center;
            font-size: 10px;
            font-weight: 600;
            line-height: 14px;
            transform: translateY(-1px);
            margin-right: 5px;
        }
    }
    fieldset[disabled] {
        .select__control--is-disabled, 
        input[type='text'],
        textarea{
            background-color: rgba(0,0,0,0.04) !important;
        }
    }
    @font-face {
      font-family: 'metropolisbold';
      src: url('https://static.fabhotels.com/fonts/metropolis/metropolis-bold-webfont.woff2') format('woff2'),
           url('https://static.fabhotels.com/fonts/metropolis/metropolis-bold-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  
  }

  @font-face {
      font-family: 'metropolismedium';
      src: url('https://static.fabhotels.com/fonts/metropolis/metropolis-medium-webfont.woff2') format('woff2'),
           url('https://static.fabhotels.com/fonts/metropolis/metropolis-medium-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  
  }
  
  @font-face {
      font-family: 'metropolisregular';
      src: url('https://static.fabhotels.com/fonts/metropolis/metropolis-regular-webfont.woff2') format('woff2'),
           url('https://static.fabhotels.com/fonts/metropolis/metropolis-regular-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  
  }

  @font-face {
      font-family: 'metropolissemi_bold';
      src: url('https://static.fabhotels.com/fonts/metropolis/metropolis-semibold-webfont.woff2') format('woff2'),
           url('https://static.fabhotels.com/fonts/metropolis/metropolis-semibold-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  
  }
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(connect()(App));
