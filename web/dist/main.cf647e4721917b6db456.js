/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/js/AppModule.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/js/AppModule.js":
/*!*****************************!*\
  !*** ./web/js/AppModule.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n\r\n/* global bookModule, readerModule, authModule */\r\n\r\ndocument.getElementById(\"userProfile\").onclick = function(){\r\n  toogleMenuActive(\"userProfile\"); //находится в текущем скрипте\r\n  bookModule.listBooks(); // импортирована из скрипта (модуля) book.js\r\n};\r\ndocument.getElementById(\"userPasswords\").onclick = function(){\r\n  toogleMenuActive(\"userPasswords\"); //находится в текущем скрипте\r\n  bookModule.printNewBookForm(); // импортирована из скрипта (модуля) book.js\r\n};\r\n\r\ndocument.getElementById(\"showLogin\").onclick = function(){\r\n  toogleMenuActive(\"showLogin\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].printLoginForm();\r\n};\r\ndocument.getElementById(\"sysout\").onclick = function(){\r\n  toogleMenuActive(\"sysout\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].systemOutput();\r\n};\r\n \r\n\r\nfunction toogleMenuActive(elementId){\r\n  let activeElement = document.getElementById(elementId);\r\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\r\n  for(let i = 0; i < passiveElements.length; i++){\r\n    if(activeElement === passiveElements[i]){\r\n      passiveElements[i].classList.add(\"active\");\r\n    }else{\r\n      if(passiveElements[i].classList.contains(\"active\")){\r\n        passiveElements[i].classList.remove(\"active\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n_AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].authMenu();\r\n\n\n//# sourceURL=webpack:///./web/js/AppModule.js?");

/***/ }),

/***/ "./web/js/AuthModule.js":
/*!******************************!*\
  !*** ./web/js/AuthModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (29:50)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|               event.preventDefault();\\n|               // запускаем нужное действие\\n>                document.getElementById('btnEnter')click();\\n|             }\\n|         });\");\n\n//# sourceURL=webpack:///./web/js/AuthModule.js?");

/***/ })

/******/ });