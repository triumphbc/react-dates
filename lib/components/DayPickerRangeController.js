module.exports =
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _object3 = __webpack_require__(17);

	var _object4 = _interopRequireDefault(_object3);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactMomentProptypes = __webpack_require__(4);

	var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

	var _airbnbPropTypes = __webpack_require__(5);

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _object = __webpack_require__(52);

	var _object2 = _interopRequireDefault(_object);

	var _defaultPhrases = __webpack_require__(8);

	var _getPhrasePropTypes = __webpack_require__(9);

	var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

	var _isTouchDevice = __webpack_require__(26);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _isInclusivelyAfterDay = __webpack_require__(31);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isNextDay = __webpack_require__(53);

	var _isNextDay2 = _interopRequireDefault(_isNextDay);

	var _isSameDay = __webpack_require__(14);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	var _isAfterDay = __webpack_require__(24);

	var _isAfterDay2 = _interopRequireDefault(_isAfterDay);

	var _isBeforeDay = __webpack_require__(54);

	var _isBeforeDay2 = _interopRequireDefault(_isBeforeDay);

	var _getVisibleDays = __webpack_require__(55);

	var _getVisibleDays2 = _interopRequireDefault(_getVisibleDays);

	var _isDayVisible = __webpack_require__(48);

	var _isDayVisible2 = _interopRequireDefault(_isDayVisible);

	var _toISODateString = __webpack_require__(15);

	var _toISODateString2 = _interopRequireDefault(_toISODateString);

	var _toISOMonthString = __webpack_require__(23);

	var _toISOMonthString2 = _interopRequireDefault(_toISOMonthString);

	var _FocusedInputShape = __webpack_require__(56);

	var _FocusedInputShape2 = _interopRequireDefault(_FocusedInputShape);

	var _ScrollableOrientationShape = __webpack_require__(16);

	var _ScrollableOrientationShape2 = _interopRequireDefault(_ScrollableOrientationShape);

	var _constants = __webpack_require__(11);

	var _DayPicker = __webpack_require__(57);

	var _DayPicker2 = _interopRequireDefault(_DayPicker);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
	  startDate: _reactMomentProptypes2['default'].momentObj,
	  endDate: _reactMomentProptypes2['default'].momentObj,
	  onDatesChange: _propTypes2['default'].func,

	  focusedInput: _FocusedInputShape2['default'],
	  onFocusChange: _propTypes2['default'].func,
	  onClose: _propTypes2['default'].func,

	  keepOpenOnDateSelect: _propTypes2['default'].bool,
	  minimumNights: _propTypes2['default'].number,
	  isOutsideRange: _propTypes2['default'].func,
	  isDayBlocked: _propTypes2['default'].func,
	  isDayHighlighted: _propTypes2['default'].func,

	  // DayPicker props
	  renderMonth: _propTypes2['default'].func,
	  enableOutsideDays: _propTypes2['default'].bool,
	  numberOfMonths: _propTypes2['default'].number,
	  orientation: _ScrollableOrientationShape2['default'],
	  withPortal: _propTypes2['default'].bool,
	  initialVisibleMonth: _propTypes2['default'].func,
	  hideKeyboardShortcutsPanel: _propTypes2['default'].bool,
	  daySize: _airbnbPropTypes.nonNegativeInteger,

	  navPrev: _propTypes2['default'].node,
	  navNext: _propTypes2['default'].node,

	  onPrevMonthClick: _propTypes2['default'].func,
	  onNextMonthClick: _propTypes2['default'].func,
	  onOutsideClick: _propTypes2['default'].func,
	  renderDay: _propTypes2['default'].func,
	  renderCalendarInfo: _propTypes2['default'].func,

	  // accessibility
	  onBlur: _propTypes2['default'].func,
	  isFocused: _propTypes2['default'].bool,
	  showKeyboardShortcuts: _propTypes2['default'].bool,

	  // i18n
	  monthFormat: _propTypes2['default'].string,
	  phrases: _propTypes2['default'].shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.DayPickerPhrases)),

	  isRTL: _propTypes2['default'].bool
	});

	var defaultProps = {
	  startDate: undefined, // TODO: use null
	  endDate: undefined, // TODO: use null
	  onDatesChange: function () {
	    function onDatesChange() {}

	    return onDatesChange;
	  }(),

	  focusedInput: null,
	  onFocusChange: function () {
	    function onFocusChange() {}

	    return onFocusChange;
	  }(),
	  onClose: function () {
	    function onClose() {}

	    return onClose;
	  }(),

	  keepOpenOnDateSelect: false,
	  minimumNights: 1,
	  isOutsideRange: function () {
	    function isOutsideRange() {}

	    return isOutsideRange;
	  }(),
	  isDayBlocked: function () {
	    function isDayBlocked() {}

	    return isDayBlocked;
	  }(),
	  isDayHighlighted: function () {
	    function isDayHighlighted() {}

	    return isDayHighlighted;
	  }(),

	  // DayPicker props
	  renderMonth: null,
	  enableOutsideDays: false,
	  numberOfMonths: 1,
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  withPortal: false,
	  hideKeyboardShortcutsPanel: false,
	  initialVisibleMonth: _DayPicker.defaultProps.initialVisibleMonth,
	  daySize: _constants.DAY_SIZE,

	  navPrev: null,
	  navNext: null,

	  onPrevMonthClick: function () {
	    function onPrevMonthClick() {}

	    return onPrevMonthClick;
	  }(),
	  onNextMonthClick: function () {
	    function onNextMonthClick() {}

	    return onNextMonthClick;
	  }(),
	  onOutsideClick: function () {
	    function onOutsideClick() {}

	    return onOutsideClick;
	  }(),

	  renderDay: null,
	  renderCalendarInfo: null,

	  // accessibility
	  onBlur: function () {
	    function onBlur() {}

	    return onBlur;
	  }(),

	  isFocused: false,
	  showKeyboardShortcuts: false,

	  // i18n
	  monthFormat: 'MMMM YYYY',
	  phrases: _defaultPhrases.DayPickerPhrases,

	  isRTL: false
	};

	var DayPickerRangeController = function (_React$Component) {
	  _inherits(DayPickerRangeController, _React$Component);

	  function DayPickerRangeController(props) {
	    _classCallCheck(this, DayPickerRangeController);

	    var _this = _possibleConstructorReturn(this, (DayPickerRangeController.__proto__ || Object.getPrototypeOf(DayPickerRangeController)).call(this, props));

	    _this.isTouchDevice = (0, _isTouchDevice2['default'])();
	    _this.today = (0, _moment2['default'])();
	    _this.modifiers = {
	      today: function () {
	        function today(day) {
	          return _this.isToday(day);
	        }

	        return today;
	      }(),
	      blocked: function () {
	        function blocked(day) {
	          return _this.isBlocked(day);
	        }

	        return blocked;
	      }(),
	      'blocked-calendar': function () {
	        function blockedCalendar(day) {
	          return props.isDayBlocked(day);
	        }

	        return blockedCalendar;
	      }(),
	      'blocked-out-of-range': function () {
	        function blockedOutOfRange(day) {
	          return props.isOutsideRange(day);
	        }

	        return blockedOutOfRange;
	      }(),
	      'highlighted-calendar': function () {
	        function highlightedCalendar(day) {
	          return props.isDayHighlighted(day);
	        }

	        return highlightedCalendar;
	      }(),
	      valid: function () {
	        function valid(day) {
	          return !_this.isBlocked(day);
	        }

	        return valid;
	      }(),
	      'selected-start': function () {
	        function selectedStart(day) {
	          return _this.isStartDate(day);
	        }

	        return selectedStart;
	      }(),
	      'selected-end': function () {
	        function selectedEnd(day) {
	          return _this.isEndDate(day);
	        }

	        return selectedEnd;
	      }(),
	      'blocked-minimum-nights': function () {
	        function blockedMinimumNights(day) {
	          return _this.doesNotMeetMinimumNights(day);
	        }

	        return blockedMinimumNights;
	      }(),
	      'selected-span': function () {
	        function selectedSpan(day) {
	          return _this.isInSelectedSpan(day);
	        }

	        return selectedSpan;
	      }(),
	      'last-in-range': function () {
	        function lastInRange(day) {
	          return _this.isLastInRange(day);
	        }

	        return lastInRange;
	      }(),
	      hovered: function () {
	        function hovered(day) {
	          return _this.isHovered(day);
	        }

	        return hovered;
	      }(),
	      'hovered-span': function () {
	        function hoveredSpan(day) {
	          return _this.isInHoveredSpan(day);
	        }

	        return hoveredSpan;
	      }(),
	      'after-hovered-start': function () {
	        function afterHoveredStart(day) {
	          return _this.isDayAfterHoveredStartDate(day);
	        }

	        return afterHoveredStart;
	      }()
	    };

	    var _this$getStateForNewM = _this.getStateForNewMonth(props);

	    var currentMonth = _this$getStateForNewM.currentMonth;
	    var visibleDays = _this$getStateForNewM.visibleDays;

	    _this.state = {
	      hoverDate: null,
	      currentMonth: currentMonth,
	      phrases: props.phrases,
	      visibleDays: visibleDays
	    };

	    _this.onDayClick = _this.onDayClick.bind(_this);
	    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
	    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
	    _this.onPrevMonthClick = _this.onPrevMonthClick.bind(_this);
	    _this.onNextMonthClick = _this.onNextMonthClick.bind(_this);
	    _this.onMultiplyScrollableMonths = _this.onMultiplyScrollableMonths.bind(_this);
	    _this.getFirstFocusableDay = _this.getFirstFocusableDay.bind(_this);
	    return _this;
	  }

	  _createClass(DayPickerRangeController, [{
	    key: 'componentWillReceiveProps',
	    value: function () {
	      function componentWillReceiveProps(nextProps) {
	        var _this2 = this;

	        var startDate = nextProps.startDate;
	        var endDate = nextProps.endDate;
	        var focusedInput = nextProps.focusedInput;
	        var minimumNights = nextProps.minimumNights;
	        var isOutsideRange = nextProps.isOutsideRange;
	        var isDayBlocked = nextProps.isDayBlocked;
	        var isDayHighlighted = nextProps.isDayHighlighted;
	        var phrases = nextProps.phrases;
	        var initialVisibleMonth = nextProps.initialVisibleMonth;
	        var numberOfMonths = nextProps.numberOfMonths;
	        var enableOutsideDays = nextProps.enableOutsideDays;
	        var visibleDays = this.state.visibleDays;

	        if (isOutsideRange !== this.props.isOutsideRange) {
	          this.modifiers['blocked-out-of-range'] = function (day) {
	            return isOutsideRange(day);
	          };
	        }

	        if (isDayBlocked !== this.props.isDayBlocked) {
	          this.modifiers['blocked-calendar'] = function (day) {
	            return isDayBlocked(day);
	          };
	        }

	        if (isDayHighlighted !== this.props.isDayHighlighted) {
	          this.modifiers['highlighted-calendar'] = function (day) {
	            return isDayHighlighted(day);
	          };
	        }

	        var didStartDateChange = startDate !== this.props.startDate;
	        var didEndDateChange = endDate !== this.props.endDate;
	        var didFocusChange = focusedInput !== this.props.focusedInput;

	        if ((initialVisibleMonth !== this.props.initialVisibleMonth || numberOfMonths !== this.props.numberOfMonths || enableOutsideDays !== this.props.enableOutsideDays) && !this.props.focusedInput && didFocusChange) {
	          var newMonthState = this.getStateForNewMonth(nextProps);
	          var currentMonth = newMonthState.currentMonth;
	          visibleDays = newMonthState.visibleDays;
	          this.setState({
	            currentMonth: currentMonth,
	            visibleDays: visibleDays
	          });
	        }

	        var modifiers = {};

	        if (didStartDateChange) {
	          modifiers = this.deleteModifier(modifiers, this.props.startDate, 'selected-start');
	          modifiers = this.addModifier(modifiers, startDate, 'selected-start');
	        }

	        if (didEndDateChange) {
	          modifiers = this.deleteModifier(modifiers, this.props.endDate, 'selected-end');
	          modifiers = this.addModifier(modifiers, endDate, 'selected-end');
	        }

	        if (didStartDateChange || didEndDateChange) {
	          if (this.props.startDate && this.props.endDate) {
	            modifiers = this.deleteModifierFromRange(modifiers, this.props.startDate, this.props.endDate.clone().add(1, 'day'), 'selected-span');
	          }

	          if (startDate && endDate) {
	            modifiers = this.deleteModifierFromRange(modifiers, startDate, endDate, 'hovered-span');

	            modifiers = this.addModifierToRange(modifiers, startDate.clone().add(1, 'day'), endDate, 'selected-span');
	          }
	        }

	        if (!this.isTouchDevice && didStartDateChange && startDate && !endDate) {
	          var startSpan = startDate.clone().add(1, 'day');
	          var endSpan = startDate.clone().add(minimumNights + 1, 'days');
	          modifiers = this.addModifierToRange(modifiers, startSpan, endSpan, 'after-hovered-start');
	        }

	        if (minimumNights > 0 || minimumNights !== this.props.minimumNights) {
	          if (didFocusChange || didStartDateChange) {
	            var _startSpan = this.props.startDate ? this.props.startDate : this.today;
	            modifiers = this.deleteModifierFromRange(modifiers, _startSpan, _startSpan.clone().add(minimumNights, 'days'), 'blocked-minimum-nights');
	          }

	          if (startDate && focusedInput === _constants.END_DATE) {
	            modifiers = this.addModifierToRange(modifiers, startDate, startDate.clone().add(minimumNights, 'days'), 'blocked-minimum-nights');
	          }
	        }

	        if (didFocusChange) {
	          (0, _object2['default'])(visibleDays).forEach(function (days) {
	            Object.keys(days).forEach(function (day) {
	              var momentObj = (0, _moment2['default'])(day);
	              if (isDayBlocked(momentObj)) {
	                modifiers = _this2.addModifier(modifiers, momentObj, 'blocked-calendar');
	              } else {
	                modifiers = _this2.deleteModifier(modifiers, momentObj, 'blocked-calendar');
	              }

	              if (isDayHighlighted(momentObj)) {
	                modifiers = _this2.addModifier(modifiers, momentObj, 'highlighted-calendar');
	              } else {
	                modifiers = _this2.deleteModifier(modifiers, momentObj, 'highlighted-calendar');
	              }
	            });
	          });
	        }

	        var today = (0, _moment2['default'])();
	        if (!(0, _isSameDay2['default'])(this.today, today)) {
	          modifiers = this.deleteModifier(modifiers, this.today, 'today');
	          modifiers = this.addModifier(modifiers, today, 'today');
	          this.today = today;
	        }

	        if (Object.keys(modifiers).length > 0) {
	          this.setState({
	            visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
	          });
	        }

	        if (didFocusChange || phrases !== this.props.phrases) {
	          // set the appropriate CalendarDay phrase based on focusedInput
	          var chooseAvailableDate = phrases.chooseAvailableDate;
	          if (focusedInput === _constants.START_DATE) {
	            chooseAvailableDate = phrases.chooseAvailableStartDate;
	          } else if (focusedInput === _constants.END_DATE) {
	            chooseAvailableDate = phrases.chooseAvailableEndDate;
	          }

	          this.setState({
	            phrases: (0, _object4['default'])({}, phrases, {
	              chooseAvailableDate: chooseAvailableDate
	            })
	          });
	        }
	      }

	      return componentWillReceiveProps;
	    }()
	  }, {
	    key: 'onDayClick',
	    value: function () {
	      function onDayClick(day, e) {
	        var _props = this.props;
	        var keepOpenOnDateSelect = _props.keepOpenOnDateSelect;
	        var minimumNights = _props.minimumNights;
	        var onBlur = _props.onBlur;

	        if (e) e.preventDefault();
	        if (this.isBlocked(day)) return;

	        var _props2 = this.props;
	        var focusedInput = _props2.focusedInput;
	        var onFocusChange = _props2.onFocusChange;
	        var onClose = _props2.onClose;
	        var _props3 = this.props;
	        var startDate = _props3.startDate;
	        var endDate = _props3.endDate;

	        if (focusedInput === _constants.START_DATE) {
	          onFocusChange(_constants.END_DATE);

	          startDate = day;

	          if ((0, _isInclusivelyAfterDay2['default'])(day, endDate)) {
	            endDate = null;
	          }
	        } else if (focusedInput === _constants.END_DATE) {
	          var firstAllowedEndDate = startDate && startDate.clone().add(minimumNights, 'days');

	          if (!startDate) {
	            endDate = day;
	            onFocusChange(_constants.START_DATE);
	          } else if ((0, _isInclusivelyAfterDay2['default'])(day, firstAllowedEndDate)) {
	            endDate = day;
	            if (!keepOpenOnDateSelect) {
	              onFocusChange(null);
	              onClose({ startDate: startDate, endDate: endDate });
	            }
	          } else {
	            startDate = day;
	            endDate = null;
	          }
	        }

	        this.props.onDatesChange({ startDate: startDate, endDate: endDate });
	        onBlur();
	      }

	      return onDayClick;
	    }()
	  }, {
	    key: 'onDayMouseEnter',
	    value: function () {
	      function onDayMouseEnter(day) {
	        if (this.isTouchDevice) return;
	        var _props4 = this.props;
	        var startDate = _props4.startDate;
	        var endDate = _props4.endDate;
	        var focusedInput = _props4.focusedInput;
	        var minimumNights = _props4.minimumNights;
	        var _state = this.state;
	        var hoverDate = _state.hoverDate;
	        var visibleDays = _state.visibleDays;

	        if (focusedInput) {
	          var modifiers = {};
	          modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');
	          modifiers = this.addModifier(modifiers, day, 'hovered');

	          if (startDate && !endDate && focusedInput === _constants.END_DATE) {
	            if ((0, _isAfterDay2['default'])(hoverDate, startDate)) {
	              var endSpan = hoverDate.clone().add(1, 'day');
	              modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
	            }

	            if (!this.isBlocked(day) && (0, _isAfterDay2['default'])(day, startDate)) {
	              var _endSpan = day.clone().add(1, 'day');
	              modifiers = this.addModifierToRange(modifiers, startDate, _endSpan, 'hovered-span');
	            }
	          }

	          if (!startDate && endDate && focusedInput === _constants.START_DATE) {
	            if ((0, _isBeforeDay2['default'])(hoverDate, endDate)) {
	              modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
	            }

	            if (!this.isBlocked(day) && (0, _isBeforeDay2['default'])(day, endDate)) {
	              modifiers = this.addModifierToRange(modifiers, day, endDate, 'hovered-span');
	            }
	          }

	          if (startDate) {
	            var startSpan = startDate.clone().add(1, 'day');
	            var _endSpan2 = startDate.clone().add(minimumNights + 1, 'days');
	            modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan2, 'after-hovered-start');

	            if ((0, _isSameDay2['default'])(day, startDate)) {
	              var newStartSpan = startDate.clone().add(1, 'day');
	              var newEndSpan = startDate.clone().add(minimumNights + 1, 'days');
	              modifiers = this.addModifierToRange(modifiers, newStartSpan, newEndSpan, 'after-hovered-start');
	            }
	          }

	          this.setState({
	            hoverDate: day,
	            visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
	          });
	        }
	      }

	      return onDayMouseEnter;
	    }()
	  }, {
	    key: 'onDayMouseLeave',
	    value: function () {
	      function onDayMouseLeave(day) {
	        var _props5 = this.props;
	        var startDate = _props5.startDate;
	        var endDate = _props5.endDate;
	        var minimumNights = _props5.minimumNights;
	        var _state2 = this.state;
	        var hoverDate = _state2.hoverDate;
	        var visibleDays = _state2.visibleDays;

	        if (this.isTouchDevice || !hoverDate) return;

	        var modifiers = {};
	        modifiers = this.deleteModifier(modifiers, hoverDate, 'hovered');

	        if (startDate && !endDate && (0, _isAfterDay2['default'])(hoverDate, startDate)) {
	          var endSpan = hoverDate.clone().add(1, 'day');
	          modifiers = this.deleteModifierFromRange(modifiers, startDate, endSpan, 'hovered-span');
	        }

	        if (!startDate && endDate && (0, _isAfterDay2['default'])(endDate, hoverDate)) {
	          modifiers = this.deleteModifierFromRange(modifiers, hoverDate, endDate, 'hovered-span');
	        }

	        if (startDate && (0, _isSameDay2['default'])(day, startDate)) {
	          var startSpan = startDate.clone().add(1, 'day');
	          var _endSpan3 = startDate.clone().add(minimumNights + 1, 'days');
	          modifiers = this.deleteModifierFromRange(modifiers, startSpan, _endSpan3, 'after-hovered-start');
	        }

	        this.setState({
	          hoverDate: null,
	          visibleDays: (0, _object4['default'])({}, visibleDays, modifiers)
	        });
	      }

	      return onDayMouseLeave;
	    }()
	  }, {
	    key: 'onPrevMonthClick',
	    value: function () {
	      function onPrevMonthClick() {
	        var _props6 = this.props;
	        var onPrevMonthClick = _props6.onPrevMonthClick;
	        var numberOfMonths = _props6.numberOfMonths;
	        var enableOutsideDays = _props6.enableOutsideDays;
	        var _state3 = this.state;
	        var currentMonth = _state3.currentMonth;
	        var visibleDays = _state3.visibleDays;

	        var newVisibleDays = {};
	        Object.keys(visibleDays).sort().slice(0, numberOfMonths + 1).forEach(function (month) {
	          newVisibleDays[month] = visibleDays[month];
	        });

	        var prevMonth = currentMonth.clone().subtract(2, 'months');
	        var prevMonthVisibleDays = (0, _getVisibleDays2['default'])(prevMonth, 1, enableOutsideDays, true);

	        this.setState({
	          currentMonth: currentMonth.clone().subtract(1, 'month'),
	          visibleDays: (0, _object4['default'])({}, newVisibleDays, this.getModifiers(prevMonthVisibleDays))
	        });

	        onPrevMonthClick();
	      }

	      return onPrevMonthClick;
	    }()
	  }, {
	    key: 'onNextMonthClick',
	    value: function () {
	      function onNextMonthClick() {
	        var _props7 = this.props;
	        var onNextMonthClick = _props7.onNextMonthClick;
	        var numberOfMonths = _props7.numberOfMonths;
	        var enableOutsideDays = _props7.enableOutsideDays;
	        var _state4 = this.state;
	        var currentMonth = _state4.currentMonth;
	        var visibleDays = _state4.visibleDays;

	        var newVisibleDays = {};
	        Object.keys(visibleDays).sort().slice(1).forEach(function (month) {
	          newVisibleDays[month] = visibleDays[month];
	        });

	        var nextMonth = currentMonth.clone().add(numberOfMonths + 1, 'month');
	        var nextMonthVisibleDays = (0, _getVisibleDays2['default'])(nextMonth, 1, enableOutsideDays, true);

	        this.setState({
	          currentMonth: currentMonth.clone().add(1, 'month'),
	          visibleDays: (0, _object4['default'])({}, newVisibleDays, this.getModifiers(nextMonthVisibleDays))
	        });

	        onNextMonthClick();
	      }

	      return onNextMonthClick;
	    }()
	  }, {
	    key: 'onMultiplyScrollableMonths',
	    value: function () {
	      function onMultiplyScrollableMonths() {
	        var _props8 = this.props;
	        var numberOfMonths = _props8.numberOfMonths;
	        var enableOutsideDays = _props8.enableOutsideDays;
	        var _state5 = this.state;
	        var currentMonth = _state5.currentMonth;
	        var visibleDays = _state5.visibleDays;

	        var numberOfVisibleMonths = Object.keys(visibleDays).length;
	        var nextMonth = currentMonth.clone().add(numberOfVisibleMonths, 'month');
	        var newVisibleDays = (0, _getVisibleDays2['default'])(nextMonth, numberOfMonths, enableOutsideDays, true);

	        this.setState({
	          visibleDays: (0, _object4['default'])({}, visibleDays, this.getModifiers(newVisibleDays))
	        });
	      }

	      return onMultiplyScrollableMonths;
	    }()
	  }, {
	    key: 'getFirstFocusableDay',
	    value: function () {
	      function getFirstFocusableDay(newMonth) {
	        var _this3 = this;

	        var _props9 = this.props;
	        var startDate = _props9.startDate;
	        var endDate = _props9.endDate;
	        var focusedInput = _props9.focusedInput;
	        var minimumNights = _props9.minimumNights;
	        var numberOfMonths = _props9.numberOfMonths;

	        var focusedDate = newMonth.clone().startOf('month');
	        if (focusedInput === _constants.START_DATE && startDate) {
	          focusedDate = startDate.clone();
	        } else if (focusedInput === _constants.END_DATE && !endDate && startDate) {
	          focusedDate = startDate.clone().add(minimumNights, 'days');
	        } else if (focusedInput === _constants.END_DATE && endDate) {
	          focusedDate = endDate.clone();
	        }

	        if (this.isBlocked(focusedDate)) {
	          var days = [];
	          var lastVisibleDay = newMonth.clone().add(numberOfMonths - 1, 'months').endOf('month');
	          var currentDay = focusedDate.clone();
	          while (!(0, _isAfterDay2['default'])(currentDay, lastVisibleDay)) {
	            currentDay = currentDay.clone().add(1, 'day');
	            days.push(currentDay);
	          }

	          var viableDays = days.filter(function (day) {
	            return !_this3.isBlocked(day);
	          });

	          if (viableDays.length > 0) focusedDate = viableDays[0];
	        }

	        return focusedDate;
	      }

	      return getFirstFocusableDay;
	    }()
	  }, {
	    key: 'getModifiers',
	    value: function () {
	      function getModifiers(visibleDays) {
	        var _this4 = this;

	        var modifiers = {};
	        Object.keys(visibleDays).forEach(function (month) {
	          modifiers[month] = {};
	          visibleDays[month].forEach(function (day) {
	            modifiers[month][(0, _toISODateString2['default'])(day)] = _this4.getModifiersForDay(day);
	          });
	        });

	        return modifiers;
	      }

	      return getModifiers;
	    }()
	  }, {
	    key: 'getModifiersForDay',
	    value: function () {
	      function getModifiersForDay(day) {
	        var _this5 = this;

	        return new Set(Object.keys(this.modifiers).filter(function (modifier) {
	          return _this5.modifiers[modifier](day);
	        }));
	      }

	      return getModifiersForDay;
	    }()
	  }, {
	    key: 'getStateForNewMonth',
	    value: function () {
	      function getStateForNewMonth(nextProps) {
	        var initialVisibleMonth = nextProps.initialVisibleMonth;
	        var numberOfMonths = nextProps.numberOfMonths;
	        var enableOutsideDays = nextProps.enableOutsideDays;
	        var orientation = nextProps.orientation;

	        var currentMonth = initialVisibleMonth();
	        var withoutTransitionMonths = orientation === _constants.VERTICAL_SCROLLABLE;
	        var visibleDays = this.getModifiers((0, _getVisibleDays2['default'])(currentMonth, numberOfMonths, enableOutsideDays, withoutTransitionMonths));
	        return { currentMonth: currentMonth, visibleDays: visibleDays };
	      }

	      return getStateForNewMonth;
	    }()
	  }, {
	    key: 'addModifier',
	    value: function () {
	      function addModifier(updatedDays, day, modifier) {
	        var _props10 = this.props;
	        var numberOfMonths = _props10.numberOfMonths;
	        var enableOutsideDays = _props10.enableOutsideDays;
	        var _state6 = this.state;
	        var currentMonth = _state6.currentMonth;
	        var visibleDays = _state6.visibleDays;

	        if (!day || !(0, _isDayVisible2['default'])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
	          return updatedDays;
	        }
	        var monthIso = (0, _toISOMonthString2['default'])(day);
	        var month = updatedDays[monthIso] || visibleDays[monthIso];
	        var iso = (0, _toISODateString2['default'])(day);

	        if (enableOutsideDays) {
	          var startOfMonth = day.clone().startOf('month');
	          var endOfMonth = day.clone().endOf('month');
	          if ((0, _isBeforeDay2['default'])(startOfMonth, currentMonth.clone().startOf('month')) || (0, _isAfterDay2['default'])(endOfMonth, currentMonth.clone().endOf('month'))) {
	            monthIso = Object.keys(visibleDays).filter(function (monthKey) {
	              return monthKey !== monthIso && Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
	            })[0];
	            month = updatedDays[monthIso] || visibleDays[monthIso];
	          }
	        }

	        var modifiers = new Set(month[iso]);
	        modifiers.add(modifier);
	        return (0, _object4['default'])({}, updatedDays, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
	      }

	      return addModifier;
	    }()
	  }, {
	    key: 'addModifierToRange',
	    value: function () {
	      function addModifierToRange(updatedDays, start, end, modifier) {
	        var days = updatedDays;

	        var spanStart = start.clone();
	        while ((0, _isBeforeDay2['default'])(spanStart, end)) {
	          days = this.addModifier(days, spanStart, modifier);
	          spanStart = spanStart.clone().add(1, 'day');
	        }

	        return days;
	      }

	      return addModifierToRange;
	    }()
	  }, {
	    key: 'deleteModifier',
	    value: function () {
	      function deleteModifier(updatedDays, day, modifier) {
	        var _props11 = this.props;
	        var numberOfMonths = _props11.numberOfMonths;
	        var enableOutsideDays = _props11.enableOutsideDays;
	        var _state7 = this.state;
	        var currentMonth = _state7.currentMonth;
	        var visibleDays = _state7.visibleDays;

	        if (!day || !(0, _isDayVisible2['default'])(day, currentMonth, numberOfMonths, enableOutsideDays)) {
	          return updatedDays;
	        }

	        var monthIso = (0, _toISOMonthString2['default'])(day);
	        var month = updatedDays[monthIso] || visibleDays[monthIso];
	        var iso = (0, _toISODateString2['default'])(day);
	        if (enableOutsideDays) {
	          var startOfMonth = day.clone().startOf('month');
	          var endOfMonth = day.clone().endOf('month');
	          if ((0, _isBeforeDay2['default'])(startOfMonth, currentMonth.clone().startOf('month')) || (0, _isAfterDay2['default'])(endOfMonth, currentMonth.clone().endOf('month'))) {
	            monthIso = Object.keys(visibleDays).filter(function (monthKey) {
	              return monthKey !== monthIso && Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
	            })[0];
	            month = updatedDays[monthIso] || visibleDays[monthIso];
	          }
	        }

	        var modifiers = new Set(month[iso]);
	        modifiers['delete'](modifier);
	        return (0, _object4['default'])({}, updatedDays, _defineProperty({}, monthIso, (0, _object4['default'])({}, month, _defineProperty({}, iso, modifiers))));
	      }

	      return deleteModifier;
	    }()
	  }, {
	    key: 'deleteModifierFromRange',
	    value: function () {
	      function deleteModifierFromRange(updatedDays, start, end, modifier) {
	        var days = updatedDays;

	        var spanStart = start.clone();
	        while ((0, _isBeforeDay2['default'])(spanStart, end)) {
	          days = this.deleteModifier(days, spanStart, modifier);
	          spanStart = spanStart.clone().add(1, 'day');
	        }

	        return days;
	      }

	      return deleteModifierFromRange;
	    }()
	  }, {
	    key: 'doesNotMeetMinimumNights',
	    value: function () {
	      function doesNotMeetMinimumNights(day) {
	        var _props12 = this.props;
	        var startDate = _props12.startDate;
	        var isOutsideRange = _props12.isOutsideRange;
	        var focusedInput = _props12.focusedInput;
	        var minimumNights = _props12.minimumNights;

	        if (focusedInput !== _constants.END_DATE) return false;

	        if (startDate) {
	          var dayDiff = day.diff(startDate.clone().startOf('day').hour(12), 'days');
	          return dayDiff < minimumNights && dayDiff >= 0;
	        }
	        return isOutsideRange((0, _moment2['default'])(day).subtract(minimumNights, 'days'));
	      }

	      return doesNotMeetMinimumNights;
	    }()
	  }, {
	    key: 'isDayAfterHoveredStartDate',
	    value: function () {
	      function isDayAfterHoveredStartDate(day) {
	        var _props13 = this.props;
	        var startDate = _props13.startDate;
	        var endDate = _props13.endDate;
	        var minimumNights = _props13.minimumNights;

	        var _ref = this.state || {};

	        var hoverDate = _ref.hoverDate;

	        return !!startDate && !endDate && !this.isBlocked(day) && (0, _isNextDay2['default'])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay2['default'])(hoverDate, startDate);
	      }

	      return isDayAfterHoveredStartDate;
	    }()
	  }, {
	    key: 'isEndDate',
	    value: function () {
	      function isEndDate(day) {
	        return (0, _isSameDay2['default'])(day, this.props.endDate);
	      }

	      return isEndDate;
	    }()
	  }, {
	    key: 'isHovered',
	    value: function () {
	      function isHovered(day) {
	        var _ref2 = this.state || {};

	        var hoverDate = _ref2.hoverDate;
	        var focusedInput = this.props.focusedInput;

	        return !!focusedInput && (0, _isSameDay2['default'])(day, hoverDate);
	      }

	      return isHovered;
	    }()
	  }, {
	    key: 'isInHoveredSpan',
	    value: function () {
	      function isInHoveredSpan(day) {
	        var _props14 = this.props;
	        var startDate = _props14.startDate;
	        var endDate = _props14.endDate;

	        var _ref3 = this.state || {};

	        var hoverDate = _ref3.hoverDate;

	        var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay2['default'])(hoverDate, day));
	        var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay2['default'])(hoverDate, day));

	        var isValidDayHovered = hoverDate && !this.isBlocked(hoverDate);

	        return (isForwardRange || isBackwardRange) && isValidDayHovered;
	      }

	      return isInHoveredSpan;
	    }()
	  }, {
	    key: 'isInSelectedSpan',
	    value: function () {
	      function isInSelectedSpan(day) {
	        var _props15 = this.props;
	        var startDate = _props15.startDate;
	        var endDate = _props15.endDate;

	        return day.isBetween(startDate, endDate);
	      }

	      return isInSelectedSpan;
	    }()
	  }, {
	    key: 'isLastInRange',
	    value: function () {
	      function isLastInRange(day) {
	        return this.isInSelectedSpan(day) && (0, _isNextDay2['default'])(day, this.props.endDate);
	      }

	      return isLastInRange;
	    }()
	  }, {
	    key: 'isStartDate',
	    value: function () {
	      function isStartDate(day) {
	        return (0, _isSameDay2['default'])(day, this.props.startDate);
	      }

	      return isStartDate;
	    }()
	  }, {
	    key: 'isBlocked',
	    value: function () {
	      function isBlocked(day) {
	        var _props16 = this.props;
	        var isDayBlocked = _props16.isDayBlocked;
	        var isOutsideRange = _props16.isOutsideRange;

	        return isDayBlocked(day) || isOutsideRange(day) || this.doesNotMeetMinimumNights(day);
	      }

	      return isBlocked;
	    }()
	  }, {
	    key: 'isToday',
	    value: function () {
	      function isToday(day) {
	        return (0, _isSameDay2['default'])(day, this.today);
	      }

	      return isToday;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _this6 = this;

	        var _props17 = this.props;
	        var numberOfMonths = _props17.numberOfMonths;
	        var orientation = _props17.orientation;
	        var monthFormat = _props17.monthFormat;
	        var renderMonth = _props17.renderMonth;
	        var navPrev = _props17.navPrev;
	        var navNext = _props17.navNext;
	        var onOutsideClick = _props17.onOutsideClick;
	        var withPortal = _props17.withPortal;
	        var enableOutsideDays = _props17.enableOutsideDays;
	        var initialVisibleMonth = _props17.initialVisibleMonth;
	        var hideKeyboardShortcutsPanel = _props17.hideKeyboardShortcutsPanel;
	        var daySize = _props17.daySize;
	        var focusedInput = _props17.focusedInput;
	        var renderDay = _props17.renderDay;
	        var renderCalendarInfo = _props17.renderCalendarInfo;
	        var onBlur = _props17.onBlur;
	        var isFocused = _props17.isFocused;
	        var showKeyboardShortcuts = _props17.showKeyboardShortcuts;
	        var isRTL = _props17.isRTL;
	        var _state8 = this.state;
	        var phrases = _state8.phrases;
	        var visibleDays = _state8.visibleDays;

	        return _react2['default'].createElement(_DayPicker2['default'], {
	          ref: function () {
	            function ref(_ref4) {
	              _this6.dayPicker = _ref4;
	            }

	            return ref;
	          }(),
	          orientation: orientation,
	          enableOutsideDays: enableOutsideDays,
	          modifiers: visibleDays,
	          numberOfMonths: numberOfMonths,
	          onDayClick: this.onDayClick,
	          onDayMouseEnter: this.onDayMouseEnter,
	          onDayMouseLeave: this.onDayMouseLeave,
	          onPrevMonthClick: this.onPrevMonthClick,
	          onNextMonthClick: this.onNextMonthClick,
	          onMultiplyScrollableMonths: this.onMultiplyScrollableMonths,
	          monthFormat: monthFormat,
	          renderMonth: renderMonth,
	          withPortal: withPortal,
	          hidden: !focusedInput,
	          initialVisibleMonth: initialVisibleMonth,
	          daySize: daySize,
	          onOutsideClick: onOutsideClick,
	          navPrev: navPrev,
	          navNext: navNext,
	          renderDay: renderDay,
	          renderCalendarInfo: renderCalendarInfo,
	          hideKeyboardShortcutsPanel: hideKeyboardShortcutsPanel,
	          isFocused: isFocused,
	          getFirstFocusableDay: this.getFirstFocusableDay,
	          onBlur: onBlur,
	          showKeyboardShortcuts: showKeyboardShortcuts,
	          phrases: phrases,
	          isRTL: isRTL
	        });
	      }

	      return render;
	    }()
	  }]);

	  return DayPickerRangeController;
	}(_react2['default'].Component);

	exports['default'] = DayPickerRangeController;

	DayPickerRangeController.propTypes = propTypes;
	DayPickerRangeController.defaultProps = defaultProps;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("react-moment-proptypes");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("airbnb-prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("moment");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

	module.exports = require("../defaultPhrases");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("../utils/getPhrasePropTypes");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("../../constants");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isSameDay");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("../utils/toISODateString");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("../shapes/ScrollableOrientationShape");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("object.assign");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

	module.exports = require("../utils/toISOMonthString");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isAfterDay");

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isDayVisible");

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports) {

	module.exports = require("object.values");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isNextDay");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = require("../utils/isBeforeDay");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = require("../utils/getVisibleDays");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = require("../shapes/FocusedInputShape");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = require("./DayPicker");

/***/ })
/******/ ]);