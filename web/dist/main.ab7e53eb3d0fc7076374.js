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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n/* harmony import */ var _UserModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserModule.js */ \"./web/js/UserModule.js\");\n/* harmony import */ var _ResourcesModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourcesModule.js */ \"./web/js/ResourcesModule.js\");\n\r\n\r\n\r\n/* global bookModule, readerModule, authModule */\r\n\r\ndocument.getElementById(\"userProfile\").onclick = function(){\r\n  toogleMenuActive(\"userProfile\"); \r\n  _UserModule_js__WEBPACK_IMPORTED_MODULE_1__[\"userModule\"].printUserProfileForm(); \r\n};\r\ndocument.getElementById(\"resources\").onclick = function(){\r\n  toogleMenuActive(\"resources\"); \r\n  _ResourcesModule_js__WEBPACK_IMPORTED_MODULE_2__[\"resourcesModule\"].getListResources();\r\n};\r\ndocument.getElementById(\"addResource\").onclick = function(){\r\n  toogleMenuActive(\"addResource\"); \r\n  _ResourcesModule_js__WEBPACK_IMPORTED_MODULE_2__[\"resourcesModule\"].printAddResourcesForm();\r\n};\r\n\r\ndocument.getElementById(\"showLogin\").onclick = function(){\r\n  toogleMenuActive(\"showLogin\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].printLoginForm();\r\n};\r\ndocument.getElementById(\"sysout\").onclick = function(){\r\n  toogleMenuActive(\"sysout\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].systemOutput();\r\n};\r\n \r\n\r\nfunction toogleMenuActive(elementId){\r\n  let activeElement = document.getElementById(elementId);\r\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\r\n  for(let i = 0; i < passiveElements.length; i++){\r\n    if(activeElement === passiveElements[i]){\r\n      passiveElements[i].classList.add(\"active\");\r\n    }else{\r\n      if(passiveElements[i].classList.contains(\"active\")){\r\n        passiveElements[i].classList.remove(\"active\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n_AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].authMenu();\r\n\n\n//# sourceURL=webpack:///./web/js/AppModule.js?");

/***/ }),

/***/ "./web/js/AuthModule.js":
/*!******************************!*\
  !*** ./web/js/AuthModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authModule\", function() { return authModule; });\n/* harmony import */ var _UserModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserModule.js */ \"./web/js/UserModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n/* harmony import */ var _AppModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppModule.js */ \"./web/js/AppModule.js\");\n\r\n\r\n\r\nclass AuthModule{\r\n    printLoginForm(){\r\n        document.getElementById('content').innerHTML =\r\n            `<div class=\"w-100 d-flex justify-content-center\">\r\n               <div class=\"card border-primary p-2\" style=\"max-width: 30rem;\">\r\n                  <div class=\"card-header text-center\">Введите логин и пароль</div>\r\n                  <div class=\"card-body\">\r\n                    <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\r\n                    <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password\"></p>\r\n                    <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnEnter\">Войти</button</p>\r\n                  </div>\r\n                    <p class=\"text-center\">Нет учетной записи? <a id=\"registration\" href=\"#\">Зарегистрироваться</a></p>\r\n               </div>\r\n             </div>`;\r\n        document.getElementById('btnEnter').onclick=function (){\r\n            authModule.auth();\r\n        }\r\n        document.getElementById('registration').onclick=function (){\r\n            _UserModule_js__WEBPACK_IMPORTED_MODULE_0__[\"userModule\"].addNewUser();\r\n        }\r\n        document.getElementById('password').addEventListener(\"keyup\", function(event) {\r\n          if (event.keyCode === 13) {\r\n              // выключаем предыдущие назначения, если они есть\r\n              event.preventDefault();\r\n              // запускаем нужное действие\r\n               document.getElementById('btnEnter').click();\r\n            }\r\n        });\r\n    }\r\n    auth(){\r\n       let login = document.getElementById('login').value;\r\n       let password = document.getElementById('password').value;\r\n       let credential = {\r\n           \"login\": login,\r\n           \"password\": password\r\n       }\r\n       _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'login',options:{method:'POST',data:credential}})\r\n               .then(function(response){\r\n                  if(response.authStatus === 'true'){\r\n                      sessionStorage.setItem('user',JSON.stringify(response.user));\r\n                      document.getElementById('info').innerHTML='Вы вошли как '+ response.user.login;\r\n                  }else{\r\n                      document.getElementById('info').innerHTML='Войти не удалось';\r\n                      authModule.printLoginForm();\r\n                  }\r\n                  authModule.authMenu();\r\n                  document.getElementById('content').innerHTML=''\r\n               });\r\n    };\r\n    systemOutput(){\r\n        _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'logout',options:{method:'GET'}})\r\n                .then(function(response){\r\n                   if(response !== null && response.actionStatus=== 'true'){\r\n                       sessionStorage.removeItem('user');\r\n                       authModule.authMenu();\r\n                       document.getElementById('content').innerHTML='';\r\n                       document.getElementById('info').innerHTML='Вы вышли';\r\n                   }else{\r\n                       if(locaStorage.getItems('user') !== null){\r\n                           sessionStorage.removeItem('user');\r\n                       }\r\n                   }\r\n                })\r\n    };\r\n    authMenu(){\r\n      let user = null;\r\n      if(sessionStorage.getItem('user') !== null){\r\n        user = JSON.parse(sessionStorage.getItem('user'));\r\n      }\r\n      if(user !== null){\r\n        document.getElementById(\"userProfile\").style.display = 'block';\r\n        document.getElementById(\"addResource\").style.display = 'block';\r\n        document.getElementById(\"resources\").style.display = 'block';\r\n        document.getElementById(\"sysout\").style.display = 'block';\r\n        document.getElementById(\"showLogin\").style.display = 'none';\r\n      }else{\r\n        document.getElementById(\"userProfile\").style.display = 'none';\r\n        document.getElementById(\"addResource\").style.display = 'none';\r\n        document.getElementById(\"resources\").style.display = 'none';\r\n        document.getElementById(\"sysout\").style.display = 'none';\r\n        document.getElementById(\"showLogin\").style.display = 'block';\r\n      }\r\n    }\r\n}\r\nlet authModule = new AuthModule();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/AuthModule.js?");

/***/ }),

/***/ "./web/js/HttpModule.js":
/*!******************************!*\
  !*** ./web/js/HttpModule.js ***!
  \******************************/
/*! exports provided: httpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpModule\", function() { return httpModule; });\n/*  fetch немножко параноик и по умолчанию не \n*   передаёт куки от сайта, на который \n*   отправляется запрос (а идентификатор \n*   сессии хранится в куке PHPSESSID). \n*   За передачу кук и заголовков авторизации \n*   отвечает опция credentials, которая может \n*   иметь одно из следующих значений:\n*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;\n*     'same-origin' — передавать, только если домен, на который \n*       отправляется запрос, совпадает с доменом текущего сайта \n*       (точнее, origin; сложный случай, но текущего вопроса не касается, \n*       так что не буду его подробно описывать);\n*     'include' — передавать.\n*/\n//делаем доступными функции класса в других модулях\n\nclass HttpModule{\n  \n  status(response) {  \n    if (response.status >= 200 && response.status < 300) {  \n      return Promise.resolve(response)  \n    } else {  \n      return Promise.reject(new Error(response.statusText))  \n    }  \n  }\n  json(response) {  \n    return response.json()  \n  }\n //формирует options для fetch\n  fetchOpts(opt){\n    if(opt.method === 'POST'){\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include',\n              body: JSON.stringify(opt.data)\n            };\n    }else{\n      return {\n              method: opt.method,\n              headers: {\n                'Content-Type': 'application/json;charset=utf-8'\n              },\n              credentials: 'include'\n            };\n    }\n  };\n//POST запрос формат: httpModule.http({url:'createUser',options:{method:'POST',data:user}})\n//GET запрос формае: httpModule.http({url:'listUsers',options:{method:'GET'}})\n  http(httpOptions){\n    if (httpOptions.params != null){\n      httpOptions.url= httpOptions.url+'?'+httpModule.queryParams(httpOptions.params);\n    }\n    let options = httpModule.fetchOpts(httpOptions.options);\n    return fetch(httpOptions.url, options)\n              .then(httpModule.status)\n              .then(httpModule.json)\n              .catch((ex) => console.log(\"Fetch Exception\", ex));\n  };\n// преобразовывает пары ключ:значение в key=value как это отображается в параметрах \n  queryParams(params) {\n      return Object.keys(params)\n          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))\n          .join('&');\n  }\n\n}\n\nlet httpModule = new HttpModule();\n\n\n\n\n\n\n//# sourceURL=webpack:///./web/js/HttpModule.js?");

/***/ }),

/***/ "./web/js/ResourcesModule.js":
/*!***********************************!*\
  !*** ./web/js/ResourcesModule.js ***!
  \***********************************/
/*! exports provided: resourcesModule */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Identifier 'select' has already been declared (125:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|         </div>`;\\n|     \\n>     let select = document.getElementById('accountId');\\n|     select.append(options);\\n|   }\");\n\n//# sourceURL=webpack:///./web/js/ResourcesModule.js?");

/***/ }),

/***/ "./web/js/UserModule.js":
/*!******************************!*\
  !*** ./web/js/UserModule.js ***!
  \******************************/
/*! exports provided: userModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userModule\", function() { return userModule; });\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n\r\n\r\n\r\n\r\nclass UserModule{\r\n    addNewUser(){\r\n       document.getElementById('content').innerHTML=\r\n        `<div class=\"w-100 d-flex justify-content-center\">\r\n            <div class=\"card w-50\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title w-100 text-center\">Зарегистрировать пользователя</h5>\r\n                  <p class=\"card-text d-flex justify-content-end\">Имя пользователя: <input class=\"w-50 ml-3\" type=\"text\" id=\"firstname\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">Фамилия пользователя: <input class=\"w-50 ml-3\" type=\"text\" id=\"lastname\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">email пользователя: <input class=\"w-50 ml-3\" type=\"email\" id=\"email\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">Логин: <input class=\"w-50 ml-3\" type=\"text\" id=\"login\"></p>\r\n                  <p class=\"card-text d-flex justify-content-end\">Пароль: <input class=\"w-50 ml-3\" type=\"text\" id=\"password\"></p>\r\n                  <a href=\"#\" id=\"btnAddUser\" class=\"btn btn-primary w-100\">Зарегистрировать пользователя</a>\r\n                </div>\r\n            </div>\r\n          </div>`;\r\n            document.getElementById('btnAddUser').onclick=function(){\r\n                userModule.createUser();\r\n            }\r\n           \r\n            \r\n      }\r\n      createUser(){\r\n          let firstname = document.getElementById('firstname').value;\r\n          let lastname = document.getElementById('lastname').value;\r\n          let email = document.getElementById('email').value;\r\n          let login = document.getElementById('login').value;\r\n          let password = document.getElementById('password').value;\r\n          let user = {\r\n              \"firstname\": firstname,\r\n              \"lastname\": lastname,\r\n              \"email\": email,\r\n              \"login\": login,\r\n              \"password\": password,\r\n          }\r\n          _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'createUser',options:{method:'POST',data:user}})\r\n                  .then(function(response){\r\n                      if(response !== null || response !== undefined){\r\n                        if(response.actionStatus === 'true'){\r\n                            document.getElementById('info').innerHTML='Пользователь добавлен';\r\n                            document.getElementById('content').innerHTML='';\r\n                        }else{\r\n                            document.getElementById('info').innerHTML='Пользователя добавить не удалось';\r\n                        }\r\n                      }\r\n                  })\r\n      }\r\n      printUserProfileForm(){\r\n        let user = null;\r\n        if(sessionStorage.getItem('user') !== null){\r\n            user = JSON.parse(sessionStorage.getItem('user'));\r\n            console.log(\"user.login=\"+user.login);\r\n            document.getElementById('content').innerHTML=\r\n                `<div class=\"row mt-5\">\r\n                     <div class=\"card p-4 m-auto w-50\">\r\n                        <h1 class=\"h3 mb-4 font-weight-normal text-center\">Профиль пользователя</h1>\r\n                        <div class=\"input-group mb-2\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\">Имя </span>\r\n                            </div>\r\n                            <input type=\"text\" id=\"firstname\" class=\"form-control\"  value=\"${user.person.firstname}\">\r\n                        </div>\r\n                        <div class=\"input-group mb-2\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\">Фамилия </span>\r\n                            </div>\r\n                            <input type=\"text\" id=\"lastname\" class=\"form-control\"  value=\"${user.person.lastname}\">\r\n                        </div>\r\n                        <div class=\"input-group mb-2\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\">Элуктронная почта </span>\r\n                            </div>\r\n                            <input type=\"text\" id=\"email\" class=\"form-control\"  value=\"${user.person.email}\">\r\n                        </div>\r\n                        <div class=\"input-group mb-2\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\">Логин </span>\r\n                            </div>\r\n                            <input type=\"text\" id=\"login\" class=\"form-control\"  value=\"${user.login}\">\r\n                        </div>\r\n                        <div class=\"input-group mb-2\">\r\n                            <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\">Новый пароль </span>\r\n                            </div>\r\n                            <input type=\"text\" id=\"password\" class=\"form-control\"  value=\"\">\r\n                        </div>\r\n                        <button id='btnChangeProfile' class=\"btn btn-primary btn-block\" type=\"button\">Изменить</button>\r\n                     </div>\r\n                </div>`;\r\n        }else{\r\n            document.getElementById('content').innerHTML='Данных о пользователе нет'\r\n            _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].authMenu();\r\n        }\r\n        document.getElementById('btnChangeProfile').onclick = function(){\r\n            userModule.changeProfile();\r\n        }\r\n    }\r\n    changeProfile(){\r\n        let firstname = document.getElementById('firstname').value;\r\n        let lastname = document.getElementById('lastname').value;\r\n        let email = document.getElementById('email').value;\r\n        let login = document.getElementById('login').value;\r\n        let password = document.getElementById('password').value;\r\n        if(\"\" === password){\r\n            password = null;\r\n        }\r\n        let user = {\r\n            \"firstname\": firstname,\r\n            \"lastname\": lastname,\r\n            \"email\": email,\r\n            \"login\": login,\r\n            \"password\": password\r\n        }\r\n        _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'changeUserProfile', options: {method:'POST',data:user}})\r\n                .then(function(response){\r\n                    if(response !== null || response !== undefined){\r\n                        if(response.authStatus === 'true'){\r\n                            if(response.user !== null){\r\n                                sessionStorage.setItem('user',JSON.stringify(response.user));\r\n                                document.getElementById('info').innerHTML='Профиль пользователя изменен';\r\n                            }else{\r\n                                document.getElementById('info').innerHTML='Профиль пользователя не поменялся';\r\n                                if(sessionStorage.getItem('user')!== null){\r\n                                    sessionStorage.removeItem('user');\r\n                                }\r\n                            }\r\n                        }else{\r\n                            document.getElementById('info').innerHTML='Профиль пользователя не поменялся';\r\n                            if(sessionStorage.getItem('user')!== null){\r\n                                sessionStorage.removeItem('user');\r\n                            }\r\n                        }\r\n                    }else{\r\n                         document.getElementById('info').innerHTML='Ошибка на сервере';\r\n                    }\r\n                    userModule.printUserProfileForm();\r\n                });\r\n    }\r\n}\r\nlet userModule = new UserModule();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/UserModule.js?");

/***/ })

/******/ });