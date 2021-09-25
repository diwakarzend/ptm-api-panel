import React from "react";
import { isEmpty } from "../../utils/common";
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
    console.log("formData", formData);
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

  render() {
    const { errorMsg } = this.props;
    return (
      <div className="container-fluid">
        <div className="d-flex align-items-stretch row full-page">
          <div className="col-md-7 align-self-center left-banner ">
            <img src="http://0.0.0.0:3008/images/banner.png" alt="banner" />
          </div>
          <div className="d-flex col-md-5 form-wrapper">
            <div className="form-content-wrapper align-self-center">
              <span className="login-error">{errorMsg}</span>
              <form className="form-group" onSubmit={this.onFormSubmit}>
                <img
                  src="http://0.0.0.0:3008/images/logo.png"
                  alt="logo"
                  className="logo-icon"
                />
                <div className="floating-label-group">
                  <input
                    id="email"
                    className="form-control"
                    autoFocus="autofocus"
                    type="text"
                    ref={(input) => {
                      this.username = input;
                    }}
                    autoComplete="off"
                    onFocus={this.removeErrorMsg}
                    required
                  />

                  <label className="floating-label">Email</label>
                </div>
                <div className="floating-label-group">
                  <input
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

                  <label className="floating-label">Password</label>
                </div>
                <input type="submit" value="Submit" className="submit-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
