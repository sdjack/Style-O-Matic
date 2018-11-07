"use strict";

exports.__esModule = true;

var _class, _temp2; /**
                     * @memberof components
                     * @namespace Pill
                     * @author Steven Jackson
                    * @scss ../../scss/components/Pill
                     * @example <Pill id="pill1" onAction={() => {}}>
                       Action
                     </Pill>,
                     <Pill id="pill2" onRemove={() => {}}>
                       Closable
                     </Pill>,
                     <Pill id="pill3" onAction={() => {}} onRemove={() => {}}>
                       Both
                     </Pill>,
                     <Pill id="pill4" onAction={() => {}} onRemove={() => {}} disabled>
                       Disabled
                     </Pill>
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

require("./Pill.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pill = (_temp2 = _class = function (_CoreComponent) {
  _inherits(Pill, _CoreComponent);

  function Pill() {
    var _temp, _this, _ret;

    _classCallCheck(this, Pill);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.handleOnRemove = function (e) {
      var _this$props = _this.props,
          pillData = _this$props.pillData,
          onRemove = _this$props.onRemove;

      if (!_this.props.disabled && onRemove) {
        e.preventDefault();
        onRemove(pillData);
      }
    }, _this.handleOnAction = function (e) {
      var _this$props2 = _this.props,
          pillData = _this$props2.pillData,
          onAction = _this$props2.onAction;

      if (!_this.props.disabled && onAction) {
        e.preventDefault();
        onAction(pillData);
      }
    }, _this.renderAction = function () {
      var _this$props3 = _this.props,
          actionIcon = _this$props3.actionIcon,
          onAction = _this$props3.onAction;

      if (onAction) {
        return _react2.default.createElement(
          "div",
          {
            className: "ui-pill-action",
            role: "presentation",
            onClick: _this.handleOnAction
          },
          _react2.default.createElement("i", { className: actionIcon, "aria-hidden": "true" })
        );
      }
      return null;
    }, _this.renderRemove = function () {
      var onRemove = _this.props.onRemove;

      if (onRemove) {
        return _react2.default.createElement(
          "div",
          {
            className: "ui-pill-action",
            role: "presentation",
            onClick: _this.handleOnRemove
          },
          _react2.default.createElement("i", { className: "ui-icon ui-icon-close", "aria-hidden": "true" })
        );
      }
      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Pill.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props;

    return _react2.default.createElement(
      Component,
      props,
      this.renderAction(),
      _react2.default.createElement(
        "span",
        { className: "ui-pill-text" },
        children
      ),
      this.renderRemove()
    );
  };

  return Pill;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)(null, {
  actionIcon: "string",
  pillData: "object",
  onRemove: "func",
  onAction: "func"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.PILL,
  role: _lib.ROLE.PRESENTATION,
  actionIcon: "ui-icon ui-icon-star",
  pillData: {},
  onRemove: null,
  onAction: null
}), _temp2);
exports.default = Pill;
module.exports = exports["default"];