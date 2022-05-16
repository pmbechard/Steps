/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/RockSalt-Regular.ttf */ \"./src/fonts/RockSalt-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    list-style: none;\\n    font-family: Arial, Helvetica, sans-serif;\\n    color: #dedede;\\n}\\n\\n@font-face {\\n    font-family: \\\"RockSalt\\\";\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nul {\\n    background-color: inherit;\\n}\\n\\nheader {\\n    height: 10vh;\\n    width: 100vw;\\n    background-color: #2e2e2e;\\n    display: flex;\\n    align-items: center;\\n    padding-left: 15vw;\\n    font-size: 18px;\\n}\\n\\nh1 {\\n    color: #dedede;\\n    background-color: #2e2e2e;\\n    font-weight: 900;\\n    font-family: \\\"RockSalt\\\";\\n\\n}\\n\\nmain {\\n    display: flex;\\n    width: 100vw;\\n    justify-content: space-between;\\n    background-color: #2e2e2e;\\n\\n}\\n\\nnav, .projects-area, .steps-area {\\n    height: 85vh;\\n    box-shadow: 1px 1px 2px #222;\\n    border: 1px solid #222;\\n}\\n\\nnav, .steps-area {\\n    width: 18vw;\\n    background-color: #343434;\\n    margin: 0 20px;\\n    padding: 20px;\\n    border-radius: 12px;\\n}\\n\\n.steps-area {\\n    width: 28vw;\\n}\\n\\nnav li, .steps-area li, .projects-area li {\\n    background-color: #444;\\n    margin-bottom: 5px;\\n    padding: 10px 15px;\\n    border: 1px solid #2e2e2e;\\n    border-radius: 20px;\\n    box-shadow: 0px 1px 2px #222;\\n}\\n\\nli {\\n    transition: all 0.2s ease-in-out;\\n}\\n\\nli:hover {\\n    background-color: #555;\\n    cursor: pointer;\\n    transform: scale(1.01);\\n}\\n\\nli:active {\\n    background-color: #444;\\n    cursor: pointer;\\n    transform: scale(1.005);\\n}\\n\\n.projects-area {\\n    width: 48vw;\\n    background-color: #2e2e2e;\\n    padding: 20px;\\n}\\n\\n.projects-area div.add, .steps-area div.add {\\n    display: flex;\\n    width: 100%;\\n    justify-content: flex-end;    \\n}\\n\\n.projects-area button, .steps-area button {\\n    border: none;\\n    margin: 0 0 auto 0;\\n    background: rgb(48, 93, 255);\\n    height: 40px;\\n    width: 40px;\\n    font-size: 24px;\\n    border-radius: 50%;\\n    transition: all 0.05s ease-in-out;\\n}\\n\\n.projects-area button:hover, .steps-area button:hover {\\n    cursor: pointer;\\n    opacity: 0.7;\\n    transform: scale(1.05);\\n}\\n\\n.projects-area button:active, .steps-area button:active {\\n    cursor: pointer;\\n    opacity: 0.9;\\n    transform: scale(1);\\n}\\n\\nbutton.disabled {\\n    opacity: 0.2;\\n}\\n\\nbutton.disabled:hover {\\n    cursor: auto;\\n    opacity: 0.2;\\n    transform: none;\\n}\\n\\nli.selected {\\n    background-color: rgb(48, 93, 255);\\n}\\n\\n.project-input {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.project-input:hover {\\n    transform: none;\\n    background-color: none;\\n    opacity: none;\\n    cursor: auto;\\n}\\n\\n.project-input input {\\n    color: #222;\\n    font-weight: bold;\\n    border-radius: 12px;\\n    height: 30px;\\n    border: none;\\n    outline: none;\\n    padding: 0 5px;\\n}\\n\\n.project-input button {\\n    height: 25px;\\n    width: 25px;\\n    font-size: 18px;\\n}\\n\\n#inputs-div, #buttons-div {\\n    display: flex;\\n    gap: 10px;\\n}\\n\\nfooter {\\n    height: 5vh;\\n    width: 100vw;\\n    background-color: #2e2e2e;\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n    padding-right: 100px;\\n}\\n\\n.footer-link {\\n    width: 20px;\\n    margin-right: 10px;\\n    cursor: pointer;\\n    transition: all 0.3s ease-in-out;\\n}\\n\\n.footer-link:hover {\\n    transform: scale(1.1);\\n    opacity: 0.7;\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://steps/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://steps/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://steps/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://steps/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://steps/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://steps/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://steps/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://steps/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://steps/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://steps/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://steps/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializer */ \"./src/initializer.js\");\n/* harmony import */ var _time_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time-range */ \"./src/time-range.js\");\n/* harmony import */ var _project_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-factory */ \"./src/project-factory.js\");\n\n\n\n\n// Initialize static and dynamic page elements\n(0,_initializer__WEBPACK_IMPORTED_MODULE_0__.initializePage)();\n\n// Logic for Time Range selection\nconst timeRangeOptions = document.querySelectorAll('#times-list li');\ntimeRangeOptions.forEach( (timeRange) => {\n    timeRange.addEventListener('click', () => {\n        (0,_time_range__WEBPACK_IMPORTED_MODULE_1__.updateTimeRange)(timeRange);\n    });\n});\n\n// Logic for adding new project\nconst addProjectButton = document.getElementById('add-project');\naddProjectButton.addEventListener('click', () => (0,_project_factory__WEBPACK_IMPORTED_MODULE_2__.initializeInput)());\n\n// Logic for adding new step\n\n\n//# sourceURL=webpack://steps/./src/index.js?");

/***/ }),

/***/ "./src/initializer.js":
/*!****************************!*\
  !*** ./src/initializer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializePage\": () => (/* binding */ initializePage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_steps_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/steps_logo.png */ \"./src/img/steps_logo.png\");\n/* harmony import */ var _img_github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/github.png */ \"./src/img/github.png\");\n\n\n\n\n\nfunction initializePage() {\n    const header = document.querySelector('header');\n    const logoImg = new Image();\n    logoImg.src = _img_steps_logo_png__WEBPACK_IMPORTED_MODULE_1__;\n    header.insertBefore(logoImg, header.firstChild);\n    logoImg.style.width = '85px';\n    \n    const footer = document.querySelector('footer');\n    const gitHubImg = new Image();\n    gitHubImg.src = _img_github_png__WEBPACK_IMPORTED_MODULE_2__;\n    footer.insertBefore(gitHubImg, footer.firstChild);\n    gitHubImg.classList.add('footer-link')\n    gitHubImg.onclick = () => open('https://github.com/pmbechard/', '_blank');\n}\n\n\n\n\n//# sourceURL=webpack://steps/./src/initializer.js?");

/***/ }),

/***/ "./src/project-factory.js":
/*!********************************!*\
  !*** ./src/project-factory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeInput\": () => (/* binding */ initializeInput)\n/* harmony export */ });\n/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/edit.png */ \"./src/img/edit.png\");\n/* harmony import */ var _img_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/delete.png */ \"./src/img/delete.png\");\n\n\n\nfunction initializeInput() {\n    let nameInput, dueDateInput, saveButton, cancelButton;\n    getInput();\n}\n\nfunction editInput(idOfLI) {\n    const li = document.getElementById(idOfLI);\n    const name = li.firstChild.firstChild.textContent;\n    const date = li.firstChild.lastChild.textContent;\n    li.classList.add('project-input');\n    getInput(name, date, idOfLI);\n}\n\nfunction getInput(name='', date='', idOfLI='') {\n    // Disables add project button\n    const addProjectButton = document.getElementById('add-project');\n    addProjectButton.setAttribute('disabled', 'true');\n    addProjectButton.classList.add('disabled');\n\n    // Adds new list item for input\n    const projectsList = document.getElementById('projects-list');\n    let projectInput;\n    if (idOfLI === '') {\n        projectInput = document.createElement('li');\n        projectsList.insertBefore(projectInput, projectsList.lastElementChild);\n        projectInput.classList.add('project-input');\n    } else {\n        projectInput = document.getElementById(`${idOfLI}`);\n        projectInput.innerHTML = '';\n    }\n\n    // Lays out input elements and buttons\n    const inputsDiv = document.createElement('div');\n    inputsDiv.id = 'inputs-div';\n    const nameInput = document.createElement('input');\n    nameInput.value = name;\n    const dueDateInput = document.createElement('input');\n    dueDateInput.value = date;\n    const buttonsDiv = document.createElement('div');\n    buttonsDiv.id = 'buttons-div';\n    const saveButton = document.createElement('button');\n    const cancelButton = document.createElement('button');\n\n    // Adds elements to DOM\n    projectInput.appendChild(inputsDiv);\n    inputsDiv.appendChild(nameInput);\n    inputsDiv.appendChild(dueDateInput);\n    projectInput.appendChild(buttonsDiv);\n    buttonsDiv.appendChild(saveButton);\n    buttonsDiv.appendChild(cancelButton);\n\n    // Sets styles and attributes of new elements\n    nameInput.setAttribute('type', 'text');\n    nameInput.setAttribute('placeholder', 'Project name');\n    nameInput.setAttribute('minlength', '1');\n    nameInput.setAttribute('maxlength', '20');\n    dueDateInput.setAttribute('type', 'date');\n    saveButton.innerHTML = '&#x2714;';\n    saveButton.style.backgroundColor = 'rgb(17, 173, 0)';\n    cancelButton.innerHTML = '&#x2717;';\n    cancelButton.style.backgroundColor = 'rgb(169, 0, 0)';\n\n    validateInput(projectInput, nameInput, dueDateInput, saveButton, cancelButton, idOfLI);\n}\n\nfunction validateInput(projectInput, nameInput, dueDateInput, saveButton, cancelButton, idOfLI='') {\n    const addProjectButton = document.getElementById('add-project');\n\n    saveButton.addEventListener('click', () => {\n        let today = new Date();\n        let date = new Date(`${today.getFullYear()}-${parseInt(today.getMonth())+1}-${today.getDate()}`);\n        let inputDate = new Date(`${dueDateInput.value}`);\n        if (nameInput.value === '') {\n            nameInput.style.backgroundColor = 'rgba(163, 100, 100)';\n            nameInput.addEventListener('click', () => nameInput.style.backgroundColor = 'white');\n        } else if (dueDateInput.value === '') {\n            dueDateInput.style.backgroundColor = 'rgba(163, 100, 100)';\n            dueDateInput.addEventListener('click', () => dueDateInput.style.backgroundColor = 'white');\n         } else if (date >inputDate) {\n            dueDateInput.addEventListener('click', () => dueDateInput.style.backgroundColor = 'white');\n         } else {\n            if (idOfLI === '') {\n                const project = new Project(nameInput.value, dueDateInput.value);\n            } else {\n                Project.allProjects.forEach( (item) => {\n                    if (item.id == idOfLI) {\n                        item.name = nameInput.value;\n                        item.dueDate = dueDateInput.value;\n                        projectInput.innerHTML = '';\n                        item.createElement();\n                    }\n                });\n            }\n            addProjectButton.classList.remove('disabled');\n            addProjectButton.removeAttribute('disabled');\n            projectInput.remove();\n        }\n    });\n    cancelButton.addEventListener('click', () => {\n        addProjectButton.classList.remove('disabled');\n        addProjectButton.removeAttribute('disabled');\n        if (!projectInput.id) {\n            projectInput.remove();\n        } else {\n            console.log('dont delete')\n            Project.allProjects.forEach( (item) => {\n                if (item.id == idOfLI) {\n                    item.createElement();\n                }\n            });\n            projectInput.remove();\n        }\n    });\n}\n\nclass Project {\n    static nextAvailableID = 0;\n    static allProjects = []\n\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.id = Project.nextAvailableID++;\n        Project.allProjects.push(this);\n        this.createElement();\n    }\n\n    createElement() {\n        const projectsList = document.getElementById('projects-list');\n        const newProject = document.createElement('li');\n        projectsList.insertBefore(newProject, projectsList.lastElementChild);\n        newProject.id = this.id;\n        const nameElement = document.createElement('h4');\n        nameElement.classList.add('project-name');\n        nameElement.textContent = this.name;\n        const dateElement = document.createElement('p');\n        dateElement.classList.add = 'project-date';\n        dateElement.textContent = this.dueDate;\n        const newProjectInfo = document.createElement('div');\n        newProjectInfo.appendChild(nameElement);\n        newProjectInfo.appendChild(dateElement);\n        newProject.appendChild(newProjectInfo);\n\n        const editButton = document.createElement('button');\n        const editImg = new Image();\n        editImg.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_0__;\n        editButton.appendChild(editImg);\n        editImg.style.height = '20px';\n        editButton.style.background = 'none';\n        editButton.addEventListener('click', () => editInput(editButton.parentElement.parentElement.id));\n        \n        const deleteButton = document.createElement('button');\n        const deleteImg = new Image();\n        deleteImg.src = _img_delete_png__WEBPACK_IMPORTED_MODULE_1__;\n        deleteButton.appendChild(deleteImg);\n        deleteImg.style.height = '20px';\n        deleteButton.style.background = 'none';\n        deleteButton.addEventListener('click', () => this.deleteElement());\n\n        const newProjectButtons = document.createElement('div');\n        newProjectButtons.appendChild(editButton);\n        newProjectButtons.appendChild(deleteButton);\n        newProject.appendChild(newProjectButtons);\n\n        newProject.style.display = 'flex';\n        newProject.style.justifyContent = 'space-between';\n        newProject.style.alignItems = 'center';\n\n        // TODO: Fix style of editing li\n    }\n\n    deleteElement() {\n        const projectsList = document.querySelectorAll('#projects-list li');\n        projectsList.forEach( (project) => {\n            if (project.id == this.id) {\n                project.remove();\n            }\n        });\n        Project.allProjects.filter( (project) => project !== this);\n    }\n\n    get name() { return this._name }\n    set name(newName) { this._name = newName }\n\n    get dueDate() { return this._dueDate }\n    set dueDate(newDate) {this._dueDate = newDate }\n}\n\n\n\n//# sourceURL=webpack://steps/./src/project-factory.js?");

/***/ }),

/***/ "./src/time-range.js":
/*!***************************!*\
  !*** ./src/time-range.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateTimeRange\": () => (/* binding */ updateTimeRange)\n/* harmony export */ });\nfunction updateTimeRange(timeRange) {\n    const timeRangeOptions = document.querySelectorAll('#times-list li');\n    timeRangeOptions.forEach( (option) => option.classList.remove('selected') );\n    timeRange.classList.add('selected');\n    // update Projects display\n}\n\n\n\n//# sourceURL=webpack://steps/./src/time-range.js?");

/***/ }),

/***/ "./src/fonts/RockSalt-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/RockSalt-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95f10efb43f0ccd46405.ttf\";\n\n//# sourceURL=webpack://steps/./src/fonts/RockSalt-Regular.ttf?");

/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c952d52ab05717580cce.png\";\n\n//# sourceURL=webpack://steps/./src/img/delete.png?");

/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75bd2749b182623e35b3.png\";\n\n//# sourceURL=webpack://steps/./src/img/edit.png?");

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"266ca63177bca6f330a7.png\";\n\n//# sourceURL=webpack://steps/./src/img/github.png?");

/***/ }),

/***/ "./src/img/steps_logo.png":
/*!********************************!*\
  !*** ./src/img/steps_logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0a1846e5f2d002ab221a.png\";\n\n//# sourceURL=webpack://steps/./src/img/steps_logo.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;