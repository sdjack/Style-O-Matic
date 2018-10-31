"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof components
                    * @todo Write sub-component documentation
                    * @author Steven Jackson
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCellWidget = (_temp = _class = function (_CoreComponent) {
  _inherits(TableCellWidget, _CoreComponent);

  function TableCellWidget(props) {
    _classCallCheck(this, TableCellWidget);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.handleOnToggle = function (e) {
      if ((0, _lib.isModifiedEvent)(e) || !(0, _lib.isLeftClickEvent)(e) || !_this.state.open) {
        return;
      }
      if (_this.node && !_this.node.contains(e.target)) {
        // console.log("handleClickOutside",e.target);
        _this.handleClose(e);
      }
    };

    _this.handleClose = function (event, eventDetails) {
      if (!_this.state.open) {
        return;
      }
      _this.handleOnClick(event);
    };

    _this.handleClickShield = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    _this.handleSetFilter = function (e) {
      e.preventDefault();
      var filtering = _this.props.filtering;

      _this.setState({ open: false });
      filtering(_this);
    };

    _this.handleClearFilter = function (e) {
      e.preventDefault();
      var filtering = _this.props.filtering;

      var dataColumn = _this.props.data.getColumn(_this.props.columnid);
      dataColumn.setFilterSearch("");
      _this.setState({ open: false, filterValue: "" });
      filtering(_this);
    };

    _this.handleChangeFilter = function (e) {
      e.preventDefault();
      var value = e.target.value;

      _this.setState({ filterValue: value });
      var dataColumn = _this.props.data.getColumn(_this.props.columnid);
      dataColumn.setFilterSearch(value);
    };

    _this.handleOnClick = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          filterable = _this$props.filterable,
          filtering = _this$props.filtering,
          sortable = _this$props.sortable,
          sorting = _this$props.sorting,
          editable = _this$props.editable,
          editing = _this$props.editing;

      if (filterable) {
        var open = _this.state.open;

        _this.setState({ open: !open });
      } else if (sortable && sorting) {
        sorting(_this);
      } else if (editable && editing) {
        editing(_this);
      }
    };

    _this.renderFilterWidget = function () {
      var output = [];
      if (_this.props.filterable) {
        var open = _this.state.open;

        var filterkey = "table-filter-input-" + _this.props.uuid;
        var filterClass = open ? "table-filter ui--shown" : "table-filter";
        output.push(_react2.default.createElement(
          "div",
          { className: filterClass, key: filterkey },
          _react2.default.createElement(
            "div",
            { className: "table-filter-outer-wrapper" },
            _react2.default.createElement(
              "div",
              { className: "table-filter-input-wrapper" },
              _react2.default.createElement("input", {
                id: filterkey,
                name: filterkey,
                type: "text",
                className: "table-filter-input",
                onClick: _this.handleClickShield,
                onChange: _this.handleChangeFilter,
                value: _this.state.filterValue
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "table-filter-button-wrapper" },
              _react2.default.createElement("input", {
                type: "button",
                className: "table-filter-button ui-green",
                onClick: _this.handleSetFilter,
                value: "\u2714"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "table-filter-button-wrapper" },
              _react2.default.createElement("input", {
                type: "button",
                className: "table-filter-button ui-red",
                onClick: _this.handleClearFilter,
                value: "\u2718"
              })
            )
          )
        ));
      }
      return output;
    };

    _this.state = {
      open: false,
      filterValue: ""
    };
    return _this;
  }

  TableCellWidget.prototype.WillMount = function WillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  };

  TableCellWidget.prototype.WillUnmount = function WillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  };

  TableCellWidget.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        className = _getValidProps.className,
        filterable = _getValidProps.filterable,
        filtering = _getValidProps.filtering,
        filtered = _getValidProps.filtered,
        sortable = _getValidProps.sortable,
        sorting = _getValidProps.sorting,
        sorted = _getValidProps.sorted,
        editable = _getValidProps.editable,
        editing = _getValidProps.editing,
        edited = _getValidProps.edited,
        rowtype = _getValidProps.rowtype,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var headerClasses = {
      interactive: filterable || sortable || editable,
      filtered: filtered,
      "sorted-asc": sorted === 1,
      "sorted-desc": sorted === 2,
      edited: edited
    };

    return _react2.default.createElement(
      "th",
      _extends({}, props, {
        ref: this.onSetRef,
        onClick: this.handleOnClick,
        className: (0, _classnames2.default)(className, headerClasses)
      }),
      this.renderFilterWidget(),
      children
    );
  };

  return TableCellWidget;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  columnid: "number",
  rowid: "number",
  rowtype: "string",
  filterable: "bool",
  filtered: "bool",
  filtering: "func",
  sortable: "bool",
  sorted: "number",
  sorting: "func",
  editable: "bool",
  edited: "bool",
  editing: "func"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  columnid: 0,
  rowid: 0,
  uirole: _lib.ROLE.CELL,
  rowtype: "body",
  filterable: false,
  filtered: false,
  filtering: null,
  sortable: false,
  sorted: 0,
  sorting: null,
  editable: false,
  edited: false,
  editing: null
}), _temp);
exports.default = TableCellWidget;
module.exports = exports["default"];