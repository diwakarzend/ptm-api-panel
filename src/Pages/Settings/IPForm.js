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

    const vendorName = event.target.value;
    const errorHandler = (response) => {
      console.log(response);
    };

    const successHandler = (response) => {
      console.log(response);

      if (!response.success) {
      } else {
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      `${urls.login.BASE_URL}${urls.User.SEARCH_USER}/${vendorName}`
    );
  };

  /* const updateUser = () => {
    const api = new Request("", successHandler, errorHandler, false);
    return api.post(`${urls.login.BASE_URL}${urls.User.UPDATE_USER}`, formData);
  }; */

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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Vendor"
                      name="vendorInput"
                      value={formData && formData.vendorInput}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter IP Address"
                      name="ipaddress"
                      value={formData && formData.ipaddress}
                      onChange={handleChange}
                    />
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
