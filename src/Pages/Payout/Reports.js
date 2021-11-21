import React, { useEffect, memo, useState } from "react";
import { connect } from "react-redux";
import { fetchTransactionReport } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";
import TableHTML from "./TableHTML";
import CSVExport from "../../Components/DataExport/CSVExport";

const Reports = memo((props) => {
  const [filterItems, updateItems] = useState({});
  const { dispatch, payout } = props;
  useEffect(() => {
    dispatch(fetchTransactionReport({ status: "DONE" }));
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const itemName = event.target.name;
    const itemVal = event.target.value;
    const params = {};
    if (itemVal) {
      if (itemVal.trim()) {
        updateItems({
          ...filterItems,
          [itemName]: itemVal,
        });
      } else {
        delete filterItems[itemName];
        updateItems({
          ...filterItems,
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchTransactionReport(filterItems));
  };

  const reportsItems =
    payout &&
    payout.reports &&
    payout.reports.data &&
    payout.reports.data.content;

  //   accountNumber: "50100017129260"
  // approvalRequired: "N"
  // beneficiaryName: "Ranjeet Singh Paliwal"
  // closingBalance: 10825
  // createdDate: "2021-09-26T17:11:32"
  // ifscCode: "HDFC0001236"
  // lastModifiedDate: "2021-09-26T17:12:21"
  // merchantTxnId: "126922915833"
  // mobileNumber: null
  // openingBalance: 10830
  // payoutChanrge: 5
  // remark: null
  // remittanceAmount: 9
  // route: "IMPS"
  // status: "DONE"
  // txnId: "8f903076-f4f2-444d-9c6a-57a6fd0817e6"
  // type: null

  /*   {
    "accountNumber": "string",
    "clientId": "string",
    "date": "string",
    "route": "string",
    "status": "string",
    "txnId": "string",
    "vendorId": "string"
  } */

  // const getData = () => {
  //   setTimeout(() => {
  //     const csvData = [
  //       { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  //       { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  //       { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  //     ];
  //     return csvData;
  //   }, 1000);
  // };

  const pagingData = payout && payout.reports && payout.reports.data;

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Transaction Report" value="Transaction Report" />
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
                filterItems={filterItems}
                reportsItems={reportsItems}
                pagingData={pagingData}
                dispatch={dispatch}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

const mapStateToProps = (state) => {
  return { payout: state.payout };
};

export default connect(mapStateToProps)(Reports);
