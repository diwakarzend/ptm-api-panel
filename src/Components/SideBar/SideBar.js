import React from "react";
import Logout from "../Logout/Logout";
import AnchorLink from "../AnchorLink/AnchorLink";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div class="side_bar scroll_auto">
      <div class="user-panel">
        <div class="user_image">
          <img
            src="assets/images/about-1.jpg"
            class="img-circle mCS_img_loaded"
            alt="User Image"
          />
        </div>
        <div class="info">
          <p>James Vince</p>
          <a href="#">
            <i class="fa fa-circle text-success"></i> Online
          </a>
        </div>
      </div>

      <ul id="dc_accordion" class="sidebar-menu tree">
        <li>
          <AnchorLink href="/dashboard">
            <span>Dashboard</span>
          </AnchorLink>
        </li>

        <li class="menu_sub">
          <AnchorLink href="/company">
            <span>Manage Compnay</span>
          </AnchorLink>
          {/* <ul class="down_menu">
            <li>
              <a href="no-of-users.html">No. Of Uesers</a>
            </li>
            <li>
              <a href="#">Merchants</a>
            </li>
          </ul> */}
        </li>
        <li class="menu_sub logout">
          <Logout {...props} />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
