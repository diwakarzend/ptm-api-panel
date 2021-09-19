import React, { useState, memo } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import "./FundRequest.css";

const initialFormData = Object.freeze({
  fromBank: "",
  payementMode: "",
  remark: "",
  requestAmount: 0,
  toBank: "",
  transationRefNo: "",
});

const FundRequestForm = memo(({ closePopUpHandler }) => {
  const [isPopupVisible, handlePopUp] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const errorHandler = (response) => {
      console.log("response", response);
      const errors = [];
      if (response && response.status == 400) {
        if (response.fieldErrors && response.fieldErrors instanceof Array) {
          response.fieldErrors.forEach((item) =>
            errors.push(`${item.field}: ${item.message}`)
          );
        }
        if (errors.length > 0) {
          setErrors(errors);
          window.scrollTo(100, 100);
        }
      } else if (response && response.status == 401) {
        setErrors([response.error]);
        window.scrollTo(100, 100);
      }
    };

    const successHandler = (response) => {
      console.log("success", response);
      if (!response.success) {
        setErrors([response.msg]);
      } else {
        setErrors([]);
        setSuccess(response.msg);
        closePopUpHandler();
        removeOverlay();
        //fetchUsersData();
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.Wallet.FUND_REQUEST, formData);
  };

  let errorHTML = "";
  let errorStyles = "";
  let successStyles = "";
  if (errors.length > 0) {
    errorHTML = errors.map((val) => <li key={val}>{val}</li>);
    errorStyles = {
      color: "red",
      fontSize: "14px",
      marginTop: "26px",
    };
  } else {
    successStyles = {
      color: "green",
      fontSize: "14px",
      marginTop: "26px",
    };
  }
  return (
    <div
      className="modal right fade show"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel2"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Fund Request
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>
            {errorHTML && errorStyles ? (
              <ul style={errorStyles}>{errorHTML}</ul>
            ) : success && successStyles ? (
              <div style={successStyles}>{success}</div>
            ) : (
              ""
            )}
          </div>
          <form onSubmit={submitFormHandler}>
            <div className="modal-body">
              <div className="row">
                {/* <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Choose Bank</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        name="firstName"
                        onChange={handleChange}
                      >
                        <option>ICICI</option>
                        <option>SBI</option>
                        <option>HDFC</option>
                      </select>
                    </div>
                  </div> */}

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">From Bank</label>
                    <input
                      type="text"
                      className="form-control"
                      id="depositAccount"
                      aria-describedby="Bank Name"
                      placeholder="Bank Name"
                      name="fromBank"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">To Bank</label>
                    <input
                      type="text"
                      className="form-control"
                      id="depositAccount"
                      aria-describedby="Bank Name"
                      placeholder="Bank Name"
                      name="toBank"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">
                      Choose Payment Mode
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      name="payementMode"
                      onChange={handleChange}
                      required
                    >
                      <option value=""> Choose Payment Mode</option>
                      <option value="UPI">UPI</option>
                      <option value="NEFT_IMPS">NEFT/IMPS</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Requested Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="requestedAmount"
                      aria-describedby="requestedAmount"
                      placeholder="Requested Amount"
                      name="requestAmount"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Reference No</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Reference No"
                      name="transationRefNo"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Remarks</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Remark"
                      name="remark"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Upload Image</label>
                      <label className="custom-file">
                        <input
                          type="file"
                          id="file2"
                          className="custom-file-input"
                        />
                        <span className="custom-file-control"></span>
                      </label>
                    </div>
                  </div> */}
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary themebtn transparent"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary themebtn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default FundRequestForm;
