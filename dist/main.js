/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/page_layout.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM_management/page_layout.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/styles.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\r\n    height: 8%;\r\n    background-color: var(--primary);\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 1fr;\r\n    padding: 0px 15px;\r\n}\r\n\r\nheader p {\r\n    margin: 0px;\r\n    color: white;\r\n}\r\n\r\n#todo-title {\r\n    font-size: 2rem;\r\n    align-self: center;\r\n    font-weight: bold;\r\n}\r\n\r\n#signiture {\r\n    display: flex;\r\n    justify-content: right;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#signiture a {\r\n    width: 20px;\r\n    height: 20px;\r\n    transition: 0.1s;\r\n}\r\n\r\n#signiture img {\r\n    width: 100%;\r\n}\r\n\r\n#signiture a:hover {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n#content {\r\n    height: 92%;\r\n    display: flex;\r\n}\r\n\r\n#left-menu {\r\n    --padding: 15px;\r\n    padding: var(--padding);\r\n    width: 200px;\r\n    height: calc(100% - var(--padding)*2);\r\n    background-color: white;\r\n    box-shadow: 1px 0px 3px var(--shadow);\r\n    clip-path: inset(0px -5px 0px 0px);\r\n    position: relative;\r\n    z-index: 500;\r\n}\r\n\r\n#left-menu p {\r\n    margin: 0px;\r\n}\r\n\r\n#default-selection {\r\n    margin-bottom: 20px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#default-selection > * {\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n    transition: 0.1s;\r\n}\r\n\r\n#default-selection > *:hover {\r\n    background-color: var(--light-accent);\r\n    font-size: 1.3rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#project-selection {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#project-selection > p {\r\n    font-weight: bold;\r\n    padding-left: 5px;\r\n    color: var(--primary)\r\n}\r\n\r\n#projects {\r\n    margin-top: 10px;\r\n    padding-left: 15px;\r\n}\r\n\r\n#projects .project {\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n    transition: 0.1s;  \r\n}\r\n\r\n#projects .project > *:nth-child(2) {\r\n    color: var(--primary);\r\n}\r\n\r\n#projects .project:hover {\r\n    background-color: var(--light-accent);\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.new-project {\r\n    font-size: 0.8rem;\r\n    padding: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: -10px;\r\n    transition: 0.1s;\r\n}\r\n\r\n.new-project > p {\r\n    width: fit-content;\r\n    text-align: center;\r\n}\r\n\r\n#new-project-input {\r\n    width: 130px;\r\n}\r\n\r\n#new-proj-button {\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    font-size: 1.3rem;\r\n    margin-left: -20px;\r\n    \r\n}\r\n\r\n.new-project:hover {\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/DOM_management/page_layout.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,gCAAgC;IAChC,aAAa;IACb,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;IACvB,qCAAqC;IACrC,kCAAkC;IAClC,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB;AACJ;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;;AAEtB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB","sourcesContent":["@import url(\"./styles.css\");\r\n\r\nheader {\r\n    height: 8%;\r\n    background-color: var(--primary);\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 1fr;\r\n    padding: 0px 15px;\r\n}\r\n\r\nheader p {\r\n    margin: 0px;\r\n    color: white;\r\n}\r\n\r\n#todo-title {\r\n    font-size: 2rem;\r\n    align-self: center;\r\n    font-weight: bold;\r\n}\r\n\r\n#signiture {\r\n    display: flex;\r\n    justify-content: right;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#signiture a {\r\n    width: 20px;\r\n    height: 20px;\r\n    transition: 0.1s;\r\n}\r\n\r\n#signiture img {\r\n    width: 100%;\r\n}\r\n\r\n#signiture a:hover {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n#content {\r\n    height: 92%;\r\n    display: flex;\r\n}\r\n\r\n#left-menu {\r\n    --padding: 15px;\r\n    padding: var(--padding);\r\n    width: 200px;\r\n    height: calc(100% - var(--padding)*2);\r\n    background-color: white;\r\n    box-shadow: 1px 0px 3px var(--shadow);\r\n    clip-path: inset(0px -5px 0px 0px);\r\n    position: relative;\r\n    z-index: 500;\r\n}\r\n\r\n#left-menu p {\r\n    margin: 0px;\r\n}\r\n\r\n#default-selection {\r\n    margin-bottom: 20px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#default-selection > * {\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n    font-weight: bold;\r\n    transition: 0.1s;\r\n}\r\n\r\n#default-selection > *:hover {\r\n    background-color: var(--light-accent);\r\n    font-size: 1.3rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#project-selection {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#project-selection > p {\r\n    font-weight: bold;\r\n    padding-left: 5px;\r\n    color: var(--primary)\r\n}\r\n\r\n#projects {\r\n    margin-top: 10px;\r\n    padding-left: 15px;\r\n}\r\n\r\n#projects .project {\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr;\r\n    font-size: 1rem;\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n    transition: 0.1s;  \r\n}\r\n\r\n#projects .project > *:nth-child(2) {\r\n    color: var(--primary);\r\n}\r\n\r\n#projects .project:hover {\r\n    background-color: var(--light-accent);\r\n    font-size: 1.1rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.new-project {\r\n    font-size: 0.8rem;\r\n    padding: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: -10px;\r\n    transition: 0.1s;\r\n}\r\n\r\n.new-project > p {\r\n    width: fit-content;\r\n    text-align: center;\r\n}\r\n\r\n#new-project-input {\r\n    width: 130px;\r\n}\r\n\r\n#new-proj-button {\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    font-size: 1.3rem;\r\n    margin-left: -20px;\r\n    \r\n}\r\n\r\n.new-project:hover {\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/render_active_project.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM_management/render_active_project.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/styles.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#project-page {\r\n    width: 100%;\r\n    font-family: \"Roboto\";\r\n    --project-header-height: 45px;\r\n}\r\n\r\n#project-header {\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0px 1px 3px var(--shadow);\r\n    height: var(--project-header-height);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n#project-header-name {\r\n    font-size: 1.5rem;\r\n    margin: 0px;\r\n    margin-left: 15px;\r\n}\r\n\r\n#project-content {\r\n    height: calc(100% - var(--project-header-height));\r\n    display: grid;\r\n    grid-template-columns: 1fr 250px;\r\n}\r\n\r\n#checklist-container {\r\n    background-color: white;\r\n    box-shadow: -1px 0px 3px var(--shadow);\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/DOM_management/render_active_project.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,qCAAqC;IACrC,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,iDAAiD;IACjD,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;IACvB,sCAAsC;;AAE1C","sourcesContent":["@import url(\"./styles.css\");\r\n\r\n#project-page {\r\n    width: 100%;\r\n    font-family: \"Roboto\";\r\n    --project-header-height: 45px;\r\n}\r\n\r\n#project-header {\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0px 1px 3px var(--shadow);\r\n    height: var(--project-header-height);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n#project-header-name {\r\n    font-size: 1.5rem;\r\n    margin: 0px;\r\n    margin-left: 15px;\r\n}\r\n\r\n#project-content {\r\n    height: calc(100% - var(--project-header-height));\r\n    display: grid;\r\n    grid-template-columns: 1fr 250px;\r\n}\r\n\r\n#checklist-container {\r\n    background-color: white;\r\n    box-shadow: -1px 0px 3px var(--shadow);\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/styles.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM_management/styles.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Roboto/Roboto-Regular.ttf */ "./src/assets/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Roboto/Roboto-Bold.ttf */ "./src/assets/Roboto/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-style: normal;\r\n    font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    font-style: normal;\r\n    font-weight: bold;\r\n}\r\n\r\n* {\r\n    --primary: #FC4A4A;\r\n    --light-background: #fed3d3; /*#FFEBEB #fffafa*/\r\n    --accent: #528E7C;\r\n    --light-accent: #7dc0ac;\r\n    --shadow: #fb9999; /*#f9c1c1  #fddddd*/\r\n}\r\n\r\nbody {\r\n    margin: 0px;\r\n    height: 100vh;\r\n    font-family: \"Roboto\";\r\n    background-color: var(--light-background);\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/DOM_management/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAA+C;IAC/C,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,4CAA4C;IAC5C,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B,EAAE,kBAAkB;IAC/C,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB,EAAE,mBAAmB;AAC1C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,yCAAyC;AAC7C","sourcesContent":["@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(\"../assets/Roboto/Roboto-Regular.ttf\");\r\n    font-style: normal;\r\n    font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(\"../assets/Roboto/Roboto-Bold.ttf\");\r\n    font-style: normal;\r\n    font-weight: bold;\r\n}\r\n\r\n* {\r\n    --primary: #FC4A4A;\r\n    --light-background: #fed3d3; /*#FFEBEB #fffafa*/\r\n    --accent: #528E7C;\r\n    --light-accent: #7dc0ac;\r\n    --shadow: #fb9999; /*#f9c1c1  #fddddd*/\r\n}\r\n\r\nbody {\r\n    margin: 0px;\r\n    height: 100vh;\r\n    font-family: \"Roboto\";\r\n    background-color: var(--light-background);\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/todo_card.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/DOM_management/todo_card.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/styles.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card {\r\n    background-color: white;\r\n    width: 260px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n}\r\n\r\n.description-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.card-title {\r\n    font-size: 1rem;\r\n    margin: 0px;\r\n}\r\n\r\n.card-date {\r\n    font-size: 0.8rem;\r\n    margin-top: 0px;\r\n    color: var(--accent);\r\n}\r\n\r\n.complete-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.complete-input {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin: 0px 5px 0px 0px;\r\n}\r\n\r\n.complete-container > p {\r\n    margin: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.description {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 0px;\r\n    margin-top: 13px;\r\n}\r\n\r\n.expand {\r\n    margin-top: 7px;\r\n    font-size: 0.9rem;\r\n    color: gray;\r\n}\r\n\r\n.edit-container {\r\n    position: relative;\r\n}\r\n\r\n.edit {\r\n    height: 20px;\r\n    color: gray;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.priority-container {\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    width: 100px;\r\n    justify-self: end;\r\n}\r\n\r\n.priority-container > p:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.priority-slider {\r\n    background-color: var(--light-background);\r\n    width: 60px;\r\n    height: 20px;\r\n    border-radius: 12px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.priority-icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n    margin: 2px;\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n\r\n.priority-container > p:nth-child(3){\r\n    margin: 0px;\r\n    height: 24px;\r\n    margin-left: 5px;\r\n    font-size: 0.8rem;\r\n    line-height: 24px;\r\n    color: red;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/DOM_management/todo_card.css"],"names":[],"mappings":"AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,UAAU;AACd","sourcesContent":["@import url(\"./styles.css\");\r\n\r\n.card {\r\n    background-color: white;\r\n    width: 260px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n}\r\n\r\n.description-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.card-title {\r\n    font-size: 1rem;\r\n    margin: 0px;\r\n}\r\n\r\n.card-date {\r\n    font-size: 0.8rem;\r\n    margin-top: 0px;\r\n    color: var(--accent);\r\n}\r\n\r\n.complete-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.complete-input {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin: 0px 5px 0px 0px;\r\n}\r\n\r\n.complete-container > p {\r\n    margin: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.description {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 0px;\r\n    margin-top: 13px;\r\n}\r\n\r\n.expand {\r\n    margin-top: 7px;\r\n    font-size: 0.9rem;\r\n    color: gray;\r\n}\r\n\r\n.edit-container {\r\n    position: relative;\r\n}\r\n\r\n.edit {\r\n    height: 20px;\r\n    color: gray;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.priority-container {\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    width: 100px;\r\n    justify-self: end;\r\n}\r\n\r\n.priority-container > p:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.priority-slider {\r\n    background-color: var(--light-background);\r\n    width: 60px;\r\n    height: 20px;\r\n    border-radius: 12px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.priority-icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n    margin: 2px;\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n\r\n.priority-container > p:nth-child(3){\r\n    margin: 0px;\r\n    height: 24px;\r\n    margin-left: 5px;\r\n    font-size: 0.8rem;\r\n    line-height: 24px;\r\n    color: red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/DOM_management/page_layout.css":
/*!********************************************!*\
  !*** ./src/DOM_management/page_layout.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./page_layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/page_layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_page_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_page_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_page_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_page_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM_management/render_active_project.css":
/*!******************************************************!*\
  !*** ./src/DOM_management/render_active_project.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_render_active_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./render_active_project.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/render_active_project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_render_active_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_render_active_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_render_active_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_render_active_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/DOM_management/todo_card.css":
/*!******************************************!*\
  !*** ./src/DOM_management/todo_card.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todo_card.css */ "./node_modules/css-loader/dist/cjs.js!./src/DOM_management/todo_card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM_management/page_layout.js":
/*!*******************************************!*\
  !*** ./src/DOM_management/page_layout.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewProjectInput": () => (/* binding */ addNewProjectInput),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "loadProjectsMenu": () => (/* binding */ loadProjectsMenu),
/* harmony export */   "replaceNewProjectInput": () => (/* binding */ replaceNewProjectInput)
/* harmony export */ });
/* harmony import */ var _page_layout_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_layout.css */ "./src/DOM_management/page_layout.css");
/* harmony import */ var _assets_github_mark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/github-mark.svg */ "./src/assets/github-mark.svg");




function loadHeader() {
    const header = document.querySelector("header");

    let p = document.createElement("p");
    p.textContent = "TODO";
    p.id = "todo-title";
    header.appendChild(p);

    let signitureDiv = document.createElement("div");
    signitureDiv.id = "signiture";

    p = document.createElement("p");
    p.textContent = "Made By: Om Amin";
    signitureDiv.appendChild(p);
    
    let a = document.createElement("a");
    a.href = "https://github.com/omamin135/Todo_List";
    a.target = "_black";
    
    let img = document.createElement("img");
    img.src = _assets_github_mark_svg__WEBPACK_IMPORTED_MODULE_1__;

    img.alt = "github";

    a.appendChild(img);

    signitureDiv.appendChild(a);
    header.appendChild(signitureDiv);

}

function loadLeftMenu(){

    const leftMenuDiv = document.createElement("div");
    leftMenuDiv.id = "left-menu";

    leftMenuDiv.appendChild(loadDefaultSelections());
    leftMenuDiv.appendChild(loadProjectSelections());

    document.getElementById("content").appendChild(leftMenuDiv);
}

function loadDefaultSelections(){

    const defaultSelDiv = document.createElement("div");
    defaultSelDiv.id = "default-selection"

    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = "Today";
    div.id = "today";
    div.appendChild(p);
    defaultSelDiv.appendChild(div);

    div = document.createElement("div");
    p = document.createElement("p");
    p.textContent = "Timeline";
    div.id = "timeline";
    div.appendChild(p);
    defaultSelDiv.appendChild(div);


    div = document.createElement("div");
    p = document.createElement("p");
    p.textContent = "Priority";
    div.id = "priority";
    div.appendChild(p);
    defaultSelDiv.appendChild(div);

    return defaultSelDiv;
}

function loadProjectSelections(){

    const projectSelDiv = document.createElement("div");
    projectSelDiv.id = "project-selection";

    let p = document.createElement("p");
    p.textContent = "Projects";

    projectSelDiv.appendChild(p);

    let ul = document.createElement("ul");
    ul.id = "projects";

    projectSelDiv.appendChild(ul);

    
    projectSelDiv.appendChild(addNewProjectButton());

    return projectSelDiv;
}

function addNewProjectButton(){
    let newProjButton = document.createElement("div");
    newProjButton.className = "new-project";
    newProjButton.setAttribute("data-inputMode", "false");
    let p = document.createElement("p");
    p.textContent = "New Project ";
    newProjButton.appendChild(p);
    p = document.createElement("p");
    p.textContent = "+";
    p.id = "new-proj-button";
    
    newProjButton.appendChild(p);

    return newProjButton;
}

function addNewProjectInput(){
    let newProj = document.querySelector(".new-project");
    newProj.setAttribute("data-inputMode", "true");
    let input = document.createElement("input");
    input.type = "text";
    input.id = "new-project-input";
    input.setAttribute("required", "");
    newProj.replaceChild(input, newProj.firstChild);
}

function replaceNewProjectInput(){
    let newProj = document.querySelector(".new-project");
    newProj.setAttribute("data-inputMode", "false");
    let p = document.createElement("p");
    p.textContent = "New Project";

    let val = newProj.firstChild.value;

    newProj.replaceChild(p, newProj.firstChild);

    return val;
}

function createProject(proj) {

    let li = document.createElement("li");
    li.className = "project";
    li.setAttribute("data-id", proj.id);

    let p = document.createElement("p");
    p.textContent = proj.name;
    li.appendChild(p);

    p = document.createElement("p");
    p.textContent = proj.numItems;
    li.appendChild(p);

    return li;
}

function loadProjectsMenu(Dir){

    const ul = document.getElementById("projects");
    let numChildren = ul.children.length;

    for (let i = 0; i < Dir.projects.length; i++){
        if (i < numChildren){
            ul.removeChild(ul.firstChild);
        }
        let li = createProject(Dir.projects[i]);
        ul.append(li);
    }
}

function loadPage(){
    loadHeader();
    loadLeftMenu();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ }),

/***/ "./src/DOM_management/render_active_project.js":
/*!*****************************************************!*\
  !*** ./src/DOM_management/render_active_project.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manage_dir_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manage_dir.js */ "./src/manage_dir.js");
/* harmony import */ var _render_active_project_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render_active_project.css */ "./src/DOM_management/render_active_project.css");



function generateProjectPage(){

    let projectPage = document.createElement("div");
    projectPage.id = "project-page";

    /* project page header */
    let headerDiv = document.createElement("div");
    headerDiv.id = "project-header";

    let p = document.createElement("p");
    p.id = "project-header-name";
    p.textContent = _manage_dir_js__WEBPACK_IMPORTED_MODULE_0__["default"].activeProject().name;
    headerDiv.appendChild(p);

    let projectContent = document.createElement("div");
    projectContent.id = "project-content";

    let cardsContainer = document.createElement("div");
    cardsContainer.id = "cards-container";
    let checklistContainer = document.createElement("div");
    checklistContainer.id = "checklist-container";

    projectContent.appendChild(cardsContainer);
    projectContent.appendChild(checklistContainer);
    

    projectPage.appendChild(headerDiv);
    projectPage.appendChild(projectContent);
    document.getElementById("content").appendChild(projectPage);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateProjectPage);

/***/ }),

/***/ "./src/DOM_management/todo_card.js":
/*!*****************************************!*\
  !*** ./src/DOM_management/todo_card.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_card.css */ "./src/DOM_management/todo_card.css");



function loadNewCard(todo){

    let cardContainer = document.createElement("div");
    cardContainer.className = "card";

    let titleDateContainer = document.createElement("div");
    titleDateContainer.className = "title-date-container";
    let cardTitle = document.createElement("p");
    cardTitle.className = "card-title";
    cardTitle.textContent = todo.title;
    let cardDate = document.createElement("p");
    cardDate.className = "card-date";
    cardDate.textContent = todo.dueDate;

    titleDateContainer.appendChild(cardTitle);
    titleDateContainer.appendChild(cardDate);

    let completedContainer = document.createElement("div");
    completedContainer.className = "complete-container";
    let completeInput = document.createElement("input");
    completeInput.className = "complete-input";
    completeInput.type = "checkbox";
    let completeText = document.createElement("p");
    completeText.textContent = "complete";
    completedContainer.appendChild(completeInput);
    completedContainer.appendChild(completeText);

    let descriptionContainer = document.createElement("div");
    descriptionContainer.className = "description-container";
    let description = document.createElement("p");
    description.className = "description";
    description.textContent = todo.description;
    let expand = document.createElement("p");
    expand.className = "expand";
    expand.textContent = "expand";  
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(expand);

    let editContainter = document.createElement("div");
    editContainter.className = "edit-container";
    let edit = document.createElement("p");
    edit.className = "edit";
    edit.textContent = "edit";
    editContainter.appendChild(edit);

    let priorityContainer = document.createElement("div");
    priorityContainer.className = "priority-container";
    let priorityText = document.createElement("p");
    priorityText.textContent = "Priority";
    let prioritySlider = document.createElement("div");
    prioritySlider.className = "priority-slider";

    let priorityIcon = document.createElement("div");
    priorityIcon.className = "priority-icon";
    prioritySlider.appendChild(priorityIcon);

    let priorityIndicator = document.createElement("p");
    priorityIndicator.textContent = "urgent";

    priorityContainer.appendChild(priorityText);
    priorityContainer.appendChild(prioritySlider);
    priorityContainer.appendChild(priorityIndicator);

    cardContainer.appendChild(titleDateContainer);
    cardContainer.appendChild(completedContainer);
    cardContainer.appendChild(descriptionContainer);
    cardContainer.appendChild(editContainter);
    cardContainer.appendChild(priorityContainer);

    document.getElementById("cards-container").appendChild(cardContainer);
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNewCard);

/***/ }),

/***/ "./src/manage_dir.js":
/*!***************************!*\
  !*** ./src/manage_dir.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_classes.js */ "./src/project_classes.js");


class Projects {
    constructor(){
        this.projects = [new _project_classes_js__WEBPACK_IMPORTED_MODULE_0__.Project("default", 0)];
        this.activeProjIndex = 0;
    }

    activeProject(){
        return this.projects[this.activeProjIndex];
    }

    addProject(name){
        this.projects.push(new _project_classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(name, this.projects.length));
    }

    removeProject(index){
        this.projects.splice(index, 1);
        if (this.activeProjIndex === index){
            this.activeProjIndex--;
        }
    }

    setActive(index){
        this.activeProjIndex = index;
    }

    addToActive(todo){
        this.projects[this.activeProjIndex].addTodo(todo)
    }
}

let Dir = new Projects();
Dir.addToActive(new _project_classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo("title", "12/31/2023", "Here is some text", "urgent"));


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dir);

/***/ }),

/***/ "./src/project_classes.js":
/*!********************************!*\
  !*** ./src/project_classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });

class Todo {
    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.complete = false;
    }

    toggleComplete(){
        this.complete = !this.complete;
    }

    changePriority(priority){
        this.priority = priority;
    }
}

class Project {
    constructor(name, numOfProjects){
        this.name = name;
        this.id =numOfProjects;
        this.numItems = 0;
        this.todo = [];
    };

    addTodo(todo){
        this.todo.push(todo);
    }

    removeTodo(index){
        this.todo.splice(index, 1);
    }
}



/***/ }),

/***/ "./src/assets/Roboto/Roboto-Bold.ttf":
/*!*******************************************!*\
  !*** ./src/assets/Roboto/Roboto-Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/assets/Roboto/Roboto-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/Roboto/Roboto-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/github-mark.svg":
/*!************************************!*\
  !*** ./src/assets/github-mark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_management/page_layout.js */ "./src/DOM_management/page_layout.js");
/* harmony import */ var _manage_dir_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage_dir.js */ "./src/manage_dir.js");
/* harmony import */ var _DOM_management_render_active_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM_management/render_active_project.js */ "./src/DOM_management/render_active_project.js");
/* harmony import */ var _DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM_management/todo_card.js */ "./src/DOM_management/todo_card.js");







(0,_DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectsMenu)(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_DOM_management_render_active_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].projects[0].todo[0]);


/*
 * Add event listner for the default project in the left menu
 */
let defaultProj = document.querySelector('[data-id="0"]');
defaultProj.addEventListener("click", () => {
    /* toggle active project */
    _manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].setActive(defaultProj.dataset.id);
})

/*
 * Event handling for creating a new project
 */
const newProjectButton = document.getElementById("new-proj-button");
newProjectButton.addEventListener("click", () => {
    if(newProjectButton.parentElement.dataset.inputmode === "false"){
        (0,_DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__.addNewProjectInput)();
    } else {
        if (document.getElementById("new-project-input").checkValidity()){
            let newProjName = (0,_DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__.replaceNewProjectInput)();
            _manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(newProjName);

            (0,_DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectsMenu)(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

            /* add event listener for the new created project */
            document.querySelectorAll(".project").forEach((element) => {
                element.addEventListener("click", () => {
                    /* toggle active project */
                    _manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].setActive(element.dataset.id);
                })
            });
        }
    }
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC9wYWdlX2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3RvZG9fY2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC9wYWdlX2xheW91dC5jc3M/Y2ViNiIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzcz8wOWY5Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC90b2RvX2NhcmQuY3NzPzE1MTkiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvdG9kb19jYXJkLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tYW5hZ2VfZGlyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0X2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA4JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGEge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGE6aG92ZXIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogOTIlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1tZW51IHtcXHJcXG4gICAgLS1wYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXBhZGRpbmcpKjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwcHggLTVweCAwcHggMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LW1lbnUgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmYXVsdC1zZWxlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXNlbGVjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zZWxlY3Rpb24gPiBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSlcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIC5wcm9qZWN0ID4gKjpudGgtY2hpbGQoMikge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyAucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0ID4gcCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvai1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET01fbWFuYWdlbWVudC9wYWdlX2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiLi9zdHlsZXMuY3NzXFxcIik7XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA4JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGEge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGE6aG92ZXIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogOTIlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1tZW51IHtcXHJcXG4gICAgLS1wYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXBhZGRpbmcpKjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwcHggLTVweCAwcHggMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LW1lbnUgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmYXVsdC1zZWxlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXNlbGVjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zZWxlY3Rpb24gPiBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSlcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIC5wcm9qZWN0ID4gKjpudGgtY2hpbGQoMikge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyAucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0ID4gcCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvai1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcHJvamVjdC1wYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtaGVhZGVyLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjUwcHg7XFxyXFxufVxcclxcblxcclxcbiNjaGVja2xpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDNweCB2YXIoLS1zaGFkb3cpO1xcclxcblxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NX21hbmFnZW1lbnQvcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNDQUFzQzs7QUFFMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcIi4vc3R5bGVzLmNzc1xcXCIpO1xcclxcblxcclxcbiNwcm9qZWN0LXBhZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgICAtLXByb2plY3QtaGVhZGVyLWhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCB2YXIoLS1zaGFkb3cpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXByb2plY3QtaGVhZGVyLWhlaWdodCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1oZWFkZXItbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXByb2plY3QtaGVhZGVyLWhlaWdodCkpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWNrbGlzdC1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLS1wcmltYXJ5OiAjRkM0QTRBO1xcclxcbiAgICAtLWxpZ2h0LWJhY2tncm91bmQ6ICNmZWQzZDM7IC8qI0ZGRUJFQiAjZmZmYWZhKi9cXHJcXG4gICAgLS1hY2NlbnQ6ICM1MjhFN0M7XFxyXFxuICAgIC0tbGlnaHQtYWNjZW50OiAjN2RjMGFjO1xcclxcbiAgICAtLXNoYWRvdzogI2ZiOTk5OTsgLyojZjljMWMxICAjZmRkZGRkKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NX21hbmFnZW1lbnQvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUIsRUFBRSxtQkFBbUI7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5Q0FBeUM7QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICAtLXByaW1hcnk6ICNGQzRBNEE7XFxyXFxuICAgIC0tbGlnaHQtYmFja2dyb3VuZDogI2ZlZDNkMzsgLyojRkZFQkVCICNmZmZhZmEqL1xcclxcbiAgICAtLWFjY2VudDogIzUyOEU3QztcXHJcXG4gICAgLS1saWdodC1hY2NlbnQ6ICM3ZGMwYWM7XFxyXFxuICAgIC0tc2hhZG93OiAjZmI5OTk5OyAvKiNmOWMxYzEgICNmZGRkZGQqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCA2MHB4IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRhdGUge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtY29udGFpbmVyID4gcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWNvbnRhaW5lciA+IHA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDJweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWNvbnRhaW5lciA+IHA6bnRoLWNoaWxkKDMpe1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET01fbWFuYWdlbWVudC90b2RvX2NhcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiLi9zdHlsZXMuY3NzXFxcIik7XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDI2MHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggNjBweCAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWNvbnRhaW5lciA+IHAge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQge1xcclxcbiAgICBtYXJnaW4tdG9wOiA3cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1jb250YWluZXIgPiBwOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAycHg7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1jb250YWluZXIgPiBwOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZV9sYXlvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlX2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvX2NhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvX2NhcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9wYWdlX2xheW91dC5jc3NcIjtcclxuaW1wb3J0IGdpdGh1YkltZyBmcm9tIFwiLi4vYXNzZXRzL2dpdGh1Yi1tYXJrLnN2Z1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJUT0RPXCI7XHJcbiAgICBwLmlkID0gXCJ0b2RvLXRpdGxlXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgbGV0IHNpZ25pdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaWduaXR1cmVEaXYuaWQgPSBcInNpZ25pdHVyZVwiO1xyXG5cclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIk1hZGUgQnk6IE9tIEFtaW5cIjtcclxuICAgIHNpZ25pdHVyZURpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIFxyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGEuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL29tYW1pbjEzNS9Ub2RvX0xpc3RcIjtcclxuICAgIGEudGFyZ2V0ID0gXCJfYmxhY2tcIjtcclxuICAgIFxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjID0gZ2l0aHViSW1nO1xyXG5cclxuICAgIGltZy5hbHQgPSBcImdpdGh1YlwiO1xyXG5cclxuICAgIGEuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBzaWduaXR1cmVEaXYuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2lnbml0dXJlRGl2KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRMZWZ0TWVudSgpe1xyXG5cclxuICAgIGNvbnN0IGxlZnRNZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnRNZW51RGl2LmlkID0gXCJsZWZ0LW1lbnVcIjtcclxuXHJcbiAgICBsZWZ0TWVudURpdi5hcHBlbmRDaGlsZChsb2FkRGVmYXVsdFNlbGVjdGlvbnMoKSk7XHJcbiAgICBsZWZ0TWVudURpdi5hcHBlbmRDaGlsZChsb2FkUHJvamVjdFNlbGVjdGlvbnMoKSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGxlZnRNZW51RGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZERlZmF1bHRTZWxlY3Rpb25zKCl7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdFNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWZhdWx0U2VsRGl2LmlkID0gXCJkZWZhdWx0LXNlbGVjdGlvblwiXHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICAgIGRpdi5pZCA9IFwidG9kYXlcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGRlZmF1bHRTZWxEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiVGltZWxpbmVcIjtcclxuICAgIGRpdi5pZCA9IFwidGltZWxpbmVcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGRlZmF1bHRTZWxEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblxyXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBkaXYuaWQgPSBcInByaW9yaXR5XCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBkZWZhdWx0U2VsRGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRTZWxEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0U2VsZWN0aW9ucygpe1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RTZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdFNlbERpdi5pZCA9IFwicHJvamVjdC1zZWxlY3Rpb25cIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcclxuXHJcbiAgICBwcm9qZWN0U2VsRGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHVsLmlkID0gXCJwcm9qZWN0c1wiO1xyXG5cclxuICAgIHByb2plY3RTZWxEaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgIFxyXG4gICAgcHJvamVjdFNlbERpdi5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0QnV0dG9uKCkpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0U2VsRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0QnV0dG9uKCl7XHJcbiAgICBsZXQgbmV3UHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdQcm9qQnV0dG9uLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3RcIjtcclxuICAgIG5ld1Byb2pCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1pbnB1dE1vZGVcIiwgXCJmYWxzZVwiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBcIjtcclxuICAgIG5ld1Byb2pCdXR0b24uYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBwLmlkID0gXCJuZXctcHJvai1idXR0b25cIjtcclxuICAgIFxyXG4gICAgbmV3UHJvakJ1dHRvbi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICByZXR1cm4gbmV3UHJvakJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdElucHV0KCl7XHJcbiAgICBsZXQgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbiAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImRhdGEtaW5wdXRNb2RlXCIsIFwidHJ1ZVwiKTtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIGlucHV0LmlkID0gXCJuZXctcHJvamVjdC1pbnB1dFwiO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XHJcbiAgICBuZXdQcm9qLnJlcGxhY2VDaGlsZChpbnB1dCwgbmV3UHJvai5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5ld1Byb2plY3RJbnB1dCgpe1xyXG4gICAgbGV0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0XCIpO1xyXG4gICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlucHV0TW9kZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XHJcblxyXG4gICAgbGV0IHZhbCA9IG5ld1Byb2ouZmlyc3RDaGlsZC52YWx1ZTtcclxuXHJcbiAgICBuZXdQcm9qLnJlcGxhY2VDaGlsZChwLCBuZXdQcm9qLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvaikge1xyXG5cclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qLmlkKTtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBwcm9qLm51bUl0ZW1zO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgcmV0dXJuIGxpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNNZW51KERpcil7XHJcblxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xyXG4gICAgbGV0IG51bUNoaWxkcmVuID0gdWwuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGlyLnByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoaSA8IG51bUNoaWxkcmVuKXtcclxuICAgICAgICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGNyZWF0ZVByb2plY3QoRGlyLnByb2plY3RzW2ldKTtcclxuICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSgpe1xyXG4gICAgbG9hZEhlYWRlcigpO1xyXG4gICAgbG9hZExlZnRNZW51KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xyXG5leHBvcnQge2xvYWRQcm9qZWN0c01lbnUsIGFkZE5ld1Byb2plY3RJbnB1dCwgcmVwbGFjZU5ld1Byb2plY3RJbnB1dH07IiwiaW1wb3J0IERpciBmcm9tIFwiLi4vbWFuYWdlX2Rpci5qc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3JlbmRlcl9hY3RpdmVfcHJvamVjdC5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdFBhZ2UoKXtcclxuXHJcbiAgICBsZXQgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdFBhZ2UuaWQgPSBcInByb2plY3QtcGFnZVwiO1xyXG5cclxuICAgIC8qIHByb2plY3QgcGFnZSBoZWFkZXIgKi9cclxuICAgIGxldCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyRGl2LmlkID0gXCJwcm9qZWN0LWhlYWRlclwiO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmlkID0gXCJwcm9qZWN0LWhlYWRlci1uYW1lXCI7XHJcbiAgICBwLnRleHRDb250ZW50ID0gRGlyLmFjdGl2ZVByb2plY3QoKS5uYW1lO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIGxldCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0Q29udGVudC5pZCA9IFwicHJvamVjdC1jb250ZW50XCI7XHJcblxyXG4gICAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmlkID0gXCJjYXJkcy1jb250YWluZXJcIjtcclxuICAgIGxldCBjaGVja2xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2hlY2tsaXN0Q29udGFpbmVyLmlkID0gXCJjaGVja2xpc3QtY29udGFpbmVyXCI7XHJcblxyXG4gICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZHNDb250YWluZXIpO1xyXG4gICAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0Q29udGFpbmVyKTtcclxuICAgIFxyXG5cclxuICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XHJcbiAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVQcm9qZWN0UGFnZTsiLCJpbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RvZG9fY2FyZC5jc3NcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTmV3Q2FyZCh0b2RvKXtcclxuXHJcbiAgICBsZXQgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xyXG5cclxuICAgIGxldCB0aXRsZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGl0bGVEYXRlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGl0bGUtZGF0ZS1jb250YWluZXJcIjtcclxuICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSBcImNhcmQtdGl0bGVcIjtcclxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcbiAgICBsZXQgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNhcmREYXRlLmNsYXNzTmFtZSA9IFwiY2FyZC1kYXRlXCI7XHJcbiAgICBjYXJkRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcclxuXHJcbiAgICB0aXRsZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuICAgIHRpdGxlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGF0ZSk7XHJcblxyXG4gICAgbGV0IGNvbXBsZXRlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb21wbGV0ZWRDb250YWluZXIuY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1jb250YWluZXJcIjtcclxuICAgIGxldCBjb21wbGV0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29tcGxldGVJbnB1dC5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWlucHV0XCI7XHJcbiAgICBjb21wbGV0ZUlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBsZXQgY29tcGxldGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb21wbGV0ZVRleHQudGV4dENvbnRlbnQgPSBcImNvbXBsZXRlXCI7XHJcbiAgICBjb21wbGV0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XHJcbiAgICBjb21wbGV0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVUZXh0KTtcclxuXHJcbiAgICBsZXQgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi1jb250YWluZXJcIjtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgbGV0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZXhwYW5kLmNsYXNzTmFtZSA9IFwiZXhwYW5kXCI7XHJcbiAgICBleHBhbmQudGV4dENvbnRlbnQgPSBcImV4cGFuZFwiOyAgXHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBhbmQpO1xyXG5cclxuICAgIGxldCBlZGl0Q29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlZGl0Q29udGFpbnRlci5jbGFzc05hbWUgPSBcImVkaXQtY29udGFpbmVyXCI7XHJcbiAgICBsZXQgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZWRpdC5jbGFzc05hbWUgPSBcImVkaXRcIjtcclxuICAgIGVkaXQudGV4dENvbnRlbnQgPSBcImVkaXRcIjtcclxuICAgIGVkaXRDb250YWludGVyLmFwcGVuZENoaWxkKGVkaXQpO1xyXG5cclxuICAgIGxldCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInByaW9yaXR5LWNvbnRhaW5lclwiO1xyXG4gICAgbGV0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xyXG4gICAgbGV0IHByaW9yaXR5U2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaW9yaXR5U2xpZGVyLmNsYXNzTmFtZSA9IFwicHJpb3JpdHktc2xpZGVyXCI7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcmlvcml0eUljb24uY2xhc3NOYW1lID0gXCJwcmlvcml0eS1pY29uXCI7XHJcbiAgICBwcmlvcml0eVNsaWRlci5hcHBlbmRDaGlsZChwcmlvcml0eUljb24pO1xyXG5cclxuICAgIGxldCBwcmlvcml0eUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcHJpb3JpdHlJbmRpY2F0b3IudGV4dENvbnRlbnQgPSBcInVyZ2VudFwiO1xyXG5cclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNsaWRlcik7XHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUluZGljYXRvcik7XHJcblxyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURhdGVDb250YWluZXIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRDb250YWluZXIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRDb250YWludGVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZHMtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGNhcmRDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWROZXdDYXJkOyIsImltcG9ydCB7VG9kbywgUHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdF9jbGFzc2VzLmpzXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJkZWZhdWx0XCIsIDApXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2pJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlUHJvamVjdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuYWN0aXZlUHJvakluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lLCB0aGlzLnByb2plY3RzLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9qSW5kZXggPT09IGluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qSW5kZXgtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKGluZGV4KXtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2pJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvQWN0aXZlKHRvZG8pe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNbdGhpcy5hY3RpdmVQcm9qSW5kZXhdLmFkZFRvZG8odG9kbylcclxuICAgIH1cclxufVxyXG5cclxubGV0IERpciA9IG5ldyBQcm9qZWN0cygpO1xyXG5EaXIuYWRkVG9BY3RpdmUobmV3IFRvZG8oXCJ0aXRsZVwiLCBcIjEyLzMxLzIwMjNcIiwgXCJIZXJlIGlzIHNvbWUgdGV4dFwiLCBcInVyZ2VudFwiKSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyOyIsIlxyXG5jbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb21wbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSl7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG51bU9mUHJvamVjdHMpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pZCA9bnVtT2ZQcm9qZWN0cztcclxuICAgICAgICB0aGlzLm51bUl0ZW1zID0gMDtcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkVG9kbyh0b2RvKXtcclxuICAgICAgICB0aGlzLnRvZG8ucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUb2RvKGluZGV4KXtcclxuICAgICAgICB0aGlzLnRvZG8uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtUb2RvLCBQcm9qZWN0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuanNcIlxyXG5pbXBvcnQgeyBsb2FkUHJvamVjdHNNZW51LCBhZGROZXdQcm9qZWN0SW5wdXQsIHJlcGxhY2VOZXdQcm9qZWN0SW5wdXR9IGZyb20gXCIuL0RPTV9tYW5hZ2VtZW50L3BhZ2VfbGF5b3V0LmpzXCI7XHJcbmltcG9ydCBEaXIgZnJvbSBcIi4vbWFuYWdlX2Rpci5qc1wiO1xyXG5pbXBvcnQgbG9hZFByb2pQYWdlIGZyb20gXCIuL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgbG9hZE5ld0NhcmQgZnJvbSBcIi4vRE9NX21hbmFnZW1lbnQvdG9kb19jYXJkLmpzXCI7XHJcblxyXG5cclxubG9hZFBhZ2UoKTtcclxubG9hZFByb2plY3RzTWVudShEaXIpO1xyXG5sb2FkUHJvalBhZ2UoKTtcclxubG9hZE5ld0NhcmQoRGlyLnByb2plY3RzWzBdLnRvZG9bMF0pO1xyXG5cclxuXHJcbi8qXHJcbiAqIEFkZCBldmVudCBsaXN0bmVyIGZvciB0aGUgZGVmYXVsdCBwcm9qZWN0IGluIHRoZSBsZWZ0IG1lbnVcclxuICovXHJcbmxldCBkZWZhdWx0UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiMFwiXScpO1xyXG5kZWZhdWx0UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLyogdG9nZ2xlIGFjdGl2ZSBwcm9qZWN0ICovXHJcbiAgICBEaXIuc2V0QWN0aXZlKGRlZmF1bHRQcm9qLmRhdGFzZXQuaWQpO1xyXG59KVxyXG5cclxuLypcclxuICogRXZlbnQgaGFuZGxpbmcgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcclxuICovXHJcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qLWJ1dHRvblwiKTtcclxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYobmV3UHJvamVjdEJ1dHRvbi5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5wdXRtb2RlID09PSBcImZhbHNlXCIpe1xyXG4gICAgICAgIGFkZE5ld1Byb2plY3RJbnB1dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1pbnB1dFwiKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgICAgICAgICBsZXQgbmV3UHJvak5hbWUgPSByZXBsYWNlTmV3UHJvamVjdElucHV0KCk7XHJcbiAgICAgICAgICAgIERpci5hZGRQcm9qZWN0KG5ld1Byb2pOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0c01lbnUoRGlyKTtcclxuXHJcbiAgICAgICAgICAgIC8qIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgdGhlIG5ldyBjcmVhdGVkIHByb2plY3QgKi9cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvKiB0b2dnbGUgYWN0aXZlIHByb2plY3QgKi9cclxuICAgICAgICAgICAgICAgICAgICBEaXIuc2V0QWN0aXZlKGVsZW1lbnQuZGF0YXNldC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9