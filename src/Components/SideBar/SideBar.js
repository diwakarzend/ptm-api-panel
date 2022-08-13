import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getUserPermissions, isEmpty } from "../../utils/common";

import NavItem from "./NavItem";
import {Navigation} from './constants';
import { Logo } from "../UI/StyledConstants";
import { SidebarWrapper } from "./style";

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

const SideBar = () => {

  let location = useLocation();
  const pathname = location.pathname;


  const { login } = useSelector(state => state);
  const userData = login && login.userData;

  const userPermissions = getUserPermissions(login);

  console.log("userData = ", userData);
  console.log("userPermissions = ", userPermissions);
  const [roles, setRoles] = useState([]);
  const [inrpayNavigation, setInrpayNavigation] = useState(Navigation);

  const onNavItemClick = (i) => {
    const _inrpayNavigation = [...inrpayNavigation];
    _inrpayNavigation[i].active = !_inrpayNavigation[i].active;
    setInrpayNavigation(_inrpayNavigation);
  }

  const shouldDisplayNavItem = (navData) => {
    if(navData.hasOwnProperty('default')) {
      return true;
    } else if(navData?.applicableRoles.length > 0) {
      let rolesSet = new Set(roles);
      let valid = false;
      navData?.applicableRoles.forEach(role => {
        if(rolesSet.has(role)) {
          valid = rolesSet.has(role);
        }
        console.log("role = ", role, valid);
      });
      return valid;
    } else {
      return false;
    }
  }

  function onOverlayClick() {
    document.body.classList.remove("nav_small");
  }

  useEffect(() => {
    if(!isEmpty(userData)) {
      setRoles([...userData?.apiPermission || [], userData.role]);
    }
  },[userData])

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
    }
  }, [pathname]);

  useEffect(() => {
    onOverlayClick();
  }, [location])

  return (
    <>
    <SidebarWrapper className="sidebar">
      <Logo className="logo" type="white">
        <img src="/images/q-pay-logo.png" alt="QPAY"/>
      </Logo>
      <ul className="menu-wrapper">
        {!isEmpty(roles) && !isEmpty(inrpayNavigation) && inrpayNavigation.map((navData, i) => {
          let showNav = shouldDisplayNavItem(navData);
          return (
            <>
              {showNav
                ? <NavItem 
                  key={`nav-${i}`} 
                  navData={navData} 
                  onNavItemClick={onNavItemClick} 
                  activeIndex={i} 
                  subNavLength={navData?.subNav?.length || 0} 
                />
                : <></>
              }
            </>
          )
        })}
      </ul>
    </SidebarWrapper>
    <div className="sidebar-overlay" onClick={onOverlayClick}></div>
    </>
  );
};

export default SideBar;
