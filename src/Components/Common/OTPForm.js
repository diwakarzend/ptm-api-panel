import React, { memo } from "react";

const OTPForm = memo(({ otpChangeHandler }) => {
  let form = [];
  for (let i = 1; i <= 6; i++) {
    form.push(
      <input
        type="text"
        className="otp-input"
        onChange={otpChangeHandler}
        name={`otp-${i}`}
        maxlength="1"
        required
        size="2"
      />
    );
  }
  return <div>{form}</div>;
});

export default OTPForm;
