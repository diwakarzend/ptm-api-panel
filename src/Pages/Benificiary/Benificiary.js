import React, { useEffect, memo, useState } from "react";
import { fetchBeneficiary } from "../../actions/beneficiary";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./Benificiary.css";
import BenificiaryForm from "./BenificiaryForm";
import { addOverlay, removeOverlay } from "../../utils/common";

const Benificiary = memo((props) => {
  const { dispatch, loginUser, beneficiary } = props;
  const userRole = loginUser && loginUser.userData && loginUser.userData.role;
  const [isPopupVisible, handlePopUp] = useState(false);
  const [statusMessage, setStatus] = useState("");

  const getBeneficiary = (userRole) => {
    dispatch(fetchBeneficiary(userRole));
  };

  //componentDidUpdate

  useEffect(() => {
    if (userRole) {
      getBeneficiary(userRole);
    }
  }, [userRole]);

  const changeHandler = (event) => {
    dispatch(fetchFundRequests(userRole, event.target.value));
  };

  const closePopUpHandler = () => {
    removeOverlay();
    handlePopUp(false);
  };

  const openPopupHandler = () => {
    addOverlay();
    handlePopUp(true);
  };

  const successHandler = (response) => {
    console.log("response", response);
    setStatus(response.msg);
    getBeneficiary(userRole);
  };
  const errorHandler = (response) => {
    console.log("errorHandler", response);
    setStatus(response.msg);
  };

  const handleApprove = (requestId) => {
    // reqstfunduuid
    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      urls.login.BASE_URL + urls.Wallet.FUND_REQUEST_APPROVE + requestId
    );
  };
  const handleReject = (requestId) => {
    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      urls.login.BASE_URL + urls.Wallet.FUND_REQUEST_REJECT + requestId
    );
  };

  console.log("benificiary", props);
  const benificiaryItems =
    beneficiary && beneficiary.items && beneficiary.items.data;

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Beneficiary" value="Beneficiary" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <div className="card-header fund-modal">
                <div className="card-title">Beneficiary</div>
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
              </div>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                {statusMessage}
              </div>

              <div class="col-md-12">
                <div class="form-group">
                  {userRole != "PTM_ADMIN" ? (
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      onChange={changeHandler}
                    >
                      <option value="">Search Payment Status</option>
                      <option value="INITIATED">INITIATED</option>
                      <option value="DONE">Completed</option>
                    </select>
                  ) : (
                    ""
                  )}
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
