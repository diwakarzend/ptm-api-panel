import React from "react";
import { UpiCollectionsStyle } from "./style";

export default function UpiCollections({ changeHandler, userTxnDetails = {} }) {
  const fontCss = {
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#53505f",
  };
  return (
    <UpiCollectionsStyle className="card card-shadow mb-4">
      <div className="row">
        <div className="col-xl-12">
          <div className="card-header">
            <div className="card-title">UPI Collections</div>

            <form className="filter-table">
              <div className="form-group">
                <label>Vendor</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  onChange={changeHandler}
                >
                  <option>Ranjeet</option>
                  <option>Diwakar</option>
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
            </form>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-xl-4">
            <div className="collection-info">
              <div className="info-left">
                <i className="ti-server f30"></i>
              </div>
              <div className="info-right">
                <h6 className="m-0">Total Transactions</h6>
                <p className="f12 mb-0" style={fontCss}>
                  {(userTxnDetails && userTxnDetails?.totalCount) || 0}
                </p>
              </div>
            </div>
            <div className="collection-info">
              <div className="info-left">
                <i className="ti-control-shuffle f30"></i>
              </div>
              <div className="info-right">
                <h6 className="m-0 ">Total Amount</h6>
                <p className="f12 mb-0" style={fontCss}>
                  {(userTxnDetails && userTxnDetails.totalTransactionSum) || 0}
                </p>
              </div>
            </div>
            <div className="collection-info">
              <div className="info-left">
                <i className="ti-back-left f30"></i>
              </div>
              <div className="info-right">
                <h6 className="m-0 ">Total Synced Count</h6>
                <p className="f12 mb-0" style={fontCss}>
                  {userTxnDetails?.totalSyncedCount}
                </p>
              </div>
            </div>
            <div className="collection-info">
              <div className="info-left">
                <i className="ti-time f30"></i>
              </div>
              <div className="info-right">
                <h6 className="m-0 ">Credited count</h6>
                <p className="f12 mb-0" style={fontCss}>
                  {userTxnDetails?.totalCreditedCount}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="container-pie-chart">
              <canvas id="container-pie-chart" className="height_box"></canvas>
            </div>
          </div>
        </div>
      </div>
    </UpiCollectionsStyle>
  );
}
