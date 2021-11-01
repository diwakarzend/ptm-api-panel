import React, { useState, useEffect, useRef } from "react";

import { fetchCommisionRange } from "../../actions/payout";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import CommissionForm from "./CommissionForm";
import {
  addOverlay,
  removeOverlay,
  printPage,
  hideMessage,
} from "../../utils/common";

import { connect } from "react-redux";

const Commission = (props) => {
  const { dispatch, payout, login } = props;
  const [isPopupVisible, setPopUp] = useState(false);
  const [itemInfo, setItem] = useState({ item: "", vendor: "" });
  const [message, setMessage] = useState("");

  const comissionRange = () => {
    dispatch(fetchCommisionRange());
  };

  useEffect(() => {
    comissionRange();
  }, []);

  useEffect(() => {
    hideMessage(message, setMessage);
  }, [message]);

  const openPopup = (item, itemKey, vendor) => {
    // console.log("item", item);
    item.mode = itemKey;
    setItem({
      item: item,
      vendor: vendor,
    });
    addOverlay();
    setPopUp(true);
  };

  const closePopUp = () => {
    removeOverlay();
    setPopUp(false);
  };

  // const commissionData =
  //   payout &&
  //   payout.commission &&
  //   payout.commission.data &&
  //   payout.commission.data.content &&
  //   payout.commission.data.content["9718063555"];

  const testData =
    payout &&
    payout.commission &&
    payout.commission.data &&
    payout.commission.data.content &&
    payout.commission.data.content;

  const finalData = [];

  if (testData && testData.constructor == Object) {
    Object.keys(testData).forEach((key) => {
      // finalData.push(testData[key]);
      const objCopy = JSON.parse(JSON.stringify(testData[key]));
      objCopy["vendor"] = key;
      finalData.push(objCopy);
    });
  }

  console.log("commissionData", finalData);
  const rows = [];

  const prepareData = (commissionData) => {
    let lastCategory = null;
    if (commissionData) {
      Object.keys(commissionData).forEach((itemKey) => {
        if (Array.isArray(commissionData[itemKey])) {
          commissionData[itemKey].forEach((product) => {
            if (itemKey !== lastCategory) {
              rows.push(
                <ProductRow
                  itemKey={itemKey}
                  data={commissionData}
                  openPopup={openPopup}
                  vendor={commissionData.vendor}
                />
              );
            }
            lastCategory = itemKey;
          });
        }
      });
    }
  };

  if (finalData) {
    Object.keys(finalData).forEach((item) => {
      prepareData(finalData[item]);
    });
  }

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Commission" value="Commission" />
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-shadow mb-4">
                <div className="card-header">
                  <div className="card-title">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn-common"
                        onClick={printPage}
                      >
                        Print
                      </button>
                    </div>
                  </div>
                </div>
                {isPopupVisible ? (
                  <CommissionForm
                    closePopUp={closePopUp}
                    itemToUpdate={itemInfo.item}
                    comissionRange={comissionRange}
                    setMessage={setMessage}
                    userId={itemInfo.vendor}
                  />
                ) : (
                  ""
                )}
                <div className="card-body">
                  <div className="done">{message}</div>
                  <table
                    id="bs4-table"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>UserName</th>
                        <th>Mode</th>
                        <th>Range</th>
                        <th>Merchant Code</th>
                        <th>Charges</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
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

const ProductRow = ({ itemKey, data, openPopup, vendor }) => {
  const range = [];
  const merchantCode = [];
  const charges = [];
  const commission = [];
  const edit = [];
  data[itemKey].forEach((item) => {
    range.push(
      <div>
        {`Rs.${item.minAmount} - Rs.${item.maxAmount}`}
        <br />
      </div>
    );
    merchantCode.push(<div>{item.merchantApiCode || "NA"}</div>);

    let commissionValue = "NA";
    if (item.commissionType == "FIX") {
      commissionValue = `Rs. ${item.comission} + GST`;
    } else if (item.commissionType == "PERCENTAGE") {
      commissionValue = `${item.comission}% + GST`;
    }

    commission.push(<div>{commissionValue}</div>);
    edit.push(<div onClick={() => openPopup(item, itemKey, vendor)}>Edit</div>);
  });
  return (
    <tr>
      <td>{vendor}</td>
      <td>{itemKey}</td>
      <td>{range}</td>
      <td>{merchantCode}</td>
      <td>{commission}</td>
      <td>{edit}</td>
    </tr>
  );
};

/* const PRODUCTS = {
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
  }; */
