"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[310],{

/***/ 7310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ MapQR_VendorList)\n});\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules\nvar slicedToArray = __webpack_require__(8152);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules\nvar react_router_dom = __webpack_require__(5513);\n// EXTERNAL MODULE: ./src/Components/BreadCrumb/BreadCrumb.js\nvar BreadCrumb = __webpack_require__(6096);\n// EXTERNAL MODULE: ./src/Components/SideBar/SideBar.js\nvar SideBar = __webpack_require__(4973);\n// EXTERNAL MODULE: ./src/Components/Pagination/Pagination.js\nvar Pagination = __webpack_require__(3006);\n;// CONCATENATED MODULE: ./src/Pages/MapQR/VendorTableHTML.js\n\n\n\nvar VendorTableHTML = function VendorTableHTML(_ref) {\n  var _ref$vendorData = _ref.vendorData,\n      vendorData = _ref$vendorData === void 0 ? [] : _ref$vendorData;\n  return /*#__PURE__*/react.createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react.createElement(\"table\", {\n    className: \"table table-bordered\"\n  }, /*#__PURE__*/react.createElement(\"thead\", null, /*#__PURE__*/react.createElement(\"tr\", null, /*#__PURE__*/react.createElement(\"th\", {\n    scope: \"col\"\n  }, \"ID\"), /*#__PURE__*/react.createElement(\"th\", {\n    scope: \"col\"\n  }, \"User UUID\"), /*#__PURE__*/react.createElement(\"th\", {\n    scope: \"col\"\n  }, \"Vendor Id\"), /*#__PURE__*/react.createElement(\"th\", {\n    scope: \"col\"\n  }, \"VPA Id\"), /*#__PURE__*/react.createElement(\"th\", {\n    scope: \"col\"\n  }, \"Phone No\"))), /*#__PURE__*/react.createElement(\"tbody\", null, vendorData && vendorData.length > 0 ? vendorData.map(function (item, index) {\n    return /*#__PURE__*/react.createElement(\"tr\", {\n      key: index\n    }, /*#__PURE__*/react.createElement(\"td\", null, item === null || item === void 0 ? void 0 : item.id), /*#__PURE__*/react.createElement(\"td\", null, item === null || item === void 0 ? void 0 : item.userUUID), /*#__PURE__*/react.createElement(\"td\", null, item === null || item === void 0 ? void 0 : item.vendorId), /*#__PURE__*/react.createElement(\"td\", null, item === null || item === void 0 ? void 0 : item.vpaId), /*#__PURE__*/react.createElement(\"td\", null, item === null || item === void 0 ? void 0 : item.phoneNo));\n  }) : /*#__PURE__*/react.createElement(\"tr\", null, /*#__PURE__*/react.createElement(\"td\", {\n    colSpan: 5,\n    className: \"center\"\n  }, \"No data found\")))), /*#__PURE__*/react.createElement(\"div\", null, /*#__PURE__*/react.createElement(Pagination/* default */.Z, null)));\n};\n\n/* harmony default export */ const MapQR_VendorTableHTML = (VendorTableHTML);\n// EXTERNAL MODULE: ./src/Pages/MapQR/style.js\nvar style = __webpack_require__(1761);\n// EXTERNAL MODULE: ./src/utils/api.js\nvar api = __webpack_require__(2456);\n;// CONCATENATED MODULE: ./src/Pages/MapQR/VendorList.js\n\n\n //import { connect } from \"react-redux\";\n//import { fetchTransactionReport } from \"../../actions/payout\";\n\n\n\n\n\n //import CSVExport from \"../../Components/DataExport/CSVExport\";\n\nvar VendorList = function VendorList(props) {\n  var _useState = (0,react.useState)([]),\n      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),\n      vendorData = _useState2[0],\n      setvendorData = _useState2[1];\n\n  (0,react.useEffect)(function () {\n    (0,api/* getVendorDetailsByID */.T6)({\n      pageNo: 1,\n      pageSize: 100\n    }).then(function (res) {\n      var _res$data;\n\n      setvendorData(res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data);\n    });\n  }, []);\n  return /*#__PURE__*/react.createElement(style/* Wrapper */.i, {\n    className: \"container_full\"\n  }, /*#__PURE__*/react.createElement(SideBar/* default */.Z, props), /*#__PURE__*/react.createElement(\"div\", {\n    className: \"content_wrapper\"\n  }, /*#__PURE__*/react.createElement(\"div\", {\n    className: \"container-fluid\"\n  }, /*#__PURE__*/react.createElement(BreadCrumb/* default */.Z, {\n    heading: \"Vendor List\",\n    value: \"Vendor List\"\n  }), /*#__PURE__*/react.createElement(\"section\", {\n    className: \"chart_section\"\n  }, /*#__PURE__*/react.createElement(\"div\", {\n    className: \"card card-shadow mb-4\"\n  }, /*#__PURE__*/react.createElement(\"div\", {\n    className: \"card-header justify-end\"\n  }, /*#__PURE__*/react.createElement(\"div\", {\n    className: \"card-title\"\n  }, /*#__PURE__*/react.createElement(\"div\", {\n    className: \"btn-group\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\"\n  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {\n    to: \"/mapqr-add\",\n    \"class\": \"btn btn-primary themebtn\"\n  }, \"Add\")))), /*#__PURE__*/react.createElement(MapQR_VendorTableHTML, {\n    vendorData: vendorData\n  }))))));\n};\n\n/* harmony default export */ const MapQR_VendorList = (VendorList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQyw2QkFBRDtBQUFNLE1BQUUsRUFBQyxZQUFUO0FBQXNCLGFBQU07QUFBNUIsV0FMRixDQURGLENBREYsQ0FERixlQWNFLG9CQUFDLHFCQUFEO0FBQWlCLGNBQVUsRUFBRWxCO0FBQTdCLElBZEYsQ0FERixDQUZGLENBREYsQ0FGRixDQURGO0FBNEJELENBcENEOztBQXNDQSx1REFBZWlCLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ib2lsZXItcGxhdGUvLi9zcmMvUGFnZXMvTWFwUVIvVmVuZG9yVGFibGVIVE1MLmpzP2UwNmQiLCJ3ZWJwYWNrOi8vcmVhY3QtYm9pbGVyLXBsYXRlLy4vc3JjL1BhZ2VzL01hcFFSL1ZlbmRvckxpc3QuanM/NzJkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb25cIjtcblxuY29uc3QgVmVuZG9yVGFibGVIVE1MID0gKHsgdmVuZG9yRGF0YSA9IFtdIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JRDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyIFVVSUQ8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VmVuZG9yIElkPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZQQSBJZDwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QaG9uZSBObzwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt2ZW5kb3JEYXRhICYmIHZlbmRvckRhdGEubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIHZlbmRvckRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtPy5pZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbT8udXNlclVVSUR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0/LnZlbmRvcklkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtPy52cGFJZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbT8ucGhvbmVOb308L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0gY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm8gZGF0YSBmb3VuZFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWZW5kb3JUYWJsZUhUTUw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG4vL2ltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vaW1wb3J0IHsgZmV0Y2hUcmFuc2FjdGlvblJlcG9ydCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3BheW91dFwiO1xuaW1wb3J0IEJyZWFkQ3J1bWIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvQnJlYWRDcnVtYi9CcmVhZENydW1iXCI7XG5pbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXJcIjtcbmltcG9ydCBWZW5kb3JUYWJsZUhUTUwgZnJvbSBcIi4vVmVuZG9yVGFibGVIVE1MXCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCB7IGdldFZlbmRvckRldGFpbHNCeUlEIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiO1xuLy9pbXBvcnQgQ1NWRXhwb3J0IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0RhdGFFeHBvcnQvQ1NWRXhwb3J0XCI7XG5cbmNvbnN0IFZlbmRvckxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3ZlbmRvckRhdGEsIHNldHZlbmRvckRhdGFdID0gdXNlU3RhdGUoW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFZlbmRvckRldGFpbHNCeUlEKHsgcGFnZU5vOiAxLCBwYWdlU2l6ZTogMTAwIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0dmVuZG9yRGF0YShyZXM/LmRhdGE/LmRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9XCJjb250YWluZXJfZnVsbFwiPlxuICAgICAgPFNpZGVCYXIgey4uLnByb3BzfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X3dyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8QnJlYWRDcnVtYiBoZWFkaW5nPVwiVmVuZG9yIExpc3RcIiB2YWx1ZT1cIlZlbmRvciBMaXN0XCIgLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGFydF9zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1zaGFkb3cgbWItNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbWFwcXItYWRkXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdGhlbWVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8VmVuZG9yVGFibGVIVE1MIHZlbmRvckRhdGE9e3ZlbmRvckRhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVuZG9yTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2luYXRpb24iLCJWZW5kb3JUYWJsZUhUTUwiLCJ2ZW5kb3JEYXRhIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJ1c2VyVVVJRCIsInZlbmRvcklkIiwidnBhSWQiLCJwaG9uZU5vIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiQnJlYWRDcnVtYiIsIlNpZGVCYXIiLCJXcmFwcGVyIiwiZ2V0VmVuZG9yRGV0YWlsc0J5SUQiLCJWZW5kb3JMaXN0IiwicHJvcHMiLCJzZXR2ZW5kb3JEYXRhIiwicGFnZU5vIiwicGFnZVNpemUiLCJ0aGVuIiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7310\n");

/***/ })

}]);