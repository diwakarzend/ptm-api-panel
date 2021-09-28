import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AnchorLink from "../AnchorLink/AnchorLink";
import {
  fetchUserDetailsIfNeeded,
  fetchUserWalletIfNeeded,
  fetchUserWallet,
} from "../../actions/Login";

import "./SideBar.css";

const SideBar = (props) => {
  const [toggleCompany, setToggleCompany] = useState(false);
  const [togglePayment, setTogglePayment] = useState(false);
  const [toggleAPI, setToggleAPI] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchUserDetailsIfNeeded());
    dispatch(fetchUserWalletIfNeeded());
  }, []);

  const handleClick = () => {
    const { dispatch } = props;
    dispatch(fetchUserWallet());
  };

  const handleNavClick = (event, pathName) => {
    event.preventDefault();
    if (pathName && pathName.split("/")) {
      const value = pathName.split("/").pop();
      setActiveSection(value);
    }
  };

  const { login } = props;
  const userData = login && login.userData;
  const userWallet = login && login.userWallet;
  const isWalletLoading = login && login.isWalletLoading;

  console.log("toggleAPI", activeSection);

  return (
    <div className="side_bar scroll_auto">
      <div className="user-panel">
        <div className="balance-wrapper">
          <span className="balance-title">Current Balance</span>
          <span className="balance-amount">
            <i className="fa fa-inr" aria-hidden="true"></i>
            {userWallet && userWallet.MAIN_WALLET}
            <i
              className={"fa fa-refresh " + (isWalletLoading ? "fa-spin" : "")}
              aria-hidden="true"
              onClick={handleClick}
            ></i>
          </span>
        </div>
      </div>

      <ul id="dc_accordion" className="sidebar-menu tree">
        <li className="menu_sub">
          <a>
            <i className="fa fa-inr" aria-hidden="true"></i>
          </a>
          <ul className="down_menu">
            <li>
              <a>
                <span>
                  <i className="fa fa-inr" aria-hidden="true"></i>
                  {userWallet && userWallet.MAIN_WALLET}
                </span>
              </a>
            </li>
          </ul>
        </li>

        <li
          className={`menu_sub${activeSection == "dashboard" ? " active" : ""}`}
        >
          <AnchorLink href="/dashboard" clicked={handleNavClick}>
            <i className="ti-home"></i> <span>Dashboard</span>
          </AnchorLink>
        </li>
        {userData && userData.role !== "PTM_VENDOR" ? (
          <li
            className={`menu_sub${activeSection == "users" ? " active" : ""}`}
          >
            <a
              href="javascript:void(0)"
              onClick={() => {
                setToggleCompany(!toggleCompany);
                setTogglePayment(false);
              }}
            >
              <i className="icon-layers"></i> <span>Manage Company</span>
              <span className="icon-arrow-down styleicon"></span>
            </a>

            <ul className={toggleCompany ? "down_menu open" : "down_menu"}>
              <li>
                <AnchorLink href="/users" clicked={handleNavClick}>
                  Vendors
                </AnchorLink>
              </li>
            </ul>
          </li>
        ) : (
          ""
        )}

        <li
          className={`menu_sub${
            ["request", "beneficiary"].includes(activeSection)
              ? " active"
              : false
          }`}
        >
          <a
            onClick={() => {
              setTogglePayment(!togglePayment);
              setToggleCompany(false);
            }}
          >
            <i className="icon-wallet"></i> <span>Payment</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>

          <ul className={togglePayment ? "down_menu open" : "down_menu"}>
            <li className={`${activeSection == "request" ? " active" : false}`}>
              <AnchorLink href="/fund/request" clicked={handleNavClick}>
                Fund Request
              </AnchorLink>
            </li>
            <li
              className={`${
                activeSection == "beneficiary" ? " active" : false
              }`}
            >
              <AnchorLink href="/beneficiary" clicked={handleNavClick}>
                Beneficiary
              </AnchorLink>
            </li>
          </ul>
        </li>

        <li
          className={`menu_sub${
            activeSection == "reports" ? " active" : false
          }`}
        >
          <AnchorLink href="/payout/reports" clicked={handleNavClick}>
            <i className="icon-wallet"></i> <span>Reports</span>
          </AnchorLink>
        </li>

        <li
          className={`menu_sub${
            activeSection == "document" ? " active" : false
          }`}
        >
          <a
            onClick={() => {
              setToggleAPI(!toggleAPI);
            }}
          >
            <i className="icon-wallet"></i> <span>API Document</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>

          <ul className={toggleAPI ? "down_menu open" : "down_menu"}>
            <li
              className={` ${activeSection == "document" ? " active" : false}`}
            >
              <AnchorLink href="/userapi/document" clicked={handleNavClick}>
                Document
              </AnchorLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SideBar);
/*   return (
    <div className="side_bar scroll_auto">
      <div className="user-panel">
        <div className="user_image">
          <img
            src="http://0.0.0.0:3008/images/about-1.jpg"
            className="img-circle mCS_img_loaded"
            alt="User Image"
          />
        </div>
        <div className="info">
          <p>{printUserName(userData)}</p>
          <a href="#">
            <i className="fa fa-circle text-success"></i> Online
          </a>
        </div>
      </div>

      <ul id="dc_accordion" className="sidebar-menu tree">
        <li>
          <AnchorLink href="/dashboard">
            <i className="ti-home"></i> <span>Dashboard</span>
          </AnchorLink>
        </li>

        <li className="menu_sub">
          <a
            href="javascript:void(0)"
            onClick={() => {
              setToggleCompany(!toggleCompany);
              setTogglePayment(false);
            }}
          >
            <i className="icon-layers"></i> <span>Manage Users</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>
          {toggleCompany && (
            <ul className="down_menu">
              <li>
                <AnchorLink href="/users">All Users</AnchorLink>
              </li>
            </ul>
          )}
        </li>

        <li className="menu_sub">
          <a
            href="javascript:void(0)"
            onClick={() => {
              setTogglePayment(!togglePayment);
              setToggleCompany(false);
            }}
          >
            <i className="icon-wallet"></i> <span>Payment</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>
          {togglePayment && (
            <ul className="down_menu">
              <li>
                <AnchorLink href="/upi">UPI</AnchorLink>
              </li>
              <li>
                <AnchorLink href="/add/money">Add Money</AnchorLink>
              </li>
              <li>
                <AnchorLink href="/fund/request">Fund Request</AnchorLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}; */
