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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/customize-preview.js":
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _stripTags = __webpack_require__(/*! ./helpers/strip-tags */ "./src/assets/js/helpers/strip-tags.js");

var _stripTags2 = _interopRequireDefault(_stripTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Bind customisor api to html selected by class name
wp.customize('blogname', function (value) {
    value.bind(function (to) {
        (0, _jquery2.default)('.c-header__blogname').html(to);
    });
});

//Bind author info checkbox to to hrml by class name
wp.customize('_themename_display_author_info', function (value) {
    value.bind(function (to) {
        if (to) {
            (0, _jquery2.default)('.c-post-author').show();
        } else {
            (0, _jquery2.default)('.c-post-author').hide();
        }
    });
});

//Bind customisor api to html selected by id name for inline style
wp.customize('_themename_accent_colour', function (value) {
    value.bind(function (to) {
        //JavaScript version of the array loop in inline-css.fa-php
        //Define the variables
        var inline_css = '';
        var inline_css_obj = _themename['inline-css'];

        //Loop through each element/selector listed in inline-css
        for (var selector in inline_css_obj) {
            //Append selector to variable for inner loop
            inline_css += selector + ' {';
            for (var prop in inline_css_obj[selector]) {
                //Assign value of key to $val
                var val = inline_css_obj[selector][prop];
                //Use wp function in customize to get the value of $val and append to create css style line
                inline_css += prop + ': ' + wp.customize(val).get();
            }
            inline_css += '}';
        }

        //Bind output of loop to the inline style element id
        (0, _jquery2.default)('#_themename-stylesheet-inline-css').html(inline_css);
    });
});

//Bind customisor api to html selected by class name
wp.customize('_themename_site_info', function (value) {
    value.bind(function (to) {
        (0, _jquery2.default)('.c-site-info__text').html((0, _stripTags2.default)(to, '<a>'));
    });
});

/***/ }),

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var strip_tags = function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
};

exports.default = strip_tags;

/***/ }),

/***/ 2:
/*!**************************************************!*\
  !*** multi ./src/assets/js/customize-preview.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\laragon\www\JAR\my_wordpresstheme\myfirsttheme\wp-content\themes\firsttheme\src\assets\js\customize-preview.js */"./src/assets/js/customize-preview.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJ3cCIsImN1c3RvbWl6ZSIsInZhbHVlIiwiYmluZCIsInRvIiwiaHRtbCIsInNob3ciLCJoaWRlIiwiaW5saW5lX2NzcyIsImlubGluZV9jc3Nfb2JqIiwiX3RoZW1lbmFtZSIsInNlbGVjdG9yIiwicHJvcCIsInZhbCIsImdldCIsInN0cmlwX3RhZ3MiLCJpbnB1dCIsImFsbG93ZWQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiam9pbiIsInRhZ3MiLCJjb21tZW50c0FuZFBocFRhZ3MiLCJyZXBsYWNlIiwiJDAiLCIkMSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBQSxHQUFHQyxTQUFILENBQWEsVUFBYixFQUF5QixVQUFDQyxLQUFELEVBQVc7QUFDaENBLFVBQU1DLElBQU4sQ0FBVyxVQUFDQyxFQUFELEVBQVE7QUFDZiw4QkFBRSxxQkFBRixFQUF5QkMsSUFBekIsQ0FBOEJELEVBQTlCO0FBQ0gsS0FGRDtBQUdILENBSkQ7O0FBTUE7QUFDQUosR0FBR0MsU0FBSCxDQUFhLGdDQUFiLEVBQStDLFVBQUNDLEtBQUQsRUFBVztBQUN0REEsVUFBTUMsSUFBTixDQUFXLFVBQUNDLEVBQUQsRUFBUTtBQUNmLFlBQUlBLEVBQUosRUFBUTtBQUNKLGtDQUFFLGdCQUFGLEVBQW9CRSxJQUFwQjtBQUNILFNBRkQsTUFFTztBQUNILGtDQUFFLGdCQUFGLEVBQW9CQyxJQUFwQjtBQUNIO0FBQ0osS0FORDtBQU9ILENBUkQ7O0FBVUE7QUFDQVAsR0FBR0MsU0FBSCxDQUFhLDBCQUFiLEVBQXlDLFVBQUNDLEtBQUQsRUFBVztBQUNoREEsVUFBTUMsSUFBTixDQUFXLFVBQUNDLEVBQUQsRUFBUTtBQUNmO0FBQ0E7QUFDQSxZQUFJSSxlQUFKO0FBQ0EsWUFBSUMsaUJBQWlCQyxXQUFXLFlBQVgsQ0FBckI7O0FBRUE7QUFDQSxhQUFLLElBQUlDLFFBQVQsSUFBcUJGLGNBQXJCLEVBQXFDO0FBQ2pDO0FBQ0FELDBCQUFpQkcsUUFBakI7QUFDQSxpQkFBSyxJQUFJQyxJQUFULElBQWlCSCxlQUFlRSxRQUFmLENBQWpCLEVBQTJDO0FBQ3ZDO0FBQ0Esb0JBQUlFLE1BQU1KLGVBQWVFLFFBQWYsRUFBeUJDLElBQXpCLENBQVY7QUFDQTtBQUNBSiw4QkFBaUJJLElBQWpCLFVBQTBCWixHQUFHQyxTQUFILENBQWFZLEdBQWIsRUFBa0JDLEdBQWxCLEVBQTFCO0FBQ0g7QUFDRE47QUFDSDs7QUFFRDtBQUNBLDhCQUFFLG1DQUFGLEVBQXVDSCxJQUF2QyxDQUE0Q0csVUFBNUM7QUFDSCxLQXJCRDtBQXNCSCxDQXZCRDs7QUF5QkE7QUFDQVIsR0FBR0MsU0FBSCxDQUFhLHNCQUFiLEVBQXFDLFVBQUNDLEtBQUQsRUFBVztBQUM1Q0EsVUFBTUMsSUFBTixDQUFXLFVBQUNDLEVBQUQsRUFBUTtBQUNmLDhCQUFFLG9CQUFGLEVBQXdCQyxJQUF4QixDQUE2Qix5QkFBV0QsRUFBWCxFQUFlLEtBQWYsQ0FBN0I7QUFDSCxLQUZEO0FBR0gsQ0FKRCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQSxJQUFNVyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ25DQSxjQUFVLENBQUMsQ0FBQyxDQUFDQSxXQUFXLEVBQVosSUFBa0IsRUFBbkIsRUFDRkMsV0FERSxHQUVGQyxLQUZFLENBRUksbUJBRkosS0FFNEIsRUFGN0IsRUFHTEMsSUFISyxDQUdBLEVBSEEsQ0FBVixDQURtQyxDQUlwQjtBQUNmLFFBQUlDLE9BQU8sZ0NBQVg7QUFBQSxRQUNJQyxxQkFBcUIsMENBRHpCO0FBRUEsV0FBT04sTUFBTU8sT0FBTixDQUFjRCxrQkFBZCxFQUFrQyxFQUFsQyxFQUNGQyxPQURFLENBQ01GLElBRE4sRUFDWSxVQUFVRyxFQUFWLEVBQWNDLEVBQWQsRUFBa0I7QUFDN0IsZUFBT1IsUUFBUVMsT0FBUixDQUFnQixNQUFNRCxHQUFHUCxXQUFILEVBQU4sR0FBeUIsR0FBekMsSUFBZ0QsQ0FBQyxDQUFqRCxHQUFxRE0sRUFBckQsR0FBMEQsRUFBakU7QUFDSCxLQUhFLENBQVA7QUFJSCxDQVhEOztrQkFhZVQsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZix3QiIsImZpbGUiOiJjdXN0b21pemUtcHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBzdHJpcF90YWdzIGZyb20gJy4vaGVscGVycy9zdHJpcC10YWdzJztcclxuXHJcbi8vQmluZCBjdXN0b21pc29yIGFwaSB0byBodG1sIHNlbGVjdGVkIGJ5IGNsYXNzIG5hbWVcclxud3AuY3VzdG9taXplKCdibG9nbmFtZScsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pID0+IHtcclxuICAgICAgICAkKCcuYy1oZWFkZXJfX2Jsb2duYW1lJykuaHRtbCh0byk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy9CaW5kIGF1dGhvciBpbmZvIGNoZWNrYm94IHRvIHRvIGhybWwgYnkgY2xhc3MgbmFtZVxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfZGlzcGxheV9hdXRob3JfaW5mbycsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pID0+IHtcclxuICAgICAgICBpZiAodG8pIHtcclxuICAgICAgICAgICAgJCgnLmMtcG9zdC1hdXRob3InKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmMtcG9zdC1hdXRob3InKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbi8vQmluZCBjdXN0b21pc29yIGFwaSB0byBodG1sIHNlbGVjdGVkIGJ5IGlkIG5hbWUgZm9yIGlubGluZSBzdHlsZVxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfYWNjZW50X2NvbG91cicsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pID0+IHtcclxuICAgICAgICAvL0phdmFTY3JpcHQgdmVyc2lvbiBvZiB0aGUgYXJyYXkgbG9vcCBpbiBpbmxpbmUtY3NzLmZhLXBocFxyXG4gICAgICAgIC8vRGVmaW5lIHRoZSB2YXJpYWJsZXNcclxuICAgICAgICBsZXQgaW5saW5lX2NzcyA9IGBgO1xyXG4gICAgICAgIGxldCBpbmxpbmVfY3NzX29iaiA9IF90aGVtZW5hbWVbJ2lubGluZS1jc3MnXTtcclxuXHJcbiAgICAgICAgLy9Mb29wIHRocm91Z2ggZWFjaCBlbGVtZW50L3NlbGVjdG9yIGxpc3RlZCBpbiBpbmxpbmUtY3NzXHJcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0b3IgaW4gaW5saW5lX2Nzc19vYmopIHtcclxuICAgICAgICAgICAgLy9BcHBlbmQgc2VsZWN0b3IgdG8gdmFyaWFibGUgZm9yIGlubmVyIGxvb3BcclxuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtzZWxlY3Rvcn0ge2BcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl0pIHtcclxuICAgICAgICAgICAgICAgIC8vQXNzaWduIHZhbHVlIG9mIGtleSB0byAkdmFsXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JdW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgLy9Vc2Ugd3AgZnVuY3Rpb24gaW4gY3VzdG9taXplIHRvIGdldCB0aGUgdmFsdWUgb2YgJHZhbCBhbmQgYXBwZW5kIHRvIGNyZWF0ZSBjc3Mgc3R5bGUgbGluZVxyXG4gICAgICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtwcm9wfTogJHt3cC5jdXN0b21pemUodmFsKS5nZXQoKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9CaW5kIG91dHB1dCBvZiBsb29wIHRvIHRoZSBpbmxpbmUgc3R5bGUgZWxlbWVudCBpZFxyXG4gICAgICAgICQoJyNfdGhlbWVuYW1lLXN0eWxlc2hlZXQtaW5saW5lLWNzcycpLmh0bWwoaW5saW5lX2Nzcyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy9CaW5kIGN1c3RvbWlzb3IgYXBpIHRvIGh0bWwgc2VsZWN0ZWQgYnkgY2xhc3MgbmFtZVxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfc2l0ZV9pbmZvJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCh0bykgPT4ge1xyXG4gICAgICAgICQoJy5jLXNpdGUtaW5mb19fdGV4dCcpLmh0bWwoc3RyaXBfdGFncyh0bywgJzxhPicpKTtcclxuICAgIH0pXHJcbn0pIiwiY29uc3Qgc3RyaXBfdGFncyA9IChpbnB1dCwgYWxsb3dlZCkgPT4ge1xyXG4gICAgYWxsb3dlZCA9ICgoKGFsbG93ZWQgfHwgJycpICsgJycpXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSlcclxuICAgICAgICAuam9pbignJyk7IC8vIG1ha2luZyBzdXJlIHRoZSBhbGxvd2VkIGFyZyBpcyBhIHN0cmluZyBjb250YWluaW5nIG9ubHkgdGFncyBpbiBsb3dlcmNhc2UgKDxhPjxiPjxjPilcclxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcclxuICAgICAgICBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShjb21tZW50c0FuZFBocFRhZ3MsICcnKVxyXG4gICAgICAgIC5yZXBsYWNlKHRhZ3MsIGZ1bmN0aW9uICgkMCwgJDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbG93ZWQuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJztcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RyaXBfdGFnczsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9