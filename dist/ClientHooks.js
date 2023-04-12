/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var cds;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Forms/AccountForm.ts":
/*!**********************************!*\
  !*** ./src/Forms/AccountForm.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountForm\": () => (/* binding */ AccountForm),\n/* harmony export */   \"onsave\": () => (/* binding */ onsave)\n/* harmony export */ });\n//import moment from \"moment\";\r\nclass AccountForm {\r\n    static async onload(context) {\r\n        const now = \"\"; //moment().format();\r\n        context\r\n            .getFormContext()\r\n            .getAttribute(\"name\")\r\n            .addOnChange(() => {\r\n            console.log(`name onchange ${now}`);\r\n        });\r\n    }\r\n}\r\nasync function onsave() {\r\n    console.debug(\"onsave\");\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRm9ybXMvQWNjb3VudEZvcm0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nkcy5DbGllbnRIb29rcy8uL3NyYy9Gb3Jtcy9BY2NvdW50Rm9ybS50cz8wOWQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Rm9ybSB7XHJcbiAgICBzdGF0aWMgYXN5bmMgb25sb2FkKGNvbnRleHQpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBcIlwiOyAvL21vbWVudCgpLmZvcm1hdCgpO1xyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAgICAgLmdldEZvcm1Db250ZXh0KClcclxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcIm5hbWVcIilcclxuICAgICAgICAgICAgLmFkZE9uQ2hhbmdlKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYG5hbWUgb25jaGFuZ2UgJHtub3d9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9uc2F2ZSgpIHtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJvbnNhdmVcIik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Forms/AccountForm.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccountForm\": () => (/* reexport safe */ _Forms_AccountForm__WEBPACK_IMPORTED_MODULE_0__.AccountForm),\n/* harmony export */   \"onsave\": () => (/* reexport safe */ _Forms_AccountForm__WEBPACK_IMPORTED_MODULE_0__.onsave)\n/* harmony export */ });\n/* harmony import */ var _Forms_AccountForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Forms/AccountForm */ \"./src/Forms/AccountForm.ts\");\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2RzLkNsaWVudEhvb2tzLy4vc3JjL2luZGV4LnRzP2M5MDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vRm9ybXMvQWNjb3VudEZvcm1cIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	(cds = typeof cds === "undefined" ? {} : cds).ClientHooks = __webpack_exports__;
/******/ 	
/******/ })()
;