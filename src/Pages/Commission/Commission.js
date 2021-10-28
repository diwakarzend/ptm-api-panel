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

  let group =
    commissionData &&
    Array.isArray(commissionData) &&
    commissionData.reduce((r, a) => {
      r[a.route] = [...(r[a.route] || []), a];
      return r;
    }, {});

  const PRODUCTS = {
    NEFT: [
      {
        minAmount: 1.0,
        maxAmount: 25000.0,
        commissionType: "CASH",
        comission: 5.0,
        merchantApiCode: null,
      },
      {
        minAmount: 25001.0,
        maxAmount: 50000.0,
        commissionType: "CASH",
        comission: 10.0,

        merchantApiCode: null,
      },
      {
        minAmount: 50001.0,
        maxAmount: 100000.0,
        commissionType: "CASH",
        comission: 20.0,
        merchantApiCode: null,
      },
    ],
    IMPS: [
      {
        minAmount: 1.0,
        maxAmount: 25000.0,
        commissionType: "CASH",
        comission: 5.0,
        merchantApiCode: "NP",
      },
      {
        minAmount: 1.0,
        maxAmount: 25000.0,
        commissionType: "PERCENTAGE",
        comission: 6.0,
        merchantApiCode: "PTM",
      },
      {
        minAmount: 25001.0,
        maxAmount: 50000.0,
        commissionType: "CASH",
        comission: 10.0,
        merchantApiCode: null,
      },
      {
        minAmount: 50001.0,
        maxAmount: 1000000.0,
        commissionType: "CASH",
        comission: 15.0,
        merchantApiCode: null,
      },
    ],
  };

  const getRange = (itemkey) => {
    // console.log("product", category);
    const range = [];
    PRODUCTS[itemkey].forEach((item) => {
      range.push(
        <div>
          {item.minAmount}-{item.maxAmount}
          <br />
        </div>
      );
    });

    return range;
  };

  //  console.log("group", group);

  const rows = [];
  let lastCategory = null;

  Object.keys(PRODUCTS).forEach((itemKey) => {
    PRODUCTS[itemKey].forEach((product) => {
      console.log("productproduct", product);
      if (itemKey !== lastCategory) {
        rows.push(<ProductRow itemKey={itemKey} data={PRODUCTS} />);
      }
      lastCategory = itemKey;
    });
  });

  // Object.keys(group).forEach((item) => {
  //   Mode.push(item);
  //   const items = group[item];
  // items.map((item) => {});
  // });

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
                        <th>Mode</th>
                        <th>Range</th>
                        <th>Merchant Code</th>
                        <th>Charges</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* {commissionData && Array.isArray(commissionData)
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
                        : ""} */}
                      {rows}
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

const ProductRow = ({ itemKey, data }) => {
  const range = [];
  const merchantCode = [];
  const charges = [];
  const commission = [];
  data[itemKey].forEach((item) => {
    range.push(
      <div>
        {`Rs.${item.minAmount} - Rs.${item.maxAmount}`}
        <br />
      </div>
    );
    merchantCode.push(<div>{item.merchantApiCode || "NA"}</div>);

    commission.push(
      <div>
        {item.commissionType == "CASH"
          ? `Rs. ${item.comission} + GST`
          : `${item.comission}% + GST`}
      </div>
    );
  });
  return (
    <tr>
      <td>{itemKey}</td>
      <td>{range}</td>
      <td>{merchantCode}</td>
      <td>{commission}</td>
      <td>Edit</td>
    </tr>
  );
};
