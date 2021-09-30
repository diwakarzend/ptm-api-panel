"use strict";
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[742],{

/***/ 3742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _actions_payout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7127);
/* harmony import */ var _Components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3715);
/* harmony import */ var _Components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4783);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4494);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Commission = function Commission(props) {
  var dispatch = props.dispatch;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_actions_payout__WEBPACK_IMPORTED_MODULE_2__/* .fetchCommisionRange */ .ef)());
  }, []);
  var payout = props.payout;
  var commissionData = payout && payout.commission && payout.commission.data;
  var userData = "";
  console.log("props", commissionData);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "container_full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_SideBar_SideBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "content_wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Components_BreadCrumb_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    heading: "Commission",
    value: "Commission"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: " col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "card card-shadow mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("table", {
    id: "bs4-table",
    className: "table table-bordered table-striped"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Range"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Charges"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", null, "Mode"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", null, commissionData && Array.isArray(commissionData) ? commissionData.map(function (item, index) {
    var charges = item.comission * 18 / 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", {
      key: item.maxAmount + item.minAmount
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, "Rs. ".concat(item.minAmount, " - Rs. ").concat(item.maxAmount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, "Rs. ".concat(item.comission, " + Rs. ").concat(charges.toFixed(2), " (GST)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", null, item.route));
  }) : "")))))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__/* .connect */ .$j)(mapStateToProps)(Commission));

/***/ })

}]);