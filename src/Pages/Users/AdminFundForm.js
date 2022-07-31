import React, { useState, useRef } from "react";
import APIS from "../../utils/urls";
import Request from "../../utils/Request";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";

function AdminFundForm({
  userId,
  closeAdminFundForm,
  setStatusMsg,
  successCallBack,
}) {
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
    let walletAPI = `${APIS.login.BASE_URL}${APIS.Wallet.MANAGE_WALLET}`.replace(
      "{actionType}",
      walletAction
    );

    formData.amount = parseInt(formData.amount);
    request.post(walletAPI, formData);
  };
  const successHandler = (response, headers) => {
    if (response.success) {
      closeAdminFundForm();
      successCallBack();
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
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              Add Fund
            </h4>
            <Button
              type="button"
              className="close"
              onClick={closeAdminFundForm}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>

          <div className="modal-body">
            <form onSubmit={(event) => submitFormHandler(event)}>
                <div className="">
                  <div className="pb16">
                    <label className="label">Amount</label>
                    <input
                      required
                      type="number"
                      className="form-control"
                      placeholder="Amount"
                      name="amount"
                      onChange={handleChange}
                    />
                  </div>
                
                  <div className="pb16">
                    <label className="label">Action</label>
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
                
                  <div className="pb16">
                    <label className="label">Remark</label>
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
              <div className="flex item-center justify-center gap16">
                <Button
                  type="button"
                  className="btn-light"
                  data-dismiss="modal"
                  onClick={closeAdminFundForm}
                >
                  Close
                </Button>
                <Button type="submit" className="btn-success">
                  Add Fund
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default AdminFundForm;
