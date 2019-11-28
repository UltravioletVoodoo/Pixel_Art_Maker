webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./hooks/getDimensions.js":
/*!********************************!*\
  !*** ./hooks/getDimensions.js ***!
  \********************************/
/*! exports provided: getDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDimensions", function() { return getDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getDimensions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: 0,
    height: 0
  }),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    init(setDimensions);
  }, []);
  return dimensions;
}

function init(setDimensions) {
  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  window.addEventListener("resize", handleResize);
  return function () {
    window.removeEventListener("resize", handleResize);
  };
}

/***/ })

})
//# sourceMappingURL=index.js.62d89bc44c97e54081e9.hot-update.js.map