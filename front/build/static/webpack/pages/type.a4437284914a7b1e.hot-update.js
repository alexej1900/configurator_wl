"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/type",{

/***/ "./components/ui/styleCards.js":
/*!*************************************!*\
  !*** ./components/ui/styleCards.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StyleCards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_infoTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./atoms/infoTitle */ \"./components/ui/atoms/infoTitle.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./components/ui/card.js\");\n/* harmony import */ var _styleCards_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleCards.module.scss */ \"./components/ui/styleCards.module.scss\");\n/* harmony import */ var _styleCards_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styleCards_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction StyleCards(param) {\n    var activeStyle = param.activeStyle, cardData = param.cardData, styleId = param.styleId;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styleCards_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block__wrapper),\n            children: cardData.map(function(data, index) {\n                if (index < 2) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        selectCard: function() {\n                            return activeStyle(index, \"image\", data.featuredImage && data.featuredImage[0].url, data.styleTitle, data.subtitle);\n                        },\n                        type: \"large\",\n                        recommended: data.recommended,\n                        title: data.styleTitle,\n                        url: data.image,\n                        active: styleId === index\n                    }, index, false, {\n                        fileName: \"/Users/aliaksei.badnarchuck/PROJECTS/configurator_wl/front/components/ui/styleCards.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, _this);\n                }\n            })\n        }, void 0, false, {\n            fileName: \"/Users/aliaksei.badnarchuck/PROJECTS/configurator_wl/front/components/ui/styleCards.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/aliaksei.badnarchuck/PROJECTS/configurator_wl/front/components/ui/styleCards.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n};\n_c = StyleCards;\nvar _c;\n$RefreshReg$(_c, \"StyleCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL3N0eWxlQ2FyZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQTBDO0FBQ2hCO0FBRW9CO0FBRS9CLFNBQVNHLFVBQVUsQ0FBQyxLQUFnQyxFQUFFO1FBQWpDQyxXQUFXLEdBQVosS0FBZ0MsQ0FBL0JBLFdBQVcsRUFBRUMsUUFBUSxHQUF0QixLQUFnQyxDQUFsQkEsUUFBUSxFQUFFQyxPQUFPLEdBQS9CLEtBQWdDLENBQVJBLE9BQU87O0lBRWhFLHFCQUNFLDhEQUFDQyxLQUFHO2tCQU1GLDRFQUFDQSxLQUFHO1lBQUNDLFNBQVMsRUFBRU4sK0VBQXFCO3NCQUNsQ0csUUFBUSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUc7Z0JBQzNCLElBQUlBLEtBQUssR0FBRyxDQUFDLEVBQUU7b0JBQ2IscUJBQ0EsOERBQUNYLDZDQUFJO3dCQUNIWSxVQUFVLEVBQUc7bUNBQU1ULFdBQVcsQ0FBQ1EsS0FBSyxFQUFFLE9BQU8sRUFBRUQsSUFBSSxDQUFDRyxhQUFhLElBQUlILElBQUksQ0FBQ0csYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssVUFBVSxFQUFFTCxJQUFJLENBQUNNLFFBQVEsQ0FBQzt5QkFBQTt3QkFFL0hDLElBQUksRUFBQyxPQUFPO3dCQUNaQyxXQUFXLEVBQUVSLElBQUksQ0FBQ1EsV0FBVzt3QkFDN0JDLEtBQUssRUFBRVQsSUFBSSxDQUFDSyxVQUFVO3dCQUN0QkQsR0FBRyxFQUFFSixJQUFJLENBQUNVLEtBQUs7d0JBQ2ZDLE1BQU0sRUFBSWhCLE9BQU8sS0FBS00sS0FBSzt1QkFMdEJBLEtBQUs7Ozs7NkJBTVYsQ0FDSDtpQkFBQzthQUNILENBQUM7Ozs7O2dCQUNFOzs7OztZQXdCRixDQUNQO0NBQ0Y7QUFsRHVCVCxLQUFBQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvc3R5bGVDYXJkcy5qcz8yNGM4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEluZm9UaXRsZSBmcm9tICcuL2F0b21zL2luZm9UaXRsZSc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVDYXJkcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0eWxlQ2FyZHMoe2FjdGl2ZVN0eWxlLCBjYXJkRGF0YSwgc3R5bGVJZH0pIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgey8qIDxJbmZvVGl0bGUgXG4gICAgICAgIHRpdGxlPXsnTGluaWUgMSd9XG4gICAgICAgIGluZm9UZXh0PXsnU3R5bGUgZGVzY3JpcHRpb24sIHN0eWxlIGRlc2NyaXB0aW9uLCBzdHlsZSBkZXNjcmlwdGlvbiwgc3R5bGUgZGVzY3JpcHRpb24sIHN0eWxlIGRlc2NyaXB0aW9uLCBzdHlsZSBkZXNjcmlwdGlvbiwgc3R5bGUgZGVzY3JpcHRpb24uJ31cbiAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrX193cmFwcGVyfT5cbiAgICAgICAge2NhcmREYXRhLm1hcCgoZGF0YSwgaW5kZXgpPT57XG4gICAgICAgICAgaWYgKGluZGV4IDwgMikgeyAvLyBzaG93aW5nIGZpcnN0IDMgc3R5bGVzLCB0aGF0IHVuaXRlZCB0byBzdHlsZSBsaW5lIDFcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBzZWxlY3RDYXJkPSB7KCkgPT4gYWN0aXZlU3R5bGUoaW5kZXgsICdpbWFnZScsIGRhdGEuZmVhdHVyZWRJbWFnZSAmJiBkYXRhLmZlYXR1cmVkSW1hZ2VbMF0udXJsLCBkYXRhLnN0eWxlVGl0bGUsIGRhdGEuc3VidGl0bGUpfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICB0eXBlPSdsYXJnZSdcbiAgICAgICAgICAgICAgcmVjb21tZW5kZWQ9e2RhdGEucmVjb21tZW5kZWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtkYXRhLnN0eWxlVGl0bGV9XG4gICAgICAgICAgICAgIHVybD17ZGF0YS5pbWFnZX1cbiAgICAgICAgICAgICAgYWN0aXZlID0ge3N0eWxlSWQgPT09IGluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPEluZm9UaXRsZSBcbiAgICAgICAgdGl0bGU9eydMaW5pZSAyJ31cbiAgICAgICAgaW5mb1RleHQ9eydTdHlsZSBkZXNjcmlwdGlvbiwgc3R5bGUgZGVzY3JpcHRpb24sIHN0eWxlIGRlc2NyaXB0aW9uLCBzdHlsZSBkZXNjcmlwdGlvbiwgc3R5bGUgZGVzY3JpcHRpb24sIHN0eWxlIGRlc2NyaXB0aW9uLCBzdHlsZSBkZXNjcmlwdGlvbi4nfVxuICAgICAgLz4gKi99XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJsb2NrX193cmFwcGVyfSAke3N0eWxlcy5ibG9ja19fd3JhcHBlcl9ldmVufWB9PlxuICAgICAgICB7Y2FyZERhdGEubWFwKChkYXRhLCBpbmRleCk9PntcblxuICAgICAgICAgIGlmIChpbmRleCA+PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgc2VsZWN0Q2FyZD0geygpID0+IGFjdGl2ZVN0eWxlKGluZGV4LCAnaW1hZ2UnLCBkYXRhLmZlYXR1cmVkSW1hZ2UgJiYgZGF0YS5mZWF0dXJlZEltYWdlWzBdLnVybCwgZGF0YS5zdHlsZVRpdGxlLCBkYXRhLnN1YnRpdGxlKX1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgdHlwZT0nbGFyZ2UnXG4gICAgICAgICAgICAgIHJlY29tbWVuZGVkPXtkYXRhLnJlY29tbWVuZGVkfVxuICAgICAgICAgICAgICB0aXRsZT17ZGF0YS5zdHlsZVRpdGxlfVxuICAgICAgICAgICAgICB1cmw9e2RhdGEuaW1hZ2V9XG4gICAgICAgICAgICAgIGFjdGl2ZSA9IHtzdHlsZUlkID09PSBpbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJJbmZvVGl0bGUiLCJDYXJkIiwic3R5bGVzIiwiU3R5bGVDYXJkcyIsImFjdGl2ZVN0eWxlIiwiY2FyZERhdGEiLCJzdHlsZUlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvY2tfX3dyYXBwZXIiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJzZWxlY3RDYXJkIiwiZmVhdHVyZWRJbWFnZSIsInVybCIsInN0eWxlVGl0bGUiLCJzdWJ0aXRsZSIsInR5cGUiLCJyZWNvbW1lbmRlZCIsInRpdGxlIiwiaW1hZ2UiLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/styleCards.js\n"));

/***/ })

});