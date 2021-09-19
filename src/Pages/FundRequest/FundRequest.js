import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./FundRequest.css";
import FundRequestForm from "./FundRequestForm";

const FundRequest = (props) => {
  const [isPopupVisible, handlePopUp] = useState(false);
  const closePopUpHandler = () => {
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };
  const openPopupHandler = () => {
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
                {isPopupVisible && (
                  <FundRequestForm
                    isPopupVisible={isPopupVisible}
                    closePopUpHandler={closePopUpHandler}
                  />
                )}
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
