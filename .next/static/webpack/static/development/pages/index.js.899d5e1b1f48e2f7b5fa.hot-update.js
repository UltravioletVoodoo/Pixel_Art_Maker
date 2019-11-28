webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/pixelGrid.js":
/*!*********************************!*\
  !*** ./components/pixelGrid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixelGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_getDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/getDimensions */ "./hooks/getDimensions.js");
/* harmony import */ var _styles_pixelGrid_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pixelGrid.css */ "./styles/pixelGrid.css");
/* harmony import */ var _styles_pixelGrid_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pixelGrid_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jonbe\\Desktop\\Personal\\Pixel_Art_Maker\\components\\pixelGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PixelGrid() {
  var dimensions = Object(_hooks_getDimensions__WEBPACK_IMPORTED_MODULE_1__["getDimensions"])();
  var canvasDim = {
    x: dimensions.width / 2,
    y: dimensions.height / 2
  };
  return __jsx("div", {
    className: "col-mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Window's dimensions are ", dimensions.width, " by ", dimensions.height), __jsx("canvas", {
    className: "pixelGrid",
    id: "pixelGrid",
    width: canvasDim.x,
    height: canvasDim.y,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.899d5e1b1f48e2f7b5fa.hot-update.js.map