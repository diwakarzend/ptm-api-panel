import React, { memo, useState } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";

const initialFormData = Object.freeze({
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
});
const ChangePassword = memo((props) => {
  const [formData, updateFormData] = useState(initialFormData);
  const [message, setMessage] = useState({ error: "", success: "" });

  const submitFormHandler = (event) => {
    event.preventDefault();

    const errorHandler = (response) => {};

    const successHandler = (response) => {
      if (response && response.success == false) {
        setMessage({ error: response.msg, success: "" });
      } else {
        setMessage({ success: response.msg, error: "" });
      }
    };

    if (formData.newPassword !== formData.confirmNewPassword) {
      setMessage({
        success: "",
        error: "New Passwords are not same",
      });

      return;
    }

    delete formData.confirmNewPassword;

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.login.CHANGE_PASSWORD, formData);
  };

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  return (
    <form className="form-group" onSubmit={submitFormHandler}>
      <div className={`${message.success ? "done" : "fail"}`}>
        {message.error || message.success}
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Current Password"
            name="currentPassword"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            name="newPassword"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary themebtn">
        Update
      </button>
    </form>
  );
});
export default ChangePassword;
