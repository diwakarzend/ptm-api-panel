import React, { useEffect, memo, useState } from "react";
import { fetchBeneficiary } from "../../actions/beneficiary";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./Benificiary.css";
import BenificiaryForm from "./BenificiaryForm";
import QuickPaymentForm from "../Payout/QuickPaymentForm";
import { addOverlay, removeOverlay } from "../../utils/common";

const Benificiary = memo((props) => {
  const { dispatch, login, beneficiary } = props;
  const userRole = login && login.userData && login.userData.role;
  const [isPopupVisible, handlePopUp] = useState(false);
  const [statusMessage, setStatus] = useState("");
  const [isQuickPopupVisible, handleQuickPopUp] = useState(false);
  const [payeeInfo, setPayeeInfo] = useState("");

  const benificiaryItems =
    beneficiary && beneficiary.items && beneficiary.items.data;

  useEffect(() => {
    getBeneficiary();
  }, []);

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
  };

  const closeQuickPopUpHandler = () => {
    removeOverlay();
    handleQuickPopUp(false);
  };

  const openQuickPopupHandler = (beneficiaryId) => {
    addOverlay();
    handleQuickPopUp(true);
    let payeeData = "";
    if (
      benificiaryItems &&
      Array.isArray(benificiaryItems) &&
      benificiaryItems.length > 0
    ) {
      payeeData = benificiaryItems.filter(
        (item) => item.beneficiaryId == beneficiaryId
      );
      if (payeeData.length > 0) {
        setPayeeInfo(payeeData[0]);
      }
    }
  };

  console.log("benificiary", props, payeeInfo);

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
                    //  className="btn btn-secondary fund-btn"
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
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                {statusMessage}
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
                              <button
                                onClick={() =>
                                  openQuickPopupHandler(item.beneficiaryId)
                                }
                                className="quick-payment-btn"
                              >
                                Quick Payment
                              </button>
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
