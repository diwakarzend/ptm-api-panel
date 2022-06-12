"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_boiler_plate"] = self["webpackChunkreact_boiler_plate"] || []).push([[458],{

/***/ 7458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ MapQR_MapQR)\n});\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules\nvar slicedToArray = __webpack_require__(8152);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n// EXTERNAL MODULE: ./src/Components/BreadCrumb/BreadCrumb.js\nvar BreadCrumb = __webpack_require__(6096);\n// EXTERNAL MODULE: ./src/Components/SideBar/SideBar.js\nvar SideBar = __webpack_require__(4973);\n// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 1 modules\nvar react_router_dom = __webpack_require__(5513);\n// EXTERNAL MODULE: ./src/Components/Pagination/Pagination.js\nvar Pagination = __webpack_require__(3006);\n;// CONCATENATED MODULE: ./src/Pages/MapQR/TableHTML.js\n\n\n\n\nvar TableHTML = function TableHTML(_ref) {\n  var _ref$listData = _ref.listData,\n      listData = _ref$listData === void 0 ? [] : _ref$listData;\n  return /*#__PURE__*/react.createElement(\"div\", {\n    className: \"card-body\"\n  }, /*#__PURE__*/react.createElement(\"table\", {\n    className: \"table table-bordered\"\n  }, /*#__PURE__*/react.createElement(\"thead\", null, /*#__PURE__*/react.createElement(\"tr\", null, /*#__PURE__*/react.createElement(\"th\", null, \"Id\"), /*#__PURE__*/react.createElement(\"th\", null, \"Company Name\"), /*#__PURE__*/react.createElement(\"th\", null, \"Mobile\"), /*#__PURE__*/react.createElement(\"th\", null, \"Email\"), /*#__PURE__*/react.createElement(\"th\", null, \"Role\"), /*#__PURE__*/react.createElement(\"th\", null, \"Balance\"), /*#__PURE__*/react.createElement(\"th\", null, \"Action\"))), /*#__PURE__*/react.createElement(\"tbody\", null, listData && listData.length > 0 ? listData.filter(function (item) {\n    return item.role === \"PTM_VENDOR\";\n  }).map(function (item, index) {\n    return /*#__PURE__*/react.createElement(\"tr\", {\n      key: item.userName\n    }, /*#__PURE__*/react.createElement(\"td\", null, index + 1), /*#__PURE__*/react.createElement(\"td\", null, \"\".concat(item.firstName, \" \").concat(item.lastName)), /*#__PURE__*/react.createElement(\"td\", null, item.userName), /*#__PURE__*/react.createElement(\"td\", null, item.email), /*#__PURE__*/react.createElement(\"td\", {\n      className: \"vendor\"\n    }, item.role.replace(\"PTM_VENDOR\", \"Vendor\")), /*#__PURE__*/react.createElement(\"td\", null, item.userBalance), /*#__PURE__*/react.createElement(\"td\", null, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {\n      to: \"vendor-list\",\n      className: \"cursor-pointer\"\n    }, /*#__PURE__*/react.createElement(\"i\", {\n      className: \"icon-eye\"\n    }))));\n  }) : /*#__PURE__*/react.createElement(\"tr\", null, /*#__PURE__*/react.createElement(\"td\", {\n    colSpan: 7,\n    className: \"center\"\n  }, \"No data found\")))), /*#__PURE__*/react.createElement(\"div\", null, /*#__PURE__*/react.createElement(Pagination/* default */.Z, null)));\n};\n\n/* harmony default export */ const MapQR_TableHTML = (TableHTML);\n// EXTERNAL MODULE: ./src/Pages/MapQR/style.js\nvar style = __webpack_require__(1761);\n// EXTERNAL MODULE: ./src/utils/api.js\nvar api = __webpack_require__(2456);\n;// CONCATENATED MODULE: ./src/Pages/MapQR/MapQR.js\n\n //import { connect } from \"react-redux\";\n//import { fetchTransactionReport } from \"../../actions/payout\";\n\n\n\n\n\n //import CSVExport from \"../../Components/DataExport/CSVExport\";\n\n\"\";\n\nvar MapQR = function MapQR(props) {\n  var _useState = (0,react.useState)([]),\n      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),\n      listData = _useState2[0],\n      setListData = _useState2[1];\n\n  (0,react.useEffect)(function () {\n    (0,api/* getMapqrListing */.DY)({\n      pageNo: 1,\n      pageSize: 100\n    }).then(function (res) {\n      var _res$data;\n\n      setListData(res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data);\n    });\n  }, []);\n  return /*#__PURE__*/react.createElement(style/* Wrapper */.i, {\n    className: \"container_full\"\n  }, /*#__PURE__*/react.createElement(SideBar/* default */.Z, props), /*#__PURE__*/react.createElement(\"div\", {\n    className: \"content_wrapper\"\n  }, /*#__PURE__*/react.createElement(\"div\", {\n    className: \"container-fluid\"\n  }, /*#__PURE__*/react.createElement(BreadCrumb/* default */.Z, {\n    heading: \"Merchant List\",\n    value: \"Merchant List\"\n  }), /*#__PURE__*/react.createElement(\"section\", {\n    className: \"chart_section\"\n  }, /*#__PURE__*/react.createElement(\"div\", {\n    className: \"card card-shadow mb-4\"\n  }, /*#__PURE__*/react.createElement(MapQR_TableHTML, {\n    listData: listData\n  }))))));\n};\n\n/* harmony default export */ const MapQR_MapQR = (MapQR);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ1OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQSwyQkFBcEJDLFFBQW9CO0FBQUEsTUFBcEJBLFFBQW9CLDhCQUFULEVBQVM7QUFDdkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFPLGFBQVMsRUFBQztBQUFqQixrQkFDRSxnREFDRSw2Q0FDRSxxQ0FERixlQUVFLCtDQUZGLGVBR0UseUNBSEYsZUFJRSx3Q0FKRixlQUtFLHVDQUxGLGVBTUUsMENBTkYsZUFPRSx5Q0FQRixDQURGLENBREYsZUFZRSxtQ0FDR0EsUUFBUSxJQUFJQSxRQUFRLENBQUNDLE1BQVQsR0FBa0IsQ0FBOUIsR0FDQ0QsUUFBUSxDQUNMRSxNQURILENBQ1UsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLFlBQXhCO0FBQUEsR0FEVixFQUVHQyxHQUZILENBRU8sVUFBQ0YsSUFBRCxFQUFPRyxLQUFQO0FBQUEsd0JBQ0g7QUFBSSxTQUFHLEVBQUVILElBQUksQ0FBQ0k7QUFBZCxvQkFDRSxnQ0FBS0QsS0FBSyxHQUFHLENBQWIsQ0FERixlQUVFLDBDQUFRSCxJQUFJLENBQUNLLFNBQWIsY0FBMEJMLElBQUksQ0FBQ00sUUFBL0IsRUFGRixlQUdFLGdDQUFLTixJQUFJLENBQUNJLFFBQVYsQ0FIRixlQUlFLGdDQUFLSixJQUFJLENBQUNPLEtBQVYsQ0FKRixlQUtFO0FBQUksZUFBUyxFQUFDO0FBQWQsT0FDR1AsSUFBSSxDQUFDQyxJQUFMLENBQVVPLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsUUFBaEMsQ0FESCxDQUxGLGVBUUUsZ0NBQUtSLElBQUksQ0FBQ1MsV0FBVixDQVJGLGVBU0UsNkNBQ0Usb0JBQUMsNkJBQUQ7QUFBTSxRQUFFLEVBQUMsYUFBVDtBQUF1QixlQUFTLEVBQUM7QUFBakMsb0JBQ0U7QUFBRyxlQUFTLEVBQUM7QUFBYixNQURGLENBREYsQ0FURixDQURHO0FBQUEsR0FGUCxDQURELGdCQXFCQyw2Q0FDRTtBQUFJLFdBQU8sRUFBRSxDQUFiO0FBQWdCLGFBQVMsRUFBQztBQUExQixxQkFERixDQXRCSixDQVpGLENBREYsZUEyQ0UsOENBQ0Usb0JBQUMseUJBQUQsT0FERixDQTNDRixDQURGO0FBaURELENBbEREOztBQW1EQSxzREFBZWIsU0FBZixFOzs7Ozs7O0NDckRBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFDQSxJQUFNb0IsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLGtCQUFnQ1Asa0JBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUE7QUFBQSxNQUFPYixRQUFQO0FBQUEsTUFBaUJxQixXQUFqQjs7QUFDQVAsRUFBQUEsbUJBQVMsQ0FBQyxZQUFNO0FBQ2RJLElBQUFBLCtCQUFlLENBQUM7QUFBRUksTUFBQUEsTUFBTSxFQUFFLENBQVY7QUFBYUMsTUFBQUEsUUFBUSxFQUFFO0FBQXZCLEtBQUQsQ0FBZixDQUE4Q0MsSUFBOUMsQ0FBbUQsVUFBQ0MsR0FBRCxFQUFTO0FBQUE7O0FBQzFESixNQUFBQSxXQUFXLENBQUNJLEdBQUQsYUFBQ0EsR0FBRCxvQ0FBQ0EsR0FBRyxDQUFFQyxJQUFOLDhDQUFDLFVBQVdBLElBQVosQ0FBWDtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0Usb0JBQUMsb0JBQUQ7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0Usb0JBQUMsc0JBQUQsRUFBYU4sS0FBYixDQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFLG9CQUFDLHlCQUFEO0FBQVksV0FBTyxFQUFDLGVBQXBCO0FBQW9DLFNBQUssRUFBQztBQUExQyxJQURGLGVBRUU7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSxvQkFBQyxlQUFEO0FBQVcsWUFBUSxFQUFFcEI7QUFBckIsSUFERixDQURGLENBRkYsQ0FERixDQUZGLENBREY7QUFlRCxDQXZCRDs7QUF5QkEsa0RBQWVtQixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYm9pbGVyLXBsYXRlLy4vc3JjL1BhZ2VzL01hcFFSL1RhYmxlSFRNTC5qcz9hYzQxIiwid2VicGFjazovL3JlYWN0LWJvaWxlci1wbGF0ZS8uL3NyYy9QYWdlcy9NYXBRUi9NYXBRUi5qcz9lYzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XG5jb25zdCBUYWJsZUhUTUwgPSAoeyBsaXN0RGF0YSA9IFtdIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SWQ8L3RoPlxuICAgICAgICAgICAgPHRoPkNvbXBhbnkgTmFtZTwvdGg+XG4gICAgICAgICAgICA8dGg+TW9iaWxlPC90aD5cbiAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICA8dGg+Um9sZTwvdGg+XG4gICAgICAgICAgICA8dGg+QmFsYW5jZTwvdGg+XG4gICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2xpc3REYXRhICYmIGxpc3REYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBsaXN0RGF0YVxuICAgICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnJvbGUgPT09IFwiUFRNX1ZFTkRPUlwiKVxuICAgICAgICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0udXNlck5hbWV9PlxuICAgICAgICAgICAgICAgICAgPHRkPntpbmRleCArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57YCR7aXRlbS5maXJzdE5hbWV9ICR7aXRlbS5sYXN0TmFtZX1gfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0udXNlck5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInZlbmRvclwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5yb2xlLnJlcGxhY2UoXCJQVE1fVkVORE9SXCIsIFwiVmVuZG9yXCIpfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS51c2VyQmFsYW5jZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cInZlbmRvci1saXN0XCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWV5ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17N30gY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgTm8gZGF0YSBmb3VuZFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUhUTUw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy9pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vL2ltcG9ydCB7IGZldGNoVHJhbnNhY3Rpb25SZXBvcnQgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9wYXlvdXRcIjtcbmltcG9ydCBCcmVhZENydW1iIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0JyZWFkQ3J1bWIvQnJlYWRDcnVtYlwiO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyXCI7XG5pbXBvcnQgVGFibGVIVE1MIGZyb20gXCIuL1RhYmxlSFRNTFwiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuL3N0eWxlXCI7XG5pbXBvcnQgeyBnZXRNYXBxckxpc3RpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XG4vL2ltcG9ydCBDU1ZFeHBvcnQgZnJvbSBcIi4uLy4uL0NvbXBvbmVudHMvRGF0YUV4cG9ydC9DU1ZFeHBvcnRcIjtcbmBgO1xuY29uc3QgTWFwUVIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2xpc3REYXRhLCBzZXRMaXN0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TWFwcXJMaXN0aW5nKHsgcGFnZU5vOiAxLCBwYWdlU2l6ZTogMTAwIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0TGlzdERhdGEocmVzPy5kYXRhPy5kYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyX2Z1bGxcIj5cbiAgICAgIDxTaWRlQmFyIHsuLi5wcm9wc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF93cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPEJyZWFkQ3J1bWIgaGVhZGluZz1cIk1lcmNoYW50IExpc3RcIiB2YWx1ZT1cIk1lcmNoYW50IExpc3RcIiAvPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYXJ0X3NlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLXNoYWRvdyBtYi00XCI+XG4gICAgICAgICAgICAgIDxUYWJsZUhUTUwgbGlzdERhdGE9e2xpc3REYXRhfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFFSO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlBhZ2luYXRpb24iLCJUYWJsZUhUTUwiLCJsaXN0RGF0YSIsImxlbmd0aCIsImZpbHRlciIsIml0ZW0iLCJyb2xlIiwibWFwIiwiaW5kZXgiLCJ1c2VyTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJyZXBsYWNlIiwidXNlckJhbGFuY2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJyZWFkQ3J1bWIiLCJTaWRlQmFyIiwiV3JhcHBlciIsImdldE1hcHFyTGlzdGluZyIsIk1hcFFSIiwicHJvcHMiLCJzZXRMaXN0RGF0YSIsInBhZ2VObyIsInBhZ2VTaXplIiwidGhlbiIsInJlcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7458\n");

/***/ })

}]);