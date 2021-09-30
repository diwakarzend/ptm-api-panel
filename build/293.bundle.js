"use strict";
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[293],{

/***/ 8293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FundRequest_FundRequest)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/actions/userwallet.js
var actions_userwallet = __webpack_require__(6303);
// EXTERNAL MODULE: ./src/utils/Request.js
var Request = __webpack_require__(1401);
// EXTERNAL MODULE: ./src/utils/urls.js
var urls = __webpack_require__(2968);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(4494);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(7091);
// EXTERNAL MODULE: ./src/Components/SideBar/SideBar.js
var SideBar = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/Components/BreadCrumb/BreadCrumb.js
var BreadCrumb = __webpack_require__(4783);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/Pages/FundRequest/FundRequestForm.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var initialFormData = Object.freeze({
  fromBank: "",
  payementMode: "",
  remark: "",
  requestAmount: 0,
  toBank: "",
  transationRefNo: ""
});
var FundRequestForm = /*#__PURE__*/(0,react.memo)(function (_ref) {
  var closePopUpHandler = _ref.closePopUpHandler,
      userRole = _ref.userRole,
      getFundRequest = _ref.getFundRequest,
      setStatus = _ref.setStatus;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isPopupVisible = _useState2[0],
      handlePopUp = _useState2[1];

  var _useState3 = (0,react.useState)(initialFormData),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      formData = _useState4[0],
      updateFormData = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      success = _useState8[0],
      setSuccess = _useState8[1];

  var handleChange = function handleChange(event) {
    updateFormData(_objectSpread(_objectSpread({}, formData), {}, (0,defineProperty/* default */.Z)({}, event.target.name, event.target.value.trim())));
  }; // useEffect(() => {
  //   dispatch(getFundRequest(userRole));
  // }, [userRole]);


  var submitFormHandler = function submitFormHandler(event) {
    event.preventDefault();

    var errorHandler = function errorHandler(response) {
      var errors = [];

      if (response && response.status == 400) {
        if (response.fieldErrors && response.fieldErrors instanceof Array) {
          response.fieldErrors.forEach(function (item) {
            return errors.push("".concat(item.field, ": ").concat(item.message));
          });
        }

        if (errors.length > 0) {
          setErrors(errors);
          window.scrollTo(100, 100);
        }
      } else if (response && response.status == 401) {
        setErrors([response.error]);
        window.scrollTo(100, 100);
      }
    };

    var successHandler = function successHandler(response) {
      if (!response.success) {
        setErrors([response.msg]);
      } else {
        setErrors([]);
        setSuccess(response.msg);
        closePopUpHandler();
        (0,common/* removeOverlay */.rG)();
        getFundRequest(userRole);
        setStatus("Fund request sent to Admin for Approval"); //fetchUsersData();
      }
    };

    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.post(urls/* default.login.BASE_URL */.Z.login.BASE_URL + urls/* default.Wallet.FUND_REQUEST */.Z.Wallet.FUND_REQUEST, formData);
  };

  var errorHTML = "";
  var errorStyles = "";
  var successStyles = "";

  if (errors.length > 0) {
    errorHTML = errors.map(function (val) {
      return /*#__PURE__*/react.createElement("li", {
        key: val
      }, val);
    });
    errorStyles = {
      color: "red",
      fontSize: "14px",
      marginTop: "26px"
    };
  } else {
    successStyles = {
      color: "green",
      fontSize: "14px",
      marginTop: "26px"
    };
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "modal right fade show",
    id: "exampleModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "myModalLabel2",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLabel"
  }, "Fund Request"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: closePopUpHandler
  }, /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react.createElement("form", {
    onSubmit: submitFormHandler
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "From Bank"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    id: "depositAccount",
    "aria-describedby": "Bank Name",
    placeholder: "Bank Name",
    name: "fromBank",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "To Bank"), /*#__PURE__*/react.createElement("input", {
    type: "number",
    className: "form-control",
    id: "depositAccount",
    "aria-describedby": "Bank Name",
    placeholder: "Bank Name",
    name: "toBank",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleFormControlSelect1"
  }, "Choose Payment Mode"), /*#__PURE__*/react.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect1",
    name: "payementMode",
    onChange: handleChange,
    required: true
  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, " Choose Payment Mode"), /*#__PURE__*/react.createElement("option", {
    value: "UPI"
  }, "UPI"), /*#__PURE__*/react.createElement("option", {
    value: "NEFT_IMPS"
  }, "NEFT/IMPS")))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Requested Amount"), /*#__PURE__*/react.createElement("input", {
    type: "number",
    className: "form-control",
    id: "requestedAmount",
    "aria-describedby": "requestedAmount",
    placeholder: "Requested Amount",
    name: "requestAmount",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Reference No"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Reference No",
    name: "transationRefNo",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Remarks"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Remark",
    name: "remark",
    onChange: handleChange
  })))), /*#__PURE__*/react.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn btn-primary themebtn transparent",
    "data-dismiss": "modal",
    onClick: closePopUpHandler
  }, "Close"), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary themebtn"
  }, "Submit"), /*#__PURE__*/react.createElement("div", null, errorHTML && errorStyles ? /*#__PURE__*/react.createElement("ul", {
    style: errorStyles
  }, errorHTML) : success && successStyles ? /*#__PURE__*/react.createElement("div", {
    style: successStyles
  }, success) : "")))))));
});
/* harmony default export */ const FundRequest_FundRequestForm = (FundRequestForm);
;// CONCATENATED MODULE: ./src/Components/FullPageLoader/FullPageLoader.js



var FullPageLoader = function FullPageLoader() {
  return /*#__PURE__*/react.createElement("div", {
    className: "full-page-loader"
  });
};

/* harmony default export */ const FullPageLoader_FullPageLoader = (FullPageLoader);
;// CONCATENATED MODULE: ./src/Components/FullPageLoader/index.js

;// CONCATENATED MODULE: ./src/Pages/FundRequest/FundRequest.js












var FundRequest = /*#__PURE__*/(0,react.memo)(function (props) {
  var dispatch = props.dispatch,
      login = props.login,
      userwallet = props.userwallet;
  var fundRequestItems = userwallet.fundRequest.data;
  var fundRequestLoading = userwallet.fundRequestLoading;
  var userRole = login && login.userData && login.userData.role;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isPopupVisible = _useState2[0],
      handlePopUp = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      statusMessage = _useState4[0],
      setStatus = _useState4[1];

  var getFundRequest = function getFundRequest(userRole) {
    dispatch((0,actions_userwallet/* fetchFundRequests */.qp)(userRole));
  }; //componentDidUpdate


  (0,react.useEffect)(function () {
    if (userRole) {
      getFundRequest(userRole);
    }
  }, [userRole]);

  var changeHandler = function changeHandler(event) {
    dispatch((0,actions_userwallet/* fetchFundRequests */.qp)(userRole, event.target.value));
  };

  var closePopUpHandler = function closePopUpHandler() {
    (0,common/* removeOverlay */.rG)();
    handlePopUp(false);
  };

  var openPopupHandler = function openPopupHandler() {
    (0,common/* addOverlay */.Dw)();
    handlePopUp(true);
  };

  var successHandler = function successHandler(response) {
    setStatus(response.msg);
    getFundRequest(userRole);
  };

  var errorHandler = function errorHandler(response) {
    setStatus(response.msg);
  };

  var handleApprove = function handleApprove(requestId) {
    // reqstfunduuid
    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.get(urls/* default.login.BASE_URL */.Z.login.BASE_URL + urls/* default.Wallet.FUND_REQUEST_APPROVE */.Z.Wallet.FUND_REQUEST_APPROVE + requestId);
  };

  var handleReject = function handleReject(requestId) {
    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.get(urls/* default.login.BASE_URL */.Z.login.BASE_URL + urls/* default.Wallet.FUND_REQUEST_REJECT */.Z.Wallet.FUND_REQUEST_REJECT + requestId);
  };
  /*   userwallet:
  fundRequest:
  code: "INFO000"
  data: Array(1)
  0:
  approveStatus: "INITIATED"
  : "HDFC"
  payementMode: "NET_BANKING"
  proofUpdaodStatus: null
  reqstDate: "2021-09-19T09:40:38"
  reqstfundUuid: "65ff9fb4-7e82-44fc-af76-39f22efe613f"
  : 1000
  requestUserName: "9718063555"
  */


  console.log("fundRequestLoading", fundRequestLoading);
  return /*#__PURE__*/react.createElement("div", {
    className: "container_full"
  }, /*#__PURE__*/react.createElement(SideBar/* default */.Z, props), /*#__PURE__*/react.createElement("div", {
    className: "content_wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react.createElement(BreadCrumb/* default */.Z, {
    heading: "Fund Request",
    value: "Fund Request"
  }), /*#__PURE__*/react.createElement("section", {
    className: "chart_section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card card-shadow mb-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card-header fund-modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card-title"
  }, "All Fund Requests"), userRole !== "PTM_ADMIN" && /*#__PURE__*/react.createElement("button", {
    // type="button"
    className: "btn-common" //data-toggle="modal"
    ,
    "data-target": "#exampleModal",
    onClick: openPopupHandler
  }, "Fund Request"), isPopupVisible && /*#__PURE__*/react.createElement(FundRequest_FundRequestForm, {
    isPopupVisible: isPopupVisible,
    closePopUpHandler: closePopUpHandler,
    userRole: userRole,
    getFundRequest: getFundRequest,
    setStatus: setStatus
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "15px"
    }
  }, statusMessage), /*#__PURE__*/react.createElement("div", {
    className: "col-md-3"
  }, userRole != "PTM_ADMIN" ? /*#__PURE__*/react.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect1",
    onChange: changeHandler
  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, "Search Payment Status"), /*#__PURE__*/react.createElement("option", {
    value: "INITIATED"
  }, "INITIATED"), /*#__PURE__*/react.createElement("option", {
    value: "DONE"
  }, "Completed")) : ""), /*#__PURE__*/react.createElement("div", {
    className: "card-body"
  }, fundRequestLoading ? /*#__PURE__*/react.createElement(FullPageLoader_FullPageLoader, null) : /*#__PURE__*/react.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "#"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "From Bank Name"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "To Bank Name"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Requested Amount"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Payment Mode"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Requested Date"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Status"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Action"))), /*#__PURE__*/react.createElement("tbody", null, fundRequestItems && Array.isArray(fundRequestItems) && fundRequestItems.length > 0 ? fundRequestItems.map(function (item, index) {
    return /*#__PURE__*/react.createElement("tr", {
      key: item.reqstDate
    }, /*#__PURE__*/react.createElement("th", {
      scope: "row"
    }, index + 1), /*#__PURE__*/react.createElement("td", null, item.fromBank), /*#__PURE__*/react.createElement("td", null, item.toBank), /*#__PURE__*/react.createElement("td", null, item.requestAmount), /*#__PURE__*/react.createElement("td", null, item.payementMode), /*#__PURE__*/react.createElement("td", null, item.reqstDate), /*#__PURE__*/react.createElement("td", {
      className: item.approveStatus.toLowerCase()
    }, item.approveStatus), /*#__PURE__*/react.createElement("td", null, item.approveStatus != "DONE" && userRole !== "PTM_VENDOR" ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("button", {
      onClick: function onClick() {
        return handleApprove(item.reqstfundUuid);
      },
      "class": "btn-common"
    }, "Approve"), /*#__PURE__*/react.createElement("button", {
      onClick: function onClick() {
        return handleReject(item.reqstfundUuid);
      },
      "class": "btn-common badge-warning"
    }, "Reject")) : "NA"));
  }) : /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: "8",
    style: {
      textAlign: "center"
    }
  }, "No Data Found"))))))))));
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.login,
    userwallet: state.userwallet
  };
};

/* harmony default export */ const FundRequest_FundRequest = ((0,es/* connect */.$j)(mapStateToProps)(FundRequest));

/***/ })

}]);