import React, { memo, useState } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { autoFocusOTPForm } from "../../utils/common";
import RequestOTPForm from "./RequestOTPForm";
import ResetPasswordForm from "./ResetPasswordForm";
import "../../Pages/LoginPage/Login.css";

const initialState = {
  otpSend: false,
  otps: {},
  mobile: "",
  password: "",
  otpInput: "",
  successMsg: "",
  errorMsg: "",
};

const ForGotPassword = memo(({ handleCancel, resetSuccess }) => {
  const [formData, updateFormData] = useState(initialState);

  const sendOTPHandler = (event) => {
    event.preventDefault();
    const successHandler = (response) => {
      if (response.success == true) {
        updateFormData({
          ...formData,
          otpSend: true,
          successMsg: response.msg,
          errorMsg: "",
        });
      } else {
        updateFormData({
          ...formData,
          errorMsg: response.msg,
          successMsg: "",
        });
      }
    };
    const errorHandler = (response) => {};

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      `${urls.login.BASE_URL}${urls.login.RESET_PASSWORD}?phoneNumber=${formData.mobile}`
    );
  };

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const otpChangeHandler = (event) => {
    autoFocusOTPForm(event);
    updateFormData({
      ...formData,
      otps: {
        ...formData.otps,
        [event.target.name]: event.target.value,
      },
    });
  };

  const submitForgotPassword = (event) => {
    event.preventDefault();
    const successHandler = (response) => {
      if (response.success) {
        resetSuccess();
      } else {
        updateFormData({
          ...formData,
          errorMsg: response.msg,
          successMsg: "",
        });
      }
    };
    const errorHandler = (response) => {
      updateFormData({
        ...formData,
        errorMsg: response.msg,
        successMsg: "",
      });
    };
    const otp = Object.values(formData.otps).join("");

    const params = {
      newPassword: formData.password,
      otp: otp,
      phoneNumber: formData.mobile,
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(
      `${urls.login.BASE_URL}${urls.login.UPDATE_PASSWORD}`,
      params
    );
  };

  const cssClass = formData.successMsg ? "success-msg" : "error-msg";
  return (
    <div>
      <h2>Forgot Password</h2>
      <span className={cssClass}>
        {formData.successMsg || formData.errorMsg}
      </span>
      <img
        src="https://storage.googleapis.com/ptm-assets-prod/banner/prive-pay-fav-icon.jpeg"
        alt="logo"
        className="logo-icon"
      />
      {formData.otpSend ? (
        <ResetPasswordForm
          submitFormHandler={submitForgotPassword}
          otpChangeHandler={otpChangeHandler}
          handleCancel={handleCancel}
          handleChange={handleChange}
          mobile={formData.mobile}
        />
      ) : (
        <RequestOTPForm
          sendOTPHandler={sendOTPHandler}
          handleCancel={handleCancel}
          handleChange={handleChange}
        />
      )}
    </div>
  );
});

export default ForGotPassword;
