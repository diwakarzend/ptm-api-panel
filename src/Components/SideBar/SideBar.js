import React from "react";
import "./SideBar.css";

const SideBar = () => {
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
          <a href="index.html">
            <i class="ti-home"></i> <span>Dashboard</span>
          </a>
        </li>

        <li class="menu_sub">
          <a href="#">
            <i class="icon-layers"></i> <span>Manage Compnay</span>
            <span class="icon-arrow-down styleicon"></span>
          </a>
          <ul class="down_menu">
            <li>
              <a href="no-of-users.html">No. Of Uesers</a>
            </li>
            <li>
              <a href="#">Merchants</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
