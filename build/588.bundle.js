"use strict";
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[588],{

/***/ 8588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Payout_Reports)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(4494);
// EXTERNAL MODULE: ./src/actions/payout.js
var actions_payout = __webpack_require__(7127);
// EXTERNAL MODULE: ./src/Components/BreadCrumb/BreadCrumb.js
var BreadCrumb = __webpack_require__(4783);
// EXTERNAL MODULE: ./src/Components/SideBar/SideBar.js
var SideBar = __webpack_require__(3715);
;// CONCATENATED MODULE: ./src/Pages/Payout/TableHTML.js

var TableHTML = /*#__PURE__*/(0,react.memo)(function (_ref) {
  var reportsItems = _ref.reportsItems,
      filterItems = _ref.filterItems;
  var reportsDataAvailable = reportsItems && Array.isArray(reportsItems) && reportsItems.length > 0 || "";
  return /*#__PURE__*/react.createElement("div", {
    className: "card-body"
  }, reportsDataAvailable ? /*#__PURE__*/react.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "#"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "DateTime"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Payment Mode"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Transaction Details"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Amount"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Beneficiary"), reportsDataAvailable && reportsItems[0].openingBalance != null && /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Wallet Balance"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Service Charges"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Status"), /*#__PURE__*/react.createElement("th", null, "Action"))), /*#__PURE__*/react.createElement("tbody", null, reportsDataAvailable ? reportsItems.map(function (item, index) {
    var gst = "";

    if (item.payoutChanrge) {
      gst = item.payoutChanrge * 18 / 100;
      gst = gst.toFixed(2);
    }

    return /*#__PURE__*/react.createElement("tr", {
      key: item.reqstDate
    }, /*#__PURE__*/react.createElement("th", {
      scope: "row"
    }, index + 1), /*#__PURE__*/react.createElement("td", null, item.createdDate), /*#__PURE__*/react.createElement("td", null, item.route), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("strong", null, " TxnId:"), " ", item.txnId, " ", /*#__PURE__*/react.createElement("br", null), item.merchantTxnId ? "TxnId:".concat(item.merchantTxnId) : ""), /*#__PURE__*/react.createElement("td", null, item.remittanceAmount), /*#__PURE__*/react.createElement("td", null, item.beneficiaryName, ", ", /*#__PURE__*/react.createElement("br", null), item.accountNumber, ", ", /*#__PURE__*/react.createElement("br", null), item.ifscCode), item.openingBalance != null && /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("strong", null, " OB:"), " ", item.openingBalance, " ", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("strong", null, " CB:"), " ", item.closingBalance, " ", /*#__PURE__*/react.createElement("br", null)), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("strong", null, "Charge : "), item.payoutChanrge, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("strong", null, " GST : "), gst), /*#__PURE__*/react.createElement("td", {
      className: item.status.toLowerCase()
    }, item.status), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("button", {
      onClick: function onClick() {},
      className: "quick-payment-btn "
    })));
  }) : "")) : /*#__PURE__*/react.createElement("div", {
    colSpan: "8",
    style: {
      textAlign: "center",
      color: "green"
    }
  }, "No transaction Found, You can use filter option to get all required transactions."));
});
/* harmony default export */ const Payout_TableHTML = (TableHTML);
;// CONCATENATED MODULE: ./src/Pages/Payout/Reports.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Reports = /*#__PURE__*/(0,react.memo)(function (props) {
  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      filterItems = _useState2[0],
      updateItems = _useState2[1];

  var dispatch = props.dispatch,
      payout = props.payout;
  (0,react.useEffect)(function () {
    dispatch((0,actions_payout/* fetchTransactionReport */.Ss)({}));
  }, []);

  var handleChange = function handleChange(event) {
    event.preventDefault();
    var itemName = event.target.name;
    var itemVal = event.target.value;
    var params = {};

    if (itemVal) {
      if (itemVal.trim()) {
        updateItems(_objectSpread(_objectSpread({}, filterItems), {}, (0,defineProperty/* default */.Z)({}, itemName, itemVal)));
      } else {
        delete filterItems[itemName];
        updateItems(_objectSpread({}, filterItems));
      }
    }
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    dispatch((0,actions_payout/* fetchTransactionReport */.Ss)(filterItems));
  };

  var reportsItems = payout && payout.reports && payout.reports.data; //   accountNumber: "50100017129260"
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
  return /*#__PURE__*/react.createElement("div", {
    className: "container_full"
  }, /*#__PURE__*/react.createElement(SideBar/* default */.Z, props), /*#__PURE__*/react.createElement("div", {
    className: "content_wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react.createElement(BreadCrumb/* default */.Z, {
    heading: "Reports",
    value: "Reports"
  }), /*#__PURE__*/react.createElement("section", {
    className: "chart_section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card card-shadow mb-4"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Transaction Id",
    name: "txnId",
    onChange: handleChange
  })), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Account number",
    name: "accountNumber",
    onChange: handleChange
  })), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react.createElement("input", {
    type: "date",
    className: "form-control",
    name: "date",
    onChange: handleChange
  })), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect1",
    name: "status",
    onChange: handleChange
  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, "Status"), /*#__PURE__*/react.createElement("option", {
    value: "DONE"
  }, "DONE"), /*#__PURE__*/react.createElement("option", {
    value: "INITIATED"
  }, "INITIATED"), /*#__PURE__*/react.createElement("option", {
    value: "REJECTED"
  }, "REJECTED"), /*#__PURE__*/react.createElement("option", {
    value: "FAIL"
  }, "FAIL")))), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, /*#__PURE__*/react.createElement("input", {
    type: "submit",
    className: "btn-common",
    value: "Search"
  })))))), /*#__PURE__*/react.createElement(Payout_TableHTML, {
    filterItems: filterItems,
    reportsItems: reportsItems
  }))))));
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    payout: state.payout
  };
};

/* harmony default export */ const Payout_Reports = ((0,es/* connect */.$j)(mapStateToProps)(Reports));

/***/ })

}]);