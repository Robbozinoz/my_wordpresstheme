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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function (factory) {
    'use strict';

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function customPaging(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function step(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function complete() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1;

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2;
                    }
                }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
            return val >= 0 && val < _.slideCount;
        });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': i + 1 + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({ 'tabindex': '0' });
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }

        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image.animate({ opacity: 0 }, 100, function () {

                        if (imageSrcSet) {
                            image.attr('srcset', imageSrcSet);

                            if (imageSizes) {
                                image.attr('sizes', imageSizes);
                            }
                        }

                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                            image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                if (imageSrcSet) {
                    image.attr('srcset', imageSrcSet);

                    if (imageSizes) {
                        image.attr('sizes', imageSizes);
                    }
                }

                image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                    _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches,
            verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').end();

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});

/***/ }),

/***/ "./src/assets/js/bundle.js":
/*!*********************************!*\
  !*** ./src/assets/js/bundle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(/*! ./components/slider */ "./src/assets/js/components/slider.js");

__webpack_require__(/*! ./components/navigation */ "./src/assets/js/components/navigation.js");

__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
    (0, _jquery2.default)('.c-post__gallery').slick({
        arrows: false,
        adaptiveHeight: true
    });
});

/***/ }),

/***/ "./src/assets/js/components/navigation.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/navigation.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(/*! jquery */ "jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Add open class to menu links to control display property flex or block and close close submenus not in focus
(0, _jquery2.default)('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
    if (!(0, _jquery2.default)(e.currentTarget).parents('.sub-menu').length) {
        (0, _jquery2.default)('.menu >  .menu-item.open').find('> a > .menu-button').trigger('click');
    }
    (0, _jquery2.default)(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
    (0, _jquery2.default)(e.currentTarget).removeClass('open');
});

////On clicking an open submenu find show/hide classes and apply aria hidden logic using parent sibling dom control
//On click change aria hidden and aria expanded attributes to opposite to enable screen reader access
(0, _jquery2.default)('.c-navigation').on('click', '.menu .menu-button', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var menu_button = (0, _jquery2.default)(e.currentTarget);
    var menu_link = menu_button.parent();
    var menu_item = menu_link.parent();
    if (menu_item.hasClass('open')) {
        menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
        menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
    } else {
        menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
        menu_item.addClass('open');
        menu_link.attr('aria-expanded', 'true');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
    }
});

//If a user clicks in the page but outside the menu -close open menus
(0, _jquery2.default)(document).click(function (e) {
    if ((0, _jquery2.default)('.menu-item.open').length) {
        (0, _jquery2.default)('.menu > .menu-item.open > a > .menu-button').trigger('click');
    }
});

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./src/assets/js/bundle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\JAR\my_wordpresstheme\myfirsttheme\wp-content\themes\firsttheme\src\assets\js\bundle.js */"./src/assets/js/bundle.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCIkIiwiU2xpY2siLCJ3aW5kb3ciLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsIl8iLCJkYXRhU2V0dGluZ3MiLCJkZWZhdWx0cyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsImkiLCJ0ZXh0IiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVhc2luZyIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsImRvY3VtZW50IiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJodG1sRXhwciIsInJlZ2lzdGVyQnJlYWtwb2ludHMiLCJpbml0IiwicHJvdG90eXBlIiwiYWN0aXZhdGVBREEiLCJmaW5kIiwiYXR0ciIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJtYXJrdXAiLCJpbmRleCIsImFkZEJlZm9yZSIsInVubG9hZCIsImxlbmd0aCIsImFwcGVuZFRvIiwiaW5zZXJ0QmVmb3JlIiwiZXEiLCJpbnNlcnRBZnRlciIsInByZXBlbmRUbyIsImNoaWxkcmVuIiwiZGV0YWNoIiwiYXBwZW5kIiwiZWFjaCIsInJlaW5pdCIsImFuaW1hdGVIZWlnaHQiLCJ0YXJnZXRIZWlnaHQiLCJvdXRlckhlaWdodCIsImFuaW1hdGUiLCJoZWlnaHQiLCJhbmltYXRlU2xpZGUiLCJ0YXJnZXRMZWZ0IiwiY2FsbGJhY2siLCJhbmltUHJvcHMiLCJsZWZ0IiwidG9wIiwiYW5pbVN0YXJ0IiwiZHVyYXRpb24iLCJzdGVwIiwibm93IiwiTWF0aCIsImNlaWwiLCJjc3MiLCJjb21wbGV0ZSIsImNhbGwiLCJhcHBseVRyYW5zaXRpb24iLCJzZXRUaW1lb3V0IiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJ0YXJnZXQiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsInRlc3QiLCJhZGQiLCJidWlsZERvdHMiLCJkb3QiLCJnZXREb3RDb3VudCIsImZpcnN0IiwiYnVpbGRPdXQiLCJ3cmFwQWxsIiwicGFyZW50Iiwid3JhcCIsInNldHVwSW5maW5pdGUiLCJ1cGRhdGVEb3RzIiwic2V0U2xpZGVDbGFzc2VzIiwiYnVpbGRSb3dzIiwiYSIsImIiLCJjIiwibmV3U2xpZGVzIiwibnVtT2ZTbGlkZXMiLCJvcmlnaW5hbFNsaWRlcyIsInNsaWRlc1BlclNlY3Rpb24iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRWxlbWVudCIsInJvdyIsImdldCIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJpbml0aWFsIiwiZm9yY2VVcGRhdGUiLCJicmVha3BvaW50IiwidGFyZ2V0QnJlYWtwb2ludCIsInJlc3BvbmRUb1dpZHRoIiwidHJpZ2dlckJyZWFrcG9pbnQiLCJzbGlkZXJXaWR0aCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm1pbiIsImhhc093blByb3BlcnR5IiwidW5zbGljayIsInJlZnJlc2giLCJ0cmlnZ2VyIiwiZXZlbnQiLCJkb250QW5pbWF0ZSIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXhPZmZzZXQiLCJ1bmV2ZW5PZmZzZXQiLCJpcyIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VzdCIsIm1lc3NhZ2UiLCJjaGVja05hdmlnYWJsZSIsIm5hdmlnYWJsZXMiLCJwcmV2TmF2aWdhYmxlIiwiZ2V0TmF2aWdhYmxlSW5kZXhlcyIsIm4iLCJjbGVhblVwRXZlbnRzIiwib2ZmIiwiaW50ZXJydXB0IiwidmlzaWJpbGl0eSIsImNsZWFuVXBTbGlkZUV2ZW50cyIsIm9yaWVudGF0aW9uQ2hhbmdlIiwicmVzaXplIiwiY2xlYW5VcFJvd3MiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJkZXN0cm95IiwicmVtb3ZlIiwiZmFkZVNsaWRlIiwic2xpZGVJbmRleCIsIm9wYWNpdHkiLCJmYWRlU2xpZGVPdXQiLCJmaWx0ZXJTbGlkZXMiLCJzbGlja0ZpbHRlciIsImZpbHRlciIsImZvY3VzSGFuZGxlciIsIm9uIiwiJHNmIiwiZ2V0Q3VycmVudCIsInNsaWNrQ3VycmVudFNsaWRlIiwiYnJlYWtQb2ludCIsImNvdW50ZXIiLCJwYWdlclF0eSIsImdldExlZnQiLCJ2ZXJ0aWNhbEhlaWdodCIsInZlcnRpY2FsT2Zmc2V0IiwidGFyZ2V0U2xpZGUiLCJjb2VmIiwiZmxvb3IiLCJvZmZzZXRMZWZ0Iiwib3V0ZXJXaWR0aCIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsIm1heCIsInB1c2giLCJnZXRTbGljayIsImdldFNsaWRlQ291bnQiLCJzbGlkZXNUcmF2ZXJzZWQiLCJzd2lwZWRTbGlkZSIsImNlbnRlck9mZnNldCIsImFicyIsImdvVG8iLCJzbGlja0dvVG8iLCJwYXJzZUludCIsImNyZWF0aW9uIiwiaGFzQ2xhc3MiLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJpbmRleE9mIiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImFjdGlvbiIsImluaXRVSSIsInNob3ciLCJ0YWdOYW1lIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJzbGljZSIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwibCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsInR5cGUiLCJzcGxpY2UiLCJzb3J0IiwiY2xlYXJUaW1lb3V0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb24iLCJwb3NpdGlvblByb3BzIiwieCIsInkiLCJzZXREaW1lbnNpb25zIiwicGFkZGluZyIsIm9mZnNldCIsInNldEZhZGUiLCJyaWdodCIsInNldEhlaWdodCIsInNldE9wdGlvbiIsInNsaWNrU2V0T3B0aW9uIiwiaXRlbSIsInZhbHVlIiwiYXJndW1lbnRzIiwib3B0IiwiYm9keVN0eWxlIiwiYm9keSIsInN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidG9nZ2xlIiwidGFyZ2V0RWxlbWVudCIsInBhcmVudHMiLCJzeW5jIiwiYW5pbVNsaWRlIiwib2xkU2xpZGUiLCJzbGlkZUxlZnQiLCJuYXZUYXJnZXQiLCJoaWRlIiwic3dpcGVEaXJlY3Rpb24iLCJ4RGlzdCIsInlEaXN0IiwiciIsInN3aXBlQW5nbGUiLCJzdGFydFgiLCJjdXJYIiwic3RhcnRZIiwiY3VyWSIsImF0YW4yIiwicm91bmQiLCJQSSIsInN3aXBlRW5kIiwic3dpcGVMZW5ndGgiLCJlZGdlSGl0IiwibWluU3dpcGUiLCJmaW5nZXJDb3VudCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwic3dpcGVTdGFydCIsInN3aXBlTW92ZSIsImVkZ2VXYXNIaXQiLCJjdXJMZWZ0IiwicG9zaXRpb25PZmZzZXQiLCJ2ZXJ0aWNhbFN3aXBlTGVuZ3RoIiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwic3FydCIsInBvdyIsInVuZmlsdGVyU2xpZGVzIiwic2xpY2tVbmZpbHRlciIsImZyb21CcmVha3BvaW50IiwiZm4iLCJhcmdzIiwiQXJyYXkiLCJyZXQiLCJhcHBseSIsInJlYWR5IiwiZSIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiLCJjbGljayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQSxDQUFFLFdBQVNBLE9BQVQsRUFBa0I7QUFDaEI7O0FB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LEVBQXNDQyxJQUF0QyxDQUEyQyxhQUEzQyxFQUEwRCxNQUExRDtBQUNILEtBTEQsTUFLTztBQUNIZ1Usa0JBQVVDLFFBQVYsQ0FBbUIsT0FBbkIsRUFBNEJsVSxJQUE1QixDQUFpQyxpQkFBakMsRUFBb0RnRyxPQUFwRCxDQUE0RCxPQUE1RDtBQUNBaU8sa0JBQVU3USxRQUFWLENBQW1CLE1BQW5CO0FBQ0E0USxrQkFBVS9ULElBQVYsQ0FBZSxlQUFmLEVBQWdDLE1BQWhDO0FBQ0E4VCxvQkFBWS9ULElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDQyxJQUF0QyxDQUEyQyxhQUEzQyxFQUEwRCxNQUExRDtBQUNBOFQsb0JBQVkvVCxJQUFaLENBQWlCLG1CQUFqQixFQUFzQ0MsSUFBdEMsQ0FBMkMsYUFBM0MsRUFBMEQsT0FBMUQ7QUFDSDtBQUNKLENBbEJEOztBQW9CQTtBQUNBLHNCQUFFcEIsUUFBRixFQUFZc1YsS0FBWixDQUFrQixVQUFDTCxDQUFELEVBQU87QUFDckIsUUFBSSxzQkFBRSxpQkFBRixFQUFxQnRULE1BQXpCLEVBQWlDO0FBQzdCLDhCQUFFLDRDQUFGLEVBQWdEd0YsT0FBaEQsQ0FBd0QsT0FBeEQ7QUFDSDtBQUNKLENBSkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0Esd0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XHJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgJCgnLmMtcG9zdF9fZ2FsbGVyeScpLnNsaWNrKHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICB9KTtcclxufSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuLy9BZGQgb3BlbiBjbGFzcyB0byBtZW51IGxpbmtzIHRvIGNvbnRyb2wgZGlzcGxheSBwcm9wZXJ0eSBmbGV4IG9yIGJsb2NrIGFuZCBjbG9zZSBjbG9zZSBzdWJtZW51cyBub3QgaW4gZm9jdXNcclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcclxuICAgIGlmICghJChlLmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoJy5zdWItbWVudScpLmxlbmd0aCkge1xyXG4gICAgICAgICQoJy5tZW51ID4gIC5tZW51LWl0ZW0ub3BlbicpLmZpbmQoJz4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vLy9PbiBjbGlja2luZyBhbiBvcGVuIHN1Ym1lbnUgZmluZCBzaG93L2hpZGUgY2xhc3NlcyBhbmQgYXBwbHkgYXJpYSBoaWRkZW4gbG9naWMgdXNpbmcgcGFyZW50IHNpYmxpbmcgZG9tIGNvbnRyb2xcclxuLy9PbiBjbGljayBjaGFuZ2UgYXJpYSBoaWRkZW4gYW5kIGFyaWEgZXhwYW5kZWQgYXR0cmlidXRlcyB0byBvcHBvc2l0ZSB0byBlbmFibGUgc2NyZWVuIHJlYWRlciBhY2Nlc3NcclxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKTtcclxuICAgIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KCk7XHJcbiAgICBpZiAobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICBtZW51X2l0ZW0uYWRkKG1lbnVfaXRlbS5maW5kKCcubWVudS1pdGVtLm9wZW4nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBtZW51X2xpbmsuYWRkKG1lbnVfaXRlbS5maW5kKCdhJykpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIG1lbnVfbGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy9JZiBhIHVzZXIgY2xpY2tzIGluIHRoZSBwYWdlIGJ1dCBvdXRzaWRlIHRoZSBtZW51IC1jbG9zZSBvcGVuIG1lbnVzXHJcbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XHJcbiAgICBpZiAoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgIH1cclxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9