import React, { Fragment, memo, useState } from "react";
import P2PModal from "./P2PModal";
import { addOverlay, removeOverlay } from "../../utils/common";
import Pagination from "../../Components/Pagination/Pagination";

const TableHTML = memo(
  ({ reportsItems, filterItems, pagingData, dispatch }) => {
    const [modal, setModal] = useState({ status: false, data: null });
    const reportsDataAvailable =
      (reportsItems &&
        Array.isArray(reportsItems) &&
        reportsItems.length > 0) ||
      "";

    const closePopUpHandler = () => {
      removeOverlay();
      setModal({ status: false, data: null });
    };

    const openPopupHandler = (data) => {
      addOverlay();
      setModal({ status: true, data });
    };

    return (
      <div className="card-body">
        {reportsDataAvailable ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">UTR Number</th>
                <th scope="col">Payment Mode</th>
                <th scope="col">Transaction Details</th>
                <th scope="col">Amount</th>
                <th scope="col">Receiver Name</th>
                <th scope="col">Receiver UPI</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {reportsDataAvailable
                ? reportsItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item?.utrNumber}</td>
                        <td>{item?.transactionType}</td>

                        <td>{item?.transactionRefId}</td>
                        <td>&#8377;{item?.amount}</td>
                        <td>{item?.receiverName}</td>
                        <td>{item?.receiverUpi}</td>
                        <td className={item?.status?.toLowerCase()}>
                          {item?.status}
                        </td>
                        <td>
                          <span onClick={() => openPopupHandler(item)}>
                            <i className="icon-eye" title="update user" />
                          </span>
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
        {modal?.status && (
          <P2PModal
            modalData={modal?.data}
            closePopUpHandler={closePopUpHandler}
          />
        )}
      </div>
    );
  }
);

export default TableHTML;
