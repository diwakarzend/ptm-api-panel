"use strict";
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[716],{

/***/ 3716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _Components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3715);
/* harmony import */ var _Components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4783);






var APIDocument = function APIDocument(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useState, 2),
      toggleApi1 = _useState2[0],
      setToggeleAPI1 = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useState3, 2),
      toggleApi2 = _useState4[0],
      setToggeleAPI2 = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container_full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    heading: "API",
    value: "API"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "chart_section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-xl-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-shadow mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "nav nav-pills nav-pill-custom nav-pills-sm mobile-float-none",
    id: "pills-tab",
    role: "tablist"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "nav-link active",
    id: "pills-week-tab",
    "data-toggle": "pill",
    href: "#pills-week",
    role: "tab",
    "aria-controls": "pills-week",
    "aria-selected": "false"
  }, "PAYOUT API"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tab-content",
    id: "pills-tabContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tab-pane fade active show",
    id: "pills-today",
    role: "tabpanel",
    "aria-labelledby": "pills-today-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "team-listing faq-accordian-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "dental-service-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "accordian-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "accordian-heading"
  }, "Send Payout Request", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "icon plus".concat(toggleApi1 ? " rotate-icon" : ""),
    onClick: function onClick() {
      setToggeleAPI1(!toggleApi1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "name"
  }))), toggleApi1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "accordian-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title"
  }, "Request Parameter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Parameter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "accountNumber"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Benefeciary account number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "beneficiaryName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Benefeciary Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "ifscCode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Benefeciary Ifsc code")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "mobileNumber"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Non Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Benefeciary Mobile Number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "remittanceAmount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Amount need to send")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "NEFT/IMPS/RTGS")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title"
  }, "Response Json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "api-code-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-4"
  }, "\"success :true,\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-4"
  }, "\"code :INFO031\","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-4"
  }, "\"msg :PayOut Initiated successfully!\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-0"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
    className: "accordian-heading"
  }, "Verify Payout OTP", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "icon plus".concat(toggleApi2 ? " rotate-icon" : ""),
    onClick: function onClick() {
      setToggeleAPI2(!toggleApi2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "name"
  }))), toggleApi2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "accordian-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title"
  }, "Request Parameter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Parameter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "payOutOtp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Add recieved otp send to the vendor mobile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "txnId"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Mendatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Payout transaction id")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title"
  }, "Response Json"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "api-code-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-4"
  }, "\"txnId\" : \"payoutrequest txn id\","), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-4"
  }, "\"payOutOtp\" : \"received otp on vendor mobile\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "pl-0"
  })))))))))))))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APIDocument);

/***/ })

}]);