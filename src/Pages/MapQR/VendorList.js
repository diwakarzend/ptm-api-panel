import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { connect } from "react-redux";
//import { fetchTransactionReport } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import VendorTableHTML from "./VendorTableHTML";
import { Wrapper } from "./style";
import { getMapqrListing } from "../../utils/api";
//import CSVExport from "../../Components/DataExport/CSVExport";

const VendorList = (props) => {
  const [vendorData, setvendorData] = useState([]);
  useEffect(() => {
    getMapqrListing({ pageNo: 1, pageSize: 100 }).then((res) => {
      setvendorData(res?.data?.data);
    });
  }, []);

  return (
    <Wrapper className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Vendor List" value="Vendor List" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <form>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col no-border">
                        <div className="flex item-center form-control-wrap">
                          <label>Search By</label>
                          <div class="input-group">
                            <input
                              type="text"
                              className="form-control search"
                              placeholder="Merchant name"
                              name="merchant-name"
                              // onChange={handleChange}
                            />
                            <div class="input-group-append">
                              <span class="input-group-text" id="basic-text1">
                                <i
                                  class="fa fa-search text-grey"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex item-center justify-end form-control-wrap">
                          <label>Select Filter</label>
                          <div class="input-group">
                            <input
                              type="text"
                              className="form-control search"
                              placeholder="Merchant ID"
                              name="merchant-ID"
                              // onChange={handleChange}
                            />
                            <div class="input-group-append">
                              <span class="input-group-text" id="basic-text1">
                                <i
                                  class="fa fa-search text-grey"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                          <select
                            className="form-control"
                            id="merchant-status"
                            name="status"
                            // onChange={handleChange}
                          >
                            <option value="">Status</option>
                            <option value="DONE">Active</option>
                            <option value="INITIATED">Inactive</option>
                            <option value="REJECTED">REJECTED</option>
                            <option value="PENDING">PENDING</option>
                            <option value="FAIL">FAIL</option>
                          </select>
                        </div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </form>
              <div className="card-header justify-end">
                <div className="card-title">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Link to="/mapqr-add" class="btn btn-primary themebtn">
                      Add
                    </Link>
                  </div>
                </div>
              </div>
              <VendorTableHTML vendorData={vendorData} />
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default VendorList;
