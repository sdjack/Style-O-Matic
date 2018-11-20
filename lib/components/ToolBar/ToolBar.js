"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @namespace ToolBar
                    * @author Steven Jackson
                   * @scss ../../scss/components/ToolBar
                    * @example <ToolBar raised>
                      <ToolBar.Content contentAlign="left">
                        TITLE
                        <Button>Button</Button>
                        <Button>Button</Button>
                      </ToolBar.Content>
                      <ToolBar.Content contentAlign="right">
                        <Text>Raised</Text>
                        <Text>Example</Text>
                      </ToolBar.Content>
                    </ToolBar>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

require("./ToolBar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolBar = (_temp = _class = function (_CoreComponent) {
  _inherits(ToolBar, _CoreComponent);

  function ToolBar() {
    _classCallCheck(this, ToolBar);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  ToolBar.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    return _react2.default.createElement(
      Component,
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          return _this2.renderChild(child, inherited);
        }
        return child;
      })
    );
  };

  return ToolBar;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.TOOLBAR
}), _temp);
exports.default = ToolBar;
module.exports = exports["default"];