"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /**
                     * @memberof components
                     * @namespace Button
                     * @author Steven Jackson
                    * @scss ../../scss/components/Button
                     * @example <Button>DEFAULT</Button>,
                     <Button color="black">BLACK</Button>,
                     <Button color="red">RED</Button>,
                     <Button color="orange">ORANGE</Button>,
                     <Button color="yellow">YELLOW</Button>,
                     <Button color="green">GREEN</Button>,
                     <Button color="blue">BLUE</Button>,
                     <Button color="indigo">INDIGO</Button>,
                     <Button color="violet">VIOLET</Button>
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _Dropdown = require("../Dropdown/Dropdown.js");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (_temp2 = _class = function (_CoreComponent) {
  _inherits(Button, _CoreComponent);

  function Button() {
    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.handleClick = function (e) {
      if (_this.props.disabled) {
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      if ((0, _lib.isModifiedEvent)(e) || !(0, _lib.isLeftClickEvent)(e)) {
        return;
      }
      if (e.defaultPrevented === true) {
        return;
      }
      e.preventDefault();
    }, _this.handleKeyDown = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Button.prototype.render = function render() {
    var _this2 = this;

    if (this.props.dropdown) {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          id = _props.id,
          label = _props.label,
          _children = _props.children;

      return _react2.default.createElement(
        _Dropdown2.default,
        { style: style, id: id || "dropdown-button" },
        _react2.default.createElement(
          _Dropdown2.default.Toggle,
          {
            className: className,
            id: id || "dropdown-button-toggle"
          },
          label
        ),
        _react2.default.createElement(
          _Dropdown2.default.Content,
          null,
          _children
        )
      );
    }

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        children = _getValidProps.children,
        to = _getValidProps.to,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var ElementType = (0, _lib.getElementType)(Button, this.props);
    if (to) {
      props.href = props.href || to;
      props.target = props.target || "_top";
      props.onClick = null;
    } else {
      props.onClick = this.handleClick;
    }

    return _react2.default.createElement(
      ElementType,
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          return _this2.renderOrphan(child, _extends({}, inherited, {
            onClick: _this2.chainFunction(child.props.onClick, function () {}),
            onKeyDown: _this2.chainFunction(child.props.onKeyDown, function () {})
          }));
        }
        return child;
      })
    );
  };

  return Button;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  dropdown: "bool"
}), _class.defaultProps = (0, _lib.setPropDefaultsAutoId)({
  renderAs: "button",
  uirole: _lib.ROLE.BUTTON,
  dropdown: false
}), _temp2);
exports.default = Button;
module.exports = exports["default"];