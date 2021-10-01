import React, { Fragment, memo } from "react";

const TableHTML = memo(({ reportsItems, filterItems }) => {
  const reportsDataAvailable =
    (reportsItems && Array.isArray(reportsItems) && reportsItems.length > 0) ||
    "";

  return (
    <div className="card-body">
      {reportsDataAvailable ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">DateTime</th>
              <th scope="col">Payment Mode</th>
              <th scope="col">Transaction Details</th>
              <th scope="col">Amount</th>
              <th scope="col">Beneficiary</th>
              {/* {filterItems &&
                filterItems.status &&
                filterItems.status.toLowerCase() == "done" && (
                  <th scope="col">Wallet Balance</th>
                )} */}

              {reportsDataAvailable &&
                reportsItems[0].openingBalance != null && (
                  <th scope="col">Wallet Balance</th>
                )}
              <th scope="col">Service Charges</th>

              <th scope="col">Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportsDataAvailable
              ? reportsItems.map((item, index) => {
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
                        {item.merchantTxnId ? (
                          <Fragment>
                            <strong>Merchant TxnId: </strong>{" "}
                            {item.merchantTxnId}
                          </Fragment>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>{item.remittanceAmount}</td>

                      <td>
                        {item.beneficiaryName}, <br />
                        {item.accountNumber}, <br />
                        {item.ifscCode}
                      </td>

                      {item.openingBalance != null && (
                        <td>
                          <strong> OB:</strong> {item.openingBalance} <br />
                          <strong> CB:</strong> {item.closingBalance} <br />
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
              : ""}
          </tbody>
        </table>
      ) : (
        <div colSpan="8" style={{ textAlign: "center", color: "green" }}>
          No transaction Found, You can use filter option to get all required
          transactions.
        </div>
      )}
    </div>
  );
});

export default TableHTML;
