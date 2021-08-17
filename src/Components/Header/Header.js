import React, { useState } from "react";
import "../../../public/css/style.css";
import "./Header.css";
const user3Img = require("../../../public/images/userimg.png");
//import user3Img from "../../../public/images/userimg.png";

const Header = (props) => {
  const { location } = props;
  const [statusQRICon, toggleQRIcon] = useState(false);
  const [statusNotICon, toggleNotificationIcon] = useState(false);

  if (location && location.pathname == "/") {
    return "";
  }

  function clickHambergerHandler() {
    if (document.body.classList.value != "nav_small") {
      document.body.classList.add("nav_small");
    } else {
      document.body.classList.remove("nav_small");
    }
  }

  // function toggleQRIcon() {
  //   document.querySelector("#popup-qrcode").classList.add("show");
  //   document.querySelector("#popup-qrcode ul").classList.add("show");
  // }

  // function toggleNotificationIcon() {
  //   document.querySelector("#popup-qrcode").classList.add("show");
  //   document.querySelector("#popup-qrcode ul").classList.add("show");
  // }

  console.log("sss", user3Img);

  return (
    <div className="header-bg">
      <header className="main-header">
        <div className="container_header phone_view border_top_bott">
          <div className="row">
            <div className="col-md-12">
              <div className="logo d-flex align-items-center">
                <a href="#">
                  <strong className="logo_icon">
                    <img
                      src="http://0.0.0.0:3008/images/small-logo.png"
                      alt=""
                    />
                  </strong>
                  <span className="logo-default">
                    <img src="http://0.0.0.0:3008/images/logo.png" alt="" />
                  </span>
                </a>
                <div className="icon_menu" onClick={clickHambergerHandler}>
                  <a
                    href="javascript:void(0);"
                    className="menu-toggler sidebar-toggler"
                  ></a>
                </div>
              </div>

              <div className="right_detail d-flex justify-content-end">
                <div className="row full_width">
                  <div className="col-xl-12 col-12 d-flex justify-content-end">
                    <div className="right_bar_top d-flex align-items-center justify-content-md-between justify-content-end">
                      <div className="search">
                        <div className="wallet-icon">
                          <i className="icon-wallet"></i> ₹ 131
                        </div>
                      </div>

                      <div className="align_end">
                        {/* notification_Start */}

                        <div
                          className={`dropdown dropdown-notification${
                            statusQRICon ? " show" : ""
                          }`}
                          id="popup-qrcode"
                        >
                          <a
                            href="javascript:;"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            data-hover="dropdown"
                            data-close-others="true"
                            aria-expanded="false"
                            onClick={() => {
                              toggleQRIcon(!statusQRICon);
                              toggleNotificationIcon(false);
                            }}
                          >
                            QR
                            <i className="fa fa-qrcode" aria-hidden="true"></i>
                          </a>
                          <ul
                            className={`dropdown-menu scroll_auto height_fixed mCustomScrollbar _mCS_1 mCS_no_scrollbar${
                              statusQRICon ? " show" : ""
                            }`}
                          >
                            <div
                              id="mCSB_1"
                              className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                              style={{ "max-height": "none" }}
                              tabindex="0"
                            >
                              <div
                                id="mCSB_1_container"
                                className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                style={{
                                  position: "relative",
                                  top: 0,
                                  left: 0,
                                }}
                                dir="ltr"
                              >
                                <li className="bigger">
                                  <h3>
                                    <span className="bold">Scan QR Code</span>
                                  </h3>
                                </li>
                                <li className="qr-code">
                                  <img
                                    src="http://0.0.0.0:3008/images/qr-code.png"
                                    alt="qr-code"
                                    className="mCS_img_loaded"
                                  />
                                </li>
                              </div>
                              <div
                                id="mCSB_1_scrollbar_vertical"
                                className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                                style={{ display: "none" }}
                              >
                                <div className="mCSB_draggerContainer">
                                  <div
                                    id="mCSB_1_dragger_vertical"
                                    className="mCSB_dragger"
                                    style={{
                                      position: "absolute",
                                      "min-height": "30px",
                                      height: "0px",
                                      top: "0px",
                                    }}
                                  >
                                    <div
                                      className="mCSB_dragger_bar"
                                      style={{ "line-height": "30px" }}
                                    ></div>
                                  </div>
                                  <div className="mCSB_draggerRail"></div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>

                        <div
                          className={`dropdown dropdown-notification${
                            statusNotICon ? " show" : ""
                          }`}
                          id="popup-notification"
                        >
                          <a
                            href="javascript:;"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            data-hover="dropdown"
                            data-close-others="true"
                            aria-expanded="false"
                            onClick={() => {
                              toggleNotificationIcon(!statusNotICon);
                              toggleQRIcon(false);
                            }}
                          >
                            <i className="fa fa-bell-o"></i>
                            <span className="badge_coun badge-danger"> 6 </span>
                          </a>
                          <ul
                            className={`dropdown-menu scroll_auto height_fixed mCustomScrollbar _mCS_2${
                              statusNotICon ? " show" : ""
                            }`}
                          >
                            <div
                              id="mCSB_2"
                              className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                              tabindex="0"
                              style={{ "max-height": "none" }}
                            >
                              <div
                                id="mCSB_2_container"
                                className="mCSB_container"
                                style={{
                                  position: "relative",
                                  top: 0,
                                  left: 0,
                                }}
                                dir="ltr"
                              >
                                <li className="bigger">
                                  <h3>
                                    <span className="bold">Notifications</span>
                                  </h3>
                                  <span className="notification-label">
                                    New 6
                                  </span>
                                </li>
                                <li>
                                  <ul className="dropdown-menu-list">
                                    <li>
                                      <a href="javascript:;">
                                        <span className="time">just now</span>
                                        <span className="details">
                                          <span className="notification-icon deepPink-bgcolor">
                                            <i className="fa fa-check"></i>
                                          </span>
                                          Congratulations!.
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <span className="time">3 mins</span>
                                        <span className="details">
                                          <span className="notification-icon purple-bgcolor">
                                            <i className="fa fa-user o"></i>
                                          </span>
                                          <b>John Micle </b>is now following
                                          you.
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <span className="time">7 mins</span>
                                        <span className="details">
                                          <span className="notification-icon blue-bgcolor">
                                            <i className="fa fa-comments-o"></i>
                                          </span>
                                          <b>Sneha Jogi </b>sent you a message.
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <span className="time">12 mins</span>
                                        <span className="details">
                                          <span className="notification-icon pink">
                                            <i className="fa fa-heart"></i>
                                          </span>
                                          <b>Ravi Patel </b>like your photo.
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <span className="time">15 mins</span>
                                        <span className="details">
                                          <span className="notification-icon yellow">
                                            <i className="fa fa-warning"></i>
                                          </span>
                                          Warning!
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <span className="time">10 hrs</span>
                                        <span className="details">
                                          <span className="notification-icon red">
                                            <i className="fa fa-times"></i>
                                          </span>
                                          Application error.
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </div>
                              <div
                                id="mCSB_2_scrollbar_vertical"
                                className="mCSB_scrollTools mCSB_2_scrollbar mCS-light mCSB_scrollTools_vertical"
                                style={{ display: "block" }}
                              >
                                <div className="mCSB_draggerContainer">
                                  <div
                                    id="mCSB_2_dragger_vertical"
                                    className="mCSB_dragger"
                                    style={{
                                      position: "absolute",
                                      "min-height": "30px",
                                      display: "block",
                                      height: "231px",
                                      "max-height": "283px",
                                      top: "0px",
                                    }}
                                  >
                                    <div
                                      className="mCSB_dragger_bar"
                                      style={{ "line-height": "30px" }}
                                    ></div>
                                  </div>
                                  <div className="mCSB_draggerRail"></div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                        {/* notification_End */}

                        {/* Dropdown_User */}
                        <div className="dropdown dropdown-user">
                          <a
                            href="javascript:;"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            data-hover="dropdown"
                            data-close-others="true"
                            aria-expanded="true"
                          >
                            <img
                              className="img-circle pro_pic"
                              src="http://0.0.0.0:3008/images/user3.png"
                              alt=""
                            />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-default">
                            <li>
                              <div className="user-panel">
                                <div className="user_image">
                                  <img
                                    src="http://0.0.0.0:3008/images/user3.png"
                                    className="img-circle mCS_img_loaded"
                                    alt="User Image"
                                  />
                                </div>
                                <div className="info">
                                  <p>James Vince</p>
                                  <a href="#"> pabola@gmail.com</a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon-user"></i> Profile
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon-settings"></i> Settings
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon-directions"></i> Help
                              </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                              <a href="lock_screen.html">
                                <i className="icon-lock"></i> Lock
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon-logout"></i> Log Out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
