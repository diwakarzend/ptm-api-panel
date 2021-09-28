import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./APIDocument.css";

const APIDocument = (props) => {
  const [toggleApi1, setToggeleAPI1] = useState(false);
  const [toggleApi2, setToggeleAPI2] = useState(false);
  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="API" value="API" />
          <section className="chart_section">
            <div className="row">
              <div className="col-xl-12">
                <div className="card card-shadow mb-4">
                  <div className="card-header">
                    <div className="card-title">
                      <ul
                        className="nav nav-pills nav-pill-custom nav-pills-sm mobile-float-none"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="pills-week-tab"
                            data-toggle="pill"
                            href="#pills-week"
                            role="tab"
                            aria-controls="pills-week"
                            aria-selected="false"
                          >
                            Payout API
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade active show"
                        id="pills-today"
                        role="tabpanel"
                        aria-labelledby="pills-today-tab"
                      >
                        <div className="team-listing faq-accordian-wrapper">
                          <div className="dental-service-wrapper">
                            <ul className="accordian-wrapper">
                              <li>
                                <h4 className="accordian-heading">
                                  Recharge API1
                                  <span
                                    className={`icon plus${
                                      toggleApi1 ? " rotate-icon" : ""
                                    }`}
                                    onClick={() => {
                                      setToggeleAPI1(!toggleApi1);
                                    }}
                                  >
                                    <span className="name"></span>
                                  </span>
                                </h4>
                                {toggleApi1 && (
                                  <div className="accordian-content">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="card-title">
                                          Request Parameter
                                        </div>
                                        <table className="table table-bordered">
                                          <tr>
                                            <th>Parameter</th>
                                            <th>Required</th>
                                            <th>Description</th>
                                          </tr>
                                          <tr>
                                            <td>User Id</td>
                                            <td>Mendatory</td>
                                            <td>1</td>
                                          </tr>
                                          <tr>
                                            <td>User Id</td>
                                            <td>Mendatory</td>
                                            <td>1</td>
                                          </tr>
                                          <tr>
                                            <td>User Id</td>
                                            <td>Mendatory</td>
                                            <td>1</td>
                                          </tr>
                                        </table>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="card-title">
                                          Response Json
                                        </div>
                                        <div className="api-code-block">
                                          <span className="pl-0"></span>
                                          <span className="pl-4">
                                            "Field1" : "1",
                                          </span>
                                          <span className="pl-4">
                                            "Field2" : "2"
                                          </span>
                                          <span className="pl-4">
                                            "Field3" : "3"
                                          </span>
                                          <span className="pl-4">
                                            "Field4" : "4"
                                          </span>
                                          <span className="pl-4">
                                            "Field5" : "5"
                                          </span>
                                          <span className="pl-4">
                                            "Field6" : "6"
                                          </span>
                                          <span className="pl-4">
                                            "Field7" : "7"
                                          </span>
                                          <span className="pl-4">
                                            "Field8" : "8"
                                          </span>
                                          <span className="pl-0"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </li>
                              <li>
                                <h4 className="accordian-heading">
                                  Recharge API2
                                  <span
                                    className={`icon plus${
                                      toggleApi2 ? " rotate-icon" : ""
                                    }`}
                                    onClick={() => {
                                      setToggeleAPI2(!toggleApi2);
                                    }}
                                  >
                                    <span className="name"></span>
                                  </span>
                                </h4>
                                {toggleApi2 && (
                                  <div className="accordian-content">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="card-title">
                                          Request Parameter
                                        </div>
                                        <table className="table table-bordered">
                                          <tr>
                                            <th>Parameter</th>
                                            <th>Required</th>
                                            <th>Description</th>
                                          </tr>
                                          <tr>
                                            <td>User Id</td>
                                            <td>Mendatory</td>
                                            <td>1</td>
                                          </tr>
                                          <tr>
                                            <td>User Id</td>
                                            <td>Mendatory</td>
                                            <td>1</td>
                                          </tr>
                                          <tr>
                                            <td>User Id</td>
                                            <td>Mendatory</td>
                                            <td>1</td>
                                          </tr>
                                        </table>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="card-title">
                                          Response Json
                                        </div>
                                        <div className="api-code-block">
                                          <span className="pl-0"></span>
                                          <span className="pl-4">
                                            "Field1" : "1",
                                          </span>
                                          <span className="pl-4">
                                            "Field2" : "2"
                                          </span>
                                          <span className="pl-4">
                                            "Field3" : "3"
                                          </span>
                                          <span className="pl-4">
                                            "Field4" : "4"
                                          </span>
                                          <span className="pl-4">
                                            "Field5" : "5"
                                          </span>
                                          <span className="pl-4">
                                            "Field6" : "6"
                                          </span>
                                          <span className="pl-4">
                                            "Field7" : "7"
                                          </span>
                                          <span className="pl-4">
                                            "Field8" : "8"
                                          </span>
                                          <span className="pl-0"></span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default APIDocument;
