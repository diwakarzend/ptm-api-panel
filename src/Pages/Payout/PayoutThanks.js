import React, { memo } from "react";

const PayoutThanks = memo((props) => {
  console.log("PayoutThanks", props);
  return (
    <div className="col-md-12">
      <div className="form-group quick-payment-successfull">
        <img
          src="https://storage.googleapis.com/ptm-assets-prod/banner/success-payment.png"
          width="50"
        />
        <h6> Payment Successfull!!</h6>
        <p> Company ID: 1011</p>
        <p> Thank You!</p>
        <p>
          Thanks for validating your OTP. Your payment has been Processed
          Successfully
        </p>
        {/* <p> Transaction Refrence No: 99665 </p>
        <p> Utr No: 026626262662</p> */}
      </div>
    </div>
  );
});

export default PayoutThanks;
