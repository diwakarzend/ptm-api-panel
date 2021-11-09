import React, { useState, useRef, useEffect } from "react";
import Request from "../../utils/Request";
import urls from "../../utils/urls";

const IPForm = (props) => {
  const { closePopUpHandler, fetchIPDetails, userInfo, setIpMessage } = props;
  const [formData, updateFormData] = useState({ ip: "", username: "" });
  const [message, setMessage] = useState({ success: "", error: "" });

  // const [success, updateSuccess] = useState("");

  useEffect(() => {
    updateFormData({
      ip: userInfo.ip && userInfo.ip,
      username: userInfo && userInfo.username,
    });
  }, []);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      ip: event.target.value,
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log("ipInputValue", formData);
    const errorHandler = (response) => {
      if (response) {
        setMessage({ error: response.msg, success: "" });
      }
    };

    const successHandler = (response) => {
      if (response) {
        if (response.success) {
          setMessage({ success: response.msg, error: "" });
          fetchIPDetails();
          setIpMessage("IP Updated successfully");
          closePopUpHandler();
        } else {
          setMessage({ error: response.msg, success: "" });
        }
      }
    };

    const api = new Request("", successHandler, errorHandler, false);
    return api.post(urls.login.BASE_URL + urls.User.API_LIST_UPDATE, formData);
  };

  console.log("formData", formData, userInfo);
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
            <div className={message.success ? "done" : "fail"}>
              {message.success || message.error}
            </div>
            <form onSubmit={submitFormHandler}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter Comma Separted IPs"
                      name="ipInput"
                      value={formData && formData.ip}
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
                  Update IP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPForm;
