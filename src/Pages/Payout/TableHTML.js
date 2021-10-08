import React, { Fragment, memo } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const TableHTML = memo(({ reportsItems, filterItems }) => {
  const reportsDataAvailable =
    (reportsItems && Array.isArray(reportsItems) && reportsItems.length > 0) ||
    "";

  console.log("reportsDataAvailable", reportsItems);

  const rowData =
    reportsDataAvailable &&
    reportsItems.map((item) => {
      let gst = "";
      if (item.payoutChanrge) {
        gst = (item.payoutChanrge * 18) / 100;
        gst = gst.toFixed(2);
      }
      const transDetails = (
        <div>
          <strong> TxnId:</strong> {item.txnId} <br />
          {item.merchantTxnId ? (
            <Fragment>
              <strong>Merchant TxnId: </strong> {item.merchantTxnId}
            </Fragment>
          ) : (
            ""
          )}
        </div>
      );

      const walletBalance = item.openingBalance
        ? `OB:${item.openingBalance}\nCB:${item.closingBalance}`
        : "NA";

      const ServiceCharges = `Charge : ${item.payoutChanrge}, GST :${gst}`;

      return {
        DateTime: item.createdDate,
        PaymentMode: item.route,
        TransactionDetails: transDetails,
        Amount: item.remittanceAmount,
        Beneficiary: item.beneficiaryName,
        AccountNumber: item.accountNumber,
        IFSCCode: item.ifscCode,
        WalletBalance: walletBalance,
        ServiceCharges: ServiceCharges,
        Status: item.status,
      };
    });
  // const rowData = [
  //   { DateTime: "Toyota", PaymentMode: "Celica", TransactionDetails: 35000 },
  //   { DateTime: "Ford", PaymentMode: "Mondeo", TransactionDetails: 32000 },
  //   { DateTime: "Porsche", PaymentMode: "Boxter", TransactionDetails: 72000 },
  // ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 950 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn
          field="DateTime"
          sortable="true"
          flex="2"
          minWidth="100"
          //resizable={true}
        ></AgGridColumn>
        <AgGridColumn
          field="PaymentMode"
          sortable="true"
          flex="2"
          minWidth="100"
          // resizable={true}
        ></AgGridColumn>
        <AgGridColumn
          field="TransactionDetails"
          flex="2"
          minWidth="100"
        ></AgGridColumn>
        <AgGridColumn
          field="Amount"
          flex="2"
          minWidth="50"
          sortable="true"
        ></AgGridColumn>
        <AgGridColumn
          field="Beneficiary"
          flex="2"
          minWidth="50"
          sortable="true"
        ></AgGridColumn>
        <AgGridColumn
          field="AccountNumber"
          flex="2"
          minWidth=" 50"
        ></AgGridColumn>
        <AgGridColumn field="IFSCCode" flex="2" minWidth="50"></AgGridColumn>
        <AgGridColumn
          field="WalletBalance"
          flex="2"
          minWidth="50"
        ></AgGridColumn>

        <AgGridColumn
          field="ServiceCharges"
          flex="2"
          minWidth="50"
        ></AgGridColumn>

        <AgGridColumn
          field="Status"
          flex="2"
          minWidth="50"
          sortable="true"
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );

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

              <th scope="col">Wallet Balance</th>

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
                      <td>&#8377;{item.remittanceAmount}</td>

                      <td>
                        {item.beneficiaryName}, <br />
                        {item.accountNumber}, <br />
                        {item.ifscCode}
                      </td>

                      {item.openingBalance != null ? (
                        <td>
                          <strong> OB:</strong> {item.openingBalance} <br />
                          <strong> CB:</strong> {item.closingBalance} <br />
                        </td>
                      ) : (
                        <td>NA</td>
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
