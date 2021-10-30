import React, { useState, useEffect } from "react";

import { fetchCommisionRange } from "../../actions/payout";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import CommissionForm from "./CommissionForm";
import { addOverlay, removeOverlay, printPage } from "../../utils/common";

import { connect } from "react-redux";

const Commission = (props) => {
  const { dispatch, payout, login } = props;
  const [isPopupVisible, setPopUp] = useState(false);
  const [itemToUpdate, setItem] = useState("");

  useEffect(() => {
    dispatch(fetchCommisionRange());
  }, []);

  const openPopup = (item, itemKey) => {
    // console.log("item", item);
    item.mode = itemKey;
    setItem(item);
    addOverlay();
    setPopUp(true);
  };

  const closePopUp = () => {
    removeOverlay();
    setPopUp(false);
  };

  const commissionData =
    payout &&
    payout.commission &&
    payout.commission.data &&
    payout.commission.data.content &&
    payout.commission.data.content["9718063555"];

  console.log("commissionData", props);

  const rows = [];
  let lastCategory = null;
  if (commissionData) {
    Object.keys(commissionData).forEach((itemKey) => {
      commissionData[itemKey].forEach((product) => {
        if (itemKey !== lastCategory) {
          rows.push(
            <ProductRow
              itemKey={itemKey}
              data={commissionData}
              openPopup={openPopup}
            />
          );
        }
        lastCategory = itemKey;
      });
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
                      {/* <button type="button" className="btn-common">
                        CSV
                      </button> */}

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
                    itemToUpdate={itemToUpdate}
                    userId="9718063555"
                  />
                ) : (
                  ""
                )}
                <div className="card-body">
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

const ProductRow = ({ itemKey, data, openPopup }) => {
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

    commission.push(
      <div>
        {item.commissionType == "FIX"
          ? `Rs. ${item.comission} + GST`
          : `${item.comission}% + GST`}
      </div>
    );
    edit.push(<div onClick={() => openPopup(item, itemKey)}>Edit</div>);
  });
  return (
    <tr>
      <td>9718063555</td>
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
