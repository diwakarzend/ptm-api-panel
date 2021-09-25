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
  console.log("filterItems", filterItems, props);
  //   accountNumber: "7812106401"
  // approvalRequired: "N"
  // beneficiaryName: "Piyush Singh"
  // clientId: "510d1fe8-dc27-43fe-b9d3-7dfb22ff20e2"
  // closingBalance: null
  // createdDate: "2021-09-23T17:02:46"
  // ifscCode: "KTB12345"
  // lastModifiedDate: null
  // merchantTxnId: null
  // mobileNumber: null
  // openingBalance: null
  // payoutChanrge: null
  // remark: null
  // remittanceAmount: 100
  // route: "IMPS"
  // status: "INITIATED"
  // type: null
  // userId: null

  /*   {
    "accountNumber": "string",
    "clientId": "string",
    "date": "string",
    "route": "string",
    "status": "string",
    "txnId": "string",
    "vendorId": "string"
  } */

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
                          className="form-control"
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
                      <th scope="col">Amount</th>
                      <th scope="col">Account No</th>
                      <th scope="col">beneficiaryName</th>
                      <th scope="col">Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsItems &&
                    Array.isArray(reportsItems) &&
                    reportsItems.length > 0 ? (
                      reportsItems.map((item, index) => {
                        return (
                          <tr key={item.reqstDate}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.createdDate}</td>
                            <td>{item.route}</td>
                            <td>{item.remittanceAmount}</td>
                            <td>{item.accountNumber}</td>
                            <td>{item.beneficiaryName}</td>
                            <td className={item.status.toLowerCase()}>
                              {item.status}
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  openQuickPopupHandler(item.beneficiaryId)
                                }
                                className="quick-payment-btn"
                              ></button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="8" style={{ textAlign: "center" }}>
                          No Transaction Found
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
