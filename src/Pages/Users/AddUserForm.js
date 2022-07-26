import React, { useState, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import { Button, ModalWrapper } from "../../Components/UI/StyledConstants";
const initialFormData = Object.freeze({
  address1: "",
  address2: "",
  dob: "YYYY-MM-DD",
  email: "",
  firstName: "",
  landmark: "",
  langKey: "en",
  lastName: "",
  otp: "",
  phoneNumber: "",
  pincode: "",
  qrCodeId: "",
  role: "",
  tenantId: 0,
  userName: "",
});

const AddUserForm = (props) => {
  const {
    editUserData,
    userToBeEdit,
    closePopUpHandler,
    fetchUsersData,
  } = props;
  const [formData, updateFormData] = useState(initialFormData);
  const [editFormData, updateEditFormData] = useState(initialFormData);
  const [errors, updateError] = useState([]);
  const [success, updateSuccess] = useState("");

  useEffect(() => {
    if (editUserData) {
      updateFormData({
        ...editUserData,
      });
    }
  }, [editUserData]);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const updateUser = () => {
    const api = new Request("", successHandler, errorHandler, false);
    return api.post(`${urls.login.BASE_URL}${urls.User.UPDATE_USER}`, formData);
  };

  const errorHandler = (error) => {
    // {"timestamp":"2021-09-18T06:25:35.505+00:00","status":401,"error":"Unauthorized","message":"","path":"/api/users"}
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
    } else if (error && error.status == 401) {
      updateError([error.error]);
      window.scrollTo(100, 100);
    }
  };

  const successHandler = (data) => {
    if (!data.success) {
      updateError([data.msg]);
    } else {
      updateError([]);
      updateSuccess(data.msg);
      closePopUpHandler();
      removeOverlay();
      fetchUsersData();
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (editUserData) {
      updateUser();
    }

    formData.userName = formData.phoneNumber;

    // pricingToken;

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.User.CREATE_NEW_USER, formData);
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

  console.log("editUserData", editUserData);

  return (
    <ModalWrapper>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add User</h4>
            <Button
              type="button"
              className="btn-soft-danger btn-sm"
              onClick={closePopUpHandler}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">
            <form onSubmit={submitFormHandler}>
              <div className="row pb16">
                <div className="col-6">
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
                <div className="col-6">
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
              <div className="row pb16">
                <div className="col-12">
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
              <div className="row pb16">
                <div className="col-6">
                  <label for="exampleInputEmail1">DOB</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={formData.dob}
                    min="1950-01-01"
                    max="2000-12-31"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6">
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
              <div className="row pb16">
                <div className="col-12">
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
              <div className="row pb16">
                <div className="col-12">
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
              <div className="row pb16">
                <div className="col-6">
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
                <div className="col-6">
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
              <div className="row pb16">
                <div className="col-12">
                  <label for="exampleFormControlSelect1">User Role</label>
                  <select
                    className="form-control"
                    name="role"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Choose Role</option>
                    <option
                      value="PTM_VENDOR"
                      selected={
                        editUserData && editUserData.role == "PTM_VENDOR"
                          ? true
                          : false
                      }
                    >
                      Vendor
                    </option>
                    <option
                      value="PTM_SUB_ADMIN"
                      selected={
                        editUserData && editUserData.role == "PTM_SUB_ADMIN"
                          ? true
                          : false
                      }
                    >
                      Sub Admin
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex item-center justify-center gap16">
                <Button
                  type="button"
                  className="btn-danger"
                  onClick={closePopUpHandler}
                >
                  Close
                </Button>
                <Button type="submit" className="btn-success">
                  {editUserData ? "Update User" : "Save User"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddUserForm;



// {modal &&
//   <ModalWrapper>
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h4>Change Active QR Code</h4>
//         </div>
//         <div className="modal-body">
//           <ChangeQrWrapper>
//             <select
//               name="qrCode"
//               className="form-control"
//               onChange={(e) => setQrCode(e.target.value)}
//             >
//               <option value="">Select QR Code</option>
//               <option value="QR Code 1">QR Code 1</option>
//               <option value="QR Code 2">QR Code 2</option>
//               <option value="QR Code 3">QR Code 3</option>
//             </select>
//             <div className="qr-image flex item-center justify-center">
//               <img src="https://storage.googleapis.com/ptm-assets-prod/icons/yes-paytm.png" alt="" />
//             </div>
//             <div className="flex item-center justify-center">
//               <Button className="btn-success">Change QR Code</Button>
//             </div>
//           </ChangeQrWrapper>
//         </div>
//       </div>
//     </div>

//   </ModalWrapper>
