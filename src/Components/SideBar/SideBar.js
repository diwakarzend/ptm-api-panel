import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AnchorLink from "../AnchorLink/AnchorLink";
import {
  fetchUserDetailsIfNeeded,
  fetchUserWalletIfNeeded,
} from "../../actions/Login";
import { printUserName } from "../../utils/common";

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

  return (
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
                <AnchorLink href="/add/user">Add Users</AnchorLink>
              </li>
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
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(SideBar);
