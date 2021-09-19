import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AnchorLink from "../AnchorLink/AnchorLink";
import {
  fetchUserDetailsIfNeeded,
  fetchUserWalletIfNeeded,
} from "../../actions/Login";

import "./SideBar.css";

const SideBar = (props) => {
  const [toggleCompany, setToggleCompany] = useState(false);
  const [togglePayment, setTogglePayment] = useState(false);

  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchUserDetailsIfNeeded());
    dispatch(fetchUserWalletIfNeeded());
  }, []);

  const { loginUser } = props;
  const userData = loginUser && loginUser.userData;
  const userWallet = loginUser && loginUser.userWallet;

  // console.log("ssssssss", toggleCompany, togglePayment);

  return (
    <div className="side_bar scroll_auto">
      <div className="user-panel">
        <div className="balance-wrapper">
          <span className="balance-title">Current Balance</span>
          <span className="balance-amount">
            <i className="fa fa-inr" aria-hidden="true"></i>
            {userWallet && userWallet.MAIN_WALLET}
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <ul id="dc_accordion" className="sidebar-menu tree">
        <li className="menu_sub">
          <a href="javascript:void(0)">
            <i className="fa fa-inr" aria-hidden="true"></i>
          </a>
          <ul className="down_menu">
            <li>
              <a href="javascript:void(0)">
                <span>
                  <i className="fa fa-inr" aria-hidden="true"></i>
                  {userWallet && userWallet.MAIN_WALLET}
                </span>
              </a>
            </li>
          </ul>
        </li>

        <li className="menu_sub">
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
            <i className="icon-layers"></i> <span>Manage Company</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>
          
            <ul className={toggleCompany ? "down_menu open" : "down_menu"} >
              <li>
                <AnchorLink href="/users">Vendors</AnchorLink>
              </li>
            </ul>
          
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

            <ul className={togglePayment ? "down_menu open" : "down_menu"} >
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
