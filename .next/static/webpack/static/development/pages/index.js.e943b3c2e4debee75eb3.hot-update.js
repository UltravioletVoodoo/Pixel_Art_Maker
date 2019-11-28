webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./hooks/getMousePosition.js":
/*!***********************************!*\
  !*** ./hooks/getMousePosition.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMousePos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_1__);


function getMousePos() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 0,
    y: 0
  }),
      position = _useState[0],
      setPosition = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, []);
  return position;
}

function init(setPosition) {
  function handleMouseMove(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    setPosition({
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    });
  }

  var canvas = document.getElementById("pixelGrid");
  canvas.addEventListener("mousemove", handleMouseMove(canvas, evt));
}

function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

/***/ })

})
//# sourceMappingURL=index.js.e943b3c2e4debee75eb3.hot-update.js.map