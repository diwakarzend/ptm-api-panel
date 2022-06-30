import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --font: 'Poppins', sans-serif;
    --ip-body-bg: #f3f3f9;
    --ip-white-bg:#fff;
    --ip-body-color: #212529;
    --ip-body-color-rgb: 33,37,41;
    --ip-vertical-menu-bg: #fff;
    --ip-vertical-menu-item-color: #6d7080;
    --ip-vertical-menu-item-hover-color: #405189;
    --ip-vertical-menu-item-active-color: #405189;
    --ip-vertical-menu-sub-item-color: #7c7f90;
    --ip-vertical-menu-sub-item-hover-color: #405189;
    --ip-vertical-menu-sub-item-active-color: #405189;
    --ip-vertical-menu-title-color: #919da9;
    --ip-vertical-menu-bg-dark: #405189;
    --ip-vertical-menu-item-color-dark: #abb9e8;
    --ip-vertical-menu-item-hover-color-dark: #fff;
    --ip-vertical-menu-item-active-color-dark: #fff;
    --ip-vertical-menu-sub-item-color-dark: #abb9e8;
    --ip-vertical-menu-sub-item-hover-color-dark: #fff;
    --ip-vertical-menu-sub-item-active-color-dark: #fff;
    --ip-vertical-menu-title-color-dark: #838fb9;
    --ip-header-bg: #fff;
    --ip-header-item-color: #e9ecef;
    --ip-header-bg-dark: #405189;
    --ip-header-item-color-dark: #b0c4d9;
    --ip-topbar-search-bg: #f3f3f9;
    --ip-topbar-user-bg: #f3f3f9;
    --ip-topbar-user-bg-dark: #52639c;
    --ip-footer-bg: #fff;
    --ip-footer-color: #98a6ad;
    --ip-topnav-bg: #fff;
    --ip-topnav-item-color: #6d7080;
    --ip-topnav-item-color-active: #405189;
    --ip-twocolumn-menu-iconview-bg: #fff;
    --ip-twocolumn-menu-bg: #fff;
    --ip-twocolumn-menu-iconview-bg-dark: var(--ip-vertical-menu-bg-dark);
    --ip-twocolumn-menu-bg-dark: #435590;
    --ip-twocolumn-menu-item-color-dark: var(--ip-vertical-menu-item-color-dark);
    --ip-twocolumn-menu-item-active-color-dark: #fff;
    --ip-twocolumn-menu-item-active-bg-dark: rgba(255, 255, 255, 0.15);
    --ip-boxed-body-bg: #e5e5f2;
    --ip-heading-color: #495057;
    --ip-light: #f3f6f9;
    --ip-light-rgb: 243,246,249;
    --ip-dark: #212529;
    --ip-dark-rgb: 33,37,41;
    --ip-link-color: #405189;
    --ip-link-hover-color: #405189;
    --ip-border-color: #e9ebec;
    --ip-dropdown-bg: #fff;
    --ip-dropdown-link-color: #212529;
    --ip-dropdown-link-hover-color: #1e2125;
    --ip-dropdown-link-hover-bg: #f3f6f9;
    --ip-dropdown-border-width: 0px;
    --ip-card-bg: #fff;
    --ip-card-cap-bg: #fff;
    --ip-card-logo-dark: block;
    --ip-card-logo-light: none;
    --ip-modal-bg: #fff;
    --ip-nav-tabs-link-active-color: #495057;
    --ip-nav-tabs-link-active-bg: #f3f3f9;
    --ip-accordion-button-active-color: #3a497b;
    --ip-progress-bg: #eff2f7;
    --ip-toast-background-color: rgba(255, 255, 255, 0.85);
    --ip-toast-border-color: rgba(0, 0, 0, 0.1);
    --ip-toast-header-border-color: rgba(0, 0, 0, 0.05);
    --ip-list-group-hover-bg: #f3f6f9;
    --ip-popover-bg: #fff;
    --ip-pagination-hover-bg: #eff2f7;
    --ip-input-bg: #fff;
    --ip-input-border: #ced4da;
    --ip-input-focus-border: #a0a8c4;
    --ip-input-disabled-bg: #eff2f7;
    --ip-input-group-addon-bg: #eff2f7;
    --ip-input-check-border: var(--ip-input-border);
    --ip-primary-btn-color:#fff;
    --ip-primary-btn-bg:#0ab39c;
    --ip-primary-btn-hover-bg:#099885;
    --ip-red: #f06548;
    --ip-green: #0ab39c;
    --text-grey:#878a99;
    --h1: 32px;
    --h2: 28px;
    --h3: 24px;
    --h4: 20px;
    --h5: 16px;
    --h6: 14px;
    --p: 16px;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: var(--font);
    color:var(--ip-body-color-rgb);
    background: var(--ip-body-bg);
    line-height:1.2;
    font-weight:400;
  }
  .mb4{
    margin-bottom:4px;
  }
  .mb8{
    margin-bottom:8px;
  }
  .mb12{
    margin-bottom:12px;
  }
  .mb16{
    margin-bottom:16px;
  }
  .mb20{
    margin-bottom:20px;
  }
  .mb24{
    margin-bottom:24px;
  }
  .mb28{
    margin-bottom:28px;
  }
  .mb32{
    margin-bottom:32px;
  }
  .mb36{
    margin-bottom:36px;
  }
  .mb4{
    margin-bottom:4px;
  }
  .mb4{
    margin-bottom:4px;
  }
  
  h1{
    font-size:var(--h1);
    font-weight:500;
  }
  h2{
    font-size:var(--h2);
    font-weight:500;
  }
  h3{
    font-size:var(--h3);
    font-weight:500;
  }
  h4{
    font-size:var(--h4);
    font-weight:500;
  }
  h5{
    font-size:var(--h5);
    font-weight:500;
  }
  h6{
    font-size:var(--h6);
    font-weight:500;
  }
  p{
    font-size:var(--p);
  }
  .text-center{
    text-align:center;
  }
  .inputgroup{
    margin-bottom:16px;
  }
  .label{
    font-size:13px;
    font-weight:500;
    color: var(--ip-body-color);
  }
  .form-control{
    font-size:13px;
    padding: 0 14px;
    border:1px solid var(--ip-input-border);
    width:100%;
    height:38px;
    color: var(--ip-body-color);
    border-radius:4px;
    &:focus{
      border-color:var(--ip-input-focus-border);
    }
  }
  .primary-btn{
    border:none;
    width:100%;
    height:38px;
    border-radius:4px;
    color: var(--ip-primary-btn-color);
    background-color:var(--ip-primary-btn-bg);
    &:hover{
      background-color:var(--ip-primary-btn-hover-bg);
    }
  }
  .border-btn{
    border:none;
    width:100%;
    height:38px;
    border-radius:4px;
    color: var(--ip-primary-btn-bg);
    background-color:transparent;
    border:1px solid var(--ip-primary-btn-bg);
  }
  .wd48{
    max-width:48%;
  }
  .flex{
    display:flex;
  }
  .space-between{
    justify-content:space-between;
  }
  .justify-center{
    justify-content:center;
  }
  .item-center{
    align-items:center;
  }
  .error-msg{
    color: var(--ip-red);
  }
  .error-msg{
    color: var(--ip-red);
  }
  .success-msg{
    color: var(--ip-green); 
  }
  .reset-password{
    font-size:13px;
    color: var(--text-grey);
  }
`