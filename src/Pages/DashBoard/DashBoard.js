import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { fetchMonthlyReports } from "../../actions/payout";
import { dynamicDataWithXY } from "../../lib/Chart/common";
import CircularProgressBar from "../../Components/CircularProgressBar";
import { getUserPermissions } from "../../utils/common";
import UpiCollections from "../../Components/Dashboard/PtmVendor/UpiCollections";
import TopInfo from "./TopInfo";
import { DashboardWrapper } from "./style";

const DashBoard = (props) => {


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

  useEffect(() => {
    const { dispatch, payout } = props;
    dispatch(fetchMonthlyReports());
  }, []);

  const { login } = props;
  const userPermissions = getUserPermissions(login);

  console.log("dashboard", statusReport, totalTransaction);

  return (
      <>
        <BreadCrumb heading="Dashboard" />
        <TopInfo transactionReport={transactionReport} />

        {userPermissions && userPermissions.includes("PTM_VENDOR_TRANSACTION_REPORT") && (
          <UpiCollections />
        )}
        
        <DashboardWrapper className="flex analysis-and-statistics">
          <div className="card-wrapper flex-column transaction-analysis">
            <div className="card-header">
              <h4 className="card-title">
                Last 6 Months Transaction Analysis
              </h4>
            </div>
            <div className="card-body">
              <canvas id="myChart3-light" className="height_box"></canvas>
            </div>
          </div>
          <div className="card-wrapper flex-column overall-statistics">
            <div className="card-header">
              <h4 className="card-title">
                Overall statistics
              </h4>
            </div>
            <div className="card-body">
              <p className="mt-4">
                Daily information about statistics in system
              </p>
              {statusReport && 
                <>
                  <div className="overall-chart flex item-center">
                    <div>
                      <CircularProgressBar
                        percentage={
                          totalTransaction == 0
                            ? 0
                            : Math.floor(
                              (statusReport.DONE * 100) /
                              totalTransaction
                            )
                        }
                        strokeWidth={7}
                        strokeColor="#097643"
                        sqSize={100}
                      />
                    </div>
                    <strong className="">Success</strong>
                  </div>
                  <div className="overall-chart flex item-center">
                    <div>
                      <CircularProgressBar
                        percentage={
                          totalTransaction == 0
                            ? 0
                            : Math.floor(
                              (statusReport.FAIL * 100) /
                              totalTransaction
                            )
                        }
                        strokeWidth={7}
                        strokeColor="#FF333C"
                        sqSize={100}
                      />
                    </div>
                    <strong className="">Failed</strong>
                  </div>
                  <div className="overall-chart flex item-center">
                    <div>
                      <CircularProgressBar
                        percentage={
                          totalTransaction == 0
                            ? 0
                            : Math.floor(
                              (statusReport.FAIL * 100) /
                              totalTransaction
                            )
                        }
                        strokeWidth={7}
                        strokeColor="#FF333C"
                        sqSize={100}
                      />
                    </div>
                    <strong className="">Rejected</strong>
                  </div>
                </>  
              }
            </div>
          </div>
        </DashboardWrapper>
        
      </>
  );
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(DashBoard);

