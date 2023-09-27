/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { BackgroundFunc } = __webpack_require__(/*! ./module/bg-elements */ \"./module/bg-elements.js\");\nconst { default: ModalFunc } = __webpack_require__(/*! ./module/modal */ \"./module/modal.js\");\nconst { PreloaderFunc } = __webpack_require__(/*! ./module/preloder */ \"./module/preloder.js\");\n\nPreloaderFunc()\n\nBackgroundFunc()\n\nModalFunc()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./module/bg-elements.js":
/*!*******************************!*\
  !*** ./module/bg-elements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackgroundFunc: () => (/* binding */ BackgroundFunc)\n/* harmony export */ });\nconst BackgroundFunc = () => {\n    const elements = document.querySelectorAll(\".set-bg\")\n\n    elements.forEach(element => element.style.backgroundImage = `url(${element.dataset.setbg})`)\n}\n\n//# sourceURL=webpack:///./module/bg-elements.js?");

/***/ }),

/***/ "./module/modal.js":
/*!*************************!*\
  !*** ./module/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ModalFunc = () => {\n    const modal = document.querySelector(\".search-model\")\n\n    const modalBtn = document.querySelector(\".icon_search\")\n\n    const modalClose = modal.querySelector(\".search-close-switch\")\n\n    const modalInput = modal.querySelector(\"#search-input\")\n\n    modalBtn.addEventListener(\"click\", () => {\n        modal.classList.toggle(\"d-block\")\n    })\n\n    modalClose.addEventListener(\"click\", () => {\n        modal.classList.remove(\"d-block\")\n    })\n\n    modalInput.addEventListener(\"keyup\", e => {\n        console.log(e.target.value);\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFunc);\n\n//# sourceURL=webpack:///./module/modal.js?");

/***/ }),

/***/ "./module/preloder.js":
/*!****************************!*\
  !*** ./module/preloder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PreloaderFunc: () => (/* binding */ PreloaderFunc)\n/* harmony export */ });\nconsole.clear()\n\nconst PreloaderFunc = () => {\n    const preloder = document.querySelector(\".preloder\")\n\n    const swiper = 1\n\n    setTimeout(() => {\n        preloder.classList.remove(\"active\")\n    }, 5000)\n}\n\n//# sourceURL=webpack:///./module/preloder.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;