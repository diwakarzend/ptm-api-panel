import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
const initialFormData = Object.freeze({
  commission: 0,
  commissionType: "",
  maxAmount: 0,
  merchantCode: "",
  minAmount: 0,
  route: "",
  userId: "",
});

const CommissionForm = (props) => {
  const { closePopUp, itemToUpdate, userId } = props;
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  /* const updateUser = () => {
    const api = new Request("", successHandler, errorHandler, false);
    return api.post(`${urls.login.BASE_URL}${urls.User.UPDATE_USER}`, formData);
  }; */

  const submitFormHandler = (event) => {
    event.preventDefault();

    const errorHandler = (response) => {
      console.log(response);
    };

    const successHandler = (response) => {
      console.log(response);

      if (!response.success) {
      } else {
      }
    };

    formData.minAmount = itemToUpdate.minAmount;
    formData.maxAmount = itemToUpdate.maxAmount;
    formData.route = itemToUpdate.mode;
    formData.userId = userId;

    console.log("formData1121", formData);

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(
      `${urls.login.BASE_URL}${urls.payout.UPDATE_COMMISION}`,
      formData
    );
  };

  console.log("render", formData);

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
              Update Commission
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closePopUp}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={submitFormHandler}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <div
                      style={{
                        marginBottom: "10px",
                        textAlign: "left",
                        marginLeft: "17px",
                      }}
                    >
                      Range:
                      <strong>
                        {` ${itemToUpdate.minAmount} - ${itemToUpdate.maxAmount}`}
                      </strong>
                    </div>

                    <div className="col-md-12">
                      <div class="form-group">
                        <select
                          className="form-control"
                          onChange={handleChange}
                          name="merchantCode"
                          required
                        >
                          <option value="">Select Merchant Code</option>
                          <option value="NP">Net Paisa</option>
                          <option value="PTM">Paytm</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div class="form-group">
                        <select
                          className="form-control"
                          name="commissionType"
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Commission Type</option>
                          <option value="FIX">Fix</option>
                          <option value="PERCENTAGE">Percentage</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="requestedAmount"
                          placeholder="Amount"
                          name="commission"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary themebtn transparent"
                  data-dismiss="modal"
                  onClick={closePopUp}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary themebtn">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionForm;
