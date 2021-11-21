import React, { useState, useRef } from "react";
import APIS from "../../utils/urls";
import Request from "../../utils/Request";

function AdminFundForm({ userId, closeAdminFundForm, setStatusMsg }) {
  const [formData, setFormData] = useState({
    amount: "",
    remark: "",
    ewalletType: "MAIN_WALLET",
    userId: userId,
  });
  const walletSelect = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const walletAction = walletSelect.current.value;
    const request = new Request("", successHandler, errorHandler, true);
    let walletAPI =
      `${APIS.login.BASE_URL}${APIS.Wallet.MANAGE_WALLET}`.replace(
        "{actionType}",
        walletAction
      );

    formData.amount = parseInt(formData.amount);
    request.post(walletAPI, formData);
  };
  const successHandler = (response, headers) => {
    if (response.success) {
      closeAdminFundForm();
      setStatusMsg("Action to wallet is submitted successfully");
    }
  };

  const errorHandler = (error) => {
    console.log("failed call");
  };

  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  console.log("formData", formData);

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
            <form onSubmit={(event) => submitFormHandler(event)}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Amount</label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      placeholder="Amount"
                      name="amount"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Action</label>
                    <select
                      required
                      ref={walletSelect}
                      className="form-control"
                    >
                      <option value="">Choose Action</option>
                      <option value="deposit">Deposit</option>
                      <option value="debit">Withdraw</option>
                      <option value="hold">Hold</option>
                      <option value="hold-withdraw">Block</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Remark</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Remark"
                      name="remark"
                      onChange={handleChange}
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

                <button type="submit" className="btn btn-primary themebtn">
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
