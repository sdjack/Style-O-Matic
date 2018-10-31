"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _class2, _temp3; /**
                                     * @memberof components
                                     * @namespace Footer
                                     * @author Steven Jackson
                                    * @scss ../../scss/components/Footer
                                     * @example <Footer>
                                       Example Content
                                     </Footer>
                                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _Drawer2 = require("../Drawer/Drawer.js");

var _Drawer3 = _interopRequireDefault(_Drawer2);

var _FooterContent = require("./FooterContent.js");

var _FooterContent2 = _interopRequireDefault(_FooterContent);

require("./Footer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterDrawer = (_temp = _class = function (_Drawer) {
  _inherits(FooterDrawer, _Drawer);

  function FooterDrawer() {
    _classCallCheck(this, FooterDrawer);

    return _possibleConstructorReturn(this, _Drawer.apply(this, arguments));
  }

  return FooterDrawer;
}(_Drawer3.default), _class.defaultProps = {
  renderAs: "div",
  uirole: _lib.ROLE.DRAWER,
  attach: "bottom"
}, _temp);
var Footer = (_temp3 = _class2 = function (_CoreComponent) {
  _inherits(Footer, _CoreComponent);

  function Footer() {
    var _temp2, _this2, _ret;

    _classCallCheck(this, Footer);

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
          fixed = _getValidProps.fixed,
          children = _getValidProps.children,
          props = _getValidProps.props;

      var output = [];

      if (fixed) {
        output.push(_react2.default.createElement("div", { className: "ui-footer-bolster", key: "footer-bolster" }));
      }

      output.push(_react2.default.createElement(
        Component,
        _extends({}, props, { key: "footer" }),
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
      ));

      return output;
    }, _temp2), _possibleConstructorReturn(_this2, _ret);
  }

  return Footer;
}(_lib.CoreComponent), _class2.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "footer",
  uirole: _lib.ROLE.FOOTER
}), _class2.Drawer = FooterDrawer, _class2.Content = _FooterContent2.default, _temp3);
exports.default = Footer;
module.exports = exports["default"];