"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @todo Write sub-component documentation
                    * @author Steven Jackson
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownToggle = (_temp = _class = function (_CoreComponent) {
  _inherits(DropdownToggle, _CoreComponent);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  DropdownToggle.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        open = _getValidProps.open,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var caretClass = open ? "fa-caret-down" : "fa-caret-right";

    return _react2.default.createElement(
      Component,
      props,
      children,
      _react2.default.createElement("span", { className: "ui-dropdown-caret fa " + caretClass })
    );
  };

  return DropdownToggle;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "button",
  uirole: _lib.ROLE.TOGGLE,
  role: _lib.ROLE.PRESENTATION
}), _temp);
exports.default = DropdownToggle;
module.exports = exports["default"];