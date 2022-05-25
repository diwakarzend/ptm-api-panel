import React from "react";
//import { connect } from "react-redux";
//import { fetchTransactionReport } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
//import CSVExport from "../../Components/DataExport/CSVExport";

const MapQR = (props) => {
  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Merchant List" value="Merchant List" />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <form>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Transaction Id"
                          name="txnId"
                          // onChange={handleChange}
                        />
                      </th>
                      <th scope="col">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Account number"
                          name="accountNumber"
                          // onChange={handleChange}
                        />
                      </th>
                      <th scope="col">
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          // onChange={handleChange}
                        />
                      </th>
                      <th scope="col">
                        <div className="col-md-12">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="status"
                            // onChange={handleChange}
                          >
                            <option value="">Status</option>
                            <option value="DONE">DONE</option>
                            <option value="INITIATED">INITIATED</option>
                            <option value="REJECTED">REJECTED</option>
                            <option value="PENDING">PENDING</option>
                            <option value="FAIL">FAIL</option>
                          </select>
                        </div>
                      </th>
                      <th scope="col">
                        <input
                          type="submit"
                          className="btn-common"
                          value="Search"
                        />
                      </th>
                    </tr>
                  </thead>
                </table>
              </form>
              <div className="card-header">
                <div className="card-title">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    {/* <CSVExport dispatch={dispatch} />

                    <button
                      type="button"
                      className="btn-common"
                      onClick={() => {
                        window.print();
                      }}
                    >
                      Print
                    </button> */}
                  </div>
                </div>
              </div>
              <TableHTML />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MapQR;
