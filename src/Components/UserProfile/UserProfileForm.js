import React, { useState, memo, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";
import { removeOverlay } from "../../utils/common";
import "./UserProfile.css";
import { Button, ModalWrapper } from "../UI/StyledConstants";

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
      [event.target.name]: event.target.value,
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
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              My Profile
            </h4>
            <Button
              type="button"
              className="close"
              onClick={() => closePopUpHandler(false)}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className={cssClass}>
            {statusMessage.success || statusMessage.error}
          </div>
          <form onSubmit={submitFormHandler}>
            <div className="modal-body">
              <div className="">
                  <div className="pb16">
                    <label className="label" >Brand</label>
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
                  <div className="pb16">
                    <label className="label" >Company Name</label>
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
                  <div className="pb16">
                    <label className="label" >Address</label>
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
                  <div className="pb16">
                    <label className="label" >GST</label>
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
                  <div className="pb16">
                    <label className="label" >Website</label>
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

              <div className="flex item-center justify-center gap16">
                <Button
                  type="button"
                  className="btn-light"
                  onClick={() => closePopUpHandler(false)}
                >
                  Close
                </Button>
                <Button type="submit" className="btn-success">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
});

export default UserProfileForm;
