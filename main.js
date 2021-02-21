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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactInfo() {\r\n\r\n    var pageContent = document.getElementById('pageContent');\r\n\r\n    var contactDetails = document.createElement('h4');\r\n    contactDetails.innerHTML = \"maaintivanta@outlook.com\";\r\n    pageContent.innerHTML = 'You may reach us over mail or telephone';\r\n    pageContent.appendChild(contactDetails);\r\n    var telephoneNum = document.createElement('h4');\r\n    telephoneNum.innerHTML = '+040 1234567891';\r\n    pageContent.appendChild(telephoneNum);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactInfo);\r\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar menuList = [\r\n\r\n    {\r\n        name: 'Andhra Meals',\r\n        imageURL: 'https://imgmedia.lbb.in/media/2019/05/5cecadbfa5dc140f6d29506b_1559014847620.jpg'\r\n    },\r\n    {\r\n        name: 'Subbaigari Butta Bhojanam',\r\n        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnHD9O8Hn6UMlLoA-VpzlHVO7lrMg785Owg&usqp=CAU'\r\n    },\r\n    {\r\n        name: 'Ayyengar Meals',\r\n        imageURL: 'https://i.pinimg.com/originals/3c/83/af/3c83afff68d7eaca307d9b5087cedb18.jpg'\r\n    }\r\n\r\n]\r\n\r\nfunction menuPage() {\r\n    var menuItem = document.getElementById('pageContent');\r\n    menuItem.innerHTML = 'Delicacies we serve';\r\n    for (let i = 0; i < menuList.length; i++) {\r\n        var menuDiv = document.createElement('div');\r\n        var apmeals = document.createElement('h4')\r\n        apmeals.innerHTML = menuList[i].name;\r\n        var Mealsimage = document.createElement('img');\r\n        Mealsimage.src = menuList[i].imageURL;\r\n        menuDiv.appendChild(Mealsimage);\r\n        menuDiv.appendChild(apmeals);\r\n        menuItem.appendChild(menuDiv);\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\r\n\r\n\r\nfunction pageLoad() {\r\n    var contentPage = document.getElementById('content');\r\n    var hotelName = document.createElement('h3');\r\n    hotelName.innerHTML = 'మా ఇంటి వంట';\r\n    contentPage.appendChild(hotelName);\r\n    var homeNavbar = document.createElement('nav');\r\n\r\n    var homeLink = document.createElement('a');\r\n    var menuLink = document.createElement('a');\r\n    var contactLink = document.createElement('a');\r\n\r\n    homeLink.onclick = (e) => {\r\n        location.reload();\r\n        e.preventDefault();\r\n    }\r\n    homeLink.href = '#'\r\n    homeLink.innerHTML = 'Home';\r\n\r\n\r\n    menuLink.onclick = (e) => {\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n        e.preventDefault();\r\n    }\r\n    menuLink.href = \"#\";\r\n    menuLink.innerHTML = 'Menu'\r\n\r\n    contactLink.onclick = () => {\r\n        ;(0,_contactPage__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n        e.preventDefault();\r\n    }\r\n    contactLink.href = '#';\r\n    contactLink.innerHTML = 'Contact Us'\r\n\r\n    homeNavbar.appendChild(homeLink);\r\n    homeNavbar.appendChild(menuLink);\r\n    homeNavbar.appendChild(contactLink);\r\n\r\n    contentPage.appendChild(homeNavbar);\r\n\r\n    var aboutUs = document.createElement('div');\r\n    aboutUs.setAttribute('id', 'pageContent')\r\n    aboutUs.innerHTML = ' \" 1955 లో మొదలు ఐన మా ఇంటి వంట ఈ రోజు మన తెలుగు రాష్ట్రాల్ని దాటి కర్ణాటక , తమిళనాడు, కేరళ,గోవా లో కూడా మన హోటల్ ఉంది అండోయ్ ....ఇది కేవలం ఒక్కరి వల్ల ఒక్క రోజులో దక్కిన విజయం కాదు,మా తాత గారు మొదలు అందరం కష్టపడి ఈ స్థాయికి తీస్కుకువచ్చాము. దీనిలో మా రెగ్యులర్ కస్టమర్స్ ఐన వాళ్ళు కొన్ని వందల మంది ఉన్నారు. స్వచ్ఛమైన బ్రాహ్మణ భోజనం చెయ్యాలి అందులోను అయ్యంగార్ భోజనం తినాలి అని అనిపించిన వారు రండి, రోజులో ఏ సమయం లో ఐన రండి. వడ్డించిన విస్తరాకు మీ కోసం సిద్ధం. మహానుభూవురాలు డొక్కా సీతమ్మ గారు మాకు ఆదర్శం, ఆ అమ్మ పుట్టిన జిల్లా లో పుట్టి మేము చేసే ఈ చిన్న పని ఇంత పెద్ద హోటల్ చైన్ గా మారుతుంది అని ఏనాడు కలగనలేదు.సదా మీ సేవలో....🙏 మీ ఇంటి వంట యాజమాన్యం \"'\r\n\r\n    contentPage.appendChild(aboutUs);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());\n\n//# sourceURL=webpack://Odin-Restaurant-Page/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;