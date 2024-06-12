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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/icons/close.png */ "./src/imgs/icons/close.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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
    @media screen and (max-width: 750px) {
      header nav {
        display: none;
        flex-direction: column;
        gap: 2rem;
        position: fixed;
        inset: 0%;
        top: 70px;
        background-color: #2c2c2c;
        z-index: 999;
        padding: 1rem; }
        header nav .left-nav {
          flex-direction: column; }
          header nav .left-nav > li {
            width: 100%;
            border-radius: 1rem;
            padding: .7rem;
            background-color: black;
            opacity: 1; }
        header nav .right-nav {
          margin-top: 1rem;
          display: flex; }
          header nav .right-nav .language {
            margin-left: auto; } }
  @media screen and (max-width: 750px) {
    header nav.active {
      display: block; } }
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
  header .toggle-btn.active {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }
`, "",{"version":3,"sources":["webpack://./src/scss/header.scss"],"names":[],"mappings":"AAAA;EACI,yBAAmC;EACnC,oBAAoB;EACpB,YAAY,EAAA;EAHhB;IAMQ,qBAAqB;IACrB,UAAU;IACV,kDAAkD,EAAA;IAR1D;MAWY,YAAY;MACZ,WAAW;MACX,mDAA2C;MAC3C,sBAAsB,EAAA;IAdlC;MAkBY,iCAAiC;MACjC,yBAAyB,EAAA;IAnBrC;MAuBY,0BAA0B,EAAA;IAvBtC;MA2BY,mBAAmB;MACnB,0BAA0B;MAC1B,YAAyB,EAAA;EA7BrC;IAkCQ,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB,EAAA;EArCzB;IAyCQ,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;IACX,2BAA2B,EAAA;IA7CnC;MAgDY,+BAA8B,EAAA;MAhD1C;;QAoDgB,WAAW,EAAA;IApD3B;MAyDY,6BAA4B,EAAA;MAzDxC;QA4DgB,kBAAkB,EAAA;QA5DlC;UA+DoB,+BAA+B,EAAA;QA/DnD;UAmEoB,kBAAkB;UAClB,aAAa;UACb,SAAS;UACT,2BAA2B;UAC3B,6BAA6B;UAC7B,YAAY;UACZ,WAAW;UACX,aAAa;UACb,UAAU,EAAA;QA3E9B;UA+EoB,kBAAkB;UAClB,kBAAkB;UAClB,SAAS;UACT,2BAA2B;UAC3B,uBAAuB;UACvB,UAAU;UAEV,yBAAmC;UACnC,aAAa;UACb,WAAW;UACX,kBAAkB;UAClB,gBAAgB;UAChB,aAAa;UACb,sBAAsB;UACtB,UAAU,EAAA;UA7F9B;YAgGwB,+BAA+B;YAC/B,oBAAoB;YACpB,mBAAmB;YACnB,eAAe,EAAA;UAnGvC;YAuGwB,yBAAmC;YACnC,YAAY,EAAA;QAxGpC;UA6GoB,mBAAmB,EAAA;MA7GvC;QAkHgB,mBAAmB,EAAA;MAlHnC;QAsHgB,cAAc,EAAA;MAtH9B;QA0HgB,YAAY,EAAA;MA1H5B;QA8HgB,YAAY;QACZ,eAAe;QACf,yBAAmC;QACnC,oBAAoB;QACpB,uBAAuB,EAAA;IAK/B;MAvIR;QAwIY,aAAa;QACb,sBAAsB;QACtB,SAAS;QACT,eAAe;QACf,SAAS;QACT,SAAS;QACT,yBAAiC;QACjC,YAAY;QACZ,aAAa,EAAA;QAhJzB;UAmJgB,sBAAsB,EAAA;UAnJtC;YAsJoB,WAAW;YACX,mBAAmB;YACnB,cAAc;YACd,uBAA8B;YAC9B,UAAU,EAAA;QA1J9B;UA+JgB,gBAAgB;UAChB,aAAa,EAAA;UAhK7B;YAmKoB,iBAAiB,EAAA,EACpB;EAKb;IAzKJ;MA2KY,cAAc,EAAA,EACjB;EA5KT;IAgLQ,YAAY;IACZ,eAAe;IACf,yDAA6C;IAC7C,sBAAsB;IACtB,6BAA6B;IAC7B,aAAa;IACb,YAAY;IACZ,aAAa;IACb,eAAe;IACf,iBAAiB,EAAA;IAEjB;MA3LR;QA4LY,cAAc,EAAA,EAErB;EA9LL;IAiMQ,yDAA8C,EAAA","sourcesContent":["header {\r\n    background-color: hsl(240, 8%, 10%);\r\n    padding-inline: 1rem;\r\n    height: 70px;\r\n\r\n    .logo-section {\r\n        padding-inline: .5rem;\r\n        gap: .5rem;\r\n        border-right: 1px solid rgba(255, 255, 255, 0.404);\r\n\r\n        .logo-box {\r\n            height: 30px;\r\n            width: 30px;\r\n            background: url('../imgs/jashandullat.jpg');\r\n            background-size: cover;\r\n        }\r\n\r\n        .material-symbols-outlined {\r\n            color: rgba(255, 255, 255, 0.623);\r\n            transform: rotate(180deg);\r\n        }\r\n\r\n        .material-symbols-outlined.active {\r\n            transform: translateY(10%);\r\n        }\r\n\r\n        .material-symbols-outlined:hover {\r\n            transition: all .4s;\r\n            transform: translateY(10%);\r\n            color: rgb(255, 255, 255);\r\n        }\r\n    }\r\n\r\n    .store {\r\n        text-transform: uppercase;\r\n        font-size: 1.4rem;\r\n        font-weight: 600;\r\n        margin-left: 1rem;\r\n    }\r\n\r\n    nav {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n        padding-inline-start: .7rem;\r\n\r\n        .left-nav {\r\n            gap: clamp(.5rem, 1.5vw, 2rem);\r\n\r\n            .support,\r\n            .distribute {\r\n                opacity: .7;\r\n            }\r\n        }\r\n\r\n        .right-nav {\r\n            gap: clamp(.5rem, 1vw, 1rem);\r\n\r\n            .language {\r\n                position: relative;\r\n\r\n                span {\r\n                    color: rgba(255, 255, 255, 0.5);\r\n                }\r\n\r\n                .friendly-div {\r\n                    position: absolute;\r\n                    bottom: -3rem;\r\n                    left: 50%;\r\n                    transform: translateX(-50%);\r\n                    background-color: transparent;\r\n                    height: 3rem;\r\n                    width: 8rem;\r\n                    display: none;\r\n                    z-index: 2;\r\n                }\r\n\r\n                >ul {\r\n                    position: absolute;\r\n                    visibility: hidden;\r\n                    left: 50%;\r\n                    transform: translateX(-50%);\r\n                    inset-block-start: 4rem;\r\n                    z-index: 2;\r\n\r\n                    background-color: hsl(240, 6%, 13%);\r\n                    padding: 1rem;\r\n                    width: 8rem;\r\n                    border-radius: 2vh;\r\n                    font-size: .9rem;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: .5rem;\r\n\r\n                    li {\r\n                        color: rgba(255, 255, 255, 0.5);\r\n                        border-radius: .5rem;\r\n                        padding: .5rem 1rem;\r\n                        cursor: pointer;\r\n                    }\r\n\r\n                    li:hover {\r\n                        background-color: hsl(240, 3%, 26%);\r\n                        color: white;\r\n                    }\r\n                }\r\n\r\n                ul:hover {\r\n                    visibility: visible;\r\n                }\r\n            }\r\n\r\n            .language:hover>ul {\r\n                visibility: visible;\r\n            }\r\n\r\n            .language:hover>.friendly-div {\r\n                display: block;\r\n            }\r\n\r\n            .language:hover span {\r\n                color: white;\r\n            }\r\n\r\n            .user {\r\n                height: 40px;\r\n                aspect-ratio: 1;\r\n                background-color: hsl(240, 4%, 20%);\r\n                border-radius: 100vh;\r\n                justify-content: center;\r\n            }\r\n        }\r\n\r\n\r\n        @media screen and(max-width: 750px) {\r\n            display: none;\r\n            flex-direction: column;\r\n            gap: 2rem;\r\n            position: fixed;\r\n            inset: 0%;\r\n            top: 70px;\r\n            background-color: rgb(44, 44, 44);\r\n            z-index: 999;\r\n            padding: 1rem;\r\n\r\n            .left-nav {\r\n                flex-direction: column;\r\n\r\n                >li {\r\n                    width: 100%;\r\n                    border-radius: 1rem;\r\n                    padding: .7rem;\r\n                    background-color: rgb(0, 0, 0);\r\n                    opacity: 1;\r\n                }\r\n            }\r\n\r\n            .right-nav {\r\n                margin-top: 1rem;\r\n                display: flex;\r\n\r\n                .language {\r\n                    margin-left: auto;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    @media screen and(max-width: 750px) {\r\n        nav.active {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    .toggle-btn {\r\n        height: 40px;\r\n        aspect-ratio: 1;\r\n        background-image: url(../imgs/icons/menu.png);\r\n        background-size: cover;\r\n        background-color: transparent;\r\n        outline: none;\r\n        border: none;\r\n        display: none;\r\n        cursor: pointer;\r\n        margin-left: auto;\r\n\r\n        @media screen and(max-width: 750px) {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    .toggle-btn.active {\r\n        background-image: url(../imgs/icons/close.png);\r\n    }\r\n}"],"sourceRoot":""}]);
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
  @media screen and (max-width: 720px) {
    main {
      gap: 1rem; } }
  main .toggled-menu {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    display: none;
    grid-template-areas: "play create" "discover create";
    padding: 2rem;
    gap: 3.5rem;
    gap: clamp(1rem, 5vw, 3.5rem);
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
    height: 60px;
    align-items: center;
    gap: 1.5rem;
    margin-top: 3rem; }
    @media screen and (max-width: 720px) {
      main .search-container {
        margin-top: 1rem; } }
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
      @media screen and (max-width: 720px) {
        main .search-container .discover-menu {
          display: none; } }
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
          border-radius: .5rem;
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
      width: 100%; }
    main .carousel-container {
      width: 100%; } }

.card-section-root .section-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem; }
  .card-section-root .section-top .section-title {
    font-size: 1.2rem;
    display: flex;
    align-items: center; }
  .card-section-root .section-top .buttons {
    display: flex;
    gap: 1rem; }
    .card-section-root .section-top .buttons > div {
      height: 2.5rem;
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
      margin-inline: 10px;
      cursor: pointer; }
      .card-section-root .item-view-slide-container .items-container .card .image-bg-div {
        width: 100%;
        aspect-ratio: 5 / 6;
        background-color: #494949;
        border-radius: .5rem;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        transition: background-size 1s ease;
        background-repeat: no-repeat;
        position: relative; }
      .card-section-root .item-view-slide-container .items-container .card .image-bg-div:hover::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.178); }
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
          gap: clamp(0.1rem, 1vw, 1rem);
          align-items: center; }
          @media screen and (max-width: 450px) {
            .card-section-root .item-view-slide-container .items-container .card .content .pricing button {
              padding-inline: .5rem;
              font-size: .8rem; } }
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
        gap: clamp(0.7rem, 2vw, 1rem);
        padding: .4rem;
        border-radius: .7rem;
        cursor: pointer; }
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
      .lists-section .list-container .list .item:hover {
        background-color: #272727; }
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

footer {
  padding: clamp(1rem, 3vw, 2rem);
  background-color: #333333;
  margin-top: 1rem; }
  footer .top {
    display: flex;
    gap: clamp(1rem, 3vw, 2rem);
    margin-bottom: 2rem; }
    footer .top img {
      height: 30px;
      aspect-ratio: 1;
      cursor: pointer; }
  footer .footer-body .title {
    opacity: .7;
    margin-bottom: 1rem; }
  footer .footer-body .lists {
    display: flex;
    gap: clamp(1rem, 3vw, 2rem); }
    footer .footer-body .lists ul {
      display: flex;
      flex-direction: column;
      gap: .7rem; }
      footer .footer-body .lists ul li {
        cursor: pointer; }
  footer .copyright {
    opacity: .7;
    font-size: .85rem; }
  footer .flex {
    gap: clamp(1rem, 3vw, 2rem);
    margin-top: 1rem; }
  footer hr {
    margin-top: 1rem;
    margin-bottom: 1rem; }

@media screen and (max-width: 850px) {
  html {
    font-size: 14px; } }

@media screen and (max-width: 450px) {
  html {
    font-size: 13px; }
  body {
    overflow-x: hidden; } }
`, "",{"version":3,"sources":["webpack://./src/scss/main.scss","webpack://./src/scss/cards.scss"],"names":[],"mappings":"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,EAAA;;ADovB1D;EChvBI,yDAA0D,EAAA;;ADgvB9D;EC5uBI,yDAA2D,EAAA;;AD4uB/D;ECxuBI,yDAAoD,EAAA;;ADwuBxD;ECpuBI,yDAAyE,EAAA;;ADouB7E;EChuBI,yDAA6D,EAAA;;ADguBjE;EC5tBI,yDAAkE,EAAA;;AD4tBtE;ECxtBI,0DAAwD,EAAA;;ADwtB5D;ECptBI,0DAAyD,EAAA;;ADotB7D;EChtBI,0DAA2D,EAAA;;ADgtB/D;EC5sBI,0DAAmD,EAAA;;AD4sBvD;ECxsBI,0DAAwD,EAAA;;ADwsB5D;ECpsBI,yDAAoD,EAAA;;ADosBxD;EChsBI,0DAAgE,EAAA;;ADgsBpE;EC5rBI,0DAA4D,EAAA;;AD4rBhE;ECxrBI,0DAAmD,EAAA;;ADwrBvD;ECprBI,0DAAsD,EAAA;;ADorB1D;EChrBI,0DAAoD,EAAA;;ADgrBxD;EC1qBI,0DAA2D,EAAA;;AD0qB/D;ECtqBI,yDAAkE,EAAA;;ADsqBtE;EClqBI,yDAA2D,EAAA;;ADkqB/D;EC9pBI,0DAAmD,EAAA;;AD8pBvD;EC1pBI,yDAAuD,EAAA;;AD0pB3D;ECtpBI,0DAA0D,EAAA;;ADspB9D;EClpBI,0DAA6D,EAAA;;ADkpBjE;EC9oBI,0DAA4D,EAAA;;AD8oBhE;EC1oBI,0DAAiE,EAAA;;AD0oBrE;EC/nBI,0DAAmD,EAAA;;AD+nBvD;EC3nBI,0DAAuD,EAAA;;AD2nB3D;ECvnBI,yDAAoD,EAAA;;ADunBxD;ECnnBI,0DAA2D,EAAA;;ADmnB/D;EC/mBI,0DAAmD,EAAA;;AD+mBvD;EC3mBI,yDAAoD,EAAA;;AD2mBxD;ECvmBI,0DAA4D,EAAA;;ADumBhE;ECnmBI,0DAAyD,EAAA;;ADmmB7D;EC/lBI,0DAAmD,EAAA;;AD+lBvD;EC3lBI,0DAAsD,EAAA;;AD2lB1D;ECvlBI,yDAAyE,EAAA;;ADulB7E;ECnlBI,0DAAyD,EAAA;;ADmlB7D;EC/kBI,0DAA4D,EAAA;;AD+kBhE;EC3kBI,0DAAoD,EAAA;;AD2kBxD;ECvkBI,yDAA6D,EAAA;;ADukBjE;ECjkBI,yDAAuD,EAAA;;ADikB3D;EC7jBI,0DAA8D,EAAA;;AD6jBlE;ECvjBI,0DAAqD,EAAA;;ADujBzD;ECjjBI,sBAAsB;EACtB,2BAA2B,EAAA;;ADgjB/B;EC1iBI,+BAA+B,EAAA;;AD0iBnC;ECtiBI,+BAA+B,EAAA;;ADkkBnC;EACI,+BAA+B;EAC/B,yBAAiC;EACjC,gBAAgB,EAAA;EAHpB;IAMQ,aAAa;IACb,2BAA2B;IAC3B,mBAAmB,EAAA;IAR3B;MAWY,YAAY;MACZ,eAAe;MACf,eAAe,EAAA;EAb3B;IAmBY,WAAW;IACX,mBAAmB,EAAA;EApB/B;IAwBY,aAAa;IACb,2BAA2B,EAAA;IAzBvC;MA4BgB,aAAa;MACb,sBAAsB;MACtB,UAAU,EAAA;MA9B1B;QAiCoB,eAAe,EAAA;EAjCnC;IAwCQ,WAAW;IACX,iBAAiB,EAAA;EAzCzB;IA6CQ,2BAA2B;IAC3B,gBAAgB,EAAA;EA9CxB;IAkDQ,gBAAgB;IAChB,mBAAmB,EAAA;;AAI3B;EACI;IACI,eAAe,EAAA,EAClB;;AAGL;EACI;IACI,eAAe,EAAA;EAGnB;IACI,kBAAkB,EAAA,EACrB","sourcesContent":[".add-to-wishlist {\r\n    display: none;\r\n    height: 20px;\r\n    aspect-ratio: 1;\r\n    box-shadow: 0px 0px 2px 4px rgba(2, 2, 2, 0.274);\r\n    border-radius: 100vh;\r\n    cursor: pointer;\r\n    margin-left: auto;\r\n    margin-top: 4px;\r\n    margin-right: 4px;\r\n    transition: all 1s;\r\n    background-color: black;\r\n\r\n    :hover {\r\n        transform: scale(110%);\r\n    }\r\n\r\n    svg {\r\n        fill: rgb(255, 255, 255);\r\n    }\r\n}\r\n\r\n.warn-box {\r\n    position: fixed;\r\n    top: 1rem;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: rgb(51, 51, 51);\r\n    padding: 2rem;\r\n    border-radius: 1rem;\r\n    overflow: hidden;\r\n\r\n    p {\r\n        position: relative;\r\n        z-index: 3;\r\n    }\r\n}\r\n\r\n.warn-box::after {\r\n    content: \"\";\r\n    z-index: 2;\r\n    top: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(68, 68, 68);\r\n    animation: cooldown 4s linear;\r\n}\r\n\r\n@keyframes cooldown {\r\n    0% {\r\n        width: 100%;\r\n    }\r\n\r\n    100% {\r\n        width: 0%;\r\n    }\r\n}\r\n\r\n.image-bg-div {\r\n    width: 100%;\r\n    background-color: rgb(73, 73, 73);\r\n    border-radius: .5rem;\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\nmain {\r\n\r\n    position: relative;\r\n    padding-inline: 7%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n\r\n    @media screen and(max-width: 1200px) {\r\n        padding-inline: 1rem;\r\n    }\r\n\r\n    @media screen and(max-width: 720px) {\r\n        gap: 1rem;\r\n    }\r\n\r\n    .toggled-menu {\r\n        position: absolute;\r\n        top: 1rem;\r\n        left: 1rem;\r\n        z-index: 1;\r\n\r\n        display: none;\r\n        grid-template-areas: \"play create\"\r\n            \"discover create\";\r\n        padding: 2rem;\r\n        gap: 3.5rem;\r\n\r\n        gap: clamp(1rem, 5vw, 3.5rem);\r\n\r\n        background-color: hsl(240, 6%, 13%);\r\n        border-radius: 1.5vh;\r\n\r\n        >div>h2 {\r\n            margin-bottom: 1rem;\r\n            font-size: 1.2rem;\r\n            font-weight: 600;\r\n        }\r\n\r\n        >div>ul {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: .5rem;\r\n\r\n            color: rgba(255, 255, 255, 0.473);\r\n            font-size: .9rem;\r\n\r\n            li {\r\n                border-radius: .5rem;\r\n                padding: .5rem 1rem;\r\n                cursor: pointer;\r\n            }\r\n\r\n            li:hover {\r\n                background-color: hsl(240, 3%, 26%);\r\n                color: white;\r\n            }\r\n        }\r\n\r\n        .play {\r\n            grid-area: play;\r\n        }\r\n\r\n        .discover {\r\n            grid-area: discover;\r\n        }\r\n\r\n        .create {\r\n            grid-area: create;\r\n        }\r\n\r\n    }\r\n\r\n    .toggled-menu.active {\r\n        display: grid;\r\n    }\r\n\r\n    .search-container {\r\n        max-width: 1430px;\r\n        width: 80%;\r\n        margin-inline: auto;\r\n        height: 60px;\r\n        align-items: center;\r\n        gap: 1.5rem;\r\n        margin-top: 3rem;\r\n\r\n        @media screen and(max-width: 720px) {\r\n            margin-top: 1rem;\r\n        }\r\n\r\n        .search-bar {\r\n            background-color: hsl(0, 0%, 13%);\r\n            border-radius: 100vw;\r\n            height: 40px;\r\n            max-width: 230px;\r\n            padding: .5rem;\r\n            gap: .5rem;\r\n\r\n            span {\r\n                font-size: 20px;\r\n            }\r\n\r\n            input {\r\n                background-color: transparent;\r\n                outline: none;\r\n                border: none;\r\n                color: white;\r\n                font-family: poppins;\r\n            }\r\n        }\r\n\r\n        .discover-menu {\r\n            gap: 1.5rem;\r\n\r\n            @media screen and(max-width: 720px) {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        .cart {\r\n            margin-left: auto;\r\n\r\n            >span {\r\n                font-size: 25px;\r\n            }\r\n        }\r\n    }\r\n\r\n    .carousel-container {\r\n        max-width: 1430px;\r\n        margin-inline: auto;\r\n        display: grid;\r\n        grid-template-columns: 8fr 2fr;\r\n        gap: 1rem;\r\n        height: 35em;\r\n\r\n        @media screen and(max-width: 1000px) {\r\n            grid-template-columns: 1fr;\r\n        }\r\n\r\n        .carousel {\r\n            position: relative;\r\n            overflow: hidden;\r\n            border-radius: 1.5rem;\r\n\r\n            .carousel-inner {\r\n                display: flex;\r\n                height: 100%;\r\n\r\n                .carousel-item-1 {\r\n                    background: url(../imgs/carousel/controll.png);\r\n                }\r\n\r\n                .carousel-item-2 {\r\n                    background: url(../imgs/carousel/genshin-impact.jpg);\r\n                }\r\n\r\n                .carousel-item-3 {\r\n                    background: url(../imgs/carousel/watch-dogs2.jpg);\r\n                }\r\n\r\n                [class*=\"carousel-item\"] {\r\n                    width: 100%;\r\n                    height: 100%;\r\n                    background-size: cover;\r\n                    background-position: center 0%;\r\n                    backdrop-filter: brightness(0.8);\r\n                    transform: translateX(20%);\r\n                    transition: transform 0.5s ease;\r\n\r\n                    display: none;\r\n                    flex-direction: column;\r\n                    align-items: start;\r\n                    justify-content: end;\r\n                    padding: 7%;\r\n\r\n                    >:first-child {\r\n                        opacity: .7;\r\n                        margin-bottom: 2rem;\r\n                    }\r\n\r\n                    >:nth-child(2) {\r\n                        font-weight: 600;\r\n                        margin-bottom: .7rem;\r\n                        opacity: .9;\r\n                    }\r\n\r\n                    >:nth-child(3) {\r\n                        font-size: 1rem;\r\n                        margin-bottom: 2rem;\r\n                    }\r\n\r\n                    .purchase-div {\r\n                        align-items: center;\r\n                        gap: 1rem;\r\n\r\n                        .add-to-wishlist {\r\n                            align-items: center;\r\n                            gap: .5rem;\r\n                            cursor: pointer;\r\n\r\n                            >span {\r\n                                font-size: 1rem;\r\n                            }\r\n\r\n                            >p {\r\n                                font-size: .8rem;\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                [class*=\"carousel-item\"].active {\r\n                    display: flex;\r\n                    transform: translateX(0%);\r\n                    animation: slidein 0.3s ease forwards;\r\n                }\r\n\r\n                [class*=\"carousel-item\"].hide {\r\n                    animation: slideout 0.2s ease forwards;\r\n                    animation-delay: 3.9s;\r\n                }\r\n\r\n                @keyframes slidein {\r\n                    from {\r\n                        transform: translateX(-50%);\r\n                    }\r\n\r\n                    to {\r\n                        transform: translateX(0%);\r\n                    }\r\n                }\r\n\r\n                @keyframes slideout {\r\n                    from {\r\n                        transform: translateX(0%);\r\n                    }\r\n\r\n                    to {\r\n                        transform: translateX(-50%);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        .items-container {\r\n            display: grid;\r\n            // font-size: 1rem;\r\n            gap: .3rem;\r\n            grid-template-rows: repeat(5, 1fr);\r\n\r\n            @media screen and(max-width: 1000px) {\r\n                display: none;\r\n            }\r\n\r\n\r\n            [class*=\"item-box\"] {\r\n                display: grid;\r\n                grid-template-columns: 2fr 5fr;\r\n                align-items: center;\r\n                gap: 1rem;\r\n                padding: 1rem;\r\n                cursor: pointer;\r\n                border-radius: 1rem;\r\n                position: relative;\r\n                overflow: hidden;\r\n\r\n                .fill-background {\r\n                    position: absolute;\r\n                    left: 0;\r\n                    z-index: 0;\r\n                    background: hsla(0, 0%, 48%, 0.452);\r\n                    height: 100%;\r\n                    width: 0%;\r\n                }\r\n\r\n                .fill-background.active {\r\n                    animation: fillAnimation ease-out 4s;\r\n                }\r\n\r\n                @keyframes fillAnimation {\r\n                    0% {\r\n                        width: 0;\r\n                    }\r\n\r\n                    100% {\r\n                        width: 100%;\r\n                    }\r\n                }\r\n\r\n                [class*='item-image'] {\r\n                    background-color: hsl(0, 0%, 15%);\r\n                    height: 100%;\r\n                    width: auto;\r\n                    border-radius: .5rem;\r\n                    background-size: cover;\r\n                    position: relative;\r\n                    z-index: 1;\r\n                }\r\n\r\n                .item-name {\r\n                    position: relative;\r\n                    z-index: 1;\r\n                }\r\n            }\r\n\r\n            [class*=\"item-box\"]:hover {\r\n                background-color: hsl(0, 0%, 16%);\r\n            }\r\n        }\r\n    }\r\n\r\n    @media screen and (max-width: 1150px) {\r\n        .search-container {\r\n            width: 100%;\r\n            // padding: 1rem;\r\n        }\r\n\r\n        .carousel-container {\r\n            width: 100%;\r\n            // padding: 1rem\r\n        }\r\n    }\r\n}\r\n\r\n// section scroll cards\r\n\r\n.card-section-root {\r\n    .section-top {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        margin-bottom: 1rem;\r\n\r\n        .section-title {\r\n            font-size: 1.2rem;\r\n            display: flex;\r\n            align-items: center;\r\n        }\r\n\r\n        .buttons {\r\n            display: flex;\r\n            gap: 1rem;\r\n\r\n            >div {\r\n                height: 2.5rem;\r\n                aspect-ratio: 1;\r\n                cursor: pointer;\r\n\r\n                svg {\r\n                    fill: white;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .item-view-slide-container {\r\n        width: 100%;\r\n        overflow: scroll;\r\n        transition: scroll 2s ease-in-out;\r\n\r\n        .items-container {\r\n            width: fit-content;\r\n            display: flex;\r\n            transition: all 2s;\r\n\r\n            .card {\r\n                // background-color: green;\r\n                border-radius: .5rem;\r\n                overflow: hidden;\r\n                margin-inline: 10px;\r\n                cursor: pointer;\r\n\r\n                .image-bg-div {\r\n                    width: 100%;\r\n                    aspect-ratio: 5 / 6;\r\n                    background-color: rgb(73, 73, 73);\r\n                    border-radius: .5rem;\r\n                    overflow: hidden;\r\n                    background-size: cover;\r\n                    background-position: center;\r\n                    transition: background-size 1s ease;\r\n                    background-repeat: no-repeat;\r\n                    position: relative;\r\n                }\r\n\r\n                .image-bg-div:hover::after {\r\n                    content: \"\";\r\n                    position: absolute;\r\n                    top: 0px;\r\n                    left: 0px;\r\n                    height: 100%;\r\n                    width: 100%;\r\n                    background-color: rgba(255, 255, 255, 0.178);\r\n                }\r\n\r\n                .content {\r\n                    padding: 1rem 0rem;\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: .5rem;\r\n\r\n                    small {\r\n                        text-transform: uppercase;\r\n                        opacity: .7;\r\n                        font-size: .7rem;\r\n                    }\r\n\r\n                    .pricing {\r\n                        display: flex;\r\n                        gap: clamp(0.1rem, 1vw, 1rem);\r\n                        align-items: center;\r\n\r\n                        @media screen and(max-width: 450px) {\r\n                            button {\r\n                                padding-inline: .5rem;\r\n                                font-size: .8rem;\r\n                            }\r\n                        }\r\n\r\n                        .original-price {\r\n                            text-decoration: line-through;\r\n                            opacity: .6;\r\n                        }\r\n                    }\r\n                }\r\n\r\n                @import './cards.scss'\r\n            }\r\n        }\r\n    }\r\n\r\n    .item-view-slide-container::-webkit-scrollbar {\r\n        display: none;\r\n        /* Hide the scrollbar */\r\n    }\r\n}\r\n\r\n\r\n// wide cards section\r\n\r\n.wide-cards-container {\r\n    width: 100%;\r\n    // background-color: antiquewhite;\r\n    display: flex;\r\n    gap: 2rem;\r\n\r\n    .wide-card {\r\n        // background-color: green;\r\n        width: 100%;\r\n        border-radius: .5rem;\r\n        overflow: hidden;\r\n        margin-inline: 10px;\r\n\r\n        @media screen and(max-width: 900px) {\r\n            min-width: 400px;\r\n        }\r\n\r\n        @media screen and(max-width: 600px) {\r\n            min-width: 250px;\r\n        }\r\n\r\n        .image-bg-div {\r\n            width: 100%;\r\n            aspect-ratio: 6 / 3;\r\n            background-color: rgb(73, 73, 73);\r\n            border-radius: .5rem;\r\n            overflow: hidden;\r\n            background-size: cover;\r\n            background-position: center;\r\n        }\r\n\r\n        .content {\r\n            padding: 1rem 0rem;\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: .5rem;\r\n\r\n            small {\r\n                text-transform: uppercase;\r\n                opacity: .7;\r\n                font-size: .7rem;\r\n            }\r\n\r\n            .game-title {\r\n                font-size: 1.2rem;\r\n            }\r\n\r\n            .pricing {\r\n                display: flex;\r\n                gap: 1rem;\r\n                align-items: center;\r\n\r\n                .original-price {\r\n                    text-decoration: line-through;\r\n                    opacity: .6;\r\n                }\r\n            }\r\n        }\r\n\r\n        @import './cards.scss'\r\n    }\r\n}\r\n\r\n@media screen and(max-width: 900px) {\r\n    .wide-cards-container {\r\n        overflow: scroll;\r\n    }\r\n\r\n    .wide-cards-container::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n}\r\n\r\n// free section\r\n\r\n.free-games-section {\r\n    background-color: rgb(66, 66, 66);\r\n    padding: 2rem;\r\n\r\n    .section-top {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        margin-bottom: 1rem;\r\n    }\r\n\r\n    .section-title {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 1rem;\r\n\r\n        svg {\r\n            fill: white;\r\n        }\r\n\r\n        >div {\r\n            height: 40px;\r\n            aspect-ratio: 1;\r\n        }\r\n    }\r\n\r\n    >div {\r\n        .wide-cards-container {\r\n            .wide-card {\r\n                @media screen and(max-width: 900px) {\r\n                    min-width: unset;\r\n                }\r\n\r\n                @media screen and(max-width: 600px) {\r\n                    min-width: unset;\r\n                }\r\n\r\n                .content {\r\n                    padding-bottom: 0;\r\n\r\n                    .game-description {\r\n                        font-size: .9rem;\r\n                        opacity: .8;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        @media screen and(max-width: 900px) {\r\n            .wide-cards-container {\r\n                overflow: hidden;\r\n            }\r\n        }\r\n\r\n        @media screen and(max-width: 720px) {\r\n            .wide-cards-container {\r\n                flex-direction: column;\r\n            }\r\n        }\r\n    }\r\n\r\n    .image-bg-div {\r\n        display: flex;\r\n\r\n        >div {\r\n            min-height: 15%;\r\n            width: 100%;\r\n            background-color: rgba(2, 61, 255, 0.836);\r\n            margin-top: auto;\r\n            font-size: 1.2rem;\r\n            display: grid;\r\n            place-content: center;\r\n        }\r\n\r\n        .black-strip {\r\n            background-color: rgba(0, 0, 0, 0.658);\r\n        }\r\n    }\r\n}\r\n\r\n// lists section\r\n\r\n.lists-section {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: clamp(.7rem, 2vw, 1.5rem);\r\n    overflow-x: auto;\r\n\r\n    .list-container {\r\n        padding-inline: 1rem;\r\n        min-width: 270px;\r\n\r\n        border-inline: 1px solid rgba(255, 255, 255, 0);\r\n\r\n        .list-top {\r\n            margin-bottom: 1.5rem;\r\n            font-size: 1.2rem;\r\n        }\r\n\r\n        button {\r\n            margin-left: auto;\r\n            font-size: .9rem;\r\n            padding: .4rem;\r\n            padding-inline: .7rem;\r\n        }\r\n\r\n        .list {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 1rem;\r\n\r\n            .item {\r\n                display: grid;\r\n                grid-template-columns: 1fr 3fr;\r\n                gap: clamp(.7rem, 2vw, 1rem);\r\n                padding: .4rem;\r\n                border-radius: .7rem;\r\n                cursor: pointer;\r\n\r\n                .image-bg-div {\r\n                    aspect-ratio: 2/3;\r\n                }\r\n\r\n                @import './cards.scss'\r\n\r\n            }\r\n\r\n            .item:hover {\r\n                background-color: rgb(39, 39, 39);\r\n            }\r\n        }\r\n    }\r\n\r\n    .list-container:nth-child(2) {\r\n        border-inline: 1px solid white;\r\n    }\r\n}\r\n\r\n.lists-section::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n//  double card section \r\n\r\n.double-card-section {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: clamp(1rem, 2vw, 3rem);\r\n\r\n    @media screen and(max-width: 720px) {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .game-title {\r\n        margin-top: 1rem;\r\n        margin-bottom: .5rem;\r\n    }\r\n\r\n    .game-description {\r\n        font-size: .9rem;\r\n        opacity: .7;\r\n    }\r\n\r\n    .image-bg-div {\r\n        aspect-ratio: 4/2;\r\n    }\r\n\r\n    @import './cards.scss'\r\n}\r\n\r\n\r\n// browse card section \r\n.browse-card {\r\n    button {\r\n        background-color: white;\r\n        color: black;\r\n        width: fit-content;\r\n    }\r\n\r\n    .content {\r\n        .title {\r\n            font-size: 1.3rem;\r\n        }\r\n\r\n        .description {\r\n            opacity: .8;\r\n        }\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n        margin: auto;\r\n        margin-left: 1rem;\r\n    }\r\n\r\n    @import './cards.scss'\r\n}\r\n\r\n// footer\r\n\r\nfooter {\r\n    padding: clamp(1rem, 3vw, 2rem);\r\n    background-color: rgb(51, 51, 51);\r\n    margin-top: 1rem;\r\n\r\n    .top {\r\n        display: flex;\r\n        gap: clamp(1rem, 3vw, 2rem);\r\n        margin-bottom: 2rem;\r\n\r\n        img {\r\n            height: 30px;\r\n            aspect-ratio: 1;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n\r\n    .footer-body {\r\n        .title {\r\n            opacity: .7;\r\n            margin-bottom: 1rem;\r\n        }\r\n\r\n        .lists {\r\n            display: flex;\r\n            gap: clamp(1rem, 3vw, 2rem);\r\n\r\n            ul {\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: .7rem;\r\n\r\n                li {\r\n                    cursor: pointer;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .copyright {\r\n        opacity: .7;\r\n        font-size: .85rem;\r\n    }\r\n\r\n    .flex {\r\n        gap: clamp(1rem, 3vw, 2rem);\r\n        margin-top: 1rem;\r\n    }\r\n\r\n    hr {\r\n        margin-top: 1rem;\r\n        margin-bottom: 1rem;\r\n    }\r\n}\r\n\r\n@media screen and(max-width: 850px) {\r\n    html {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n@media screen and(max-width: 450px) {\r\n    html {\r\n        font-size: 13px;\r\n    }\r\n\r\n    body {\r\n        overflow-x: hidden;\r\n    }\r\n}",".image-bg-div {\r\n    background-image: url(../imgs/commonGames/nogames.png);\r\n}\r\n\r\n.g1 {\r\n    background-image: url(../imgs/commonGames/dont-starve.jpg);\r\n}\r\n\r\n.g2 {\r\n    background-image: url(../imgs/commonGames/dying-light2.jpg);\r\n}\r\n\r\n.g3 {\r\n    background-image: url(../imgs/commonGames/gtasa.jpg);\r\n}\r\n\r\n.g4 {\r\n    background-image: url(../imgs/commonGames/life-is-strange-remastered.jpg);\r\n}\r\n\r\n.g5 {\r\n    background-image: url(../imgs/commonGames/sea-of-thieves.jpg);\r\n}\r\n\r\n.g6 {\r\n    background-image: url(../imgs/commonGames/rocket-league-intro.jpg);\r\n}\r\n\r\n.g7 {\r\n    background-image: url(../imgs/commonGames/six-siege.jpg);\r\n}\r\n\r\n.g8 {\r\n    background-image: url(../imgs/commonGames/tom-clancy.jpg);\r\n}\r\n\r\n.g9 {\r\n    background-image: url(../imgs/commonGames/naraka-intro.jpg);\r\n}\r\n\r\n.g10 {\r\n    background-image: url(../imgs/commonGames/sifu.jpg);\r\n}\r\n\r\n.g11 {\r\n    background-image: url(../imgs/commonGames/six-siege.jpg);\r\n}\r\n\r\n.g12 {\r\n    background-image: url(../imgs/commonGames/gtasa.jpg);\r\n}\r\n\r\n.g13 {\r\n    background-image: url(../imgs/commonGames/ghost-of-tsushima.png);\r\n}\r\n\r\n.g14 {\r\n    background-image: url(../imgs/commonGames/farcry-primal.jpg);\r\n}\r\n\r\n.g15 {\r\n    background-image: url(../imgs/commonGames/gtaV.jpg);\r\n}\r\n\r\n.g16 {\r\n    background-image: url(../imgs/commonGames/hitman3.jpg);\r\n}\r\n\r\n.g17 {\r\n    background-image: url(../imgs/commonGames/smite.jpg);\r\n}\r\n\r\n// wide cards\r\n\r\n.wc1 {\r\n    background-image: url(../imgs/commonGames/naraka-intro.jpg);\r\n}\r\n\r\n.wc2 {\r\n    background-image: url(../imgs/commonGames/rocket-league-intro.jpg);\r\n}\r\n\r\n.wc3 {\r\n    background-image: url(../imgs/commonGames/dying-light2.jpg);\r\n}\r\n\r\n.fg1 {\r\n    background-image: url(../imgs/commonGames/valo.jpg);\r\n}\r\n\r\n.fg2 {\r\n    background-image: url(../imgs/carousel/watch-dogs2.jpg);\r\n}\r\n\r\n.fg3 {\r\n    background-image: url(../imgs/commonGames/epic-games.webp);\r\n}\r\n\r\n.ft1 {\r\n    background-image: url(../imgs/commonGames/fortnitecover.webp);\r\n}\r\n\r\n.ft2 {\r\n    background-image: url(../imgs/commonGames/fortnitelego.webp);\r\n}\r\n\r\n.ft3 {\r\n    background-image: url(../imgs/commonGames/fortnitebattlepass.jpg);\r\n}\r\n\r\n// lists\r\n// @for $i from 1 through 15 {\r\n//     .list-image-#{$i} {\r\n//         background-image: url(../imgs/commonGames/image-#{$i}.jpg); // Adjust the path and filename as needed\r\n//     }\r\n// }\r\n\r\n.list-image-1 {\r\n    background-image: url(../imgs/commonGames/valo.jpg);\r\n}\r\n\r\n.list-image-2 {\r\n    background-image: url(../imgs/commonGames/hotwhees.jpg);\r\n}\r\n\r\n.list-image-3 {\r\n    background-image: url(../imgs/carousel/controll.png);\r\n}\r\n\r\n.list-image-4 {\r\n    background-image: url(../imgs/commonGames/naraka-intro.jpg);\r\n}\r\n\r\n.list-image-5 {\r\n    background-image: url(../imgs/commonGames/gtaV.jpg);\r\n}\r\n\r\n.list-image-6 {\r\n    background-image: url(../imgs/commonGames/gtasa.jpg);\r\n}\r\n\r\n.list-image-7 {\r\n    background-image: url(../imgs/commonGames/farcry-primal.jpg);\r\n}\r\n\r\n.list-image-8 {\r\n    background-image: url(../imgs/commonGames/tomb-rider.jpg);\r\n}\r\n\r\n.list-image-9 {\r\n    background-image: url(../imgs/commonGames/sifu.jpg);\r\n}\r\n\r\n.list-image-10 {\r\n    background-image: url(../imgs/commonGames/hitman3.jpg);\r\n}\r\n\r\n.list-image-11 {\r\n    background-image: url(../imgs/commonGames/life-is-strange-remastered.jpg);\r\n}\r\n\r\n.list-image-12 {\r\n    background-image: url(../imgs/commonGames/tom-clancy.jpg);\r\n}\r\n\r\n.list-image-13 {\r\n    background-image: url(../imgs/commonGames/farcry-primal.jpg);\r\n}\r\n\r\n.list-image-14 {\r\n    background-image: url(../imgs/commonGames/smite.jpg);\r\n}\r\n\r\n.list-image-15 {\r\n    background-image: url(../imgs/commonGames/sea-of-thieves.jpg);\r\n}\r\n\r\n// double cards\r\n\r\n.double-card-1 {\r\n    background-image: url(../imgs/carousel/watch-dogs2.jpg);\r\n}\r\n\r\n.double-card-2 {\r\n    background-image: url(../imgs/commonGames/farcry6-control.jpg);\r\n}\r\n\r\n// browse\r\n\r\n.browse-card {\r\n    background-image: url(../imgs/commonGames/browse.jpg);\r\n}\r\n\r\n\r\n\r\n.image-bg-div {\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n//fix positions\r\n\r\n.wc2 {\r\n    background-position: center top;\r\n}\r\n\r\n.fg1 {\r\n    background-position: center 10%;\r\n}"],"sourceRoot":""}]);
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
const sideBarBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');

// drop

function preventScroll(event) {
  window.scrollTo(0, 0);
}

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

  sideBarBtn.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      sideBarBtn.classList.remove('active');
      window.addEventListener('scroll', preventScroll);
    } else if (!nav.classList.contains('active')) {
      nav.classList.add('active');
      sideBarBtn.classList.add('active');
      window.removeEventListener('scroll', preventScroll);
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

/***/ "./src/imgs/icons/close.png":
/*!**********************************!*\
  !*** ./src/imgs/icons/close.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c03b6ed2081caf5152c.png";

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
//# sourceMappingURL=main.3699a984dd8572377235.bundle.js.map