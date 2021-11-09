import React, { useState, useEffect, Fragment, useRef } from "react";
import { connect } from "react-redux";
import "../../../public/css/style.css";
import "./Header.css";
import Logout from "../Logout/Logout";
import {
  printUserName,
  printUserNameShort,
  addOverlay,
  removeOverlay,
} from "../../utils/common";
import AnchorLink from "../AnchorLink/AnchorLink";
import UserProfileForm from "../UserProfile/UserProfileForm";

const userRole = {
  PTM_VENDOR: "VENDOR",
  PTM_ADMIN: "ADMIN",
  PTM_SUB_ADMIN: "SUB ADMIN",
};

const Header = (props) => {
  const { location } = props;

  if (location && location.pathname == "/") {
    return "";
  }

  const [statusQRICon, toggleQRIcon] = useState(false);
  const [statusNotICon, toggleNotificationIcon] = useState(false);
  const [userPopUpVisible, toggleUserImage] = useState(false);
  const [isProfileClicked, setProfileClick] = useState(false);

  const didMountRef = useRef(false);

  const clickHandler = () => {
    addOverlay();
    setProfileClick(true);
  };

  const closePopUpHandler = () => {
    removeOverlay();
    setProfileClick(false);
  };

  function clickHambergerHandler() {
    if (document.body.classList.value != "nav_small") {
      document.body.classList.add("nav_small");
    } else {
      document.body.classList.remove("nav_small");
    }
  }
  const { login } = props;
  const userData = login && login.userData;

  return (
    <div className="header-bg">
      <header className="main-header">
        <div className="container_header phone_view border_top_bott">
          <div className="row">
            <div className="col-md-12">
              <div className="logo d-flex align-items-center">
                <strong className="logo_icon">
                  <img
                    src="http://localhost:3008/images/small-logo.png"
                    alt=""
                  />
                </strong>
                <span className="logo-default">
                  <AnchorLink href="/dashboard">
                    <img
                      src="https://storage.googleapis.com/ptm-assets-prod/banner/priv-pay.png"
                      alt="Logo"
                      height="60"
                    />
                  </AnchorLink>
                </span>
                <div className="icon_menu" onClick={clickHambergerHandler}>
                  <a className="menu-toggler sidebar-toggler"></a>
                </div>
              </div>

              <div className="right_detail d-flex justify-content-end">
                <div className="row full_width">
                  <div className="col-xl-12 col-12 d-flex justify-content-end">
                    <div className="right_bar_top d-flex align-items-center justify-content-md-between justify-content-end">
                      <div className="search"></div>
                      <div style={{ color: "#fff" }}>
                        Logged in as {userData && userRole[userData.role]}
                      </div>
                      <div className="align_end">
                        <NotificationPopup
                          statusQRICon={statusQRICon}
                          statusNotICon={statusNotICon}
                          toggleQRIcon={toggleQRIcon}
                          toggleNotificationIcon={toggleNotificationIcon}
                        />
                        <UserInfoPopUp
                          userPopUpVisible={userPopUpVisible}
                          toggleUserImage={toggleUserImage}
                          userData={userData}
                          props={props}
                          clickHandler={clickHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isProfileClicked && (
        <div className="card-header fund-modal">
          <UserProfileForm closePopUpHandler={closePopUpHandler} />
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Header);

const NotificationPopup = ({
  statusQRICon,
  statusNotICon,
  toggleNotificationIcon,
  toggleQRIcon,
}) => {
  return (
    <div
      className={`dropdown dropdown-notification${
        statusNotICon ? " show" : ""
      }`}
      id="popup-notification"
    >
      <a
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
        <span className="badge_coun badge-danger"> 0 </span>
      </a>
      <ul
        className={`dropdown-menu scroll_auto height_fixed mCustomScrollbar _mCS_2${
          statusNotICon ? " show" : ""
        }`}
        style={{
          height: "60px",
          textAlign: "center",
          paddingTop: "12px",
          marginTop: "-14px",
        }}
      >
        <li>No new notification</li>
        {/*      <div
          id="mCSB_2"
          className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
          tabIndex="0"
          style={{ maxHeight: "none" }}
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
              <span className="notification-label">New 6</span>
            </li>
            <li>
              <ul className="dropdown-menu-list">
                <li>
                  <a>
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
                  <a>
                    <span className="time">3 mins</span>
                    <span className="details">
                      <span className="notification-icon purple-bgcolor">
                        <i className="fa fa-user o"></i>
                      </span>
                      <b>John Micle </b>is now following you.
                    </span>
                  </a>
                </li>
                <li>
                  <a>
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
                  <a>
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
                  <a>
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
                  <a>
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
                  minHeight: "30px",
                  display: "block",
                  height: "231px",
                  maxHeight: "283px",
                  top: "0px",
                }}
              >
                <div
                  className="mCSB_dragger_bar"
                  style={{ lineHeight: "30px" }}
                ></div>
              </div>
              <div className="mCSB_draggerRail"></div>
            </div>
          </div>
        </div>
      */}
      </ul>
    </div>
  );
};

const UserInfoPopUp = ({
  userPopUpVisible,
  toggleUserImage,
  userData,
  props,
  clickHandler,
}) => {
  console.log("ss", userData);
  return (
    <div className={`dropdown dropdown-user${userPopUpVisible ? " show" : ""}`}>
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        data-hover="dropdown"
        data-close-others="true"
        aria-expanded="true"
        onClick={() => toggleUserImage(!userPopUpVisible)}
      >
        {printUserNameShort(userData)}
      </a>
      <ul
        className={`dropdown-menu dropdown-menu-default${
          userPopUpVisible ? " show" : ""
        }`}
      >
        <li>
          <div className="user-panel">
            {/* <div className="user_image">
              <img
                src="http://localhost:3008/images/user3.png"
                className="img-circle mCS_img_loaded"
                alt="User Image"
              />
            </div> */}
            <div className="info">
              <p>{printUserName(userData)}</p>
              <a> {userData && userData.email}</a>
            </div>
          </div>
        </li>
        <li onClick={clickHandler}>
          <a>
            <i className="icon-user"></i> Profile
          </a>
        </li>
        {/*<li>
          <a>
            <i className="icon-settings"></i> Settings
          </a>
        </li>
        <li>
          <a>
            <i className="icon-directions"></i> Help
          </a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="lock_screen.html">
            <i className="icon-lock"></i> Lock
          </a>
        </li> */}
        <li>
          <Logout {...props} />
        </li>
      </ul>
    </div>
  );
};
