/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./JustAnotherHand-Regular.woff */ "./src/JustAnotherHand-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Just Another Hand";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    margin: 0px;
    display: grid;
    grid-template-rows: 80px 1fr;
    background-color: #dc6b29;
    height: 100vh;
}

header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    box-shadow: 0px 2px 2px 0px grey;
    z-index: 1;
}

.logo {
    order: -2;
    justify-self: start;
    width: 80px;
    color: #b61500;
}

h1 {
    grid-column: 2/3;
    margin: 0px;
    padding: 0px;
    font-family: "Just Another Hand";
    font-size: 3em;
    margin-top: 10px;
    transform: scale(2, 1);
    color: #b61500;
}

nav {
    justify-self: end;
    grid-column: 3/4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow: hidden;
    padding-right: 20px;
    gap: 50px;
}

.nav-btn {
    border: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
    font-size: 1.2em;
    font-family: "Just Another Hand";
    transform: scale(2, 1);
    width: 50px;
}

.nav-btn:hover:enabled {
    transform: scale(2.1, 1.1);
}

.nav-btn:disabled {
    cursor: default;
}

#content {
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    background-color: #ffac0e;
    background-position: center;

}

.main-content {
    grid-column: 2/3;
    background-color: rgba(251, 174, 137, 0.74);
    padding: 20px;
    box-shadow: 2px 0 3px -1px lightgrey, -2px 0 3px -1px lightgrey;
}

.home-content {
    display: grid;
    gap: 16px;
    grid-template-rows: 1fr 3fr;
}

.mission-statement {
    justify-self: center;
    font-style: italic;
    font-size: 1.1em;
    align-self: center;
}

.special-div {
    display: grid;
    gap: 8px;
}

.specials-title {
    justify-self: center;
    align-self: center;
    font-weight: bold;
    font-size: 1.3em;
}

.special {
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    align-items: center;
}

.special-title {
    font-weight: bold;
    grid-column: 1/2;
    font-size: 1.1em;
}

.special-desc {
    grid-column: 1/3;
    grid-row: 2/3;
    align-self: flex-start;
}

.special-price {
    grid-column: 2/3;
    justify-self: flex-end;
}

.section {
    display: grid;
    grid-template-rows: 30px repeat(1fr);
    gap: 4px;
}

.menu-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    gap: 2px;
}

.item-name {
    grid-row: 1/2;
    font-weight: bold;
}

.item-desc {
    grid-row: 2/3;
    grid-column: 1/3;
}

.item-price {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: flex-end;
}

.about-content {
    display: grid;
    gap: 4px;
}

.locations {
    display: grid;
}

.location {
    display: grid;
    gap: 4px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 20px 20px 50px 200px;
}

.location-name {
    font-weight: bold;
    grid-column: 1/3;
    justify-self: center;
    align-self: center;
    font-size: 1.3em;
}

.address {
    grid-column: 2/3;
    justify-self: flex-end;
}

.loc-image {
    grid-column: 2/3;
    grid-row: 3/6;
    width: 250px;
    justify-self: flex-end;
}

.phone-numner {
    grid-column: 1/2;
    grid-row: 2/3;
}

.email {
    grid-column: 1/2;
    grid-row: 3/4;
}
.trading {
    grid-column: 1/2;
    grid-row: 4/6;
}
.trading-day {
    display: grid;
    gap: 2px;
    grid-template-columns: 75px 1fr;
}

.about-statement {
    white-space: pre-wrap;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,4CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,4BAA4B;IAC5B,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,SAAS;IACT,mBAAmB;IACnB,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,gCAAgC;IAChC,cAAc;IACd,gBAAgB;IAChB,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,oBAAoB;IACpB,eAAe;IACf,gBAAgB;IAChB,gCAAgC;IAChC,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,yBAAyB;IACzB,2BAA2B;;AAE/B;;AAEA;IACI,gBAAgB;IAChB,2CAA2C;IAC3C,aAAa;IACb,+DAA+D;AACnE;;AAEA;IACI,aAAa;IACb,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,6CAA6C;AACjD;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,aAAa;IACb,QAAQ;IACR,+BAA+B;AACnC;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["@font-face {\n    font-family: \"Just Another Hand\";\n    src: url(\"./JustAnotherHand-Regular.woff\");\n}\n\nbody {\n    margin: 0px;\n    display: grid;\n    grid-template-rows: 80px 1fr;\n    background-color: #dc6b29;\n    height: 100vh;\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    box-shadow: 0px 2px 2px 0px grey;\n    z-index: 1;\n}\n\n.logo {\n    order: -2;\n    justify-self: start;\n    width: 80px;\n    color: #b61500;\n}\n\nh1 {\n    grid-column: 2/3;\n    margin: 0px;\n    padding: 0px;\n    font-family: \"Just Another Hand\";\n    font-size: 3em;\n    margin-top: 10px;\n    transform: scale(2, 1);\n    color: #b61500;\n}\n\nnav {\n    justify-self: end;\n    grid-column: 3/4;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    overflow: hidden;\n    padding-right: 20px;\n    gap: 50px;\n}\n\n.nav-btn {\n    border: none;\n    background-color: transparent;\n    font-family: inherit;\n    cursor: pointer;\n    font-size: 1.2em;\n    font-family: \"Just Another Hand\";\n    transform: scale(2, 1);\n    width: 50px;\n}\n\n.nav-btn:hover:enabled {\n    transform: scale(2.1, 1.1);\n}\n\n.nav-btn:disabled {\n    cursor: default;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 800px 1fr;\n    background-color: #ffac0e;\n    background-position: center;\n\n}\n\n.main-content {\n    grid-column: 2/3;\n    background-color: rgba(251, 174, 137, 0.74);\n    padding: 20px;\n    box-shadow: 2px 0 3px -1px lightgrey, -2px 0 3px -1px lightgrey;\n}\n\n.home-content {\n    display: grid;\n    gap: 16px;\n    grid-template-rows: 1fr 3fr;\n}\n\n.mission-statement {\n    justify-self: center;\n    font-style: italic;\n    font-size: 1.1em;\n    align-self: center;\n}\n\n.special-div {\n    display: grid;\n    gap: 8px;\n}\n\n.specials-title {\n    justify-self: center;\n    align-self: center;\n    font-weight: bold;\n    font-size: 1.3em;\n}\n\n.special {\n    display: grid;\n    gap: 8px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 3fr;\n    align-items: center;\n}\n\n.special-title {\n    font-weight: bold;\n    grid-column: 1/2;\n    font-size: 1.1em;\n}\n\n.special-desc {\n    grid-column: 1/3;\n    grid-row: 2/3;\n    align-self: flex-start;\n}\n\n.special-price {\n    grid-column: 2/3;\n    justify-self: flex-end;\n}\n\n.section {\n    display: grid;\n    grid-template-rows: 30px repeat(1fr);\n    gap: 4px;\n}\n\n.menu-item {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 2fr;\n    gap: 2px;\n}\n\n.item-name {\n    grid-row: 1/2;\n    font-weight: bold;\n}\n\n.item-desc {\n    grid-row: 2/3;\n    grid-column: 1/3;\n}\n\n.item-price {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    justify-self: flex-end;\n}\n\n.about-content {\n    display: grid;\n    gap: 4px;\n}\n\n.locations {\n    display: grid;\n}\n\n.location {\n    display: grid;\n    gap: 4px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 50px 20px 20px 50px 200px;\n}\n\n.location-name {\n    font-weight: bold;\n    grid-column: 1/3;\n    justify-self: center;\n    align-self: center;\n    font-size: 1.3em;\n}\n\n.address {\n    grid-column: 2/3;\n    justify-self: flex-end;\n}\n\n.loc-image {\n    grid-column: 2/3;\n    grid-row: 3/6;\n    width: 250px;\n    justify-self: flex-end;\n}\n\n.phone-numner {\n    grid-column: 1/2;\n    grid-row: 2/3;\n}\n\n.email {\n    grid-column: 1/2;\n    grid-row: 3/4;\n}\n.trading {\n    grid-column: 1/2;\n    grid-row: 4/6;\n}\n.trading-day {\n    display: grid;\n    gap: 2px;\n    grid-template-columns: 75px 1fr;\n}\n\n.about-statement {\n    white-space: pre-wrap;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.json5 */ "./src/about.json5");
/* harmony import */ var _syd_location_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syd_location.jpeg */ "./src/syd_location.jpeg");



function About() {

    const homeBtn = document.querySelector(".home");
    homeBtn.disabled = false;

    const aboutBtn = document.querySelector(".about");
    aboutBtn.disabled = true;

    const menuBtn = document.querySelector(".menu");
    menuBtn.disabled = false;

    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.classList.add('about-content');
    
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-statement");
    aboutDiv.innerHTML = `${_about_json5__WEBPACK_IMPORTED_MODULE_0__.content.about}`
    mainContent.appendChild(aboutDiv);

    const locationsDiv = document.createElement("div");
    locationsDiv.classList.add("locations");
    const locations = [..._about_json5__WEBPACK_IMPORTED_MODULE_0__.content.loc_info];

    locations.forEach((element) => {
        const location = document.createElement("div");
        location.classList.add("location");

        const locName = document.createElement("div");
        locName.classList.add("location-name");
        locName.innerHTML = `${element.loc_name}`;
        location.appendChild(locName);

        const locAdd = document.createElement("div");
        locAdd.classList.add("address");
        locAdd.innerHTML = `${element.loc_add}`;
        location.appendChild(locAdd);

        const locImage = new Image();
        locImage.src = _syd_location_jpeg__WEBPACK_IMPORTED_MODULE_1__;
        locImage.classList.add("loc-image");
        location.appendChild(locImage);

        const locPhone = document.createElement("div");
        locPhone.classList.add("phone-numner");
        locPhone.innerHTML = `${element.loc_phone}`;
        location.appendChild(locPhone);

        const locEmail = document.createElement("div");
        locEmail.classList.add("email");
        locEmail.innerHTML = `${element.loc_email}`;
        location.appendChild(locEmail);

        const tradingDiv = document.createElement("div");
        tradingDiv.classList.add("trading");
        const hours = [...element.trading];

        hours.forEach((subElem)=> {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("trading-day");
            
            const dayName = document.createElement("div");
            dayName.classList.add("day-name");
            dayName.innerHTML = `${subElem.day}`;
            dayDiv.appendChild(dayName);

            const dayHours = document.createElement("div");
            dayHours.classList.add("hours");
            dayHours.innerHTML = `${subElem.hours}`;
            dayDiv.appendChild(dayHours);

            tradingDiv.appendChild(dayDiv);
        })

        location.appendChild(tradingDiv);

        locationsDiv.appendChild(location);
    })
    mainContent.appendChild(locationsDiv);
    contentDiv.appendChild(mainContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.json5 */ "./src/home.json5");


function Home() {

    const homeBtn = document.querySelector(".home");
    homeBtn.disabled = true;

    const aboutBtn = document.querySelector(".about");
    aboutBtn.disabled = false;

    const menuBtn = document.querySelector(".menu");
    menuBtn.disabled = false;


    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.classList.add('home-content');

    const missionDiv = document.createElement("div");
    missionDiv.innerHTML = `"${_home_json5__WEBPACK_IMPORTED_MODULE_0__.content.statement}"`;
    missionDiv.classList.add('mission-statement');

    mainContent.appendChild(missionDiv);

    const specialsDiv = document.createElement("div");
    specialsDiv.classList.add("special-div");

    const specialsTitle = document.createElement("div");
    specialsTitle.classList.add("specials-title");
    specialsTitle.innerHTML = "This Week's Specials"
    specialsDiv.appendChild(specialsTitle);
    
    const specials = [..._home_json5__WEBPACK_IMPORTED_MODULE_0__.content.specials];
    specials.forEach((element) => {
        const specialDiv = document.createElement("div");
        specialDiv.classList.add("special");
        
        const specialName = document.createElement("div");
        specialName.classList.add("special-title");
        specialName.innerHTML = `${element.title}`;
        specialDiv.appendChild(specialName);

        const specialDesc = document.createElement("div");
        specialDesc.classList.add("special-desc");
        specialDesc.innerHTML = `${element.desc}`;
        specialDiv.appendChild(specialDesc);

        const specialPrice = document.createElement("div");
        specialPrice.classList.add("special-price");
        specialPrice.innerHTML = `${element.price}`;
        specialDiv.appendChild(specialPrice);

        specialsDiv.appendChild(specialDiv);
    })

    mainContent.appendChild(specialsDiv);

    contentDiv.appendChild(mainContent);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json5 */ "./src/menu.json5");


function Menu() {

    // NAV FUNCTIONALITY
    const homeBtn = document.querySelector(".home");
    homeBtn.disabled = false;

    const aboutBtn = document.querySelector(".about");
    aboutBtn.disabled = false;

    const menuBtn = document.querySelector(".menu");
    menuBtn.disabled = true;

    // Menu Info
    const contentDiv = document.body.querySelector('#content');
    contentDiv.innerHTML = "";
    // Div Menu Will Utilise
    const mainContent = document.createElement("div");
    mainContent.classList.add('main-content');
    mainContent.classList.add('menu-content');
    // Heading
    const contentHeading = document.createElement("h2");
    contentHeading.innerHTML = `${_menu_json5__WEBPACK_IMPORTED_MODULE_0__.title}`;
    mainContent.appendChild(contentHeading);

    const jsonContent = _menu_json5__WEBPACK_IMPORTED_MODULE_0__.content;

    for (let iter = 0; iter < jsonContent.length; iter++) {
        
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');

        // Add Menu Section Heading
        const subHeadingDiv = document.createElement("h3");
        subHeadingDiv.classList.add('menu-section-heading');
        subHeadingDiv.innerHTML = `${jsonContent[iter].heading}`;
        sectionDiv.appendChild(subHeadingDiv);

        const sectionItems = jsonContent[iter].items;

        for (let subIter = 0; subIter < sectionItems.length; subIter++) {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            // Item Name
            const itemName = document.createElement('div');
            itemName.classList.add('item-name');
            itemName.innerHTML = `${sectionItems[subIter].name}`;
            menuItem.appendChild(itemName);

            // Item Description
            const itemDesc = document.createElement('div');
            itemDesc.classList.add('item-desc');
            itemDesc.innerHTML = `${sectionItems[subIter].desc}`;
            menuItem.appendChild(itemDesc);

            // Item Price
            const itemPrice = document.createElement('div');
            itemPrice.classList.add('item-price');
            itemPrice.innerHTML = `${sectionItems[subIter].price}`;
            menuItem.appendChild(itemPrice);

            sectionDiv.appendChild(menuItem);
        }

        mainContent.appendChild(sectionDiv);
    }




    contentDiv.appendChild(mainContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/JustAnotherHand-Regular.woff":
/*!******************************************!*\
  !*** ./src/JustAnotherHand-Regular.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1016d5fa02593e0f2272.woff";

/***/ }),

/***/ "./src/SliceofLifeLogobyDesigner.png":
/*!*******************************************!*\
  !*** ./src/SliceofLifeLogobyDesigner.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfcf46dc82f07f573fb7.png";

/***/ }),

/***/ "./src/syd_location.jpeg":
/*!*******************************!*\
  !*** ./src/syd_location.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5e950d6ada0cf105fbb.jpeg";

/***/ }),

/***/ "./src/about.json5":
/*!*************************!*\
  !*** ./src/about.json5 ***!
  \*************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"About Us","content":{"about":"Welcome to Slice of Life, where every bite tells a store! Established in 2024 by the visionary Loui, Slice of Life brings the heart and soul of New York-style pizza to Sydney. \\n \\nAt Slice of Life, we\'re not just serving pizzas, we\'re crafting culinary experiences. Our passion for authentic flavours and dedication to quality ingredients shines through in every slice we serve. From the crisp, thin crust to the bubbling cheese and robust tomato sauce, each bite is a celebration of tradition and taste. \\n \\nBut Slice of Life is more than just a pizzeria; it\'s a gathering place for friends, families and pizza aficianodos alike. Step into our welcoming atmosphere and feel the energy of New York City right here in Sydney. Whether you\'re grabbing a quick slice on the go or settling in for a leisurely meal, our friendly staff and cozy ambiance ensure every visit is memorable.\\n\\nJoin us at Slice of Life and experience the magic of New York-style pizza like never before. Because here, every slice is a taste of life itself.","loc_info":[{"loc_name":"Sydney","loc_add":"43 Darling St, Bakersfield, Sydney, Australia","loc_phone":"02-XXXX-XXXX","loc_email":"Sydney@SliceOfLife.com.au","trading":[{"day":"Sunday","hours":"5pm - 9pm"},{"day":"Monday","hours":"5pm - 9pm"},{"day":"Tuesday","hours":"5pm - 9pm"},{"day":"Wednesday","hours":"5pm - 9pm"},{"day":"Thursday","hours":"5pm - 10pm"},{"day":"Friday","hours":"5pm - 1am"},{"day":"Saturday","hours":"5pm - 12am"}]}]}}');

/***/ }),

/***/ "./src/home.json5":
/*!************************!*\
  !*** ./src/home.json5 ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"Slice Of Life","content":{"statement":"At Slice of Life, we believe in serving more than just a slice of pizza; we\'re dedicated to delivering an authentic taste of New York with every bite. Our mission is to craft exceptional pizzas using the finest ingredients, traditional recipes, and a commitment to quality that reflects the bustling energy and diverse flavors of the city that never sleeps. From the first dough toss to the last savory slice, we aim to provide a memorable dining experience that captures the essence of New York\'s culinary culture, bringing people together one delicious pie at a time.","specials":[{"title":"The Brooklyn Classic","desc":"A tribute to the borough that never sleeps! This pizza starts with a hand-tossed thin crust, topped with a rich tomato sauce made from San Marzano tomatoes and seasoned with oregano, garlic, and red pepper flakes. Generously layered with whole milk mozzarella cheese, sliced pepperoni, Italian sausage, and diced green bell peppers. Finished with a sprinkle of grated Parmigiano-Reggiano and a drizzle of extra virgin olive oil.","price":"$24.99"},{"title":"Manhatten Margherita","desc":"A timeless favorite with a New York twist! Begin with a crispy thin crust brushed with garlic-infused olive oil. Spread a layer of crushed San Marzano tomatoes seasoned with sea salt and fresh basil leaves. Arrange slices of fresh mozzarella cheese and heirloom tomatoes on top, then finish with a touch of grated Parmigiano-Reggiano and a chiffonade of basil. After baking, a drizzle of balsamic glaze adds a hint of sweetness to every bite.","price":"$21.99"},{"title":"Queens Veggie Supreme","desc":"For the veggie lovers out there! This pizza features a crispy thin crust coated with a savory marinara sauce made from vine-ripened tomatoes, garlic, and basil. Load it up with a colorful medley of sautéed vegetables such as zucchini, yellow squash, red onions, bell peppers, and mushrooms. Sprinkle on a blend of whole milk mozzarella and provolone cheeses, then finish with a sprinkle of fresh parsley and a dash of crushed red pepper flakes for a touch of heat.","price":"$23.99"}]}}');

/***/ }),

/***/ "./src/menu.json5":
/*!************************!*\
  !*** ./src/menu.json5 ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"title":"Menu","content":[{"heading":"Entrees","items":[{"name":"Garlic Knots","desc":"Warm, soft knots of dough brushed with garlic-infused olive oil and sprinkled with Paremsan Cheese.","price":"$5.99"},{"name":"Mozzarella Stick","desc":"Crispy on the outside, gooey on the inside. Served with marinara sauce for dipped.","price":"$6.99"},{"name":"Buffalo Wings","desc":"6 Pieces of rispy chicken wings tossed in your choice of mild, medium, hot or extra hot buffalo sauce. Served with celery sticks and blue cheese dressing.","price":"$8.99"}]},{"heading":"Salads","items":[{"name":"Classic Caesar Salad","desc":"Crisp romaine lettuce, Parmesan cheese, crunchy croutons, and Caesar dressing.","price":"$8.99"},{"name":"Garden Salad","desc":"Fresh mixed greens, tomatoes, cucumbers, carrots, red onions, and your choice of dressing.","price":"$7.99"}]},{"heading":"Traditional Pizzas","items":[{"name":"Plain Cheese","desc":"Classic New York with Melted Mozzarella cheese and tangy tomato sauce on our signature thin crust.","price":"$12.99"},{"name":"Pepperoni","desc":"Generously topped with slices of spicy pepperoni and melted mozzarella cheese.","price":"$14.99"},{"name":"Supreme","desc":"A hearty combination of pepperoni, sausage, green peppers, onions, mushrooms, and black olives.","price":"$14.99"},{"name":"White Pizza","desc":"A delicious blend of ricotta, mozzarella, Parmesan, garlic, and olive oil - no tomato sauce.","price":"$14.99"}]},{"heading":"Specialty Pies","items":[{"name":"The Brooklyn Bridge","desc":"Pepperoni, Italian sausage, mushrooms, green peppers, onions, and black olives.","price":"$19.99"},{"name":"The Greensward Gastronomy","desc":"Spinach, sun-dried tomatoes, feta cheese, black olives, and roasted garlic.","price":"$19.99"},{"name":"Times Square Tango","desc":"BBQ chicken, red onions, cilantro, and a drizzle of tangy BBQ sauce.","price":"$19.99"},{"name":"Empire State of Mind","desc":"Prosciutto, arugula, shaved Parmesan, and balsamic glaze.","price":"$19.99"}]},{"heading":"Beverages","items":[{"name":"Sodas","desc":"Coke, Diet Coke, Sprite, Root Beer, Lemonade","price":"$2.99"},{"name":"Bottled Water","desc":"","price":"$2.50"},{"name":"Iced Tea","desc":"Straight from the South","price":"$3.99"}]},{"heading":"Desserts","items":[{"name":"New York Cheesecake","desc":"Creamy and rich, served with a choice of raspberry or strawberry sauce.","price":"$4.99"},{"name":"Cannoli","desc":"Crisp pastry shells filled with sweetned ricotta cheese and chocolate chips.","price":"$3.99"}]}]}');

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _SliceofLifeLogobyDesigner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SliceofLifeLogobyDesigner.png */ "./src/SliceofLifeLogobyDesigner.png");







const headerDiv = document.querySelector('header');
const myLogo = new Image();
myLogo.src = _SliceofLifeLogobyDesigner_png__WEBPACK_IMPORTED_MODULE_4__;
myLogo.classList.add('logo');
headerDiv.appendChild(myLogo);

const heading = document.querySelector('h1');
heading.innerHTML = "Slice of Life";

const HomeBtn = document.querySelector('.home');
HomeBtn.addEventListener("click", () => (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());

const MenuBtn = document.querySelector('.menu');
MenuBtn.addEventListener("click", () => (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());

const AboutBtn = document.querySelector('.about');
AboutBtn.addEventListener("click", () => (0,_about__WEBPACK_IMPORTED_MODULE_3__["default"])());

(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlJQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVks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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ0E7QUFDRTtBQUN1Qjs7O0FBR25EO0FBQ0E7QUFDQSxhQUFhLDJEQUFJO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxpREFBSTs7QUFFNUM7QUFDQSx3Q0FBd0MsaURBQUk7O0FBRTVDO0FBQ0EseUNBQXlDLGtEQUFLOztBQUU5QyxpREFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0p1c3RBbm90aGVySGFuZC1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkp1c3QgQW5vdGhlciBIYW5kXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2YjI5O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCBncmV5O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sb2dvIHtcbiAgICBvcmRlcjogLTI7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICB3aWR0aDogODBweDtcbiAgICBjb2xvcjogI2I2MTUwMDtcbn1cblxuaDEge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkp1c3QgQW5vdGhlciBIYW5kXCI7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIsIDEpO1xuICAgIGNvbG9yOiAjYjYxNTAwO1xufVxuXG5uYXYge1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIGdyaWQtY29sdW1uOiAzLzQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5uYXYtYnRuIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC1mYW1pbHk6IFwiSnVzdCBBbm90aGVyIEhhbmRcIjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIsIDEpO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ubmF2LWJ0bjpob3ZlcjplbmFibGVkIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuMSwgMS4xKTtcbn1cblxuLm5hdi1idG46ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODAwcHggMWZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFjMGU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDE3NCwgMTM3LCAwLjc0KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAwIDNweCAtMXB4IGxpZ2h0Z3JleSwgLTJweCAwIDNweCAtMXB4IGxpZ2h0Z3JleTtcbn1cblxuLmhvbWUtY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDE2cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xufVxuXG4ubWlzc2lvbi1zdGF0ZW1lbnQge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnNwZWNpYWwtZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogOHB4O1xufVxuXG4uc3BlY2lhbHMtdGl0bGUge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uc3BlY2lhbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDhweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcGVjaWFsLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5zcGVjaWFsLWRlc2Mge1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uc3BlY2lhbC1wcmljZSB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggcmVwZWF0KDFmcik7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi5tZW51LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgICBnYXA6IDJweDtcbn1cblxuLml0ZW0tbmFtZSB7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW0tZGVzYyB7XG4gICAgZ3JpZC1yb3c6IDIvMztcbiAgICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG4uaXRlbS1wcmljZSB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG59XG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNHB4O1xufVxuXG4ubG9jYXRpb25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiA0cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAyMHB4IDIwcHggNTBweCAyMDBweDtcbn1cblxuLmxvY2F0aW9uLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdyaWQtY29sdW1uOiAxLzM7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi5hZGRyZXNzIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG59XG5cbi5sb2MtaW1hZ2Uge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDMvNjtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLnBob25lLW51bW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBncmlkLXJvdzogMi8zO1xufVxuXG4uZW1haWwge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDMvNDtcbn1cbi50cmFkaW5nIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiA0LzY7XG59XG4udHJhZGluZy1kYXkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAycHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDFmcjtcbn1cblxuLmFib3V0LXN0YXRlbWVudCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztJQUNoQyw0Q0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QiwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQyxhQUFhO0lBQ2IsK0RBQStEO0FBQ25FOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJKdXN0IEFub3RoZXIgSGFuZFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL0p1c3RBbm90aGVySGFuZC1SZWd1bGFyLndvZmZcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2YjI5O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDBweCBncmV5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIG9yZGVyOiAtMjtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGNvbG9yOiAjYjYxNTAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSnVzdCBBbm90aGVyIEhhbmRcXFwiO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLCAxKTtcXG4gICAgY29sb3I6ICNiNjE1MDA7XFxufVxcblxcbm5hdiB7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJKdXN0IEFub3RoZXIgSGFuZFxcXCI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMiwgMSk7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlcjplbmFibGVkIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjEsIDEuMSk7XFxufVxcblxcbi5uYXYtYnRuOmRpc2FibGVkIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwMHB4IDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWMwZTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTEsIDE3NCwgMTM3LCAwLjc0KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDAgM3B4IC0xcHggbGlnaHRncmV5LCAtMnB4IDAgM3B4IC0xcHggbGlnaHRncmV5O1xcbn1cXG5cXG4uaG9tZS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxufVxcblxcbi5taXNzaW9uLXN0YXRlbWVudCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNwZWNpYWwtZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5zcGVjaWFscy10aXRsZSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4uc3BlY2lhbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogOHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNwZWNpYWwtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLnNwZWNpYWwtZGVzYyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zcGVjaWFsLXByaWNlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggcmVwZWF0KDFmcik7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uaXRlbS1uYW1lIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pdGVtLWRlc2Mge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uaXRlbS1wcmljZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5hYm91dC1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5sb2NhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDRweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMjBweCAyMHB4IDUwcHggMjAwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1uYW1lIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5hZGRyZXNzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmxvYy1pbWFnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAzLzY7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnBob25lLW51bW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbi5lbWFpbCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcbi50cmFkaW5nIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDQvNjtcXG59XFxuLnRyYWRpbmctZGF5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCAxZnI7XFxufVxcblxcbi5hYm91dC1zdGF0ZW1lbnQge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFib3V0RGF0YSBmcm9tIFwiLi9hYm91dC5qc29uNVwiXG5pbXBvcnQgc3lkX2xvY2F0aW9uIGZyb20gXCIuL3N5ZF9sb2NhdGlvbi5qcGVnXCJcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICAgIGhvbWVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbiAgICBhYm91dEJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuICAgIG1lbnVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1zdGF0ZW1lbnRcIik7XG4gICAgYWJvdXREaXYuaW5uZXJIVE1MID0gYCR7YWJvdXREYXRhLmNvbnRlbnQuYWJvdXR9YFxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcblxuICAgIGNvbnN0IGxvY2F0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbnNcIik7XG4gICAgY29uc3QgbG9jYXRpb25zID0gWy4uLmFib3V0RGF0YS5jb250ZW50LmxvY19pbmZvXTtcblxuICAgIGxvY2F0aW9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IGxvY05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NOYW1lLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1uYW1lXCIpO1xuICAgICAgICBsb2NOYW1lLmlubmVySFRNTCA9IGAke2VsZW1lbnQubG9jX25hbWV9YDtcbiAgICAgICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jTmFtZSk7XG5cbiAgICAgICAgY29uc3QgbG9jQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jQWRkLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xuICAgICAgICBsb2NBZGQuaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5sb2NfYWRkfWA7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY0FkZCk7XG5cbiAgICAgICAgY29uc3QgbG9jSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbG9jSW1hZ2Uuc3JjID0gc3lkX2xvY2F0aW9uO1xuICAgICAgICBsb2NJbWFnZS5jbGFzc0xpc3QuYWRkKFwibG9jLWltYWdlXCIpO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NJbWFnZSk7XG5cbiAgICAgICAgY29uc3QgbG9jUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NQaG9uZS5jbGFzc0xpc3QuYWRkKFwicGhvbmUtbnVtbmVyXCIpO1xuICAgICAgICBsb2NQaG9uZS5pbm5lckhUTUwgPSBgJHtlbGVtZW50LmxvY19waG9uZX1gO1xuICAgICAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NQaG9uZSk7XG5cbiAgICAgICAgY29uc3QgbG9jRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2NFbWFpbC5jbGFzc0xpc3QuYWRkKFwiZW1haWxcIik7XG4gICAgICAgIGxvY0VtYWlsLmlubmVySFRNTCA9IGAke2VsZW1lbnQubG9jX2VtYWlsfWA7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY0VtYWlsKTtcblxuICAgICAgICBjb25zdCB0cmFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdHJhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwidHJhZGluZ1wiKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBbLi4uZWxlbWVudC50cmFkaW5nXTtcblxuICAgICAgICBob3Vycy5mb3JFYWNoKChzdWJFbGVtKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkYXlEaXYuY2xhc3NMaXN0LmFkZChcInRyYWRpbmctZGF5XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRheU5hbWUuY2xhc3NMaXN0LmFkZChcImRheS1uYW1lXCIpO1xuICAgICAgICAgICAgZGF5TmFtZS5pbm5lckhUTUwgPSBgJHtzdWJFbGVtLmRheX1gO1xuICAgICAgICAgICAgZGF5RGl2LmFwcGVuZENoaWxkKGRheU5hbWUpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkYXlIb3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XG4gICAgICAgICAgICBkYXlIb3Vycy5pbm5lckhUTUwgPSBgJHtzdWJFbGVtLmhvdXJzfWA7XG4gICAgICAgICAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoZGF5SG91cnMpO1xuXG4gICAgICAgICAgICB0cmFkaW5nRGl2LmFwcGVuZENoaWxkKGRheURpdik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQodHJhZGluZ0Rpdik7XG5cbiAgICAgICAgbG9jYXRpb25zRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICB9KVxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uc0Rpdik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyIsImltcG9ydCBob21lRGF0YSBmcm9tIFwiLi9ob21lLmpzb241XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICAgIGhvbWVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0XCIpO1xuICAgIGFib3V0QnRuLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xuICAgIG1lbnVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblxuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUtY29udGVudCcpO1xuXG4gICAgY29uc3QgbWlzc2lvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWlzc2lvbkRpdi5pbm5lckhUTUwgPSBgXCIke2hvbWVEYXRhLmNvbnRlbnQuc3RhdGVtZW50fVwiYDtcbiAgICBtaXNzaW9uRGl2LmNsYXNzTGlzdC5hZGQoJ21pc3Npb24tc3RhdGVtZW50Jyk7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtaXNzaW9uRGl2KTtcblxuICAgIGNvbnN0IHNwZWNpYWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGVjaWFsc0Rpdi5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbC1kaXZcIik7XG5cbiAgICBjb25zdCBzcGVjaWFsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGVjaWFsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFscy10aXRsZVwiKTtcbiAgICBzcGVjaWFsc1RpdGxlLmlubmVySFRNTCA9IFwiVGhpcyBXZWVrJ3MgU3BlY2lhbHNcIlxuICAgIHNwZWNpYWxzRGl2LmFwcGVuZENoaWxkKHNwZWNpYWxzVGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IHNwZWNpYWxzID0gWy4uLmhvbWVEYXRhLmNvbnRlbnQuc3BlY2lhbHNdO1xuICAgIHNwZWNpYWxzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BlY2lhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwZWNpYWxEaXYuY2xhc3NMaXN0LmFkZChcInNwZWNpYWxcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzcGVjaWFsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwZWNpYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsLXRpdGxlXCIpO1xuICAgICAgICBzcGVjaWFsTmFtZS5pbm5lckhUTUwgPSBgJHtlbGVtZW50LnRpdGxlfWA7XG4gICAgICAgIHNwZWNpYWxEaXYuYXBwZW5kQ2hpbGQoc3BlY2lhbE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHNwZWNpYWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BlY2lhbERlc2MuY2xhc3NMaXN0LmFkZChcInNwZWNpYWwtZGVzY1wiKTtcbiAgICAgICAgc3BlY2lhbERlc2MuaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5kZXNjfWA7XG4gICAgICAgIHNwZWNpYWxEaXYuYXBwZW5kQ2hpbGQoc3BlY2lhbERlc2MpO1xuXG4gICAgICAgIGNvbnN0IHNwZWNpYWxQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwZWNpYWxQcmljZS5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbC1wcmljZVwiKTtcbiAgICAgICAgc3BlY2lhbFByaWNlLmlubmVySFRNTCA9IGAke2VsZW1lbnQucHJpY2V9YDtcbiAgICAgICAgc3BlY2lhbERpdi5hcHBlbmRDaGlsZChzcGVjaWFsUHJpY2UpO1xuXG4gICAgICAgIHNwZWNpYWxzRGl2LmFwcGVuZENoaWxkKHNwZWNpYWxEaXYpO1xuICAgIH0pXG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzcGVjaWFsc0Rpdik7XG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IG1lbnVEYXRhIGZyb20gXCIuL21lbnUuanNvbjVcIjtcblxuZnVuY3Rpb24gTWVudSgpIHtcblxuICAgIC8vIE5BViBGVU5DVElPTkFMSVRZXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbiAgICBob21lQnRuLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG4gICAgYWJvdXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gICAgbWVudUJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAvLyBNZW51IEluZm9cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAvLyBEaXYgTWVudSBXaWxsIFV0aWxpc2VcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250ZW50Jyk7XG4gICAgLy8gSGVhZGluZ1xuICAgIGNvbnN0IGNvbnRlbnRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnRlbnRIZWFkaW5nLmlubmVySFRNTCA9IGAke21lbnVEYXRhLnRpdGxlfWA7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRpbmcpO1xuXG4gICAgY29uc3QganNvbkNvbnRlbnQgPSBtZW51RGF0YS5jb250ZW50O1xuXG4gICAgZm9yIChsZXQgaXRlciA9IDA7IGl0ZXIgPCBqc29uQ29udGVudC5sZW5ndGg7IGl0ZXIrKykge1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcblxuICAgICAgICAvLyBBZGQgTWVudSBTZWN0aW9uIEhlYWRpbmdcbiAgICAgICAgY29uc3Qgc3ViSGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgc3ViSGVhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24taGVhZGluZycpO1xuICAgICAgICBzdWJIZWFkaW5nRGl2LmlubmVySFRNTCA9IGAke2pzb25Db250ZW50W2l0ZXJdLmhlYWRpbmd9YDtcbiAgICAgICAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzdWJIZWFkaW5nRGl2KTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uSXRlbXMgPSBqc29uQ29udGVudFtpdGVyXS5pdGVtcztcblxuICAgICAgICBmb3IgKGxldCBzdWJJdGVyID0gMDsgc3ViSXRlciA8IHNlY3Rpb25JdGVtcy5sZW5ndGg7IHN1Ykl0ZXIrKykge1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgICAgICAvLyBJdGVtIE5hbWVcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGAke3NlY3Rpb25JdGVtc1tzdWJJdGVyXS5uYW1lfWA7XG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZW0gRGVzY3JpcHRpb25cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2MnKTtcbiAgICAgICAgICAgIGl0ZW1EZXNjLmlubmVySFRNTCA9IGAke3NlY3Rpb25JdGVtc1tzdWJJdGVyXS5kZXNjfWA7XG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG5cbiAgICAgICAgICAgIC8vIEl0ZW0gUHJpY2VcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcbiAgICAgICAgICAgIGl0ZW1QcmljZS5pbm5lckhUTUwgPSBgJHtzZWN0aW9uSXRlbXNbc3ViSXRlcl0ucHJpY2V9YDtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgICAgICAgICAgIHNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbkRpdik7XG4gICAgfVxuXG5cblxuXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9TbGljZW9mTGlmZUxvZ29ieURlc2lnbmVyLnBuZ1wiO1xuXG5cbmNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuY29uc3QgbXlMb2dvID0gbmV3IEltYWdlKCk7XG5teUxvZ28uc3JjID0gbG9nbztcbm15TG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5oZWFkZXJEaXYuYXBwZW5kQ2hpbGQobXlMb2dvKTtcblxuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5oZWFkaW5nLmlubmVySFRNTCA9IFwiU2xpY2Ugb2YgTGlmZVwiO1xuXG5jb25zdCBIb21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbkhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEhvbWUoKSk7XG5cbmNvbnN0IE1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gTWVudSgpKTtcblxuY29uc3QgQWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbkFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBBYm91dCgpKTtcblxuSG9tZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==