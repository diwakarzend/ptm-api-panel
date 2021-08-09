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
    return (
      <div class="container-fluid">
        <div class="d-flex align-items-stretch row full-page">
          <div class="col-md-7 align-self-center left-banner "></div>
          <div class="d-flex col-md-5 form-wrapper">
            <form className="form-group" onSubmit={this.onFormSubmit}>
              <div class="form-content-wrapper align-self-center">
                <img
                  src="assets/images/logo.png"
                  alt="logo"
                  class="logo-icon"
                />
                <div class="floating-label-group">
                  <input
                    id="email"
                    className="form-control"
                    autoFocus="autofocus"
                    type="text"
                    ref={(input) => {
                      this.username = input;
                    }}
                    autoComplete="off"
                    placeholder="Enter Username or Mobile No"
                    onFocus={this.removeErrorMsg}
                    required
                  />

                  <label class="floating-label">Email</label>
                </div>
                <div class="floating-label-group">
                  <input
                    id="password"
                    className="form-control"
                    type="password"
                    ref={(input) => {
                      this.password = input;
                    }}
                    placeholder="Enter Password"
                    onFocus={this.removeErrorMsg}
                    autocomplete="off"
                    required
                  />

                  <label class="floating-label">Password</label>
                </div>
                <input type="submit" value="Submit" className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
