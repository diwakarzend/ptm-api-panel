import React from "react";
import { connect } from "react-redux";
import {
  loginRequest,
  loginOtpValidationRequest,
  loginOtpResendRequest,
  loginResetStore,
} from "../../actions/Login";
import LoginRoot from "./LoginRoot";
import StyleWrapper from "./LoginPage.style";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onLoginOtpSubmit = this.onLoginOtpSubmit.bind(this);
    this.onLoginOtpResend = this.onLoginOtpResend.bind(this);
    this.onLoginOtpCancel = this.onLoginOtpCancel.bind(this);
    this.onOtpLimitExceeded = this.onOtpLimitExceeded.bind(this);
    //this.props.loginResetStore();
  }

  componentWillMount() {
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn) {
      history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn) {
      const { loginResetStore, history } = this.props;
      loginResetStore();
      history.push("/dashboard");
    }
  }

  onLoginSubmit(data) {
    const params = {
      username: data.username,
      password: data.password,
      tenantId: 1,
      //   userType: "EXECUTIVE"
    };

    this.props.loginRequest(params);
  }

  onLoginOtpSubmit(data) {
    const params = {
      username: this.props.userData.username,
      otp: data.otp,
      userType: "EXECUTIVE",
    };
    this.props.loginOtpValidationRequest(params);
  }

  onLoginOtpCancel() {
    this.props.loginResetStore();
  }

  onOtpLimitExceeded() {
    this.props.loginResetStore();
  }

  onLoginOtpResend() {
    const params = {
      username: this.props.userData.username,
      userType: "EXECUTIVE",
    };
    this.props.loginOtpResendRequest(params);
  }

  shouldShowOTPForm() {
    return this.props.isLoggedIn && !this.props.isOtpValidated;
  }

  render() {
    return (
      <StyleWrapper className="login-wrapper">
        <LoginRoot
          showOtpForm={this.shouldShowOTPForm()}
          invalidOtpCount={this.props.invalidOtpCount}
          isLoginFormSubmitting={this.props.isLoginFormSubmitting}
          isOTPFormSubmitting={this.props.isOTPFormSubmitting}
          onLoginSubmit={this.onLoginSubmit}
          onLoginOtpSubmit={this.onLoginOtpSubmit}
          onLoginOtpResend={this.onLoginOtpResend}
          onLoginOtpCancel={this.onLoginOtpCancel}
          onOtpLimitExceeded={this.onOtpLimitExceeded}
        />
      </StyleWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { loginUser } = state;
  return {
    isLoginFormSubmitting: loginUser.isLoggingIn,
    isOTPFormSubmitting: loginUser.isOtpValidating,
    isLoggedIn: loginUser.isLoggedIn,
    isOtpValidated: loginUser.isOtpValidated,
    invalidOtpCount: loginUser.invalidOtpCount,
    isAuthenticated: loginUser.isAuthenticated,
    userData: loginUser.userData,
  };
}

export default connect(mapStateToProps, {
  loginRequest,
  loginOtpValidationRequest,
  loginOtpResendRequest,
  loginResetStore,
})(LoginPage);
