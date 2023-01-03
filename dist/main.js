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
___CSS_LOADER_EXPORT___.push([module.id, "#project-page {\r\n    width: 100%;\r\n    font-family: \"Roboto\";\r\n    --project-header-height: 45px;\r\n}\r\n\r\n#project-header {\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0px 1px 3px var(--shadow);\r\n    height: var(--project-header-height);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n#project-header-name {\r\n    font-size: 1.5rem;\r\n    margin: 0px;\r\n    margin-left: 15px;\r\n}\r\n\r\n#project-content {\r\n    --checklist-width: 250px;\r\n    height: calc(100% - var(--project-header-height));\r\n    display: grid;\r\n    grid-template-columns: 1fr var(--checklist-width);\r\n}\r\n\r\n#cards-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\r\n    grid-template-rows: 215px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#new-todo {\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: 2rem;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 270px;\r\n}\r\n\r\n#new-todo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#checklist-container {\r\n    background-color: white;\r\n    box-shadow: -1px 0px 3px var(--shadow);\r\n}", "",{"version":3,"sources":["webpack://./src/DOM_management/render_active_project.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,qCAAqC;IACrC,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,iDAAiD;IACjD,aAAa;IACb,iDAAiD;AACrD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,2DAA2D;IAC3D,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,sCAAsC;AAC1C","sourcesContent":["@import url(\"./styles.css\");\r\n\r\n#project-page {\r\n    width: 100%;\r\n    font-family: \"Roboto\";\r\n    --project-header-height: 45px;\r\n}\r\n\r\n#project-header {\r\n    width: 100%;\r\n    background-color: white;\r\n    box-shadow: 0px 1px 3px var(--shadow);\r\n    height: var(--project-header-height);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n#project-header-name {\r\n    font-size: 1.5rem;\r\n    margin: 0px;\r\n    margin-left: 15px;\r\n}\r\n\r\n#project-content {\r\n    --checklist-width: 250px;\r\n    height: calc(100% - var(--project-header-height));\r\n    display: grid;\r\n    grid-template-columns: 1fr var(--checklist-width);\r\n}\r\n\r\n#cards-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\r\n    grid-template-rows: 215px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#new-todo {\r\n    background-color: blue;\r\n    color: white;\r\n    font-size: 2rem;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 270px;\r\n}\r\n\r\n#new-todo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#checklist-container {\r\n    background-color: white;\r\n    box-shadow: -1px 0px 3px var(--shadow);\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-style: normal;\r\n    font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    font-style: normal;\r\n    font-weight: bold;\r\n}\r\n\r\n* {\r\n    --primary: #FC4A4A;\r\n    --light-background: #fed3d3; /*#FFEBEB #fffafa*/\r\n    --accent: #528E7C;\r\n    --light-accent: #7dc0ac;\r\n    --shadow: #fb9999; /*#f9c1c1  #fddddd*/\r\n}\r\n\r\nbody {\r\n    margin: 0px;\r\n    height: 100vh;\r\n    font-family: \"Roboto\";\r\n    background-color: var(--light-background);\r\n}\r\n\r\n#test:invalid {\r\n    border: 2px solid red;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/DOM_management/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAA+C;IAC/C,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,4CAA4C;IAC5C,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B,EAAE,kBAAkB;IAC/C,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB,EAAE,mBAAmB;AAC1C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,yCAAyC;AAC7C;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(\"../assets/Roboto/Roboto-Regular.ttf\");\r\n    font-style: normal;\r\n    font-weight: 500;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Roboto\";\r\n    src: url(\"../assets/Roboto/Roboto-Bold.ttf\");\r\n    font-style: normal;\r\n    font-weight: bold;\r\n}\r\n\r\n* {\r\n    --primary: #FC4A4A;\r\n    --light-background: #fed3d3; /*#FFEBEB #fffafa*/\r\n    --accent: #528E7C;\r\n    --light-accent: #7dc0ac;\r\n    --shadow: #fb9999; /*#f9c1c1  #fddddd*/\r\n}\r\n\r\nbody {\r\n    margin: 0px;\r\n    height: 100vh;\r\n    font-family: \"Roboto\";\r\n    background-color: var(--light-background);\r\n}\r\n\r\n#test:invalid {\r\n    border: 2px solid red;\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".card {\r\n    background-color: white;\r\n    width: 260px;\r\n    height: 170px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 3px var(--shadow);\r\n}\r\n\r\n.card-title {\r\n    font-size: 1rem;\r\n    margin: 0px;\r\n}\r\n\r\n.card-date {\r\n    font-size: 0.8rem;\r\n    margin-top: 0px;\r\n    color: var(--accent);\r\n}\r\n\r\n.complete-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.complete-input {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin: 0px 5px 0px 0px;\r\n}\r\n\r\n.complete-container > p {\r\n    margin: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.description-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    position: relative;\r\n}\r\n\r\n.description {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 0px;\r\n    margin-top: 0px;\r\n    width: 100%;\r\n    height: 75%;\r\n    overflow-wrap: break-word;\r\n    white-space: pre-wrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.overflow-marker {\r\n    position: absolute;\r\n    color: gray;\r\n    font-size: 1.2rem;\r\n    margin: 0px;\r\n    margin-top: -5px;\r\n}\r\n\r\n.edit-container {\r\n    position: relative;\r\n    color: gray;\r\n}\r\n\r\n.edit {\r\n    height: 20px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.expand {\r\n    height: 20px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 30px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.priority-container {\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    width: 100px;\r\n    justify-self: end;\r\n}\r\n\r\n.priority-container > p:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.priority-slider {\r\n    background-color: var(--light-background);\r\n    width: 60px;\r\n    height: 20px;\r\n    border-radius: 12px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.priority-icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n    margin: 2px;\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n\r\n.priority-container > p:nth-child(3){\r\n    margin: 0px;\r\n    height: 24px;\r\n    margin-left: 5px;\r\n    font-size: 0.8rem;\r\n    line-height: 24px;\r\n    color: red;\r\n}\r\n\r\n#new-card-back {\r\n    background-color: red;\r\n    background: rgba(255, 0, 0, 0.05);\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 0px;\r\n    backdrop-filter: blur(5px);\r\n}\r\n\r\n.new-card {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    width: 600px;\r\n    height: 400px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 10px;\r\n}\r\n\r\n.edit-card.close-button-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.edit-card.close-button {\r\n    margin:0px;\r\n    margin-bottom: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 1.1rem;\r\n    transition: 0.1s;\r\n}\r\n\r\n.edit-card.close-button:hover {\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.edit-card.title-date-container {\r\n    height: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n}\r\n\r\n.edit-card.card-title:invalid {\r\n    border: 5px solid red;\r\n}\r\n\r\n.edit-card.card-date {\r\n    width: 100px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.edit-card.description-container{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.edit-card.description {\r\n    width: 100%;\r\n    height: 200px;\r\n    resize: none;\r\n    margin-top: 5px;\r\n}\r\n\r\n.edit-card.priority-container {\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 20px;\r\n    width: 110px;\r\n}\r\n\r\n#submit-card {\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    width: 80px;\r\n    height: 24px;\r\n    border-radius: 12px;\r\n    border: none;\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n\r\n#submit-card:hover {\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/DOM_management/todo_card.css"],"names":[],"mappings":"AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,iCAAiC;IACjC,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,QAAQ;IACR,SAAS;IACT,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["@import url(\"./styles.css\");\r\n\r\n.card {\r\n    background-color: white;\r\n    width: 260px;\r\n    height: 170px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: grid;\r\n    grid-template: 40px 60px 1fr / 1fr 1fr;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 3px var(--shadow);\r\n}\r\n\r\n.card-title {\r\n    font-size: 1rem;\r\n    margin: 0px;\r\n}\r\n\r\n.card-date {\r\n    font-size: 0.8rem;\r\n    margin-top: 0px;\r\n    color: var(--accent);\r\n}\r\n\r\n.complete-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.complete-input {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin: 0px 5px 0px 0px;\r\n}\r\n\r\n.complete-container > p {\r\n    margin: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.description-container {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    position: relative;\r\n}\r\n\r\n.description {\r\n    font-size: 0.8rem;\r\n    margin-bottom: 0px;\r\n    margin-top: 0px;\r\n    width: 100%;\r\n    height: 75%;\r\n    overflow-wrap: break-word;\r\n    white-space: pre-wrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.overflow-marker {\r\n    position: absolute;\r\n    color: gray;\r\n    font-size: 1.2rem;\r\n    margin: 0px;\r\n    margin-top: -5px;\r\n}\r\n\r\n.edit-container {\r\n    position: relative;\r\n    color: gray;\r\n}\r\n\r\n.edit {\r\n    height: 20px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.expand {\r\n    height: 20px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 30px;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.priority-container {\r\n    display: grid;\r\n    grid-template: 1fr 1fr / 1fr 1fr;\r\n    width: 100px;\r\n    justify-self: end;\r\n}\r\n\r\n.priority-container > p:nth-child(1) {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.priority-slider {\r\n    background-color: var(--light-background);\r\n    width: 60px;\r\n    height: 20px;\r\n    border-radius: 12px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n.priority-icon {\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n    margin: 2px;\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n\r\n.priority-container > p:nth-child(3){\r\n    margin: 0px;\r\n    height: 24px;\r\n    margin-left: 5px;\r\n    font-size: 0.8rem;\r\n    line-height: 24px;\r\n    color: red;\r\n}\r\n\r\n#new-card-back {\r\n    background-color: red;\r\n    background: rgba(255, 0, 0, 0.05);\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1000;\r\n    top: 0px;\r\n    left: 0px;\r\n    backdrop-filter: blur(5px);\r\n}\r\n\r\n.new-card {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    width: 600px;\r\n    height: 400px;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 10px;\r\n}\r\n\r\n.edit-card.close-button-container {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n.edit-card.close-button {\r\n    margin:0px;\r\n    margin-bottom: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 1.1rem;\r\n    transition: 0.1s;\r\n}\r\n\r\n.edit-card.close-button:hover {\r\n    cursor: pointer;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.edit-card.title-date-container {\r\n    height: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n}\r\n\r\n.edit-card.card-title:invalid {\r\n    border: 5px solid red;\r\n}\r\n\r\n.edit-card.card-date {\r\n    width: 100px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.edit-card.description-container{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.edit-card.description {\r\n    width: 100%;\r\n    height: 200px;\r\n    resize: none;\r\n    margin-top: 5px;\r\n}\r\n\r\n.edit-card.priority-container {\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 20px;\r\n    width: 110px;\r\n}\r\n\r\n#submit-card {\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 20px;\r\n    width: 80px;\r\n    height: 24px;\r\n    border-radius: 12px;\r\n    border: none;\r\n    background-color: blue;\r\n    color: white;\r\n}\r\n\r\n#submit-card:hover {\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "newCard": () => (/* binding */ newCard),
/* harmony export */   "removeEditCard": () => (/* binding */ removeEditCard)
/* harmony export */ });
/* harmony import */ var _todo_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_card.css */ "./src/DOM_management/todo_card.css");



function loadCard(todo, index){

    let cardContainer = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.setAttribute("data-index", index);

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
    let desc = todo.description;
    let desclength = 200;
    
    if (desc.length > desclength){
        desc = desc.substring(0, desclength);
        desc += "   . . .";
    }
    description.textContent = desc;
     
    descriptionContainer.appendChild(description);
    

    let editContainter = document.createElement("div");
    editContainter.className = "edit-container";
    let edit = document.createElement("p");
    edit.className = "edit";
    edit.textContent = "edit";
    editContainter.appendChild(edit);
    let expand = document.createElement("p");
    expand.className = "expand";
    expand.textContent = "expand";
    editContainter.appendChild(expand);

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

    /* add ... to bottom of description if there is overflow */
    let descBox = document.querySelector(`[data-index="${index}"]`).children[2];
    if (descBox.firstChild.clientHeight < descBox.firstChild.scrollHeight){
        let overflowMarker = document.createElement("p");
        overflowMarker.textContent = " . . .";
        overflowMarker.className = "overflow-marker";
        descBox.appendChild(overflowMarker);

    }
    
    

}


function newCard(todo){

    let newCardBackground = document.createElement("div");
    newCardBackground.id = "new-card-back";

    let closeCard = document.createElement("div");
    closeCard.classList.add("edit-card");
    closeCard.classList.add("close-button-container");
    let p = document.createElement("p");
    p.classList.add("edit-card");
    p.classList.add("close-button");
    p.textContent = "x";
    closeCard.appendChild(p);

    let cardContainer = document.createElement("div");
    cardContainer.className = "new-card";

    let titleDateContainer = document.createElement("div");
    titleDateContainer.classList.add("edit-card");
    titleDateContainer.classList.add("title-date-container")
    let cardTitle = document.createElement("input");
    cardTitle.pattern = "[\\w\\d ]*";
    cardTitle.type = "text";
    cardTitle.classList.add("edit-card");
    cardTitle.classList.add("card-title");

    let cardDate = document.createElement("input");
    cardDate.type = "date";
    cardDate.classList.add("edit-card");
    cardDate.classList.add("card-date");

    titleDateContainer.appendChild(cardTitle);
    titleDateContainer.appendChild(cardDate);


    let descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("edit-card");
    descriptionContainer.classList.add("description-container");
    let description = document.createElement("textarea");
    description.classList.add("edit-card");
    description.classList.add("description");
    description.placeholder = "description"; //------
    descriptionContainer.appendChild(description);


    let priorityContainer = document.createElement("div");
    priorityContainer.classList.add("edit-card");
    priorityContainer.classList.add("priority-container");
    let priorityText = document.createElement("p");
    priorityText.textContent = "Priority";
    let prioritySlider = document.createElement("div");
    prioritySlider.classList.add("edit-card");
    prioritySlider.classList.add("priority-slider");

    let priorityIcon = document.createElement("div");
    priorityIcon.classList.add("edit-card");
    priorityIcon.classList.add("priority-icon");
    prioritySlider.appendChild(priorityIcon);

    let priorityIndicator = document.createElement("p");
    priorityIndicator.textContent = "urgent";

    priorityContainer.appendChild(priorityText);
    priorityContainer.appendChild(prioritySlider);
    priorityContainer.appendChild(priorityIndicator);

    let submit = document.createElement("button");
    submit.id = "submit-card";
    submit.textContent = "add Todo";

    cardContainer.appendChild(closeCard);
    cardContainer.appendChild(titleDateContainer);
    cardContainer.appendChild(descriptionContainer);
    cardContainer.appendChild(priorityContainer);
    cardContainer.appendChild(submit);

    newCardBackground.appendChild(cardContainer)

    document.querySelector("body").appendChild(newCardBackground);
}

function removeEditCard(){
    document.getElementById("new-card-back").remove();
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
        this.numItems++;
    }

    removeTodo(index){
        this.todo.splice(index, 1);
        this.numItems--;
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
/* harmony import */ var _project_classes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project_classes.js */ "./src/project_classes.js");








(0,_DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_DOM_management_page_layout_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectsMenu)(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_DOM_management_render_active_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])();


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

/* event listener for new-todo button */
document.getElementById("new-todo").addEventListener("click", () => {
    (0,_DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__.newCard)(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].projects[0].todo[0]);
    
    document.getElementById("submit-card").onclick = () => {
        
        let titleNode = document.querySelector(".edit-card.card-title");
        if (titleNode.checkValidity() && titleNode.value.length > 0){
            _manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToActive(new _project_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo(titleNode.value,
                                    document.querySelector(".edit-card.card-date").value,
                                    document.querySelector(".edit-card.description").value,
                                    "high"
                                    ))
            ;(0,_DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__.removeEditCard)();
            (0,_DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__.loadCard)(_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].activeProject().todo[_manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].activeProject().numItems-1], _manage_dir_js__WEBPACK_IMPORTED_MODULE_1__["default"].activeProject().todo.length-1);
        }
    }

    document.querySelector(".edit-card.close-button").onclick = () => {
        ;(0,_DOM_management_todo_card_js__WEBPACK_IMPORTED_MODULE_3__.removeEditCard)();
    }
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDYTtBQUN6Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBCQUEwQix1RkFBaUM7QUFDM0Q7QUFDQSxrREFBa0QsbUJBQW1CLHlDQUF5QyxzQkFBc0IscUNBQXFDLDBCQUEwQixLQUFLLGtCQUFrQixvQkFBb0IscUJBQXFCLEtBQUsscUJBQXFCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGtCQUFrQixLQUFLLHNCQUFzQixvQkFBb0IscUJBQXFCLHlCQUF5QixLQUFLLHdCQUF3QixvQkFBb0IsS0FBSyw0QkFBNEIsb0JBQW9CLHFCQUFxQixLQUFLLGtCQUFrQixvQkFBb0Isc0JBQXNCLEtBQUssb0JBQW9CLHdCQUF3QixnQ0FBZ0MscUJBQXFCLDhDQUE4QyxnQ0FBZ0MsOENBQThDLDJDQUEyQywyQkFBMkIscUJBQXFCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLDRCQUE0Qiw0QkFBNEIsMEJBQTBCLEtBQUssZ0NBQWdDLHFCQUFxQiwyQkFBMkIsMEJBQTBCLHlCQUF5QixLQUFLLHNDQUFzQyw4Q0FBOEMsMEJBQTBCLHdCQUF3QixLQUFLLDRCQUE0QiwwQkFBMEIsS0FBSyxnQ0FBZ0MsMEJBQTBCLDBCQUEwQixrQ0FBa0MsbUJBQW1CLHlCQUF5QiwyQkFBMkIsS0FBSyw0QkFBNEIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IscUJBQXFCLDJCQUEyQiwyQkFBMkIsS0FBSyw2Q0FBNkMsOEJBQThCLEtBQUssa0NBQWtDLDhDQUE4QywwQkFBMEIsd0JBQXdCLEtBQUssc0JBQXNCLDBCQUEwQixxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsMEJBQTBCLHlCQUF5QixLQUFLLDBCQUEwQiwyQkFBMkIsMkJBQTJCLEtBQUssNEJBQTRCLHFCQUFxQixLQUFLLDBCQUEwQixvQkFBb0IscUJBQXFCLDBCQUEwQiwwQkFBMEIsMkJBQTJCLGFBQWEsNEJBQTRCLHdCQUF3QiwwQkFBMEIsS0FBSyx1QkFBdUIscUdBQXFHLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLHdEQUF3RCxnQkFBZ0IsbUJBQW1CLHlDQUF5QyxzQkFBc0IscUNBQXFDLDBCQUEwQixLQUFLLGtCQUFrQixvQkFBb0IscUJBQXFCLEtBQUsscUJBQXFCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLEtBQUssb0JBQW9CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGtCQUFrQixLQUFLLHNCQUFzQixvQkFBb0IscUJBQXFCLHlCQUF5QixLQUFLLHdCQUF3QixvQkFBb0IsS0FBSyw0QkFBNEIsb0JBQW9CLHFCQUFxQixLQUFLLGtCQUFrQixvQkFBb0Isc0JBQXNCLEtBQUssb0JBQW9CLHdCQUF3QixnQ0FBZ0MscUJBQXFCLDhDQUE4QyxnQ0FBZ0MsOENBQThDLDJDQUEyQywyQkFBMkIscUJBQXFCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLDRCQUE0Qiw0QkFBNEIsMEJBQTBCLEtBQUssZ0NBQWdDLHFCQUFxQiwyQkFBMkIsMEJBQTBCLHlCQUF5QixLQUFLLHNDQUFzQyw4Q0FBOEMsMEJBQTBCLHdCQUF3QixLQUFLLDRCQUE0QiwwQkFBMEIsS0FBSyxnQ0FBZ0MsMEJBQTBCLDBCQUEwQixrQ0FBa0MsbUJBQW1CLHlCQUF5QiwyQkFBMkIsS0FBSyw0QkFBNEIsc0JBQXNCLHVDQUF1Qyx3QkFBd0IscUJBQXFCLDJCQUEyQiwyQkFBMkIsS0FBSyw2Q0FBNkMsOEJBQThCLEtBQUssa0NBQWtDLDhDQUE4QywwQkFBMEIsd0JBQXdCLEtBQUssc0JBQXNCLDBCQUEwQixxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsMEJBQTBCLHlCQUF5QixLQUFLLDBCQUEwQiwyQkFBMkIsMkJBQTJCLEtBQUssNEJBQTRCLHFCQUFxQixLQUFLLDBCQUEwQixvQkFBb0IscUJBQXFCLDBCQUEwQiwwQkFBMEIsMkJBQTJCLGFBQWEsNEJBQTRCLHdCQUF3QiwwQkFBMEIsS0FBSyxtQ0FBbUM7QUFDL29OO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHZDO0FBQzZHO0FBQ2pCO0FBQ2E7QUFDekcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIsdUZBQWlDO0FBQzNEO0FBQ0EseURBQXlELG9CQUFvQixnQ0FBZ0Msc0NBQXNDLEtBQUsseUJBQXlCLG9CQUFvQixnQ0FBZ0MsOENBQThDLDZDQUE2QyxzQkFBc0IsNEJBQTRCLDJCQUEyQixxQkFBcUIsS0FBSyw4QkFBOEIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsS0FBSywwQkFBMEIsaUNBQWlDLDBEQUEwRCxzQkFBc0IsMERBQTBELEtBQUssMEJBQTBCLG9CQUFvQixxQkFBcUIsc0JBQXNCLG9FQUFvRSxrQ0FBa0MseUJBQXlCLEtBQUssbUJBQW1CLCtCQUErQixxQkFBcUIsd0JBQXdCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsNEJBQTRCLDJCQUEyQixxQkFBcUIscUJBQXFCLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLDhCQUE4QixnQ0FBZ0MsK0NBQStDLEtBQUssT0FBTywrR0FBK0csVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLHdEQUF3RCx1QkFBdUIsb0JBQW9CLGdDQUFnQyxzQ0FBc0MsS0FBSyx5QkFBeUIsb0JBQW9CLGdDQUFnQyw4Q0FBOEMsNkNBQTZDLHNCQUFzQiw0QkFBNEIsMkJBQTJCLHFCQUFxQixLQUFLLDhCQUE4QiwwQkFBMEIsb0JBQW9CLDBCQUEwQixLQUFLLDBCQUEwQixpQ0FBaUMsMERBQTBELHNCQUFzQiwwREFBMEQsS0FBSywwQkFBMEIsb0JBQW9CLHFCQUFxQixzQkFBc0Isb0VBQW9FLGtDQUFrQyx5QkFBeUIsS0FBSyxtQkFBbUIsK0JBQStCLHFCQUFxQix3QkFBd0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsZ0NBQWdDLDRCQUE0Qiw0QkFBNEIsMkJBQTJCLHFCQUFxQixxQkFBcUIsS0FBSyx5QkFBeUIsd0JBQXdCLEtBQUssOEJBQThCLGdDQUFnQywrQ0FBK0MsS0FBSyxtQkFBbUI7QUFDeC9HO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxrSkFBc0Q7QUFDbEcsNENBQTRDLDRJQUFtRDtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCxnQ0FBZ0MsNkRBQTZELDJCQUEyQix5QkFBeUIsS0FBSyxvQkFBb0IsZ0NBQWdDLDZEQUE2RCwyQkFBMkIsMEJBQTBCLEtBQUssV0FBVywyQkFBMkIscUNBQXFDLDZDQUE2QyxnQ0FBZ0MsMkJBQTJCLHlCQUF5QixjQUFjLG9CQUFvQixzQkFBc0IsZ0NBQWdDLGtEQUFrRCxLQUFLLHVCQUF1Qiw4QkFBOEIsS0FBSyxXQUFXLGdHQUFnRyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLHlCQUF5QixhQUFhLGFBQWEseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLHNDQUFzQyxnQ0FBZ0MsMERBQTBELDJCQUEyQix5QkFBeUIsS0FBSyxvQkFBb0IsZ0NBQWdDLHVEQUF1RCwyQkFBMkIsMEJBQTBCLEtBQUssV0FBVywyQkFBMkIscUNBQXFDLDZDQUE2QyxnQ0FBZ0MsMkJBQTJCLHlCQUF5QixjQUFjLG9CQUFvQixzQkFBc0IsZ0NBQWdDLGtEQUFrRCxLQUFLLHVCQUF1Qiw4QkFBOEIsS0FBSyx1QkFBdUI7QUFDeDZEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnZDO0FBQzZHO0FBQ2pCO0FBQ2E7QUFDekcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwwQkFBMEIsdUZBQWlDO0FBQzNEO0FBQ0EsaURBQWlELGdDQUFnQyxxQkFBcUIsc0JBQXNCLHFCQUFxQixzQkFBc0IsNEJBQTRCLHNCQUFzQiwrQ0FBK0MsNEJBQTRCLDhDQUE4QyxLQUFLLHFCQUFxQix3QkFBd0Isb0JBQW9CLEtBQUssb0JBQW9CLDBCQUEwQix3QkFBd0IsNkJBQTZCLEtBQUssNkJBQTZCLHNCQUFzQiwrQkFBK0IsS0FBSyx5QkFBeUIscUJBQXFCLG9CQUFvQixnQ0FBZ0MsS0FBSyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixLQUFLLGdDQUFnQyw2QkFBNkIsMkJBQTJCLDJCQUEyQixLQUFLLHNCQUFzQiwwQkFBMEIsMkJBQTJCLHdCQUF3QixvQkFBb0Isb0JBQW9CLGtDQUFrQyw4QkFBOEIseUJBQXlCLEtBQUssMEJBQTBCLDJCQUEyQixvQkFBb0IsMEJBQTBCLG9CQUFvQix5QkFBeUIsS0FBSyx5QkFBeUIsMkJBQTJCLG9CQUFvQixLQUFLLGVBQWUscUJBQXFCLDJCQUEyQixvQkFBb0IsMEJBQTBCLEtBQUssaUJBQWlCLHFCQUFxQiwyQkFBMkIsb0JBQW9CLG1CQUFtQiwwQkFBMEIsS0FBSyw2QkFBNkIsc0JBQXNCLHlDQUF5QyxxQkFBcUIsMEJBQTBCLEtBQUssOENBQThDLDZCQUE2QiwyQkFBMkIsMkJBQTJCLDJCQUEyQiwwQkFBMEIsS0FBSywwQkFBMEIsa0RBQWtELG9CQUFvQixxQkFBcUIsNEJBQTRCLHNCQUFzQiwyQ0FBMkMsS0FBSyx3QkFBd0Isb0JBQW9CLHFCQUFxQiw4QkFBOEIsNEJBQTRCLG9CQUFvQiw2QkFBNkIsMkJBQTJCLEtBQUssNkNBQTZDLG9CQUFvQixxQkFBcUIseUJBQXlCLDBCQUEwQiwwQkFBMEIsbUJBQW1CLEtBQUssd0JBQXdCLDhCQUE4QiwwQ0FBMEMsMkJBQTJCLHNCQUFzQixxQkFBcUIsc0JBQXNCLGlCQUFpQixrQkFBa0IsbUNBQW1DLEtBQUssbUJBQW1CLDJCQUEyQixrQkFBa0IsaUJBQWlCLHlDQUF5QyxnQ0FBZ0MscUJBQXFCLHNCQUFzQixxQkFBcUIsc0JBQXNCLDRCQUE0QixzQkFBc0IsK0JBQStCLDRCQUE0QixLQUFLLDJDQUEyQyxzQkFBc0IsK0JBQStCLEtBQUssaUNBQWlDLG1CQUFtQiw0QkFBNEIsb0JBQW9CLHFCQUFxQiwwQkFBMEIseUJBQXlCLEtBQUssdUNBQXVDLHdCQUF3QiwwQkFBMEIsS0FBSyx5Q0FBeUMscUJBQXFCLHNCQUFzQiwrQkFBK0IsOEJBQThCLEtBQUssdUNBQXVDLDhCQUE4QixLQUFLLDhCQUE4QixxQkFBcUIsd0JBQXdCLEtBQUsseUNBQXlDLHNCQUFzQixnQ0FBZ0MsS0FBSyxnQ0FBZ0Msb0JBQW9CLHNCQUFzQixxQkFBcUIsd0JBQXdCLEtBQUssdUNBQXVDLDJCQUEyQixtQkFBbUIscUJBQXFCLHFCQUFxQixLQUFLLHNCQUFzQiwyQkFBMkIsb0JBQW9CLHFCQUFxQixvQkFBb0IscUJBQXFCLDRCQUE0QixxQkFBcUIsK0JBQStCLHFCQUFxQixLQUFLLDRCQUE0Qix3QkFBd0IsS0FBSyxPQUFPLG1HQUFtRyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsd0RBQXdELGVBQWUsZ0NBQWdDLHFCQUFxQixzQkFBc0IscUJBQXFCLHNCQUFzQiw0QkFBNEIsc0JBQXNCLCtDQUErQyw0QkFBNEIsOENBQThDLEtBQUsscUJBQXFCLHdCQUF3QixvQkFBb0IsS0FBSyxvQkFBb0IsMEJBQTBCLHdCQUF3Qiw2QkFBNkIsS0FBSyw2QkFBNkIsc0JBQXNCLCtCQUErQixLQUFLLHlCQUF5QixxQkFBcUIsb0JBQW9CLGdDQUFnQyxLQUFLLGlDQUFpQyxvQkFBb0IsMEJBQTBCLEtBQUssZ0NBQWdDLDZCQUE2QiwyQkFBMkIsMkJBQTJCLEtBQUssc0JBQXNCLDBCQUEwQiwyQkFBMkIsd0JBQXdCLG9CQUFvQixvQkFBb0Isa0NBQWtDLDhCQUE4Qix5QkFBeUIsS0FBSywwQkFBMEIsMkJBQTJCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLHlCQUF5QixLQUFLLHlCQUF5QiwyQkFBMkIsb0JBQW9CLEtBQUssZUFBZSxxQkFBcUIsMkJBQTJCLG9CQUFvQiwwQkFBMEIsS0FBSyxpQkFBaUIscUJBQXFCLDJCQUEyQixvQkFBb0IsbUJBQW1CLDBCQUEwQixLQUFLLDZCQUE2QixzQkFBc0IseUNBQXlDLHFCQUFxQiwwQkFBMEIsS0FBSyw4Q0FBOEMsNkJBQTZCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDBCQUEwQixLQUFLLDBCQUEwQixrREFBa0Qsb0JBQW9CLHFCQUFxQiw0QkFBNEIsc0JBQXNCLDJDQUEyQyxLQUFLLHdCQUF3QixvQkFBb0IscUJBQXFCLDhCQUE4Qiw0QkFBNEIsb0JBQW9CLDZCQUE2QiwyQkFBMkIsS0FBSyw2Q0FBNkMsb0JBQW9CLHFCQUFxQix5QkFBeUIsMEJBQTBCLDBCQUEwQixtQkFBbUIsS0FBSyx3QkFBd0IsOEJBQThCLDBDQUEwQywyQkFBMkIsc0JBQXNCLHFCQUFxQixzQkFBc0IsaUJBQWlCLGtCQUFrQixtQ0FBbUMsS0FBSyxtQkFBbUIsMkJBQTJCLGtCQUFrQixpQkFBaUIseUNBQXlDLGdDQUFnQyxxQkFBcUIsc0JBQXNCLHFCQUFxQixzQkFBc0IsNEJBQTRCLHNCQUFzQiwrQkFBK0IsNEJBQTRCLEtBQUssMkNBQTJDLHNCQUFzQiwrQkFBK0IsS0FBSyxpQ0FBaUMsbUJBQW1CLDRCQUE0QixvQkFBb0IscUJBQXFCLDBCQUEwQix5QkFBeUIsS0FBSyx1Q0FBdUMsd0JBQXdCLDBCQUEwQixLQUFLLHlDQUF5QyxxQkFBcUIsc0JBQXNCLCtCQUErQiw4QkFBOEIsS0FBSyx1Q0FBdUMsOEJBQThCLEtBQUssOEJBQThCLHFCQUFxQix3QkFBd0IsS0FBSyx5Q0FBeUMsc0JBQXNCLGdDQUFnQyxLQUFLLGdDQUFnQyxvQkFBb0Isc0JBQXNCLHFCQUFxQix3QkFBd0IsS0FBSyx1Q0FBdUMsMkJBQTJCLG1CQUFtQixxQkFBcUIscUJBQXFCLEtBQUssc0JBQXNCLDJCQUEyQixvQkFBb0IscUJBQXFCLG9CQUFvQixxQkFBcUIsNEJBQTRCLHFCQUFxQiwrQkFBK0IscUJBQXFCLEtBQUssNEJBQTRCLHdCQUF3QixLQUFLLG1CQUFtQjtBQUNseFY7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNUMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBNEc7QUFDNUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0RkFBTzs7OztBQUlzRDtBQUM5RSxPQUFPLGlFQUFlLDRGQUFPLElBQUksbUdBQWMsR0FBRyxtR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzSDtBQUN0SDtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNHQUFPOzs7O0FBSWdFO0FBQ3hGLE9BQU8saUVBQWUsc0dBQU8sSUFBSSw2R0FBYyxHQUFHLDZHQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLGlHQUFjLEdBQUcsaUdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ1k7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S1c7QUFDYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERHO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxNQUFNO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDd0Q7QUFDNUU7QUFDbUM7QUFDVztBQUM3QjtBQUNuRDtBQUNBO0FBQ0EsMEVBQVE7QUFDUixnRkFBZ0IsQ0FBQyxzREFBRztBQUNwQixvRkFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0ZBQWtCO0FBQzFCLE1BQU07QUFDTjtBQUNBLDhCQUE4QixzRkFBc0I7QUFDcEQsWUFBWSxpRUFBYztBQUMxQjtBQUNBLFlBQVksZ0ZBQWdCLENBQUMsc0RBQUc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnRUFBYTtBQUNqQyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBTyxDQUFDLDBFQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrRUFBZSxLQUFLLHFEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2RUFBYztBQUMxQixZQUFZLHNFQUFRLENBQUMsb0VBQWlCLFFBQVEsb0VBQWlCLGdCQUFnQixvRUFBaUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUFjO0FBQ3RCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC9wYWdlX2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3RvZG9fY2FyZC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC9wYWdlX2xheW91dC5jc3M/Y2ViNiIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzcz8wOWY5Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9ET01fbWFuYWdlbWVudC90b2RvX2NhcmQuY3NzPzE1MTkiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvRE9NX21hbmFnZW1lbnQvdG9kb19jYXJkLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tYW5hZ2VfZGlyLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9wcm9qZWN0X2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA4JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGEge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGE6aG92ZXIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogOTIlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1tZW51IHtcXHJcXG4gICAgLS1wYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXBhZGRpbmcpKjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwcHggLTVweCAwcHggMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LW1lbnUgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmYXVsdC1zZWxlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXNlbGVjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zZWxlY3Rpb24gPiBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSlcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIC5wcm9qZWN0ID4gKjpudGgtY2hpbGQoMikge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyAucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0ID4gcCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvai1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET01fbWFuYWdlbWVudC9wYWdlX2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiLi9zdHlsZXMuY3NzXFxcIik7XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA4JTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGEge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lnbml0dXJlIGE6aG92ZXIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogOTIlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1tZW51IHtcXHJcXG4gICAgLS1wYWRkaW5nOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXBhZGRpbmcpKjIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgY2xpcC1wYXRoOiBpbnNldCgwcHggLTVweCAwcHggMHB4KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1MDA7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LW1lbnUgcCB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVmYXVsdC1zZWxlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuI2RlZmF1bHQtc2VsZWN0aW9uID4gKjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LXNlbGVjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1zZWxlY3Rpb24gPiBwIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSlcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7ICBcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIC5wcm9qZWN0ID4gKjpudGgtY2hpbGQoMikge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyAucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWFjY2VudCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0ID4gcCB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LXByb2plY3QtaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvai1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjcHJvamVjdC1wYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtaGVhZGVyLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1jb250ZW50IHtcXHJcXG4gICAgLS1jaGVja2xpc3Qtd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXByb2plY3QtaGVhZGVyLWhlaWdodCkpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciB2YXIoLS1jaGVja2xpc3Qtd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNDBweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjE1cHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNuZXctdG9kbyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAyNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10b2RvOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hlY2tsaXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAtMXB4IDBweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0RPTV9tYW5hZ2VtZW50L3JlbmRlcl9hY3RpdmVfcHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaURBQWlEO0lBQ2pELGFBQWE7SUFDYixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0NBQXNDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCIuL3N0eWxlcy5jc3NcXFwiKTtcXHJcXG5cXHJcXG4jcHJvamVjdC1wYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0LWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1wcm9qZWN0LWhlYWRlci1oZWlnaHQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtaGVhZGVyLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1jb250ZW50IHtcXHJcXG4gICAgLS1jaGVja2xpc3Qtd2lkdGg6IDI1MHB4O1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXByb2plY3QtaGVhZGVyLWhlaWdodCkpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciB2YXIoLS1jaGVja2xpc3Qtd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNDBweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjE1cHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNuZXctdG9kbyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDIwcHg7XFxyXFxuICAgIHJpZ2h0OiAyNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ldy10b2RvOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2hlY2tsaXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAtMXB4IDBweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9Sb2JvdG8vUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICAtLXByaW1hcnk6ICNGQzRBNEE7XFxyXFxuICAgIC0tbGlnaHQtYmFja2dyb3VuZDogI2ZlZDNkMzsgLyojRkZFQkVCICNmZmZhZmEqL1xcclxcbiAgICAtLWFjY2VudDogIzUyOEU3QztcXHJcXG4gICAgLS1saWdodC1hY2NlbnQ6ICM3ZGMwYWM7XFxyXFxuICAgIC0tc2hhZG93OiAjZmI5OTk5OyAvKiNmOWMxYzEgICNmZGRkZGQqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbiN0ZXN0OmludmFsaWQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET01fbWFuYWdlbWVudC9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQixFQUFFLGtCQUFrQjtJQUMvQyxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQixFQUFFLG1CQUFtQjtBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcXFwiKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL1JvYm90by9Sb2JvdG8tQm9sZC50dGZcXFwiKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIC0tcHJpbWFyeTogI0ZDNEE0QTtcXHJcXG4gICAgLS1saWdodC1iYWNrZ3JvdW5kOiAjZmVkM2QzOyAvKiNGRkVCRUIgI2ZmZmFmYSovXFxyXFxuICAgIC0tYWNjZW50OiAjNTI4RTdDO1xcclxcbiAgICAtLWxpZ2h0LWFjY2VudDogIzdkYzBhYztcXHJcXG4gICAgLS1zaGFkb3c6ICNmYjk5OTk7IC8qI2Y5YzFjMSAgI2ZkZGRkZCovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1iYWNrZ3JvdW5kKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rlc3Q6aW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAyNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNzBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA0MHB4IDYwcHggMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggdmFyKC0tc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWNvbnRhaW5lciA+IHAge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNzUlO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdy1tYXJrZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZCB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgbGVmdDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWNvbnRhaW5lciA+IHA6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmFja2dyb3VuZCk7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDJweDtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWNvbnRhaW5lciA+IHA6bnRoLWNoaWxkKDMpe1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbiNuZXctY2FyZC1iYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4wNSk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1jYXJkIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jYXJkLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jYXJkLmNsb3NlLWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbjowcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jYXJkLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNhcmQudGl0bGUtZGF0ZS1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtY2FyZC5jYXJkLXRpdGxlOmludmFsaWQge1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNhcmQuY2FyZC1kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNhcmQuZGVzY3JpcHRpb24tY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtY2FyZC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtY2FyZC5wcmlvcml0eS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDIwcHg7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgd2lkdGg6IDExMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWNhcmQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICBib3R0b206IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWNhcmQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ET01fbWFuYWdlbWVudC90b2RvX2NhcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCIuL3N0eWxlcy5jc3NcXFwiKTtcXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgIGhlaWdodDogMTcwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNDBweCA2MHB4IDFmciAvIDFmciAxZnI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1jb250YWluZXIgPiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmZsb3ctbWFya2VyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb2xvcjogZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQge1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1jb250YWluZXIgPiBwOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXNsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJhY2tncm91bmQpO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAycHg7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1jb250YWluZXIgPiBwOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3LWNhcmQtYmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMDUpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcblxcclxcbi5uZXctY2FyZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtY2FyZC5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtY2FyZC5jbG9zZS1idXR0b24ge1xcclxcbiAgICBtYXJnaW46MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtY2FyZC5jbG9zZS1idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jYXJkLnRpdGxlLWRhdGUtY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNhcmQuY2FyZC10aXRsZTppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jYXJkLmNhcmQtZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1jYXJkLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNhcmQuZGVzY3JpcHRpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWNhcmQucHJpb3JpdHktY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICBib3R0b206IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1jYXJkIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgYm90dG9tOiAyMHB4O1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1jYXJkOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGFnZV9sYXlvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wYWdlX2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvX2NhcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvX2NhcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBzdHlsZSBmcm9tIFwiLi9wYWdlX2xheW91dC5jc3NcIjtcclxuaW1wb3J0IGdpdGh1YkltZyBmcm9tIFwiLi4vYXNzZXRzL2dpdGh1Yi1tYXJrLnN2Z1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJUT0RPXCI7XHJcbiAgICBwLmlkID0gXCJ0b2RvLXRpdGxlXCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgbGV0IHNpZ25pdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaWduaXR1cmVEaXYuaWQgPSBcInNpZ25pdHVyZVwiO1xyXG5cclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIk1hZGUgQnk6IE9tIEFtaW5cIjtcclxuICAgIHNpZ25pdHVyZURpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIFxyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGEuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL29tYW1pbjEzNS9Ub2RvX0xpc3RcIjtcclxuICAgIGEudGFyZ2V0ID0gXCJfYmxhY2tcIjtcclxuICAgIFxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjID0gZ2l0aHViSW1nO1xyXG5cclxuICAgIGltZy5hbHQgPSBcImdpdGh1YlwiO1xyXG5cclxuICAgIGEuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBzaWduaXR1cmVEaXYuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2lnbml0dXJlRGl2KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRMZWZ0TWVudSgpe1xyXG5cclxuICAgIGNvbnN0IGxlZnRNZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxlZnRNZW51RGl2LmlkID0gXCJsZWZ0LW1lbnVcIjtcclxuXHJcbiAgICBsZWZ0TWVudURpdi5hcHBlbmRDaGlsZChsb2FkRGVmYXVsdFNlbGVjdGlvbnMoKSk7XHJcbiAgICBsZWZ0TWVudURpdi5hcHBlbmRDaGlsZChsb2FkUHJvamVjdFNlbGVjdGlvbnMoKSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGxlZnRNZW51RGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZERlZmF1bHRTZWxlY3Rpb25zKCl7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdFNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWZhdWx0U2VsRGl2LmlkID0gXCJkZWZhdWx0LXNlbGVjdGlvblwiXHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICAgIGRpdi5pZCA9IFwidG9kYXlcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGRlZmF1bHRTZWxEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiVGltZWxpbmVcIjtcclxuICAgIGRpdi5pZCA9IFwidGltZWxpbmVcIjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIGRlZmF1bHRTZWxEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblxyXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBkaXYuaWQgPSBcInByaW9yaXR5XCI7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBkZWZhdWx0U2VsRGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgcmV0dXJuIGRlZmF1bHRTZWxEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0U2VsZWN0aW9ucygpe1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RTZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdFNlbERpdi5pZCA9IFwicHJvamVjdC1zZWxlY3Rpb25cIjtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcclxuXHJcbiAgICBwcm9qZWN0U2VsRGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHVsLmlkID0gXCJwcm9qZWN0c1wiO1xyXG5cclxuICAgIHByb2plY3RTZWxEaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgIFxyXG4gICAgcHJvamVjdFNlbERpdi5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0QnV0dG9uKCkpO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0U2VsRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0QnV0dG9uKCl7XHJcbiAgICBsZXQgbmV3UHJvakJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuZXdQcm9qQnV0dG9uLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3RcIjtcclxuICAgIG5ld1Byb2pCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1pbnB1dE1vZGVcIiwgXCJmYWxzZVwiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdCBcIjtcclxuICAgIG5ld1Byb2pCdXR0b24uYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBwLmlkID0gXCJuZXctcHJvai1idXR0b25cIjtcclxuICAgIFxyXG4gICAgbmV3UHJvakJ1dHRvbi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICByZXR1cm4gbmV3UHJvakJ1dHRvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdElucHV0KCl7XHJcbiAgICBsZXQgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3RcIik7XHJcbiAgICBuZXdQcm9qLnNldEF0dHJpYnV0ZShcImRhdGEtaW5wdXRNb2RlXCIsIFwidHJ1ZVwiKTtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIGlucHV0LmlkID0gXCJuZXctcHJvamVjdC1pbnB1dFwiO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XHJcbiAgICBuZXdQcm9qLnJlcGxhY2VDaGlsZChpbnB1dCwgbmV3UHJvai5maXJzdENoaWxkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5ld1Byb2plY3RJbnB1dCgpe1xyXG4gICAgbGV0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0XCIpO1xyXG4gICAgbmV3UHJvai5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlucHV0TW9kZVwiLCBcImZhbHNlXCIpO1xyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XHJcblxyXG4gICAgbGV0IHZhbCA9IG5ld1Byb2ouZmlyc3RDaGlsZC52YWx1ZTtcclxuXHJcbiAgICBuZXdQcm9qLnJlcGxhY2VDaGlsZChwLCBuZXdQcm9qLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIHJldHVybiB2YWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvaikge1xyXG5cclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qLmlkKTtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBwcm9qLm51bUl0ZW1zO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgcmV0dXJuIGxpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNNZW51KERpcil7XHJcblxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xyXG4gICAgbGV0IG51bUNoaWxkcmVuID0gdWwuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGlyLnByb2plY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoaSA8IG51bUNoaWxkcmVuKXtcclxuICAgICAgICAgICAgdWwucmVtb3ZlQ2hpbGQodWwuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaSA9IGNyZWF0ZVByb2plY3QoRGlyLnByb2plY3RzW2ldKTtcclxuICAgICAgICB1bC5hcHBlbmQobGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGFnZSgpe1xyXG4gICAgbG9hZEhlYWRlcigpO1xyXG4gICAgbG9hZExlZnRNZW51KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlO1xyXG5leHBvcnQge2xvYWRQcm9qZWN0c01lbnUsIGFkZE5ld1Byb2plY3RJbnB1dCwgcmVwbGFjZU5ld1Byb2plY3RJbnB1dH07IiwiaW1wb3J0IERpciBmcm9tIFwiLi4vbWFuYWdlX2Rpci5qc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3JlbmRlcl9hY3RpdmVfcHJvamVjdC5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvamVjdFBhZ2UoKXtcclxuXHJcbiAgICBsZXQgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdFBhZ2UuaWQgPSBcInByb2plY3QtcGFnZVwiO1xyXG5cclxuICAgIC8qIHByb2plY3QgcGFnZSBoZWFkZXIgKi9cclxuICAgIGxldCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGVyRGl2LmlkID0gXCJwcm9qZWN0LWhlYWRlclwiO1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmlkID0gXCJwcm9qZWN0LWhlYWRlci1uYW1lXCI7XHJcbiAgICBwLnRleHRDb250ZW50ID0gRGlyLmFjdGl2ZVByb2plY3QoKS5uYW1lO1xyXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIGxldCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0Q29udGVudC5pZCA9IFwicHJvamVjdC1jb250ZW50XCI7XHJcblxyXG4gICAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRzQ29udGFpbmVyLmlkID0gXCJjYXJkcy1jb250YWluZXJcIjtcclxuICAgIGxldCBjaGVja2xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2hlY2tsaXN0Q29udGFpbmVyLmlkID0gXCJjaGVja2xpc3QtY29udGFpbmVyXCI7XHJcblxyXG4gICAgY2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbigpKTtcclxuXHJcbiAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChjYXJkc0NvbnRhaW5lcik7XHJcbiAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChjaGVja2xpc3RDb250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcclxuICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdUb2RvQnV0dG9uKCl7XHJcbiAgICBcclxuICAgIGxldCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld1RvZG8uaWQgPSBcIm5ldy10b2RvXCI7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgICBuZXdUb2RvLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIHJldHVybiBuZXdUb2RvO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVByb2plY3RQYWdlOyIsImltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdG9kb19jYXJkLmNzc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRDYXJkKHRvZG8sIGluZGV4KXtcclxuXHJcbiAgICBsZXQgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY2FyZFwiO1xyXG4gICAgY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcclxuXHJcbiAgICBsZXQgdGl0bGVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRpdGxlRGF0ZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRpdGxlLWRhdGUtY29udGFpbmVyXCI7XHJcbiAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjYXJkVGl0bGUuY2xhc3NOYW1lID0gXCJjYXJkLXRpdGxlXCI7XHJcbiAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgbGV0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjYXJkRGF0ZS5jbGFzc05hbWUgPSBcImNhcmQtZGF0ZVwiO1xyXG4gICAgY2FyZERhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XHJcblxyXG4gICAgdGl0bGVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XHJcbiAgICB0aXRsZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZERhdGUpO1xyXG5cclxuICAgIGxldCBjb21wbGV0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29tcGxldGVkQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29tcGxldGUtY29udGFpbmVyXCI7XHJcbiAgICBsZXQgY29tcGxldGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbXBsZXRlSW5wdXQuY2xhc3NOYW1lID0gXCJjb21wbGV0ZS1pbnB1dFwiO1xyXG4gICAgY29tcGxldGVJbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgbGV0IGNvbXBsZXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29tcGxldGVUZXh0LnRleHRDb250ZW50ID0gXCJjb21wbGV0ZVwiO1xyXG4gICAgY29tcGxldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlSW5wdXQpO1xyXG4gICAgY29tcGxldGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlVGV4dCk7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcclxuICAgIGxldCBkZXNjID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIGxldCBkZXNjbGVuZ3RoID0gMjAwO1xyXG4gICAgXHJcbiAgICBpZiAoZGVzYy5sZW5ndGggPiBkZXNjbGVuZ3RoKXtcclxuICAgICAgICBkZXNjID0gZGVzYy5zdWJzdHJpbmcoMCwgZGVzY2xlbmd0aCk7XHJcbiAgICAgICAgZGVzYyArPSBcIiAgIC4gLiAuXCI7XHJcbiAgICB9XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XHJcbiAgICAgXHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBcclxuXHJcbiAgICBsZXQgZWRpdENvbnRhaW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWRpdENvbnRhaW50ZXIuY2xhc3NOYW1lID0gXCJlZGl0LWNvbnRhaW5lclwiO1xyXG4gICAgbGV0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVkaXQuY2xhc3NOYW1lID0gXCJlZGl0XCI7XHJcbiAgICBlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XHJcbiAgICBlZGl0Q29udGFpbnRlci5hcHBlbmRDaGlsZChlZGl0KTtcclxuICAgIGxldCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGV4cGFuZC5jbGFzc05hbWUgPSBcImV4cGFuZFwiO1xyXG4gICAgZXhwYW5kLnRleHRDb250ZW50ID0gXCJleHBhbmRcIjtcclxuICAgIGVkaXRDb250YWludGVyLmFwcGVuZENoaWxkKGV4cGFuZCk7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJpb3JpdHktY29udGFpbmVyXCI7XHJcbiAgICBsZXQgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XHJcbiAgICBsZXQgcHJpb3JpdHlTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJpb3JpdHlTbGlkZXIuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1zbGlkZXJcIjtcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaW9yaXR5SWNvbi5jbGFzc05hbWUgPSBcInByaW9yaXR5LWljb25cIjtcclxuICAgIHByaW9yaXR5U2xpZGVyLmFwcGVuZENoaWxkKHByaW9yaXR5SWNvbik7XHJcblxyXG4gICAgbGV0IHByaW9yaXR5SW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcmlvcml0eUluZGljYXRvci50ZXh0Q29udGVudCA9IFwidXJnZW50XCI7XHJcblxyXG4gICAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlUZXh0KTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U2xpZGVyKTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5kaWNhdG9yKTtcclxuXHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGF0ZUNvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZENvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdENvbnRhaW50ZXIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkcy1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XHJcblxyXG4gICAgLyogYWRkIC4uLiB0byBib3R0b20gb2YgZGVzY3JpcHRpb24gaWYgdGhlcmUgaXMgb3ZlcmZsb3cgKi9cclxuICAgIGxldCBkZXNjQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApLmNoaWxkcmVuWzJdO1xyXG4gICAgaWYgKGRlc2NCb3guZmlyc3RDaGlsZC5jbGllbnRIZWlnaHQgPCBkZXNjQm94LmZpcnN0Q2hpbGQuc2Nyb2xsSGVpZ2h0KXtcclxuICAgICAgICBsZXQgb3ZlcmZsb3dNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBvdmVyZmxvd01hcmtlci50ZXh0Q29udGVudCA9IFwiIC4gLiAuXCI7XHJcbiAgICAgICAgb3ZlcmZsb3dNYXJrZXIuY2xhc3NOYW1lID0gXCJvdmVyZmxvdy1tYXJrZXJcIjtcclxuICAgICAgICBkZXNjQm94LmFwcGVuZENoaWxkKG92ZXJmbG93TWFya2VyKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld0NhcmQodG9kbyl7XHJcblxyXG4gICAgbGV0IG5ld0NhcmRCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5ld0NhcmRCYWNrZ3JvdW5kLmlkID0gXCJuZXctY2FyZC1iYWNrXCI7XHJcblxyXG4gICAgbGV0IGNsb3NlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjbG9zZUNhcmQuY2xhc3NMaXN0LmFkZChcImVkaXQtY2FyZFwiKTtcclxuICAgIGNsb3NlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclwiKTtcclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWNhcmRcIik7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idXR0b25cIik7XHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJ4XCI7XHJcbiAgICBjbG9zZUNhcmQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgbGV0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm5ldy1jYXJkXCI7XHJcblxyXG4gICAgbGV0IHRpdGxlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0aXRsZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVkaXQtY2FyZFwiKTtcclxuICAgIHRpdGxlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtZGF0ZS1jb250YWluZXJcIilcclxuICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYXJkVGl0bGUucGF0dGVybiA9IFwiW1xcXFx3XFxcXGQgXSpcIjtcclxuICAgIGNhcmRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImVkaXQtY2FyZFwiKTtcclxuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcclxuXHJcbiAgICBsZXQgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjYXJkRGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbiAgICBjYXJkRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZWRpdC1jYXJkXCIpO1xyXG4gICAgY2FyZERhdGUuY2xhc3NMaXN0LmFkZChcImNhcmQtZGF0ZVwiKTtcclxuXHJcbiAgICB0aXRsZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcclxuICAgIHRpdGxlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkRGF0ZSk7XHJcblxyXG5cclxuICAgIGxldCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZWRpdC1jYXJkXCIpO1xyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiKTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWNhcmRcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiZGVzY3JpcHRpb25cIjsgLy8tLS0tLS1cclxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcblxyXG4gICAgbGV0IHByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWNhcmRcIik7XHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktY29udGFpbmVyXCIpO1xyXG4gICAgbGV0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xyXG4gICAgbGV0IHByaW9yaXR5U2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByaW9yaXR5U2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWNhcmRcIik7XHJcbiAgICBwcmlvcml0eVNsaWRlci5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktc2xpZGVyXCIpO1xyXG5cclxuICAgIGxldCBwcmlvcml0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWNhcmRcIik7XHJcbiAgICBwcmlvcml0eUljb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWljb25cIik7XHJcbiAgICBwcmlvcml0eVNsaWRlci5hcHBlbmRDaGlsZChwcmlvcml0eUljb24pO1xyXG5cclxuICAgIGxldCBwcmlvcml0eUluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcHJpb3JpdHlJbmRpY2F0b3IudGV4dENvbnRlbnQgPSBcInVyZ2VudFwiO1xyXG5cclxuICAgIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5VGV4dCk7XHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNsaWRlcik7XHJcbiAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUluZGljYXRvcik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXQuaWQgPSBcInN1Ym1pdC1jYXJkXCI7XHJcbiAgICBzdWJtaXQudGV4dENvbnRlbnQgPSBcImFkZCBUb2RvXCI7XHJcblxyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUNhcmQpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURhdGVDb250YWluZXIpO1xyXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0KTtcclxuXHJcbiAgICBuZXdDYXJkQmFja2dyb3VuZC5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKG5ld0NhcmRCYWNrZ3JvdW5kKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRWRpdENhcmQoKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LWNhcmQtYmFja1wiKS5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IHtsb2FkQ2FyZCwgbmV3Q2FyZCwgcmVtb3ZlRWRpdENhcmR9OyIsImltcG9ydCB7VG9kbywgUHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdF9jbGFzc2VzLmpzXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJkZWZhdWx0XCIsIDApXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2pJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlUHJvamVjdCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzW3RoaXMuYWN0aXZlUHJvakluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KG5hbWUpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuYW1lLCB0aGlzLnByb2plY3RzLmxlbmd0aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm9qSW5kZXggPT09IGluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qSW5kZXgtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKGluZGV4KXtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2pJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvQWN0aXZlKHRvZG8pe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHNbdGhpcy5hY3RpdmVQcm9qSW5kZXhdLmFkZFRvZG8odG9kbylcclxuICAgIH1cclxufVxyXG5cclxubGV0IERpciA9IG5ldyBQcm9qZWN0cygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlyOyIsIlxyXG5jbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb21wbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAhdGhpcy5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQcmlvcml0eShwcmlvcml0eSl7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG51bU9mUHJvamVjdHMpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pZCA9bnVtT2ZQcm9qZWN0cztcclxuICAgICAgICB0aGlzLm51bUl0ZW1zID0gMDtcclxuICAgICAgICB0aGlzLnRvZG8gPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkVG9kbyh0b2RvKXtcclxuICAgICAgICB0aGlzLnRvZG8ucHVzaCh0b2RvKTtcclxuICAgICAgICB0aGlzLm51bUl0ZW1zKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9kbyhpbmRleCl7XHJcbiAgICAgICAgdGhpcy50b2RvLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgdGhpcy5udW1JdGVtcy0tO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1RvZG8sIFByb2plY3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9ET01fbWFuYWdlbWVudC9wYWdlX2xheW91dC5qc1wiXHJcbmltcG9ydCB7IGxvYWRQcm9qZWN0c01lbnUsIGFkZE5ld1Byb2plY3RJbnB1dCwgcmVwbGFjZU5ld1Byb2plY3RJbnB1dH0gZnJvbSBcIi4vRE9NX21hbmFnZW1lbnQvcGFnZV9sYXlvdXQuanNcIjtcclxuaW1wb3J0IERpciBmcm9tIFwiLi9tYW5hZ2VfZGlyLmpzXCI7XHJcbmltcG9ydCBsb2FkUHJvalBhZ2UgZnJvbSBcIi4vRE9NX21hbmFnZW1lbnQvcmVuZGVyX2FjdGl2ZV9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCB7bG9hZENhcmQsIG5ld0NhcmQsIHJlbW92ZUVkaXRDYXJkfSBmcm9tIFwiLi9ET01fbWFuYWdlbWVudC90b2RvX2NhcmQuanNcIjtcclxuaW1wb3J0IHtUb2RvLCBQcm9qZWN0fSBmcm9tIFwiLi9wcm9qZWN0X2NsYXNzZXMuanNcIjtcclxuXHJcblxyXG5sb2FkUGFnZSgpO1xyXG5sb2FkUHJvamVjdHNNZW51KERpcik7XHJcbmxvYWRQcm9qUGFnZSgpO1xyXG5cclxuXHJcbi8qXHJcbiAqIEFkZCBldmVudCBsaXN0bmVyIGZvciB0aGUgZGVmYXVsdCBwcm9qZWN0IGluIHRoZSBsZWZ0IG1lbnVcclxuICovXHJcbmxldCBkZWZhdWx0UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiMFwiXScpO1xyXG5kZWZhdWx0UHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLyogdG9nZ2xlIGFjdGl2ZSBwcm9qZWN0ICovXHJcbiAgICBEaXIuc2V0QWN0aXZlKGRlZmF1bHRQcm9qLmRhdGFzZXQuaWQpO1xyXG59KVxyXG5cclxuLypcclxuICogRXZlbnQgaGFuZGxpbmcgZm9yIGNyZWF0aW5nIGEgbmV3IHByb2plY3RcclxuICovXHJcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qLWJ1dHRvblwiKTtcclxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYobmV3UHJvamVjdEJ1dHRvbi5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5wdXRtb2RlID09PSBcImZhbHNlXCIpe1xyXG4gICAgICAgIGFkZE5ld1Byb2plY3RJbnB1dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1pbnB1dFwiKS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgICAgICAgICBsZXQgbmV3UHJvak5hbWUgPSByZXBsYWNlTmV3UHJvamVjdElucHV0KCk7XHJcbiAgICAgICAgICAgIERpci5hZGRQcm9qZWN0KG5ld1Byb2pOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0c01lbnUoRGlyKTtcclxuXHJcbiAgICAgICAgICAgIC8qIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgdGhlIG5ldyBjcmVhdGVkIHByb2plY3QgKi9cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvKiB0b2dnbGUgYWN0aXZlIHByb2plY3QgKi9cclxuICAgICAgICAgICAgICAgICAgICBEaXIuc2V0QWN0aXZlKGVsZW1lbnQuZGF0YXNldC5pZCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyogZXZlbnQgbGlzdGVuZXIgZm9yIG5ldy10b2RvIGJ1dHRvbiAqL1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBuZXdDYXJkKERpci5wcm9qZWN0c1swXS50b2RvWzBdKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtY2FyZFwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0aXRsZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtY2FyZC5jYXJkLXRpdGxlXCIpO1xyXG4gICAgICAgIGlmICh0aXRsZU5vZGUuY2hlY2tWYWxpZGl0eSgpICYmIHRpdGxlTm9kZS52YWx1ZS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgRGlyLmFkZFRvQWN0aXZlKG5ldyBUb2RvKHRpdGxlTm9kZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWNhcmQuY2FyZC1kYXRlXCIpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtY2FyZC5kZXNjcmlwdGlvblwiKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoaWdoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgcmVtb3ZlRWRpdENhcmQoKTtcclxuICAgICAgICAgICAgbG9hZENhcmQoRGlyLmFjdGl2ZVByb2plY3QoKS50b2RvW0Rpci5hY3RpdmVQcm9qZWN0KCkubnVtSXRlbXMtMV0sIERpci5hY3RpdmVQcm9qZWN0KCkudG9kby5sZW5ndGgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1jYXJkLmNsb3NlLWJ1dHRvblwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHJlbW92ZUVkaXRDYXJkKCk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==