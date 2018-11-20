"use strict";

exports.__esModule = true;

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

var _Content = require("../Content/Content.js");

var _Content2 = _interopRequireDefault(_Content);

require("./Drawer.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = (_temp = _class = function (_CoreComponent) {
  _inherits(Drawer, _CoreComponent);

  function Drawer() {
    _classCallCheck(this, Drawer);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  Drawer.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        uiclass = _getValidProps.uiclass,
        color = _getValidProps.color,
        colorStyle = _getValidProps.colorStyle,
        uuid = _getValidProps.uuid,
        fixed = _getValidProps.fixed,
        disabled = _getValidProps.disabled,
        collapsed = _getValidProps.collapsed,
        children = _getValidProps.children,
        props = _getValidProps.props;

    return _react2.default.createElement(
      Component,
      props,
      _react2.default.createElement(
        _Content2.default,
        null,
        _react2.default.Children.map(children, function (child) {
          return _this2.renderChild(child, {
            disabled: disabled,
            uiclass: uiclass,
            collapsed: collapsed
          });
        })
      )
    );
  };

  return Drawer;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  uirole: _lib.ROLE.DRAWER,
  collapsed: true
}), _temp);
exports.default = Drawer;
module.exports = exports["default"];