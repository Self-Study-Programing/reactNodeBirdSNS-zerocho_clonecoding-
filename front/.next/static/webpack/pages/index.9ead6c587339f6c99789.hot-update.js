webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/seonghun/\\u1100\\u1169\\u11BC\\u1107\\u116E/\\u110B\\u1170\\u11B8/react/ reactNodeBirdSNS-zerocho_clonecoding-/front/components/PostForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar PostForm = function PostForm() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      imagePaths = _useSelector.imagePaths;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setText(e.target.value);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(text);\n  }, [text]);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_3__[\"addPost\"]);\n    setText(\"\");\n  }, []);\n  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    imageInput.current.click();\n  }, [imageInput.current]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Form\"], {\n    style: {\n      margin: \"10px 0 20px\"\n    },\n    encType: \"multipart/form-data\",\n    onFinish: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Input\"].TextArea, {\n    value: text,\n    onChange: onChangeText,\n    maxLength: \"140\",\n    placeholder: \"\\uC5B4\\uB5A4 \\uC2E0\\uAE30\\uD55C \\uC77C\\uC774 \\uC788\\uC5C8\\uB098\\uC694?\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    type: \"primary\",\n    style: {\n      \"float\": \"right\"\n    },\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, \"\\uC9F9\\uC9F9\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, imagePaths.map(function (v) {\n    return __jsx(\"div\", {\n      key: v,\n      style: {\n        display: \"inline-block\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: v,\n      style: {\n        width: \"200px\"\n      },\n      alt: v,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 15\n      }\n    }, \"\\uC81C\\uAC70\")));\n  })));\n};\n\n_s(PostForm, \"dIKEigyCzh8qL4fFBsO72vkOwQM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcz83OWM1Il0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0Iiwib25DaGFuZ2VUZXh0IiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJhZGRQb3N0Iiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwibWFyZ2luIiwibWFwIiwidiIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLHFCQUF1QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBbEM7QUFBQSxNQUFRQyxVQUFSLGdCQUFRQSxVQUFSOztBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCOztBQUNBLGtCQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztBQUN0Q0gsV0FBTyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0QsR0FGK0IsRUFFN0IsRUFGNkIsQ0FBaEM7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaO0FBQ0QsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBR0EsTUFBTVUsUUFBUSxHQUFHUCx5REFBVyxDQUFDLFlBQU07QUFDakNSLFlBQVEsQ0FBQ2dCLHNEQUFELENBQVI7QUFDQVYsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEdBSDJCLEVBR3pCLEVBSHlCLENBQTVCO0FBSUEsTUFBTVcsa0JBQWtCLEdBQUdULHlEQUFXLENBQUMsWUFBTTtBQUMzQ04sY0FBVSxDQUFDZ0IsT0FBWCxDQUFtQkMsS0FBbkI7QUFDRCxHQUZxQyxFQUVuQyxDQUFDakIsVUFBVSxDQUFDZ0IsT0FBWixDQUZtQyxDQUF0QztBQUlBLFNBQ0UsTUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFFRSxZQUFNLEVBQUU7QUFBVixLQURUO0FBRUUsV0FBTyxFQUFDLHFCQUZWO0FBR0UsWUFBUSxFQUFFTCxRQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLDBDQUFELENBQU8sUUFBUDtBQUNFLFNBQUssRUFBRVYsSUFEVDtBQUVFLFlBQVEsRUFBRUUsWUFGWjtBQUdFLGFBQVMsRUFBQyxLQUhaO0FBSUUsZUFBVyxFQUFDLHdFQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVEsTUFBM0I7QUFBNEIsVUFBTSxNQUFsQztBQUFtQyxPQUFHLEVBQUVMLFVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVlLGtCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUZGLEVBR0UsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxTQUFiO0FBQXVCLFNBQUssRUFBRTtBQUFFLGVBQU87QUFBVCxLQUE5QjtBQUFrRCxZQUFRLEVBQUMsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRixDQVhGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2xCLFVBQVUsQ0FBQ3NCLEdBQVgsQ0FBZSxVQUFDQyxDQUFEO0FBQUEsV0FDZDtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVELENBQVY7QUFBYSxXQUFLLEVBQUU7QUFBRUUsYUFBSyxFQUFFO0FBQVQsT0FBcEI7QUFBd0MsU0FBRyxFQUFFRixDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBRkYsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQWxCRixDQURGO0FBK0JELENBbEREOztHQUFNM0IsUTtVQUNtQkMsdUQsRUFDTkssdUQ7OztLQUZiTixRO0FBb0RTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xuXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgeyBpbWFnZVBhdGhzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgfSwgW3RleHRdKTtcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkUG9zdCk7XG4gICAgc2V0VGV4dChcIlwiKTtcbiAgfSwgW10pO1xuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fVxuICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxuICAgID5cbiAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cbiAgICAgICAgbWF4TGVuZ3RoPVwiMTQwXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLslrTrlqQg7Iug6riw7ZWcIOydvOydtCDsnojsl4jrgpjsmpQ/XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSAvPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fSBodG1sVHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIOynueynuVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge2ltYWdlUGF0aHMubWFwKCh2KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17dn0gc3R5bGU9e3sgd2lkdGg6IFwiMjAwcHhcIiB9fSBhbHQ9e3Z9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostForm.js\n");

/***/ })

})