import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
const initialFormData = Object.freeze({
  address1: "",
  address2: "",
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

const AddUserForm = (props) => {
  const { closePopUpHandler } = props;
  const [formData, updateFormData] = useState(initialFormData);

  // const [success, updateSuccess] = useState("");

  /* useEffect(() => {
    if (editUserData) {
      updateFormData({
        ...editUserData,
      });
    }
  }, [editUserData]); */

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  /* const updateUser = () => {
    const api = new Request("", successHandler, errorHandler, false);
    return api.post(`${urls.login.BASE_URL}${urls.User.UPDATE_USER}`, formData);
  }; */

  const errorHandler = (response) => {
    console.log(response);
  };

  const successHandler = (response) => {
    if (!response.success) {
    } else {
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const api = new Request("", successHandler, errorHandler, false);
    // return api.post(urls.login.BASE_URL + urls.User.CREATE_NEW_USER, formData);
  };

  return (
    <div
      className={`modal right fade show`}
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel2"
      style={{ display: "block", paddingRight: "15px" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add IP
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closePopUpHandler}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={submitFormHandler}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formData && formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData && formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Address1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address1"
                      name="address1"
                      value={formData && formData.address1}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Address2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address2"
                      name="address2"
                      value={formData && formData.address2}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Land Mark</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Land Mark"
                      name="landmark"
                      value={formData && formData.landmark}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Pin Code</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Pin Code"
                      name="pincode"
                      value={formData && formData.pincode}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email Id</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Id"
                      name="email"
                      value={formData && formData.email}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">DOB</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData && formData.dob}
                      min="1950-01-01"
                      max="2000-12-31"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Mobile</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile"
                      name="phoneNumber"
                      value={formData && formData.phoneNumber}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
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

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">User Role</label>
                    <select
                      className="form-control"
                      name="role"
                      required
                      onChange={handleChange}
                    >
                      <option value="">Choose Role</option>
                      <option value="PTM_VENDOR">Vendor</option>
                      <option value="PTM_SUB_ADMIN">Sub Admin</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary themebtn transparent"
                  data-dismiss="modal"
                  onClick={closePopUpHandler}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary themebtn">
                  Add IP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
