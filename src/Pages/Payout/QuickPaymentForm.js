import React, { useState, memo, useEffect, useRef } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import Step2Form from "./Step2Form";
import "./QuickPayment.css";
import PayoutThanks from "./PayoutThanks";

const initialFormData = Object.freeze({
  beneficiaryName: "",
  accountNumber: "",
  ifscCode: "",
  mobileNumber: "",
  remittanceAmount: "",
  route: "",
  type: "",
  clientId: "", //
});

const QuickPaymentForm = memo(({ closeQuickPopUpHandler, benificiaryData }) => {
  const [formData, updateFormData] = useState(initialFormData);
  const [otpData, setotpData] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const [otpStatus, setotpStatus] = useState({
    error: false,
    success: false,
  });
  const [step1Response, updatestep1Response] = useState({});

  const [payoutSuccessData, setPayoutSuccess] = useState("");
  const [statusMessage, updateMessage] = useState({
    error: "",
    success: "",
  });

  const { firstName, lastName, mobile, accountNumber, ifscCode, bankName } =
    benificiaryData;

  const step2SubmitHandler = (event) => {
    event.preventDefault();
    const otp = Object.values(otpData).join("");
    const successHandler = (response) => {
      if (response.success == true) {
        setotpStatus({
          ...otpStatus,
          success: true,
          error: false,
        });
        setPayoutSuccess(response);
        updateMessage({
          ...statusMessage,
          success: response.msg,
          error: "",
        });
      } else {
        setotpStatus({
          ...otpStatus,
          error: true,
        });
        updateMessage({
          ...statusMessage,
          error: response.msg,
          success: "",
        });
      }

      // let errorCode = "";
      // if (response.errorCodeList) {
      //   errorCode = response.errorCodeList[0];
      // }
    };
    const errorHandler = (response) => {};

    const tranSactionId = step1Response.data.tnxId;
    const api = new Request("", successHandler, errorHandler, false);
    return api.put(
      `${urls.login.BASE_URL}${urls.payout.ADD_PAYOUT}?payOutOtp=${otp}&txnId=${tranSactionId}`
    );
  };

  /*   {"code":"ERR0029","msg":"payout fail from merchant !","errorCodeList":["Invalid IFSC"],"success":false}
   */

  const submitFormHandler = (event) => {
    event.preventDefault();
    formData.type = formData.route;

    const errorHandler = (response) => {
      const errors = [];
      if (response && response.status == 400) {
        if (response.fieldErrors && response.fieldErrors instanceof Array) {
          setErrors(response.fieldErrors[0]);
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
      if (response.success) {
        updatestep1Response(response);
        updateMessage({
          ...statusMessage,
          success: response.msg,
          error: "",
        });
      } else {
        updateMessage({
          ...statusMessage,
          error: response.msg,
          success: "",
        });

        //removeOverlay();
        // getBeneficiary(userRole);
        //  setStatus("Beneficary added successfully");
        //fetchUsersData();
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.payout.ADD_PAYOUT, formData);
  };

  const changeHandler = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const otpChangeHandler = (event) => {
    const { maxLength, value, name } = event.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex);
    if (value.length == maxLength) {
      const nextfield = document.querySelector(
        `input[name=otp-${fieldIntIndex + 1}]`
      );
      if (nextfield !== null) {
        nextfield.focus();
      }
    }

    setotpData({
      ...otpData,
      [name]: value,
    });
  };

  useEffect(() => {
    //      : "12345678"
    //  : "HDFC"
    //  : "Ram"
    //  : "hdfc123"
    // : "Lakhan"
    //  : "9718063555"
    // status: "ACTIVE"
    const updatedData = {
      beneficiaryName: `${firstName} ${lastName}`,
      accountNumber: accountNumber,
      ifscCode: ifscCode,
      mobileNumber: mobile,
    };

    updateFormData({
      ...formData,
      ...updatedData,
    });
  }, []);

  const msgClass = statusMessage.success ? "done" : "fail";

  console.log(statusMessage, msgClass);

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
              Quick Payment
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeQuickPopUpHandler}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {!otpStatus.success && (
            <div style={{ textAlign: "center" }} className={msgClass}>
              {statusMessage.success || statusMessage.error}
            </div>
          )}

          {otpStatus.success ? (
            <PayoutThanks payoutSuccessData={payoutSuccessData} />
          ) : !step1Response.success ? (
            <Step1Form
              submitFormHandler={submitFormHandler}
              bankName={bankName}
              ifscCode={ifscCode}
              firstName={firstName}
              lastName={lastName}
              accountNumber={accountNumber}
              changeHandler={changeHandler}
              closeQuickPopUpHandler={closeQuickPopUpHandler}
            />
          ) : (
            <Step2Form
              step2SubmitHandler={step2SubmitHandler}
              otpChangeHandler={otpChangeHandler}
              formData={formData}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default QuickPaymentForm;

const Step1Form = ({
  submitFormHandler,
  bankName,
  ifscCode,
  firstName,
  lastName,
  accountNumber,
  changeHandler,
  closeQuickPopUpHandler,
}) => {
  return (
    <React.Fragment>
      <form onSubmit={submitFormHandler}>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group beneficiary-selection">
                <span className="bank-name"> {bankName} </span>
                <span className="ifsc-name"> ({ifscCode}) </span>
                <span className="beneficiary-name">
                  {`${firstName} ${lastName}`} <br />
                  {accountNumber}
                </span>
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <label for="exampleInputEmail1">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Amount"
                  name="remittanceAmount"
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>

            {/* <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Remarks</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add for free"
                      name="remark"
                    />
                  </div>
                </div> */}

            <div className="col-md-12">
              <div className="form-group">
                <label for="exampleFormControlSelect1">TRANSFER MODE</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="route"
                  required
                  onChange={changeHandler}
                >
                  <option value=""> Choose Mode </option>
                  <option value="NEFT"> NEFT </option>
                  <option value="IMPS">IMPS</option>
                  <option value="RTGS">RTGS</option>
                  <option value="NB">Net Banking</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary themebtn transparent"
              data-dismiss="modal"
              onClick={closeQuickPopUpHandler}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary themebtn">
              Next
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
