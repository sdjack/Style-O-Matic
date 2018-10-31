"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof components
                    * @namespace Radio
                    * @author Steven Jackson
                   * @scss ../../scss/components/Radio
                    * @example <Radio>
                                Example Content
                              </Radio>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

require("./Radio.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = (_temp = _class = function (_CoreComponent) {
  _inherits(Radio, _CoreComponent);

  function Radio(props) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.getValue = function () {
      return _this.value;
    };

    _this.getCheckedValue = function () {
      var value = null;
      _this.fields.map(function (field) {
        if (field.checked) {
          value = field.value;
        }
        return null;
      });
      return value;
    };

    _this.handleOnChange = function (e) {
      _this.value = e.target.value;
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.handleOnRef = function (e) {
      _this.fields.push(e);
    };

    _this.renderLabel = function (fieldId, label, required) {
      if (label !== null) {
        var validationClass = required ? "label required-label" : "label";
        return _react2.default.createElement(
          "span",
          { key: "label_" + fieldId, className: validationClass },
          label
        );
      }
      return _react2.default.createElement("span", null);
    };

    _this.renderRadioOptions = function (fieldId, options) {
      var output = [];
      for (var i = 0; i < options.length; i += 1) {
        var optionData = options[i];
        var optionId = fieldId + "_" + i;
        output.push(_react2.default.createElement(
          "label",
          { key: optionId, htmlFor: optionId },
          _react2.default.createElement("input", {
            type: "radio",
            id: optionId,
            name: fieldId,
            onChange: _this.handleOnChange,
            value: optionData.value,
            ref: _this.handleOnRef
          }),
          optionData.label
        ));
      }
      return output;
    };

    _this.value = props.value;
    if (!_this.value) {
      _this.value = props.options[0] ? props.options[0].value : "";
    }
    _this.fields = [];
    _this.valid = true;
    _this.renderKey = "radio_" + props.uuid;
    return _this;
  }

  Radio.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        className = _getValidProps.className,
        id = _getValidProps.id,
        name = _getValidProps.name,
        required = _getValidProps.required,
        disabled = _getValidProps.disabled,
        label = _getValidProps.label,
        children = _getValidProps.children,
        options = _getValidProps.options,
        props = _getValidProps.props;

    delete props.name;
    delete props.id;

    var fieldId = name || id || this.renderKey;
    var preParsedClass = "ui-radio";
    var wrapperClasses = {
      disabled: disabled,
      invalid: !this.valid
    };

    this.fields = [];

    return _react2.default.createElement(
      "div",
      { className: className },
      this.renderLabel(fieldId, label, required),
      _react2.default.createElement(
        Component,
        _extends({
          key: this.renderKey
        }, props, {
          className: (0, _classnames2.default)(preParsedClass, wrapperClasses)
        }),
        this.renderRadioOptions(fieldId, options),
        children
      )
    );
  };

  return Radio;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  id: "string!",
  required: "bool",
  label: "string",
  validator: "func",
  options: "array"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.INPUT,
  type: "text",
  checked: false,
  required: false,
  label: null,
  validator: null,
  validPattern: null,
  maskPattern: null,
  options: []
}), _temp);
exports.default = Radio;
module.exports = exports["default"];