import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const { location } = props;
  if (location && location.pathname == "/") {
    return "";
  }
  return (
    <footer className="footer ptb-20">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="copy_right">
            <p>
              2019 © Dashboard Theme By
              <a href="#">Pay2Mobile</a>
            </p>
          </div>
          <a id="back-to-top" href="#">
            <i className="ion-android-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
