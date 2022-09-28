import React, {useState} from 'react';

export default function TableRow({ item, gst, activeIndex }) {

    const [expanded, setExpanded] = useState(false);

    return (
        <>
        <tr className={expanded ? 'active-tr' : ''} onClick={() => setExpanded(!expanded)}>
            <th scope="row">
                <div className='flex item-center'>
                    <span className='toggle-icon'></span>
                    <span className='row-index'>{activeIndex}</span>
                </div>
            </th>
            <td>{item?.createdDate || '-'}</td>
            <td>{item?.route || '-'}</td>
            <td>{item?.txnId || '-'}</td>
            <td>&#8377; {item?.remittanceAmount || '-'}</td>
            <td>&#8377; {item?.closingBalance || '-'}</td>
            <td className={item.status.toLowerCase()}>
                {item.status}
            </td>
        </tr>
        {
            expanded &&
            <tr className='sub-tr'>
                <td colSpan={7}>
                    <div className='flex sub-tr-card-wrapper'>
                        <div className='sub-tr-card'>
                            <h4>Beneficiary Details</h4>
                            <ul>
                                <li>
                                    <strong>Name: </strong>
                                    <span>{item.beneficiaryName}</span>
                                </li>
                                <li>
                                    <strong>A/C Number: </strong>
                                    <span>{item.accountNumber}</span>
                                </li>
                                <li>
                                    <strong>IFSC Code: </strong>
                                    <span>{item.ifscCode}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='sub-tr-card'>
                            <h4>Transactions Details</h4>
                            <ul>
                                <li>
                                    <strong>Txn Id: </strong>
                                    <span>{item.txnId}</span>
                                </li>
                                <li>
                                    <strong>Merchant Txn Id: </strong>
                                    <span>{item.merchantTxnId}</span>
                                </li>
                                <li>
                                    <strong>Amount: </strong>
                                    <span>{item?.remittanceAmount}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='sub-tr-card'>
                            <h4>Charges Details</h4>
                            <ul>
                                <li>
                                    <strong>Charge: </strong>
                                    <span>&#8377; {item?.payoutChanrge || '-'}</span>
                                </li>
                                <li>
                                    <strong>GST: </strong>
                                    <span>&#8377; {gst || '-'}</span>
                                </li>
                                <li>
                                    <strong>Wallet OB: </strong>
                                    <span>&#8377; {item?.openingBalance || '-'}</span>
                                </li>
                                <li>
                                    <strong>Wallet CB: </strong>
                                    <span>&#8377; {item?.closingBalance || '-'}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
        }
        </>
    )
}



// Previous row html
{/* <tr key={item.reqstDate}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.createdDate}</td>
                        <td>{item.route}</td>
                        <td>{item.merchantCode}</td>

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
                            className="quick-payment-btn"
                          ></button>
                        </td>
                      </tr> */}