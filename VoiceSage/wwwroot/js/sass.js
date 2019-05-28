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
/******/ 	__webpack_require__.p = "/css";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./GlobalAssets/Sass/site.scss":
/*!*************************************!*\
  !*** ./GlobalAssets/Sass/site.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\\nError: Missing binding E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\node-sass\\\\vendor\\\\win32-x64-64\\\\binding.node\\nNode Sass could not find a binding for your current environment: Windows 64-bit with Node.js 10.x\\n\\nFound bindings for the following environments:\\n  - Windows 64-bit with Node.js 12.x\\n\\nThis usually happens because your environment has changed since running `npm install`.\\nRun `npm rebuild node-sass` to download the binding for your current environment.\\n    at module.exports (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\node-sass\\\\lib\\\\binding.js:15:13)\\n    at Object.<anonymous> (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\node-sass\\\\lib\\\\index.js:14:35)\\n    at Module._compile (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\\n    at Module.load (internal/modules/cjs/loader.js:599:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\\n    at Module.require (internal/modules/cjs/loader.js:637:17)\\n    at require (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:161:20)\\n    at Object.sassLoader (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js:46:72)\\n    at runLoaders (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:302:20)\\n    at E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:43:16)\\n    at provider (E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:79:9)\\n    at E:\\\\Development Challenges\\\\VoiceSage\\\\VoiceSage\\\\VoiceSage\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:90:16\\n    at FSReqWrap.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:53:3)\");\n\n//# sourceURL=webpack:///./GlobalAssets/Sass/site.scss?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./GlobalAssets/Sass/site.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./GlobalAssets/Sass/site.scss */\"./GlobalAssets/Sass/site.scss\");\n\n\n//# sourceURL=webpack:///multi_./GlobalAssets/Sass/site.scss?");

/***/ })

/******/ });