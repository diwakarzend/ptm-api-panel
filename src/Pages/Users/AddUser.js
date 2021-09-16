import React, { useState } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import ErrorBoundary from "../../Components/ErrorBoundary/ErrorBoundary";

const initialFormData = Object.freeze({
  address1: "",
  address2: "",
  authorities: ["PTM_COMPANY"],
  dob: "1985-12-07",
  email: "",
  firstName: "",
  landmark: "",
  langKey: "en",
  lastName: "",
  otp: "",
  password: "",
  phoneNumber: "",
  pincode: "",
  qrCodeId: "",
  role: "",
  tenantId: 0,
  userName: "",
});

const Users = (props) => {
  const [formData, updateFormData] = useState(initialFormData);
  const [errors, updateError] = useState([]);
  const [success, updateSuccess] = useState("");
  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    formData.userName = formData.phoneNumber;
    console.log("formData", formData);

    const successFn = (data, headers) => {
      console.log("success", data);
      if (!data.success) {
        updateError([data.msg]);
      } else {
        updateError([]);
        updateSuccess(data.msg);
      }
    };

    const errorFn = (error) => {
      console.log("error", error);
      const errors = [];
      if (error && error.status == 400) {
        if (error.fieldErrors && error.fieldErrors instanceof Array) {
          error.fieldErrors.forEach((item) =>
            errors.push(`${item.field}: ${item.message}`)
          );
        }
        if (errors.length > 0) {
          updateError(errors);
          window.scrollTo(100, 100);
        }
      }
    };

    const api = new Request("", successFn, errorFn, false);
    return api.post(
      urls.login.BASE_URL + urls.login.REGISTRATION_USER,
      formData
    );
  };

  let errorHTML = "";
  let errorStyles = "";
  let successStyles = "";
  if (errors.length > 0) {
    errorHTML = errors.map((val) => <li key={val}>{val}</li>);
    errorStyles = {
      color: "red",
      fontSize: "14px",
      marginTop: "26px",
    };
  } else {
    successStyles = {
      color: "green",
      fontSize: "14px",
      marginTop: "26px",
    };
  }

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Add User" value="Add User" />

          <div className="row">
            <div className=" col-sm-12">
              <div className="card card-shadow mb-4">
                <ErrorBoundary>
                  {errorHTML && errorStyles ? (
                    <ul style={errorStyles}>{errorHTML}</ul>
                  ) : (
                    ""
                  )}
                  {success && successStyles ? (
                    <div style={successStyles}>{success}</div>
                  ) : (
                    ""
                  )}
                </ErrorBoundary>
                <div className="modal-body">
                  <form onSubmit={submitFormHandler}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="firstName"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Address1</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address1"
                            name="address1"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Address2</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address2"
                            name="address2"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Land Mark</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Land Mark"
                            name="landmark"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Pin Code</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pin Code"
                            name="pincode"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Email Id</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Id"
                            name="email"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">DOB</label>
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            min="1950-01-01"
                            max="2000-12-31"
                            // required
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Mobile</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mobile"
                            name="phoneNumber"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleInputEmail1">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="exampleFormControlSelect1">
                            User Role
                          </label>
                          <select
                            className="form-control"
                            name="role"
                            required
                            onChange={handleChange}
                          >
                            <option value="">Choose Role</option>
                            <option value="PTM_COMPANY">Company</option>
                            {/* <option value="">Sub Admin</option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input
                        type="submit"
                        className="btn btn-primary themebtn"
                        Value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
