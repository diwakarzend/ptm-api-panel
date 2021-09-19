import React, { useEffect, memo, useState } from "react";
import { fetchFundRequests } from "../../actions/userwallet";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./FundRequest.css";
import FundRequestForm from "./FundRequestForm";

const FundRequest = memo((props) => {
  const { dispatch, loginUser, userwallet } = props;

  const fundRequestItems = userwallet.fundRequest.data;
  const userRole = loginUser && loginUser.userData && loginUser.userData.role;

  const [isPopupVisible, handlePopUp] = useState(false);
  const [statusMessage, setStatus] = useState("");

  const fundRequests = (userRole) => {
    dispatch(fetchFundRequests(userRole));
  };

  //componentDidUpdate

  useEffect(() => {
    if (userRole) {
      fundRequests(userRole);
    }
  }, [userRole]);

  const changeHandler = (event) => {
    dispatch(fetchFundRequests(userRole, event.target.value));
  };

  const closePopUpHandler = () => {
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };

  const openPopupHandler = () => {
    document.body.classList.add("modal-open");
    handlePopUp(true);
  };

  const successHandler = (response) => {
    console.log("response", response);
    setStatus(response.msg);
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

  console.log("FundRequest", props);

  /*   userwallet:
fundRequest:
code: "INFO000"
data: Array(1)
0:
approveStatus: "INITIATED"
: "HDFC"
payementMode: "NET_BANKING"
proofUpdaodStatus: null
reqstDate: "2021-09-19T09:40:38"
reqstfundUuid: "65ff9fb4-7e82-44fc-af76-39f22efe613f"
: 1000
requestUserName: "9718063555"
  */

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Fund Request" value="Fund Request" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <div className="card-header fund-modal">
                <div className="card-title">Fund Request</div>
                <button
                  type="button"
                  className="btn btn-secondary fund-btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={openPopupHandler}
                >
                  Fund Request
                </button>
                {isPopupVisible && (
                  <FundRequestForm
                    isPopupVisible={isPopupVisible}
                    closePopUpHandler={closePopUpHandler}
                    userRole={userRole}
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
                      <th scope="col">From Bank Name</th>
                      <th scope="col">To Bank Name</th>
                      <th scope="col">Requested Amount</th>
                      <th scope="col">Payment Mode</th>
                      <th scope="col">Requested Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundRequestItems &&
                    Array.isArray(fundRequestItems) &&
                    fundRequestItems.length > 0 ? (
                      fundRequestItems.map((item, index) => {
                        return (
                          <tr key={item.reqstDate}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.fromBank}</td>
                            <td>{item.toBank}</td>
                            <td>{item.requestAmount}</td>
                            <td>{item.payementMode}</td>
                            <td>{item.reqstDate}</td>
                            <td className={item.approveStatus.toLowerCase()}>
                              {item.approveStatus}
                            </td>
                            <td>
                              {item.approveStatus != "DONE" &&
                              userRole !== "PTM_VENDOR" ? (
                                <React.Fragment>
                                  <button
                                    onClick={() =>
                                      handleApprove(item.reqstfundUuid)
                                    }
                                    style={{
                                      fontSize: "9px",
                                      marginLeft: "2px",
                                    }}
                                  >
                                    Approve
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleReject(item.reqstfundUuid)
                                    }
                                    style={{
                                      fontSize: "9px",
                                      marginLeft: "2px",
                                    }}
                                  >
                                    Reject
                                  </button>
                                </React.Fragment>
                              ) : (
                                "NA"
                              )}
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
  return { loginUser: state.loginUser, userwallet: state.userwallet };
};
export default connect(mapStateToProps)(FundRequest);
