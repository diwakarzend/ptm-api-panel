import React, { useState, memo } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import "./Benificiary.css";

const initialFormData = Object.freeze({
  firstName: "",
  lastName: "",
  mobileNumber: "",
  bankName: "",
  accountNumber: "",
  ifscCode: "",
});

const BenificiaryForm = memo(
  ({ closePopUpHandler, userRole, getBeneficiary, setStatus }) => {
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
          getBeneficiary(userRole);
          setStatus("Beneficary added successfully");
          //fetchUsersData();
        }
      };

      const api = new Request("", successHandler, errorHandler, false);
      return api.post(
        urls.login.BASE_URL + urls.User.ADD_BENEFICIARY,
        formData
      );
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
        style={{ display: "block" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Beneficiary
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closePopUpHandler}
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
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="depositAccount"
                        aria-describedby="First Name"
                        placeholder="First Name"
                        name="firstName"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="depositAccount"
                        aria-describedby="Last Name"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Mobile No</label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="requestedAmount"
                        placeholder="Mobile No"
                        name="mobileNumber"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Bank Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Bank Name"
                        name="bankName"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Account Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Account Number"
                        name="accountNumber"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">IFSC Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ifsc Code"
                        name="ifscCode"
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
                    onClick={closePopUpHandler}
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
  }
);

export default BenificiaryForm;
