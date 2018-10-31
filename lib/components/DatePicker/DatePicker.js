"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof components
                                      * @namespace DatePicker
                                      * @author Steven Jackson
                                     * @scss ../../scss/components/DatePicker
                                      * @example <DatePicker label="DatePicker" inputenabled iconenabled />
                                      */


var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("intl");

require("intl/locale-data/jsonp/en");

var _lib = require("../../lib");

var _Calendar = require("./Calendar.js");

var _Calendar2 = _interopRequireDefault(_Calendar);

require("./DatePicker.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

var DatePicker = (_temp = _class = function (_CoreComponent) {
  _inherits(DatePicker, _CoreComponent);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _initialiseProps.call(_this);

    var value = props.value;

    var date = void 0;
    var dateLocale = void 0;
    var selected = void 0;
    if (!_lodash2.default.isNil(value) && value.indexOf) {
      var dateString = value.indexOf("Z") !== -1 ? value : value + "Z";
      date = new Date(dateString);
      dateLocale = date.toLocaleDateString({ timeZone: tz });
      selected = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    } else {
      date = new Date();
      dateLocale = "";
      selected = {
        day: 0,
        month: 0,
        year: 0
      };
    }
    var renderKey = "input_" + props.uuid;

    _this.state = {
      renderKey: renderKey,
      open: false,
      loadedDate: date,
      value: dateLocale,
      viewYear: date.getFullYear(),
      viewType: "days",
      selectedDate: selected
    };
    return _this;
  }

  // componentWillReceiveProps = nextProps => {
  //   const { value } = nextProps;
  //   this.reset(value);
  // };

  DatePicker.prototype.WillMount = function WillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  };

  DatePicker.prototype.WillUnmount = function WillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  };

  DatePicker.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        id = _getValidProps.id,
        required = _getValidProps.required,
        disabled = _getValidProps.disabled,
        label = _getValidProps.label,
        iconenabled = _getValidProps.iconenabled,
        inputenabled = _getValidProps.inputenabled,
        invalid = _getValidProps.invalid,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var fieldId = id || this.state.renderKey;

    return _react2.default.createElement(
      Component,
      _extends({}, props, { ref: this.onSetRef }),
      this.renderLabel(fieldId, label, required),
      this.renderToggle(id, iconenabled, inputenabled, disabled, invalid),
      this.renderWindow(disabled)
    );
  };

  return DatePicker;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  inputenabled: "bool",
  iconenabled: "bool",
  label: "string",
  expiredlock: "bool"
}), _class.defaultProps = (0, _lib.setPropDefaultsAutoId)({
  renderAs: "div",
  uirole: _lib.ROLE.DATEPICKER,
  label: null,
  inputenabled: false,
  iconenabled: false,
  expiredlock: false
}), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.reset = function (defaultDate) {
    var date = void 0;
    var dateLocale = void 0;
    var selected = void 0;
    if (!_lodash2.default.isNil(defaultDate) && defaultDate.indexOf) {
      var dateProp = defaultDate;
      var dateString = dateProp.indexOf("Z") !== -1 ? dateProp : dateProp + "Z";
      date = new Date(dateString);
      dateLocale = date.toLocaleDateString({ timeZone: tz });
      selected = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    } else {
      date = new Date();
      dateLocale = "";
      selected = {
        day: 0,
        month: 0,
        year: 0
      };
    }
    _this2.setState({
      loadedDate: date,
      value: dateLocale,
      viewType: "days",
      selectedDate: selected
    });
  };

  this.getValue = function () {
    return _this2.state.value;
  };

  this.updateDateValues = function (date, viewType, keepOpen) {
    var _props = _this2.props,
        name = _props.name,
        onSelect = _props.onSelect;

    var value = date.toLocaleDateString({ timeZone: tz });
    var newData = _this2.state;
    newData.loadedDate = date;
    newData.value = value;
    newData.viewType = viewType;
    newData.selectedDate = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
    newData.open = keepOpen;
    _this2.setState(newData);
    if (onSelect) {
      onSelect(date.toISOString(), name);
    }
  };

  this.handleOnToggle = function (e) {
    if ((0, _lib.isModifiedEvent)(e) || !(0, _lib.isLeftClickEvent)(e) || !_this2.state.open) {
      return;
    }
    if (_this2.node && !_this2.node.contains(e.target)) {
      _this2.handleClose(e);
    }
  };

  this.handleClose = function (event, eventDetails) {
    if (!_this2.state.open) {
      return;
    }
    _this2.handleOnClick(event);
  };

  this.handleOnClear = function () {
    var _props2 = _this2.props,
        name = _props2.name,
        onSelect = _props2.onSelect;

    if (onSelect) {
      onSelect(null, name);
    }
    _this2.setState({ open: false });
  };

  this.handleOnChange = function (e) {
    var _props3 = _this2.props,
        name = _props3.name,
        onSelect = _props3.onSelect;

    if (onSelect) {
      onSelect(e.target.value, name);
    }
  };

  this.handleOnClick = function (e) {
    e.preventDefault();
    var open = _this2.state.open;

    _this2.setState({ open: !open });
  };

  this.handlePrevClick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    var t = _this2.state.viewType;
    if (t === "years") {
      var newData = _this2.state;
      newData.viewYear = _this2.state.viewYear - 1;
      if (newData.viewYear >= _Calendar2.default.yearMin) {
        _this2.setState(newData);
      }
    } else {
      var date = _this2.state.loadedDate;
      if (t === "months") {
        date.setYear(date.getFullYear() - 1);
        if (date.getFullYear() < _Calendar2.default.yearMin) {
          return date.setYear(date.getFullYear() + 1);
        }
      } else {
        date.setMonth(date.getMonth() - 1);
        if (date.getFullYear() < _Calendar2.default.yearMin) {
          return date.setMonth(date.getMonth() + 1);
        }
      }
      _this2.updateDateValues(date, t, true);
    }
    return true;
  };

  this.handleNextClick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    var t = _this2.state.viewType;
    if (t === "years") {
      var newData = _this2.state;
      newData.viewYear = _this2.state.viewYear + 1;
      if (newData.viewYear <= _Calendar2.default.yearViewMax) {
        _this2.setState(newData);
      }
    } else {
      var date = _this2.state.loadedDate;
      if (t === "months") {
        date.setYear(date.getFullYear() + 1);
        if (date.getFullYear() > _Calendar2.default.yearMax) {
          return date.setYear(date.getFullYear() - 1);
        }
      } else {
        date.setMonth(date.getMonth() + 1);
        if (date.getFullYear() > _Calendar2.default.yearMax) {
          return date.setMonth(date.getMonth() - 1);
        }
      }
      _this2.updateDateValues(date, t, true);
    }
    return true;
  };

  this.handleViewChange = function (e) {
    e.preventDefault();
    var attr = e.target.attributes;
    _this2.setState({ viewType: attr.viewtype.value });
  };

  this.handleDateChange = function (e) {
    e.preventDefault();
    var attr = e.target.attributes;
    var d = attr.day.value;
    var m = attr.month.value;
    var y = attr.year.value;
    var date = new Date(y, m, d);
    _this2.updateDateValues(date, "days", true);
  };

  this.handleDateSelect = function (e) {
    e.preventDefault();
    var attr = e.target.attributes;
    var d = attr.day.value;
    var m = attr.month.value;
    var y = attr.year.value;
    var t = _this2.state.viewType;
    var date = new Date(y, m, d);
    _this2.updateDateValues(date, t, false);
  };

  this.renderSingleDay = function (monthVal, data) {
    var expiredlock = _this2.props.expiredlock;

    var sd = _this2.state.selectedDate;
    var keyName = data.day + "-" + data.month + "-" + data.year;
    var selectedClass = data.year === sd.year && data.month === sd.month && data.day === sd.day ? " theme-content_active" : "";
    if (expiredlock && !data.enabled || data.month !== monthVal) {
      return _react2.default.createElement(
        "td",
        {
          key: "day-cell_" + keyName,
          className: "ui-datepicker-day-cell ui-datepicker-cell-disabled " + selectedClass
        },
        _react2.default.createElement(
          "span",
          {
            key: "day-button_" + keyName,
            className: "ui-datepicker-day ui-datepicker-disabled " + selectedClass
          },
          data.day
        )
      );
    }
    return _react2.default.createElement(
      "td",
      {
        key: "day-cell_" + keyName,
        className: "ui-datepicker-day-cell theme-content-item " + selectedClass
      },
      _react2.default.createElement(
        "span",
        {
          key: "day-button_" + keyName,
          className: "ui-datepicker-day theme-content-item " + selectedClass,
          day: data.day,
          month: data.month,
          year: data.year,
          onClick: _this2.handleDateSelect,
          onKeyDown: _this2.handleDateSelect,
          role: "presentation"
        },
        data.day
      )
    );
  };

  this.renderSingleWeek = function (monthVal, weekData) {
    return _react2.default.createElement(
      "tr",
      { key: (0, _lib.uID)() },
      _this2.renderSingleDay(monthVal, weekData[0]),
      _this2.renderSingleDay(monthVal, weekData[1]),
      _this2.renderSingleDay(monthVal, weekData[2]),
      _this2.renderSingleDay(monthVal, weekData[3]),
      _this2.renderSingleDay(monthVal, weekData[4]),
      _this2.renderSingleDay(monthVal, weekData[5]),
      _this2.renderSingleDay(monthVal, weekData[6])
    );
  };

  this.renderCalendar = function (monthVal, yearVal) {
    var output = [];
    if (!_lodash2.default.isNil(yearVal) && !_lodash2.default.isNil(_Calendar2.default.data[yearVal])) {
      var monthData = _Calendar2.default.data[yearVal][monthVal];
      if (monthData) {
        for (var i = 0; i < 5; i += 1) {
          output.push(_this2.renderSingleWeek(monthVal, monthData[i]));
        }
      }
    }
    return output;
  };

  this.renderMonthRow = function (value) {
    var monthVal = parseInt(value, 10);
    var date = _this2.state.loadedDate;
    var dayVal = date.getDate();
    var viewMonth = date.getMonth();
    var yearVal = date.getFullYear();
    var class1 = viewMonth === monthVal ? " ui-datepicker-cell-active" : "";
    var class2 = viewMonth === monthVal + 1 ? " ui-datepicker-cell-active" : "";
    var class3 = viewMonth === monthVal + 2 ? " ui-datepicker-cell-active" : "";
    return _react2.default.createElement(
      "tr",
      { key: (0, _lib.uID)() },
      _react2.default.createElement(
        "td",
        { className: "ui-datepicker-month-cell " + class1 },
        _react2.default.createElement(
          "span",
          {
            className: "ui-datepicker-control",
            day: dayVal,
            month: monthVal,
            year: yearVal,
            onClick: _this2.handleDateChange,
            onKeyDown: _this2.handleDateChange,
            role: "presentation"
          },
          _Calendar2.default.monthName[monthVal]
        )
      ),
      _react2.default.createElement(
        "td",
        { className: "ui-datepicker-month-cell " + class2 },
        _react2.default.createElement(
          "span",
          {
            className: "ui-datepicker-control",
            day: dayVal,
            month: monthVal + 1,
            year: yearVal,
            onClick: _this2.handleDateChange,
            onKeyDown: _this2.handleDateChange,
            role: "presentation"
          },
          _Calendar2.default.monthName[monthVal + 1]
        )
      ),
      _react2.default.createElement(
        "td",
        { className: "ui-datepicker-month-cell " + class3 },
        _react2.default.createElement(
          "span",
          {
            className: "ui-datepicker-control",
            day: dayVal,
            month: monthVal + 2,
            year: yearVal,
            onClick: _this2.handleDateChange,
            onKeyDown: _this2.handleDateChange,
            role: "presentation"
          },
          _Calendar2.default.monthName[monthVal + 2]
        )
      )
    );
  };

  this.renderYearRow = function (value) {
    var yearVal = parseInt(value, 10);
    var date = _this2.state.loadedDate;
    var dayVal = date.getDate();
    var monthVal = date.getMonth();
    var viewYear = date.getFullYear();
    var class1 = viewYear === yearVal ? " ui-datepicker-cell-active" : "";
    var class2 = viewYear === yearVal + 1 ? " ui-datepicker-cell-active" : "";
    var class3 = viewYear === yearVal + 2 ? " ui-datepicker-cell-active" : "";
    var class4 = viewYear === yearVal + 3 ? " ui-datepicker-cell-active" : "";
    return _react2.default.createElement(
      "tr",
      { key: (0, _lib.uID)() },
      _react2.default.createElement(
        "td",
        { className: "ui-datepicker-year-cell " + class1 },
        _react2.default.createElement(
          "span",
          {
            className: "ui-datepicker-control",
            day: dayVal,
            month: monthVal,
            year: yearVal,
            onClick: _this2.handleDateChange,
            onKeyDown: _this2.handleDateChange,
            role: "presentation"
          },
          yearVal
        )
      ),
      _react2.default.createElement(
        "td",
        { className: "ui-datepicker-year-cell " + class2 },
        _react2.default.createElement(
          "span",
          {
            className: "ui-datepicker-control",
            day: dayVal,
            month: monthVal,
            year: yearVal + 1,
            onClick: _this2.handleDateChange,
            onKeyDown: _this2.handleDateChange,
            role: "presentation"
          },
          yearVal + 1
        )
      ),
      _react2.default.createElement(
        "td",
        { className: "ui-datepicker-year-cell " + class3 },
        _react2.default.createElement(
          "span",
          {
            className: "ui-datepicker-control",
            day: dayVal,
            month: monthVal,
            year: yearVal + 2,
            onClick: _this2.handleDateChange,
            onKeyDown: _this2.handleDateChange,
            role: "presentation"
          },
          yearVal + 2
        )
      ),
      _react2.default.createElement(
        "td",
        { className: "ui-datepicker-year-cell " + class4 },
        _react2.default.createElement(
          "span",
          {
            className: "ui-datepicker-control",
            day: dayVal,
            month: monthVal,
            year: yearVal + 3,
            onClick: _this2.handleDateChange,
            onKeyDown: _this2.handleDateChange,
            role: "presentation"
          },
          yearVal + 3
        )
      )
    );
  };

  this.renderWindow = function (disabled) {
    if (disabled) {
      return _react2.default.createElement("span", null);
    }
    var activeDate = !_lodash2.default.isNil(_this2.state.loadedDate) ? _this2.state.loadedDate : _Calendar2.default.today;
    var viewMonth = activeDate.getMonth();
    var viewYear = activeDate.getFullYear();
    var windowClass = _this2.state.open ? "ui-datepicker-window open" : "ui-datepicker-window";
    var footer = [];
    if (_this2.state.viewType === "years") {
      viewYear = _this2.state.viewYear;
      var years = [];
      years.push(_this2.renderYearRow(viewYear));
      years.push(_this2.renderYearRow(viewYear + 4));
      years.push(_this2.renderYearRow(viewYear + 8));
      years.push(_this2.renderYearRow(viewYear + 12));
      years.push(_this2.renderYearRow(viewYear + 16));
      years.push(_this2.renderYearRow(viewYear + 20));
      if (!_lodash2.default.isNil(_this2.state.value)) {
        footer.push(_react2.default.createElement(
          "tfoot",
          { key: (0, _lib.uID)() },
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              { colSpan: 4 },
              _react2.default.createElement(
                "span",
                {
                  className: "ui-datepicker-clear",
                  onClick: _this2.handleOnClear,
                  onKeyDown: _this2.handleOnClear,
                  role: "presentation"
                },
                "Remove Selected Date"
              )
            )
          )
        ));
      }
      return _react2.default.createElement(
        "div",
        { className: windowClass },
        _react2.default.createElement(
          "table",
          { className: "ui-datepicker-table" },
          _react2.default.createElement(
            "thead",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "th",
                { className: "ui-datepicker-control-cell" },
                _react2.default.createElement(
                  "span",
                  {
                    className: "ui-datepicker-control",
                    onClick: _this2.handlePrevClick,
                    onKeyDown: _this2.handlePrevClick,
                    role: "presentation"
                  },
                  _react2.default.createElement("i", { className: "ui-icon ui-icon-left" })
                )
              ),
              _react2.default.createElement(
                "th",
                { colSpan: 2, className: "ui-datepicker-header-cell" },
                _react2.default.createElement(
                  "span",
                  { className: "ui-datepicker-control" },
                  "Select a year"
                )
              ),
              _react2.default.createElement(
                "th",
                { className: "ui-datepicker-control-cell" },
                _react2.default.createElement(
                  "span",
                  {
                    className: "ui-datepicker-control",
                    onClick: _this2.handleNextClick,
                    onKeyDown: _this2.handleNextClick,
                    role: "presentation"
                  },
                  _react2.default.createElement("i", { className: "ui-icon ui-icon-right" })
                )
              )
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            years
          ),
          footer
        )
      );
    } else if (_this2.state.viewType === "months") {
      var months = [];
      months.push(_this2.renderMonthRow(0));
      months.push(_this2.renderMonthRow(3));
      months.push(_this2.renderMonthRow(6));
      months.push(_this2.renderMonthRow(9));
      if (!_lodash2.default.isNil(_this2.state.value)) {
        footer.push(_react2.default.createElement(
          "tfoot",
          { key: (0, _lib.uID)() },
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "td",
              { colSpan: 3 },
              _react2.default.createElement(
                "span",
                {
                  className: "ui-datepicker-clear",
                  onClick: function onClick() {},
                  onKeyDown: _this2.handleOnClear,
                  role: "presentation"
                },
                "Remove Selected Date"
              )
            )
          )
        ));
      }
      return _react2.default.createElement(
        "div",
        { className: windowClass },
        _react2.default.createElement(
          "table",
          { className: "ui-datepicker-table" },
          _react2.default.createElement(
            "thead",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "th",
                { className: "ui-datepicker-control-cell" },
                _react2.default.createElement(
                  "span",
                  {
                    className: "ui-datepicker-control",
                    onClick: _this2.handlePrevClick,
                    onKeyDown: _this2.handlePrevClick,
                    role: "presentation"
                  },
                  _react2.default.createElement("i", { className: "ui-icon ui-icon-left" })
                )
              ),
              _react2.default.createElement(
                "th",
                { className: "ui-datepicker-header-cell" },
                _react2.default.createElement(
                  "span",
                  {
                    className: "ui-datepicker-control",
                    viewtype: "years",
                    onClick: _this2.handleViewChange,
                    onKeyDown: _this2.handleViewChange,
                    role: "presentation"
                  },
                  viewYear
                )
              ),
              _react2.default.createElement(
                "th",
                { className: "ui-datepicker-control-cell" },
                _react2.default.createElement(
                  "span",
                  {
                    className: "ui-datepicker-control",
                    onClick: _this2.handleNextClick,
                    onKeyDown: _this2.handleNextClick,
                    role: "presentation"
                  },
                  _react2.default.createElement("i", { className: "ui-icon ui-icon-right" })
                )
              )
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            months
          ),
          footer
        )
      );
    }
    var headerText = _Calendar2.default.monthName[viewMonth] + " " + viewYear;
    if (!_lodash2.default.isNil(_this2.state.value)) {
      footer.push(_react2.default.createElement(
        "tfoot",
        { key: (0, _lib.uID)() },
        _react2.default.createElement(
          "tr",
          null,
          _react2.default.createElement(
            "td",
            { colSpan: 7 },
            _react2.default.createElement(
              "span",
              {
                className: "ui-datepicker-clear",
                onClick: _this2.handleOnClear,
                onKeyDown: _this2.handleOnClear,
                role: "presentation"
              },
              "Remove Selected Date"
            )
          )
        )
      ));
    }
    return _react2.default.createElement(
      "div",
      { className: windowClass },
      _react2.default.createElement(
        "table",
        { className: "ui-datepicker-table" },
        _react2.default.createElement(
          "thead",
          null,
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "th",
              { colSpan: 1, className: "ui-datepicker-control-cell" },
              _react2.default.createElement(
                "span",
                {
                  className: "ui-datepicker-control",
                  onClick: _this2.handlePrevClick,
                  onKeyDown: _this2.handlePrevClick,
                  role: "presentation"
                },
                _react2.default.createElement("i", { className: "ui-icon ui-icon-left" })
              )
            ),
            _react2.default.createElement(
              "th",
              { colSpan: 5, className: "ui-datepicker-header-cell" },
              _react2.default.createElement(
                "span",
                {
                  className: "ui-datepicker-control",
                  viewtype: "months",
                  onClick: _this2.handleViewChange,
                  onKeyDown: _this2.handleViewChange,
                  role: "presentation"
                },
                headerText
              )
            ),
            _react2.default.createElement(
              "th",
              { colSpan: 1, className: "ui-datepicker-control-cell" },
              _react2.default.createElement(
                "span",
                {
                  className: "ui-datepicker-control",
                  onClick: _this2.handleNextClick,
                  onKeyDown: _this2.handleNextClick,
                  role: "presentation"
                },
                _react2.default.createElement("i", { className: "ui-icon ui-icon-right" })
              )
            )
          ),
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "th",
              { className: "ui-datepicker-weekday-cell ui-datepicker-bordered-b-r" },
              _react2.default.createElement(
                "span",
                { className: "ui-datepicker-weekday" },
                _Calendar2.default.dayAbbrev[0]
              )
            ),
            _react2.default.createElement(
              "th",
              { className: "ui-datepicker-weekday-cell ui-datepicker-bordered-b-r" },
              _react2.default.createElement(
                "span",
                { className: "ui-datepicker-weekday" },
                _Calendar2.default.dayAbbrev[1]
              )
            ),
            _react2.default.createElement(
              "th",
              { className: "ui-datepicker-weekday-cell ui-datepicker-bordered-b-r" },
              _react2.default.createElement(
                "span",
                { className: "ui-datepicker-weekday" },
                _Calendar2.default.dayAbbrev[2]
              )
            ),
            _react2.default.createElement(
              "th",
              { className: "ui-datepicker-weekday-cell ui-datepicker-bordered-b-r" },
              _react2.default.createElement(
                "span",
                { className: "ui-datepicker-weekday" },
                _Calendar2.default.dayAbbrev[3]
              )
            ),
            _react2.default.createElement(
              "th",
              { className: "ui-datepicker-weekday-cell ui-datepicker-bordered-b-r" },
              _react2.default.createElement(
                "span",
                { className: "ui-datepicker-weekday" },
                _Calendar2.default.dayAbbrev[4]
              )
            ),
            _react2.default.createElement(
              "th",
              { className: "ui-datepicker-weekday-cell ui-datepicker-bordered-b-r" },
              _react2.default.createElement(
                "span",
                { className: "ui-datepicker-weekday" },
                _Calendar2.default.dayAbbrev[5]
              )
            ),
            _react2.default.createElement(
              "th",
              { className: "ui-datepicker-weekday-cell ui-datepicker-bordered-b" },
              _react2.default.createElement(
                "span",
                { className: "ui-datepicker-weekday" },
                _Calendar2.default.dayAbbrev[6]
              )
            )
          )
        ),
        _react2.default.createElement(
          "tbody",
          null,
          _this2.renderCalendar(viewMonth, viewYear)
        ),
        footer
      )
    );
  };

  this.renderToggle = function (id, iconenabled, inputenabled, disabled, invalid) {
    var expiredlock = _this2.props.expiredlock;

    var icon = [];
    var invalidClass = invalid ? " invalid" : "";
    var expiredClass = "";
    var iconClass = "";
    if (expiredlock && _Calendar2.default.isExpired(_this2.state.loadedDate)) {
      expiredClass = " ui-datepicker-expired";
    }
    if (disabled) {
      var _label = !_lodash2.default.isNil(_this2.state.value) ? _this2.state.value : "MM/DD/YYYY";
      return _react2.default.createElement(
        "span",
        { className: "ui-datepicker-toggle ui-datepicker-disabled" },
        icon,
        _label
      );
    }
    if (inputenabled) {
      if (iconenabled) {
        iconClass = " prepend-icon";
        icon.push(_react2.default.createElement("i", {
          key: "ui-datepicker-icon_" + id,
          id: "ui-datepicker-icon_" + _this2.props.uuid,
          className: "ui-icon ui-icon-calendar ui-datepicker-icon",
          "aria-hidden": "true"
        }));
      }
      return _react2.default.createElement(
        "div",
        {
          key: "ui-datepicker-toggle_" + id,
          id: "ui-datepicker-toggle_" + _this2.props.uuid,
          className: "ui-input-text " + expiredClass + iconClass + invalidClass,
          role: "presentation",
          onKeyUp: _this2.handleOnClick,
          onClick: _this2.handleOnClick
        },
        icon,
        _react2.default.createElement("input", {
          key: "ui-datepicker-input_" + id,
          id: "ui-datepicker-input_" + _this2.props.uuid,
          type: "text",
          className: "ui-datepicker-text ui-form-input " + invalidClass,
          onChange: _this2.handleOnChange,
          value: _this2.state.value,
          placeholder: "MM/DD/YYYY"
        })
      );
    }
    if (iconenabled) {
      icon.push(_react2.default.createElement("i", {
        key: "ui-datepicker-icon_" + id,
        id: "ui-datepicker-icon_" + _this2.props.uuid,
        className: "ui-icon ui-icon-calendar ui-datepicker-icon",
        "aria-hidden": "true"
      }));
    }
    var label = !_lodash2.default.isNil(_this2.state.value) ? _this2.state.value : "MM/DD/YYYY";
    return _react2.default.createElement(
      "div",
      {
        key: "ui-datepicker-toggle_" + id,
        id: "ui-datepicker-toggle_" + _this2.props.uuid,
        className: "ui-datepicker-toggle " + expiredClass,
        role: "presentation",
        onKeyUp: _this2.handleOnClick,
        onClick: _this2.handleOnClick
      },
      icon,
      _react2.default.createElement(
        "span",
        { className: "ui-datepicker-text " + invalidClass },
        label
      )
    );
  };

  this.renderLabel = function (id, label, required) {
    if (label !== null) {
      var validationClass = required ? "label required-label" : "label";
      return _react2.default.createElement(
        "span",
        { key: "label_" + _this2.state.renderKey, className: validationClass },
        label
      );
    }
    return _react2.default.createElement("span", null);
  };
}, _temp);
exports.default = DatePicker;
module.exports = exports["default"];