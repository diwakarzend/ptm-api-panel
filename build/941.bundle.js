"use strict";
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[941],{

/***/ 3941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Users_Users)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/utils/Request.js
var Request = __webpack_require__(1401);
// EXTERNAL MODULE: ./src/utils/urls.js
var urls = __webpack_require__(2968);
// EXTERNAL MODULE: ./src/actions/users.js
var actions_users = __webpack_require__(3910);
// EXTERNAL MODULE: ./src/Components/SideBar/SideBar.js
var SideBar = __webpack_require__(3715);
// EXTERNAL MODULE: ./src/Components/BreadCrumb/BreadCrumb.js
var BreadCrumb = __webpack_require__(4783);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(7091);
;// CONCATENATED MODULE: ./src/Pages/Users/AddUserForm.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var initialFormData = Object.freeze({
  address1: "",
  address2: "",
  dob: "1985-12-07",
  email: "",
  firstName: "",
  landmark: "",
  langKey: "en",
  lastName: "",
  otp: "",
  password: "",
  phoneNumber: "",
  pincode: "",
  qrCodeId: "",
  role: "",
  tenantId: 0,
  userName: ""
});

var AddUserForm = function AddUserForm(props) {
  var editUserData = props.editUserData,
      userToBeEdit = props.userToBeEdit,
      closePopUpHandler = props.closePopUpHandler,
      fetchUsersData = props.fetchUsersData;

  var _useState = (0,react.useState)(initialFormData),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      formData = _useState2[0],
      updateFormData = _useState2[1];

  var _useState3 = (0,react.useState)(initialFormData),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      editFormData = _useState4[0],
      updateEditFormData = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      errors = _useState6[0],
      updateError = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      success = _useState8[0],
      updateSuccess = _useState8[1];

  (0,react.useEffect)(function () {
    if (editUserData) {
      updateFormData(_objectSpread({}, editUserData));
    }
  }, [editUserData]);

  var handleChange = function handleChange(event) {
    updateFormData(_objectSpread(_objectSpread({}, formData), {}, (0,defineProperty/* default */.Z)({}, event.target.name, event.target.value.trim())));
  };

  var updateUser = function updateUser() {
    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.post("".concat(urls/* default.login.BASE_URL */.Z.login.BASE_URL).concat(urls/* default.User.UPDATE_USER */.Z.User.UPDATE_USER), formData);
  };

  var errorHandler = function errorHandler(error) {
    // {"timestamp":"2021-09-18T06:25:35.505+00:00","status":401,"error":"Unauthorized","message":"","path":"/api/users"}
    var errors = [];

    if (error && error.status == 400) {
      if (error.fieldErrors && error.fieldErrors instanceof Array) {
        error.fieldErrors.forEach(function (item) {
          return errors.push("".concat(item.field, ": ").concat(item.message));
        });
      }

      if (errors.length > 0) {
        updateError(errors);
        window.scrollTo(100, 100);
      }
    } else if (error && error.status == 401) {
      updateError([error.error]);
      window.scrollTo(100, 100);
    }
  };

  var successHandler = function successHandler(data) {
    if (!data.success) {
      updateError([data.msg]);
    } else {
      updateError([]);
      updateSuccess(data.msg);
      closePopUpHandler();
      (0,common/* removeOverlay */.rG)();
      fetchUsersData();
    }
  };

  var submitFormHandler = function submitFormHandler(event) {
    event.preventDefault();

    if (editUserData) {
      updateUser();
    }

    formData.userName = formData.phoneNumber; // pricingToken;

    var api = new Request/* default */.Z("", successHandler, errorHandler, false);
    return api.post(urls/* default.login.BASE_URL */.Z.login.BASE_URL + urls/* default.User.CREATE_NEW_USER */.Z.User.CREATE_NEW_USER, formData);
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
      display: "block",
      paddingRight: "15px"
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
  }, "Add User"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: closePopUpHandler
  }, /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react.createElement("form", {
    onSubmit: submitFormHandler
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
    placeholder: "First Name",
    name: "firstName",
    value: formData && formData.firstName,
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
    placeholder: "Last Name",
    name: "lastName",
    value: formData && formData.lastName,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Address1"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Address1",
    name: "address1",
    value: formData && formData.address1,
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Address2"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Address2",
    name: "address2",
    value: formData && formData.address2,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Land Mark"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Land Mark",
    name: "landmark",
    value: formData && formData.landmark,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Pin Code"), /*#__PURE__*/react.createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Pin Code",
    name: "pincode",
    value: formData && formData.pincode,
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Email Id"), /*#__PURE__*/react.createElement("input", {
    type: "email",
    className: "form-control",
    placeholder: "Email Id",
    name: "email",
    value: formData && formData.email,
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "DOB"), /*#__PURE__*/react.createElement("input", {
    type: "date",
    className: "form-control",
    name: "dob",
    value: formData && formData.dob,
    min: "1950-01-01",
    max: "2000-12-31",
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Mobile"), /*#__PURE__*/react.createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Mobile",
    name: "phoneNumber",
    value: formData && formData.phoneNumber,
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleInputEmail1"
  }, "Password"), /*#__PURE__*/react.createElement("input", {
    type: "password",
    className: "form-control",
    placeholder: "Password",
    name: "password",
    required: true,
    onChange: handleChange
  }))), /*#__PURE__*/react.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react.createElement("label", {
    "for": "exampleFormControlSelect1"
  }, "User Role"), /*#__PURE__*/react.createElement("select", {
    className: "form-control",
    name: "role",
    required: true,
    onChange: handleChange
  }, /*#__PURE__*/react.createElement("option", {
    value: ""
  }, "Choose Role"), /*#__PURE__*/react.createElement("option", {
    value: "PTM_VENDOR"
  }, "Vendor"), /*#__PURE__*/react.createElement("option", {
    value: "PTM_SUB"
  }, "Sub Admin"))))), /*#__PURE__*/react.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn btn-primary themebtn transparent",
    "data-dismiss": "modal",
    onClick: closePopUpHandler
  }, "Close"), /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "btn btn-primary themebtn"
  }, editUserData ? "Update User" : "Save User")), /*#__PURE__*/react.createElement("div", null, errorHTML && errorStyles ? /*#__PURE__*/react.createElement("ul", {
    style: errorStyles
  }, errorHTML) : success && successStyles ? /*#__PURE__*/react.createElement("div", {
    style: successStyles
  }, success) : ""))))));
};

/* harmony default export */ const Users_AddUserForm = (AddUserForm);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(4494);
;// CONCATENATED MODULE: ./src/Pages/Users/Users.js



function Users_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Users_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Users_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Users_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Users = function Users(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isPopupVisible = _useState2[0],
      handlePopUp = _useState2[1];

  var _useState3 = (0,react.useState)(""),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      userToBeEdit = _useState4[0],
      setUserId = _useState4[1];

  var _useState5 = (0,react.useState)(""),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      editUserData = _useState6[0],
      setEditUserData = _useState6[1];

  var dispatch = props.dispatch;

  var fetchUsersData = function fetchUsersData() {
    dispatch((0,actions_users/* fetchUsersList */.iI)());
  };

  (0,react.useEffect)(function () {
    fetchUsersData();
  }, []);

  var editClickHandler = function editClickHandler(userId) {
    handlePopUp(true);
    setUserId(userId);

    var successHandler = function successHandler(response, headers) {
      if (response.success == true) {
        setEditUserData(response.data);
      }
    };

    var errorHandler = function errorHandler(error) {};

    var request = new Request/* default */.Z("", successHandler, errorHandler, false);
    return request.get("".concat(urls/* default.login.BASE_URL */.Z.login.BASE_URL).concat(urls/* default.User.EDIT_USER.replace */.Z.User.EDIT_USER.replace("{userId}", userId)));
  };

  var openPopupHandler = function openPopupHandler() {
    document.body.classList.add("modal-open");
    handlePopUp(true);
  };

  var closePopUpHandler = function closePopUpHandler() {
    setEditUserData("");
    document.body.classList.remove("modal-open");
    handlePopUp(false);
  };

  var users = props.users;
  var userData = users && users.usersList && users.usersList.data;
  return /*#__PURE__*/react.createElement("div", {
    className: "container_full"
  }, /*#__PURE__*/react.createElement(SideBar/* default */.Z, props), /*#__PURE__*/react.createElement("div", {
    className: "content_wrapper"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react.createElement(BreadCrumb/* default */.Z, {
    heading: "Users",
    value: "Users"
  }), /*#__PURE__*/react.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react.createElement("div", {
    className: " col-sm-12"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card card-shadow mb-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card-header fund-modal"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card-title"
  }, "Add User "), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn-common",
    "data-toggle": "modal",
    "data-target": "#exampleModal",
    onClick: openPopupHandler
  }, "Add User"), isPopupVisible ? /*#__PURE__*/react.createElement(Users_AddUserForm, {
    closePopUpHandler: closePopUpHandler,
    fetchUsersData: fetchUsersData,
    props: props,
    editUserData: editUserData,
    userToBeEdit: userToBeEdit
  }) : ""), /*#__PURE__*/react.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react.createElement("div", {
    className: "card-title"
  }, /*#__PURE__*/react.createElement("div", {
    className: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn-common"
  }, "Copy"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn-common"
  }, "CSV"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn-common"
  }, "Excel"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn-common"
  }, "PDF"), /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "btn-common"
  }, "Print")))), /*#__PURE__*/react.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react.createElement("table", {
    id: "bs4-table",
    className: "table table-bordered table-striped"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", null, "Id"), /*#__PURE__*/react.createElement("th", null, "Company Name"), /*#__PURE__*/react.createElement("th", null, "Mobile"), /*#__PURE__*/react.createElement("th", null, "Email"), /*#__PURE__*/react.createElement("th", null, "Action"))), /*#__PURE__*/react.createElement("tbody", null, userData && Array.isArray(userData) ? userData.map(function (item, index) {
    return /*#__PURE__*/react.createElement("tr", {
      key: item.userName
    }, /*#__PURE__*/react.createElement("td", null, index + 1), /*#__PURE__*/react.createElement("td", null, "".concat(item.firstName, " ").concat(item.lastName)), /*#__PURE__*/react.createElement("td", null, item.userName), /*#__PURE__*/react.createElement("td", null, item.email), /*#__PURE__*/react.createElement("td", {
      onClick: function onClick() {
        return editClickHandler(item.userName);
      }
    }, "Edit"));
  }) : "")))))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return Users_objectSpread({}, state);
};

/* harmony default export */ const Users_Users = ((0,es/* connect */.$j)(mapStateToProps)(Users));

/***/ })

}]);