import React from "react";
import { ModalWrapper, Button } from "../../Components/UI/StyledConstants";
import { DetailsWrapper } from "./style";
export default function P2PModal({ modalData, closePopUpHandler }) {
  console.log("modalData = ", modalData);
  return (
    <ModalWrapper>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              Transaction Details
            </h4>
            <Button
              type="button"
              className="close"
              onClick={closePopUpHandler}
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">
            <DetailsWrapper>
            <div className="flex">
              <div className="label-name">Sender Name:</div>
              <div className="value">{modalData?.senderName}</div>
            </div>
            <div className="flex">
              <div className="label-name">UTR Number:</div>
              <div className="value">{modalData?.utrNumber}</div>
            </div>
            <div className="flex">
              <div className="label-name">Payment Mode:</div>
              <div className="value">{modalData?.transactionType}</div>
            </div>
            <div className="flex">
              <div className="label-name">Amount:</div>
              <div className="value">{modalData?.amount}</div>
            </div>
            <div className="flex">
              <div className="label-name">Receiver Name:</div>
              <div className="value">{modalData?.receiverName}</div>
            </div>
            <div className="flex">
              <div className="label-name">Receiver UPI:</div>
              <div className="value">{modalData?.receiverUpi}</div>
            </div>
            <div className="flex">
              <div className="label-name">Status:</div>
              <div className="value">{modalData?.status}</div>
            </div>
            <div className="flex">
              <div className="label-name">Sender Name:</div>
              <div className="value">{modalData?.senderName}</div>
            </div>
            <div className="flex">
              <div className="label-name">Transaction Date:</div>
              <div className="value">{modalData?.transactionDate}</div>
            </div>
            <div className="flex">
              <div className="label-name">Transaction Time:</div>
              <div className="value">{modalData?.transactionTime}</div>
            </div>
            <div className="flex">
              <div className="label-name">Transaction RefId:</div>
              <div className="value">{modalData?.transactionRefId}</div>
            </div>
            <div className="flex">
              <div className="label-name">Vendor Code:</div>
              <div className="value">{modalData?.vendorCode}</div>
            </div>
            <div className="flex">
              <div className="label-name">User Id:</div>
              <div className="value">{modalData?.userId}</div>
            </div>
            </DetailsWrapper>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}
