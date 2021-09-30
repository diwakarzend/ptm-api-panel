"use strict";
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[545],{

/***/ 6545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Benificiary_Benificiary)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/actions/beneficiary.js
var actions_beneficiary = __webpack_require__(1348);
// EXTERNAL MODULE: ./src/utils/Request.js
var Request = __webpack_require__(1401);
// EXTERNAL MODULE: ./src/utils/urls.js
var urls = __webpack_require__(2968);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(4494);
// EXTERNAL MODULE: ./src/Components/SideBar/SideBar.js
var SideBar = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/Components/BreadCrumb/BreadCrumb.js
var BreadCrumb = __webpack_require__(4783);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(7091);
;// CONCATENATED MODULE: ./src/Pages/Benificiary/BenificiaryForm.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var initialFormData = Object.freeze({
  firstName: "",
  lastName: "",
  mobileNumber: "",
  bankName: "",
  accountNumber: "",
  ifscCode: ""
});
var BenificiaryForm = /*#__PURE__*/(0,react.memo)(function (_ref) {
  var closePopUpHandler = _ref.closePopUpHandler,
      userRole = _ref.userRole,
      getBeneficiary = _ref.getBeneficiary,
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
  };

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
        getBeneficiary(userRole);
        setStatus("Beneficary added successfully"); //fetchUsersData();
      }
    };

    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.post(urls/* default.login.BASE_URL */.Z.login.BASE_URL + urls/* default.User.ADD_BENEFICIARY */.Z.User.ADD_BENEFICIARY, formData);
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
      fontSize: "12px",
      marginTop: "26px",
      fontFamily: "monospace"
    };
  } else {
    successStyles = {
      color: "green",
      fontSize: "14px",
      marginTop: "26px",
      fontFamily: "monospace"
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
  }, "Add Beneficiary"), /*#__PURE__*/react.createElement("button", {
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
  }, "First Name"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    id: "depositAccount",
    "aria-describedby": "First Name",
    placeholder: "First Name",
    name: "firstName",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Last Name"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    id: "depositAccount",
    "aria-describedby": "Last Name",
    placeholder: "Last Name",
    name: "lastName",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Mobile No"), /*#__PURE__*/react.createElement("input", {
    type: "number",
    className: "form-control",
    "aria-describedby": "requestedAmount",
    placeholder: "Mobile No",
    name: "mobileNumber",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Bank Name"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Bank Name",
    name: "bankName",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Account Number"), /*#__PURE__*/react.createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Account Number",
    name: "accountNumber",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "IFSC Code"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Ifsc Code",
    name: "ifscCode",
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
/* harmony default export */ const Benificiary_BenificiaryForm = (BenificiaryForm);
;// CONCATENATED MODULE: ./src/Pages/Payout/Step2Form.js


function Step2Form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Step2Form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Step2Form_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Step2Form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Step2Form = /*#__PURE__*/(0,react.memo)(function (_ref) {
  var step2SubmitHandler = _ref.step2SubmitHandler,
      otpChangeHandler = _ref.otpChangeHandler,
      login = _ref.login,
      formData = _ref.formData,
      step1Response = _ref.step1Response;
  var userData = login && login.userData && login.userData;
  return /*#__PURE__*/react.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: step2SubmitHandler
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group merchent-detail-container"
  }, /*#__PURE__*/react.createElement("h5", null, " Merchent Details"), /*#__PURE__*/react.createElement("div", {
    className: "merchent-detail-section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "merchent-detail-list"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("label", null, "Merchent Name:")), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("span", null, userData.firstName, " ", userData.lastName))), /*#__PURE__*/react.createElement("div", {
    className: "merchent-detail-list"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("label", null, "Debit Account:")), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("span", null, "ICICI BANK- 101001"))), /*#__PURE__*/react.createElement("div", {
    className: "merchent-detail-list"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("label", null, "Beneficiary Name:")), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("span", null, formData.beneficiaryName))), /*#__PURE__*/react.createElement("div", {
    className: "merchent-detail-list"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("label", null, "Beneficiary Account:")), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("span", null, formData.accountNumber))), /*#__PURE__*/react.createElement("div", {
    className: "merchent-detail-list"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("label", null, " Total Amount:")), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("span", null, formData.remittanceAmount))), /*#__PURE__*/react.createElement("div", {
    className: "merchent-detail-list"
  }, /*#__PURE__*/react.createElement("div", {
    className: "left"
  }, /*#__PURE__*/react.createElement("label", null, " Date:"), /*#__PURE__*/react.createElement("span", null, (0,common/* getCurrentDate */.Ux)("dmy"))), /*#__PURE__*/react.createElement("div", {
    className: "right"
  }, /*#__PURE__*/react.createElement("label", null, " Mode:"), /*#__PURE__*/react.createElement("span", null, formData.route)))))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group otp-section"
  }, /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "otp-input",
    onChange: otpChangeHandler,
    name: "otp-1",
    maxlength: "1",
    required: true
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "otp-input",
    onChange: otpChangeHandler,
    name: "otp-2",
    maxlength: "1",
    required: true
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "otp-input",
    onChange: otpChangeHandler,
    name: "otp-3",
    maxlength: "1",
    required: true
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "otp-input",
    onChange: otpChangeHandler,
    name: "otp-4",
    maxlength: "1",
    required: true
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "otp-input",
    onChange: otpChangeHandler,
    name: "otp-5",
    maxlength: "1",
    required: true
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "otp-input",
    onChange: otpChangeHandler,
    name: "otp-6",
    maxlength: "1",
    required: true
  })), /*#__PURE__*/react.createElement("div", {
    className: "otp-message"
  }, /*#__PURE__*/react.createElement("p", null, "You Need a One-Time Password (OTP) to authenticate this transactions. the OTP has been send to your registered ICICI Mobile number.")))), /*#__PURE__*/react.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn btn-primary themebtn transparent",
    "data-dismiss": "modal" // onClick={closeQuickPopUpHandler}

  }, "Cancel"), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary themebtn"
  }, "Proceed To Pay"))));
});

var mapStateToProps = function mapStateToProps(state) {
  return Step2Form_objectSpread({}, state);
};

/* harmony default export */ const Payout_Step2Form = ((0,es/* connect */.$j)(mapStateToProps)(Step2Form));
;// CONCATENATED MODULE: ./src/Pages/Payout/PayoutThanks.js

var PayoutThanks = /*#__PURE__*/(0,react.memo)(function (props) {
  return /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group quick-payment-successfull"
  }, /*#__PURE__*/react.createElement("h6", null, " Payment Successfull!!"), /*#__PURE__*/react.createElement("p", null, "Company ID: 1011"), /*#__PURE__*/react.createElement("p", null, "Thank You!"), /*#__PURE__*/react.createElement("p", null, "Thanks for validating your OTP. Your payment has been Processed Successfully"), /*#__PURE__*/react.createElement("p", null, " Transaction Refrence No: 99665 "), /*#__PURE__*/react.createElement("p", null, " Utr No: 026626262662")));
});
/* harmony default export */ const Payout_PayoutThanks = (PayoutThanks);
;// CONCATENATED MODULE: ./src/Pages/Payout/QuickPaymentForm.js



function QuickPaymentForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function QuickPaymentForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { QuickPaymentForm_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { QuickPaymentForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var QuickPaymentForm_initialFormData = Object.freeze({
  beneficiaryName: "",
  accountNumber: "",
  ifscCode: "",
  mobileNumber: "",
  remittanceAmount: "",
  route: "",
  type: "",
  clientId: "" //

});
var QuickPaymentForm = /*#__PURE__*/(0,react.memo)(function (_ref) {
  var closeQuickPopUpHandler = _ref.closeQuickPopUpHandler,
      benificiaryData = _ref.benificiaryData;

  var _useState = (0,react.useState)(QuickPaymentForm_initialFormData),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      formData = _useState2[0],
      updateFormData = _useState2[1];

  var _useState3 = (0,react.useState)({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: ""
  }),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      otpData = _useState4[0],
      setotpData = _useState4[1];

  var _useState5 = (0,react.useState)({
    error: false,
    success: false
  }),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      otpStatus = _useState6[0],
      setotpStatus = _useState6[1];

  var _useState7 = (0,react.useState)({}),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      step1Response = _useState8[0],
      updatestep1Response = _useState8[1];

  var _useState9 = (0,react.useState)(""),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      payoutSuccessData = _useState10[0],
      setPayoutSuccess = _useState10[1];

  var _useState11 = (0,react.useState)(""),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      errormsg = _useState12[0],
      setErrors = _useState12[1];

  var firstName = benificiaryData.firstName,
      lastName = benificiaryData.lastName,
      mobile = benificiaryData.mobile,
      accountNumber = benificiaryData.accountNumber,
      ifscCode = benificiaryData.ifscCode,
      bankName = benificiaryData.bankName;

  var step2SubmitHandler = function step2SubmitHandler(event) {
    event.preventDefault();
    var otp = Object.values(otpData).join("");

    var successHandler = function successHandler(response) {
      if (response.success == true) {
        setotpStatus(QuickPaymentForm_objectSpread(QuickPaymentForm_objectSpread({}, otpStatus), {}, {
          success: true,
          error: false
        }));
        setPayoutSuccess(response);
      } else {
        setotpStatus(QuickPaymentForm_objectSpread(QuickPaymentForm_objectSpread({}, otpStatus), {}, {
          error: true
        }));
      }

      var errorCode = "";

      if (response.errorCodeList) {
        errorCode = response.errorCodeList[0];
      }

      setErrors(response.msg + errorCode);
    };

    var errorHandler = function errorHandler(response) {};

    var tranSactionId = step1Response.data.tnxId;
    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.put("".concat(urls/* default.login.BASE_URL */.Z.login.BASE_URL).concat(urls/* default.payout.ADD_PAYOUT */.Z.payout.ADD_PAYOUT, "?payOutOtp=").concat(otp, "&txnId=").concat(tranSactionId));
  };
  /*   {"code":"ERR0029","msg":"payout fail from merchant !","errorCodeList":["Invalid IFSC"],"success":false}
   */


  var submitFormHandler = function submitFormHandler(event) {
    event.preventDefault();
    formData.type = formData.route;

    var errorHandler = function errorHandler(response) {
      var errors = [];

      if (response && response.status == 400) {
        if (response.fieldErrors && response.fieldErrors instanceof Array) {
          setErrors(response.fieldErrors[0]);
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
      if (response.success) {
        updatestep1Response(response);
        setErrors(response.msg);
      } else {
        setErrors(response.msg); //removeOverlay();
        // getBeneficiary(userRole);
        //  setStatus("Beneficary added successfully");
        //fetchUsersData();
      }
    };

    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.post(urls/* default.login.BASE_URL */.Z.login.BASE_URL + urls/* default.payout.ADD_PAYOUT */.Z.payout.ADD_PAYOUT, formData);
  };

  var changeHandler = function changeHandler(event) {
    updateFormData(QuickPaymentForm_objectSpread(QuickPaymentForm_objectSpread({}, formData), {}, (0,defineProperty/* default */.Z)({}, event.target.name, event.target.value)));
  };

  var otpChangeHandler = function otpChangeHandler(event) {
    var _event$target = event.target,
        maxLength = _event$target.maxLength,
        value = _event$target.value,
        name = _event$target.name;

    var _name$split = name.split("-"),
        _name$split2 = (0,slicedToArray/* default */.Z)(_name$split, 2),
        fieldName = _name$split2[0],
        fieldIndex = _name$split2[1];

    var fieldIntIndex = parseInt(fieldIndex);

    if (value.length == maxLength) {
      var nextfield = document.querySelector("input[name=otp-".concat(fieldIntIndex + 1, "]"));

      if (nextfield !== null) {
        nextfield.focus();
      }
    }

    setotpData(QuickPaymentForm_objectSpread(QuickPaymentForm_objectSpread({}, otpData), {}, (0,defineProperty/* default */.Z)({}, name, value)));
  };

  (0,react.useEffect)(function () {
    //      : "12345678"
    //  : "HDFC"
    //  : "Ram"
    //  : "hdfc123"
    // : "Lakhan"
    //  : "9718063555"
    // status: "ACTIVE"
    var updatedData = {
      beneficiaryName: "".concat(firstName, " ").concat(lastName),
      accountNumber: accountNumber,
      ifscCode: ifscCode,
      mobileNumber: mobile
    };
    updateFormData(QuickPaymentForm_objectSpread(QuickPaymentForm_objectSpread({}, formData), updatedData));
  }, []);
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
  }, "Quick Payment"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: closeQuickPopUpHandler
  }, /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, errormsg || ""), otpStatus.success ? /*#__PURE__*/react.createElement(Payout_PayoutThanks, {
    payoutSuccessData: payoutSuccessData
  }) : !step1Response.success ? /*#__PURE__*/react.createElement(Step1Form, {
    submitFormHandler: submitFormHandler,
    bankName: bankName,
    ifscCode: ifscCode,
    firstName: firstName,
    lastName: lastName,
    accountNumber: accountNumber,
    changeHandler: changeHandler,
    closeQuickPopUpHandler: closeQuickPopUpHandler
  }) : /*#__PURE__*/react.createElement(Payout_Step2Form, {
    step2SubmitHandler: step2SubmitHandler,
    otpChangeHandler: otpChangeHandler,
    formData: formData
  }))));
});
/* harmony default export */ const Payout_QuickPaymentForm = (QuickPaymentForm);

var Step1Form = function Step1Form(_ref2) {
  var submitFormHandler = _ref2.submitFormHandler,
      bankName = _ref2.bankName,
      ifscCode = _ref2.ifscCode,
      firstName = _ref2.firstName,
      lastName = _ref2.lastName,
      accountNumber = _ref2.accountNumber,
      changeHandler = _ref2.changeHandler,
      closeQuickPopUpHandler = _ref2.closeQuickPopUpHandler;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("form", {
    onSubmit: submitFormHandler
  }, /*#__PURE__*/react.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group beneficiary-selection"
  }, /*#__PURE__*/react.createElement("span", {
    className: "bank-name"
  }, " ", bankName, " "), /*#__PURE__*/react.createElement("span", {
    className: "ifsc-name"
  }, " (", ifscCode, ") "), /*#__PURE__*/react.createElement("span", {
    className: "beneficiary-name"
  }, "".concat(firstName, " ").concat(lastName), " ", /*#__PURE__*/react.createElement("br", null), accountNumber))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Amount"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Amount",
    name: "remittanceAmount",
    onChange: changeHandler,
    required: true
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleFormControlSelect1"
  }, "TRANSFER MODE"), /*#__PURE__*/react.createElement("select", {
    className: "form-control",
    id: "exampleFormControlSelect1",
    name: "route",
    required: true,
    onChange: changeHandler
  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, " Choose Mode "), /*#__PURE__*/react.createElement("option", {
    value: "NEFT"
  }, " NEFT "), /*#__PURE__*/react.createElement("option", {
    value: "IMPS"
  }, "IMPS"), /*#__PURE__*/react.createElement("option", {
    value: "RTGS"
  }, "RTGS"), /*#__PURE__*/react.createElement("option", {
    value: "NB"
  }, "Net Banking"))))), /*#__PURE__*/react.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn btn-primary themebtn transparent",
    "data-dismiss": "modal",
    onClick: closeQuickPopUpHandler
  }, "Close"), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary themebtn"
  }, "Next")))));
};
;// CONCATENATED MODULE: ./src/Pages/Benificiary/Benificiary.js



function Benificiary_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Benificiary_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Benificiary_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Benificiary_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Benificiary = /*#__PURE__*/(0,react.memo)(function (props) {
  var dispatch = props.dispatch,
      login = props.login,
      beneficiary = props.beneficiary;
  var userRole = login && login.userData && login.userData.role;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isPopupVisible = _useState2[0],
      handlePopUp = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      statusMessage = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      isQuickPopupVisible = _useState6[0],
      handleQuickPopUp = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      payeeInfo = _useState8[0],
      setPayeeInfo = _useState8[1];

  var benificiaryItems = beneficiary && beneficiary.items && beneficiary.items.data;
  (0,react.useEffect)(function () {
    getBeneficiary();
  }, []);

  var getBeneficiary = function getBeneficiary() {
    dispatch((0,actions_beneficiary/* fetchBeneficiary */.kt)());
  };

  var closePopUpHandler = function closePopUpHandler() {
    (0,common/* removeOverlay */.rG)();
    handlePopUp(false);
  };

  var openPopupHandler = function openPopupHandler() {
    (0,common/* addOverlay */.Dw)();
    handlePopUp(true);
  };

  var closeQuickPopUpHandler = function closeQuickPopUpHandler() {
    (0,common/* removeOverlay */.rG)();
    handleQuickPopUp(false);
  };

  var openQuickPopupHandler = function openQuickPopupHandler(beneficiaryId) {
    (0,common/* addOverlay */.Dw)();
    handleQuickPopUp(true);
    var payeeData = "";

    if (benificiaryItems && Array.isArray(benificiaryItems) && benificiaryItems.length > 0) {
      payeeData = benificiaryItems.filter(function (item) {
        return item.beneficiaryId == beneficiaryId;
      });

      if (payeeData.length > 0) {
        setPayeeInfo(payeeData[0]);
      }
    }
  };

  return /*#__PURE__*/react.createElement("div", {
    className: "container_full"
  }, /*#__PURE__*/react.createElement(SideBar/* default */.Z, props), /*#__PURE__*/react.createElement("div", {
    className: "content_wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react.createElement(BreadCrumb/* default */.Z, {
    heading: "Beneficiary",
    value: "Beneficiary"
  }), /*#__PURE__*/react.createElement("section", {
    className: "chart_section"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card card-shadow mb-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card-header fund-modal"
  }, /*#__PURE__*/react.createElement("label", {
    className: "card-title"
  }, "Beneficiary"), userRole !== "PTM_ADMIN" && /*#__PURE__*/react.createElement("button", {
    // type="button"
    className: "btn-common" //data-toggle="modal"
    ,
    "data-target": "#exampleModal",
    onClick: openPopupHandler
  }, "Add Beneficiary"), isPopupVisible && /*#__PURE__*/react.createElement(Benificiary_BenificiaryForm, {
    isPopupVisible: isPopupVisible,
    closePopUpHandler: closePopUpHandler,
    userRole: userRole,
    getBeneficiary: getBeneficiary,
    setStatus: setStatus
  }), isQuickPopupVisible && /*#__PURE__*/react.createElement(Payout_QuickPaymentForm, {
    isQuickPopupVisible: isQuickPopupVisible,
    closeQuickPopUpHandler: closeQuickPopUpHandler,
    benificiaryData: payeeInfo
  })), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "15px"
    }
  }, statusMessage), /*#__PURE__*/react.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react.createElement("table", {
    className: "table table-bordered"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "#"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "First Name"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Last Name"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Mobile No"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Bank Name"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Account No"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "IFSC"), /*#__PURE__*/react.createElement("th", {
    scope: "col"
  }, "Status"), /*#__PURE__*/react.createElement("th", null, "Action"))), /*#__PURE__*/react.createElement("tbody", null, benificiaryItems && Array.isArray(benificiaryItems) && benificiaryItems.length > 0 ? benificiaryItems.map(function (item, index) {
    return /*#__PURE__*/react.createElement("tr", {
      key: item.reqstDate
    }, /*#__PURE__*/react.createElement("th", {
      scope: "row"
    }, index + 1), /*#__PURE__*/react.createElement("td", null, item.firstName), /*#__PURE__*/react.createElement("td", null, item.lastName), /*#__PURE__*/react.createElement("td", null, item.mobile), /*#__PURE__*/react.createElement("td", null, item.bankName), /*#__PURE__*/react.createElement("td", null, item.accountNumber), /*#__PURE__*/react.createElement("td", null, item.ifscCode), /*#__PURE__*/react.createElement("td", {
      className: item.status.toLowerCase()
    }, item.status), /*#__PURE__*/react.createElement("td", null, /*#__PURE__*/react.createElement("button", {
      onClick: function onClick() {
        return openQuickPopupHandler(item.beneficiaryId);
      },
      className: "quick-payment-btn btn-common"
    }, "Quick Payment")));
  }) : /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    colSpan: "8",
    style: {
      textAlign: "center"
    }
  }, "No Data Found"))))))))));
});

var Benificiary_mapStateToProps = function mapStateToProps(state) {
  return Benificiary_objectSpread({}, state);
};

/* harmony default export */ const Benificiary_Benificiary = ((0,es/* connect */.$j)(Benificiary_mapStateToProps)(Benificiary));

/***/ })

}]);