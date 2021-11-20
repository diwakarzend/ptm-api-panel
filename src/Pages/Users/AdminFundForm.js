import React, { useState } from "react";
import APIS from "../../utils/urls";
import Request from "../../utils/Request";

function AdminFundForm({ userId, closeAdminFundForm }) {
  const [amount, setAmount] = useState(0);
  const [remark, setRemark] = useState("");

  const submitFormHandler = (event) => {
    event.preventDefault();
    const request = new Request("", successHandler, errorHandler, true);
    request.post(`${APIS.login.BASE_URL}${APIS.Wallet.ADD_CREDIT}`, {
      amount: parseInt(amount),
      ewalletType: "MAIN_WALLET",
      remark: remark,
      userId: userId,
    });
  };
  const successHandler = (response, headers) => {};

  const errorHandler = (error) => {
    console.log("failed call");
  };

  return (
    <div
      className={`modal right fade show`}
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel2"
      style={{ display: "block", paddingRight: "15px" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Fund
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeAdminFundForm}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Amount"
                      name="amount"
                      onChange={(event) => setAmount(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Remark</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Remark"
                      name="remark"
                      onChange={(event) => setRemark(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary themebtn transparent"
                  data-dismiss="modal"
                  onClick={closeAdminFundForm}
                >
                  Close
                </button>

                {/* {isPopupVisible && (
                  <AdminFundForm
                    isPopupVisible={isPopupVisible}
                    closeAdminFundForm={closeAdminFundPopUpHandler}
                    userRole={userRole}
                    getFundRequest={getFundRequest}
                    setStatus={setStatus}
                  />
                )} */}

                <button
                  type="submit"
                  className="btn btn-primary themebtn"
                  onClick={(event) => submitFormHandler(event)}
                >
                  Add Fund
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       <label>Amount</label>
  //       <input onChange={(event) => setAmount(event.target.value)} />
  //     </div>
  //     <div>
  //       <label>Remark</label>
  //       <input onChange={(event) => setRemark(event.target.value)} />
  //     </div>
  //     <button onClick={(event) => submitFormHandler(event)}>Submit</button>
  //   </div>
  // );
}

export default AdminFundForm;
