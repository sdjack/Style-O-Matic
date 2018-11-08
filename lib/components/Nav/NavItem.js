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

var NavItem = (_temp = _class = function (_CoreComponent) {
  _inherits(NavItem, _CoreComponent);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  NavItem.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        uirole = _getValidProps.uirole,
        iconClassName = _getValidProps.iconClassName,
        to = _getValidProps.to,
        path = _getValidProps.path,
        label = _getValidProps.label,
        minimized = _getValidProps.minimized,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var classes = {
      active: to && path.indexOf(to) !== -1,
      minimized: minimized
    };

    var contents = children || label;
    delete props.className;

    return _react2.default.createElement(
      Component,
      _extends({}, props, { className: (0, _classnames2.default)("ui-nav-item", classes) }),
      _react2.default.createElement("span", { className: "ui-nav-icon " + iconClassName }),
      to ? _react2.default.createElement(
        "a",
        { className: "ui-nav-content", href: to, label: label },
        contents
      ) : _react2.default.createElement(
        "span",
        { className: "ui-nav-content" },
        contents
      )
    );
  };

  return NavItem;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  minimized: "bool"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.ITEM,
  label: null,
  minimized: false
}), _temp);
exports.default = NavItem;
module.exports = exports["default"];