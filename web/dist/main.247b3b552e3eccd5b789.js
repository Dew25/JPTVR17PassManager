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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _authModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authModule.js */ \"./web/js/authModule.js\");\n\r\n/* global bookModule, readerModule, authModule */\r\n\r\ndocument.getElementById(\"userProfile\").onclick = function(){\r\n  toogleMenuActive(\"userProfile\"); //находится в текущем скрипте\r\n  bookModule.listBooks(); // импортирована из скрипта (модуля) book.js\r\n};\r\ndocument.getElementById(\"userPasswords\").onclick = function(){\r\n  toogleMenuActive(\"userPasswords\"); //находится в текущем скрипте\r\n  bookModule.printNewBookForm(); // импортирована из скрипта (модуля) book.js\r\n};\r\n\r\ndocument.getElementById(\"showLogin\").onclick = function(){\r\n  toogleMenuActive(\"showLogin\");\r\n  _authModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].printLoginForm();\r\n};\r\ndocument.getElementById(\"sysout\").onclick = function(){\r\n  toogleMenuActive(\"sysout\");\r\n  _authModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].systemOutput();\r\n};\r\n\r\nfunction toogleMenuActive(elementId){\r\n  let activeElement = document.getElementById(elementId);\r\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\r\n  for(let i = 0; i < passiveElements.length; i++){\r\n    if(activeElement === passiveElements[i]){\r\n      passiveElements[i].classList.add(\"active\");\r\n    }else{\r\n      if(passiveElements[i].classList.contains(\"active\")){\r\n        passiveElements[i].classList.remove(\"active\");\r\n      }\r\n    }\r\n  }\r\n}\r\nauthMenu();\r\n\r\nfunction authMenu(){\r\n  let user = null;\r\n  if(localStorage.getItem('user') !== null){\r\n    user = JSON.parse(localStorage.getItem('user'));\r\n  }\r\n  if(user !== null){\r\n    document.getElementById(\"userProfile\").style.display = 'block';\r\n    document.getElementById(\"userPasswords\").style.display = 'block';\r\n    document.getElementById(\"sysout\").style.display = 'block';\r\n    document.getElementById(\"showLogin\").style.display = 'none';\r\n  }else{\r\n    document.getElementById(\"userProfile\").style.display = 'none';\r\n    document.getElementById(\"userPasswords\").style.display = 'none';\r\n    document.getElementById(\"sysout\").style.display = 'none';\r\n    document.getElementById(\"showLogin\").style.display = 'block';\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./web/js/AppModule.js?");

/***/ }),

/***/ "./web/js/UserModule.js":
/*!******************************!*\
  !*** ./web/js/UserModule.js ***!
  \******************************/
/*! exports provided: userModule */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Identifier 'firstname' has already been declared (26:14)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|           let lastname = document.getElementById('lastname').value;\\n|           let email = document.getElementById('email').value;\\n>           let firstname = document.getElementById('firstname').value;\\n|           let firstname = document.getElementById('firstname').value;\\n|           httpModule.http({url:'createUser',options:{method:'POST',data:user}})\");\n\n//# sourceURL=webpack:///./web/js/UserModule.js?");

/***/ }),

/***/ "./web/js/authModule.js":
/*!******************************!*\
  !*** ./web/js/authModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authModule\", function() { return authModule; });\n/* harmony import */ var _UserModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserModule.js */ \"./web/js/UserModule.js\");\n\nclass AuthModule{\n    printLoginForm(){\n        document.getElementById('content').innerHTML =\n            `<div class=\"w-100 d-flex justify-content-center\">\n               <div class=\"card border-primary p-2\" style=\"max-width: 30rem;\">\n                  <div class=\"card-header text-center\">Введите логин и пароль</div>\n                  <div class=\"card-body\">\n                    <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\n                    <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password\"></p>\n                    <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnEnter\">Войти</button</p>\n                  </div>\n                    <p class=\"text-center\">Нет учетной записи? <a id=\"registration\" href=\"#\">Зарегистрироваться</a></p>\n               </div>\n             </div>`;\n        document.getElementById('btnEnter').onclick=function (){\n            authModule.auth();\n        }\n        document.getElementById('registration').onclick=function (){\n            _UserModule_js__WEBPACK_IMPORTED_MODULE_0__[\"userModule\"].addNewUser();\n        }\n    }\n    auth(){\n      console.log('метод auth() работает'); \n    }\n}\nlet authModule = new AuthModule();\n\n\n\n\n//# sourceURL=webpack:///./web/js/authModule.js?");

/***/ })

/******/ });