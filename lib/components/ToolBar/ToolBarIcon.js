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

var ToolBarIcon = (_temp = _class = function (_CoreComponent) {
  _inherits(ToolBarIcon, _CoreComponent);

  function ToolBarIcon() {
    _classCallCheck(this, ToolBarIcon);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  ToolBarIcon.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        children = _getValidProps.children,
        props = _getValidProps.props;

    var ElementType = (0, _lib.getElementType)(ToolBarIcon, this.props);

    return _react2.default.createElement(
      ElementType,
      props,
      children
    );
  };

  return ToolBarIcon;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.ICON
}), _temp);
exports.default = ToolBarIcon;
module.exports = exports["default"];