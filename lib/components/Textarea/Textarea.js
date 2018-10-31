"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof components
                    * @namespace Textarea
                    * @author Steven Jackson
                   * @scss ../../scss/components/Textarea
                    * @example <Textarea>
                                Example Content
                              </Textarea>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

require("./Textarea.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = (_temp = _class = function (_CoreComponent) {
  _inherits(Textarea, _CoreComponent);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.getValue = function () {
      return _this.value;
    };

    _this.handleOnChange = function (e) {
      e.preventDefault();
      _this.value = e.target.value;
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.renderLabel = function (id, label, required) {
      if (label !== null) {
        var validationClass = required ? " required" : "";
        return _react2.default.createElement(
          "label",
          {
            htmlFor: id,
            key: "label_" + _this.renderKey,
            className: validationClass
          },
          label
        );
      }
      return _react2.default.createElement("span", null);
    };

    _this.value = props.value || "";
    _this.valid = true;
    _this.renderKey = "textarea_" + props.uuid;
    return _this;
  }

  Textarea.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        className = _getValidProps.className,
        id = _getValidProps.id,
        name = _getValidProps.name,
        required = _getValidProps.required,
        disabled = _getValidProps.disabled,
        label = _getValidProps.label,
        children = _getValidProps.children,
        props = _getValidProps.props;

    delete props.name;
    delete props.id;
    delete props.className;

    var fieldName = name || id || this.renderKey;
    var fieldId = id || this.renderKey;
    var preParsedClass = "ui-textarea";
    var wrapperClasses = {
      disabled: disabled,
      invalid: !this.valid
    };

    return _react2.default.createElement(
      "div",
      { className: className },
      this.renderLabel(fieldId, label, required),
      _react2.default.createElement(
        "div",
        {
          key: "wrapper_" + this.renderKey,
          className: (0, _classnames2.default)(preParsedClass, wrapperClasses)
        },
        _react2.default.createElement(Component, _extends({
          key: this.renderKey
        }, props, {
          id: fieldId,
          name: fieldName,
          onChange: this.handleOnChange,
          defaultValue: this.value
        })),
        children
      )
    );
  };

  return Textarea;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  id: "string!",
  required: "bool",
  label: "string",
  validator: "func"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "textarea",
  uirole: _lib.ROLE.INPUT,
  required: false,
  label: null,
  validator: null
}), _temp);
exports.default = Textarea;
module.exports = exports["default"];