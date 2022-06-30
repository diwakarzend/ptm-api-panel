import React, { Fragment } from "react";
import { isEmpty } from "../../utils/common";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import "./Login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        username: null,
        password: null,
        tenantId: 0,
      },
      forgotPasswordClicked: false,
      successMsg: "",
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.removeErrorMsg = this.removeErrorMsg.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = {
      username: this.username.value,
      password: this.password.value,
      tenantId: 1,
    };
    if (this.validateInput(formData)) {
      this.props.onLoginSubmit(formData);
    }
  }

  validateInput(data) {
    if (isEmpty(data.username)) {
      this.setState({ errors: { username: "Username is required!" } });
      return false;
    }
    if (isEmpty(data.password)) {
      this.setState({ errors: { password: "Password is required!" } });
      return false;
    }

    return true;
  }

  removeErrorMsg() {
    this.setState({ errors: { username: null, password: null } });
  }

  handleForgotPassword = () => {
    this.setState({ forgotPasswordClicked: true });
  };

  cancelForgotPassword = () => {
    this.setState({ forgotPasswordClicked: false });
  };

  resetSuccess = () => {
    this.setState({
      forgotPasswordClicked: false,
      successMsg: "Password reset successfully",
    });
  };

  render() {
    const { errorMsg } = this.props;
    const { forgotPasswordClicked, successMsg } = this.state;
    const cssClass = successMsg ? "success-msg" : "error-msg";
    return (
      <div className="container-fluid">
        <div className="d-flex align-items-stretch row full-page flex justify-center">
          
          <div className="form-wrapper center-form">
            <h3 className="text-center mb12">Easy & fast payment with UPI</h3>
            <p className="text-center mb-28">pay directlyfrom your bank account using your mobile</p>
            <div className="form-content-wrapper align-self-center">
              {forgotPasswordClicked ? (
                <ResetPassword
                  handleCancel={this.cancelForgotPassword}
                  resetSuccess={this.resetSuccess}
                />
              ) : (
                <Fragment>
                  <form className="form-group" onSubmit={this.onFormSubmit}>
                    <span className={cssClass}>{errorMsg || successMsg}</span>

                    <img
                      src="https://assets-inrpay-pro.s3.me-south-1.amazonaws.com/logo.jpeg"
                      alt="logo"
                      className="logo-icon"
                    />
                    <div className="floating-label-group inputgroup">
                      <div className="flex space-between mb-8">
                        <label className="label" htmlFor="user-name">Username</label>
                      </div>
                      <input
                        id="user-name"
                        placeholder="Mobile No"
                        className="form-control"
                        autoFocus="autofocus"
                        type="number"
                        ref={(input) => {
                          this.username = input;
                        }}
                        autoComplete="off"
                        onFocus={this.removeErrorMsg}
                        required
                      />
                    </div>
                    <div className="floating-label-group inputgroup">
                    <div className="flex space-between mb-8">
                        <label className="label" htmlFor="password">Password</label>
                        <div
                        className="reset-password"
                          onClick={this.handleForgotPassword}
                        >
                          Forgot password
                        </div>
                      </div>
                      <input
                        placeholder="Password"
                        id="password"
                        className="form-control"
                        type="password"
                        ref={(input) => {
                          this.password = input;
                        }}
                        onFocus={this.removeErrorMsg}
                        autoComplete="off"
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      value="Submit"
                      className="submit-btn primary-btn"
                    />
                  </form>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
