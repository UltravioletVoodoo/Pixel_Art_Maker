module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/base.js":
/*!****************************!*\
  !*** ./components/base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var spectre_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spectre.css */ "./node_modules/spectre.css/dist/spectre.css");
/* harmony import */ var spectre_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(spectre_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jonbe\\Desktop\\Personal\\Pixel_Art_Maker\\components\\base.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Base() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Pixel Art"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0 width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/pixelGrid.js":
/*!*********************************!*\
  !*** ./components/pixelGrid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixelGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_getDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/getDimensions */ "./hooks/getDimensions.js");
/* harmony import */ var _hooks_getMousePosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/getMousePosition */ "./hooks/getMousePosition.js");
/* harmony import */ var _styles_pixelGrid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pixelGrid.css */ "./styles/pixelGrid.css");
/* harmony import */ var _styles_pixelGrid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pixelGrid_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\jonbe\\Desktop\\Personal\\Pixel_Art_Maker\\components\\pixelGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function PixelGrid() {
  const numCells = 4;
  const dimensions = Object(_hooks_getDimensions__WEBPACK_IMPORTED_MODULE_1__["getDimensions"])();
  let canvasDim = Math.min(dimensions.width, dimensions.height) * 0.6; // Canvas is a square with the smallest dimension as a base

  const mousePos = Object(_hooks_getMousePosition__WEBPACK_IMPORTED_MODULE_2__["default"])();
  let gridPoints = convertPositionToGrid(mousePos, canvasDim, numCells);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => drawRectOnGrid(gridPoints, canvasDim, numCells), []);
  return __jsx("div", {
    className: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Window's dimensions are ", dimensions.width, " by ", dimensions.height), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Mouse was last seen on canvas at point: (", mousePos.x, " , ", mousePos.y, ")"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Last active gridpoint based on position: (", gridPoints.x, " , ", gridPoints.y, ")"), __jsx("canvas", {
    className: "pixelGrid",
    id: "pixelGrid",
    width: canvasDim,
    height: canvasDim,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

function convertPositionToGrid(pos, canvasDim, numCells) {
  let cellsPerRow = Math.sqrt(numCells);
  let cellSize = canvasDim / cellsPerRow;
  return {
    x: convertPositionToGridValues(pos.x, cellSize, cellsPerRow),
    y: convertPositionToGridValues(pos.y, cellSize, cellsPerRow)
  };
}

function convertPositionToGridValues(val, cellSize, cellsPerRow) {
  let result = Math.ceil(val / cellSize) - 1;
  if (result > cellsPerRow - 1) result = cellsPerRow - 1;
  if (result < 0) result = 0;
  return result;
}

function drawRectOnGrid(gridPoints, canvasDim, numCells) {
  // let canvas = document.getElementById("pixelGrid");
  // let ctx = canvas.getContext("2d");
  // let p = convertGridToPx(gridPoints, canvasDim, numCells)
  // ctx.fillRect(0,0,50,50);
  console.log("I think i drew a square :P");
}

function convertGridToPx(gridPoints, canvasDim, numCells) {
  let scale = canvasDim / Math.sqrt(numCells);
  return {
    x: gridPoints.x * scale,
    y: gridPoints.y * scale,
    w: (gridPoints.x + 1) * scale,
    h: (gridPoints.y + 1) * scale
  };
}

/***/ }),

/***/ "./hooks/getDimensions.js":
/*!********************************!*\
  !*** ./hooks/getDimensions.js ***!
  \********************************/
/*! exports provided: getDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDimensions", function() { return getDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getDimensions() {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: 0,
    height: 0
  });
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

  handleResize();
  window.addEventListener("resize", handleResize);
  return function () {
    window.removeEventListener("resize", handleResize);
  };
}

/***/ }),

/***/ "./hooks/getMousePosition.js":
/*!***********************************!*\
  !*** ./hooks/getMousePosition.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMousePos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getMousePos() {
  const {
    0: position,
    1: setPosition
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 0,
    y: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    init(setPosition);
  }, []);
  return position;
}

function init(setPosition) {
  function handleMouseMove(evt) {
    let canvas = document.getElementById("pixelGrid");
    let rect = canvas.getBoundingClientRect();
    setPosition({
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    });
  }

  let canvas = document.getElementById("pixelGrid");
  canvas.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}

/***/ }),

/***/ "./node_modules/spectre.css/dist/spectre.css":
/*!***************************************************!*\
  !*** ./node_modules/spectre.css/dist/spectre.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base */ "./components/base.js");
/* harmony import */ var _components_pixelGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pixelGrid */ "./components/pixelGrid.js");
var _jsxFileName = "C:\\Users\\jonbe\\Desktop\\Personal\\Pixel_Art_Maker\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(_components_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "col-10 col-mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_components_pixelGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
}

/***/ }),

/***/ "./styles/pixelGrid.css":
/*!******************************!*\
  !*** ./styles/pixelGrid.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jonbe\Desktop\Personal\Pixel_Art_Maker\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map