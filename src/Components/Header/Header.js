import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import {
  printUserName,
  printUserNameShort,
  clearAuthToken,
} from "../../utils/common";
import UserProfileForm from "../UserProfile/UserProfileForm";
import { HeaderWrapper, UserInfoWrapper } from "./style";
import { loginResetStore } from "../../actions/Login";

const userRole = {
  PTM_VENDOR: "VENDOR",
  PTM_ADMIN: "ADMIN",
  PTM_SUB_ADMIN: "SUB ADMIN",
};

const Header = () => {

  const [isProfileClicked, setProfileClick] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();


  function clickHambergerHandler() {
    if (document.body.classList.value != "nav_small") {
      document.body.classList.add("nav_small");
    } else {
      document.body.classList.remove("nav_small");
    }
  }

  const logout = () => {
    clearAuthToken();
    dispatch(loginResetStore());
    history.push("/");
  };
  const userData = useSelector(state => state?.login?.userData);
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
              <UserInfoWrapper className="user-info-dropdown">
                <h6>Welcome {userData?.firstName || '-'}</h6>
                <ul>
                  <li>Profile</li>
                  <li onClick={() => logout()}>Logout</li>
                </ul>
              </UserInfoWrapper>
            </div>
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

export default Header;
