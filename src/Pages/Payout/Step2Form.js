import React, { useEffect, memo, useState } from "react";
import { connect } from "react-redux";
import { getCurrentDate } from "../../utils/common";
import "./QuickPayment.css";

const Step2Form = memo(
  ({
    step2SubmitHandler,
    otpChangeHandler,
    login,
    formData,
    step1Response,
    closeQuickPopUpHandler,
  }) => {
    const userData = login && login.userData && login.userData;

    return (
      <div className="modal-body">
        <form onSubmit={step2SubmitHandler}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group merchent-detail-container">
                <h5> Merchant Details</h5>
                <div className="merchent-detail-section">
                  <div className="merchent-detail-list">
                    <div className="left">
                      <label>Merchant Name:</label>
                    </div>
                    <div className="right">
                      <span>
                        {userData.firstName} {userData.lastName}
                      </span>
                    </div>
                  </div>
                  {/*  <div className="merchent-detail-list">
                    <div className="left">
                      <label>Debit Account:</label>
                    </div>
                    <div className="right">
                      <span>ICICI BANK- 101001</span>
                    </div>
                  </div> */}
                  <div className="merchent-detail-list">
                    <div className="left">
                      <label>Beneficiary Name:</label>
                    </div>
                    <div className="right">
                      <span>{formData.beneficiaryName}</span>
                    </div>
                  </div>
                  <div className="merchent-detail-list">
                    <div className="left">
                      <label>Beneficiary Account:</label>
                    </div>
                    <div className="right">
                      <span>{formData.accountNumber}</span>
                    </div>
                  </div>
                  <div className="merchent-detail-list">
                    <div className="left">
                      <label> Total Amount:</label>
                    </div>
                    <div className="right">
                      <span>{formData.remittanceAmount}</span>
                    </div>
                  </div>
                  <div className="merchent-detail-list">
                    <div className="left">
                      <label> Date:</label>
                      <span>{getCurrentDate("dmy")}</span>
                    </div>
                    <div className="right">
                      <label> Mode:</label>
                      <span>{formData.route}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group otp-section">
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-1"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-2"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-3"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-4"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-5"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-input"
                  onChange={otpChangeHandler}
                  name="otp-6"
                  maxlength="1"
                  required
                />
              </div>

              <div className="otp-message">
                <p>
                  You Need a One-Time Password (OTP) to authenticate this
                  transactions. the OTP has been send to your registered ICICI
                  Mobile number.
                </p>
              </div>
            </div>
            {/* <div className="col-md-12">
                <div className="form-group quick-payment-successfull">
                  <h6> Payment Successfull!!</h6>
                  <p>Company ID: 1011</p>
                  <p>Thank You!</p>
                  <p>
                    Thanks for validating your OTP. Your payment has been Processed
                    Successfully
                  </p>
                  <p> Transaction Refrence No: 99665 </p>
                  <p> Utr No: 026626262662</p>
                </div>
              </div> */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary themebtn transparent"
              data-dismiss="modal"
              onClick={closeQuickPopUpHandler}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary themebtn">
              Proceed To Pay
            </button>
          </div>
        </form>
      </div>
    );
  }
);

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Step2Form);
