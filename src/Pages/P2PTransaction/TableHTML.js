import React, { Fragment, memo } from "react";
import Pagination from "../../Components/Pagination/Pagination";

const TableHTML = memo(
  ({ reportsItems, filterItems, pagingData, dispatch }) => {
    const reportsDataAvailable =
      (reportsItems &&
        Array.isArray(reportsItems) &&
        reportsItems.length > 0) ||
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
                <th scope="col">API Route</th>
                <th scope="col">Transaction Details</th>
                <th scope="col">Amount</th>
                <th scope="col">Beneficiary</th>
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
                      <tr key={item.transactionRefId}>
                        <th scope="row">{index + 1}</th>
                        <td>{`${item?.transactionDate} ${item?.transactionTime}`}</td>
                        <td>{item.transactionType}</td>
                        <td>{item?.merchantCode}</td>

                        <td>{item?.transactionRefId}</td>
                        <td>&#8377;{item?.amount}</td>

                        <td>{item?.senderUpi}</td>

                        <td>
                          <td>{item?.senderUpi}</td>
                        </td>

                        <td className={item?.status?.toLowerCase()}>
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
        {reportsDataAvailable && (
          <div>
            <Pagination pagingData={pagingData} dispatch={dispatch} />
          </div>
        )}
      </div>
    );
  }
);

export default TableHTML;
