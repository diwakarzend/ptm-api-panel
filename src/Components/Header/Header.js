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
  console.log(props);

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
                      src="https://storage.googleapis.com/ptm-assets-prod/banner/WhiteLogo.png"
                      alt="Logo"
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

                      <div className="align_end">
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

const UserInfoPopUp = ({
  userPopUpVisible,
  toggleUserImage,
  userData,
  props,
  clickHandler,
}) => {
  // console.log("ss", userData);
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
      <div style={{ color: "#fff" }}>{userData && userRole[userData.role]}</div>
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
