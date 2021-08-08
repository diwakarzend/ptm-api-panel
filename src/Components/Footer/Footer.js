import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const { location } = props;
  if (location && location.pathname == "/") {
    return "";
  }
  return (
    <footer class="footer ptb-20">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="copy_right">
            <p>
              2019 © Dashboard Theme By
              <a href="#">Pay2Mobile</a>
            </p>
          </div>
          <a id="back-to-top" href="#">
            <i class="ion-android-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
