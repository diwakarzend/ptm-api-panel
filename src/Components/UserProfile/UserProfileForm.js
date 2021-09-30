import React, { useState, memo, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import "./UserProfile.css";

const initialFormData = Object.freeze({
  brandName: "",
  registerCompany: "",
  registerAddress: "",
  gstNo: "",
  website: "",
  brnadName: "",
});

const UserProfileForm = memo(({ closePopUpHandler }) => {
  const [formData, updateFormData] = useState(initialFormData);
  const [statusMessage, setMessage] = useState({ error: "", success: "" });

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  useEffect(() => {
    const successHandler = (res) => {
      console.log("success", res);
      if (res.success) {
        updateFormData({
          ...formData,
          ...res.data,
          brandName: res.data.brnadName,
        });
      }
    };

    const errorHandler = (res) => {
      console.log("error", res);
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(urls.login.BASE_URL + urls.User.GET_FDETAILS);
  }, []);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const errorHandler = (response) => {
      console.log("saveeerrorHandler", response);

      const errors = [];
      // if (response && response.status == 400) {
      //   if (response.fieldErrors && response.fieldErrors instanceof Array) {
      //     response.fieldErrors.forEach((item) =>
      //       errors.push(`${item.field}: ${item.message}`)
      //     );
      //   }
      //   if (errors.length > 0) {
      //     setErrors(errors);
      //   }
      // } else if (response && response.status == 401) {
      //   setErrors([response.error]);
      // }
    };

    const successHandler = (response) => {
      console.log("savee", response);
      if (!response.success) {
        setMessage({
          ...formData,
          error: response.msg,
        });
      } else {
        setMessage({
          ...formData,
          success: "Profile created successfully",
          error: "",
        });
        // setErrors([]);
        // setSuccess(response.msg);
        // closePopUpHandler();
        // removeOverlay();
        // getBeneficiary(userRole);
        // setStatus("Beneficary added successfully");
        //fetchUsersData();
      }
    };

    let params = "";

    Object.keys(formData).forEach((item) => {
      params += `${item}=${formData[item]}&`;
    });

    const api = new Request("", successHandler, errorHandler, false);
    return api.get(
      urls.login.BASE_URL + urls.User.SAVE_FDETAILS + "?" + params
    );
  };

  // let errorHTML = "";
  // let errorStyles = "";
  // let successStyles = "";
  // if (errors.length > 0) {
  //   errorHTML = errors.map((val) => <li key={val}>{val}</li>);
  //   errorStyles = {
  //     color: "red",
  //     fontSize: "12px",
  //     marginTop: "26px",
  //     fontFamily: "monospace",
  //   };
  // } else {
  //   successStyles = {
  //     color: "green",
  //     fontSize: "14px",
  //     marginTop: "26px",
  //     fontFamily: "monospace",
  //   };
  // }

  console.log("sssssss", formData);

  const cssClass = statusMessage.success ? "done" : "fail";

  return (
    <div
      className="modal right fade show"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel2"
      style={{ display: "block" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              My Profile
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
          <div className={cssClass}>
            {statusMessage.success || statusMessage.error}
          </div>
          <form onSubmit={submitFormHandler}>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Brand</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Brand"
                      name="brandName"
                      value={formData.brandName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      name="registerCompany"
                      value={formData.registerCompany}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="registerAddress"
                      value={formData.registerAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">GST</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="GST"
                      name="gstNo"
                      value={formData.gstNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Website</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
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
                  Submit
                </button>
                {/* <div>
                  {errorHTML && errorStyles ? (
                    <ul style={errorStyles}>{errorHTML}</ul>
                  ) : success && successStyles ? (
                    <div style={successStyles}>{success}</div>
                  ) : (
                    ""
                  )}
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default UserProfileForm;
