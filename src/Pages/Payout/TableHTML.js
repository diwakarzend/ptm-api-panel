import React, { useEffect, memo } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { CSVLink, CSVDownload } from "react-csv";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { html } from "react-dom-factories";

const TableHTML = memo(({ reportsItems, filterItems }) => {
  const reportsDataAvailable =
    (reportsItems && Array.isArray(reportsItems) && reportsItems.length > 0) ||
    "";

  console.log("reportsDataAvailable", reportsItems);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var allColumnIds = [];
      gridOptions.columnApi.getAllColumns().forEach(function (column) {
        allColumnIds.push(column.colId);
      });

      agGrid
        .simpleHttpRequest({
          url: "https://www.ag-grid.com/example-assets/olympic-winners.json",
        })
        .then(function (data) {
          gridOptions.api.setRowData(data);
        });
    });
  }, []);

  const transactionData = (params) => {
    // console.log("TransactionDetails", params);
    html = "<div><strong> TxnId:</strong>" + params.value.txnId;
    if (params.value.merchantTxnId) {
      html += "<strong>Merchant TxnId: </strong>" + params.value.merchantTxnId;
    }
    html += "</div>";

    return html;
  };

  const rowData =
    reportsDataAvailable &&
    reportsItems.map((item) => {
      let gst = "";
      if (item.payoutChanrge) {
        gst = (item.payoutChanrge * 18) / 100;
        gst = gst.toFixed(2);
      }

      const walletBalance = item.openingBalance
        ? `OB:${item.openingBalance}\nCB:${item.closingBalance}`
        : "NA";

      const ServiceCharges = `Charge : ${item.payoutChanrge}, GST :${gst}`;

      return {
        DateTime: item.createdDate,
        PaymentMode: item.route,
        TransactionDetails: item,
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

  const columnDefs = [
    {
      field: "DateTime",
      sortable: true,
      minWidth: "50",
    },
    {
      field: "PaymentMode",
      sortable: true,
      maxWidth: "100",
    },
    {
      field: "TransactionDetails",
      sortable: true,
      cellRenderer: transactionData,
      resizable: true,
    },
    {
      field: "Amount",
      sortable: true,
      maxWidth: "100",
    },
    {
      field: "Beneficiary",
      maxWidth: "150",
    },
    {
      field: "AccountNumber",
      minWidth: "50",
    },
    {
      field: "IFSCCode",
    },
    {
      field: "WalletBalance",
      sortable: "true",
    },
    {
      field: "ServiceCharges",
    },
    {
      field: "Status",
      sortable: "true",
      filter: true,
    },
  ];

  return (
    <div>
      <CSVLink data={rowData}>Download me</CSVLink>
      <div
        className="ag-theme-alpine"
        style={{ height: 400, width: 950 }}
        id="myGrid"
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
});

export default TableHTML;
