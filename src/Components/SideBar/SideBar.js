import React, { useState, useEffect, uselo } from "react";
import { connect } from "react-redux";
import AnchorLink from "../AnchorLink/AnchorLink";
import {
  fetchUserDetailsIfNeeded,
  fetchUserWalletIfNeeded,
  fetchUserWallet,
} from "../../actions/Login";
import { getUserPermissions } from "../../utils/common";

import { useLocation } from "react-router-dom";

import "./SideBar.css";

/* 0: "PTM_PAYOUT_TRANSACTION"
1: "PTM_PAYOUT_STATUS_REPORT"
2: "PTM_PAYOUT_MONTHLY_REPORT"
3: "PTM_PAYOUT_TRANSACTION_SUM_REPORT"
4: "PTM_REQUEST_PAYOUT"
5: "PTM_VERIFY_OTP_PAYOUT"
6: "PTM_REJECT_REQUEST_PAYOUT"
7: "PTM_RESEND_OTP_PAYOUT"
8: "PTM_WALLET_AMOUNT"
9: "PTM_WALLET_TRANSACTIONS"
10: "PTM_SERVICE_TYPE_REPORT"
11: "PTM_FUND_REQUEST"
12: "PTM_FUND_REQUEST_STATUS"
13: "PTM_GET_PROFILE"
14: "PTM_SAVE_PROFILE"
15: "PTM_CHANGE_PASSWORD"
16: "PTM_GET_FIN_DETAILS"
17: "PTM_SAVE_FIN_DETAILS"
18: "PTM_CREATE_BENEFICIARY"
19: "PTM_DELETE_BENEFICIARY"
20: "PTM_GET_BENEFICIARY"
21: "PTM_PAYOUT_RANGE" */

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
    //   dispatch(fetchUserDetailsIfNeeded());
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

  const userPermissions = getUserPermissions(login);

  console.log("permissions SideBar", userPermissions);

  return (
    <div className="side_bar scroll_auto">
      <div className="user-panel">
        <div className="balance-wrapper">
          <span className="balance-title">Current Balance</span>
          <span className="balance-amount">
            <i className="fa fa-inr" aria-hidden="true"></i>
            {userWallet &&
              userWallet.MAIN_WALLET &&
              parseInt(userWallet.MAIN_WALLET).toLocaleString("en-IN")}
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
              setToggleCompany(false);
            }}
          >
            <i className="fa fa-inr" aria-hidden="true"></i>
          </a>
          <ul className={toggleAmount ? "down_menu open" : "down_menu"}>
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
            {userPermissions && userPermissions.includes("PTM_FUND_REQUEST") && (
              <li className={`${activeSection == "request" ? " active" : ""}`}>
                <AnchorLink href="/fund/request" clicked={handleNavClick}>
                  Fund Request
                </AnchorLink>
              </li>
            )}

            {userPermissions &&
              userPermissions.includes("PTM_GET_BENEFICIARY") && (
                <li
                  className={`${
                    activeSection == "beneficiary" ? " active" : ""
                  }`}
                >
                  <AnchorLink href="/beneficiary" clicked={handleNavClick}>
                    Beneficiary
                  </AnchorLink>
                </li>
              )}

            {userPermissions && userPermissions.includes("PTM_PAYOUT_RANGE") && (
              <li
                className={`${activeSection == "commission" ? " active" : ""}`}
              >
                <AnchorLink href="/vendor/commission" clicked={handleNavClick}>
                  Commission
                </AnchorLink>
              </li>
            )}
          </ul>
        </li>

        {userPermissions && userPermissions.includes("PTM_PAYOUT_TRANSACTION") && (
          <li
            className={`menu_sub ${
              activeSection == "reports" ? " active" : ""
            }`}
          >
            <AnchorLink href="/payout/reports" clicked={handleNavClick}>
              <i className="icon-chart"></i> <span>Transaction Report </span>
            </AnchorLink>
          </li>
        )}

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
