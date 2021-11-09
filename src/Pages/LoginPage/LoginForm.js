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
        <div className="d-flex align-items-stretch row full-page">
          <div className="col-md-7 align-self-center left-banner "></div>
          <div className="d-flex col-md-5 form-wrapper">
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
                      src="https://prive-assets.s3.ap-south-1.amazonaws.com/prive-pay-fav-icon.jpeg"
                      alt="logo"
                      className="logo-icon"
                    />
                    <div className="floating-label-group">
                      <input
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
                    <div className="floating-label-group">
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
                      className="submit-btn"
                    />
                  </form>
                  <div
                    className="reset-password"
                    onClick={this.handleForgotPassword}
                  >
                    Forgot password
                  </div>
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
