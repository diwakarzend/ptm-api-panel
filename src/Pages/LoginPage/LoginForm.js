import React, { Fragment } from "react";
import { isEmpty } from "../../utils/common";
import ResetPassword from "../../Components/ResetPassword/ResetPassword";
import { LoginFormWrapper } from "./style";

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
    return (
      <LoginFormWrapper className="login-form-wrapper">
        <div className="">
          <div className="login-bg">
            <img src={'/images/login-banner.png'} alt="" />
          </div>
          <div className="login-form">
            <div className="form-heading text-center mb-28">
              <h4 className="fw-medium">Easy & fast payment with UPI</h4>
              <p className="fs-15 fw-medium">pay directlyfrom your bank account using your mobile</p>
            </div>
            <div className="login-form-inner">
              {forgotPasswordClicked ? (
                <ResetPassword
                  handleCancel={this.cancelForgotPassword}
                  resetSuccess={this.resetSuccess}
                />
              ) : (
                <Fragment>
                  <form className="form-group" onSubmit={this.onFormSubmit}>
                    <div className="logo-wrapper text-center mb24">
                      <img
                        src={'/images/q-pay-logo.png'}
                        alt="INRPAY"
                        className="logo-icon"
                      />
                      <p className="mt4">Sign in to continue to QPAY.</p>
                    </div>
                    {
                      (successMsg || errorMsg) &&
                      <div class={`${successMsg ? 'alert-success' : 'alert-danger'} alert text-center`} role="alert">
                        {successMsg || errorMsg}
                      </div>
                    }
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
                        className="reset-password cursor-pointer"
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
      </LoginFormWrapper>
    );
  }
}

export default LoginForm;
