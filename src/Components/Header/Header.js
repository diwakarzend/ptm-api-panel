import React from "react";
import "./Header.css";
const user3Img = require("../../../public/images/userimg.png");
//import user3Img from "../../../public/images/userimg.png";

const Header = (props) => {
  const { location } = props;
  if (location && location.pathname == "/") {
    return "";
  }

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
                <div className="icon_menu">
                  <a href="#" className="menu-toggler sidebar-toggler"></a>
                </div>
              </div>

              <div className="right_detail d-flex justify-content-end">
                <div className="row full_width">
                  <div className="col-xl-12 col-12 d-flex justify-content-end">
                    <div
                      className="
                        right_bar_top
                        d-flex
                        align-items-center
                        justify-content-md-between justify-content-end
                      "
                    >
                      <div className="search"></div>

                      <div className="align_end">
                        {/*  notification_Start       */}
                        <div className="dropdown dropdown-notification">
                          <a
                            href="javascript:;"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            data-hover="dropdown"
                            data-close-others="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-bell-o"></i>
                            <span className="badge_coun badge-danger"> 6 </span>
                          </a>
                          <ul className="dropdown-menu scroll_auto height_fixed">
                            <li className="bigger">
                              <h3>
                                <span className="bold">Notifications</span>
                              </h3>
                              <span className="notification-label">New 6</span>
                            </li>
                            <li>
                              <ul className="dropdown-menu-list">
                                <li>
                                  <a href="javascript:;">
                                    <span className="time">just now</span>
                                    <span className="details">
                                      <span
                                        className="
                                          notification-icon
                                          deepPink-bgcolor
                                        "
                                      >
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
                                      <span
                                        className="
                                          notification-icon
                                          purple-bgcolor
                                        "
                                      >
                                        <i className="fa fa-user o"></i>
                                      </span>
                                      <b>John Micle </b>is now following you.
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
                          </ul>
                        </div>
                        {/* notification_End */} {/* Dropdown_User */}
                        <div className="dropdown dropdown-user">
                          <img
                            className="img-circle pro_pic"
                            src="http://0.0.0.0:3008/images/small-circle.png"
                            alt=""
                            width="50"
                          />
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
                              src="http://0.0.0.0:3008/images/userimg.png"
                              alt=""
                              width="50"
                            />
                          </a>
                          <ul className="dropdown-menu dropdown-menu-default">
                            <li>
                              <div className="user-panel">
                                <div className="user_image">
                                  <img
                                    src={user3Img}
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
