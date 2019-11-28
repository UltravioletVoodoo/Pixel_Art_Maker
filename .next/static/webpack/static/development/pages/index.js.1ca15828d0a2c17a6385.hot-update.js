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
/* harmony import */ var _hooks_getMousePosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/getMousePosition */ "./hooks/getMousePosition.js");
var _jsxFileName = "C:\\Users\\jonbe\\Desktop\\Personal\\Pixel_Art_Maker\\components\\pixelGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PixelGrid() {
  var dimensions = Object(_hooks_getDimensions__WEBPACK_IMPORTED_MODULE_1__["getDimensions"])();
  var canvasDim = {
    x: dimensions.width / 2,
    y: dimensions.height / 2
  };
  var mousePos = Object(_hooks_getMousePosition__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var gridPoints = convertPositionToGrid(mousePos, canvasDim, 4);
  return __jsx("div", {
    className: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Window's dimensions are ", dimensions.width, " by ", dimensions.height), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Mouse was last seen on canvas at point: (", mousePos.x, " , ", mousePos.y, ")"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Last active gridpoint based on position: (", gridPoints.x, " , ", gridPoints.y, ")"), __jsx("canvas", {
    className: "pixelGrid",
    id: "pixelGrid",
    width: canvasDim.x,
    height: canvasDim.y,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

function convertPositionToGrid(pos, dimensions, numCells) {
  var cellsPerRow = Math.sqrt(numCells);
  var cellSize = dimensions.x / cellsPerRow;
  return {
    x: convert(pos.x, cellSize, cellsPerRow),
    y: convert(pos.y, cellSize, cellsPerRow)
  };
}

function convert(val, cellSize, cellsPerRow) {
  var result = Math.ceil(val / cellSize) - 1;
  if (result > cellsPerRow - 1) result = cellsPerRow - 1;
  if (result < 0) result = 0;
  return result;
}

/***/ })

})
//# sourceMappingURL=index.js.1ca15828d0a2c17a6385.hot-update.js.map