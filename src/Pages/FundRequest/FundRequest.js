import React, { useEffect } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import "./FundRequest.css";

const FundRequest = (props) => {
  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Fund Request" value="Fund Request" />
          <section class="chart_section">
            <div class="card card-shadow mb-4">
              <div class="card-header fund-modal">
                <div class="card-title">Fund Request</div>
                <button
                  type="button"
                  class="btn btn-secondary fund-btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Fund Request
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Fund Request
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form class="">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">
                                  Choose Bank
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                >
                                  <option>ICICI</option>
                                  <option>SBI</option>
                                  <option>HDFC</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="exampleInputEmail1">
                                  Deposit Account
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="depositAccount"
                                  aria-describedby="Deposit Account"
                                  placeholder="Deposit Account"
                                />
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">
                                  Choose Payment Mode
                                </label>
                                <select
                                  class="form-control"
                                  id="exampleFormControlSelect1"
                                >
                                  <option>Online</option>
                                  <option>Offline</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="exampleInputEmail1">
                                  Requested Amount
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="requestedAmount"
                                  aria-describedby="requestedAmount"
                                  placeholder="Requested Amount"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="exampleFormControlSelect1">
                                  Wallet Type
                                </label>
                                <select class="form-control" id="walletType">
                                  <option>Prepaid</option>
                                  <option>Postpaid</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="exampleInputEmail1">
                                  Upload Image
                                </label>
                                <label class="custom-file">
                                  <input
                                    type="file"
                                    id="file2"
                                    class="custom-file-input"
                                  />
                                  <span class="custom-file-control"></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary themebtn"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" class="btn btn-primary themebtn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <table class="table table-bordered">
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
                          class="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          class="img-circle mCS_img_loaded"
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
                          class="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          class="img-circle mCS_img_loaded"
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
                          class="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          class="img-circle mCS_img_loaded"
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
                          class="img-circle mCS_img_loaded"
                          alt="User Image"
                        />
                      </td>
                      <td>
                        <img
                          src="http://0.0.0.0:3008/images/img2.jpg"
                          class="img-circle mCS_img_loaded"
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
