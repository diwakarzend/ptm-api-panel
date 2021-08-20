import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./FundRequest.css";

const FundRequest = (props) => {
  const [isPopupVisible, handlePopUp] = useState(false);

  const openPopupHandler = () => {
    document.body.classList.add("modal-open");
    handlePopUp(true);
  };

  const closePopUpHandler = () => {
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };

  const submitPopupHandler = () => {
    document.body.classList.add("modal-open");
    handlePopUp(true);
  };

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Fund Request" value="Fund Request" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <div className="card-header fund-modal">
                <div className="card-title">Fund Request</div>
                <button
                  type="button"
                  className="btn btn-secondary fund-btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={openPopupHandler}
                >
                  Fund Request
                </button>

                <FundRequestPopUp
                  isPopupVisible={isPopupVisible}
                  closePopUpHandler={closePopUpHandler}
                />
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Bank Name</th>
                      <th scope="col">Branch Name</th>
                      <th scope="col">AccountHolder</th>
                      <th scope="col">AccountNumber</th>
                      <th scope="col">ifsc code</th>
                      <th scope="col">Billing Info</th>
                      <th scope="col">Cash Deposit Charges</th>
                      <th scope="col">QR logo</th>
                      <th scope="col">Bank logo</th>{" "}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>ICICI Bank</td>
                      <td>Gomtinagar</td>
                      <td>Roundpay Techno Media Pvt Ltd</td>
                      <td>35712509497</td>
                      <td>ICICIC0000104</td>
                      <td>Auto Billing 24*7</td>
                      <td>150.0</td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>ICICI Bank</td>
                      <td>Gomtinagar</td>
                      <td>Roundpay Techno Media Pvt Ltd</td>
                      <td>35712509497</td>
                      <td>ICICIC0000104</td>
                      <td>Auto Billing 24*7</td>
                      <td>150.0</td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>ICICI Bank</td>
                      <td>Gomtinagar</td>
                      <td>Roundpay Techno Media Pvt Ltd</td>
                      <td>35712509497</td>
                      <td>ICICIC0000104</td>
                      <td>Auto Billing 24*7</td>
                      <td>150.0</td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>ICICI Bank</td>
                      <td>Gomtinagar</td>
                      <td>Roundpay Techno Media Pvt Ltd</td>
                      <td>35712509497</td>
                      <td>ICICIC0000104</td>
                      <td>Auto Billing 24*7</td>
                      <td>150.0</td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          className="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FundRequest;

const FundRequestPopUp = ({ isPopupVisible, closePopUpHandler }) => {
  const style = isPopupVisible ? { display: "block" } : { display: "none" };

  return (
    <div
      className={`modal fade${isPopupVisible ? " show" : ""}`}
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={style}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Fund Request
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
            <form className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">Choose Bank</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>ICICI</option>
                      <option>SBI</option>
                      <option>HDFC</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Deposit Account</label>
                    <input
                      type="text"
                      className="form-control"
                      id="depositAccount"
                      aria-describedby="Deposit Account"
                      placeholder="Deposit Account"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">
                      Choose Payment Mode
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Online</option>
                      <option>Offline</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Requested Amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="requestedAmount"
                      aria-describedby="requestedAmount"
                      placeholder="Requested Amount"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">Wallet Type</label>
                    <select className="form-control" id="walletType">
                      <option>Prepaid</option>
                      <option>Postpaid</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Upload Image</label>
                    <label className="custom-file">
                      <input
                        type="file"
                        id="file2"
                        className="custom-file-input"
                      />
                      <span className="custom-file-control"></span>
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary themebtn"
              data-dismiss="modal"
              onClick={closePopUpHandler}
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary themebtn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
