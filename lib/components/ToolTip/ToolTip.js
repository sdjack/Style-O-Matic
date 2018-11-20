"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @namespace ToolTip
                    * @author Steven Jackson
                    * @scss ../../scss/components/ToolTip
                    * @example <div>
                      <ToolTip position="right">Example Tooltip</ToolTip>
                    </div>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

require("./ToolTip.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolTip = (_temp = _class = function (_CoreComponent) {
  _inherits(ToolTip, _CoreComponent);

  function ToolTip() {
    _classCallCheck(this, ToolTip);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  ToolTip.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        text = _getValidProps.text,
        position = _getValidProps.position,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var tipText = text || escape(children);
    return _react2.default.createElement(
      Component,
      { "data-ui-tooltip": tipText, "data-ui-tooltip-pos": position },
      children
    );
  };

  return ToolTip;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "span",
  uirole: _lib.ROLE.TOOLTIP,
  position: "top"
}), _temp);
exports.default = ToolTip;
module.exports = exports["default"];