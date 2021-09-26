import React, { memo } from "react";
const btnStyle = {
  width: "110px",
  float: "left",
  "margin-right": "21px",
};

const RequestOTPForm = memo(
  ({ handleChange, sendOTPHandler, handleCancel }) => {
    return (
        <form onSubmit={sendOTPHandler}>
           <div className="floating-label-group">
            <input
              className="form-control"
              autoFocus="autofocus"
              type="number"
              autoComplete="off"
              placeholder="Mobile No"
              required
              name="mobile"
              onChange={handleChange}
            />
           </div>
          <input
            type="submit"
            value="Send"
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

export default RequestOTPForm;
