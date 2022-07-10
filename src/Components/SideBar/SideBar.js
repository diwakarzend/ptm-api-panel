import React, { useState, useEffect, uselo } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnchorLink from "../AnchorLink/AnchorLink";
import {
  // fetchUserDetailsIfNeeded,
  fetchUserWalletIfNeeded,
  fetchUserWallet,
} from "../../actions/Login";
import { getUserPermissions, isEmpty } from "../../utils/common";

import { useLocation } from "react-router-dom";
import { SidebarWrapper } from "./style";
import { Logo } from "../UI/StyledConstants";
import {Navigation} from './constants';
import NavItem from "./NavItem";

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
  const [toggleMapqr, setToggleMapqr] = useState(false);
  let location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();

  //Mounting Phase
  useEffect(() => {
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
    dispatch(fetchUserWallet());
  };

  const handleNavClick = (event, pathName) => {};

  const { login } = useSelector(state => state);
  const userData = login && login.userData;
  const userWallet = login && login.userWallet;
  const isWalletLoading = login && login.isWalletLoading;

  const userPermissions = getUserPermissions(login);

  console.log("permissions SideBar", activeSection);

  const [inrpayNavigation, setInrpayNavigation] = useState(Navigation);

  const onNavItemClick = (i) => {
    const _inrpayNavigation = JSON.parse(JSON.stringify(inrpayNavigation));
    _inrpayNavigation[i].active = !_inrpayNavigation[i].active;
    setInrpayNavigation(_inrpayNavigation);
  }

  useEffect(() => {
    if (pathname && pathname.split("/")) {
      const value = "/" + pathname.split("/").pop();
      console.log("pathname = ", value);
      const _inrpayNavigation = JSON.parse(JSON.stringify(inrpayNavigation));
      _inrpayNavigation.map((navData, i) => {
        let isActive = navData.active;
        if(!isEmpty(navData.subNav)) {
          navData.subNav.map((subNavData, j) => {
            if(subNavData.link === value) {
              isActive = true;
              return;
            }
          })
          navData.active = isActive;
          return;
        }
      })
      setInrpayNavigation(_inrpayNavigation);
      // setActiveSection(value);
    }
  }, [pathname]);

  console.log("inrpayNavigation = ", inrpayNavigation);

  return (
    <SidebarWrapper className="sidebar">
      <Logo className="logo" type="white">
        <span className="icon">₹</span> INRPAY
      </Logo>
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
      <ul className="menu-wrapper">
        {!isEmpty(inrpayNavigation) && inrpayNavigation.map((navData, i) => 
          <NavItem 
            key={`nav-${i}`} 
            navData={navData} 
            onNavItemClick={onNavItemClick} 
            activeIndex={i} 
            subNavLength={navData?.subNav?.length || 0} 
          />
        )}
      </ul>
      <ul id="dc_accordion" className="sidebar-menu-list">
        <li className={`nav-link-list`}>
          <AnchorLink
            href="/dashboard"
            clicked={handleNavClick}
            className={`${activeSection == "dashboard" ? "active" : ""} nav-link`}
          >
            <i className="ti-dashboard"></i> <span>Dashboard</span>
          </AnchorLink>
        </li>
        {userData && userData.role !== "PTM_VENDOR" && (
          <li className="nav-link-list has-sub-menu">
            <a className="nav-link">
              <i className="icon-people"></i>
              <span>Manage Company</span>
            </a>
            <ul
              className={
                toggleCompany || activeSection == "users"
                  ? "down_menu open"
                  : "down_menu"
              }
            >
              <li>
                <AnchorLink
                  href="/users"
                  className="nav-link"
                >
                  <i className="icon-people"></i>
                  <span>Manage Users</span>
                </AnchorLink>
              </li>
            </ul>
          </li>
        )}

        <li className={`nav-link-list has-sub-menu`}>
          <a className="nav-link">
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
              <li className="nav-link-list">
                <AnchorLink href="/fund/request" className="nav-link">Fund Request</AnchorLink>
              </li>
            )}

            {userPermissions &&
              userPermissions.includes("PTM_GET_BENEFICIARY") && (
                <li className="menu_sub">
                  <AnchorLink
                    href="/beneficiary"
                    clicked={handleNavClick}
                    className={`${
                      activeSection == "beneficiary" ? " active" : ""
                    } nav-link`}
                  >
                    Beneficiary
                  </AnchorLink>
                </li>
              )}

            {userPermissions && userPermissions.includes("PTM_PAYOUT_RANGE") && (
              <li className="menu_sub">
                <AnchorLink
                  href="/vendor/commission"
                  clicked={handleNavClick}
                  className={`${
                    activeSection == "commission" ? " active" : ""
                  } nav-link`}
                >
                  Commission
                </AnchorLink>
              </li>
            )}
          </ul>
        </li>

        {userPermissions && userPermissions.includes("PTM_PAYOUT_TRANSACTION") && (
          <li className="menu_sub">
            <AnchorLink
              href="/payout/reports"
              clicked={handleNavClick}
              className={` ${activeSection == "reports" ? " active" : ""} nav-link`}
            >
              <i className="icon-chart"></i> <span>Transaction Report </span>
            </AnchorLink>
          </li>
        )}

        {userData && userData.role !== "PTM_VENDOR" ? (
          <li className="menu_sub">
            <a
              className="nav-link"
              onClick={() => {
              setToggleMapqr(!toggleMapqr);
              setToggleCompany(false);
              setTogglePayment(false);
              setToggleAmount(false);
            }}
            >
              <i className="icon-people"></i> <span>Map Vendor QR</span>
              <span className="icon-arrow-down styleicon"></span>
            </a>

            <ul
              className={
                toggleMapqr ||
                ["mapqr-list", "mapqr-add"].includes(activeSection)
                  ? "down_menu open"
                  : "down_menu"
              }
            >
              <li>
                <AnchorLink
                  href="/mapqr-list"
                  clicked={handleNavClick}
                  className={`${activeSection == "mapqr-list" ? "active" : ""} nav-link`}
                >
                  Listing
                </AnchorLink>
              </li>
              {/* <li>
              <AnchorLink
                href="/mapqr-add"
                clicked={handleNavClick}
                className={activeSection == "mapqr-add" ? "active" : ""}
              >
                Add
              </AnchorLink>
            </li> */}
            </ul>
          </li>
        ) : (
          ""
        )}
        <li className="menu_sub">
          <AnchorLink
            href="/p2p-transaction"
            clicked={handleNavClick}
            className={` ${
              activeSection == "p2p-transaction" ? " active" : ""
            } nav-link`}
          >
            <i className="icon-settings"></i>
            <span>P2P Transaction</span>
          </AnchorLink>
        </li>
        <li className="menu_sub">
          <AnchorLink
            href="/settings"
            clicked={handleNavClick}
            className={`${activeSection == "settings" ? " open active" : ""} nav-link`}
          >
            <i className="icon-settings"></i> <span>Settings </span>
          </AnchorLink>

          {/* <ul
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
          </ul> */}
        </li>
      </ul>
    </SidebarWrapper>
  );
};

// function mapStateToProps(state) {
//   return { ...state };
// }

export default SideBar;
// export default connect(mapStateToProps)(SideBar);
