/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/gameView.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/gameView.scss ***!
  \*************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/icons/youtube-gaming-custom.png */ "./src/imgs/icons/youtube-gaming-custom.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/epic-games.webp */ "./src/imgs/commonGames/epic-games.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/commonGames/browse.jpg */ "./src/imgs/commonGames/browse.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main {
  padding: 2rem;
  max-width: 1400px;
  margin: auto; }
  @media screen and (max-width: 600px) {
    main {
      padding: .5rem; } }

.main-top .game-title {
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 600; }

.hero {
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 1rem;
  position: relative; }
  @media screen and (max-width: 1000px) {
    .hero {
      grid-template-columns: 1fr; } }
  .hero .carousel-container {
    display: flex;
    flex-direction: column;
    overflow: scroll; }
    @media screen and (max-width: 1000px) {
      .hero .carousel-container {
        order: 2; } }
    .hero .carousel-container .carousel .image-bg-div {
      width: 100%;
      aspect-ratio: 3/2;
      background-color: #303030;
      border-radius: 1rem; }
    .hero .carousel-container .carousel-changer {
      transition: scroll 2s ease-in-out;
      position: relative;
      display: flex;
      align-items: center;
      width: 100%; }
      .hero .carousel-container .carousel-changer .container {
        display: flex;
        gap: 1rem;
        padding: 0.5rem;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        width: fit-content;
        max-width: 80%;
        overflow: scroll;
        margin: auto; }
        .hero .carousel-container .carousel-changer .container .changer {
          min-width: 5rem;
          aspect-ratio: 3/2;
          background-color: #303030;
          border-radius: 0.5rem;
          cursor: pointer; }
      .hero .carousel-container .carousel-changer .left-scroll,
      .hero .carousel-container .carousel-changer .right-scroll {
        position: absolute;
        fill: white;
        left: 0;
        z-index: 99;
        height: 30px; }
        .hero .carousel-container .carousel-changer .left-scroll svg,
        .hero .carousel-container .carousel-changer .right-scroll svg {
          height: 30px;
          cursor: pointer; }
      .hero .carousel-container .carousel-changer .right-scroll {
        left: unset;
        right: 0;
        width: fit-content; }
      .hero .carousel-container .carousel-changer .container::-webkit-scrollbar {
        display: none; }
    .hero .carousel-container .carousel-content .top-text {
      font-size: 1.2rem; }
    @media screen and (max-width: 1000px) {
      .hero .carousel-container .carousel-content {
        order: 1; } }
    .hero .carousel-container .carousel-content .category-features {
      display: flex;
      gap: 1rem;
      justify-content: space-around;
      margin: 1rem; }
      .hero .carousel-container .carousel-content .category-features > div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        border-left: 1px solid white;
        padding-left: 1rem;
        margin: 1rem; }
        .hero .carousel-container .carousel-content .category-features > div .title {
          opacity: .7;
          font-size: .9rem; }
    .hero .carousel-container .carousel-content .detailed-description {
      opacity: .8;
      font-size: .9rem; }
  .hero .carousel-container::-webkit-scrollbar {
    display: none; }
  .hero .sticky-div .content-container {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    position: sticky;
    top: 0px; }
    .hero .sticky-div .content-container .loggo-watermark {
      width: 100%;
      aspect-ratio: 3/2;
      background-color: #303030;
      border-radius: 1rem;
      display: grid;
      place-content: center; }
    .hero .sticky-div .content-container small {
      background-color: #303030;
      border-radius: .2rem;
      padding-inline: .2rem;
      opacity: .8;
      width: fit-content; }
    .hero .sticky-div .content-container .price {
      display: flex;
      gap: clamp(0.1rem, 1vw, 1rem);
      align-items: center; }
      .hero .sticky-div .content-container .price .original-price {
        text-decoration: line-through;
        opacity: .6; }
      .hero .sticky-div .content-container .price .btn {
        padding: .4rem; }
    .hero .sticky-div .content-container .btn {
      background-color: transparent;
      padding: .5rem 1rem;
      border: 2px solid white;
      border-radius: .5rem;
      color: white;
      font-family: poppins;
      cursor: pointer; }
    .hero .sticky-div .content-container .buy {
      background-color: white;
      color: black; }
    .hero .sticky-div .content-container .add {
      margin-bottom: .7rem; }
    .hero .sticky-div .content-container .detail {
      display: flex;
      justify-content: space-between; }
    .hero .sticky-div .content-container hr {
      opacity: .7; }

.main-footer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem; }
  .main-footer .title {
    font-size: 1.3rem; }
  .main-footer .follow-us {
    display: flex;
    flex-direction: column;
    gap: 1rem; }
    .main-footer .follow-us .social {
      background-color: #353535;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 2rem; }
      .main-footer .follow-us .social img {
        height: 50px; }
  .main-footer .rating .points {
    height: 150px;
    aspect-ratio: 1;
    background-color: gray;
    border-radius: 100vh;
    display: grid;
    place-content: center;
    margin: 2rem auto; }
    .main-footer .rating .points span {
      font-size: 3rem; }
  .main-footer .rating .feature-cards {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem; }
    @media screen and (max-width: 1000px) {
      .main-footer .rating .feature-cards {
        grid-template-columns: 1fr 1fr; } }
    @media screen and (max-width: 720px) {
      .main-footer .rating .feature-cards {
        grid-template-columns: 1fr; } }
    .main-footer .rating .feature-cards .card {
      width: 100%;
      aspect-ratio: 5/3;
      background-color: #363636;
      border-radius: 1rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center; }
      @media screen and (max-width: 720px) {
        .main-footer .rating .feature-cards .card {
          flex-direction: row;
          aspect-ratio: unset; } }
      .main-footer .rating .feature-cards .card .image-bg-div {
        height: 50%;
        aspect-ratio: 1;
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
        background-size: cover; }
        @media screen and (max-width: 720px) {
          .main-footer .rating .feature-cards .card .image-bg-div {
            height: 50px; } }
      .main-footer .rating .feature-cards .card .content {
        margin: auto;
        text-align: center; }
        @media screen and (max-width: 720px) {
          .main-footer .rating .feature-cards .card .content {
            margin-left: 2rem;
            text-align: start; } }
        .main-footer .rating .feature-cards .card .content > p {
          font-weight: 600;
          font-size: 1.4rem; }
        .main-footer .rating .feature-cards .card .content .title {
          opacity: .7;
          font-size: .9rem;
          font-weight: 400; }
  .main-footer .requirements .title {
    margin-bottom: 2rem; }
  .main-footer .requirements .content {
    background-color: #2e2e2e;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3rem;
    max-width: 1200px;
    margin: auto;
    border-radius: .5rem; }
    @media screen and (max-width: 600px) {
      .main-footer .requirements .content {
        padding: 1rem; } }
    .main-footer .requirements .content ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem; }
      .main-footer .requirements .content ul li .title {
        opacity: .7;
        font-size: .9rem; }
      .main-footer .requirements .content ul .content-title {
        font-weight: 600;
        font-size: 1.2rem;
        opacity: .5;
        margin-bottom: .5rem; }

@media screen and (max-width: 600px) {
  html {
    font-size: 14px; } }

[class*='image'] {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center; }

.image-1 {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); }

.loggo-watermark {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center; }
`, "",{"version":3,"sources":["webpack://./src/scss/gameView.scss"],"names":[],"mappings":"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","sourcesContent":["main {\r\n    padding: 2rem;\r\n    max-width: 1400px;\r\n    margin: auto;\r\n\r\n    @media screen and(max-width: 600px) {\r\n        padding: .5rem;\r\n    }\r\n}\r\n\r\n.main-top {\r\n    .game-title {\r\n        font-size: 2rem;\r\n        margin-top: 1rem;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.hero {\r\n    display: grid;\r\n    grid-template-columns: 5fr 2fr;\r\n    gap: 1rem;\r\n    position: relative;\r\n\r\n    @media screen and(max-width: 1000px) {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .carousel-container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        overflow: scroll;\r\n\r\n        @media screen and(max-width: 1000px) {\r\n            order: 2;\r\n        }\r\n\r\n        .carousel {\r\n            .image-bg-div {\r\n                width: 100%;\r\n                aspect-ratio: 3/2;\r\n                background-color: rgb(48, 48, 48);\r\n                border-radius: 1rem;\r\n            }\r\n        }\r\n\r\n        .carousel-changer {\r\n            transition: scroll 2s ease-in-out;\r\n            position: relative;\r\n            display: flex;\r\n            align-items: center;\r\n            width: 100%;\r\n\r\n            .container {\r\n                display: flex;\r\n                gap: 1rem;\r\n                padding: 0.5rem;\r\n                flex-wrap: nowrap;\r\n                align-items: center;\r\n                justify-content: flex-start;\r\n                width: fit-content;\r\n                max-width: 80%;\r\n                overflow: scroll;\r\n                margin: auto;\r\n                // background-color: red;\r\n\r\n                .changer {\r\n                    min-width: 5rem;\r\n                    aspect-ratio: 3/2;\r\n                    background-color: rgb(48, 48, 48);\r\n                    border-radius: 0.5rem;\r\n                    cursor: pointer;\r\n                }\r\n            }\r\n\r\n            .left-scroll,\r\n            .right-scroll {\r\n                position: absolute;\r\n                fill: white;\r\n                left: 0;\r\n                z-index: 99;\r\n                height: 30px;\r\n\r\n                svg {\r\n                    height: 30px;\r\n                    cursor: pointer;\r\n                }\r\n            }\r\n\r\n            .right-scroll {\r\n                left: unset;\r\n                right: 0;\r\n                width: fit-content;\r\n            }\r\n\r\n            .container::-webkit-scrollbar {\r\n                display: none;\r\n            }\r\n        }\r\n\r\n        .carousel-content {\r\n            .top-text {\r\n                font-size: 1.2rem;\r\n            }\r\n\r\n            @media screen and(max-width: 1000px) {\r\n                order: 1;\r\n            }\r\n\r\n            .category-features {\r\n                display: flex;\r\n                gap: 1rem;\r\n                justify-content: space-around;\r\n                margin: 1rem;\r\n\r\n                >div {\r\n                    display: flex;\r\n                    flex-direction: column;\r\n                    gap: .5rem;\r\n                    border-left: 1px solid white;\r\n                    padding-left: 1rem;\r\n                    margin: 1rem;\r\n\r\n                    .title {\r\n                        opacity: .7;\r\n                        font-size: .9rem;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .detailed-description {\r\n                opacity: .8;\r\n                font-size: .9rem;\r\n            }\r\n        }\r\n    }\r\n\r\n    .carousel-container::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n\r\n\r\n    .sticky-div {\r\n        .content-container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: .5rem;\r\n            position: sticky;\r\n            top: 0px;\r\n\r\n            .loggo-watermark {\r\n                width: 100%;\r\n                aspect-ratio: 3/2;\r\n                background-color: rgb(48, 48, 48);\r\n                border-radius: 1rem;\r\n                display: grid;\r\n                place-content: center;\r\n            }\r\n\r\n            small {\r\n                background-color: rgb(48, 48, 48);\r\n                border-radius: .2rem;\r\n                padding-inline: .2rem;\r\n                opacity: .8;\r\n                width: fit-content;\r\n            }\r\n\r\n            .price {\r\n                display: flex;\r\n                gap: clamp(0.1rem, 1vw, 1rem);\r\n                align-items: center;\r\n\r\n                .original-price {\r\n                    text-decoration: line-through;\r\n                    opacity: .6;\r\n                }\r\n\r\n                .btn {\r\n                    padding: .4rem;\r\n                }\r\n            }\r\n\r\n            .btn {\r\n                background-color: transparent;\r\n                padding: .5rem 1rem;\r\n                border: 2px solid white;\r\n                border-radius: .5rem;\r\n                color: white;\r\n                font-family: poppins;\r\n                cursor: pointer;\r\n            }\r\n\r\n            .buy {\r\n                background-color: white;\r\n                color: black;\r\n            }\r\n\r\n            .add {\r\n                margin-bottom: .7rem;\r\n            }\r\n\r\n            .detail {\r\n                display: flex;\r\n                justify-content: space-between;\r\n            }\r\n\r\n            hr {\r\n                opacity: .7;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.main-footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    margin-top: 2rem;\r\n\r\n    .title {\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .follow-us {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n\r\n        .social {\r\n            background-color: rgb(53, 53, 53);\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 1rem;\r\n            padding: 2rem;\r\n\r\n            img {\r\n                height: 50px;\r\n            }\r\n        }\r\n    }\r\n\r\n    .rating {\r\n        .points {\r\n            height: 150px;\r\n            aspect-ratio: 1;\r\n            background-color: gray;\r\n            border-radius: 100vh;\r\n            display: grid;\r\n            place-content: center;\r\n            margin: 2rem auto;\r\n\r\n            span {\r\n                font-size: 3rem;\r\n            }\r\n        }\r\n\r\n        .feature-cards {\r\n            padding: 1rem;\r\n            display: grid;\r\n            grid-template-columns: 1fr 1fr 1fr;\r\n            gap: 1rem;\r\n\r\n            @media screen and(max-width: 1000px) {\r\n                grid-template-columns: 1fr 1fr;\r\n            }\r\n\r\n            @media screen and(max-width: 720px) {\r\n                grid-template-columns: 1fr;\r\n            }\r\n\r\n            .card {\r\n                width: 100%;\r\n                aspect-ratio: 5/3;\r\n                background-color: rgb(54, 54, 54);\r\n                border-radius: 1rem;\r\n                padding: 1rem;\r\n                display: flex;\r\n                align-items: center;\r\n                flex-direction: column;\r\n                justify-content: center;\r\n\r\n                @media screen and(max-width: 720px) {\r\n                    flex-direction: row;\r\n                    aspect-ratio: unset;\r\n                }\r\n\r\n                .image-bg-div {\r\n                    height: 50%;\r\n                    aspect-ratio: 1;\r\n                    background-image: url('../imgs/icons/youtube-gaming-custom.png');\r\n                    background-size: cover;\r\n\r\n                    @media screen and(max-width: 720px) {\r\n                        height: 50px;\r\n                    }\r\n                }\r\n\r\n                .content {\r\n                    margin: auto;\r\n                    text-align: center;\r\n\r\n                    @media screen and(max-width: 720px) {\r\n                        margin-left: 2rem;\r\n                        text-align: start;\r\n                    }\r\n\r\n                    >p {\r\n                        font-weight: 600;\r\n                        font-size: 1.4rem;\r\n                    }\r\n\r\n                    .title {\r\n                        opacity: .7;\r\n                        font-size: .9rem;\r\n                        font-weight: 400;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .requirements {\r\n        .title {\r\n            margin-bottom: 2rem;\r\n        }\r\n\r\n        .content {\r\n            background-color: rgb(46, 46, 46);\r\n            display: grid;\r\n            grid-template-columns: 1fr 1fr;\r\n            padding: 3rem;\r\n            max-width: 1200px;\r\n            margin: auto;\r\n            border-radius: .5rem;\r\n\r\n            @media screen and(max-width: 600px) {\r\n                padding: 1rem;\r\n            }\r\n\r\n            ul {\r\n                display: flex;\r\n                flex-direction: column;\r\n                gap: 1.5rem;\r\n\r\n                li {\r\n                    .title {\r\n                        opacity: .7;\r\n                        font-size: .9rem;\r\n                    }\r\n                }\r\n\r\n                .content-title {\r\n                    font-weight: 600;\r\n                    font-size: 1.2rem;\r\n                    opacity: .5;\r\n                    margin-bottom: .5rem;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n@media screen and(max-width: 600px) {\r\n    html {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n\r\n// images\r\n\r\n[class*='image'] {\r\n    background-image: url('../imgs/commonGames/epic-games.webp');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.image-1 {\r\n    background-image: url('../imgs/commonGames/browse.jpg');\r\n}\r\n\r\n.loggo-watermark {\r\n    background-image: url('../imgs/commonGames/epic-games.webp');\r\n    background-size: cover;\r\n    background-position: center;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/scss/gameView.scss":
/*!********************************!*\
  !*** ./src/scss/gameView.scss ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameView_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./gameView.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/gameView.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameView_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameView_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameView_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gameView_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/imgs/commonGames/browse.jpg":
/*!*****************************************!*\
  !*** ./src/imgs/commonGames/browse.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7472a1f4ed0fc88e6e55.jpg";

/***/ }),

/***/ "./src/imgs/commonGames/epic-games.webp":
/*!**********************************************!*\
  !*** ./src/imgs/commonGames/epic-games.webp ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acae1657b79ee0e1f959.webp";

/***/ }),

/***/ "./src/imgs/icons/youtube-gaming-custom.png":
/*!**************************************************!*\
  !*** ./src/imgs/icons/youtube-gaming-custom.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e356c1ab169db610b755.png";

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
/******/ 			"gameView": 0
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
/*!****************************!*\
  !*** ./src/js/gameView.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reset.scss */ "./src/scss/reset.scss");
/* harmony import */ var _scss_gameView_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/gameView.scss */ "./src/scss/gameView.scss");



const carouselImages = document.querySelectorAll('.image-bg-div');
const carouselChanger = document.querySelectorAll('.changer');

function carousel(img) {
  carouselImages.forEach((e, index) => {
    e.style.display = `none`;
  });
  if (!img) {
    carouselImages[0].style.display = 'block';
  } else carouselImages[img].style.display = 'block';
}

function changer() {
  carouselChanger.forEach((e, i) => {
    e.addEventListener('click', () => {
      carousel(i);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  carousel();
  changer();
});

})();

/******/ })()
;
//# sourceMappingURL=gameView.983d5a70280a19e31655.bundle.js.map