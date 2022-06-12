import React, { useEffect, memo, useState } from "react";
import { connect } from "react-redux";
import { getP2pUserListing } from "../../utils/api";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import CSVExport from "../../Components/DataExport/CSVExport";

const P2PTransaction = ({ dispatch = () => {}, ...props }) => {
  const [reportsItems, setReportsItems] = useState([]);
  useEffect(() => {
    const params = {
      date: "2022-05-29",
      pagination: {
        pageNo: 1,
        pageSize: 500,
      },
    };
    getP2pUserListing(params).then((res) => {
      setReportsItems(res?.data?.data?.content);
    });
  }, []);
  console.log("response p2p transaction => ", reportsItems);
  const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb
            heading="P2P Transaction Report"
            value="P2P Transaction Report"
          />
          <section className="chart_section">
            <div className="card card-shadow mb-4">
              <form onSubmit={handleSubmit}>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Transaction Id"
                          name="txnId"
                          onChange={handleChange}
                        />
                      </th>
                      <th scope="col">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Account number"
                          name="accountNumber"
                          onChange={handleChange}
                        />
                      </th>
                      <th scope="col">
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          onChange={handleChange}
                        />
                      </th>
                      <th scope="col">
                        <div className="col-md-12">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="status"
                            onChange={handleChange}
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
                    <CSVExport dispatch={dispatch} />

                    <button
                      type="button"
                      className="btn-common"
                      onClick={() => {
                        window.print();
                      }}
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
              <TableHTML
                filterItems={{}}
                reportsItems={reportsItems}
                pagingData={{}}
                dispatch={dispatch}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { payout: state.payout };
};

export default connect(mapStateToProps)(P2PTransaction);
