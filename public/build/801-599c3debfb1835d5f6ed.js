"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[801],{

/***/ 5801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Z\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(885);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3461);\n/* harmony import */ var _utils_Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6195);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2418);\n\n\n\n\n\n\nvar CSVExport = function CSVExport(props) {\n  var payout = props.payout,\n      dispatch = props.dispatch;\n  var csvLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z)(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (data && Array.isArray(data) && data.length > 0) {\n      setTimeout(function () {\n        csvLink.current.link.click();\n      }, 2000);\n    }\n  }, [data]);\n\n  var downloadCSV = function downloadCSV() {\n    var onSuccess = function onSuccess(response) {\n      setData(response.data.content);\n    };\n\n    var onFail = function onFail(error) {};\n\n    var api = new _utils_Request__WEBPACK_IMPORTED_MODULE_2__/* [\"default\"] */ .Z(dispatch, onSuccess, onFail, false);\n    api.post(\"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_3__/* [\"default\"].login.BASE_URL */ .Z.login.BASE_URL).concat(_utils_urls__WEBPACK_IMPORTED_MODULE_3__/* [\"default\"].payout.TRANSACTION_REPORT */ .Z.payout.TRANSACTION_REPORT), {\n      status: \"DONE\"\n    });\n  };\n\n  var headers = [{\n    label: \"name\",\n    key: \"name\"\n  }, {\n    label: \"Age\",\n    key: \"age\"\n  }, {\n    label: \"Add\",\n    key: \"add\"\n  }];\n  var reportsItems = payout && payout.reports && payout.reports.data;\n  console.log(\"reportsItemsd\", data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"button\",\n    className: \"btn-common\",\n    onClick: function onClick() {\n      return downloadCSV();\n    }\n  }, \"CSV\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_csv__WEBPACK_IMPORTED_MODULE_1__.CSVLink //  headers={headers}\n  , {\n    data: data,\n    filename: \"reports.csv\",\n    ref: csvLink\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(CSVExport));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTgwMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDM0IsTUFBUUMsTUFBUixHQUE2QkQsS0FBN0IsQ0FBUUMsTUFBUjtBQUFBLE1BQWdCQyxRQUFoQixHQUE2QkYsS0FBN0IsQ0FBZ0JFLFFBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHVCw2Q0FBTSxFQUF0Qjs7QUFDQSxrQkFBd0JGLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT1ksSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUFaLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlXLElBQUksSUFBSUUsS0FBSyxDQUFDQyxPQUFOLENBQWNILElBQWQsQ0FBUixJQUErQkEsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBakQsRUFBb0Q7QUFDbERDLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZOLFFBQUFBLE9BQU8sQ0FBQ08sT0FBUixDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEO0FBQ0YsR0FOUSxFQU1OLENBQUNSLElBQUQsQ0FOTSxDQUFUOztBQU9BLE1BQU1TLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUFjO0FBQzlCVixNQUFBQSxPQUFPLENBQUNVLFFBQVEsQ0FBQ1gsSUFBVCxDQUFjWSxPQUFmLENBQVA7QUFDRCxLQUZEOztBQUlBLFFBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVyxDQUFFLENBQTVCOztBQUVBLFFBQU1DLEdBQUcsR0FBRyxJQUFJdEIsK0RBQUosQ0FBWUssUUFBWixFQUFzQlksU0FBdEIsRUFBaUNHLE1BQWpDLEVBQXlDLEtBQXpDLENBQVo7QUFDQUUsSUFBQUEsR0FBRyxDQUFDQyxJQUFKLFdBQVl0QiwwRkFBWixTQUFrQ0EsZ0hBQWxDLEdBQW9FO0FBQ2xFMEIsTUFBQUEsTUFBTSxFQUFFO0FBRDBELEtBQXBFO0FBR0QsR0FYRDs7QUFZQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFQyxJQUFBQSxLQUFLLEVBQUUsTUFEVDtBQUVFQyxJQUFBQSxHQUFHLEVBQUU7QUFGUCxHQURjLEVBS2Q7QUFDRUQsSUFBQUEsS0FBSyxFQUFFLEtBRFQ7QUFFRUMsSUFBQUEsR0FBRyxFQUFFO0FBRlAsR0FMYyxFQVNkO0FBQ0VELElBQUFBLEtBQUssRUFBRSxLQURUO0FBRUVDLElBQUFBLEdBQUcsRUFBRTtBQUZQLEdBVGMsQ0FBaEI7QUFlQSxNQUFNQyxZQUFZLEdBQUczQixNQUFNLElBQUlBLE1BQU0sQ0FBQzRCLE9BQWpCLElBQTRCNUIsTUFBTSxDQUFDNEIsT0FBUCxDQUFlekIsSUFBaEU7QUFDQTBCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIzQixJQUE3QjtBQUNBLHNCQUNFLGlEQUFDLDJDQUFELHFCQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMsWUFGWjtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1TLFdBQVcsRUFBakI7QUFBQTtBQUhYLFdBREYsZUFRRSxpREFBQyw4Q0FBRCxDQUNFO0FBREY7QUFFRSxRQUFJLEVBQUVULElBRlI7QUFHRSxZQUFRLEVBQUMsYUFIWDtBQUlFLE9BQUcsRUFBRUQ7QUFKUCxJQVJGLENBREY7QUFpQkQsQ0ExREQ7O0FBNERBLDhFQUFlWix1Q0FBQSxDQUFXUSxTQUFYLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ib2lsZXItcGxhdGUvLi9zcmMvQ29tcG9uZW50cy9EYXRhRXhwb3J0L0NTVkV4cG9ydC5qcz8zMjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENTVkxpbmssIENTVkRvd25sb2FkIH0gZnJvbSBcInJlYWN0LWNzdlwiO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uLy4uL3V0aWxzL1JlcXVlc3RcIjtcbmltcG9ydCB1cmxzIGZyb20gXCIuLi8uLi91dGlscy91cmxzXCI7XG5cbmNvbnN0IENTVkV4cG9ydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBheW91dCwgZGlzcGF0Y2ggfSA9IHByb3BzO1xuICBjb25zdCBjc3ZMaW5rID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmIEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY3N2TGluay5jdXJyZW50LmxpbmsuY2xpY2soKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcbiAgY29uc3QgZG93bmxvYWRDU1YgPSAoKSA9PiB7XG4gICAgY29uc3Qgb25TdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEuY29udGVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uRmFpbCA9IChlcnJvcikgPT4ge307XG5cbiAgICBjb25zdCBhcGkgPSBuZXcgUmVxdWVzdChkaXNwYXRjaCwgb25TdWNjZXNzLCBvbkZhaWwsIGZhbHNlKTtcbiAgICBhcGkucG9zdChgJHt1cmxzLmxvZ2luLkJBU0VfVVJMfSR7dXJscy5wYXlvdXQuVFJBTlNBQ1RJT05fUkVQT1JUfWAsIHtcbiAgICAgIHN0YXR1czogXCJET05FXCIsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAga2V5OiBcIm5hbWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkFnZVwiLFxuICAgICAga2V5OiBcImFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQWRkXCIsXG4gICAgICBrZXk6IFwiYWRkXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCByZXBvcnRzSXRlbXMgPSBwYXlvdXQgJiYgcGF5b3V0LnJlcG9ydHMgJiYgcGF5b3V0LnJlcG9ydHMuZGF0YTtcbiAgY29uc29sZS5sb2coXCJyZXBvcnRzSXRlbXNkXCIsIGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jb21tb25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZENTVigpfVxuICAgICAgPlxuICAgICAgICBDU1ZcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPENTVkxpbmtcbiAgICAgICAgLy8gIGhlYWRlcnM9e2hlYWRlcnN9XG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIGZpbGVuYW1lPVwicmVwb3J0cy5jc3ZcIlxuICAgICAgICByZWY9e2Nzdkxpbmt9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENTVkV4cG9ydCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNTVkxpbmsiLCJDU1ZEb3dubG9hZCIsIlJlcXVlc3QiLCJ1cmxzIiwiQ1NWRXhwb3J0IiwicHJvcHMiLCJwYXlvdXQiLCJkaXNwYXRjaCIsImNzdkxpbmsiLCJkYXRhIiwic2V0RGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwibGluayIsImNsaWNrIiwiZG93bmxvYWRDU1YiLCJvblN1Y2Nlc3MiLCJyZXNwb25zZSIsImNvbnRlbnQiLCJvbkZhaWwiLCJlcnJvciIsImFwaSIsInBvc3QiLCJsb2dpbiIsIkJBU0VfVVJMIiwiVFJBTlNBQ1RJT05fUkVQT1JUIiwic3RhdHVzIiwiaGVhZGVycyIsImxhYmVsIiwia2V5IiwicmVwb3J0c0l0ZW1zIiwicmVwb3J0cyIsImNvbnNvbGUiLCJsb2ciLCJtZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5801\n");

/***/ })

}]);