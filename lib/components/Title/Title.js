"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /**
                     * @memberof components
                     * @namespace Title
                     * @author Steven Jackson
                    * @scss ../../scss/components/Title
                     * @example <Title>
                                 Example Content
                               </Title>
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

var _TitleContent = require("./TitleContent.js");

var _TitleContent2 = _interopRequireDefault(_TitleContent);

var _TitleSubtitle = require("./TitleSubtitle.js");

var _TitleSubtitle2 = _interopRequireDefault(_TitleSubtitle);

var _TitleIcon = require("./TitleIcon");

var _TitleIcon2 = _interopRequireDefault(_TitleIcon);

require("./Title.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = (_temp2 = _class = function (_CoreComponent) {
  _inherits(Title, _CoreComponent);

  function Title() {
    var _temp, _this, _ret;

    _classCallCheck(this, Title);

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

  Title.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        renderAs = _getValidProps.renderAs,
        className = _getValidProps.className,
        sticky = _getValidProps.sticky,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var classes = {
      "ui-sticky": sticky
    };

    var uiClassCore = (0, _classnames2.default)(className, classes);
    delete props.className;

    var contentElement = "h2";
    var subtitleElement = "h5";

    switch (renderAs) {
      case "h1":
        contentElement = "h1";
        subtitleElement = "h4";
        break;
      case "h3":
        contentElement = "h3";
        subtitleElement = "h6";
        break;
      case "h4":
        contentElement = "h4";
        subtitleElement = "h6";
        break;
      case "h5":
        contentElement = "h5";
        subtitleElement = "small";
        break;
      case "h6":
        contentElement = "h6";
        subtitleElement = "small";
        break;
      default:
        contentElement = "h2";
        subtitleElement = "h5";
        break;
    }

    return _react2.default.createElement(
      "div",
      _extends({}, props, { className: uiClassCore }),
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          switch (child.props.uirole) {
            case _lib.ROLE.SUBTITLE:
              return _this2.renderChild(child, _extends({}, inherited, {
                renderAs: subtitleElement
              }));
            case _lib.ROLE.CONTENT || _lib.ROLE.ICON:
              return _this2.renderChild(child, _extends({}, inherited, {
                renderAs: contentElement
              }));
            default:
              return child;
          }
        } else {
          return child;
        }
      })
    );
  };

  return Title;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  sticky: "bool"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.TITLE,
  sticky: false
}), _class.Content = _TitleContent2.default, _class.Subtitle = _TitleSubtitle2.default, _class.Icon = _TitleIcon2.default, _temp2);
exports.default = Title;
module.exports = exports["default"];