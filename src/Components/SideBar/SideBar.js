import React from "react";
import Logout from "../Logout/Logout";
import AnchorLink from "../AnchorLink/AnchorLink";
import "./SideBar.css";

const SideBar = (props) => {
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
            <span>Dashboard</span>
          </AnchorLink>
        </li>

        <li className="menu_sub">
          <AnchorLink href="/company">
            <span>Manage Compnay</span>
          </AnchorLink>
          {/* <ul className="down_menu">
            <li>
              <a href="no-of-users.html">No. Of Uesers</a>
            </li>
            <li>
              <a href="#">Merchants</a>
            </li>
          </ul> */}
        </li>
        <li className="menu_sub logout">
          <Logout {...props} />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
