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
           <div className="floating-label-group inputgroup">
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
           <div className="flex space-between">
          <input
            type="submit"
            value="Send"
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

export default RequestOTPForm;
