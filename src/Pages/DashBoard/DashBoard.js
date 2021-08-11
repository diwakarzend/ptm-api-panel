import React, { useEffect } from "react";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import "../../lib/Chart/Chart.min";
const chartConfig = require("../../lib/Chart/Config");
import "./DashBoard.css";

const DashBoard = (props) => {
  useEffect(() => {
    // console.log("config11", chartConfig);
    // use refs here
    var ctx = document.getElementById("myChart3-light").getContext("2d");
    var myChart = new Chart(ctx, chartConfig);
  }, []);

  return (
    <div>
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          {/* breadcrumb */}
          <div className="page-heading">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="page-breadcrumb">
                  <h1>Dashboard</h1>
                </div>
              </div>
              <div className="col-md-6 justify-content-md-end d-md-flex">
                <div className="breadcrumb_nav">
                  <ol className="breadcrumb">
                    <li>
                      <i className="fa fa-home"></i>
                      <a className="parent-item" href="index.html">
                        Home
                      </a>
                      <i className="fa fa-angle-right"></i>
                    </li>
                    <li className="active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumb_End */}

          {/* Section */}
          <section className="chart_section">
            <div className="row">
              <div className="col-xl-3 col-sm-6 mb-4">
                <div className="card bg-primary border-0 text-light pt-3 pb-3 h-100">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <i className="icon-people f30"></i>
                      </div>
                      <div className="col-9">
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
                      <div className="col-3">
                        <i className="icon-basket-loaded f30"></i>
                      </div>
                      <div className="col-9">
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
                      <div className="col-3">
                        <i className="icon-handbag f30"></i>
                      </div>
                      <div className="col-9">
                        <h6 className="m-0 text-light">Delivery</h6>
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
                      <div className="col-3">
                        <i className="icon-badge f30"></i>
                      </div>
                      <div className="col-9">
                        <h6 className="m-0 text-light">Monthly Profits</h6>
                        <p className="f12 mb-0">
                          9887 This Month Profit
                          <span className="float-right text-success"> </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 mb-4">
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

              <div className="col-xl-6 mb-4">
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
                      <div className="col-sm-4 mb-xs-30">
                        <div className="ep_1" data-percent="96">
                          <span>96</span>%
                        </div>
                        <div className="user_data">
                          <span className="fw-bold mt-3 mb-0">Success</span>
                        </div>
                      </div>

                      <div className="col-sm-4 mb-xs-30">
                        <div className="ep_1" data-percent="3">
                          <span>3</span>%
                        </div>
                        <div className="user_data">
                          <span className="fw-bold mt-3 mb-0">Failed</span>
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="ep_1" data-percent="1">
                          <span>1</span>%
                        </div>
                        <div className="user_data">
                          <span className="fw-bold mt-3 mb-0">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-group mb-4">
              {/* Column */}
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="float-right">
                        <i className="f30 opacity-3 icon-pie-chart"></i>
                      </div>
                      <h3 className="text-danger"> 123423 </h3>
                      <p className="card-subtitle text-muted fw-500">
                        Total Reveneue
                      </p>
                    </div>
                    <div className="col-12">
                      <div
                        className="progress mt-3 mb-1"
                        style={{ height: "6px" }}
                      >
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "77%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="text-muted f12">
                        <span>Progress</span>
                        <span className="float-right">77%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}

              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="float-right">
                        <i className="f30 opacity-3 icon-briefcase"></i>
                      </div>
                      <h3 className="text-primary"> 3423 </h3>
                      <p className="card-subtitle text-muted fw-500">
                        Total Cost
                      </p>
                    </div>
                    <div className="col-12">
                      <div
                        className="progress mt-3 mb-1"
                        style={{ height: "6px" }}
                      >
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "63%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="text-muted f12">
                        <span>Progress</span>
                        <span className="float-right">63%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column */}
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="float-right">
                        <i className="f30 opacity-3 icon-symbol-male"></i>
                      </div>
                      <h3 className="text-info"> 355323 </h3>
                      <p className="card-subtitle text-muted fw-500">
                        Total Profits
                      </p>
                    </div>
                    <div className="col-12">
                      <div
                        className="progress mt-3 mb-1"
                        style={{ height: "6px" }}
                      >
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "56%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="text-muted f12">
                        <span>Progress</span>
                        <span className="float-right">56%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section_End */}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(DashBoard);
