"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /**
                     * @memberof components
                     * @namespace Header
                     * @author Steven Jackson
                    * @scss ../../scss/components/Header
                     * @example <Header>
                                 Example Title
                               </Header>
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

var _HeaderTitle = require("./HeaderTitle.js");

var _HeaderTitle2 = _interopRequireDefault(_HeaderTitle);

var _HeaderSubtitle = require("./HeaderSubtitle.js");

var _HeaderSubtitle2 = _interopRequireDefault(_HeaderSubtitle);

require("./Header.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_temp2 = _class = function (_CoreComponent) {
  _inherits(Header, _CoreComponent);

  function Header() {
    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.renderChild = function (child, props) {
      var role = child.props.uirole || _lib.ROLE.CONTENT;
      var ref = function ref(c) {
        _this[role] = c;
      };
      if (typeof child.ref !== "string") {
        ref = _this.chainFunction(child.ref, ref);
      }
      return (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        uiclass: _this.childPrefix(role)
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Header.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        className = _getValidProps.className,
        display = _getValidProps.display,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var titleElement = "h6";
    var subtitleElement = "small";

    switch (display) {
      case "xxxl":
        titleElement = "h1";
        subtitleElement = "h4";
        break;
      case "xxl":
        titleElement = "h2";
        subtitleElement = "h4";
        break;
      case "xl":
        titleElement = "h3";
        subtitleElement = "h5";
        break;
      case "l":
        titleElement = "h4";
        subtitleElement = "h6";
        break;
      case "m":
        titleElement = "h5";
        subtitleElement = "small";
        break;
      default:
        titleElement = "h6";
        subtitleElement = "small";
        break;
    }
    return _react2.default.createElement(
      Component,
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          switch (child.props.uirole) {
            case _lib.ROLE.SUBTITLE:
              return _this2.renderChild(child, _extends({}, inherited, {
                renderAs: subtitleElement
              }));
            case _lib.ROLE.TITLE:
              return _this2.renderChild(child, _extends({}, inherited, {
                renderAs: titleElement
              }));
            default:
              return child;
          }
        }
        return child;
      })
    );
  };

  return Header;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  display: ["xxxl", "xxl", "xl", "l", "m"]
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "header",
  uirole: _lib.ROLE.HEADER,
  display: null
}), _class.Title = _HeaderTitle2.default, _class.Subtitle = _HeaderSubtitle2.default, _temp2);
exports.default = Header;
module.exports = exports["default"];