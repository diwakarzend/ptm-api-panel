import React from "react";
import AnchorLink from "../AnchorLink/AnchorLink";
import { PageTitleWrapper } from "./style";

const BreadCrumb = ({ heading, value }) => {
  const refreshPage = () => {
    window.location.reload();
  }
  return (
    <PageTitleWrapper className="flex item-center space-between">
      <h4>{heading}</h4>
      <div className="breadcrumb_nav">
        {heading !== "Dashboard" && (
          <ol className="breadcrumb flex item-center">
            <li>
              <AnchorLink href="/dashboard" className="parent-item">
                Home
              </AnchorLink>

              <i className="fa fa-angle-right separator"></i>
            </li>
            <li className="active">{value}</li>
          </ol>
        )}
      </div>
      {heading == "Dashboard" &&
        <span className="reload-page">
          <i
            className="fa fa-refresh"
            aria-hidden="true"
            onClick={refreshPage}
          ></i>
        </span>
      }
    </PageTitleWrapper>
  );
};

export default BreadCrumb;
