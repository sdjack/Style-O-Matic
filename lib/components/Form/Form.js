"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /**
                     * @memberof components
                     * @namespace Form
                     * @author Steven Jackson
                    * @scss ../../scss/components/Form
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _Input = require("../Input/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _Radio = require("../Radio/Radio.js");

var _Radio2 = _interopRequireDefault(_Radio);

var _Select = require("../Select/Select.js");

var _Select2 = _interopRequireDefault(_Select);

var _Textarea = require("../Textarea/Textarea.js");

var _Textarea2 = _interopRequireDefault(_Textarea);

var _FormRow = require("./FormRow.js");

var _FormRow2 = _interopRequireDefault(_FormRow);

require("./Form.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (_temp2 = _class = function (_CoreComponent) {
  _inherits(Form, _CoreComponent);

  function Form() {
    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.getFieldValue = function (fieldKey) {
      var value = null;
      for (var i = 0; i < _this.rows.length; i += 1) {
        var row = _this.rows[i];
        var fieldValue = row.getFieldValue(fieldKey);
        if (fieldValue) {
          value = fieldValue;
        }
      }
      if (!value) {
        _this.fields.map(function (field) {
          if (field.key === fieldKey) {
            value = field.element.getValue();
          }
          return null;
        });
      }
      return value;
    }, _this.getFormData = function () {
      var formData = {};
      for (var i = 0; i < _this.rows.length; i += 1) {
        var row = _this.rows[i];
        var rowFields = row.getAllFieldValues();
        for (var x = 0; x < rowFields.length; x += 1) {
          var field = rowFields[x];
          formData[field.key] = field.value;
        }
      }
      _this.fields.map(function (field) {
        formData[field.key] = field.element.getValue();
        return null;
      });
      return formData;
    }, _this.rows = [], _this.fields = [], _this.handleForcedUpdate = function () {
      if (_this.node) {
        _this.forceUpdate();
      }
    }, _this.handleOnInvalid = function (e) {
      // console.log(e);
    }, _this.handleOnSubmit = function (e) {
      if (_this.props.onSubmit) {
        var formData = _this.getFormData();
        _this.props.onSubmit(e, formData);
      }
    }, _this.renderRow = function (child, props) {
      var role = child.props.uirole || _lib.ROLE.ROW;
      var ref = function ref(c) {
        if (c) {
          _this.rows.push(c);
        }
      };
      if (typeof child.ref !== "string") {
        ref = _this.chainFunction(child.ref, ref);
      }
      return (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        uiclass: _this.childPrefix(role)
      }));
    }, _this.renderInput = function (child, props) {
      var role = child.props.uirole || _lib.ROLE.INPUT;
      var key = child.props.name || child.props.id;
      var ref = function ref(c) {
        if (c) {
          _this.fields.push({ key: key, element: c });
        }
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

  Form.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    this.rows = [];
    this.fields = [];

    delete props.onSubmit;

    return _react2.default.createElement(
      Component,
      _extends({}, props, { ref: this.onSetRef, onSubmit: this.handleOnSubmit }),
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          switch (child.props.uirole) {
            case _lib.ROLE.ROW:
              return _this2.renderRow(child, inherited);
            case _lib.ROLE.INPUT:
              return _this2.renderInput(child, inherited);
            case _lib.ROLE.DATEPICKER:
              return _this2.renderInput(child, inherited);
            default:
              return child;
          }
        }
        return child;
      })
    );
  };

  return Form;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "form",
  uirole: _lib.ROLE.FORM
}), _class.Row = _FormRow2.default, _class.Input = _Input2.default, _class.Radio = _Radio2.default, _class.Select = _Select2.default, _class.Textarea = _Textarea2.default, _temp2);
exports.default = Form;

/**
 * @example <Form>
   <Form.Row>
     <Input id="demo-input1" label="Text" />
     <Input id="demo-input2" label="Password" type="password" />
     <Input id="demo-input3" label="Color" type="color" />
   </Form.Row>
   <Form.Row>
     <Select
       id="demo-input4"
       label="Select"
       options={[
         { value: "Option1", label: "Select Option 1" },
         { value: "Option2", label: "Select Option 2" },
         { value: "Option3", label: "Select Option 3" },
         { value: "Option4", label: "Select Option 4" },
         { value: "Option5", label: "Select Option 5" },
         { value: "Option6", label: "Select Option 6" },
         { value: "Option7", label: "Select Option 7" }
       ]}
     />
     <Input id="demo-input6" label="Time" type="time" />
     <Input id="demo-input7" label="Number" type="number" />
   </Form.Row>
   <Form.Row>
     <Input id="demo-input8" label="Email" type="email" />
     <Input id="demo-input9" label="Telephone" type="tel" />
     <Input id="demo-input10" label="URL" type="url" />
   </Form.Row>
   <Form.Row>
     <Input id="demo-input5a" label="Date (Browser Native)" type="date" />
     <DatePicker
       id="demo-input5b"
       label="DatePicker (SoM Component)"
       inputenabled
       iconenabled
     />
   </Form.Row>
   <Form.Row>
     <Radio
       id="demo-input11"
       label="Radio"
       options={[
         { value: "Radio1", label: "Radio 1" },
         { value: "Radio2", label: "Radio 2" },
         { value: "Radio3", label: "Radio 3" },
         { value: "Radio4", label: "Radio 4" },
         { value: "Radio5", label: "Radio 5" },
         { value: "Radio6", label: "Radio 6" },
         { value: "Radio7", label: "Radio 7" }
       ]}
     />
   </Form.Row>
   <Form.Row>
     <Input
       id="demo-input12"
       label="Checkbox 1"
       type="checkbox"
       value="Check"
       required
     />
     <Input
       id="demo-input13"
       label="Checkbox 2"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input14"
       label="Checkbox 3"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input15"
       label="Checkbox 4"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input16"
       label="Checkbox 5"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input17"
       label="Checkbox 6"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input18"
       label="Checkbox 7"
       type="checkbox"
       value="Check"
     />
   </Form.Row>
   <Form.Row>
     <Textarea id="demo-input19" label="Text Area" />
   </Form.Row>
   <Form.Row>
     <Input id="demo-input99" label="SUBMIT" type="submit" color="blue" />
   </Form.Row>
 </Form>
 */

module.exports = exports["default"];