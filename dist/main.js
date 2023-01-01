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
___CSS_LOADER_EXPORT___.push([module.id, "#project-page {\r\n    width: 100%;\r\n    font-family: \"Roboto\";\r\n    --project-header-height: 45px;\r\n}\r\n\r\n#project-header {\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0px 1px 3px var(--shadow);\r\n    height: var(--project-header-height);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n#project-header-name {\r\n    font-size: 1.5rem;\r\n    margin: 0px;\r\n    margin-left: 15px;\r\n}\r\n\r\n#project-content {\r\n    --checklist-width: 250px;\r\n    height: calc(100% - var(--project-header-height));\r\n    display: grid;\r\n    grid-template-columns: 1fr var(--checklist-width);\r\n}\r\n\r\n#cards-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#new-todo {\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: 2rem;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n\r\n#new-todo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#checklist-container {\r\n    background-color: white;\r\n    box-shadow: -1px 0px 3px var(--shadow);\r\n}", "",{"version":3,"sources":["webpack://./src/DOM_management/render_active_project.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,qCAAqC;IACrC,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,iDAAiD;IACjD,aAAa;IACb,iDAAiD;AACrD;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,sCAAsC;AAC1C","sourcesContent":["@import url(\"./styles.css\");\r\n\r\n#project-page {\r\n    width: 100%;\r\n    font-family: \"Roboto\";\r\n    --project-header-height: 45px;\r\n}\r\n\r\n#project-header {\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0px 1px 3px var(--shadow);\r\n    height: var(--project-header-height);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n#project-header-name {\r\n    font-size: 1.5rem;\r\n    margin: 0px;\r\n    margin-left: 15px;\r\n}\r\n\r\n#project-content {\r\n    --checklist-width: 250px;\r\n    height: calc(100% - var(--project-header-height));\r\n    display: grid;\r\n    grid-template-columns: 1fr var(--checklist-width);\r\n}\r\n\r\n#cards-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#new-todo {\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: 2rem;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 20px;\r\n}\r\n\r\n#new-todo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#checklist-container {\r\n    background-color: white;\r\n    box-shadow: -1px 0px 3px var(--shadow);\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".card {\r\n    background-color: white;\r\n    width: 260px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 3px var(--shadow);\r\n}\r\n\r\n.description-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.card-title {\r\n    font-size: 1rem;\r\n    margin: 0px;\r\n}\r\n\r\n.card-date {\r\n    font-size: 0.8rem;\r\n    margin-top: 0px;\r\n    color: var(--accent);\r\n}\r\n\r\n.complete-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.complete-input {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin: 0px 5px 0px 0px;\r\n}\r\n\r\n.complete-container > p {\r\n    margin: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.description {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 0px;\r\n    margin-top: 13px;\r\n}\r\n\r\n.expand {\r\n    margin-top: 7px;\r\n    font-size: 0.9rem;\r\n    color: gray;\r\n}\r\n\r\n.edit-container {\r\n    position: relative;\r\n}\r\n\r\n.edit {\r\n    height: 20px;\r\n    color: gray;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.priority-container {\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    width: 100px;\r\n    justify-self: end;\r\n}\r\n\r\n.priority-container > p:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.priority-slider {\r\n    background-color: var(--light-background);\r\n    width: 60px;\r\n    height: 20px;\r\n    border-radius: 12px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.priority-icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n    margin: 2px;\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n\r\n.priority-container > p:nth-child(3){\r\n    margin: 0px;\r\n    height: 24px;\r\n    margin-left: 5px;\r\n    font-size: 0.8rem;\r\n    line-height: 24px;\r\n    color: red;\r\n}\r\n\r\n#new-card-back {\r\n    background-color: red;\r\n    background: rgba(255, 0, 0, 0.1);\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 0px;\r\n    backdrop-filter: blur(5px);\r\n}\r\n\r\n.new-card {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    width: 600px;\r\n    height: 400px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/DOM_management/todo_card.css"],"names":[],"mappings":"AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,gCAAgC;IAChC,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,SAAS;IACT,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;AACvB","sourcesContent":["@import url(\"./styles.css\");\r\n\r\n.card {\r\n    background-color: white;\r\n    width: 260px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 3px var(--shadow);\r\n}\r\n\r\n.description-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.card-title {\r\n    font-size: 1rem;\r\n    margin: 0px;\r\n}\r\n\r\n.card-date {\r\n    font-size: 0.8rem;\r\n    margin-top: 0px;\r\n    color: var(--accent);\r\n}\r\n\r\n.complete-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.complete-input {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin: 0px 5px 0px 0px;\r\n}\r\n\r\n.complete-container > p {\r\n    margin: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.description {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 0px;\r\n    margin-top: 13px;\r\n}\r\n\r\n.expand {\r\n    margin-top: 7px;\r\n    font-size: 0.9rem;\r\n    color: gray;\r\n}\r\n\r\n.edit-container {\r\n    position: relative;\r\n}\r\n\r\n.edit {\r\n    height: 20px;\r\n    color: gray;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.priority-container {\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    width: 100px;\r\n    justify-self: end;\r\n}\r\n\r\n.priority-container > p:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.priority-slider {\r\n    background-color: var(--light-background);\r\n    width: 60px;\r\n    height: 20px;\r\n    border-radius: 12px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.priority-icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n    margin: 2px;\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n\r\n.priority-container > p:nth-child(3){\r\n    margin: 0px;\r\n    height: 24px;\r\n    margin-left: 5px;\r\n    font-size: 0.8rem;\r\n    line-height: 24px;\r\n    color: red;\r\n}\r\n\r\n#new-card-back {\r\n    background-color: red;\r\n    background: rgba(255, 0, 0, 0.1);\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 0px;\r\n    backdrop-filter: blur(5px);\r\n}\r\n\r\n.new-card {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    width: 600px;\r\n    height: 400px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n}"],"sourceRoot":""}]);
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

    cardsContainer.appendChild(newTodoButton());

    projectContent.appendChild(cardsContainer);
    projectContent.appendChild(checklistContainer);
    

    projectPage.appendChild(headerDiv);
    projectPage.appendChild(projectContent);
    document.getElementById("content").appendChild(projectPage);

}

function newTodoButton(){
    
    let newTodo = document.createElement("div");
    newTodo.id = "new-todo";

    let p = document.createElement("p");
    p.textContent = "+";

    newTodo.appendChild(p);

    return newTodo;
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
/* harmony export */   "loadCard": () => (/* binding */ loadCard),
/* harmony export */   "newCard": () => (/* binding */ newCard)
/* harmony export */ });
/* harmony import */ var _todo_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_card.css */ "./src/DOM_management/todo_card.css");



function loadCard(todo){

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


function newCard(todo){

    let newCardBackground = document.createElement("div");
    newCardBackground.id = "new-card-back";

    let cardContainer = document.createElement("div");
    cardContainer.className = "new-card";

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

    newCardBackground.appendChild(cardContainer)

    document.querySelector("body").appendChild(newCardBackground);
}






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
(0,_DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__.loadCard)(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].projects[0].todo[0]);


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

document.getElementById("new-todo").addEventListener("click", () => {
    (0,_DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__.newCard)(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].projects[0].todo[0]);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUtXO0FBQ2M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9FQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDbERHO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSm1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3REFBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFJO0FBQ3hCO0FBQ0E7QUFDQSxpRUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzRDtBQUN3RDtBQUM1RTtBQUNtQztBQUNMO0FBQ2hFO0FBQ0E7QUFDQSwwRUFBUTtBQUNSLGdGQUFnQixDQUFDLHNEQUFHO0FBQ3BCLG9GQUFZO0FBQ1osc0VBQVEsQ0FBQywwRUFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWE7QUFDakIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRkFBa0I7QUFDMUIsTUFBTTtBQUNOO0FBQ0EsOEJBQThCLHNGQUFzQjtBQUNwRCxZQUFZLGlFQUFjO0FBQzFCO0FBQ0EsWUFBWSxnRkFBZ0IsQ0FBQyxzREFBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdFQUFhO0FBQ2pDLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxxRUFBTyxDQUFDLDBFQUF1QjtBQUNuQyxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC9yZW5kZXJfYWN0aXZlX3Byb2plY3QuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC90b2RvX2NhcmQuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuY3NzP2NlYjYiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5jc3M/MDlmOSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvdG9kb19jYXJkLmNzcz8xNTE5Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3BhZ2VfbGF5b3V0LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC9yZW5kZXJfYWN0aXZlX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3RvZG9fY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbWFuYWdlX2Rpci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdF9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogOCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHAge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSBhIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSBhOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDkyJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtbWVudSB7XFxyXFxuICAgIC0tcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1wYWRkaW5nKSoyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMHB4IC01cHggMHB4IDBweCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1tZW51IHAge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNkZWZhdWx0LXNlbGVjdGlvbiA+ICoge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbiNkZWZhdWx0LXNlbGVjdGlvbiA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zZWxlY3Rpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc2VsZWN0aW9uID4gcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzOyAgXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyAucHJvamVjdCA+ICo6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMgLnByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdCA+IHAge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2otYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcIi4vc3R5bGVzLmNzc1xcXCIpO1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogOCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHAge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kby10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSBhIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ25pdHVyZSBhOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDkyJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQtbWVudSB7XFxyXFxuICAgIC0tcGFkZGluZzogMTVweDtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1wYWRkaW5nKSoyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIGNsaXAtcGF0aDogaW5zZXQoMHB4IC01cHggMHB4IDBweCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1tZW51IHAge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbiNkZWZhdWx0LXNlbGVjdGlvbiA+ICoge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbiNkZWZhdWx0LXNlbGVjdGlvbiA+ICo6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zZWxlY3Rpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3Qtc2VsZWN0aW9uID4gcCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzOyAgXFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyAucHJvamVjdCA+ICo6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMgLnByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdCA+IHAge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1wcm9qZWN0LWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2otYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3Q6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3Byb2plY3QtcGFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICAgIC0tcHJvamVjdC1oZWFkZXItaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1oZWFkZXItaGVpZ2h0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWhlYWRlci1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtY29udGVudCB7XFxyXFxuICAgIC0tY2hlY2tsaXN0LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgdmFyKC0tY2hlY2tsaXN0LXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10b2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNuZXctdG9kbzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWNrbGlzdC1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET01fbWFuYWdlbWVudC9yZW5kZXJfYWN0aXZlX3Byb2plY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCxhQUFhO0lBQ2IsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNDQUFzQztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiLi9zdHlsZXMuY3NzXFxcIik7XFxyXFxuXFxyXFxuI3Byb2plY3QtcGFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICAgIC0tcHJvamVjdC1oZWFkZXItaGVpZ2h0OiA0NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1oZWFkZXItaGVpZ2h0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWhlYWRlci1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtY29udGVudCB7XFxyXFxuICAgIC0tY2hlY2tsaXN0LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQpKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgdmFyKC0tY2hlY2tsaXN0LXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10b2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNuZXctdG9kbzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NoZWNrbGlzdC1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogLTFweCAwcHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvUm9ib3RvL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgLS1wcmltYXJ5OiAjRkM0QTRBO1xcclxcbiAgICAtLWxpZ2h0LWJhY2tncm91bmQ6ICNmZWQzZDM7IC8qI0ZGRUJFQiAjZmZmYWZhKi9cXHJcXG4gICAgLS1hY2NlbnQ6ICM1MjhFN0M7XFxyXFxuICAgIC0tbGlnaHQtYWNjZW50OiAjN2RjMGFjO1xcclxcbiAgICAtLXNoYWRvdzogI2ZiOTk5OTsgLyojZjljMWMxICAjZmRkZGRkKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NX21hbmFnZW1lbnQvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkIsRUFBRSxrQkFBa0I7SUFDL0MsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUIsRUFBRSxtQkFBbUI7QUFDMUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5Q0FBeUM7QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmXFxcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICAtLXByaW1hcnk6ICNGQzRBNEE7XFxyXFxuICAgIC0tbGlnaHQtYmFja2dyb3VuZDogI2ZlZDNkMzsgLyojRkZFQkVCICNmZmZhZmEqL1xcclxcbiAgICAtLWFjY2VudDogIzUyOEU3QztcXHJcXG4gICAgLS1saWdodC1hY2NlbnQ6ICM3ZGMwYWM7XFxyXFxuICAgIC0tc2hhZG93OiAjZmI5OTk5OyAvKiNmOWMxYzEgICNmZGRkZGQqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCA2MHB4IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRhdGUge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIG1hcmdpbjogMHB4IDVweCAwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtY29udGFpbmVyID4gcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWNvbnRhaW5lciA+IHA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDJweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWNvbnRhaW5lciA+IHA6bnRoLWNoaWxkKDMpe1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNuZXctY2FyZC1iYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWNhcmQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDQwcHggNjBweCAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRE9NX21hbmFnZW1lbnQvdG9kb19jYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcIi4vc3R5bGVzLmNzc1xcXCIpO1xcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyNjBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDYwcHggMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1jb250YWluZXIgPiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogN3B4O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktY29udGFpbmVyID4gcDpudGgtY2hpbGQoMSkge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWljb24ge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMnB4O1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktY29udGFpbmVyID4gcDpudGgtY2hpbGQoMyl7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy1jYXJkLWJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY2FyZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCA2MHB4IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlX2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BhZ2VfbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJfYWN0aXZlX3Byb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZW5kZXJfYWN0aXZlX3Byb2plY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9fY2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9fY2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHN0eWxlIGZyb20gXCIuL3BhZ2VfbGF5b3V0LmNzc1wiO1xyXG5pbXBvcnQgZ2l0aHViSW1nIGZyb20gXCIuLi9hc3NldHMvZ2l0aHViLW1hcmsuc3ZnXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIlRPRE9cIjtcclxuICAgIHAuaWQgPSBcInRvZG8tdGl0bGVcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICBsZXQgc2lnbml0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZ25pdHVyZURpdi5pZCA9IFwic2lnbml0dXJlXCI7XHJcblxyXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiTWFkZSBCeTogT20gQW1pblwiO1xyXG4gICAgc2lnbml0dXJlRGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgXHJcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgYS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vb21hbWluMTM1L1RvZG9fTGlzdFwiO1xyXG4gICAgYS50YXJnZXQgPSBcIl9ibGFja1wiO1xyXG4gICAgXHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmMgPSBnaXRodWJJbWc7XHJcblxyXG4gICAgaW1nLmFsdCA9IFwiZ2l0aHViXCI7XHJcblxyXG4gICAgYS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuICAgIHNpZ25pdHVyZURpdi5hcHBlbmRDaGlsZChhKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzaWduaXR1cmVEaXYpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZExlZnRNZW51KCl7XHJcblxyXG4gICAgY29uc3QgbGVmdE1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGVmdE1lbnVEaXYuaWQgPSBcImxlZnQtbWVudVwiO1xyXG5cclxuICAgIGxlZnRNZW51RGl2LmFwcGVuZENoaWxkKGxvYWREZWZhdWx0U2VsZWN0aW9ucygpKTtcclxuICAgIGxlZnRNZW51RGl2LmFwcGVuZENoaWxkKGxvYWRQcm9qZWN0U2VsZWN0aW9ucygpKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobGVmdE1lbnVEaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRGVmYXVsdFNlbGVjdGlvbnMoKXtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0U2VsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlZmF1bHRTZWxEaXYuaWQgPSBcImRlZmF1bHQtc2VsZWN0aW9uXCJcclxuXHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgZGl2LmlkID0gXCJ0b2RheVwiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgZGVmYXVsdFNlbERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJUaW1lbGluZVwiO1xyXG4gICAgZGl2LmlkID0gXCJ0aW1lbGluZVwiO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgZGVmYXVsdFNlbERpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHJcbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcclxuICAgIGRpdi5pZCA9IFwicHJpb3JpdHlcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGRlZmF1bHRTZWxEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICByZXR1cm4gZGVmYXVsdFNlbERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RTZWxlY3Rpb25zKCl7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdFNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0U2VsRGl2LmlkID0gXCJwcm9qZWN0LXNlbGVjdGlvblwiO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xyXG5cclxuICAgIHByb2plY3RTZWxEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgdWwuaWQgPSBcInByb2plY3RzXCI7XHJcblxyXG4gICAgcHJvamVjdFNlbERpdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgXHJcbiAgICBwcm9qZWN0U2VsRGl2LmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3RCdXR0b24oKSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RTZWxEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RCdXR0b24oKXtcclxuICAgIGxldCBuZXdQcm9qQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1Byb2pCdXR0b24uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdFwiO1xyXG4gICAgbmV3UHJvakJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlucHV0TW9kZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0IFwiO1xyXG4gICAgbmV3UHJvakJ1dHRvbi5hcHBlbmRDaGlsZChwKTtcclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgIHAuaWQgPSBcIm5ldy1wcm9qLWJ1dHRvblwiO1xyXG4gICAgXHJcbiAgICBuZXdQcm9qQnV0dG9uLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIHJldHVybiBuZXdQcm9qQnV0dG9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0SW5wdXQoKXtcclxuICAgIGxldCBuZXdQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdFwiKTtcclxuICAgIG5ld1Byb2ouc2V0QXR0cmlidXRlKFwiZGF0YS1pbnB1dE1vZGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgaW5wdXQuaWQgPSBcIm5ldy1wcm9qZWN0LWlucHV0XCI7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcclxuICAgIG5ld1Byb2oucmVwbGFjZUNoaWxkKGlucHV0LCBuZXdQcm9qLmZpcnN0Q2hpbGQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlTmV3UHJvamVjdElucHV0KCl7XHJcbiAgICBsZXQgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbiAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImRhdGEtaW5wdXRNb2RlXCIsIFwiZmFsc2VcIik7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcclxuXHJcbiAgICBsZXQgdmFsID0gbmV3UHJvai5maXJzdENoaWxkLnZhbHVlO1xyXG5cclxuICAgIG5ld1Byb2oucmVwbGFjZUNoaWxkKHAsIG5ld1Byb2ouZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgcmV0dXJuIHZhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qKSB7XHJcblxyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHByb2ouaWQpO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gcHJvai5uYW1lO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHByb2oubnVtSXRlbXM7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICByZXR1cm4gbGk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c01lbnUoRGlyKXtcclxuXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XHJcbiAgICBsZXQgbnVtQ2hpbGRyZW4gPSB1bC5jaGlsZHJlbi5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBEaXIucHJvamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmIChpIDwgbnVtQ2hpbGRyZW4pe1xyXG4gICAgICAgICAgICB1bC5yZW1vdmVDaGlsZCh1bC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpID0gY3JlYXRlUHJvamVjdChEaXIucHJvamVjdHNbaV0pO1xyXG4gICAgICAgIHVsLmFwcGVuZChsaSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQYWdlKCl7XHJcbiAgICBsb2FkSGVhZGVyKCk7XHJcbiAgICBsb2FkTGVmdE1lbnUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XHJcbmV4cG9ydCB7bG9hZFByb2plY3RzTWVudSwgYWRkTmV3UHJvamVjdElucHV0LCByZXBsYWNlTmV3UHJvamVjdElucHV0fTsiLCJpbXBvcnQgRGlyIGZyb20gXCIuLi9tYW5hZ2VfZGlyLmpzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9qZWN0UGFnZSgpe1xyXG5cclxuICAgIGxldCBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0UGFnZS5pZCA9IFwicHJvamVjdC1wYWdlXCI7XHJcblxyXG4gICAgLyogcHJvamVjdCBwYWdlIGhlYWRlciAqL1xyXG4gICAgbGV0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXJEaXYuaWQgPSBcInByb2plY3QtaGVhZGVyXCI7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAuaWQgPSBcInByb2plY3QtaGVhZGVyLW5hbWVcIjtcclxuICAgIHAudGV4dENvbnRlbnQgPSBEaXIuYWN0aXZlUHJvamVjdCgpLm5hbWU7XHJcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgbGV0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RDb250ZW50LmlkID0gXCJwcm9qZWN0LWNvbnRlbnRcIjtcclxuXHJcbiAgICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZHNDb250YWluZXIuaWQgPSBcImNhcmRzLWNvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNoZWNrbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjaGVja2xpc3RDb250YWluZXIuaWQgPSBcImNoZWNrbGlzdC1jb250YWluZXJcIjtcclxuXHJcbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvQnV0dG9uKCkpO1xyXG5cclxuICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGNhcmRzQ29udGFpbmVyKTtcclxuICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGNoZWNrbGlzdENvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xyXG4gICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnQpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHByb2plY3RQYWdlKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1RvZG9CdXR0b24oKXtcclxuICAgIFxyXG4gICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmV3VG9kby5pZCA9IFwibmV3LXRvZG9cIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICAgIG5ld1RvZG8uYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgcmV0dXJuIG5ld1RvZG87XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUHJvamVjdFBhZ2U7IiwiaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90b2RvX2NhcmQuY3NzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZENhcmQodG9kbyl7XHJcblxyXG4gICAgbGV0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNhcmRcIjtcclxuXHJcbiAgICBsZXQgdGl0bGVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGF0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRpdGxlLWRhdGUtY29udGFpbmVyXCI7XHJcbiAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjYXJkVGl0bGUuY2xhc3NOYW1lID0gXCJjYXJkLXRpdGxlXCI7XHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgbGV0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjYXJkRGF0ZS5jbGFzc05hbWUgPSBcImNhcmQtZGF0ZVwiO1xyXG4gICAgY2FyZERhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XHJcblxyXG4gICAgdGl0bGVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XHJcbiAgICB0aXRsZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZERhdGUpO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29tcGxldGVkQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29tcGxldGUtY29udGFpbmVyXCI7XHJcbiAgICBsZXQgY29tcGxldGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbXBsZXRlSW5wdXQuY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1pbnB1dFwiO1xyXG4gICAgY29tcGxldGVJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgbGV0IGNvbXBsZXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29tcGxldGVUZXh0LnRleHRDb250ZW50ID0gXCJjb21wbGV0ZVwiO1xyXG4gICAgY29tcGxldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlSW5wdXQpO1xyXG4gICAgY29tcGxldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlVGV4dCk7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcclxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIGxldCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGV4cGFuZC5jbGFzc05hbWUgPSBcImV4cGFuZFwiO1xyXG4gICAgZXhwYW5kLnRleHRDb250ZW50ID0gXCJleHBhbmRcIjsgIFxyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZXhwYW5kKTtcclxuXHJcbiAgICBsZXQgZWRpdENvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWRpdENvbnRhaW50ZXIuY2xhc3NOYW1lID0gXCJlZGl0LWNvbnRhaW5lclwiO1xyXG4gICAgbGV0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVkaXQuY2xhc3NOYW1lID0gXCJlZGl0XCI7XHJcbiAgICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XHJcbiAgICBlZGl0Q29udGFpbnRlci5hcHBlbmRDaGlsZChlZGl0KTtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJpb3JpdHlDb250YWluZXIuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1jb250YWluZXJcIjtcclxuICAgIGxldCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcclxuICAgIGxldCBwcmlvcml0eVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcmlvcml0eVNsaWRlci5jbGFzc05hbWUgPSBcInByaW9yaXR5LXNsaWRlclwiO1xyXG5cclxuICAgIGxldCBwcmlvcml0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTmFtZSA9IFwicHJpb3JpdHktaWNvblwiO1xyXG4gICAgcHJpb3JpdHlTbGlkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJY29uKTtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHByaW9yaXR5SW5kaWNhdG9yLnRleHRDb250ZW50ID0gXCJ1cmdlbnRcIjtcclxuXHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVRleHQpO1xyXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTbGlkZXIpO1xyXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbmRpY2F0b3IpO1xyXG5cclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEYXRlQ29udGFpbmVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkQ29udGFpbmVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Q29udGFpbnRlcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRzLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld0NhcmQodG9kbyl7XHJcblxyXG4gICAgbGV0IG5ld0NhcmRCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld0NhcmRCYWNrZ3JvdW5kLmlkID0gXCJuZXctY2FyZC1iYWNrXCI7XHJcblxyXG4gICAgbGV0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm5ldy1jYXJkXCI7XHJcblxyXG4gICAgbGV0IHRpdGxlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZURhdGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0aXRsZS1kYXRlLWNvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2FyZFRpdGxlLmNsYXNzTmFtZSA9IFwiY2FyZC10aXRsZVwiO1xyXG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuICAgIGxldCBjYXJkRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2FyZERhdGUuY2xhc3NOYW1lID0gXCJjYXJkLWRhdGVcIjtcclxuICAgIGNhcmREYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xyXG5cclxuICAgIHRpdGxlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgdGl0bGVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcclxuXHJcbiAgICBsZXQgY29tcGxldGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbXBsZXRlZENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWNvbnRhaW5lclwiO1xyXG4gICAgbGV0IGNvbXBsZXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb21wbGV0ZUlucHV0LmNsYXNzTmFtZSA9IFwiY29tcGxldGUtaW5wdXRcIjtcclxuICAgIGNvbXBsZXRlSW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGxldCBjb21wbGV0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbXBsZXRlVGV4dC50ZXh0Q29udGVudCA9IFwiY29tcGxldGVcIjtcclxuICAgIGNvbXBsZXRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcclxuICAgIGNvbXBsZXRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZVRleHQpO1xyXG5cclxuICAgIGxldCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XHJcbiAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBleHBhbmQuY2xhc3NOYW1lID0gXCJleHBhbmRcIjtcclxuICAgIGV4cGFuZC50ZXh0Q29udGVudCA9IFwiZXhwYW5kXCI7ICBcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4cGFuZCk7XHJcblxyXG4gICAgbGV0IGVkaXRDb250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVkaXRDb250YWludGVyLmNsYXNzTmFtZSA9IFwiZWRpdC1jb250YWluZXJcIjtcclxuICAgIGxldCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBlZGl0LmNsYXNzTmFtZSA9IFwiZWRpdFwiO1xyXG4gICAgZWRpdC50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xyXG4gICAgZWRpdENvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZWRpdCk7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJpb3JpdHktY29udGFpbmVyXCI7XHJcbiAgICBsZXQgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBsZXQgcHJpb3JpdHlTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJpb3JpdHlTbGlkZXIuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1zbGlkZXJcIjtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaW9yaXR5SWNvbi5jbGFzc05hbWUgPSBcInByaW9yaXR5LWljb25cIjtcclxuICAgIHByaW9yaXR5U2xpZGVyLmFwcGVuZENoaWxkKHByaW9yaXR5SWNvbik7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5SW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eUluZGljYXRvci50ZXh0Q29udGVudCA9IFwidXJnZW50XCI7XHJcblxyXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U2xpZGVyKTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5kaWNhdG9yKTtcclxuXHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGF0ZUNvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZENvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdENvbnRhaW50ZXIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XHJcblxyXG4gICAgbmV3Q2FyZEJhY2tncm91bmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcilcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChuZXdDYXJkQmFja2dyb3VuZCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7bG9hZENhcmQsIG5ld0NhcmR9OyIsImltcG9ydCB7VG9kbywgUHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdF9jbGFzc2VzLmpzXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJkZWZhdWx0XCIsIDApXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2pJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlUHJvamVjdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuYWN0aXZlUHJvakluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lLCB0aGlzLnByb2plY3RzLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9qSW5kZXggPT09IGluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qSW5kZXgtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKGluZGV4KXtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2pJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvQWN0aXZlKHRvZG8pe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNbdGhpcy5hY3RpdmVQcm9qSW5kZXhdLmFkZFRvZG8odG9kbylcclxuICAgIH1cclxufVxyXG5cclxubGV0IERpciA9IG5ldyBQcm9qZWN0cygpO1xyXG5EaXIuYWRkVG9BY3RpdmUobmV3IFRvZG8oXCJ0aXRsZVwiLCBcIjEyLzMxLzIwMjNcIiwgXCJIZXJlIGlzIHNvbWUgdGV4dFwiLCBcInVyZ2VudFwiKSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyOyIsIlxyXG5jbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb21wbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSl7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG51bU9mUHJvamVjdHMpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pZCA9bnVtT2ZQcm9qZWN0cztcclxuICAgICAgICB0aGlzLm51bUl0ZW1zID0gMDtcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkVG9kbyh0b2RvKXtcclxuICAgICAgICB0aGlzLnRvZG8ucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUb2RvKGluZGV4KXtcclxuICAgICAgICB0aGlzLnRvZG8uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtUb2RvLCBQcm9qZWN0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuanNcIlxyXG5pbXBvcnQgeyBsb2FkUHJvamVjdHNNZW51LCBhZGROZXdQcm9qZWN0SW5wdXQsIHJlcGxhY2VOZXdQcm9qZWN0SW5wdXR9IGZyb20gXCIuL0RPTV9tYW5hZ2VtZW50L3BhZ2VfbGF5b3V0LmpzXCI7XHJcbmltcG9ydCBEaXIgZnJvbSBcIi4vbWFuYWdlX2Rpci5qc1wiO1xyXG5pbXBvcnQgbG9hZFByb2pQYWdlIGZyb20gXCIuL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQge2xvYWRDYXJkLCBuZXdDYXJkfSBmcm9tIFwiLi9ET01fbWFuYWdlbWVudC90b2RvX2NhcmQuanNcIjtcclxuXHJcblxyXG5sb2FkUGFnZSgpO1xyXG5sb2FkUHJvamVjdHNNZW51KERpcik7XHJcbmxvYWRQcm9qUGFnZSgpO1xyXG5sb2FkQ2FyZChEaXIucHJvamVjdHNbMF0udG9kb1swXSk7XHJcblxyXG5cclxuLypcclxuICogQWRkIGV2ZW50IGxpc3RuZXIgZm9yIHRoZSBkZWZhdWx0IHByb2plY3QgaW4gdGhlIGxlZnQgbWVudVxyXG4gKi9cclxubGV0IGRlZmF1bHRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCIwXCJdJyk7XHJcbmRlZmF1bHRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvKiB0b2dnbGUgYWN0aXZlIHByb2plY3QgKi9cclxuICAgIERpci5zZXRBY3RpdmUoZGVmYXVsdFByb2ouZGF0YXNldC5pZCk7XHJcbn0pXHJcblxyXG4vKlxyXG4gKiBFdmVudCBoYW5kbGluZyBmb3IgY3JlYXRpbmcgYSBuZXcgcHJvamVjdFxyXG4gKi9cclxuY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2otYnV0dG9uXCIpO1xyXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZihuZXdQcm9qZWN0QnV0dG9uLnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbnB1dG1vZGUgPT09IFwiZmFsc2VcIil7XHJcbiAgICAgICAgYWRkTmV3UHJvamVjdElucHV0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWlucHV0XCIpLmNoZWNrVmFsaWRpdHkoKSl7XHJcbiAgICAgICAgICAgIGxldCBuZXdQcm9qTmFtZSA9IHJlcGxhY2VOZXdQcm9qZWN0SW5wdXQoKTtcclxuICAgICAgICAgICAgRGlyLmFkZFByb2plY3QobmV3UHJvak5hbWUpO1xyXG5cclxuICAgICAgICAgICAgbG9hZFByb2plY3RzTWVudShEaXIpO1xyXG5cclxuICAgICAgICAgICAgLyogYWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgbmV3IGNyZWF0ZWQgcHJvamVjdCAqL1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRvZ2dsZSBhY3RpdmUgcHJvamVjdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIERpci5zZXRBY3RpdmUoZWxlbWVudC5kYXRhc2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBuZXdDYXJkKERpci5wcm9qZWN0c1swXS50b2RvWzBdKTtcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==