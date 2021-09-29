import React, { useState, useEffect } from "react";

import { fetchCommisionRange } from "../../actions/payout";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

import { connect } from "react-redux";

const Commission = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(fetchCommisionRange());
  }, []);

  const { payout } = props;

  const commissionData = payout && payout.commission && payout.commission.data;

  let userData = "";
  console.log("props", commissionData);

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Commission" value="Commission" />
          <div className="row">
            <div className=" col-sm-12">
              <div className="card card-shadow mb-4">
                <div className="card-body">
                  <table
                    id="bs4-table"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Range</th>
                        <th>Charges</th>
                        <th>Mode</th>
                      </tr>
                    </thead>

                    <tbody>
                      {commissionData && Array.isArray(commissionData)
                        ? commissionData.map((item, index) => {
                            const charges = (item.comission * 18) / 100;
                            return (
                              <tr key={item.maxAmount + item.minAmount}>
                                <td>{index + 1}</td>
                                <td>{`Rs. ${item.minAmount} - Rs. ${item.maxAmount}`}</td>

                                <td>
                                  {`Rs. ${
                                    item.comission
                                  } + Rs. ${charges.toFixed(2)} (GST)`}
                                </td>
                                <td>{item.route}</td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Commission);
