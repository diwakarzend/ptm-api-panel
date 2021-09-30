import React, { useEffect } from "react";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { fetchMonthlyReports } from "../../actions/payout";
import "../../lib/Chart/Chart.min";
const chartConfig = require("../../lib/Chart/Config");
import "./DashBoard.css";
import { chartData, transactionStatus } from "./mockJson";
import moment from "moment";
import { dynamicDataWithXY } from "../../lib/Chart/common";
import CircularProgressBar from "../../Components/CircularProgressBar";

const DashBoard = (props) => {
  // const {
  //   data: { totalTransaction, totalSuccess, totalFailed, totalPending },
  // } = transactionStatus;

  useEffect(() => {
    const { dispatch, payout } = props;
    dispatch(fetchMonthlyReports());
  }, []);

  console.log("dashboard", props);

  const { payout } = props;
  const statusReport =
    (payout && payout.statusReport && payout.statusReport.data) || "";
  const monthlyReport = (payout && payout.monthlyReport) || "";

  let transactionReport = "";
  if (
    payout &&
    payout.statusTranscReport &&
    payout.statusTranscReport.data &&
    Array.isArray(payout.statusTranscReport.data)
  ) {
    transactionReport = payout.statusTranscReport.data.filter(
      (item) => item.status.toLowerCase() == "done"
    );
    transactionReport = transactionReport[0];
  }

  const totalTransaction = statusReport
    ? parseInt(statusReport.DONE) +
      parseInt(statusReport.FAIL) +
      parseInt(statusReport.REJECTED)
    : "";

  const chartXData =
    monthlyReport &&
    monthlyReport.data &&
    monthlyReport.data.map((item) => {
      return `${item.month} ${item.year}`;
    });
  const chartYData =
    monthlyReport &&
    monthlyReport.data &&
    monthlyReport.data.map((item) => Math.abs(item.totalRevenue));
  const chartObj = dynamicDataWithXY(
    chartXData,
    chartYData,
    "Revenue Chart",
    "Month of the year",
    "Revenue in Rs"
  );
  if (monthlyReport && document.getElementById("myChart3-light")) {
    var ctx = document.getElementById("myChart3-light").getContext("2d");
    var myChart = new Chart(ctx, chartObj);
  }

  const fontCss = {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
  };
  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Dashboard" value="Dashboard" />
          <section className="chart_section">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-4">
                <div className="card bg-primary border-0 text-light pt-3 pb-3 h-100">
                  <div className="card-body ">
                    <div className="row">
                      <div className=" col-3">
                        <i className="ti-server f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">Total Transactions</h6>
                        <p className="f12 mb-0" style={fontCss}>
                          {transactionReport.count}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-4">
                <div className="card bg-info border-0 text-light pt-3 pb-3 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className=" col-3">
                        <i className="ti-control-shuffle f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">Total Amount</h6>
                        <p className="f12 mb-0" style={fontCss}>
                          {transactionReport.totalTransaction}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-4">
                <div className="card bg-warning border-0 text-light pt-3 pb-3 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className=" col-3">
                        <i className="ti-back-left f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">Refunded Transaction</h6>
                        <p className="f12 mb-0" style={fontCss}>
                          0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 mb-4">
                <div className="card bg-danger border-0 text-light pt-3 pb-3 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className=" col-3">
                        <i className="ti-time f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">
                          Cancelled Transaction
                        </h6>
                        <p className="f12 mb-0" style={fontCss}>
                          0
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <h2 className="mb-4">
                          Total income &amp; spend statistics
                        </h2>
                      </div>
                    </div>

                    <div className="row py-3">
                      <div className="col-xl-12 col-md-12">
                        <div className="px-4">
                          <canvas
                            id="myChart3-light"
                            className="height_box"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {statusReport ? (
                <div className="col-xl-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <h2 className="mb-1">Overall statistics</h2>
                          <p className="mb-4">
                            Daily information about statistics in system
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 mb-xs-30">
                          <div className="ep_1 ">
                            <CircularProgressBar
                              percentage={Math.floor(
                                (statusReport.DONE * 100) / totalTransaction
                              )}
                              strokeWidth={7}
                              strokeColor="#097643"
                              sqSize={100}
                            />
                          </div>
                          <div className="user_data">
                            <span className="fw-bold mt-3 mb-0">Success</span>
                          </div>
                        </div>

                        <div className="col-sm-6 mb-xs-30">
                          <div className="ep_1 ">
                            <CircularProgressBar
                              percentage={Math.floor(
                                (statusReport.FAIL * 100) / totalTransaction
                              )}
                              strokeWidth={7}
                              strokeColor="#FF333C"
                              sqSize={100}
                            />
                          </div>
                          <div className="user_data">
                            <span className="fw-bold mt-3 mb-0">Failed</span>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="ep_1" data-percent="1">
                            <CircularProgressBar
                              percentage={Math.floor(
                                (statusReport.REJECTED * 100) / totalTransaction
                              )}
                              strokeWidth={7}
                              strokeColor="#0000ff"
                              sqSize={100}
                            />
                          </div>
                          <div className="user_data">
                            <span className="fw-bold mt-3 mb-0">Rejected</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            {/* <div className="row">
              <div className="col-xl-6">
                <div className="card card-shadow mb-4">
                  <div className="card-header">
                    <div className="card-title">Pie Chart</div>
                  </div>
                  <div className="card-body">
                    <div id="pie-chart" className="pie-chart">
                      <div
                        id="pie-chart-container"
                        style={{ height: "300px" }}
                      ></div>
                    </div>

                    <ul className="color-detail">
                      <li>
                        <span className="first-box"></span>Paid Signup{" "}
                      </li>
                      <li>
                        <span className="second-box"></span>Guest Signup
                      </li>
                      <li>
                        <span className="third-box"></span>Free Signup{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-6">
                <div className="card card-shadow mb-4">
                  <div className="card-header">
                    <div className="card-title">Daily Report</div>
                  </div>
                  <div className="card-body">
                    <div className="text_country">
                      <h2 className="mt-0">
                        <i
                          className="fa fa-shopping-basket"
                          aria-hidden="true"
                        ></i>
                        Today's Sales <span>65k</span>
                      </h2>
                      <div className="progress mb-5" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="65"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="text_country">
                      <h2 className="mt-0">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Today's Purchase <span>35k</span>
                      </h2>
                      <div className="progress mb-5" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="text_country">
                      <h2 className="mt-0">
                        <i className="fa fa-money" aria-hidden="true"></i>{" "}
                        Todays's Earning <span>75k</span>
                      </h2>
                      <div className="progress mb-5" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>

                    <div className="text_country">
                      <h2 className="mt-0">
                        <i className="fa fa-refresh" aria-hidden="true"></i>{" "}
                        Todays Refund <span>67k</span>
                      </h2>
                      <div className="progress mb-4" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "67%" }}
                          aria-valuenow="67"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row">
              <div className="col-xl-12">
                <div className="card card-shadow mb-4">
                  <div className="card-header">
                    <div className="card-title">Transaction Status</div>

                    <form className="filter-table">
                      <div className="form-group">
                        <label>Type</label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Prepaid</option>
                          <option>Postpaid</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label className="custom-control custom-radio">
                          <input
                            id="radio1"
                            name="radio"
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>{" "}
                          <span className="custom-control-description">
                            By Amount
                          </span>
                        </label>
                        <label className="custom-control custom-radio">
                          <input
                            id="radio2"
                            name="radio"
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator"></span>{" "}
                          <span className="custom-control-description">
                            By Count
                          </span>
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="card-body">
                    <div id="pie-chart" className="pie-chart">
                      <div
                        id="pie-chart-container2"
                        style={{ height: "300px" }}
                      ></div>
                    </div>

                    <ul className="color-detail">
                      <li>
                        <span className="first-box"></span>Airtel{" "}
                      </li>
                      <li>
                        <span className="second-box"></span>Vodafone
                      </li>
                      <li>
                        <span className="third-box"></span>Bsnl{" "}
                      </li>
                      <li>
                        <span className="fourth-box"></span>Idea{" "}
                      </li>
                    </ul>
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

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(DashBoard);
