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

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridColumn = (_temp = _class = function (_CoreComponent) {
  _inherits(GridColumn, _CoreComponent);

  function GridColumn() {
    _classCallCheck(this, GridColumn);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  GridColumn.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        className = _getValidProps.className,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var classes = {};

    if (!_lodash2.default.isNil(this.props.cols)) {
      classes["span-" + this.props.cols] = true;
    }

    return _react2.default.createElement(
      Component,
      _extends({}, props, { className: (0, _classnames2.default)(className, classes) }),
      children
    );
  };

  return GridColumn;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  cols: ["string", "number"]
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  uirole: _lib.ROLE.COLUMN,
  cols: 12
}), _temp);
exports.default = GridColumn;
module.exports = exports["default"];