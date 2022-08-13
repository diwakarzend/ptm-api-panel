import React, { useEffect } from 'react';
import "../../lib/Chart/Chart.min";
import { UpiCollectionsStyle } from '../../Components/Dashboard/PtmVendor/style';

export default function TopInfo({ transactionReport = {} }) {

    const renderPieChart = (val1, val2, val3, val4) => {
        if (document.getElementById("container-pie-chart-payout")) {
          var ctx = document.getElementById("container-pie-chart-payout").getContext("2d");
          var myChart = new Chart(ctx, {
            type: "pie",
            data: {
              labels: ["Total Transactions", "Total Amount", "Total Synced", "Credited"],
              datasets: [
                {
                    backgroundColor: ["#3ac47d", "rgb(41,156,219)", "rgb(247,184,75)", "#d92550"],
                  data: [val1, val2, val3, val4],
                },
              ],
            },
          });
        }
      };

      useEffect(() => {
        // if (transactionReport) {
          setTimeout(() => {
            renderPieChart(transactionReport?.totalTransaction || 0, transactionReport?.totalAmount || 0, transactionReport?.refunded || 0, transactionReport?.cancelled || 0);
          }, 1000)
        // }
      }, [transactionReport])

      console.log("transactionReport = ", transactionReport)

    return (
        <>
            <UpiCollectionsStyle className="card-wrapper flex-column mb-4">

                <div className="card-header flex item-center space-between dir-col-in-mobile">
                    <h4 className="card-title">Payout</h4>
                </div>
                <div className="card-body">
                    <div className="upi-n-qr-collection row">
                        <div className="col-7">
                            <div className="container-pie-chart">
                                <canvas id="container-pie-chart-payout" className="height_box"></canvas>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="collection-info-wrapper">
                                <div className="collection-info">
                                    <div className="info-left">
                                        <strong className="amount">
                                            {(transactionReport && transactionReport.count) || 0}
                                        </strong>
                                        <div className="text first">
                                            Total Transactions
                                        </div>
                                    </div>
                                    <div className="info-right first"></div>
                                </div>
                                <div className="collection-info">
                                    <div className="info-left">
                                        <strong className="amount">
                                            {(transactionReport && transactionReport.totalTransaction) || 0}
                                        </strong>
                                        <div className="text second">
                                            Total Amount
                                        </div>
                                    </div>
                                    <div className="info-right second"></div>
                                </div>
                                <div className="collection-info">
                                    <div className="info-left">
                                        <strong className="amount">
                                            {0}
                                        </strong>
                                        <div className="text third">
                                            Refunded Transactions
                                        </div>
                                    </div>
                                    <div className="info-right third"></div>
                                </div>
                                <div className="collection-info">
                                    <div className="info-left">
                                        <strong className="amount">
                                            {(transactionReport && transactionReport.count) || 0}
                                        </strong>
                                        <div className="text fourth">
                                            Cancelled Transactions
                                        </div>
                                    </div>
                                    <div className="info-right fourth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UpiCollectionsStyle>
        </>
    )
}