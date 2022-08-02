import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CSVLink } from 'react-csv';
import moment from 'moment';
import "../../../lib/Chart/Chart.min";
const chartConfig = require("../../../lib/Chart/Config");
import { getDashboardUserTxnRequest, getUserByVendorRole } from "../../../utils/api";
import { UpiCollectionsStyle } from "./style";
import { numberToCurrency } from "../../../utils/common";

const initFilters = {
  toDate: moment(new Date()).format('YYYY-MM-DD'),
  fromDate: moment(new Date()).format('YYYY-MM-DD'),
  "pagination": {
    "pageNo": 1,
    "pageSize": 100
  },
  "status": null,
  "txnRefId": null,
  "txnType": null,
  "userId": null,
  "utrNumber": null,
  "vendorCode": null
}

const fontCss = {
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#53505f",
};

export default function UpiCollections() {
  const [filters, setFilters] = useState({ ...initFilters });
  const [vendorList, setVendorList] = useState([]);
  const [userTxnDetails, setUserTxnDetails] = useState(null);
  const [downloadData, setDownloadData] = useState([]);
  const userData = useSelector((state) => state?.login?.userData || {});
  let isVendor = false;
  if (userData?.role === "PTM_VENDOR") {
    isVendor = true;
  }
  const changeHandler = (e) => {
    const { name, value } = e.target;
    const _filters = JSON.parse(JSON.stringify(filters));
    _filters[name] = value;
    setFilters(_filters);
  }

  const renderPieChart = (val1, val2, val3, val4) => {
    if (document.getElementById("container-pie-chart")) {
      var ctx = document.getElementById("container-pie-chart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Total Transactions", "Total Amount", "Total Synced", "Credited"],
          datasets: [
            {
              backgroundColor: ["rgba(10,179,156)", "rgb(41,156,219)", "rgb(247,184,75)", "rgb(64,81,137)"],
              data: [val1, val2, val3, val4],
            },
          ],
        },
      });
    }
  };

  useEffect(() => {
    getUserByVendorRole().then(res => {
      if (res?.data?.data) {
        setVendorList(res?.data?.data);
      }
    });
  }, [])

  useEffect(() => {
    if (userData?.role === "PTM_VENDOR") {
      setFilters({...filters, userId: userData.uuid});
    }
  }, [userData])

  useEffect(() => {
    if (userTxnDetails) {
      let data = []
      data.push(userTxnDetails);
      setDownloadData(data);
      setTimeout(() => {
        renderPieChart(userTxnDetails?.totalCount, userTxnDetails?.totalTransactionSum, userTxnDetails?.totalSyncedCount, userTxnDetails?.totalCreditedCount);
      }, 1000)
    }
  }, [userTxnDetails, userTxnDetails?.totalCount])

  useEffect(() => {
    getDashboardUserTxnRequest(filters).then((res) => {
      if (res?.data?.data) {
        setUserTxnDetails(res?.data?.data || null);
      }

    });
  }, [filters]);


  return (
    <UpiCollectionsStyle className="card-wrapper flex-column mb-4">
      
      <div className="card-header flex item-center space-between dir-col-in-mobile">
        <h4 className="card-title">UPI & QR Collections</h4>
        <form className="filter-table flex item-center">
          {
            !isVendor &&
            <div className="form-group">
              <select
                name="userId"
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={changeHandler}
              >
                <option value="">Select Merchant</option>
                {
                  vendorList.map(vendor =>
                    <option key={vendor?.uuid} value={vendor?.uuid}>{`${vendor.firstName || '-'} ${vendor.lastName || ''}`}</option>
                  )
                }
              </select>
            </div>
          }
          <div className="form-group">
            <input
              name="fromDate"
              type="date"
              className="form-control"
              placeholder="Enter From Date"
              onChange={changeHandler}
              value={filters?.fromDate}
            />
          </div>
          <div className="form-group">
            <input
              name="toDate"
              type="date"
              className="form-control"
              placeholder="Enter To Date"
              onChange={changeHandler}
              value={filters?.toDate}
            />
          </div>
          <div className="form-group">
            <CSVLink title="Download CSV" className="csv-link" data={downloadData}><i class="fa fa-download " aria-hidden="true"></i></CSVLink>
          </div>
        </form>
      </div>
      <div className="card-body">
        <div className="upi-n-qr-collection row">
          <div className="col-7">
            <div className="container-pie-chart">
              <canvas id="container-pie-chart" className="height_box"></canvas>
            </div>
          </div>
          <div className="col-5">
            <div className="collection-info-wrapper">
              <div className="collection-info">
                <div className="info-left">
                  <strong className="amount">
                    {(userTxnDetails && userTxnDetails?.totalCount) || 0}
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
                    {userTxnDetails && numberToCurrency(userTxnDetails.totalTransactionSum)}
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
                    {userTxnDetails?.totalSyncedCount}
                  </strong>
                  <div className="text third">
                    Total Synced
                  </div>
                </div>
                <div className="info-right third"></div>
              </div>
              <div className="collection-info">
                <div className="info-left">
                  <strong className="amount">
                    {userTxnDetails?.totalCreditedCount}
                  </strong>
                  <div className="text fourth">
                    Credited
                  </div>
                </div>
                <div className="info-right fourth"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UpiCollectionsStyle>
  );
}
