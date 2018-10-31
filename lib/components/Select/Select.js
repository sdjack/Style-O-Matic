"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof components
                    * @namespace Select
                    * @author Steven Jackson
                   * @scss ../../scss/components/Select
                    * @example <Select>
                                Example Content
                              </Select>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

require("./Select.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (_temp = _class = function (_CoreComponent) {
  _inherits(Select, _CoreComponent);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.getValue = function () {
      return _this.state.value;
    };

    _this.handleOnChange = function (e) {
      e.preventDefault();
      _this.setState({ value: e.target.value });
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
            key: "label_" + _this.renderKey,
            htmlFor: id,
            className: validationClass
          },
          label
        );
      }
      return _react2.default.createElement("span", null);
    };

    _this.renderSelectOptions = function (options) {
      var output = [];
      for (var i = 0; i < options.length; i += 1) {
        var optionData = options[i];
        output.push(_react2.default.createElement(
          "option",
          {
            key: "option_" + i + "_" + _this.renderKey,
            id: "option_" + i,
            name: "option_" + i,
            value: optionData.value
          },
          optionData.label
        ));
      }
      return output;
    };

    var defaultValue = props.value;
    _this.renderKey = "select_" + props.uuid;
    if (!defaultValue) {
      defaultValue = props.options[0] ? props.options[0].value : "";
    }
    _this.state = {
      value: defaultValue,
      valid: true
    };
    return _this;
  }

  Select.prototype.render = function render() {
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

    var fieldName = name || id || this.renderKey;
    var fieldId = id || name || this.renderKey;
    var preParsedClass = "ui-select";
    var wrapperClasses = {
      disabled: disabled,
      invalid: !this.state.valid
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
        _react2.default.createElement(
          Component,
          _extends({
            key: this.renderKey
          }, props, {
            id: fieldId,
            name: fieldName,
            onChange: this.handleOnChange,
            value: this.state.value
          }),
          children,
          this.renderSelectOptions(options)
        )
      )
    );
  };

  return Select;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  id: "string!",
  required: "bool",
  label: "string",
  validator: "func",
  options: "array"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "select",
  uirole: _lib.ROLE.INPUT,
  required: false,
  label: null,
  validator: null,
  options: []
}), _temp);
exports.default = Select;
module.exports = exports["default"];