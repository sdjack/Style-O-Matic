"use strict";

exports.__esModule = true;

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

var _TableCellWidget = require("./TableCellWidget.js");

var _TableCellWidget2 = _interopRequireDefault(_TableCellWidget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCell = (_temp = _class = function (_CoreComponent) {
  _inherits(TableCell, _CoreComponent);

  function TableCell() {
    _classCallCheck(this, TableCell);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  TableCell.prototype.render = function render() {
    if (this.props.rowtype && this.props.rowtype === "head") {
      var _props = _objectWithoutProperties(this.props, []);

      return _react2.default.createElement(_TableCellWidget2.default, this.props);
    }

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        children = _getValidProps.children,
        props = _getValidProps.props;

    return _react2.default.createElement(
      "td",
      props,
      children
    );
  };

  return TableCell;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  columnid: "number",
  rowid: "number",
  rowtype: "string"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  columnid: 0,
  rowid: 0,
  uirole: _lib.ROLE.CELL,
  rowtype: "body"
}), _temp);
exports.default = TableCell;
module.exports = exports["default"];