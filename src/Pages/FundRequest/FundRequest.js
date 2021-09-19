import React, { useEffect, memo, useState } from "react";
import { fetchFundRequests } from "../../actions/userwallet";
import { connect } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./FundRequest.css";
import FundRequestForm from "./FundRequestForm";

const FundRequest = memo((props) => {
  const [isPopupVisible, handlePopUp] = useState(false);
  const { dispatch } = props;

  const fundRequests = () => {
    dispatch(fetchFundRequests("INITIATED"));
  };

  useEffect(() => {
    fundRequests();
  }, []);

  const closePopUpHandler = () => {
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };
  const openPopupHandler = () => {
    document.body.classList.add("modal-open");
    handlePopUp(true);
  };

  console.log("FundRequest", props);

  const { userwallet } = props;
  const fundRequestItems = userwallet.fundRequest.data;

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
                  />
                )}
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
                    </tr>
                  </thead>
                  <tbody>
                    {fundRequestItems && Array.isArray(fundRequestItems)
                      ? fundRequestItems.map((item, index) => {
                          return (
                            <tr key={item.reqstDate}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.fromBank}</td>
                              <td>{item.toBank}</td>
                              <td>{item.requestAmount}</td>
                              <td>{item.payementMode}</td>
                              <td>{item.reqstDate}</td>
                              <td>{item.approveStatus}</td>
                            </tr>
                          );
                        })
                      : ""}
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
  return { userwallet: state.userwallet };
};
export default connect(mapStateToProps)(FundRequest);
