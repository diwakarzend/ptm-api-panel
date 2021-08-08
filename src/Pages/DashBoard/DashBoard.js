import React, { useEffect } from "react";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import "../../lib/Chart/Chart.min";

const chartConfig = require("../../lib/Chart/Config");
import "./DashBoard.css";

const DashBoard = (props) => {
  useEffect(() => {
    console.log("config11", chartConfig);
    var ctx = document.getElementById("myChart3-light").getContext("2d");
    var myChart = new Chart(ctx, chartConfig);
  }, []);

  return (
    <div>
      <SideBar {...props} />
      <div class="content_wrapper">
        <div class="container-fluid">
          {/* breadcrumb */}
          <div class="page-heading">
            <div class="row d-flex align-items-center">
              <div class="col-md-6">
                <div class="page-breadcrumb">
                  <h1>Dashboard</h1>
                </div>
              </div>
              <div class="col-md-6 justify-content-md-end d-md-flex">
                <div class="breadcrumb_nav">
                  <ol class="breadcrumb">
                    <li>
                      <i class="fa fa-home"></i>
                      <a class="parent-item" href="index.html">
                        Home
                      </a>
                      <i class="fa fa-angle-right"></i>
                    </li>
                    <li class="active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumb_End */}

          {/* Section */}
          <section class="chart_section">
            <div class="row">
              <div class="col-xl-3 col-sm-6 mb-4">
                <div class="card bg-primary border-0 text-light pt-3 pb-3 h-100">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-3">
                        <i class="icon-people f30"></i>
                      </div>
                      <div class="col-9">
                        <h6 class="m-0 text-light">New Users</h6>
                        <p class="f12 mb-0">32 New Users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-4">
                <div class="card bg-info border-0 text-light pt-3 pb-3 h-100">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-3">
                        <i class="icon-basket-loaded f30"></i>
                      </div>
                      <div class="col-9">
                        <h6 class="m-0 text-light">Order Placed</h6>
                        <p class="f12 mb-0">123 New Order Placed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-4">
                <div class="card bg-warning border-0 text-light pt-3 pb-3 h-100">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-3">
                        <i class="icon-handbag f30"></i>
                      </div>
                      <div class="col-9">
                        <h6 class="m-0 text-light">Delivery</h6>
                        <p class="f12 mb-0">54 New Delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 mb-4">
                <div class="card bg-danger border-0 text-light pt-3 pb-3 h-100">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-3">
                        <i class="icon-badge f30"></i>
                      </div>
                      <div class="col-9">
                        <h6 class="m-0 text-light">Monthly Profits</h6>
                        <p class="f12 mb-0">
                          9887 This Month Profit
                          <span class="float-right text-success"> </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12">
                        <h2 class="mb-4">
                          Total income &amp; spend statistics
                        </h2>
                      </div>
                    </div>

                    <div class="row py-3">
                      <div class="col-xl-12 col-md-12">
                        <div class="px-4">
                          <canvas
                            id="myChart3-light"
                            class="height_box"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-6 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12">
                        <h2 class="mb-1">Overall statistics</h2>
                        <p class="mb-4">
                          Daily information about statistics in system
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4 mb-xs-30">
                        <div class="ep_1" data-percent="96">
                          <span>96</span>%
                        </div>
                        <div class="user_data">
                          <span class="fw-bold mt-3 mb-0">Success</span>
                        </div>
                      </div>

                      <div class="col-sm-4 mb-xs-30">
                        <div class="ep_1" data-percent="3">
                          <span>3</span>%
                        </div>
                        <div class="user_data">
                          <span class="fw-bold mt-3 mb-0">Failed</span>
                        </div>
                      </div>

                      <div class="col-sm-4">
                        <div class="ep_1" data-percent="1">
                          <span>1</span>%
                        </div>
                        <div class="user_data">
                          <span class="fw-bold mt-3 mb-0">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-group mb-4">
              {/* Column */}
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="float-right">
                        <i class="f30 opacity-3 icon-pie-chart"></i>
                      </div>
                      <h3 class="text-danger"> 123423 </h3>
                      <p class="card-subtitle text-muted fw-500">
                        Total Reveneue
                      </p>
                    </div>
                    <div class="col-12">
                      <div class="progress mt-3 mb-1" style={{ height: "6px" }}>
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "77%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="text-muted f12">
                        <span>Progress</span>
                        <span class="float-right">77%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}

              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="float-right">
                        <i class="f30 opacity-3 icon-briefcase"></i>
                      </div>
                      <h3 class="text-primary"> 3423 </h3>
                      <p class="card-subtitle text-muted fw-500">Total Cost</p>
                    </div>
                    <div class="col-12">
                      <div class="progress mt-3 mb-1" style={{ height: "6px" }}>
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "63%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="text-muted f12">
                        <span>Progress</span>
                        <span class="float-right">63%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column */}
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12">
                      <div class="float-right">
                        <i class="f30 opacity-3 icon-symbol-male"></i>
                      </div>
                      <h3 class="text-info"> 355323 </h3>
                      <p class="card-subtitle text-muted fw-500">
                        Total Profits
                      </p>
                    </div>
                    <div class="col-12">
                      <div class="progress mt-3 mb-1" style={{ height: "6px" }}>
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "56%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="text-muted f12">
                        <span>Progress</span>
                        <span class="float-right">56%</span>
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
