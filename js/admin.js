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

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/login */ \"./module/login.js\");\n/* harmony import */ var _module_preloder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/preloder */ \"./module/preloder.js\");\n\n\n\n(0,_module_login__WEBPACK_IMPORTED_MODULE_0__.LoginInit)()\n;(0,_module_login__WEBPACK_IMPORTED_MODULE_0__.LoginOut)()\n;(0,_module_preloder__WEBPACK_IMPORTED_MODULE_1__.PreloaderFunc)()\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./module/login.js":
/*!*************************!*\
  !*** ./module/login.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CheckUserLogin: () => (/* binding */ CheckUserLogin),\n/* harmony export */   LoginInit: () => (/* binding */ LoginInit),\n/* harmony export */   LoginOut: () => (/* binding */ LoginOut)\n/* harmony export */ });\nconst LoginInit = () => {\n    const LoginElement = document.querySelector(\"#login-js\");\n\n    const User = JSON.parse(localStorage.getItem(\"user\"))\n\n    if (User && User.login && User.password) {\n        LoginElement.outerHTML = LoginElement.outerHTML.replace(/a/, \"button\")\n    }\n}\n\nconst LoginOut = () => {\n    const LoginElement = document.querySelector(\"button#login-js\");\n\n    LoginElement?.addEventListener(\"click\", () => {\n        localStorage.removeItem(\"user\")\n        localStorage.removeItem(\"admin\")\n        window.location.replace(\"/\")\n    })\n}\n\nconst CheckUserLogin = () => {\n    const User = JSON.parse(localStorage.getItem(\"user\"))\n    const Admin = JSON.parse(localStorage.getItem(\"admin\"))\n\n    if ((User && User.login && User.password) || (Admin && Admin.admin)) {\n        window.location.replace(\"/\")\n    }\n}\n\n\n\n//# sourceURL=webpack:///./module/login.js?");

/***/ }),

/***/ "./module/preloder.js":
/*!****************************!*\
  !*** ./module/preloder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PreloaderFunc: () => (/* binding */ PreloaderFunc)\n/* harmony export */ });\nconst PreloaderFunc = () => {\n    const preloder = document.querySelector(\".preloder\")\n\n    const swiper = 1\n\n    setTimeout(() => {\n        preloder.classList.remove(\"active\")\n    }, 1000)\n}\n\n\n\n//# sourceURL=webpack:///./module/preloder.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;