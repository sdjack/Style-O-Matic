"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @namespace Badge
                    * @author Steven Jackson
                   * @scss ../../scss/components/Badge
                    * @example <Badge color="black">
                      <Badge.Icon icon="star" />
                    </Badge>,
                    <Badge color="red">
                      <Badge.Icon icon="spider" />
                    </Badge>,
                    <Badge color="orange">
                      <Badge.Icon icon="bat" />
                    </Badge>,
                    <Badge color="yellow">
                      <Badge.Icon icon="ghost" />
                    </Badge>,
                    <Badge color="green">
                      <Badge.Icon icon="skull" />
                    </Badge>,
                    <Badge color="blue">
                      <Badge.Icon icon="doot" />
                    </Badge>,
                    <Badge color="indigo">
                      <Badge.Icon icon="robot" />
                    </Badge>,
                    <Badge color="violet">
                      <Badge.Icon icon="sheep" />
                    </Badge>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _BadgeContent = require("./BadgeContent");

var _BadgeContent2 = _interopRequireDefault(_BadgeContent);

var _BadgeIcon = require("./BadgeIcon");

var _BadgeIcon2 = _interopRequireDefault(_BadgeIcon);

require("./Badge.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = (_temp = _class = function (_CoreComponent) {
  _inherits(Badge, _CoreComponent);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  Badge.prototype.render = function render() {
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

  return Badge;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  uirole: _lib.ROLE.BADGE
}), _class.Content = _BadgeContent2.default, _class.Icon = _BadgeIcon2.default, _temp);
exports.default = Badge;
module.exports = exports["default"];