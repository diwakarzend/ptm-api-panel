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
          <div className="flex space-between mb-8">
            <label className="label" htmlFor="mobile">Forget Password</label>
          </div>
          <input
            className="form-control"
            id="mobile"
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
        <div className="floating-label-group inputgroup">
        <div className="flex space-between mb-8">
            <label className="label" htmlFor="pass">Password</label>
          </div>
          <input
            id="pass"
            name="password"
            className="form-control"
            type="password"
            autoComplete="off"
            required
            onChange={handleChange}
            placeholder="New Password"
          />
        </div>
        <div className="floating-label-group inputgroup">
          <OTPForm otpChangeHandler={otpChangeHandler} />
        </div>
        <div className="flex space-between">
        <input
          type="submit"
          value="Submit"
          className="submit-btn primary-btn wd48"
        />
        <input
          type="button"
          value="Cancel"
          className="submit-btn border-btn wd48"
          onClick={handleCancel}
        />
        </div>
      </form>
    );
  }
);
export default ResetPasswordForm;
