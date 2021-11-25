import React, { useEffect, memo, useState } from "react";
import { fetchBeneficiary } from "../../actions/beneficiary";

import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./Benificiary.css";
import BenificiaryForm from "./BenificiaryForm";
import QuickPaymentForm from "../Payout/QuickPaymentForm";
import { addOverlay, removeOverlay, hideMessage } from "../../utils/common";

const Benificiary = memo((props) => {
  const { dispatch, login, beneficiary } = props;
  const userRole = login && login.userData && login.userData.role;
  const [isPopupVisible, handlePopUp] = useState(false);
  const [statusMessage, setStatus] = useState("");
  const [isQuickPopupVisible, handleQuickPopUp] = useState(false);
  const [payeeInfo, setPayeeInfo] = useState("");
  const [editUserData, setEditUserData] = useState("");
  const benificiaryItems =
    beneficiary && beneficiary.items && beneficiary.items.data;

  useEffect(() => {
    getBeneficiary();
  }, []);

  useEffect(() => {
    hideMessage(statusMessage, setStatus);
  }, [statusMessage]);

  const getBeneficiary = () => {
    dispatch(fetchBeneficiary());
  };

  const closePopUpHandler = () => {
    removeOverlay();
    handlePopUp(false);
  };

  const openPopupHandler = () => {
    addOverlay();
    handlePopUp(true);
    setEditUserData("");
  };

  const closeQuickPopUpHandler = () => {
    removeOverlay();
    handleQuickPopUp(false);
  };

  const openQuickPopupHandler = (accountNumber) => {
    addOverlay();
    handleQuickPopUp(true);
    let payeeData = "";
    if (
      benificiaryItems &&
      Array.isArray(benificiaryItems) &&
      benificiaryItems.length > 0
    ) {
      payeeData = benificiaryItems.filter(
        (item) => item.accountNumber == accountNumber
      );
      if (payeeData.length > 0) {
        setPayeeInfo(payeeData[0]);
      }
    }
  };

  const editPopupHandler = (item) => {
    item.mobileNumber = item.mobile;
    delete item.mobile;
    setEditUserData(item);
    handlePopUp(true);
    addOverlay();
  };

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Beneficiary" value="Beneficiary" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <div className="card-header fund-modal">
                <label className="card-title">Beneficiary</label>
                {userRole !== "PTM_ADMIN" && (
                  <button
                    // type="button"
                    className="btn-common"
                    //data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={openPopupHandler}
                  >
                    Add Beneficiary
                  </button>
                )}

                {isPopupVisible && (
                  <BenificiaryForm
                    isPopupVisible={isPopupVisible}
                    closePopUpHandler={closePopUpHandler}
                    userRole={userRole}
                    getBeneficiary={getBeneficiary}
                    setStatus={setStatus}
                    editUserData={editUserData}
                  />
                )}

                {isQuickPopupVisible && (
                  <QuickPaymentForm
                    isQuickPopupVisible={isQuickPopupVisible}
                    closeQuickPopUpHandler={closeQuickPopUpHandler}
                    benificiaryData={payeeInfo}
                  />
                )}
              </div>
              <div
                style={{ textAlign: "center", marginTop: "15px" }}
                className="done"
              >
                {statusMessage}
              </div>
              <div className="card-header">
                <div className="card-title">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn-common">
                      Copy
                    </button>
                    <button type="button" className="btn-common">
                      CSV
                    </button>
                    <button type="button" className="btn-common">
                      Excel
                    </button>
                    <button type="button" className="btn-common">
                      PDF
                    </button>
                    <button type="button" className="btn-common">
                      Print
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Mobile No</th>
                      <th scope="col">Bank Name</th>
                      <th scope="col">Account No</th>
                      <th scope="col">IFSC</th>
                      <th scope="col">Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benificiaryItems &&
                    Array.isArray(benificiaryItems) &&
                    benificiaryItems.length > 0 ? (
                      benificiaryItems.map((item, index) => {
                        return (
                          <tr key={item.reqstDate}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.mobile}</td>
                            <td>{item.bankName}</td>
                            <td>{item.accountNumber}</td>
                            <td>{item.ifscCode}</td>
                            <td className={item.status.toLowerCase()}>
                              {item.status}
                            </td>
                            <td>
                              <i
                                onClick={() =>
                                  openQuickPopupHandler(item.accountNumber)
                                }
                                className="fa fa-rupee"
                                style={{
                                  fontSize: "22px",
                                  marginRight: "10px",
                                  cursor: "pointer",
                                }}
                                title="Quick Pay"
                              />
                              <i
                                style={{
                                  margin: "-33px 0px -5px 25px",
                                  display: "block",
                                  fontSize: "18px",
                                }}
                              >
                                |
                              </i>
                              <i
                                class="icon-pencil"
                                onClick={() => editPopupHandler(item)}
                                title="Edit user"
                                style={{
                                  fontSize: "17px",
                                  margin: "-24px -4px -2px 43px",
                                  cursor: "pointer",
                                  display: "block",
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="8" style={{ textAlign: "center" }}>
                          No Data Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Benificiary);
