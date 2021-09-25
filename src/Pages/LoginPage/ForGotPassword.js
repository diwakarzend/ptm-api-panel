import React, { memo, useReducer } from "react";
import OTPForm from "../../Components/Common/OTPForm";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { autoFocusOTPForm } from "../../utils/common";
import "./Login.css";

const initialState = {
  otpSend: false,
  otps: {},
  formtype: "",
  mobile: "",
  password: "",
  otpInput: "",
  message: "",
};

const ForGotPassword = memo(
  ({ submitHandlerForgotPassword, cancelForgotPassword, resetSuccess }) => {
    function reducer(state, action) {
      switch (action.type) {
        case "otp_mobile":
          return { ...state, ...action.payload };

        default:
          return {
            ...state,
          };
      }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // const [status] = useState({ otpsend: false });
    // const [status] = useState({ otpsend: false });

    const btnStyle = {
      width: "110px",
      float: "left",
      "margin-right": "21px",
    };

    const handleOtpRequest = (event) => {
      event.preventDefault();
      // {code: 'ERR0000', msg: 'Something went wrong.', errorCodeList: Array(0), success: false}
      const successHandler = (response) => {
        console.log("fpass", response);
        if (response.success == false) {
          dispatch({
            type: "otp_mobile",
            payload: { message: response.msg, formtype: "otp" },
          });
        } else {
          dispatch({
            type: "otp_mobile",
            payload: { message: response.msg, otpSend: true, formtype: "otp" },
          });
        }
      };
      const errorHandler = (response) => {
        console.log("fpasserror", response);
      };

      const api = new Request("", successHandler, errorHandler, false);
      return api.get(
        `${urls.login.BASE_URL}${urls.login.RESET_PASSWORD}?phoneNumber=${state.mobile}`
      );
    };

    const changeHandler = (event) => {
      dispatch({
        type: "otp_mobile",
        payload: { [event.target.name]: event.target.value, formtype: "otp" },
      });
    };

    const otpChangeHandler = (event) => {
      autoFocusOTPForm(event);
      dispatch({
        type: "otp_mobile",
        payload: {
          otps: {
            ...state.otps,
            [event.target.name]: event.target.value,
          },
        },
      });
    };

    const submitForgotPassword = () => {
      const successHandler = (response) => {
        console.log("submitForgotPasswordp", response);
        if (response.success) {
          resetSuccess();
        } else {
          dispatch({
            type: "otp_mobile",
            payload: { message: response.msg },
          });
        }
      };
      const errorHandler = (response) => {
        console.log("submitForgotPassword1", response);
      };
      const otp = Object.values(state.otps).join("");

      const params = {
        newPassword: state.password,
        otp: otp,
        phoneNumber: state.mobile,
      };

      const api = new Request("", successHandler, errorHandler, false);
      return api.post(
        `${urls.login.BASE_URL}${urls.login.UPDATE_PASSWORD}`,
        params
      );
    };

    submitHandlerForgotPassword = (event, type) => {
      event.preventDefault();
      if (type == "cancel") {
        cancelForgotPassword();
      } else {
        // submit form
        submitForgotPassword();
      }
      // this.setState({ forgotPasswordClicked: true });
    };

    console.log("statestate", state);
    return (
      <div>
        <h2>Forgot Password</h2>
        <span className="login-error">{state.message}</span>
        {state.otpSend ? (
          <form className="form-group">
            <div className="floating-label-group">
              <input
                className="form-control"
                autoFocus="autofocus"
                type="text"
                autoComplete="off"
                placeholder="Mobile No"
                required
                name="mobile"
                value={state.mobile}
                disabled
                onChange={changeHandler}
              />
            </div>
            <div className="floating-label-group">
              <input
                name="password"
                className="form-control"
                type="password"
                autoComplete="off"
                required
                onChange={changeHandler}
                placeholder="New Password"
              />
            </div>
            <OTPForm otpChangeHandler={otpChangeHandler} />

            <input
              type="submit"
              value="Submit"
              className="submit-btn"
              style={btnStyle}
              onClick={(event) => submitHandlerForgotPassword(event, "submit")}
            />
            <input
              type="submit"
              value="Cancel"
              className="submit-btn"
              style={btnStyle}
              onClick={(event) => submitHandlerForgotPassword(event, "cancel")}
            />
          </form>
        ) : (
          <div className="floating-label-group">
            <form onSubmit={handleOtpRequest}>
              <input
                className="form-control"
                autoFocus="autofocus"
                type="text"
                autoComplete="off"
                placeholder="Mobile No"
                required
                name="mobile"
                onChange={changeHandler}
              />
              <input
                type="submit"
                value="send"
                className="submit-btn"
                style={btnStyle}
              />
            </form>
          </div>
        )}
      </div>
    );
  }
);

export default ForGotPassword;
