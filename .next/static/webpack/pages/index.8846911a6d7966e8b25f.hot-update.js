webpackHotUpdate_N_E("pages/index",{

/***/ "./components/disclaimer.tsx":
/*!***********************************!*\
  !*** ./components/disclaimer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fade */ \"./node_modules/@material-ui/core/esm/Fade/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-talk/components/disclaimer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    modal: {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    paper: {\n      backgroundColor: 'rgb(222, 222, 222)',\n      border: '2px solid rgb(255, 192, 47)',\n      boxShadow: theme.shadows[5],\n      padding: theme.spacing(2, 3, 3),\n      textAlign: 'center',\n      width: '350px',\n      borderRadius: '1px',\n      fontSize: '12px'\n    },\n    title: {\n      fontSize: '22px',\n      color: 'rgb(66, 54, 48)'\n    },\n    button: {\n      height: '30px',\n      marginTop: '10px',\n      marginBottom: '10px'\n    }\n  };\n});\n\nfunction Disclaimer(props) {\n  _s();\n\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n  };\n\n  var handleAcceptClick = function handleAcceptClick() {\n    localStorage.setItem('omegatalkaccept', true);\n    props.setIsAcceptDisclaimer(true);\n    handleClose();\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.modal,\n    open: open,\n    onClose: handleClose,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    \"in\": open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"Welcome to Omega Talk\"), __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"This app is created strictly for demonstration purposes. By clicking the button below, you accept that Omega Talk do not guarantee storing your messages.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleAcceptClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"Accept\"), __jsx(\"p\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"I built this app using React, React Hooks, Next.js, Socket.io and Typescript to provide a function for chatting functions.\"), __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, 'If you have any questions, please email to ', __jsx(\"a\", {\n    href: \"mailto:omegathrone@omegathrone.com\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 15\n    }\n  }, \"omegathrone@omegathrone.com\"), \".\")))));\n}\n\n_s(Disclaimer, \"ZbauVcu/I6GQoZvFWe0/Vd1mXmg=\", false, function () {\n  return [useStyles];\n});\n\n_c = Disclaimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Disclaimer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Disclaimer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNjbGFpbWVyLnRzeD9hM2VmIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1vZGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93Iiwic2hhZG93cyIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsInRpdGxlIiwiY29sb3IiLCJidXR0b24iLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJEaXNjbGFpbWVyIiwicHJvcHMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVBY2NlcHRDbGljayIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRJc0FjY2VwdERpc2NsYWltZXIiLCJCYWNrZHJvcCIsInRpbWVvdXQiLCJwYXJhZ3JhcGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLGdCQUFVLEVBQUUsUUFGUDtBQUdMQyxvQkFBYyxFQUFFO0FBSFgsS0FEZ0M7QUFNdkNDLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxFQUFFLG9CQURaO0FBRUxDLFlBQU0sRUFBRSw2QkFGSDtBQUdMQyxlQUFTLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjLENBQWQsQ0FITjtBQUlMQyxhQUFPLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FKSjtBQUtMQyxlQUFTLEVBQUUsUUFMTjtBQU1MQyxXQUFLLEVBQUUsT0FORjtBQU9MQyxrQkFBWSxFQUFFLEtBUFQ7QUFRTEMsY0FBUSxFQUFFO0FBUkwsS0FOZ0M7QUFnQnZDQyxTQUFLLEVBQUU7QUFDTEQsY0FBUSxFQUFFLE1BREw7QUFFTEUsV0FBSyxFQUFFO0FBRkYsS0FoQmdDO0FBb0J2Q0MsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRSxNQURGO0FBRU5DLGVBQVMsRUFBRSxNQUZMO0FBR05DLGtCQUFZLEVBQUU7QUFIUjtBQXBCK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBMkJBLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQWdDO0FBQUE7O0FBQzlCLE1BQU1DLE9BQU8sR0FBRzFCLFNBQVMsRUFBekI7O0FBRDhCLHdCQUVOMkIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FGTTtBQUFBO0FBQUEsTUFFdkJDLElBRnVCO0FBQUEsTUFFakJDLE9BRmlCOztBQUk5QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCRCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDLElBQXhDO0FBQ0FULFNBQUssQ0FBQ1UscUJBQU4sQ0FBNEIsSUFBNUI7QUFDQUosZUFBVztBQUNaLEdBSkQ7O0FBTUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUNFLGFBQVMsRUFBRUwsT0FBTyxDQUFDdkIsS0FEckI7QUFFRSxRQUFJLEVBQUUwQixJQUZSO0FBR0UsV0FBTyxFQUFFRSxXQUhYO0FBSUUsd0JBQW9CLE1BSnRCO0FBS0UscUJBQWlCLEVBQUVLLGtFQUxyQjtBQU1FLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFO0FBREksS0FOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsOERBQUQ7QUFBTSxVQUFJUixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUgsT0FBTyxDQUFDbkIsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFbUIsT0FBTyxDQUFDUixLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVRLE9BQU8sQ0FBQ1ksU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpS0FGRixFQU9FLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVaLE9BQU8sQ0FBQ04sTUFEckI7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUdFLFNBQUssRUFBQyxXQUhSO0FBSUUsV0FBTyxFQUFFWSxpQkFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsRUFlRTtBQUFHLGFBQVMsRUFBQyxFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0lBZkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csNkNBREgsRUFFRTtBQUFHLFFBQUksRUFBQyxvQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZGLE1BbkJGLENBREYsQ0FWRixDQURGLENBREY7QUE0Q0Q7O0dBMURRUixVO1VBQ1N4QixTOzs7S0FEVHdCLFU7QUEyRE1BLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kaXNjbGFpbWVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBtb2RhbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICBib3JkZXI6ICcycHggc29saWQgcmdiKDI1NSwgMTkyLCA0NyknLFxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIsIDMsIDMpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgd2lkdGg6ICczNTBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMXB4JyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgY29sb3I6ICdyZ2IoNjYsIDU0LCA0OCknLFxuICB9LFxuICBidXR0b246IHtcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgfSxcbn0pKTtcblxuZnVuY3Rpb24gRGlzY2xhaW1lcihwcm9wczogYW55KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWNjZXB0Q2xpY2sgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29tZWdhdGFsa2FjY2VwdCcsIHRydWUgYXMgYW55KTtcbiAgICBwcm9wcy5zZXRJc0FjY2VwdERpc2NsYWltZXIodHJ1ZSk7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TW9kYWxcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgdGltZW91dDogNTAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmFkZSBpbj17b3Blbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5XZWxjb21lIHRvIE9tZWdhIFRhbGs8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICBUaGlzIGFwcCBpcyBjcmVhdGVkIHN0cmljdGx5IGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzLiBCeVxuICAgICAgICAgICAgICBjbGlja2luZyB0aGUgYnV0dG9uIGJlbG93LCB5b3UgYWNjZXB0IHRoYXQgT21lZ2EgVGFsayBkbyBub3RcbiAgICAgICAgICAgICAgZ3VhcmFudGVlIHN0b3JpbmcgeW91ciBtZXNzYWdlcy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFjY2VwdENsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBY2NlcHRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIEkgYnVpbHQgdGhpcyBhcHAgdXNpbmcgUmVhY3QsIFJlYWN0IEhvb2tzLCBOZXh0LmpzLCBTb2NrZXQuaW8gYW5kXG4gICAgICAgICAgICAgIFR5cGVzY3JpcHQgdG8gcHJvdmlkZSBhIGZ1bmN0aW9uIGZvciBjaGF0dGluZyBmdW5jdGlvbnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICB7J0lmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHBsZWFzZSBlbWFpbCB0byAnfVxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOm9tZWdhdGhyb25lQG9tZWdhdGhyb25lLmNvbVwiPlxuICAgICAgICAgICAgICAgIG9tZWdhdGhyb25lQG9tZWdhdGhyb25lLmNvbVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgRGlzY2xhaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/disclaimer.tsx\n");

/***/ })

})