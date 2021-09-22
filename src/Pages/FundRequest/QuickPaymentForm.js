import React, { useState, memo, useEffect, useRef } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import "./QuickPayment.css";

const QuickPaymentForm  = memo(({closeQuickPopUpHandler}) => {
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
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group beneficiary-selection">
                       <span className="bank-name"> ICICI BANK </span>  
                       <span className="ifsc-name"> (ICICI005180) </span>
                       <span className="beneficiary-name"> Diwakar <br/>
                            1580015062
                        </span>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="100"
                        name="transationRefNo"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Remarks</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add for free"
                        name="remark"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">
                        TRANSFER MODE
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                        name="payementMode"
                        required
                      >
                        <option value=""> NEFT </option>
                        <option value="UPI">IMPS</option>
                        <option value="NEFT_IMPS">RTGS</option>
                        <option value="UPI">Inter Bank Transfer</option>
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
                    Submit
                  </button>
                </div>
              </div> 
              <div className="modal-body">
                <div className="row">
                    <div className="col-md-12">
                        <h5>Select Payment Method</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <span className="links">
                                    PARTNER BANKS
                                </span>
                            </div>
                            <div className="col-md-6">
                                <span className="links">
                                    EBAY Laters
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="payementMode"
                            required
                        >
                            <option value=""> 3333333 - Web techies </option>
                            <option value="UPI"> 12345 - Niraj</option>
                            <option value="NEFT_IMPS"> 12345 - Atul</option>
                        </select>
                        </div>
                    </div>

                    <div className="col-md-12"> 
                        <div className="form-group beneficiary-selection">
                        <span className="bank-name"> ICICI BANK </span>  
                        <span className="ifsc-name"> (ICICI005180) </span>
                        <span className="beneficiary-name"> Diwakar <br/>
                                1580015062
                            </span>
                            <span className="total-amount">393984</span>
                        </div>
                    </div>
                    <div className="col-md-12"> 
                        <div className="form-group merchent-detail-container">
                            <h5> Merchent Details</h5>
                            <div className="merchent-detail-section">
                                <div className="merchent-detail-list">
                                    <div className="left"><label>Merchent Name:</label></div>
                                    <div className="right"><span>WEBTECHIES</span></div>
                                </div>    
                                <div className="merchent-detail-list">
                                    <div className="left"><label>Debit Account:</label></div>
                                    <div className="right"><span>ICICI BANK- 101001</span></div>
                                </div>    
                                <div className="merchent-detail-list">
                                    <div className="left"><label>Beneficiary Name:</label></div>
                                    <div className="right"><span>Diwakar</span></div>
                                </div>    
                                <div className="merchent-detail-list">
                                    <div className="left"><label>Beneficiary Account:</label></div>
                                    <div className="right"><span>1580432</span></div>
                                </div>  
                                <div className="merchent-detail-list">
                                    <div className="left"><label> Total Amount:</label></div>
                                    <div className="right"><span>100.00</span></div>
                                </div>   
                                <div className="merchent-detail-list">
                                    <div className="left"><label> Date:</label><span>21-09-2021</span></div>
                                    <div className="right"><label> Mode:</label><span>IMPS</span></div>
                                </div>   
                            </div>
                        </div> 
                    </div> 
                    <div className="col-md-12"> 
                         <div className="form-group otp-section">
                         <input
                            type="text"
                            className="otp-input"
                          />
                           <input
                            type="text"
                            className="otp-input"
                          />
                           <input
                            type="text"
                            className="otp-input"
                          />
                           <input
                            type="text"
                            className="otp-input"
                          />
                           <input
                            type="text"
                            className="otp-input"
                          />
                           <input
                            type="text"
                            className="otp-input"
                          />
                        </div>
                        <div className="otp-message">
                            <p> You Need a One-Time Password (OTP) to authenticate this transactions.
                                the OTP has been send to your registered ICICI Mobile number.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12"> 
                      <div className="form-group quick-payment-successfull">
                          <h6> Payment Successfull!!</h6>
                          <p>Company ID: 1011</p>
                          <p>Thank You!</p>
                          <p> Thanks for validating your OTP. Your payment has been Processed Successfully</p>
                          <p> Transaction Refrence No: 99665 </p>
                          <p> Utr No: 026626262662</p>
                      </div>
                    </div>
            </div>
            <div className="modal-footer">
            <button type="submit" className="btn btn-primary submit">
                Proceed To Pay
            </button>
            <button
                type="button"
                className="btn btn-primary cancel"
                data-dismiss="modal"
                onClick={closeQuickPopUpHandler}
            >
                Cancel
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

export default QuickPaymentForm;
