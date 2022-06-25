import React from "react";
import AnchorLink from "../AnchorLink/AnchorLink";

import "./BreadCrumb.css";

const BreadCrumb = ({ heading, value }) => {
  const refreshPage = ()=>{
    window.location.reload();
 }
  return (
    <div className="page-heading">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <div className="page-breadcrumb">
            <h1>{heading}</h1>
          </div>
        </div>
        <div className="col-md-6 justify-content-md-end d-md-flex">
          <div className="breadcrumb_nav">
            {heading !== "Dashboard" && (
              <ol className="breadcrumb">
                <li>
                  <i className="fa fa-home"></i>
                  <AnchorLink href="/dashboard" className="parent-item">
                    Home
                  </AnchorLink>

                  <i className="fa fa-angle-right"></i>
                </li>
                <li className="active">{value}</li>
              </ol>
            )}
          </div>
        </div>
      </div>
      {
        heading == "Dashboard" && 
        <span className="reload-page">
          <i
            className="fa fa-refresh"
            aria-hidden="true"
            onClick={refreshPage}
          ></i>
        </span>
      }
    </div>
  );
};

export default BreadCrumb;
