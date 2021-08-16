import React, { useEffect } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

import "./AddMoney.css";

const AddMoney = (props) => {
  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Add Money" value="Add Money" />
          <section class="chart_section">
            <div class="row">
              <div class="col-xl-12">
                <div class="card card-shadow mb-4">
                  <div class="card-header">
                    <div class="card-title">Add Money</div>
                  </div>
                  <div class="card-body">
                    <form class="">
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for="exampleFormControlSelect1">
                            Wallet Type
                          </label>
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Prepaid</option>
                            <option>Postpaid</option>
                          </select>
                        </div>

                        <div class="form-group col-md-6">
                          <label for="exampleInputEmail1">Enter Amount</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Amount"
                          />
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <ul class=" payment-method">
                            <li class="alert alert-primary border-0">
                              <h5>
                                Credit Card
                                <span class="text-danger">Charges : 2.00%</span>
                              </h5>
                              <i class="icon-credit-card"></i>
                            </li>
                            <li class="alert alert-primary border-0">
                              <h5>
                                Debit Card
                                <span class="text-danger">Charge Details</span>
                              </h5>
                              <i class="icon-credit-card"></i>
                            </li>
                            <li class="alert alert-primary border-0">
                              <h5>
                                Net Banking
                                <span class="text-danger">Charges : 20.00</span>
                              </h5>
                              <i class="icon-credit-card"></i>
                            </li>
                            <li class="alert alert-primary border-0">
                              <h5>
                                PPI Wallet
                                <span class="text-danger">Charges : 3.50%</span>
                              </h5>
                              <i class="icon-wallet"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddMoney;
