import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ChangePassword from "../../Components/ResetPassword/ChangePassword";
import IPForm from "../Settings/IPForm";
import { addOverlay, removeOverlay } from "../../utils/common";
import "./Settings.css";

const Settings = (props) => {
  const [toggleApi1, setToggeleAPI1] = useState(false);
  const [toggleApi2, setToggeleAPI2] = useState(false);
  const [activeTab, setactiveTab] = useState("password");
  const [ipPopup, setIPPopup] = useState(false);

  const handleTabClick = (item) => {
    // alert(item);
    setactiveTab(item);
  };

  const handleIPForm = () => {
    addOverlay();
    setIPPopup(true);
  };

  const closeIPPopUpHandler = () => {
    removeOverlay();
    setIPPopup(false);
  };

  return (
    <div className="container_full">
      <SideBar {...props} />

      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Settings" value="Settings" />
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
                        <li
                          className="nav-item"
                          onClick={() => handleTabClick("password")}
                        >
                          <a
                            className={`nav-link${
                              activeTab == "password" ? " active" : ""
                            }`}
                            id="pills-week-tab"
                            data-toggle="pill"
                            href="#pills-week"
                            role="tab"
                            aria-controls="pills-week"
                            aria-selected="false"
                          >
                            Change Password
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={() => handleTabClick("payoutapi")}
                        >
                          <a
                            className={`nav-link${
                              activeTab == "payoutapi" ? " active" : ""
                            }`}
                            id="pills-week-tab"
                            data-toggle="pill"
                            href="#pills-week"
                            role="tab"
                            aria-controls="pills-week"
                            aria-selected="false"
                          >
                            PAYOUT API
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={() => handleTabClick("apikey")}
                        >
                          <a
                            className={`nav-link${
                              activeTab == "apikey" ? " active" : ""
                            }`}
                            id="pills-week-tab"
                            data-toggle="pill"
                            href="#pills-week"
                            role="tab"
                            aria-controls="pills-week"
                            aria-selected="false"
                          >
                            API Key
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={() => handleTabClick("ip")}
                        >
                          <a
                            className={`nav-link${
                              activeTab == "ip" ? " active" : ""
                            }`}
                            id="pills-week-tab"
                            data-toggle="pill"
                            href="#pills-week"
                            role="tab"
                            aria-controls="pills-week"
                            aria-selected="false"
                          >
                            IP
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content" id="pills-tabContent">
                      {activeTab == "password" && <ChangePassword />}
                      {activeTab == "payoutapi" && (
                        <API
                          toggleApi1={toggleApi1}
                          toggleApi2={toggleApi2}
                          setToggeleAPI1={setToggeleAPI1}
                          setToggeleAPI2={setToggeleAPI2}
                        />
                      )}
                      {activeTab == "apikey" && (
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              className="form-control"
                              value="BSX4MzMZKnb4g0JFYGEzk-pvPx4a7ZtQfduKmkfHhTsJJNsfLaNHlPufPSfA"
                            />
                          </div>
                        </div>
                      )}
                      {activeTab == "ip" && (
                        <div>
                          <div class="card-header fund-modal">
                            <div class="card-title"> </div>
                            <button
                              type="button"
                              class="btn-common"
                              data-toggle="modal"
                              onClick={handleIPForm}
                            >
                              Add IP
                            </button>
                            {ipPopup ? (
                              <IPForm closePopUpHandler={closeIPPopUpHandler} />
                            ) : (
                              ""
                            )}
                          </div>

                          <table className="table table-bordered">
                            <tr>
                              <th>UserId</th>
                              <th>User</th>
                              <th>Mobile</th>
                              <th>IP Address</th>
                              <th>Last Modified</th>
                              <th>Status</th>
                            </tr>
                            <tr>
                              <td>5814</td>
                              <td>WebTechies Pvt Ltd</td>
                              <td>9999678976</td>
                              <td>34.93.135.35</td>
                              <td>18 June 2021</td>
                              <td>Active</td>
                            </tr>
                            <tr>
                              <td>5814</td>
                              <td>WebTechies Pvt Ltd</td>
                              <td>9999678976</td>
                              <td>34.93.135.35</td>
                              <td>18 June 2021</td>
                              <td>Active</td>
                            </tr>
                          </table>
                        </div>
                      )}
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

export default Settings;

const API = ({ toggleApi1, toggleApi2, setToggeleAPI1, setToggeleAPI2 }) => {
  return (
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
                Send Payout Request
                <span
                  className={`icon plus${toggleApi1 ? " rotate-icon" : ""}`}
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
                      <div className="card-title">Request Parameter</div>
                      <table className="table table-bordered">
                        <tr>
                          <th>Parameter</th>
                          <th>Required</th>
                          <th>Description</th>
                        </tr>
                        <tr>
                          <td>accountNumber</td>
                          <td>Mendatory</td>
                          <td>Benefeciary account number</td>
                        </tr>
                        <tr>
                          <td>beneficiaryName</td>
                          <td>Mendatory</td>
                          <td>Benefeciary Name</td>
                        </tr>
                        <tr>
                          <td>ifscCode</td>
                          <td>Mendatory</td>
                          <td>Benefeciary Ifsc code</td>
                        </tr>
                        <tr>
                          <td>mobileNumber</td>
                          <td>Non Mendatory</td>
                          <td>Benefeciary Mobile Number</td>
                        </tr>
                        <tr>
                          <td>remittanceAmount</td>
                          <td>Mendatory</td>
                          <td>Amount need to send</td>
                        </tr>
                        <tr>
                          <td>route</td>
                          <td>Mendatory</td>
                          <td>NEFT/IMPS/RTGS</td>
                        </tr>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <div className="card-title">Response Json</div>
                      <div className="api-code-block">
                        <span className="pl-0"></span>
                        <span className="pl-4">"success :true,"</span>
                        <span className="pl-4">"code :INFO031",</span>
                        <span className="pl-4">
                          "msg :PayOut Initiated successfully!"
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
                Verify Payout OTP
                <span
                  className={`icon plus${toggleApi2 ? " rotate-icon" : ""}`}
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
                      <div className="card-title">Request Parameter</div>
                      <table className="table table-bordered">
                        <tr>
                          <th>Parameter</th>
                          <th>Required</th>
                          <th>Description</th>
                        </tr>
                        <tr>
                          <td>payOutOtp</td>
                          <td>Mendatory</td>
                          <td>Add recieved otp send to the vendor mobile</td>
                        </tr>
                        <tr>
                          <td>txnId</td>
                          <td>Mendatory</td>
                          <td>Payout transaction id</td>
                        </tr>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <div className="card-title">Response Json</div>
                      <div className="api-code-block">
                        <span className="pl-0"></span>
                        <span className="pl-4">
                          "txnId" : "payoutrequest txn id",
                        </span>
                        <span className="pl-4">
                          "payOutOtp" : "received otp on vendor mobile"
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
  );
};
