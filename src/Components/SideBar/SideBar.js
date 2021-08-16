import React, { useState } from "react";
import Logout from "../Logout/Logout";
import AnchorLink from "../AnchorLink/AnchorLink";
import "./SideBar.css";

const SideBar = (props) => {
  const [toggleCompany, setToggleCompany] = useState(false);
  const [togglePayment, setTogglePayment] = useState(false);

  // companyClickHandler();

  console.log("toggle", toggleCompany, togglePayment);
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
          <p>James Vince</p>
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
            <i className="icon-layers"></i> <span>Manage Compnay</span>
            <span className="icon-arrow-down styleicon"></span>
          </a>
          {toggleCompany && (
            <ul className="down_menu">
              <li>
                <AnchorLink href="/users">No. Of Users</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#">Merchants</AnchorLink>
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
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
