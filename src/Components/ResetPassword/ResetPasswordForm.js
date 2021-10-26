import React, { memo } from "react";
import OTPForm from "../Common/OTPForm";
const btnStyle = {
  width: "110px",
  float: "left",
  "margin-right": "21px",
};
const ResetPasswordForm = memo(
  ({
    submitFormHandler,
    otpChangeHandler,
    handleCancel,
    handleChange,
    mobile,
  }) => {
    return (
      <form className="form-group" onSubmit={submitFormHandler}>
        <div className="floating-label-group">
          <input
            className="form-control"
            autoFocus="autofocus"
            type="number"
            autoComplete="off"
            placeholder="Mobile No"
            required
            name="mobile"
            value={mobile}
            disabled
            onChange={handleChange}
          />
        </div>
        <div className="floating-label-group">
          <input
            name="password"
            className="form-control"
            type="password"
            autoComplete="off"
            required
            onChange={handleChange}
            placeholder="New Password"
          />
        </div>
        <div className="floating-label-group">
          <OTPForm otpChangeHandler={otpChangeHandler} />
        </div>
        <input
          type="submit"
          value="Submit"
          className="submit-btn"
          style={btnStyle}
        />
        <input
          type="button"
          value="Cancel"
          className="submit-btn"
          style={btnStyle}
          onClick={handleCancel}
        />
      </form>
    );
  }
);
export default ResetPasswordForm;
