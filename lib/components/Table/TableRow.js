"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /**
                     * @memberof components
                     * @author Steven Jackson
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = (_temp2 = _class = function (_CoreComponent) {
  _inherits(TableRow, _CoreComponent);

  function TableRow() {
    var _temp, _this, _ret;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.columns = [], _this.columnCount = 0, _this.renderChild = function (child, props, rowtype) {
      var ref = function ref(c) {
        _this.columns.push(c);
      };
      if (typeof child.ref !== "string") {
        ref = _this.chainFunction(child.ref, ref);
      }
      var index = _this.columnCount;
      _this.columnCount += 1;
      var dataColumn = _this.props.data.getColumn(index);
      var cell = (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        rowid: _this.props.rowid,
        data: _this.props.data,
        columnid: index,
        uiclass: _this.childPrefix(child.props.uirole),
        rowtype: rowtype,
        filtering: _this.props.filtering,
        filtered: dataColumn.filterState !== 0,
        sorting: _this.props.sorting,
        sorted: dataColumn.sortState,
        editing: _this.props.editing,
        edited: false
      }));
      if (_this.props.rowtype === "body") {
        _this.props.data.setColumn(cell);
      }
      return cell;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TableRow.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        rowtype = _getValidProps.rowtype,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    this.columns = [];
    this.columnCount = 0;

    return _react2.default.createElement(
      "tr",
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _lib.ROLE.CELL) {
          return _this2.renderChild(child, inherited, rowtype);
        }
        return child;
      })
    );
  };

  return TableRow;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  rowid: "number",
  rowtype: "string",
  filtering: "func",
  sorting: "func",
  editing: "func"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  rowid: 0,
  uirole: _lib.ROLE.ROW,
  rowtype: "body",
  filtering: null,
  sorting: null,
  editing: null
}), _temp2);
exports.default = TableRow;
module.exports = exports["default"];