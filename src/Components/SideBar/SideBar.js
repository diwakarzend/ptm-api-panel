import React, { useState, useEffect, uselo } from "react";
import { connect } from "react-redux";
import AnchorLink from "../AnchorLink/AnchorLink";
import {
  fetchUserDetailsIfNeeded,
  fetchUserWalletIfNeeded,
  fetchUserWallet,
} from "../../actions/Login";

import { useLocation } from "react-router-dom";

import "./SideBar.css";

const SideBar = (props) => {
  const [toggleCompany, setToggleCompany] = useState(false);
  const [togglePayment, setTogglePayment] = useState(false);
  const [toggleAmount, setToggleAmount] = useState(false);
  const [toggleAPI, setToggleAPI] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  let location = useLocation();
  const pathname = location.pathname;

  //Mounting Phase

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchUserDetailsIfNeeded());
    dispatch(fetchUserWalletIfNeeded());
  }, []);

  //Updation Phase
  useEffect(() => {
    if (pathname && pathname.split("/")) {
      const value = pathname.split("/").pop();
      setActiveSection(value);
    }
  }, [pathname]);

  const handleClick = () => {
    const { dispatch } = props;
    dispatch(fetchUserWallet());
  };

  const handleNavClick = (event, pathName) => {};

  const { login } = props;
  const userData = login && login.userData;
  const userWallet = login && login.userWallet;
  const isWalletLoading = login && login.isWalletLoading;

  console.log("toggleAPI", activeSection, location);

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
          <a  
             onClick={() => {
                setToggleAmount(!toggleAmount);
                setTogglePayment(false);
                setToggleCompany(false)
              }}
              >
            <i className="fa fa-inr" aria-hidden="true"></i>
          </a>
          <ul className={
                toggleAmount
                  ? "down_menu open"
                  : "down_menu"
              }>
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
          className={`menu_sub ${
            activeSection == "dashboard" ? " active" : ""
          }`}
        >
          <AnchorLink href="/dashboard" clicked={handleNavClick}>
            <i className="ti-dashboard"></i> <span>Dashboard</span>
          </AnchorLink>
        </li>
        {userData && userData.role !== "PTM_VENDOR" ? (
          <li
            className={`menu_sub ${activeSection == "users" ? " active" : ""}`}
          >
            <a
              onClick={() => {
                setToggleCompany(!toggleCompany);
                setTogglePayment(false);
                setToggleAmount(false);
              }}
            >
              <i className="icon-people"></i> <span>Manage Company</span>
              <span className="icon-arrow-down styleicon"></span>
            </a>

            <ul
              className={
                toggleCompany || activeSection == "users"
                  ? "down_menu open"
                  : "down_menu"
              }
            >
              <li className={`${activeSection == "users" ? " active" : ""}`}>
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
          className={`menu_sub ${
            ["request", "beneficiary", "commission"].includes(activeSection)
              ? " active"
              : ""
          }`}
        >
          <a
            onClick={() => {
              setTogglePayment(!togglePayment);
              setToggleCompany(false);
              setToggleAmount(false);
            }}
          >
            <i className="icon-wallet"></i> <span>Payment</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>

          <ul
            className={
              togglePayment ||
              ["request", "beneficiary", "commission"].includes(activeSection)
                ? "down_menu open"
                : "down_menu"
            }
          >
            <li className={`${activeSection == "request" ? " active" : ""}`}>
              <AnchorLink href="/fund/request" clicked={handleNavClick}>
                Fund Request
              </AnchorLink>
            </li>
            <li
              className={`${activeSection == "beneficiary" ? " active" : ""}`}
            >
              <AnchorLink href="/beneficiary" clicked={handleNavClick}>
                Beneficiary
              </AnchorLink>
            </li>
            <li className={`${activeSection == "commission" ? " active" : ""}`}>
              <AnchorLink href="/vendor/commission" clicked={handleNavClick}>
                Commission
              </AnchorLink>
            </li>
          </ul>
        </li>

        <li
          className={`menu_sub ${activeSection == "reports" ? " active" : ""}`}
        >
          <AnchorLink href="/payout/reports" clicked={handleNavClick}>
            <i className="icon-chart"></i> <span>Reports</span>
          </AnchorLink>
        </li>

        <li
          className={`menu_sub ${
            activeSection == "document" ? " open active" : ""
          }`}
        >
          <a
            onClick={() => {
              setToggleAPI(!toggleAPI);
            }}
          >
            <i className="ti-settings"></i> <span>API Document</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>

          <ul
            className={
              toggleAPI || activeSection == "document"
                ? "down_menu open"
                : "down_menu"
            }
          >
            <li className={` ${activeSection == "document" ? " active" : ""}`}>
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
