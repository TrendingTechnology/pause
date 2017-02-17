/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


jQuery(function ($) {
  var tagCloud = function tagCloud() {
    var minOpacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .6;
    var maxOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var $tags = $('.tagList_tag');
    if ($tags.length == 0) {
      return false;
    }

    var data = getCount($tags);
    var rate = (maxOpacity - minOpacity) / (data.max - data.min);

    $tags.each(function (i) {
      var $elm = $tags.eq(i);

      var op = minOpacity + rate * ($elm.data('count') - data.min);
      var fw = op > .75 ? 'bold' : 'normal';

      $elm.css({
        opacity: minOpacity + rate * ($elm.data('count') - data.min),
        fontWeight: fw
      });
    });
  };

  var getCount = function getCount($e) {
    var counts = $e.map(function (i) {
      return $e.eq(i).data('count');
    }).toArray();

    return {
      min: Math.min.apply(Math, counts),
      max: Math.max.apply(Math, counts)
    };
  };

  tagCloud();
});

/***/ }
/******/ ]);