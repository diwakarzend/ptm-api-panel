import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import Logout from "../Logout/Logout";
import {
  printUserName,
  printUserNameShort,
  addOverlay,
  removeOverlay,
} from "../../utils/common";
import UserProfileForm from "../UserProfile/UserProfileForm";
import { HeaderWrapper } from "./style";

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
  console.log("userData = ", userData);
  return (
    <>
      <HeaderWrapper className="header flex space-between">
          <div className="header-left">
            <button className="header-hamburger" type="button" onClick={clickHambergerHandler}>
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          <div className="header-right flex">
            <div className="user-info">
              <div className="user-info-inner flex item-center">
                <span className="short-name flex item-center justify-center rounded-full fw-medium mr8">{printUserNameShort(userData)}</span>
                <div className="full-name text-left">
                  <div className="user-full-name fw-bold">{printUserName(userData)}</div>
                  <div className="user-role mt4">{userData && userRole[userData.role]}</div>
                </div>
              </div>
            </div>
          {/* <div className="align_end">
            <UserInfoPopUp
              userPopUpVisible={userPopUpVisible}
              toggleUserImage={toggleUserImage}
              userData={userData}
              props={props}
              clickHandler={clickHandler}
            />
          </div> */}
          </div>
              
      </HeaderWrapper>
      {isProfileClicked && (
        <div className="card-header fund-modal">
          <UserProfileForm closePopUpHandler={closePopUpHandler} />
        </div>
      )}
    </>
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
