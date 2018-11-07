"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof components
                    * @namespace Input
                    * @author Steven Jackson
                   * @scss ../../scss/components/Input
                    * @example <Input>
                                Example Content
                              </Input>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

require("./Input.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (_temp = _class = function (_CoreComponent) {
  _inherits(Input, _CoreComponent);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.getValue = function () {
      return _this.state.value;
    };

    _this.handleOnChecked = function (e) {
      var value = e.target.checked ? e.target.value : "";
      _this.setState({ value: value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.handleOnChange = function (e) {
      e.preventDefault();
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.handleOnValidated = function (e) {
      e.preventDefault();
      var input = e.target;
      var _this$props$config = _this.props.config,
          required = _this$props$config.required,
          validator = _this$props$config.validator,
          validPattern = _this$props$config.validPattern,
          maskPattern = _this$props$config.maskPattern;
      var value = input.value;

      var isValid = true;
      if (required) {
        if (maskPattern !== null) {
          value = value.replace(maskPattern, "");
        }
        if (validator !== null) {
          isValid = validator(value);
        } else if (validPattern !== null) {
          isValid = validPattern.test(value);
        }
      }
      if (isValid && _this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.handleOnNumUp = function (e) {
      e.preventDefault();
      var currentValue = _this.state.value && _this.state.value !== "" ? _this.state.value : 0;
      var newValue = parseInt(currentValue, 10);
      _this.setState({ value: newValue + 1 });
    };

    _this.handleOnNumDown = function (e) {
      e.preventDefault();
      var currentValue = _this.state.value && _this.state.value !== "" ? _this.state.value : 0;
      var newValue = parseInt(currentValue, 10);
      _this.setState({ value: newValue - 1 });
    };

    _this.renderLabel = function (id, label, required) {
      if (label !== null) {
        var validationClass = required ? "label required-label" : "label";
        return _react2.default.createElement(
          "span",
          { key: "label_" + _this.renderKey, className: validationClass },
          label
        );
      }
      return _react2.default.createElement("span", null);
    };

    _this.renderSelectOptions = function (selectOptions) {
      var output = [];
      for (var i = 0; i < selectOptions.length; i += 1) {
        var optionData = selectOptions[i];
        output.push(_react2.default.createElement(
          "option",
          {
            key: "option_" + i + "_" + _this.renderKey,
            id: "option_" + i,
            name: "option_" + i,
            value: optionData.Value
          },
          optionData.Label
        ));
      }
      return output;
    };

    var defaultValue = props.value;
    _this.renderKey = "input_" + props.uuid;
    if (!defaultValue) {
      switch (props.type) {
        case "select":
          defaultValue = props.selectOptions[0] ? props.selectOptions[0].Value : "";
          break;
        case "checkbox":
          defaultValue = props.defaultChecked ? props.value : "";
          break;
        case "number":
          defaultValue = 0;
          break;
        case "color":
          defaultValue = "#263646";
          break;
        default:
          defaultValue = "";
          break;
      }
    }
    _this.state = {
      value: defaultValue,
      valid: true
    };
    return _this;
  }

  Input.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        renderAs = _getValidProps.renderAs,
        className = _getValidProps.className,
        coreClassName = _getValidProps.coreClassName,
        styleClassName = _getValidProps.styleClassName,
        defaultChecked = _getValidProps.defaultChecked,
        type = _getValidProps.type,
        id = _getValidProps.id,
        name = _getValidProps.name,
        required = _getValidProps.required,
        disabled = _getValidProps.disabled,
        label = _getValidProps.label,
        children = _getValidProps.children,
        selectOptions = _getValidProps.selectOptions,
        value = _getValidProps.value,
        props = _getValidProps.props;

    var fieldName = name || id || this.renderKey;
    var fieldId = id || this.renderKey;
    delete props.name;
    delete props.id;

    var wrapperClasses = {
      disabled: disabled,
      invalid: !this.state.valid
    };

    var Component = type === "select" || type === "textarea" ? type : renderAs;

    var preParsedClass = "ui-input-" + type;
    var validationClass = required ? " required" : "";

    if (type === "submit" || type === "button") {
      return _react2.default.createElement(
        "div",
        { className: coreClassName },
        _react2.default.createElement(
          "div",
          {
            key: "wrapper_" + this.renderKey,
            className: (0, _classnames2.default)(preParsedClass, wrapperClasses)
          },
          _react2.default.createElement(Component, _extends({
            key: this.renderKey
          }, props, {
            className: styleClassName,
            id: fieldId,
            name: fieldName,
            type: type,
            value: label
          })),
          children
        )
      );
    } else if (type === "select") {
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
          _react2.default.createElement(
            Component,
            _extends({
              key: this.renderKey
            }, props, {
              id: fieldId,
              name: fieldName,
              type: type,
              onChange: this.handleOnChange,
              value: this.state.value
            }),
            children,
            this.renderSelectOptions(selectOptions)
          )
        )
      );
    } else if (type === "radio" || type === "checkbox") {
      delete props.checked;
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
          _react2.default.createElement(
            "label",
            {
              key: "label_" + this.renderKey,
              htmlFor: fieldId,
              className: validationClass
            },
            _react2.default.createElement(Component, _extends({
              key: this.renderKey
            }, props, {
              id: fieldId,
              name: fieldName,
              type: type,
              onClick: this.handleOnChecked,
              defaultChecked: true
            })),
            value
          )
        )
      );
    } else if (type === "file") {
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
          _react2.default.createElement(
            "label",
            null,
            this.state.value === "" ? "Choose a file..." : this.state.value,
            _react2.default.createElement(Component, _extends({
              key: this.renderKey
            }, props, {
              id: fieldId,
              name: fieldName,
              type: type,
              onChange: this.handleOnChange
            }))
          ),
          children
        )
      );
    } else if (type === "number") {
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
            type: type,
            onChange: this.handleOnChange,
            value: this.state.value
          })),
          children,
          _react2.default.createElement(
            "button",
            {
              key: "number-button_" + this.renderKey + "_up",
              className: "ui-input-number-up",
              onClick: this.handleOnNumUp
            },
            "+"
          ),
          _react2.default.createElement(
            "button",
            {
              key: "number-button_" + this.renderKey + "_down",
              className: "ui-input-number-down",
              onClick: this.handleOnNumDown
            },
            "-"
          )
        )
      );
    } else if (type === "hidden") {
      return _react2.default.createElement(Component, _extends({
        key: this.renderKey
      }, props, {
        id: fieldId,
        name: fieldName,
        type: type,
        onChange: this.handleOnChange,
        value: this.state.value
      }));
    }
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
          type: type,
          onChange: this.handleOnChange,
          value: this.state.value
        })),
        children
      )
    );
  };

  return Input;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  id: "string!",
  required: "bool",
  label: "string",
  validator: "func",
  validPattern: "regexp",
  maskPattern: "regexp",
  selectOptions: "array"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "input",
  uirole: _lib.ROLE.INPUT,
  role: _lib.ROLE.PRESENTATION,
  type: "text",
  checked: false,
  required: false,
  label: null,
  validator: null,
  validPattern: null,
  maskPattern: null,
  selectOptions: []
}), _temp);
exports.default = Input;
module.exports = exports["default"];