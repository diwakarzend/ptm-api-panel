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
  const chartXData =
    chartData &&
    chartData.data.map((item) => {
      const month = moment(`${item.month}`, "M").format("MMMM");
      return `${month} ${item.year}`;
    });
  const chartYData =
    chartData && chartData.data.map((item) => item.totalRevenue);
  const chartObj = dynamicDataWithXY(
    chartXData,
    chartYData,
    "Revenue Chart",
    "Month of the year",
    "Revenue in Rs"
  );
  useEffect(() => {
    const { dispatch } = props;

    dispatch(fetchMonthlyReports());

    var ctx = document.getElementById("myChart3-light").getContext("2d");
    var myChart = new Chart(ctx, chartObj);
  }, []);

  console.log("dashboard", props);

  const { payout } = props;
  const monthlyReport = payout && payout.monthlyReport;
  const statusReport =
    (payout && payout.statusReport && payout.statusReport.data) || "";

  const totalTransaction = statusReport
    ? parseInt(statusReport.DONE) +
      parseInt(statusReport.FAIL) +
      parseInt(statusReport.REJECTED)
    : "";

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
                        <i className="icon-people f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">New Users</h6>
                        <p className="f12 mb-0">32 New Users</p>
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
                        <i className="icon-basket-loaded f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">Order Placed</h6>
                        <p className="f12 mb-0">123 New Order Placed</p>
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
                        <i className=" icon-handbag f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">Delivery </h6>
                        <p className="f12 mb-0">54 New Delivery</p>
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
                        <i className=" icon-badge f30"></i>
                      </div>
                      <div className=" col-9">
                        <h6 className="m-0 text-light">Monthly Profits</h6>
                        <p className="f12 mb-0">
                          $9887 This Month Profit{" "}
                          <span className="float-right text-success"></span>
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
                              strokeColor="#FF33B8"
                              sqSize={100}
                            />
                          </div>
                          <div className="user_data">
                            <span className="fw-bold mt-3 mb-0">REJECTED</span>
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

            <div className="row">
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
            </div>

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
