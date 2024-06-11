/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/header.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/header.scss ***!
  \***********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/jashandullat.jpg */ "./src/imgs/jashandullat.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/icons/menu.png */ "./src/imgs/icons/menu.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
  background-color: #17171c;
  padding-inline: 1rem;
  height: 70px; }
  header .logo-section {
    padding-inline: .5rem;
    gap: .5rem;
    border-right: 1px solid rgba(255, 255, 255, 0.404); }
    header .logo-section .logo-box {
      height: 30px;
      width: 30px;
      background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
      background-size: cover; }
    header .logo-section .material-symbols-outlined {
      color: rgba(255, 255, 255, 0.623);
      transform: rotate(180deg); }
    header .logo-section .material-symbols-outlined.active {
      transform: translateY(10%); }
    header .logo-section .material-symbols-outlined:hover {
      transition: all .4s;
      transform: translateY(10%);
      color: white; }
  header .store {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 1rem; }
  header nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-inline-start: .7rem; }
    @media screen and (max-width: 750px) {
      header nav {
        display: none; } }
    header nav .left-nav {
      gap: clamp(0.5rem, 1.5vw, 2rem); }
      header nav .left-nav .support,
      header nav .left-nav .distribute {
        opacity: .7; }
    header nav .right-nav {
      gap: clamp(0.5rem, 1vw, 1rem); }
      header nav .right-nav .language {
        position: relative; }
        header nav .right-nav .language span {
          color: rgba(255, 255, 255, 0.5); }
        header nav .right-nav .language .friendly-div {
          position: absolute;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          background-color: transparent;
          height: 3rem;
          width: 8rem;
          display: none;
          z-index: 2; }
        header nav .right-nav .language > ul {
          position: absolute;
          visibility: hidden;
          left: 50%;
          transform: translateX(-50%);
          inset-block-start: 4rem;
          z-index: 2;
          background-color: #1f1f23;
          padding: 1rem;
          width: 8rem;
          border-radius: 2vh;
          font-size: .9rem;
          display: flex;
          flex-direction: column;
          gap: .5rem; }
          header nav .right-nav .language > ul li {
            color: rgba(255, 255, 255, 0.5);
            border-radius: .5rem;
            padding: .5rem 1rem;
            cursor: pointer; }
          header nav .right-nav .language > ul li:hover {
            background-color: #404044;
            color: white; }
        header nav .right-nav .language ul:hover {
          visibility: visible; }
      header nav .right-nav .language:hover > ul {
        visibility: visible; }
      header nav .right-nav .language:hover > .friendly-div {
        display: block; }
      header nav .right-nav .language:hover span {
        color: white; }
      header nav .right-nav .user {
        height: 40px;
        aspect-ratio: 1;
        background-color: #313135;
        border-radius: 100vh;
        justify-content: center; }
  header .toggle-btn {
    height: 40px;
    aspect-ratio: 1;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-color: transparent;
    outline: none;
    border: none;
    display: none;
    cursor: pointer;
    margin-left: auto; }
    @media screen and (max-width: 750px) {
      header .toggle-btn {
        display: block; } }
`, "",{"version":3,"sources":["webpack://./src/scss/header.scss"],"names":[],"mappings":"AAAA;EACI,yBAAmC;EACnC,oBAAoB;EACpB,YAAY,EAAA;EAHhB;IAMQ,qBAAqB;IACrB,UAAU;IACV,kDAAkD,EAAA;IAR1D;MAWY,YAAY;MACZ,WAAW;MACX,mDAA2C;MAC3C,sBAAsB,EAAA;IAdlC;MAkBY,iCAAiC;MACjC,yBAAyB,EAAA;IAnBrC;MAuBY,0BAA0B,EAAA;IAvBtC;MA2BY,mBAAmB;MACnB,0BAA0B;MAC1B,YAAyB,EAAA;EA7BrC;IAkCQ,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB,EAAA;EArCzB;IAyCQ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,2BAA2B,EAAA;IAE3B;MA/CR;QAgDY,aAAa,EAAA,EAyFpB;IAzIL;MAoDY,+BAA8B,EAAA;MApD1C;;QAwDgB,WAAW,EAAA;IAxD3B;MA6DY,6BAA4B,EAAA;MA7DxC;QAgEgB,kBAAkB,EAAA;QAhElC;UAmEoB,+BAA+B,EAAA;QAnEnD;UAuEoB,kBAAkB;UAClB,aAAa;UACb,SAAS;UACT,2BAA2B;UAC3B,6BAA6B;UAC7B,YAAY;UACZ,WAAW;UACX,aAAa;UACb,UAAU,EAAA;QA/E9B;UAmFoB,kBAAkB;UAClB,kBAAkB;UAClB,SAAS;UACT,2BAA2B;UAC3B,uBAAuB;UACvB,UAAU;UAEV,yBAAmC;UACnC,aAAa;UACb,WAAW;UACX,kBAAkB;UAClB,gBAAgB;UAChB,aAAa;UACb,sBAAsB;UACtB,UAAU,EAAA;UAjG9B;YAoGwB,+BAA+B;YAC/B,oBAAoB;YACpB,mBAAmB;YACnB,eAAe,EAAA;UAvGvC;YA2GwB,yBAAmC;YACnC,YAAY,EAAA;QA5GpC;UAiHoB,mBAAmB,EAAA;MAjHvC;QAsHgB,mBAAmB,EAAA;MAtHnC;QA0HgB,cAAc,EAAA;MA1H9B;QA8HgB,YAAY,EAAA;MA9H5B;QAkIgB,YAAY;QACZ,eAAe;QACf,yBAAmC;QACnC,oBAAoB;QACpB,uBAAuB,EAAA;EAtIvC;IA4IQ,YAAY;IACZ,eAAe;IACf,yDAA6C;IAC7C,sBAAsB;IACtB,6BAA6B;IAC7B,aAAa;IACb,YAAY;IACZ,aAAa;IACb,eAAe;IACf,iBAAiB,EAAA;IAEjB;MAvJR;QAwJY,cAAc,EAAA,EAErB","sourcesContent":["header {\r\n    background-color: hsl(240, 8%, 10%);\r\n    padding-inline: 1rem;\r\n    height: 70px;\r\n\r\n    .logo-section {\r\n        padding-inline: .5rem;\r\n        gap: .5rem;\r\n        border-right: 1px solid rgba(255, 255, 255, 0.404);\r\n\r\n        .logo-box {\r\n            height: 30px;\r\n            width: 30px;\r\n            background: url('../imgs/jashandullat.jpg');\r\n            background-size: cover;\r\n        }\r\n\r\n        .material-symbols-outlined {\r\n            color: rgba(255, 255, 255, 0.623);\r\n            transform: rotate(180deg);\r\n        }\r\n\r\n        .material-symbols-outlined.active {\r\n            transform: translateY(10%);\r\n        }\r\n\r\n        .material-symbols-outlined:hover {\r\n            transition: all .4s;\r\n            transform: translateY(10%);\r\n            color: rgb(255, 255, 255);\r\n        }\r\n    }\r\n\r\n    .store {\r\n        text-transform: uppercase;\r\n        font-size: 1.4rem;\r\n        font-weight: 600;\r\n        margin-left: 1rem;\r\n    }\r\n\r\n    nav {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        padding-inline-start: .7rem;\r\n\r\n        @media screen and(max-width: 750px) {\r\n            display: none;\r\n        }\r\n\r\n        .left-nav {\r\n            gap: clamp(.5rem, 1.5vw, 2rem);\r\n\r\n            .support,\r\n            .distribute {\r\n                opacity: .7;\r\n            }\r\n        }\r\n\r\n        .right-nav {\r\n            gap: clamp(.5rem, 1vw, 1rem);\r\n\r\n            .language {\r\n                position: relative;\r\n\r\n                span {\r\n                    color: rgba(255, 255, 255, 0.5);\r\n                }\r\n\r\n                .friendly-div {\r\n                    position: absolute;\r\n                    bottom: -3rem;\r\n                    left: 50%;\r\n                    transform: translateX(-50%);\r\n                    background-color: transparent;\r\n                    height: 3rem;\r\n                    width: 8rem;\r\n                    display: none;\r\n                    z-index: 2;\r\n                }\r\n\r\n                >ul {\r\n                    position: absolute;\r\n                    visibility: hidden;\r\n                    left: 50%;\r\n                    transform: translateX(-50%);\r\n                    inset-block-start: 4rem;\r\n                    z-index: 2;\r\n\r\n                    background-color: hsl(240, 6%, 13%);\r\n                    padding: 1rem;\r\n                    width: 8rem;\r\n                    border-radius: 2vh;\r\n                    font-size: .9rem;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: .5rem;\r\n\r\n                    li {\r\n                        color: rgba(255, 255, 255, 0.5);\r\n                        border-radius: .5rem;\r\n                        padding: .5rem 1rem;\r\n                        cursor: pointer;\r\n                    }\r\n\r\n                    li:hover {\r\n                        background-color: hsl(240, 3%, 26%);\r\n                        color: white;\r\n                    }\r\n                }\r\n\r\n                ul:hover {\r\n                    visibility: visible;\r\n                }\r\n            }\r\n\r\n            .language:hover>ul {\r\n                visibility: visible;\r\n            }\r\n\r\n            .language:hover>.friendly-div {\r\n                display: block;\r\n            }\r\n\r\n            .language:hover span {\r\n                color: white;\r\n            }\r\n\r\n            .user {\r\n                height: 40px;\r\n                aspect-ratio: 1;\r\n                background-color: hsl(240, 4%, 20%);\r\n                border-radius: 100vh;\r\n                justify-content: center;\r\n            }\r\n        }\r\n    }\r\n\r\n    .toggle-btn {\r\n        height: 40px;\r\n        aspect-ratio: 1;\r\n        background-image: url(../imgs/icons/menu.png);\r\n        background-size: cover;\r\n        background-color: transparent;\r\n        outline: none;\r\n        border: none;\r\n        display: none;\r\n        cursor: pointer;\r\n        margin-left: auto;\r\n\r\n        @media screen and(max-width: 750px) {\r\n            display: block;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/carousel/controll.png */ "./src/imgs/carousel/controll.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/carousel/genshin-impact.jpg */ "./src/imgs/carousel/genshin-impact.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/carousel/watch-dogs2.jpg */ "./src/imgs/carousel/watch-dogs2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/nogames.png */ "./src/imgs/commonGames/nogames.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/dont-starve.jpg */ "./src/imgs/commonGames/dont-starve.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/dying-light2.jpg */ "./src/imgs/commonGames/dying-light2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/gtasa.jpg */ "./src/imgs/commonGames/gtasa.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/life-is-strange-remastered.jpg */ "./src/imgs/commonGames/life-is-strange-remastered.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/sea-of-thieves.jpg */ "./src/imgs/commonGames/sea-of-thieves.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/rocket-league-intro.jpg */ "./src/imgs/commonGames/rocket-league-intro.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/six-siege.jpg */ "./src/imgs/commonGames/six-siege.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/tom-clancy.jpg */ "./src/imgs/commonGames/tom-clancy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/naraka-intro.jpg */ "./src/imgs/commonGames/naraka-intro.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/sifu.jpg */ "./src/imgs/commonGames/sifu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/ghost-of-tsushima.png */ "./src/imgs/commonGames/ghost-of-tsushima.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/farcry-primal.jpg */ "./src/imgs/commonGames/farcry-primal.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/gtaV.jpg */ "./src/imgs/commonGames/gtaV.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/hitman3.jpg */ "./src/imgs/commonGames/hitman3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/smite.jpg */ "./src/imgs/commonGames/smite.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/valo.jpg */ "./src/imgs/commonGames/valo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/epic-games.webp */ "./src/imgs/commonGames/epic-games.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/fortnitecover.webp */ "./src/imgs/commonGames/fortnitecover.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/fortnitelego.webp */ "./src/imgs/commonGames/fortnitelego.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/fortnitebattlepass.jpg */ "./src/imgs/commonGames/fortnitebattlepass.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/hotwhees.jpg */ "./src/imgs/commonGames/hotwhees.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/tomb-rider.jpg */ "./src/imgs/commonGames/tomb-rider.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/farcry6-control.jpg */ "./src/imgs/commonGames/farcry6-control.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/browse.jpg */ "./src/imgs/commonGames/browse.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.add-to-wishlist {
  display: none;
  height: 20px;
  aspect-ratio: 1;
  box-shadow: 0px 0px 2px 4px rgba(2, 2, 2, 0.274);
  border-radius: 100vh;
  cursor: pointer;
  margin-left: auto;
  margin-top: 4px;
  margin-right: 4px;
  transition: all 1s;
  background-color: black; }
  .add-to-wishlist :hover {
    transform: scale(110%); }
  .add-to-wishlist svg {
    fill: white; }

.warn-box {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333333;
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden; }
  .warn-box p {
    position: relative;
    z-index: 3; }

.warn-box::after {
  content: "";
  z-index: 2;
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #444444;
  animation: cooldown 4s linear; }

@keyframes cooldown {
  0% {
    width: 100%; }
  100% {
    width: 0%; } }

.image-bg-div {
  width: 100%;
  background-color: #494949;
  border-radius: .5rem;
  overflow: hidden;
  background-size: cover;
  background-position: center; }

main {
  position: relative;
  padding-inline: 7%;
  display: flex;
  flex-direction: column;
  gap: 3rem; }
  @media screen and (max-width: 1200px) {
    main {
      padding-inline: 1rem; } }
  main .toggled-menu {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    display: none;
    grid-template-areas: "play create" "discover create";
    padding: 2.5rem;
    gap: 3.5rem;
    background-color: #1f1f23;
    border-radius: 1.5vh; }
    main .toggled-menu > div > h2 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 600; }
    main .toggled-menu > div > ul {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      color: rgba(255, 255, 255, 0.473);
      font-size: .9rem; }
      main .toggled-menu > div > ul li {
        border-radius: .5rem;
        padding: .5rem 1rem;
        cursor: pointer; }
      main .toggled-menu > div > ul li:hover {
        background-color: #404044;
        color: white; }
    main .toggled-menu .play {
      grid-area: play; }
    main .toggled-menu .discover {
      grid-area: discover; }
    main .toggled-menu .create {
      grid-area: create; }
  main .toggled-menu.active {
    display: grid; }
  main .search-container {
    max-width: 1430px;
    width: 80%;
    margin-inline: auto;
    height: 100px;
    align-items: center;
    gap: 1.5rem; }
    main .search-container .search-bar {
      background-color: #212121;
      border-radius: 100vw;
      height: 40px;
      max-width: 230px;
      padding: .5rem;
      gap: .5rem; }
      main .search-container .search-bar span {
        font-size: 20px; }
      main .search-container .search-bar input {
        background-color: transparent;
        outline: none;
        border: none;
        color: white;
        font-family: poppins; }
    main .search-container .discover-menu {
      gap: 1.5rem; }
    main .search-container .cart {
      margin-left: auto; }
      main .search-container .cart > span {
        font-size: 25px; }
  main .carousel-container {
    max-width: 1430px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 8fr 2fr;
    gap: 1rem;
    height: 35em; }
    @media screen and (max-width: 1000px) {
      main .carousel-container {
        grid-template-columns: 1fr; } }
    main .carousel-container .carousel {
      position: relative;
      overflow: hidden;
      border-radius: 1.5rem; }
      main .carousel-container .carousel .carousel-inner {
        display: flex;
        height: 100%; }
        main .carousel-container .carousel .carousel-inner .carousel-item-1 {
          background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); }
        main .carousel-container .carousel .carousel-inner .carousel-item-2 {
          background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}); }
        main .carousel-container .carousel .carousel-inner .carousel-item-3 {
          background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
        main .carousel-container .carousel .carousel-inner [class*="carousel-item"] {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center 0%;
          backdrop-filter: brightness(0.8);
          transform: translateX(20%);
          transition: transform 0.5s ease;
          display: none;
          flex-direction: column;
          align-items: start;
          justify-content: end;
          padding: 7%; }
          main .carousel-container .carousel .carousel-inner [class*="carousel-item"] > :first-child {
            opacity: .7;
            margin-bottom: 2rem; }
          main .carousel-container .carousel .carousel-inner [class*="carousel-item"] > :nth-child(2) {
            font-weight: 600;
            margin-bottom: .7rem;
            opacity: .9; }
          main .carousel-container .carousel .carousel-inner [class*="carousel-item"] > :nth-child(3) {
            font-size: 1rem;
            margin-bottom: 2rem; }
          main .carousel-container .carousel .carousel-inner [class*="carousel-item"] .purchase-div {
            align-items: center;
            gap: 1rem; }
            main .carousel-container .carousel .carousel-inner [class*="carousel-item"] .purchase-div .add-to-wishlist {
              align-items: center;
              gap: .5rem;
              cursor: pointer; }
              main .carousel-container .carousel .carousel-inner [class*="carousel-item"] .purchase-div .add-to-wishlist > span {
                font-size: 1rem; }
              main .carousel-container .carousel .carousel-inner [class*="carousel-item"] .purchase-div .add-to-wishlist > p {
                font-size: .8rem; }
        main .carousel-container .carousel .carousel-inner [class*="carousel-item"].active {
          display: flex;
          transform: translateX(0%);
          animation: slidein 0.3s ease forwards; }
        main .carousel-container .carousel .carousel-inner [class*="carousel-item"].hide {
          animation: slideout 0.2s ease forwards;
          animation-delay: 3.9s; }

@keyframes slidein {
  from {
    transform: translateX(-50%); }
  to {
    transform: translateX(0%); } }

@keyframes slideout {
  from {
    transform: translateX(0%); }
  to {
    transform: translateX(-50%); } }
    main .carousel-container .items-container {
      display: grid;
      gap: .3rem;
      grid-template-rows: repeat(5, 1fr); }
      @media screen and (max-width: 1000px) {
        main .carousel-container .items-container {
          display: none; } }
      main .carousel-container .items-container [class*="item-box"] {
        display: grid;
        grid-template-columns: 2fr 5fr;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        cursor: pointer;
        border-radius: 1rem;
        position: relative;
        overflow: hidden; }
        main .carousel-container .items-container [class*="item-box"] .fill-background {
          position: absolute;
          left: 0;
          z-index: 0;
          background: rgba(122, 122, 122, 0.452);
          height: 100%;
          width: 0%; }
        main .carousel-container .items-container [class*="item-box"] .fill-background.active {
          animation: fillAnimation ease-out 4s; }

@keyframes fillAnimation {
  0% {
    width: 0; }
  100% {
    width: 100%; } }
        main .carousel-container .items-container [class*="item-box"] [class*='item-image'] {
          background-color: #262626;
          height: 100%;
          width: auto;
          border-radius: 1vh;
          background-size: cover;
          position: relative;
          z-index: 1; }
        main .carousel-container .items-container [class*="item-box"] .item-name {
          position: relative;
          z-index: 1; }
      main .carousel-container .items-container [class*="item-box"]:hover {
        background-color: #292929; }
  @media screen and (max-width: 1150px) {
    main .search-container {
      width: 100%;
      padding: 1rem; }
    main .carousel-container {
      width: 100%;
      padding: 1rem; } }

.card-section-root .section-top {
  display: flex;
  justify-content: space-between; }
  .card-section-root .section-top .section-title {
    font-size: 20px;
    height: 2rem;
    margin-bottom: 1rem; }
  .card-section-root .section-top .buttons {
    display: flex;
    gap: 1rem; }
    .card-section-root .section-top .buttons > div {
      height: 40px;
      aspect-ratio: 1;
      cursor: pointer; }
      .card-section-root .section-top .buttons > div svg {
        fill: white; }

.card-section-root .item-view-slide-container {
  width: 100%;
  overflow: scroll;
  transition: scroll 2s ease-in-out; }
  .card-section-root .item-view-slide-container .items-container {
    width: fit-content;
    display: flex;
    transition: all 2s; }
    .card-section-root .item-view-slide-container .items-container .card {
      border-radius: .5rem;
      overflow: hidden;
      margin-inline: 10px; }
      .card-section-root .item-view-slide-container .items-container .card .image-bg-div {
        width: 100%;
        aspect-ratio: 5 / 6;
        background-color: #494949;
        border-radius: .5rem;
        overflow: hidden;
        background-size: cover;
        background-position: center; }
      .card-section-root .item-view-slide-container .items-container .card .content {
        padding: 1rem 0rem;
        display: flex;
        flex-direction: column;
        gap: .5rem; }
        .card-section-root .item-view-slide-container .items-container .card .content small {
          text-transform: uppercase;
          opacity: .7;
          font-size: .7rem; }
        .card-section-root .item-view-slide-container .items-container .card .content .pricing {
          display: flex;
          gap: 1rem;
          align-items: center; }
          .card-section-root .item-view-slide-container .items-container .card .content .pricing .original-price {
            text-decoration: line-through;
            opacity: .6; }
      .card-section-root .item-view-slide-container .items-container .card .image-bg-div {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___}); }
      .card-section-root .item-view-slide-container .items-container .card .g1 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___}); }
      .card-section-root .item-view-slide-container .items-container .card .g2 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
      .card-section-root .item-view-slide-container .items-container .card .g3 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
      .card-section-root .item-view-slide-container .items-container .card .g4 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
      .card-section-root .item-view-slide-container .items-container .card .g5 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
      .card-section-root .item-view-slide-container .items-container .card .g6 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
      .card-section-root .item-view-slide-container .items-container .card .g7 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
      .card-section-root .item-view-slide-container .items-container .card .g8 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
      .card-section-root .item-view-slide-container .items-container .card .g9 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
      .card-section-root .item-view-slide-container .items-container .card .g10 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
      .card-section-root .item-view-slide-container .items-container .card .g11 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
      .card-section-root .item-view-slide-container .items-container .card .g12 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
      .card-section-root .item-view-slide-container .items-container .card .g13 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___}); }
      .card-section-root .item-view-slide-container .items-container .card .g14 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
      .card-section-root .item-view-slide-container .items-container .card .g15 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
      .card-section-root .item-view-slide-container .items-container .card .g16 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
      .card-section-root .item-view-slide-container .items-container .card .g17 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
      .card-section-root .item-view-slide-container .items-container .card .wc1 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
      .card-section-root .item-view-slide-container .items-container .card .wc2 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
      .card-section-root .item-view-slide-container .items-container .card .wc3 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
      .card-section-root .item-view-slide-container .items-container .card .fg1 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
      .card-section-root .item-view-slide-container .items-container .card .fg2 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
      .card-section-root .item-view-slide-container .items-container .card .fg3 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___}); }
      .card-section-root .item-view-slide-container .items-container .card .ft1 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}); }
      .card-section-root .item-view-slide-container .items-container .card .ft2 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___}); }
      .card-section-root .item-view-slide-container .items-container .card .ft3 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-1 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-2 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-3 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-4 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-5 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-6 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-7 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-8 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-9 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-10 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-11 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-12 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-13 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-14 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
      .card-section-root .item-view-slide-container .items-container .card .list-image-15 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
      .card-section-root .item-view-slide-container .items-container .card .double-card-1 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
      .card-section-root .item-view-slide-container .items-container .card .double-card-2 {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }
      .card-section-root .item-view-slide-container .items-container .card .browse-card {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___}); }
      .card-section-root .item-view-slide-container .items-container .card .image-bg-div {
        background-size: cover;
        background-position: center; }
      .card-section-root .item-view-slide-container .items-container .card .wc2 {
        background-position: center top; }
      .card-section-root .item-view-slide-container .items-container .card .fg1 {
        background-position: center 10%; }

.card-section-root .item-view-slide-container::-webkit-scrollbar {
  display: none;
  /* Hide the scrollbar */ }

.wide-cards-container {
  width: 100%;
  display: flex;
  gap: 2rem; }
  .wide-cards-container .wide-card {
    width: 100%;
    border-radius: .5rem;
    overflow: hidden;
    margin-inline: 10px; }
    @media screen and (max-width: 900px) {
      .wide-cards-container .wide-card {
        min-width: 400px; } }
    @media screen and (max-width: 600px) {
      .wide-cards-container .wide-card {
        min-width: 250px; } }
    .wide-cards-container .wide-card .image-bg-div {
      width: 100%;
      aspect-ratio: 6 / 3;
      background-color: #494949;
      border-radius: .5rem;
      overflow: hidden;
      background-size: cover;
      background-position: center; }
    .wide-cards-container .wide-card .content {
      padding: 1rem 0rem;
      display: flex;
      flex-direction: column;
      gap: .5rem; }
      .wide-cards-container .wide-card .content small {
        text-transform: uppercase;
        opacity: .7;
        font-size: .7rem; }
      .wide-cards-container .wide-card .content .game-title {
        font-size: 1.2rem; }
      .wide-cards-container .wide-card .content .pricing {
        display: flex;
        gap: 1rem;
        align-items: center; }
        .wide-cards-container .wide-card .content .pricing .original-price {
          text-decoration: line-through;
          opacity: .6; }
    .wide-cards-container .wide-card .image-bg-div {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___}); }
    .wide-cards-container .wide-card .g1 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___}); }
    .wide-cards-container .wide-card .g2 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
    .wide-cards-container .wide-card .g3 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
    .wide-cards-container .wide-card .g4 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
    .wide-cards-container .wide-card .g5 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
    .wide-cards-container .wide-card .g6 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
    .wide-cards-container .wide-card .g7 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
    .wide-cards-container .wide-card .g8 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
    .wide-cards-container .wide-card .g9 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
    .wide-cards-container .wide-card .g10 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
    .wide-cards-container .wide-card .g11 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
    .wide-cards-container .wide-card .g12 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
    .wide-cards-container .wide-card .g13 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___}); }
    .wide-cards-container .wide-card .g14 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
    .wide-cards-container .wide-card .g15 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
    .wide-cards-container .wide-card .g16 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
    .wide-cards-container .wide-card .g17 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
    .wide-cards-container .wide-card .wc1 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
    .wide-cards-container .wide-card .wc2 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
    .wide-cards-container .wide-card .wc3 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
    .wide-cards-container .wide-card .fg1 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
    .wide-cards-container .wide-card .fg2 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
    .wide-cards-container .wide-card .fg3 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___}); }
    .wide-cards-container .wide-card .ft1 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}); }
    .wide-cards-container .wide-card .ft2 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___}); }
    .wide-cards-container .wide-card .ft3 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___}); }
    .wide-cards-container .wide-card .list-image-1 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
    .wide-cards-container .wide-card .list-image-2 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); }
    .wide-cards-container .wide-card .list-image-3 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); }
    .wide-cards-container .wide-card .list-image-4 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
    .wide-cards-container .wide-card .list-image-5 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
    .wide-cards-container .wide-card .list-image-6 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
    .wide-cards-container .wide-card .list-image-7 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
    .wide-cards-container .wide-card .list-image-8 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___}); }
    .wide-cards-container .wide-card .list-image-9 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
    .wide-cards-container .wide-card .list-image-10 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
    .wide-cards-container .wide-card .list-image-11 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
    .wide-cards-container .wide-card .list-image-12 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
    .wide-cards-container .wide-card .list-image-13 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
    .wide-cards-container .wide-card .list-image-14 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
    .wide-cards-container .wide-card .list-image-15 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
    .wide-cards-container .wide-card .double-card-1 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
    .wide-cards-container .wide-card .double-card-2 {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }
    .wide-cards-container .wide-card .browse-card {
      background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___}); }
    .wide-cards-container .wide-card .image-bg-div {
      background-size: cover;
      background-position: center; }
    .wide-cards-container .wide-card .wc2 {
      background-position: center top; }
    .wide-cards-container .wide-card .fg1 {
      background-position: center 10%; }

@media screen and (max-width: 900px) {
  .wide-cards-container {
    overflow: scroll; }
  .wide-cards-container::-webkit-scrollbar {
    display: none; } }

.free-games-section {
  background-color: #424242;
  padding: 2rem; }
  .free-games-section .section-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem; }
  .free-games-section .section-title {
    display: flex;
    align-items: center;
    gap: 1rem; }
    .free-games-section .section-title svg {
      fill: white; }
    .free-games-section .section-title > div {
      height: 40px;
      aspect-ratio: 1; }
  @media screen and (max-width: 900px) {
    .free-games-section > div .wide-cards-container .wide-card {
      min-width: unset; } }
  @media screen and (max-width: 600px) {
    .free-games-section > div .wide-cards-container .wide-card {
      min-width: unset; } }
  .free-games-section > div .wide-cards-container .wide-card .content {
    padding-bottom: 0; }
    .free-games-section > div .wide-cards-container .wide-card .content .game-description {
      font-size: .9rem;
      opacity: .8; }
  @media screen and (max-width: 900px) {
    .free-games-section > div .wide-cards-container {
      overflow: hidden; } }
  @media screen and (max-width: 720px) {
    .free-games-section > div .wide-cards-container {
      flex-direction: column; } }
  .free-games-section .image-bg-div {
    display: flex; }
    .free-games-section .image-bg-div > div {
      min-height: 15%;
      width: 100%;
      background-color: rgba(2, 61, 255, 0.836);
      margin-top: auto;
      font-size: 1.2rem;
      display: grid;
      place-content: center; }
    .free-games-section .image-bg-div .black-strip {
      background-color: rgba(0, 0, 0, 0.658); }

.lists-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: clamp(0.7rem, 2vw, 1.5rem);
  overflow-x: auto; }
  .lists-section .list-container {
    padding-inline: 1rem;
    min-width: 270px;
    border-inline: 1px solid rgba(255, 255, 255, 0); }
    .lists-section .list-container .list-top {
      margin-bottom: 1.5rem;
      font-size: 1.2rem; }
    .lists-section .list-container button {
      margin-left: auto;
      font-size: .9rem;
      padding: .4rem;
      padding-inline: .7rem; }
    .lists-section .list-container .list {
      display: flex;
      flex-direction: column;
      gap: 1rem; }
      .lists-section .list-container .list .item {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: clamp(0.7rem, 2vw, 1rem); }
        .lists-section .list-container .list .item .image-bg-div {
          aspect-ratio: 2/3; }
        .lists-section .list-container .list .item .image-bg-div {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___}); }
        .lists-section .list-container .list .item .g1 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___}); }
        .lists-section .list-container .list .item .g2 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
        .lists-section .list-container .list .item .g3 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
        .lists-section .list-container .list .item .g4 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
        .lists-section .list-container .list .item .g5 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
        .lists-section .list-container .list .item .g6 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
        .lists-section .list-container .list .item .g7 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
        .lists-section .list-container .list .item .g8 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
        .lists-section .list-container .list .item .g9 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
        .lists-section .list-container .list .item .g10 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
        .lists-section .list-container .list .item .g11 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
        .lists-section .list-container .list .item .g12 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
        .lists-section .list-container .list .item .g13 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___}); }
        .lists-section .list-container .list .item .g14 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
        .lists-section .list-container .list .item .g15 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
        .lists-section .list-container .list .item .g16 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
        .lists-section .list-container .list .item .g17 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
        .lists-section .list-container .list .item .wc1 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
        .lists-section .list-container .list .item .wc2 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
        .lists-section .list-container .list .item .wc3 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
        .lists-section .list-container .list .item .fg1 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
        .lists-section .list-container .list .item .fg2 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
        .lists-section .list-container .list .item .fg3 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___}); }
        .lists-section .list-container .list .item .ft1 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}); }
        .lists-section .list-container .list .item .ft2 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___}); }
        .lists-section .list-container .list .item .ft3 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___}); }
        .lists-section .list-container .list .item .list-image-1 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
        .lists-section .list-container .list .item .list-image-2 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); }
        .lists-section .list-container .list .item .list-image-3 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); }
        .lists-section .list-container .list .item .list-image-4 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
        .lists-section .list-container .list .item .list-image-5 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
        .lists-section .list-container .list .item .list-image-6 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
        .lists-section .list-container .list .item .list-image-7 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
        .lists-section .list-container .list .item .list-image-8 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___}); }
        .lists-section .list-container .list .item .list-image-9 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
        .lists-section .list-container .list .item .list-image-10 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
        .lists-section .list-container .list .item .list-image-11 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
        .lists-section .list-container .list .item .list-image-12 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
        .lists-section .list-container .list .item .list-image-13 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
        .lists-section .list-container .list .item .list-image-14 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
        .lists-section .list-container .list .item .list-image-15 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
        .lists-section .list-container .list .item .double-card-1 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
        .lists-section .list-container .list .item .double-card-2 {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }
        .lists-section .list-container .list .item .browse-card {
          background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___}); }
        .lists-section .list-container .list .item .image-bg-div {
          background-size: cover;
          background-position: center; }
        .lists-section .list-container .list .item .wc2 {
          background-position: center top; }
        .lists-section .list-container .list .item .fg1 {
          background-position: center 10%; }
  .lists-section .list-container:nth-child(2) {
    border-inline: 1px solid white; }

.lists-section::-webkit-scrollbar {
  display: none; }

.double-card-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1rem, 2vw, 3rem); }
  @media screen and (max-width: 720px) {
    .double-card-section {
      grid-template-columns: 1fr; } }
  .double-card-section .game-title {
    margin-top: 1rem;
    margin-bottom: .5rem; }
  .double-card-section .game-description {
    font-size: .9rem;
    opacity: .7; }
  .double-card-section .image-bg-div {
    aspect-ratio: 4/2; }
  .double-card-section .image-bg-div {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___}); }
  .double-card-section .g1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___}); }
  .double-card-section .g2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
  .double-card-section .g3 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
  .double-card-section .g4 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
  .double-card-section .g5 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
  .double-card-section .g6 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
  .double-card-section .g7 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
  .double-card-section .g8 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
  .double-card-section .g9 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
  .double-card-section .g10 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
  .double-card-section .g11 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }
  .double-card-section .g12 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
  .double-card-section .g13 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___}); }
  .double-card-section .g14 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
  .double-card-section .g15 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
  .double-card-section .g16 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
  .double-card-section .g17 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
  .double-card-section .wc1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
  .double-card-section .wc2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }
  .double-card-section .wc3 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }
  .double-card-section .fg1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
  .double-card-section .fg2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
  .double-card-section .fg3 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___}); }
  .double-card-section .ft1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}); }
  .double-card-section .ft2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___}); }
  .double-card-section .ft3 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___}); }
  .double-card-section .list-image-1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }
  .double-card-section .list-image-2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); }
  .double-card-section .list-image-3 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); }
  .double-card-section .list-image-4 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }
  .double-card-section .list-image-5 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }
  .double-card-section .list-image-6 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }
  .double-card-section .list-image-7 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
  .double-card-section .list-image-8 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___}); }
  .double-card-section .list-image-9 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }
  .double-card-section .list-image-10 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }
  .double-card-section .list-image-11 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }
  .double-card-section .list-image-12 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }
  .double-card-section .list-image-13 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }
  .double-card-section .list-image-14 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }
  .double-card-section .list-image-15 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }
  .double-card-section .double-card-1 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
  .double-card-section .double-card-2 {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }
  .double-card-section .browse-card {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___}); }
  .double-card-section .image-bg-div {
    background-size: cover;
    background-position: center; }
  .double-card-section .wc2 {
    background-position: center top; }
  .double-card-section .fg1 {
    background-position: center 10%; }

.browse-card button {
  background-color: white;
  color: black;
  width: fit-content; }

.browse-card .content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
  margin-left: 1rem; }
  .browse-card .content .title {
    font-size: 1.3rem; }
  .browse-card .content .description {
    opacity: .8; }

.browse-card .image-bg-div {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___}); }

.browse-card .g1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___}); }

.browse-card .g2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }

.browse-card .g3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }

.browse-card .g4 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }

.browse-card .g5 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }

.browse-card .g6 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }

.browse-card .g7 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }

.browse-card .g8 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }

.browse-card .g9 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }

.browse-card .g10 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }

.browse-card .g11 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___}); }

.browse-card .g12 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }

.browse-card .g13 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___}); }

.browse-card .g14 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }

.browse-card .g15 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }

.browse-card .g16 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }

.browse-card .g17 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }

.browse-card .wc1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }

.browse-card .wc2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___}); }

.browse-card .wc3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___}); }

.browse-card .fg1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }

.browse-card .fg2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }

.browse-card .fg3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___}); }

.browse-card .ft1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_21___}); }

.browse-card .ft2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_22___}); }

.browse-card .ft3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_23___}); }

.browse-card .list-image-1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___}); }

.browse-card .list-image-2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_24___}); }

.browse-card .list-image-3 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); }

.browse-card .list-image-4 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___}); }

.browse-card .list-image-5 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___}); }

.browse-card .list-image-6 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___}); }

.browse-card .list-image-7 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }

.browse-card .list-image-8 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_25___}); }

.browse-card .list-image-9 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___}); }

.browse-card .list-image-10 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___}); }

.browse-card .list-image-11 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___}); }

.browse-card .list-image-12 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___}); }

.browse-card .list-image-13 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___}); }

.browse-card .list-image-14 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___}); }

.browse-card .list-image-15 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___}); }

.browse-card .double-card-1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }

.browse-card .double-card-2 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_26___}); }

.browse-card .browse-card {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_27___}); }

.browse-card .image-bg-div {
  background-size: cover;
  background-position: center; }

.browse-card .wc2 {
  background-position: center top; }

.browse-card .fg1 {
  background-position: center 10%; }
`, "",{"version":3,"sources":["webpack://./src/scss/main.scss","webpack://./src/scss/cards.scss"],"names":[],"mappings":"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","sourcesContent":[".add-to-wishlist {\r\n    display: none;\r\n    height: 20px;\r\n    aspect-ratio: 1;\r\n    box-shadow: 0px 0px 2px 4px rgba(2, 2, 2, 0.274);\r\n    border-radius: 100vh;\r\n    cursor: pointer;\r\n    margin-left: auto;\r\n    margin-top: 4px;\r\n    margin-right: 4px;\r\n    transition: all 1s;\r\n    background-color: black;\r\n\r\n    :hover {\r\n        transform: scale(110%);\r\n    }\r\n\r\n    svg {\r\n        fill: rgb(255, 255, 255);\r\n    }\r\n}\r\n\r\n.warn-box {\r\n    position: fixed;\r\n    top: 1rem;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: rgb(51, 51, 51);\r\n    padding: 2rem;\r\n    border-radius: 1rem;\r\n    overflow: hidden;\r\n\r\n    p {\r\n        position: relative;\r\n        z-index: 3;\r\n    }\r\n}\r\n\r\n.warn-box::after {\r\n    content: \"\";\r\n    z-index: 2;\r\n    top: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(68, 68, 68);\r\n    animation: cooldown 4s linear;\r\n}\r\n\r\n@keyframes cooldown {\r\n    0% {\r\n        width: 100%;\r\n    }\r\n\r\n    100% {\r\n        width: 0%;\r\n    }\r\n}\r\n\r\n.image-bg-div {\r\n    width: 100%;\r\n    background-color: rgb(73, 73, 73);\r\n    border-radius: .5rem;\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\nmain {\r\n\r\n    position: relative;\r\n    padding-inline: 7%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n\r\n    @media screen and(max-width: 1200px) {\r\n        padding-inline: 1rem;\r\n    }\r\n\r\n    .toggled-menu {\r\n        position: absolute;\r\n        top: 1rem;\r\n        left: 1rem;\r\n        z-index: 1;\r\n\r\n        display: none;\r\n        grid-template-areas: \"play create\"\r\n            \"discover create\";\r\n        padding: 2.5rem;\r\n        gap: 3.5rem;\r\n\r\n        background-color: hsl(240, 6%, 13%);\r\n        border-radius: 1.5vh;\r\n\r\n        >div>h2 {\r\n            margin-bottom: 1rem;\r\n            font-size: 1.2rem;\r\n            font-weight: 600;\r\n        }\r\n\r\n        >div>ul {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: .5rem;\r\n\r\n            color: rgba(255, 255, 255, 0.473);\r\n            font-size: .9rem;\r\n\r\n            li {\r\n                border-radius: .5rem;\r\n                padding: .5rem 1rem;\r\n                cursor: pointer;\r\n            }\r\n\r\n            li:hover {\r\n                background-color: hsl(240, 3%, 26%);\r\n                color: white;\r\n            }\r\n        }\r\n\r\n        .play {\r\n            grid-area: play;\r\n        }\r\n\r\n        .discover {\r\n            grid-area: discover;\r\n        }\r\n\r\n        .create {\r\n            grid-area: create;\r\n        }\r\n\r\n    }\r\n\r\n    .toggled-menu.active {\r\n        display: grid;\r\n    }\r\n\r\n    .search-container {\r\n        max-width: 1430px;\r\n        width: 80%;\r\n        margin-inline: auto;\r\n        height: 100px;\r\n        align-items: center;\r\n        gap: 1.5rem;\r\n\r\n        .search-bar {\r\n            background-color: hsl(0, 0%, 13%);\r\n            border-radius: 100vw;\r\n            height: 40px;\r\n            max-width: 230px;\r\n            padding: .5rem;\r\n            gap: .5rem;\r\n\r\n            span {\r\n                font-size: 20px;\r\n            }\r\n\r\n            input {\r\n                background-color: transparent;\r\n                outline: none;\r\n                border: none;\r\n                color: white;\r\n                font-family: poppins;\r\n            }\r\n        }\r\n\r\n        .discover-menu {\r\n            gap: 1.5rem;\r\n        }\r\n\r\n        .cart {\r\n            margin-left: auto;\r\n\r\n            >span {\r\n                font-size: 25px;\r\n            }\r\n        }\r\n    }\r\n\r\n    .carousel-container {\r\n        max-width: 1430px;\r\n        // width: 80%;\r\n        margin-inline: auto;\r\n        display: grid;\r\n        grid-template-columns: 8fr 2fr;\r\n        gap: 1rem;\r\n        height: 35em;\r\n\r\n        @media screen and(max-width: 1000px) {\r\n            grid-template-columns: 1fr;\r\n        }\r\n\r\n        .carousel {\r\n            position: relative;\r\n            overflow: hidden;\r\n            border-radius: 1.5rem;\r\n\r\n            .carousel-inner {\r\n                display: flex;\r\n                height: 100%;\r\n\r\n                .carousel-item-1 {\r\n                    background: url(../imgs/carousel/controll.png);\r\n                }\r\n\r\n                .carousel-item-2 {\r\n                    background: url(../imgs/carousel/genshin-impact.jpg);\r\n                }\r\n\r\n                .carousel-item-3 {\r\n                    background: url(../imgs/carousel/watch-dogs2.jpg);\r\n                }\r\n\r\n                [class*=\"carousel-item\"] {\r\n                    width: 100%;\r\n                    height: 100%;\r\n                    background-size: cover;\r\n                    background-position: center 0%;\r\n                    backdrop-filter: brightness(0.8);\r\n                    transform: translateX(20%);\r\n                    transition: transform 0.5s ease;\r\n\r\n                    display: none;\r\n                    flex-direction: column;\r\n                    align-items: start;\r\n                    justify-content: end;\r\n                    padding: 7%;\r\n\r\n                    >:first-child {\r\n                        opacity: .7;\r\n                        margin-bottom: 2rem;\r\n                    }\r\n\r\n                    >:nth-child(2) {\r\n                        font-weight: 600;\r\n                        margin-bottom: .7rem;\r\n                        opacity: .9;\r\n                    }\r\n\r\n                    >:nth-child(3) {\r\n                        font-size: 1rem;\r\n                        margin-bottom: 2rem;\r\n                    }\r\n\r\n                    .purchase-div {\r\n                        align-items: center;\r\n                        gap: 1rem;\r\n\r\n                        .add-to-wishlist {\r\n                            align-items: center;\r\n                            gap: .5rem;\r\n                            cursor: pointer;\r\n\r\n                            >span {\r\n                                font-size: 1rem;\r\n                            }\r\n\r\n                            >p {\r\n                                font-size: .8rem;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                [class*=\"carousel-item\"].active {\r\n                    display: flex;\r\n                    transform: translateX(0%);\r\n                    animation: slidein 0.3s ease forwards;\r\n                }\r\n\r\n                [class*=\"carousel-item\"].hide {\r\n                    animation: slideout 0.2s ease forwards;\r\n                    animation-delay: 3.9s;\r\n                }\r\n\r\n                @keyframes slidein {\r\n                    from {\r\n                        transform: translateX(-50%);\r\n                    }\r\n\r\n                    to {\r\n                        transform: translateX(0%);\r\n                    }\r\n                }\r\n\r\n                @keyframes slideout {\r\n                    from {\r\n                        transform: translateX(0%);\r\n                    }\r\n\r\n                    to {\r\n                        transform: translateX(-50%);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .items-container {\r\n            display: grid;\r\n            // font-size: 1rem;\r\n            gap: .3rem;\r\n            grid-template-rows: repeat(5, 1fr);\r\n\r\n            @media screen and(max-width: 1000px) {\r\n                display: none;\r\n            }\r\n\r\n\r\n            [class*=\"item-box\"] {\r\n                display: grid;\r\n                grid-template-columns: 2fr 5fr;\r\n                align-items: center;\r\n                gap: 1rem;\r\n                padding: 1rem;\r\n                cursor: pointer;\r\n                border-radius: 1rem;\r\n                position: relative;\r\n                overflow: hidden;\r\n\r\n                .fill-background {\r\n                    position: absolute;\r\n                    left: 0;\r\n                    z-index: 0;\r\n                    background: hsla(0, 0%, 48%, 0.452);\r\n                    height: 100%;\r\n                    width: 0%;\r\n                }\r\n\r\n                .fill-background.active {\r\n                    animation: fillAnimation ease-out 4s;\r\n                }\r\n\r\n                @keyframes fillAnimation {\r\n                    0% {\r\n                        width: 0;\r\n                    }\r\n\r\n                    100% {\r\n                        width: 100%;\r\n                    }\r\n                }\r\n\r\n                [class*='item-image'] {\r\n                    background-color: hsl(0, 0%, 15%);\r\n                    height: 100%;\r\n                    width: auto;\r\n                    border-radius: 1vh;\r\n                    background-size: cover;\r\n                    position: relative;\r\n                    z-index: 1;\r\n                }\r\n\r\n                .item-name {\r\n                    position: relative;\r\n                    z-index: 1;\r\n                }\r\n            }\r\n\r\n            [class*=\"item-box\"]:hover {\r\n                background-color: hsl(0, 0%, 16%);\r\n            }\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 1150px) {\r\n        .search-container {\r\n            width: 100%;\r\n            padding: 1rem;\r\n        }\r\n\r\n        .carousel-container {\r\n            width: 100%;\r\n            padding: 1rem\r\n        }\r\n    }\r\n}\r\n\r\n// section scroll cards\r\n\r\n.card-section-root {\r\n    .section-top {\r\n        display: flex;\r\n        justify-content: space-between;\r\n\r\n        .section-title {\r\n            font-size: 20px;\r\n            height: 2rem;\r\n            margin-bottom: 1rem;\r\n        }\r\n\r\n        .buttons {\r\n            display: flex;\r\n            gap: 1rem;\r\n\r\n            >div {\r\n                height: 40px;\r\n                aspect-ratio: 1;\r\n                cursor: pointer;\r\n\r\n                svg {\r\n                    fill: white;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .item-view-slide-container {\r\n        width: 100%;\r\n        overflow: scroll;\r\n        transition: scroll 2s ease-in-out;\r\n\r\n        .items-container {\r\n            width: fit-content;\r\n            display: flex;\r\n            transition: all 2s;\r\n\r\n            .card {\r\n                // background-color: green;\r\n                border-radius: .5rem;\r\n                overflow: hidden;\r\n                margin-inline: 10px;\r\n\r\n                .image-bg-div {\r\n                    width: 100%;\r\n                    aspect-ratio: 5 / 6;\r\n                    background-color: rgb(73, 73, 73);\r\n                    border-radius: .5rem;\r\n                    overflow: hidden;\r\n                    background-size: cover;\r\n                    background-position: center;\r\n                }\r\n\r\n                .content {\r\n                    padding: 1rem 0rem;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: .5rem;\r\n\r\n                    small {\r\n                        text-transform: uppercase;\r\n                        opacity: .7;\r\n                        font-size: .7rem;\r\n                    }\r\n\r\n                    .pricing {\r\n                        display: flex;\r\n                        gap: 1rem;\r\n                        align-items: center;\r\n\r\n                        .original-price {\r\n                            text-decoration: line-through;\r\n                            opacity: .6;\r\n                        }\r\n                    }\r\n                }\r\n\r\n                @import './cards.scss'\r\n            }\r\n        }\r\n    }\r\n\r\n    .item-view-slide-container::-webkit-scrollbar {\r\n        display: none;\r\n        /* Hide the scrollbar */\r\n    }\r\n}\r\n\r\n\r\n// wide cards section\r\n\r\n.wide-cards-container {\r\n    width: 100%;\r\n    // background-color: antiquewhite;\r\n    display: flex;\r\n    gap: 2rem;\r\n\r\n    .wide-card {\r\n        // background-color: green;\r\n        width: 100%;\r\n        border-radius: .5rem;\r\n        overflow: hidden;\r\n        margin-inline: 10px;\r\n\r\n        @media screen and(max-width: 900px) {\r\n            min-width: 400px;\r\n        }\r\n\r\n        @media screen and(max-width: 600px) {\r\n            min-width: 250px;\r\n        }\r\n\r\n        .image-bg-div {\r\n            width: 100%;\r\n            aspect-ratio: 6 / 3;\r\n            background-color: rgb(73, 73, 73);\r\n            border-radius: .5rem;\r\n            overflow: hidden;\r\n            background-size: cover;\r\n            background-position: center;\r\n        }\r\n\r\n        .content {\r\n            padding: 1rem 0rem;\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: .5rem;\r\n\r\n            small {\r\n                text-transform: uppercase;\r\n                opacity: .7;\r\n                font-size: .7rem;\r\n            }\r\n\r\n            .game-title {\r\n                font-size: 1.2rem;\r\n            }\r\n\r\n            .pricing {\r\n                display: flex;\r\n                gap: 1rem;\r\n                align-items: center;\r\n\r\n                .original-price {\r\n                    text-decoration: line-through;\r\n                    opacity: .6;\r\n                }\r\n            }\r\n        }\r\n\r\n        @import './cards.scss'\r\n    }\r\n}\r\n\r\n@media screen and(max-width: 900px) {\r\n    .wide-cards-container {\r\n        overflow: scroll;\r\n    }\r\n\r\n    .wide-cards-container::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n}\r\n\r\n// free section\r\n\r\n.free-games-section {\r\n    background-color: rgb(66, 66, 66);\r\n    padding: 2rem;\r\n\r\n    .section-top {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .section-title {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 1rem;\r\n\r\n        svg {\r\n            fill: white;\r\n        }\r\n\r\n        >div {\r\n            height: 40px;\r\n            aspect-ratio: 1;\r\n        }\r\n    }\r\n\r\n    >div {\r\n        .wide-cards-container {\r\n            .wide-card {\r\n                @media screen and(max-width: 900px) {\r\n                    min-width: unset;\r\n                }\r\n\r\n                @media screen and(max-width: 600px) {\r\n                    min-width: unset;\r\n                }\r\n\r\n                .content {\r\n                    padding-bottom: 0;\r\n\r\n                    .game-description {\r\n                        font-size: .9rem;\r\n                        opacity: .8;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        @media screen and(max-width: 900px) {\r\n            .wide-cards-container {\r\n                overflow: hidden;\r\n            }\r\n        }\r\n\r\n        @media screen and(max-width: 720px) {\r\n            .wide-cards-container {\r\n                flex-direction: column;\r\n            }\r\n        }\r\n    }\r\n\r\n    .image-bg-div {\r\n        display: flex;\r\n\r\n        >div {\r\n            min-height: 15%;\r\n            width: 100%;\r\n            background-color: rgba(2, 61, 255, 0.836);\r\n            margin-top: auto;\r\n            font-size: 1.2rem;\r\n            display: grid;\r\n            place-content: center;\r\n        }\r\n\r\n        .black-strip {\r\n            background-color: rgba(0, 0, 0, 0.658);\r\n        }\r\n    }\r\n}\r\n\r\n// lists section\r\n\r\n.lists-section {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: clamp(.7rem, 2vw, 1.5rem);\r\n    overflow-x: auto;\r\n\r\n    .list-container {\r\n        padding-inline: 1rem;\r\n        min-width: 270px;\r\n\r\n        border-inline: 1px solid rgba(255, 255, 255, 0);\r\n\r\n        .list-top {\r\n            margin-bottom: 1.5rem;\r\n            font-size: 1.2rem;\r\n        }\r\n\r\n        button {\r\n            margin-left: auto;\r\n            font-size: .9rem;\r\n            padding: .4rem;\r\n            padding-inline: .7rem;\r\n        }\r\n\r\n        .list {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 1rem;\r\n\r\n            .item {\r\n                display: grid;\r\n                grid-template-columns: 1fr 3fr;\r\n                gap: clamp(.7rem, 2vw, 1rem);\r\n\r\n                .image-bg-div {\r\n                    aspect-ratio: 2/3;\r\n                }\r\n\r\n                @import './cards.scss'\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n    .list-container:nth-child(2) {\r\n        border-inline: 1px solid white;\r\n    }\r\n}\r\n\r\n.lists-section::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n//  double card section \r\n\r\n.double-card-section {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: clamp(1rem, 2vw, 3rem);\r\n\r\n    @media screen and(max-width: 720px) {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .game-title {\r\n        margin-top: 1rem;\r\n        margin-bottom: .5rem;\r\n    }\r\n\r\n    .game-description {\r\n        font-size: .9rem;\r\n        opacity: .7;\r\n    }\r\n\r\n    .image-bg-div {\r\n        aspect-ratio: 4/2;\r\n    }\r\n\r\n    @import './cards.scss'\r\n}\r\n\r\n\r\n// browse card section \r\n.browse-card {\r\n    button {\r\n        background-color: white;\r\n        color: black;\r\n        width: fit-content;\r\n    }\r\n\r\n    .content {\r\n        .title {\r\n            font-size: 1.3rem;\r\n        }\r\n\r\n        .description {\r\n            opacity: .8;\r\n        }\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n        margin: auto;\r\n        margin-left: 1rem;\r\n    }\r\n\r\n    @import './cards.scss'\r\n}",".image-bg-div {\r\n    background-image: url(../imgs/commonGames/nogames.png);\r\n}\r\n\r\n.g1 {\r\n    background-image: url(../imgs/commonGames/dont-starve.jpg);\r\n}\r\n\r\n.g2 {\r\n    background-image: url(../imgs/commonGames/dying-light2.jpg);\r\n}\r\n\r\n.g3 {\r\n    background-image: url(../imgs/commonGames/gtasa.jpg);\r\n}\r\n\r\n.g4 {\r\n    background-image: url(../imgs/commonGames/life-is-strange-remastered.jpg);\r\n}\r\n\r\n.g5 {\r\n    background-image: url(../imgs/commonGames/sea-of-thieves.jpg);\r\n}\r\n\r\n.g6 {\r\n    background-image: url(../imgs/commonGames/rocket-league-intro.jpg);\r\n}\r\n\r\n.g7 {\r\n    background-image: url(../imgs/commonGames/six-siege.jpg);\r\n}\r\n\r\n.g8 {\r\n    background-image: url(../imgs/commonGames/tom-clancy.jpg);\r\n}\r\n\r\n.g9 {\r\n    background-image: url(../imgs/commonGames/naraka-intro.jpg);\r\n}\r\n\r\n.g10 {\r\n    background-image: url(../imgs/commonGames/sifu.jpg);\r\n}\r\n\r\n.g11 {\r\n    background-image: url(../imgs/commonGames/six-siege.jpg);\r\n}\r\n\r\n.g12 {\r\n    background-image: url(../imgs/commonGames/gtasa.jpg);\r\n}\r\n\r\n.g13 {\r\n    background-image: url(../imgs/commonGames/ghost-of-tsushima.png);\r\n}\r\n\r\n.g14 {\r\n    background-image: url(../imgs/commonGames/farcry-primal.jpg);\r\n}\r\n\r\n.g15 {\r\n    background-image: url(../imgs/commonGames/gtaV.jpg);\r\n}\r\n\r\n.g16 {\r\n    background-image: url(../imgs/commonGames/hitman3.jpg);\r\n}\r\n\r\n.g17 {\r\n    background-image: url(../imgs/commonGames/smite.jpg);\r\n}\r\n\r\n// wide cards\r\n\r\n.wc1 {\r\n    background-image: url(../imgs/commonGames/naraka-intro.jpg);\r\n}\r\n\r\n.wc2 {\r\n    background-image: url(../imgs/commonGames/rocket-league-intro.jpg);\r\n}\r\n\r\n.wc3 {\r\n    background-image: url(../imgs/commonGames/dying-light2.jpg);\r\n}\r\n\r\n.fg1 {\r\n    background-image: url(../imgs/commonGames/valo.jpg);\r\n}\r\n\r\n.fg2 {\r\n    background-image: url(../imgs/carousel/watch-dogs2.jpg);\r\n}\r\n\r\n.fg3 {\r\n    background-image: url(../imgs/commonGames/epic-games.webp);\r\n}\r\n\r\n.ft1 {\r\n    background-image: url(../imgs/commonGames/fortnitecover.webp);\r\n}\r\n\r\n.ft2 {\r\n    background-image: url(../imgs/commonGames/fortnitelego.webp);\r\n}\r\n\r\n.ft3 {\r\n    background-image: url(../imgs/commonGames/fortnitebattlepass.jpg);\r\n}\r\n\r\n// lists\r\n// @for $i from 1 through 15 {\r\n//     .list-image-#{$i} {\r\n//         background-image: url(../imgs/commonGames/image-#{$i}.jpg); // Adjust the path and filename as needed\r\n//     }\r\n// }\r\n\r\n.list-image-1 {\r\n    background-image: url(../imgs/commonGames/valo.jpg);\r\n}\r\n\r\n.list-image-2 {\r\n    background-image: url(../imgs/commonGames/hotwhees.jpg);\r\n}\r\n\r\n.list-image-3 {\r\n    background-image: url(../imgs/carousel/controll.png);\r\n}\r\n\r\n.list-image-4 {\r\n    background-image: url(../imgs/commonGames/naraka-intro.jpg);\r\n}\r\n\r\n.list-image-5 {\r\n    background-image: url(../imgs/commonGames/gtaV.jpg);\r\n}\r\n\r\n.list-image-6 {\r\n    background-image: url(../imgs/commonGames/gtasa.jpg);\r\n}\r\n\r\n.list-image-7 {\r\n    background-image: url(../imgs/commonGames/farcry-primal.jpg);\r\n}\r\n\r\n.list-image-8 {\r\n    background-image: url(../imgs/commonGames/tomb-rider.jpg);\r\n}\r\n\r\n.list-image-9 {\r\n    background-image: url(../imgs/commonGames/sifu.jpg);\r\n}\r\n\r\n.list-image-10 {\r\n    background-image: url(../imgs/commonGames/hitman3.jpg);\r\n}\r\n\r\n.list-image-11 {\r\n    background-image: url(../imgs/commonGames/life-is-strange-remastered.jpg);\r\n}\r\n\r\n.list-image-12 {\r\n    background-image: url(../imgs/commonGames/tom-clancy.jpg);\r\n}\r\n\r\n.list-image-13 {\r\n    background-image: url(../imgs/commonGames/farcry-primal.jpg);\r\n}\r\n\r\n.list-image-14 {\r\n    background-image: url(../imgs/commonGames/smite.jpg);\r\n}\r\n\r\n.list-image-15 {\r\n    background-image: url(../imgs/commonGames/sea-of-thieves.jpg);\r\n}\r\n\r\n// double cards\r\n\r\n.double-card-1 {\r\n    background-image: url(../imgs/carousel/watch-dogs2.jpg);\r\n}\r\n\r\n.double-card-2 {\r\n    background-image: url(../imgs/commonGames/farcry6-control.jpg);\r\n}\r\n\r\n// browse\r\n\r\n.browse-card {\r\n    background-image: url(../imgs/commonGames/browse.jpg);\r\n}\r\n\r\n\r\n\r\n.image-bg-div {\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n//fix positions\r\n\r\n.wc2 {\r\n    background-position: center top;\r\n}\r\n\r\n.fg1 {\r\n    background-position: center 10%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/reset.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/reset.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

a {
  text-decoration: none;
  color: #f6f6ef; }

ul,
li {
  list-style-type: none; }

body {
  background-color: #121212;
  color: #f6f6ef;
  font-family: poppins; }

.flex {
  display: flex;
  align-items: center; }

.btn {
  background-color: #2776ff;
  padding: .5rem;
  padding-inline: .8rem;
  border-radius: .5rem;
  border: none;
  outline: none;
  cursor: pointer; }

.btn-secondary {
  background-color: white;
  padding: 1rem;
  padding-inline: 1.5rem;
  color: black;
  border-radius: .5rem;
  border: none;
  outline: none;
  cursor: pointer; }

.view-more-btn {
  background-color: transparent;
  padding: .5rem 1rem;
  border: 2px solid white;
  border-radius: .5rem;
  color: white;
  font-family: poppins;
  cursor: pointer; }
`, "",{"version":3,"sources":["webpack://./src/scss/reset.scss"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAG1B;EACI,qBAAqB;EACrB,cAAwB,EAAA;;AAG5B;;EAEI,qBAAqB,EAAA;;AAGzB;EACI,yBAAgC;EAChC,cAAwB;EACxB,oBAAoB,EAAA;;AAIxB;EACI,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,yBAAmC;EACnC,cAAc;EACd,qBAAqB;EACrB,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,eAAe,EAAA;;AAGnB;EACI,uBAAkC;EAClC,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,eAAe,EAAA;;AAGnB;EACI,6BAA6B;EAC7B,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,YAAY;EACZ,oBAAoB;EACpB,eAAe,EAAA","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: hsl(60, 26%, 95%);\r\n}\r\n\r\nul,\r\nli {\r\n    list-style-type: none;\r\n}\r\n\r\nbody {\r\n    background-color: hsl(0, 0%, 7%);\r\n    color: hsl(60, 26%, 95%);\r\n    font-family: poppins;\r\n}\r\n\r\n//utility\r\n.flex {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.btn {\r\n    background-color: rgb(39, 118, 255);\r\n    padding: .5rem;\r\n    padding-inline: .8rem;\r\n    border-radius: .5rem;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-secondary {\r\n    background-color: hsl(0, 0%, 100%);\r\n    padding: 1rem;\r\n    padding-inline: 1.5rem;\r\n    color: black;\r\n    border-radius: .5rem;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.view-more-btn {\r\n    background-color: transparent;\r\n    padding: .5rem 1rem;\r\n    border: 2px solid white;\r\n    border-radius: .5rem;\r\n    color: white;\r\n    font-family: poppins;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerScript: () => (/* binding */ headerScript)
/* harmony export */ });
const toggledMenuDropBtn = document.querySelector('.menu-toggle-btn');
const toggledMenu = document.querySelector('.toggled-menu');

// drop

function headerScript() {
  toggledMenuDropBtn.addEventListener('click', () => {
    toggledMenu.classList.toggle('active');
    toggledMenuDropBtn.classList.toggle('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target !== toggledMenu && e.target !== toggledMenuDropBtn) {
      toggledMenu.classList.remove('active');
      toggledMenuDropBtn.classList.remove('active');
    }
  });
}




/***/ }),

/***/ "./src/js/loadImages.js":
/*!******************************!*\
  !*** ./src/js/loadImages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   images: () => (/* binding */ images),
/* harmony export */   preloadImages: () => (/* binding */ preloadImages)
/* harmony export */ });
/* harmony import */ var _imgs_carousel_controll_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/carousel/controll.png */ "./src/imgs/carousel/controll.png");
/* harmony import */ var _imgs_carousel_genshin_impact_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/carousel/genshin-impact.jpg */ "./src/imgs/carousel/genshin-impact.jpg");
/* harmony import */ var _imgs_carousel_watch_dogs2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/carousel/watch-dogs2.jpg */ "./src/imgs/carousel/watch-dogs2.jpg");
/* harmony import */ var _imgs_carousel_dont_starve_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/carousel/dont-starve.jpg */ "./src/imgs/carousel/dont-starve.jpg");
/* harmony import */ var _imgs_carousel_gta_drive_by_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/carousel/gta-drive-by.jpg */ "./src/imgs/carousel/gta-drive-by.jpg");






const images = [
  _imgs_carousel_controll_png__WEBPACK_IMPORTED_MODULE_0__,
  _imgs_carousel_genshin_impact_jpg__WEBPACK_IMPORTED_MODULE_1__,
  _imgs_carousel_watch_dogs2_jpg__WEBPACK_IMPORTED_MODULE_2__,
  _imgs_carousel_dont_starve_jpg__WEBPACK_IMPORTED_MODULE_3__,
  _imgs_carousel_gta_drive_by_jpg__WEBPACK_IMPORTED_MODULE_4__,
];

function preloadImages(imgs) {
  imgs.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
}




/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderSection: () => (/* binding */ sliderSection)
/* harmony export */ });
/* harmony import */ var _loadImages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImages.js */ "./src/js/loadImages.js");


const carouseItems = document.querySelectorAll(`[class*="carousel-item"]`);
const carouselItemBoxes = document.querySelectorAll(`[class*="item-box"]`);
const carouselItemBoxImgs = document.querySelectorAll(`[class*="item-image"]`);
const carouselItemBoxImgsFill = document.querySelectorAll(`.fill-background`);

let slideIndex = 0;
let intervalId;

// slider

function removeSlide() {
  carouseItems.forEach((item, i) => {
    item.classList.remove('active', 'hide');
    carouselItemBoxImgsFill[i].classList.remove('active');
  });
}

function showSlide(i) {
  removeSlide();
  carouseItems[i].classList.add('active', 'hide');
  carouselItemBoxImgsFill[i].classList.add('active');
}

function nextSlide() {
  slideIndex += 1;
  if (slideIndex >= carouseItems.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function runSlider() {
  carouseItems[slideIndex].classList.add('active', 'hide');
  carouselItemBoxImgsFill[slideIndex].classList.add('active');
  intervalId = setInterval(nextSlide, 4000);
}

function sliderSection() {
  document.addEventListener('DOMContentLoaded', () => {
    (0,_loadImages_js__WEBPACK_IMPORTED_MODULE_0__.preloadImages)(_loadImages_js__WEBPACK_IMPORTED_MODULE_0__.images);
  });

  window.addEventListener('load', () => {
    // when images fully loaded
    runSlider();

    carouselItemBoxes.forEach((e, i) => {
      e.addEventListener('click', () => {
        slideIndex = i;
        clearInterval(intervalId);
        removeSlide();
        runSlider();
      });
    });

    carouseItems.forEach((e, i) => {
      e.style.backgroundImage = `radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${_loadImages_js__WEBPACK_IMPORTED_MODULE_0__.images[i]})`;
    });

    carouselItemBoxImgs.forEach((e, i) => {
      e.style.backgroundImage = `url(${_loadImages_js__WEBPACK_IMPORTED_MODULE_0__.images[i]})`;
    });
  });
}



/***/ }),

/***/ "./src/imgs/carousel/controll.png":
/*!****************************************!*\
  !*** ./src/imgs/carousel/controll.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4777b59c557ed976c036.png";

/***/ }),

/***/ "./src/imgs/carousel/dont-starve.jpg":
/*!*******************************************!*\
  !*** ./src/imgs/carousel/dont-starve.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cc5fe750634fb5c9062.jpg";

/***/ }),

/***/ "./src/imgs/carousel/genshin-impact.jpg":
/*!**********************************************!*\
  !*** ./src/imgs/carousel/genshin-impact.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a8ec79b0cea58b3cfd6.jpg";

/***/ }),

/***/ "./src/imgs/carousel/gta-drive-by.jpg":
/*!********************************************!*\
  !*** ./src/imgs/carousel/gta-drive-by.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8200cb1cdd3e4182e49.jpg";

/***/ }),

/***/ "./src/imgs/carousel/watch-dogs2.jpg":
/*!*******************************************!*\
  !*** ./src/imgs/carousel/watch-dogs2.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76343d5edb4478a07341.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/browse.jpg":
/*!*****************************************!*\
  !*** ./src/imgs/commonGames/browse.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7472a1f4ed0fc88e6e55.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/dont-starve.jpg":
/*!**********************************************!*\
  !*** ./src/imgs/commonGames/dont-starve.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cc5fe750634fb5c9062.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/dying-light2.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/commonGames/dying-light2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aee150023fdb773ea035.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/epic-games.webp":
/*!**********************************************!*\
  !*** ./src/imgs/commonGames/epic-games.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acae1657b79ee0e1f959.webp";

/***/ }),

/***/ "./src/imgs/commonGames/farcry-primal.jpg":
/*!************************************************!*\
  !*** ./src/imgs/commonGames/farcry-primal.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc0cc1c704c5050c5854.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/farcry6-control.jpg":
/*!**************************************************!*\
  !*** ./src/imgs/commonGames/farcry6-control.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "934cdf82898180a75327.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/fortnitebattlepass.jpg":
/*!*****************************************************!*\
  !*** ./src/imgs/commonGames/fortnitebattlepass.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6754abb2e1d3197c7c57.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/fortnitecover.webp":
/*!*************************************************!*\
  !*** ./src/imgs/commonGames/fortnitecover.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c4530a16c4c08591444.webp";

/***/ }),

/***/ "./src/imgs/commonGames/fortnitelego.webp":
/*!************************************************!*\
  !*** ./src/imgs/commonGames/fortnitelego.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d9d621d38a952e9bf3f.webp";

/***/ }),

/***/ "./src/imgs/commonGames/ghost-of-tsushima.png":
/*!****************************************************!*\
  !*** ./src/imgs/commonGames/ghost-of-tsushima.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e867d28d050bcddc5e9.png";

/***/ }),

/***/ "./src/imgs/commonGames/gtaV.jpg":
/*!***************************************!*\
  !*** ./src/imgs/commonGames/gtaV.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7a88cd9dbc773b9fae8.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/gtasa.jpg":
/*!****************************************!*\
  !*** ./src/imgs/commonGames/gtasa.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f494b9ae6e55230c10ec.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/hitman3.jpg":
/*!******************************************!*\
  !*** ./src/imgs/commonGames/hitman3.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f2f31f2c61a2f3092f1.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/hotwhees.jpg":
/*!*******************************************!*\
  !*** ./src/imgs/commonGames/hotwhees.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7de5660d3e782169af7b.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/life-is-strange-remastered.jpg":
/*!*************************************************************!*\
  !*** ./src/imgs/commonGames/life-is-strange-remastered.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9745d21f2e1ed9cc23bc.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/naraka-intro.jpg":
/*!***********************************************!*\
  !*** ./src/imgs/commonGames/naraka-intro.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28ad83e142ad646cfe73.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/nogames.png":
/*!******************************************!*\
  !*** ./src/imgs/commonGames/nogames.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "605d09d86f120dc0bac4.png";

/***/ }),

/***/ "./src/imgs/commonGames/rocket-league-intro.jpg":
/*!******************************************************!*\
  !*** ./src/imgs/commonGames/rocket-league-intro.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92b65d37af1e102fd05f.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/sea-of-thieves.jpg":
/*!*************************************************!*\
  !*** ./src/imgs/commonGames/sea-of-thieves.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2edc3cb520147601bc3.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/sifu.jpg":
/*!***************************************!*\
  !*** ./src/imgs/commonGames/sifu.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baf1a4405ca8206af331.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/six-siege.jpg":
/*!********************************************!*\
  !*** ./src/imgs/commonGames/six-siege.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a3e755aa5e65632867e.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/smite.jpg":
/*!****************************************!*\
  !*** ./src/imgs/commonGames/smite.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58e02ba8b3e6a8079f77.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/tom-clancy.jpg":
/*!*********************************************!*\
  !*** ./src/imgs/commonGames/tom-clancy.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45a1199521a562891258.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/tomb-rider.jpg":
/*!*********************************************!*\
  !*** ./src/imgs/commonGames/tomb-rider.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "859858a88df31abc999a.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/valo.jpg":
/*!***************************************!*\
  !*** ./src/imgs/commonGames/valo.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "151685c06cfcfe7a9c93.jpg";

/***/ }),

/***/ "./src/imgs/icons/menu.png":
/*!*********************************!*\
  !*** ./src/imgs/icons/menu.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82ba6659a53bfaaf5b35.png";

/***/ }),

/***/ "./src/imgs/jashandullat.jpg":
/*!***********************************!*\
  !*** ./src/imgs/jashandullat.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee0b6d70b162684ab0ec.jpg";

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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/reset.scss */ "./src/scss/reset.scss");
/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/header.scss */ "./src/scss/header.scss");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/slider.js */ "./src/js/slider.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/header.js */ "./src/js/header.js");






(0,_js_slider_js__WEBPACK_IMPORTED_MODULE_3__.sliderSection)();
(0,_js_header_js__WEBPACK_IMPORTED_MODULE_4__.headerScript)();

// card containers

const sectionRoots = document.querySelectorAll('.card-section-root');
const slider = document.querySelector('.item-view-slide-container');
const cards = document.querySelectorAll('.card');
let numberOfCards;
let margin;

function renderBars() {
  if (window.innerWidth > 1200) {
    numberOfCards = 5;
  }

  if (window.innerWidth < 1200) {
    numberOfCards = 4;
  }

  if (window.innerWidth < 700) {
    numberOfCards = 2;
  }

  margin = numberOfCards * 20;

  const cardWidth = (slider.offsetWidth - margin) / numberOfCards;

  cards.forEach((e) => {
    e.style.width = `${cardWidth}px`;
  });
}

function scrollBtn() {
  sectionRoots.forEach((e) => {
    e.addEventListener('click', (event) => {
      const s = e.querySelector('.item-view-slide-container');
      if (event.target.classList.contains('left-scroll-svg')) {
        s.scrollLeft -= slider.offsetWidth;
      }

      if (event.target.classList.contains('right-scroll-svg')) {
        s.scrollLeft += slider.offsetWidth;
      }
    });
  });
}

function cardControls() {
  cards.forEach((e) => {
    e.addEventListener('mouseover', () => {
      e.querySelector('.add-to-wishlist').style.display = `block`;
    });
    e.addEventListener('mouseout', () => {
      e.querySelector('.add-to-wishlist').style.display = `none`;
    });
    e.addEventListener('click', (event) => {
      const game = e.getAttribute('gameName');
      if (event.target.tagName === 'svg') {
        const p = document.createElement('p');
        const warnBox = document.createElement('div');
        const svgIcon = e.querySelector('.add-to-wishlist');

        p.innerHTML = 'Added to your WishList';
        warnBox.classList.add('warn-box');
        warnBox.appendChild(p);
        document.body.appendChild(warnBox);

        svgIcon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>check</title>
    <path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" />
  </svg>
`;
        setTimeout(() => {
          warnBox.remove();
        }, 4000);
      } else {
        window.location.href = `./gameView.html?game=${encodeURIComponent(game)}`;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBars();

  scrollBtn();

  cardControls();

  window.addEventListener('resize', renderBars);
});

})();

/******/ })()
;
//# sourceMappingURL=main.b2dbf312fc28c4c143f4.bundle.js.map