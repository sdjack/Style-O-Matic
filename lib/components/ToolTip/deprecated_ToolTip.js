"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

require("./ToolTip.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolTip = (_temp = _class = function (_CoreComponent) {
  _inherits(ToolTip, _CoreComponent);

  function ToolTip(props) {
    _classCallCheck(this, ToolTip);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.setRefCallback = function (ref) {
      var _ref$getBoundingClien = ref.getBoundingClientRect(),
          x = _ref$getBoundingClien.x,
          y = _ref$getBoundingClien.y;

      _this.defaultCoords.x = x;
      _this.defaultCoords.y = y;
      _this.setState({
        topOffset: _this.defaultCoords.y,
        leftOffset: _this.defaultCoords.x
      });
    };

    _this.handleMouseEnter = function (e) {
      if (!_this.state.open) {
        if (_this.node) {
          var position = _this.props.position;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              x = _this$node$getBoundin.x,
              width = _this$node$getBoundin.width,
              bottom = _this$node$getBoundin.bottom,
              height = _this$node$getBoundin.height;

          var leftOffset = x;
          var topOffset = bottom;
          if (position === "left") {
            topOffset -= height / 2;
          } else if (position === "right") {
            leftOffset += width;
            topOffset -= height / 2;
          } else if (position === "top") {
            topOffset -= height * 2;
          }
          _this.setState({ open: true, topOffset: topOffset, leftOffset: leftOffset });
        } else {
          _this.setState({ open: true });
        }
      }
    };

    _this.handleMouseLeave = function (e) {
      _this.setState({
        open: false,
        topOffset: _this.defaultCoords.y,
        leftOffset: _this.defaultCoords.x
      });
    };

    _this.defaultCoords = {
      x: 0,
      y: 0
    };
    _this.state = {
      open: false,
      topOffset: _this.defaultCoords.y,
      leftOffset: _this.defaultCoords.x
    };
    return _this;
  }

  ToolTip.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props, this.state),
        Component = _getValidProps.renderAs,
        position = _getValidProps.position,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var offsetStyle = {};
    var widgetClass = "ui-tooltip-widget ";
    if (this.node) {
      if (position) {
        widgetClass += "ui-tooltip-" + position;
        if (position === "left") {
          offsetStyle.top = this.state.topOffset + "px";
          offsetStyle.right = this.state.leftOffset + "px";
        } else {
          offsetStyle.top = this.state.topOffset + "px";
          offsetStyle.left = this.state.leftOffset + "px";
        }
      } else {
        widgetClass += " ui-tooltip-top";
      }
    }

    var classes = {
      "ui--open": this.state.open
    };

    console.log(children);

    return _react2.default.createElement(
      Component,
      _extends({}, props, {
        ref: this.onSetRef,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }),
      children,
      _react2.default.createElement(
        "div",
        { className: "ui-tooltip-wrapper" },
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)(widgetClass, classes), style: offsetStyle },
          _react2.default.createElement(
            "div",
            { className: (0, _classnames2.default)("ui-tooltip-content", classes) },
            children
          )
        )
      )
    );
  };

  return ToolTip;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.TOOLTIP,
  position: "top"
}), _temp);
exports.default = ToolTip;
module.exports = exports["default"];