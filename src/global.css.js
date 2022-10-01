import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --font: 'Poppins', sans-serif;
    --ip-body-font-size: 13px;
    --ip-body-bg: #f3f3f9;
    --ip-white-bg:#fff;
    --ip-white-color:#fff;
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
    --ip-nav-link-color: #abb9e8;
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
    --h1: 24px;
    --h2: 20px;
    --h3: 18px;
    --h4: 16px;
    --h5: 16px;
    --h6: 14px;
    --p: 13px;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: var(--font);
    font-size: var(--ip-body-font-size);
    color:var(--ip-body-color-rgb);
    background: var(--ip-body-bg);
    line-height:1.2;
    font-weight:400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &.desktop_nav_small {
      .main-content {
        margin-left: 50px;
        > header {
          left: 50px;
        }
      }
    }
  }
  input, 
  button {
    font-family: var(--font);
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
  button, 
  img, 
  a, 
  select {
    outline: none;
    user-select: none;
    text-transform: none;
  }
  [type=button], 
  [type=reset], 
  [type=submit], 
  button {
    -webkit-appearance: button;
  }
  [type=button]:not(:disabled), 
  [type=reset]:not(:disabled), 
  [type=submit]:not(:disabled), 
  button:not(:disabled) {
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  table {
    caption-side: bottom;
    border-collapse: collapse;
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
  .mt4{
    margin-top:4px;
  }
  .mr4{
    margin-right: 8px;
  }
  .mr8{
    margin-right: 8px;
  }
  .mr12{
    margin-right: 8px;
  }
  .mr16{
    margin-right: 8px;
  }

  .p16 {
    padding: 16px;
  }
  .pb16{
    padding-bottom: 16px;
  }
  .pl16{
    padding-left: 16px;
  }
  .py8{
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .py4{
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .fs-13 {
    font-size: 13px;
  }
  .fs-15 {
    font-size: 15px;
  }
  .fs-16 {
    font-size: 16px;
  }

  .fw-medium {
    font-weight: 500;
  }
  .fw-bold {
    font-weight: 600;
  }
  
  h1{
    font-size:var(--h1);
  }
  h2{
    font-size:var(--h2);
  }
  h3{
    font-size:var(--h3);
  }
  h4{
    font-size:var(--h4);
  }
  h5{
    font-size:var(--h5);
  }
  h6{
    font-size:var(--h6);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight:500;
  }
  p{
    font-size:var(--p);
  }
  .text-left{
    text-align:left;
  }
  .text-center{
    text-align:center;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .rounded-full {
    border-radius: 50%;
  }
  .inputgroup{
    margin-bottom:16px;
  }
  .form-error {
    font-size:12px;
  }
  .label{
    font-size:13px;
    font-weight:500;
    color: var(--ip-body-color);
    margin-bottom: 8px;
    display: block;
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
  .form-textarea {
    height: 100px;
    padding: 14px;
    resize: none;
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
  .flex-wrap{
    flex-wrap: wrap;
  }
  .space-between{
    justify-content:space-between;
  }
  .justify-center{
    justify-content:center;
  }
  .justify-end {
    justify-content: end;
  }
  .item-center{
    align-items:center;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .flex-column {
    flex-direction: column;
  }
  .gap4 {
    gap: 4px;
  }
  .gap16 {
    gap: 16px;
  }
  .error-msg, .form-error{
    color: var(--ip-red);
  }
  .success-msg{
    color: var(--ip-green); 
  }
  .reset-password{
    font-size:13px;
    color: var(--text-grey);
  }
  .alert {
    position: relative;
    padding: 13px 16px;
    margin-bottom: 16px;
    border-radius: 4px;
  }
  .alert-success {
    color: #088675;
    background-color: #daf4f0;
    border-color: #b6e8e1;
  }
  .alert-danger {
    color: #b44c36;
    background-color: #fde8e4;
    border-color: #fbd1c8;
}
  .alert-warning {
    color: #b98a38;
    background-color: #fef4e4;
    border-color: #fdeac9;
  }

  /* Auth Layout CSS */
  .main-content {
    margin-left: 250px;
    padding: 70px 16px 60px;
    position: relative;
    transition: all .1s ease-out;
  }
  .card-wrapper {
    position: relative;
    display: flex;
    word-wrap: break-word;
    background-color: var(--ip-card-bg);
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 4px;
    box-shadow: 0 1px 2px rgb(56 65 74 / 15%);
    margin-bottom: 24px;
  }
  .card-header {
    border-radius: 4px 4px 0 0;
    padding: 16px;
    border-bottom: 1px solid var(--ip-border-color);
    .tab-List {
      margin: -16px -8px;
      display: flex;
      .tab-item {
        padding: 16px;
        font-weight: 500;
        color: var(--ip-link-color);
        position: relative;
        &.active {
          &:after {
            transform: scale(1);
          }
        }
        &:after {
          content: "";
          background: #405189;
          height: 1px;
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
          transition: all 250ms ease 0s;
          transform: scale(0);
        }
      }
    }
  }
  .row {
    display: flex;
    margin: 0 -12px;
    [class*="col-"] {
      padding: 0 12px;
    }
  }
  .col-1 {
    flex: 0 0 calc(100% * 1 / 12);
  }
  .col-2 {
    flex: 0 0 calc(100% * 2 / 12);
  }
  .col-3 {
    flex: 0 0 calc(100% * 3 / 12);
  }
  .col-4 {
    flex: 0 0 calc(100% * 4 / 12);
  }
  .col-5 {
    flex: 0 0 calc(100% * 5 / 12);
  }
  .col-6 {
    flex: 0 0 calc(100% * 6 / 12);
  }
  .col-7 {
    flex: 0 0 calc(100% * 7 / 12);
  }
  .col-8 {
    flex: 0 0 calc(100% * 8 / 12);
  }
  .col-9 {
    flex: 0 0 calc(100% * 9 / 12);
  }
  .col-10 {
    flex: 0 0 calc(100% * 10 / 12);
  }
  .col-11 {
    flex: 0 0 calc(100% * 11 / 12);
  }
  .col-12 {
    flex: 0 0 calc(100% * 12 / 12);
  }
  .pb0{
    padding-bottom: 0 !important;
  }
  .pt0{
    padding-top: 0 !important;
  }
  .sidebar-overlay {
    display: none;
  }
  @media screen and (max-width: 768px) {
    body.nav_small {
      .sidebar-overlay {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0,0,0,.7);
      }
      .sidebar {
        transform: translateX(0);
      }
    }
    .main-content {
      margin-left: 0;
      .header {
        left: 0;
        padding: 0;
      }
      .form-item {
        flex: 0 0 100%;
      }
      .form-action {
        width: 100%;
      }
      .filter-form {
        button {
          width: 100%;
        }
      }
      .table {
        th {
          white-space: nowrap;
        }
      }
      .card-header {
        &.dir-col-in-mobile {
          flex-direction: column;
          align-items: flex-start;
        }
        .filter-table {
          margin-top: 10px;
          overflow: auto;
          width: 100%;
        }
      }
      .card-body {
        .row {
          flex-direction: column;
          gap: 16px;
          > [class="col-"] {
            width: 100%;
            max-width: 100%;
          }
        }
      }
    }
  }
`