import React, { useEffect, memo, useState } from "react";
import { connect } from "react-redux";
import { fetchTransactionReport } from "../../actions/payout";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import SideBar from "../../Components/SideBar/SideBar";

const Reports = memo((props) => {
  const [filterItems, updateItems] = useState({});
  const { dispatch, payout } = props;
  useEffect(() => {
    dispatch(fetchTransactionReport({}));
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    const itemName = event.target.name;
    const itemVal = event.target.value;
    const params = {};
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchTransactionReport(filterItems));
  };

  const reportsItems = payout && payout.reports && payout.reports.data;
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

  console.log("filterItems", filterItems);

  return (
    <div className="container_full">
      <SideBar {...props} />
      <div className="content_wrapper">
        <div className="container-fluid">
          <BreadCrumb heading="Reports" value="Reports" />
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
                          type="text"
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

              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">DateTime</th>
                      <th scope="col">Payment Mode</th>
                      <th scope="col">Transaction Details</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Beneficiary</th>
                      {filterItems &&
                        filterItems.status &&
                        filterItems.status.toLowerCase() == "done" && (
                          <th scope="col">Wallet Balance</th>
                        )}
                      <th scope="col">Service Charges</th>

                      <th scope="col">Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsItems &&
                    Array.isArray(reportsItems) &&
                    reportsItems.length > 0 ? (
                      reportsItems.map((item, index) => {
                        let gst = "";
                        if (item.payoutChanrge) {
                          gst = (item.payoutChanrge * 18) / 100;
                          gst = gst.toFixed(2);
                        }
                        return (
                          <tr key={item.reqstDate}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.createdDate}</td>
                            <td>{item.route}</td>
                            <td>
                              <strong> TxnId:</strong> {item.txnId} <br />
                              {item.merchantTxnId
                                ? `TxnId:${item.merchantTxnId}`
                                : ""}
                            </td>
                            <td>{item.remittanceAmount}</td>

                            <td>
                              {item.beneficiaryName}, <br />
                              {item.accountNumber}, <br />
                              {item.ifscCode}
                            </td>

                            {filterItems &&
                              filterItems.status &&
                              filterItems.status.toLowerCase() == "done" && (
                                <td>
                                  <strong> OB:</strong> {item.openingBalance}{" "}
                                  <br />
                                  <strong> CB:</strong> {item.closingBalance}{" "}
                                  <br />
                                </td>
                              )}

                            <td>
                              <strong>Charge : </strong>
                              {item.payoutChanrge}
                              <br />
                              <strong> GST : </strong>
                              {gst}
                            </td>

                            <td className={item.status.toLowerCase()}>
                              {item.status}
                            </td>
                            <td>
                              <button
                                onClick={() => {}}
                                className="quick-payment-btn "
                              ></button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan="8"
                          style={{ textAlign: "center", color: "green" }}
                        >
                          No transaction Found, You can use filter option to get
                          all required transactions.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
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
