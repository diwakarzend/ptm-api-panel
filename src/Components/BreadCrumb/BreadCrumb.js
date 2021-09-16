import React from "react";
import AnchorLink from "../AnchorLink/AnchorLink";

import "./BreadCrumb.css";

const BreadCrumb = ({ heading, value }) => {
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
            <ol className="breadcrumb">
              <li>
                <i className="fa fa-home"></i>
                <AnchorLink href="/" className="parent-item">
                  Home
                </AnchorLink>

                <i className="fa fa-angle-right"></i>
              </li>
              <li className="active">{value}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
