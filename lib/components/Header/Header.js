"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _class2, _temp3; /**
                                     * @memberof components
                                     * @namespace Header
                                     * @author Steven Jackson
                                    * @scss ../../scss/components/Header
                                     * @example <Header>
                                                 Example Content
                                               </Header>
                                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _Drawer2 = require("../Drawer/Drawer.js");

var _Drawer3 = _interopRequireDefault(_Drawer2);

var _HeaderContent = require("./HeaderContent.js");

var _HeaderContent2 = _interopRequireDefault(_HeaderContent);

require("./Header.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderDrawer = (_temp = _class = function (_Drawer) {
  _inherits(HeaderDrawer, _Drawer);

  function HeaderDrawer() {
    _classCallCheck(this, HeaderDrawer);

    return _possibleConstructorReturn(this, _Drawer.apply(this, arguments));
  }

  return HeaderDrawer;
}(_Drawer3.default), _class.defaultProps = {
  renderAs: "div",
  uirole: _lib.ROLE.DRAWER,
  attach: "top"
}, _temp);
var Header = (_temp3 = _class2 = function (_CoreComponent) {
  _inherits(Header, _CoreComponent);

  function Header() {
    var _temp2, _this2, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp2 = (_this2 = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this2), _this2.renderChild = function (child, props) {
      var role = child.props.uirole;
      var ref = function ref(c) {
        _this2[role] = c;
      };
      if (typeof child.ref !== "string") {
        ref = _this2.chainFunction(child.ref, ref);
      }
      return (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        uiclass: _this2.childPrefix(role)
      }));
    }, _this2.renderCore = function () {
      var _getValidProps = (0, _lib.getValidProps)(_this2.props),
          Component = _getValidProps.renderAs,
          uiclass = _getValidProps.uiclass,
          children = _getValidProps.children,
          props = _getValidProps.props;

      return _react2.default.createElement(
        Component,
        _extends({}, props, { key: "header" }),
        _react2.default.Children.map(children, function (child) {
          if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
            switch (child.props.uirole) {
              case _lib.ROLE.CONTENT:
                return _this2.renderChild(child, { uiclass: uiclass });
              default:
                return child;
            }
          }
          return child;
        })
      );
    }, _temp2), _possibleConstructorReturn(_this2, _ret);
  }

  return Header;
}(_lib.CoreComponent), _class2.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "header",
  uirole: _lib.ROLE.HEADER
}), _class2.Drawer = HeaderDrawer, _class2.Content = _HeaderContent2.default, _temp3);
exports.default = Header;
module.exports = exports["default"];