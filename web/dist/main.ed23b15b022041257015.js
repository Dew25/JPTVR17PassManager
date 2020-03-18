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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n\r\n/* global bookModule, readerModule, authModule */\r\n\r\ndocument.getElementById(\"userProfile\").onclick = function(){\r\n  toogleMenuActive(\"userProfile\"); //находится в текущем скрипте\r\n  bookModule.listBooks(); // импортирована из скрипта (модуля) book.js\r\n};\r\ndocument.getElementById(\"userPasswords\").onclick = function(){\r\n  toogleMenuActive(\"userPasswords\"); //находится в текущем скрипте\r\n  bookModule.printNewBookForm(); // импортирована из скрипта (модуля) book.js\r\n};\r\n\r\ndocument.getElementById(\"showLogin\").onclick = function(){\r\n  toogleMenuActive(\"showLogin\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].printLoginForm();\r\n};\r\ndocument.getElementById(\"sysout\").onclick = function(){\r\n  toogleMenuActive(\"sysout\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].systemOutput();\r\n};\r\n\r\nfunction toogleMenuActive(elementId){\r\n  let activeElement = document.getElementById(elementId);\r\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\r\n  for(let i = 0; i < passiveElements.length; i++){\r\n    if(activeElement === passiveElements[i]){\r\n      passiveElements[i].classList.add(\"active\");\r\n    }else{\r\n      if(passiveElements[i].classList.contains(\"active\")){\r\n        passiveElements[i].classList.remove(\"active\");\r\n      }\r\n    }\r\n  }\r\n}\r\n_AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].authMenu();\r\n\n\n//# sourceURL=webpack:///./web/js/AppModule.js?");

/***/ }),

/***/ "./web/js/AuthModule.js":
/*!******************************!*\
  !*** ./web/js/AuthModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authModule\", function() { return authModule; });\n/* harmony import */ var _UserModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserModule.js */ \"./web/js/UserModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n/* harmony import */ var _AppModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppModule.js */ \"./web/js/AppModule.js\");\n\n\n\nclass AuthModule{\n    printLoginForm(){\n        document.getElementById('content').innerHTML =\n            `<div class=\"w-100 d-flex justify-content-center\">\n               <div class=\"card border-primary p-2\" style=\"max-width: 30rem;\">\n                  <div class=\"card-header text-center\">Введите логин и пароль</div>\n                  <div class=\"card-body\">\n                    <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\n                    <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password\"></p>\n                    <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnEnter\">Войти</button</p>\n                  </div>\n                    <p class=\"text-center\">Нет учетной записи? <a id=\"registration\" href=\"#\">Зарегистрироваться</a></p>\n               </div>\n             </div>`;\n        document.getElementById('btnEnter').onclick=function (){\n            authModule.auth();\n        }\n        document.getElementById('registration').onclick=function (){\n            _UserModule_js__WEBPACK_IMPORTED_MODULE_0__[\"userModule\"].addNewUser();\n        }\n    }\n    auth(){\n       let login = document.getElementById('login').value;\n       let password = document.getElementById('password').value;\n       let credential = {\n           \"login\": login,\n           \"password\": password\n       }\n       _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'login',options:{method:'POST',data:credential}})\n               .then(function(response){\n                  if(response.authStatus === 'true'){\n                      localStorage.setItem('user',JSON.stringify(response.user));\n                      document.getElementById('info').innerHTML='Вы вошли как '+ response.user.login;\n                  }else{\n                      document.getElementById('info').innerHTML='Войти не удалось';\n                      authModule.printLoginForm();\n                  }\n                  authModule.authMenu();\n                  document.getElementById('content').innerHTML=''\n               });\n    };\n    systemOutput(){\n        _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'logout',options:{method:'GET'}})\n                .then(function(response){\n                   if(response !== null && response.actionStatus=== 'true'){\n                       localStorage.removeItem('user');\n                       authModule.authMenu();\n                       document.getElementById('content').innerHTML='';\n                       document.getElementById('info').innerHTML='Вы вышли';\n                   }else{\n                       if(locaStorage.getItems('user') !== null){\n                           localStorage.removeItem('user');\n                       }\n                   }\n                })\n    };\n    authMenu(){\n      let user = null;\n      if(localStorage.getItem('user') !== null){\n        user = JSON.parse(localStorage.getItem('user'));\n      }\n      if(user !== null){\n        document.getElementById(\"userProfile\").style.display = 'block';\n        document.getElementById(\"userPasswords\").style.display = 'block';\n        document.getElementById(\"sysout\").style.display = 'block';\n        document.getElementById(\"showLogin\").style.display = 'none';\n      }else{\n        document.getElementById(\"userProfile\").style.display = 'none';\n        document.getElementById(\"userPasswords\").style.display = 'none';\n        document.getElementById(\"sysout\").style.display = 'none';\n        document.getElementById(\"showLogin\").style.display = 'block';\n      }\n    }\n}\nlet authModule = new AuthModule();\n\n\n\n\n//# sourceURL=webpack:///./web/js/AuthModule.js?");

/***/ }),

/***/ "./web/js/HttpModule.js":
/*!******************************!*\
  !*** ./web/js/HttpModule.js ***!
  \******************************/
/*! exports provided: httpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpModule\", function() { return httpModule; });\n/*  fetch немножко параноик и по умолчанию не \n*   передаёт куки от сайта, на который \n*   отправляется запрос (а идентификатор \n*   сессии хранится в куке PHPSESSID). \n*   За передачу кук и заголовков авторизации \n*   отвечает опция credentials, которая может \n*   иметь одно из следующих значений:\n*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;\n*     'same-origin' — передавать, только если домен, на который \n*       отправляется запрос, совпадает с доменом текущего сайта \n*       (точнее, origin; сложный случай, но текущего вопроса не касается, \n*       так что не буду его подробно описывать);\n*     'include' — передавать.\n*/\n//делаем доступными функции класса в других модулях\n\nclass HttpModule{\n  \n  status(response) {  \n    if (response.status >= 200 && response.status < 300) {  \n      return Promise.resolve(response)  \n    } else {  \n      return Promise.reject(new Error(response.statusText))  \n    }  \n  }\n  json(response) {  \n    return response.json()  \n  }\n //формирует options для fetch\n  fetchOpts(opt){\n    if(opt.method === 'POST'){\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include',\n              body: JSON.stringify(opt.data)\n            };\n    }else{\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include'\n            };\n    }\n  };\n\n  http(httpOptions){\n    if (httpOptions.params != null){\n      httpOptions.url= httpOptions.url+'?'+httpModule.queryParams(httpOptions.params);\n    }\n    let options = httpModule.fetchOpts(httpOptions.options);\n    return fetch(httpOptions.url, options)\n              .then(httpModule.status)\n              .then(httpModule.json)\n              .catch((ex) => console.log(\"Fetch Exception\", ex));\n  };\n// преобразовывает пары ключ:значение в key=value как это отображается в параметрах \n  queryParams(params) {\n      return Object.keys(params)\n          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))\n          .join('&');\n  }\n\n}\n\nlet httpModule = new HttpModule();\n\n\n\n\n\n\n//# sourceURL=webpack:///./web/js/HttpModule.js?");

/***/ }),

/***/ "./web/js/UserModule.js":
/*!******************************!*\
  !*** ./web/js/UserModule.js ***!
  \******************************/
/*! exports provided: userModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userModule\", function() { return userModule; });\n/* harmony import */ var _AppModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppModule.js */ \"./web/js/AppModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n\n\n\nclass UserModule{\n    addNewUser(){\n       document.getElementById('content').innerHTML=\n        `<div class=\"w-100 d-flex justify-content-center\">\n            <div class=\"card w-50\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title w-100 text-center\">Зарегистрировать пользователя</h5>\n                  <p class=\"card-text d-flex justify-content-end\">Имя пользователя: <input class=\"w-50 ml-3\" type=\"text\" id=\"firstname\"></p>\n                  <p class=\"card-text d-flex justify-content-end\">Фамилия пользователя: <input class=\"w-50 ml-3\" type=\"text\" id=\"lastname\"></p>\n                  <p class=\"card-text d-flex justify-content-end\">email пользователя: <input class=\"w-50 ml-3\" type=\"email\" id=\"email\"></p>\n                  <p class=\"card-text d-flex justify-content-end\">Логин: <input class=\"w-50 ml-3\" type=\"text\" id=\"login\"></p>\n                  <p class=\"card-text d-flex justify-content-end\">Пароль: <input class=\"w-50 ml-3\" type=\"text\" id=\"password\"></p>\n                  <a href=\"#\" id=\"btnAddUser\" class=\"btn btn-primary w-100\">Зарегистрировать пользователя</a>\n                </div>\n            </div>\n          </div>`;\n            document.getElementById('btnAddUser').onclick=function(){\n                userModule.createUser();\n            }\n      }\n      createUser(){\n          let firstname = document.getElementById('firstname').value;\n          let lastname = document.getElementById('lastname').value;\n          let email = document.getElementById('email').value;\n          let login = document.getElementById('login').value;\n          let password = document.getElementById('password').value;\n          let user = {\n              \"firstname\": firstname,\n              \"lastname\": lastname,\n              \"email\": email,\n              \"login\": login,\n              \"password\": password,\n          }\n          _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'createUser',options:{method:'POST',data:user}})\n                  .then(function(response){\n                     if(response.actionStatus === 'true'){\n                         document.getElementById('info').innerHTML='Пользователь добавлен';\n                         document.getElementById('content').innerHTML='';\n                     }else{\n                         document.getElementById('info').innerHTML='Пользователя добавить не удалось';\n                     }\n                  })\n      }\n}\nlet userModule = new UserModule();\n\n\n\n\n//# sourceURL=webpack:///./web/js/UserModule.js?");

/***/ })

/******/ });