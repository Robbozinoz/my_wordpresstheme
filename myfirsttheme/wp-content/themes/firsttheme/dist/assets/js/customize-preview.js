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

module.exports = __webpack_require__(/*! C:\laragon\www\JAR\my_wordpresstheme\myfirsttheme\wp-content\themes\firsttheme\src\assets\js\customize-preview.js */"./src/assets/js/customize-preview.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJ3cCIsImN1c3RvbWl6ZSIsInZhbHVlIiwiYmluZCIsInRvIiwiaHRtbCIsImlubGluZV9jc3MiLCJpbmxpbmVfY3NzX29iaiIsIl90aGVtZW5hbWUiLCJzZWxlY3RvciIsInByb3AiLCJ2YWwiLCJnZXQiLCJzdHJpcF90YWdzIiwiaW5wdXQiLCJhbGxvd2VkIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImpvaW4iLCJ0YWdzIiwiY29tbWVudHNBbmRQaHBUYWdzIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQUEsR0FBR0MsU0FBSCxDQUFhLFVBQWIsRUFBeUIsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hDQSxVQUFNQyxJQUFOLENBQVcsVUFBQ0MsRUFBRCxFQUFRO0FBQ2YsOEJBQUUscUJBQUYsRUFBeUJDLElBQXpCLENBQThCRCxFQUE5QjtBQUNILEtBRkQ7QUFHSCxDQUpEOztBQU1BO0FBQ0FKLEdBQUdDLFNBQUgsQ0FBYSwwQkFBYixFQUF5QyxVQUFDQyxLQUFELEVBQVc7QUFDaERBLFVBQU1DLElBQU4sQ0FBVyxVQUFDQyxFQUFELEVBQVE7QUFDZjtBQUNBO0FBQ0EsWUFBSUUsZUFBSjtBQUNBLFlBQUlDLGlCQUFpQkMsV0FBVyxZQUFYLENBQXJCOztBQUVBO0FBQ0EsYUFBSyxJQUFJQyxRQUFULElBQXFCRixjQUFyQixFQUFxQztBQUNqQztBQUNBRCwwQkFBaUJHLFFBQWpCO0FBQ0EsaUJBQUssSUFBSUMsSUFBVCxJQUFpQkgsZUFBZUUsUUFBZixDQUFqQixFQUEyQztBQUN2QztBQUNBLG9CQUFJRSxNQUFNSixlQUFlRSxRQUFmLEVBQXlCQyxJQUF6QixDQUFWO0FBQ0E7QUFDQUosOEJBQWlCSSxJQUFqQixVQUEwQlYsR0FBR0MsU0FBSCxDQUFhVSxHQUFiLEVBQWtCQyxHQUFsQixFQUExQjtBQUNIO0FBQ0ROO0FBQ0g7O0FBRUQ7QUFDQSw4QkFBRSxtQ0FBRixFQUF1Q0QsSUFBdkMsQ0FBNENDLFVBQTVDO0FBQ0gsS0FyQkQ7QUFzQkgsQ0F2QkQ7O0FBeUJBO0FBQ0FOLEdBQUdDLFNBQUgsQ0FBYSxzQkFBYixFQUFxQyxVQUFDQyxLQUFELEVBQVc7QUFDNUNBLFVBQU1DLElBQU4sQ0FBVyxVQUFDQyxFQUFELEVBQVE7QUFDZiw4QkFBRSxvQkFBRixFQUF3QkMsSUFBeEIsQ0FBNkIseUJBQVdELEVBQVgsRUFBZSxLQUFmLENBQTdCO0FBQ0gsS0FGRDtBQUdILENBSkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0EsSUFBTVMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUNuQ0EsY0FBVSxDQUFDLENBQUMsQ0FBQ0EsV0FBVyxFQUFaLElBQWtCLEVBQW5CLEVBQ0ZDLFdBREUsR0FFRkMsS0FGRSxDQUVJLG1CQUZKLEtBRTRCLEVBRjdCLEVBR0xDLElBSEssQ0FHQSxFQUhBLENBQVYsQ0FEbUMsQ0FJcEI7QUFDZixRQUFJQyxPQUFPLGdDQUFYO0FBQUEsUUFDSUMscUJBQXFCLDBDQUR6QjtBQUVBLFdBQU9OLE1BQU1PLE9BQU4sQ0FBY0Qsa0JBQWQsRUFBa0MsRUFBbEMsRUFDRkMsT0FERSxDQUNNRixJQUROLEVBQ1ksVUFBVUcsRUFBVixFQUFjQyxFQUFkLEVBQWtCO0FBQzdCLGVBQU9SLFFBQVFTLE9BQVIsQ0FBZ0IsTUFBTUQsR0FBR1AsV0FBSCxFQUFOLEdBQXlCLEdBQXpDLElBQWdELENBQUMsQ0FBakQsR0FBcURNLEVBQXJELEdBQTBELEVBQWpFO0FBQ0gsS0FIRSxDQUFQO0FBSUgsQ0FYRDs7a0JBYWVULFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmYsd0IiLCJmaWxlIjoiY3VzdG9taXplLXByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgc3RyaXBfdGFncyBmcm9tICcuL2hlbHBlcnMvc3RyaXAtdGFncyc7XHJcblxyXG4vL0JpbmQgY3VzdG9taXNvciBhcGkgdG8gaHRtbCBzZWxlY3RlZCBieSBjbGFzcyBuYW1lXHJcbndwLmN1c3RvbWl6ZSgnYmxvZ25hbWUnLCAodmFsdWUpID0+IHtcclxuICAgIHZhbHVlLmJpbmQoKHRvKSA9PiB7XHJcbiAgICAgICAgJCgnLmMtaGVhZGVyX19ibG9nbmFtZScpLmh0bWwodG8pO1xyXG4gICAgfSlcclxufSlcclxuXHJcbi8vQmluZCBjdXN0b21pc29yIGFwaSB0byBodG1sIHNlbGVjdGVkIGJ5IGlkIG5hbWUgZm9yIGlubGluZSBzdHlsZVxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfYWNjZW50X2NvbG91cicsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCgodG8pID0+IHtcclxuICAgICAgICAvL0phdmFTY3JpcHQgdmVyc2lvbiBvZiB0aGUgYXJyYXkgbG9vcCBpbiBpbmxpbmUtY3NzLmZhLXBocFxyXG4gICAgICAgIC8vRGVmaW5lIHRoZSB2YXJpYWJsZXNcclxuICAgICAgICBsZXQgaW5saW5lX2NzcyA9IGBgO1xyXG4gICAgICAgIGxldCBpbmxpbmVfY3NzX29iaiA9IF90aGVtZW5hbWVbJ2lubGluZS1jc3MnXTtcclxuXHJcbiAgICAgICAgLy9Mb29wIHRocm91Z2ggZWFjaCBlbGVtZW50L3NlbGVjdG9yIGxpc3RlZCBpbiBpbmxpbmUtY3NzXHJcbiAgICAgICAgZm9yIChsZXQgc2VsZWN0b3IgaW4gaW5saW5lX2Nzc19vYmopIHtcclxuICAgICAgICAgICAgLy9BcHBlbmQgc2VsZWN0b3IgdG8gdmFyaWFibGUgZm9yIGlubmVyIGxvb3BcclxuICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtzZWxlY3Rvcn0ge2BcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl0pIHtcclxuICAgICAgICAgICAgICAgIC8vQXNzaWduIHZhbHVlIG9mIGtleSB0byAkdmFsXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gaW5saW5lX2Nzc19vYmpbc2VsZWN0b3JdW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgLy9Vc2Ugd3AgZnVuY3Rpb24gaW4gY3VzdG9taXplIHRvIGdldCB0aGUgdmFsdWUgb2YgJHZhbCBhbmQgYXBwZW5kIHRvIGNyZWF0ZSBjc3Mgc3R5bGUgbGluZVxyXG4gICAgICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtwcm9wfTogJHt3cC5jdXN0b21pemUodmFsKS5nZXQoKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9CaW5kIG91dHB1dCBvZiBsb29wIHRvIHRoZSBpbmxpbmUgc3R5bGUgZWxlbWVudCBpZFxyXG4gICAgICAgICQoJyNfdGhlbWVuYW1lLXN0eWxlc2hlZXQtaW5saW5lLWNzcycpLmh0bWwoaW5saW5lX2Nzcyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuLy9CaW5kIGN1c3RvbWlzb3IgYXBpIHRvIGh0bWwgc2VsZWN0ZWQgYnkgY2xhc3MgbmFtZVxyXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfc2l0ZV9pbmZvJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCh0bykgPT4ge1xyXG4gICAgICAgICQoJy5jLXNpdGUtaW5mb19fdGV4dCcpLmh0bWwoc3RyaXBfdGFncyh0bywgJzxhPicpKTtcclxuICAgIH0pXHJcbn0pIiwiY29uc3Qgc3RyaXBfdGFncyA9IChpbnB1dCwgYWxsb3dlZCkgPT4ge1xyXG4gICAgYWxsb3dlZCA9ICgoKGFsbG93ZWQgfHwgJycpICsgJycpXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5tYXRjaCgvPFthLXpdW2EtejAtOV0qPi9nKSB8fCBbXSlcclxuICAgICAgICAuam9pbignJyk7IC8vIG1ha2luZyBzdXJlIHRoZSBhbGxvd2VkIGFyZyBpcyBhIHN0cmluZyBjb250YWluaW5nIG9ubHkgdGFncyBpbiBsb3dlcmNhc2UgKDxhPjxiPjxjPilcclxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcclxuICAgICAgICBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShjb21tZW50c0FuZFBocFRhZ3MsICcnKVxyXG4gICAgICAgIC5yZXBsYWNlKHRhZ3MsIGZ1bmN0aW9uICgkMCwgJDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbG93ZWQuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJztcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RyaXBfdGFnczsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9