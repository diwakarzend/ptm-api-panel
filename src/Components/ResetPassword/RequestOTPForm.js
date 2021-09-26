import React, { memo } from "react";
const btnStyle = {
  width: "110px",
  float: "left",
  "margin-right": "21px",
};

const RequestOTPForm = memo(
  ({ handleChange, sendOTPHandler, handleCancel }) => {
    return (
      <div className="floating-label-group">
        <form onSubmit={sendOTPHandler}>
          <input
            className="form-control"
            autoFocus="autofocus"
            type="text"
            autoComplete="off"
            placeholder="Mobile No"
            required
            name="mobile"
            onChange={handleChange}
          />
          <input
            type="submit"
            value="send"
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
      </div>
    );
  }
);

export default RequestOTPForm;
