import React from 'react';
import { TopInfoWrapper } from './style';

export default function TopInfo({transactionReport = {}}) {
    return (
        <TopInfoWrapper className="card-wrapper flex">
            <div className="card">
                <h5 className="">Total Transactions</h5>
                <div className="flex item-center">
                    <span className="icon flex item-center justify-center"><i className="ti-server"></i></span>
                    <strong>{(transactionReport && transactionReport.count) || 0}</strong>
                </div>
            </div>
            <div className="card">
                <h5 className="">Total Amount</h5>
                <div className="flex item-center">
                    <span className="icon flex item-center justify-center"><i className="ti-control-shuffle f30"></i></span>
                    <strong>{(transactionReport &&
                        transactionReport.totalTransaction) ||
                        0}</strong>
                </div>
            </div>
            <div className="card">
                <h5 className="">Refunded Transaction</h5>
                <div className="flex item-center">
                    <span className="icon flex item-center justify-center"><i className="ti-back-left"></i></span>
                    <strong>0</strong>
                </div>
            </div>
            <div className="card">
                <h5 className="">Cancelled Transaction</h5>
                <div className="flex item-center">
                    <span className="icon flex item-center justify-center"><i className="ti-time"></i></span>
                    <strong>{(transactionReport && transactionReport.count) || 0}</strong>
                </div>
            </div>
        </TopInfoWrapper>
    )
}