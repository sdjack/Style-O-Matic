"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof components
                    * @namespace Drawer
                    * @author Steven Jackson
                   * @scss ../../scss/components/Drawer
                    * @example <Drawer>
                                Example Content
                              </Drawer>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

require("./Drawer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = (_temp = _class = function (_CoreComponent) {
  _inherits(Drawer, _CoreComponent);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.handleOnClick = function () {
      _this.setState({ active: !_this.state.active });
    };

    _this.setRefCallback = function (ref) {
      if (ref) {
        var orientation = _this.state.orientation;

        var _ref$getBoundingClien = ref.getBoundingClientRect(),
            width = _ref$getBoundingClien.width,
            height = _ref$getBoundingClien.height;

        var _UIGlobals$getScreenD = _lib.UIGlobals.getScreenDimensions(),
            screenHeight = _UIGlobals$getScreenD.height,
            screenWidth = _UIGlobals$getScreenD.width;

        var newOrientation = orientation;
        if (height > screenHeight / 2) {
          newOrientation = "vertical";
        } else {
          newOrientation = "horizontal";
        }
        if (newOrientation !== orientation) {
          _this.setState({ orientation: newOrientation });
        }
      }
    };

    _this.useParentNode = true;
    _this.state = {
      orientation: props.orientation,
      active: props.defaultOpen
    };
    return _this;
  }

  Drawer.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props, this.state),
        Component = _getValidProps.renderAs,
        uiclass = _getValidProps.uiclass,
        color = _getValidProps.color,
        colorStyle = _getValidProps.colorStyle,
        uuid = _getValidProps.uuid,
        fixed = _getValidProps.fixed,
        disabled = _getValidProps.disabled,
        children = _getValidProps.children,
        props = _getValidProps.props;
    // this.ensureOrientation();


    var _state = this.state,
        orientation = _state.orientation,
        active = _state.active;

    return _react2.default.createElement(
      Component,
      _extends({}, props, { ref: this.onSetRef }),
      _react2.default.createElement(
        "div",
        { className: "ui-drawer-content" },
        _react2.default.Children.map(children, function (child) {
          return _this2.renderChild(child, {
            disabled: disabled,
            uiclass: uiclass,
            orientation: orientation,
            active: active
          });
        })
      )
    );
  };

  return Drawer;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  defaultOpen: "bool"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  uirole: _lib.ROLE.DRAWER,
  orientation: "horizontal",
  defaultOpen: true
}), _temp);
exports.default = Drawer;
module.exports = exports["default"];