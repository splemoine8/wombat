"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/dist/index.mjs\");\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.module.css */ \"./components/navigation.module.css\");\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const menuItems = [\n        \"Profile\",\n        \"Dashboard\",\n        \"Activity\",\n        \"Analytics\",\n        \"System\",\n        \"Deployments\",\n        \"My Settings\",\n        \"Team Settings\",\n        \"Help & Feedback\",\n        \"Log Out\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n        onMenuOpenChange: setIsMenuOpen,\n        isBordered: true,\n        isBlurred: false,\n        justify: \"center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarMenuToggle, {\n                    \"aria-label\": isMenuOpen ? \"Close menu\" : \"Open menu\",\n                    className: \"sm:hidden\"\n                }, void 0, false, {\n                    fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarContent, {\n                className: \"styles.navbar\",\n                justify: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarItem, {\n                        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            color: \"foreground\",\n                            href: \"#\",\n                            children: \"Features\"\n                        }, void 0, false, {\n                            fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarItem, {\n                        isActive: true,\n                        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#\",\n                            \"aria-current\": \"page\",\n                            children: \"Customers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarItem, {\n                        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            color: \"foreground\",\n                            href: \"#\",\n                            children: \"Integrations\"\n                        }, void 0, false, {\n                            fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarMenu, {\n                children: menuItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.NavbarMenuItem, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            color: index === 2 ? \"primary\" : index === menuItems.length - 1 ? \"danger\" : \"foreground\",\n                            className: \"w-full\",\n                            href: \"#\",\n                            size: \"lg\",\n                            children: item\n                        }, void 0, false, {\n                            fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    }, \"\".concat(item, \"-\").concat(index), false, {\n                        fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/scottlemoine/Documents/wombat/components/navigation.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDc0g7QUFDdEc7QUFFOUIsU0FBU1c7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYixxREFBYyxDQUFDO0lBRW5ELE1BQU1lLFlBQVk7UUFDaEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELHFCQUNFLDhEQUFDWixxREFBTUE7UUFBQ2Esa0JBQWtCSDtRQUFlSSxVQUFVO1FBQUNDLFdBQVc7UUFBT0MsU0FBUTs7MEJBQzVFLDhEQUFDZCw0REFBYUE7MEJBQ1osNEVBQUNFLCtEQUFnQkE7b0JBQ2ZhLGNBQVlSLGFBQWEsZUFBZTtvQkFDeENTLFdBQVU7Ozs7Ozs7Ozs7OzBCQUlkLDhEQUFDaEIsNERBQWFBO2dCQUFDZ0IsV0FBVTtnQkFBZ0JGLFNBQVE7O2tDQUMvQyw4REFBQ2IseURBQVVBO3dCQUFDZSxXQUFXWCxvRUFBVztrQ0FDaEMsNEVBQUNULGtEQUFJQTs0QkFBQ3NCLE9BQU07NEJBQWFDLE1BQUs7c0NBQUk7Ozs7Ozs7Ozs7O2tDQUlwQyw4REFBQ2xCLHlEQUFVQTt3QkFBQ21CLFFBQVE7d0JBQUNKLFdBQVdYLG9FQUFXO2tDQUN6Qyw0RUFBQ1Qsa0RBQUlBOzRCQUFDdUIsTUFBSzs0QkFBSUUsZ0JBQWE7c0NBQU87Ozs7Ozs7Ozs7O2tDQUlyQyw4REFBQ3BCLHlEQUFVQTt3QkFBQ2UsV0FBV1gsb0VBQVc7a0NBQ2hDLDRFQUFDVCxrREFBSUE7NEJBQUNzQixPQUFNOzRCQUFhQyxNQUFLO3NDQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNdEMsOERBQUNoQix5REFBVUE7MEJBQ1JPLFVBQVVZLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDcEIsOERBQUNwQiw2REFBY0E7a0NBQ2IsNEVBQUNSLGtEQUFJQTs0QkFDSHNCLE9BQ0VNLFVBQVUsSUFBSSxZQUFZQSxVQUFVZCxVQUFVZSxNQUFNLEdBQUcsSUFBSSxXQUFXOzRCQUV4RVQsV0FBVTs0QkFDVkcsTUFBSzs0QkFDTE8sTUFBSztzQ0FFSkg7Ozs7Ozt1QkFUZ0IsR0FBV0MsT0FBUkQsTUFBSyxLQUFTLE9BQU5DOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IxQztHQTdEd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/MDg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyAgQnV0dG9uLCBOYXZiYXIsICAgTmF2YmFyQnJhbmQsICAgTmF2YmFyQ29udGVudCwgICBOYXZiYXJJdGVtLCAgIE5hdmJhck1lbnVUb2dnbGUsICBOYXZiYXJNZW51LCAgTmF2YmFyTWVudUl0ZW19IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIFwiUHJvZmlsZVwiLFxuICAgIFwiRGFzaGJvYXJkXCIsXG4gICAgXCJBY3Rpdml0eVwiLFxuICAgIFwiQW5hbHl0aWNzXCIsXG4gICAgXCJTeXN0ZW1cIixcbiAgICBcIkRlcGxveW1lbnRzXCIsXG4gICAgXCJNeSBTZXR0aW5nc1wiLFxuICAgIFwiVGVhbSBTZXR0aW5nc1wiLFxuICAgIFwiSGVscCAmIEZlZWRiYWNrXCIsXG4gICAgXCJMb2cgT3V0XCIsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIG9uTWVudU9wZW5DaGFuZ2U9e3NldElzTWVudU9wZW59IGlzQm9yZGVyZWQgaXNCbHVycmVkPXtmYWxzZX0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgPE5hdmJhckNvbnRlbnQ+XG4gICAgICAgIDxOYXZiYXJNZW51VG9nZ2xlXG4gICAgICAgICAgYXJpYS1sYWJlbD17aXNNZW51T3BlbiA/IFwiQ2xvc2UgbWVudVwiIDogXCJPcGVuIG1lbnVcIn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIlxuICAgICAgICAvPlxuICAgICAgPC9OYXZiYXJDb250ZW50PlxuXG4gICAgICA8TmF2YmFyQ29udGVudCBjbGFzc05hbWU9XCJzdHlsZXMubmF2YmFyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8TmF2YmFySXRlbSBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cbiAgICAgICAgICA8TGluayBjb2xvcj1cImZvcmVncm91bmRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2YmFySXRlbT5cbiAgICAgICAgPE5hdmJhckl0ZW0gaXNBY3RpdmUgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XG4gICAgICAgICAgICBDdXN0b21lcnNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2YmFySXRlbT5cbiAgICAgICAgPE5hdmJhckl0ZW0gY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPExpbmsgY29sb3I9XCJmb3JlZ3JvdW5kXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIEludGVncmF0aW9uc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZiYXJJdGVtPlxuICAgICAgPC9OYXZiYXJDb250ZW50PlxuXG4gICAgICA8TmF2YmFyTWVudT5cbiAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPE5hdmJhck1lbnVJdGVtIGtleT17YCR7aXRlbX0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gMiA/IFwicHJpbWFyeVwiIDogaW5kZXggPT09IG1lbnVJdGVtcy5sZW5ndGggLSAxID8gXCJkYW5nZXJcIiA6IFwiZm9yZWdyb3VuZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdmJhck1lbnVJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTmF2YmFyTWVudT5cbiAgICA8L05hdmJhcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJCdXR0b24iLCJOYXZiYXIiLCJOYXZiYXJCcmFuZCIsIk5hdmJhckNvbnRlbnQiLCJOYXZiYXJJdGVtIiwiTmF2YmFyTWVudVRvZ2dsZSIsIk5hdmJhck1lbnUiLCJOYXZiYXJNZW51SXRlbSIsInN0eWxlcyIsIkFwcCIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwidXNlU3RhdGUiLCJtZW51SXRlbXMiLCJvbk1lbnVPcGVuQ2hhbmdlIiwiaXNCb3JkZXJlZCIsImlzQmx1cnJlZCIsImp1c3RpZnkiLCJhcmlhLWxhYmVsIiwiY2xhc3NOYW1lIiwibWVudSIsImNvbG9yIiwiaHJlZiIsImlzQWN0aXZlIiwiYXJpYS1jdXJyZW50IiwibWFwIiwiaXRlbSIsImluZGV4IiwibGVuZ3RoIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.js\n"));

/***/ })

});