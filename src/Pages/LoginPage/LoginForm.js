import React from "react";
import { isEmpty } from "../../utils/common";

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
    let submitButton = (
      <button type="submit" className="login-link">
        LOGIN
      </button>
    );

    if (this.props.isFormSubmitting) {
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
    }
    return (
      <div className="container-fluid">
        <div className="row main-content bg-success text-center">
          <div className="col-md-4 text-center company__info">
            <span className="company__logo">
              <h2>
                <span className="fa fa-android"></span>
              </h2>
            </span>
            <h4 className="company_title">Your Company Logo</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
              <div className="row">
                <h2>Log In</h2>
              </div>
              <div className="row">
                <form
                  control=""
                  className="form-group"
                  onSubmit={this.onFormSubmit}
                >
                  <div className="row">
                    <input
                      className="form__input"
                      autoFocus="autofocus"
                      type="text"
                      ref={(input) => {
                        this.username = input;
                      }}
                      autoComplete="off"
                      placeholder="Enter Username or Mobile No"
                      onFocus={this.removeErrorMsg}
                    />
                  </div>
                  <div className="row">
                    <input
                      className="form__input"
                      type="password"
                      ref={(input) => {
                        this.password = input;
                      }}
                      placeholder="Enter Password"
                      onFocus={this.removeErrorMsg}
                    />
                  </div>
                  <div className="row">
                    <input type="submit" value="Submit" className="btn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
