"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2; /**
                     * @memberof components
                     * @todo Write sub-component documentation
                     * @author Steven Jackson
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormRow = (_temp2 = _class = function (_CoreComponent) {
  _inherits(FormRow, _CoreComponent);

  function FormRow() {
    var _temp, _this, _ret;

    _classCallCheck(this, FormRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.getFieldValue = function (fieldKey) {
      var value = null;
      _this.fields.map(function (field) {
        if (field.key === fieldKey) {
          value = field.element.getValue();
        }
        return null;
      });
      return value;
    }, _this.getAllFieldValues = function () {
      return _this.fields.map(function (field) {
        return {
          key: field.key,
          value: field.element.getValue()
        };
      });
    }, _this.fields = [], _this.renderLabel = function (label) {
      if (label !== null) {
        return _react2.default.createElement(
          "span",
          { key: "label_" + _this.state.renderKey, className: "label" },
          label
        );
      }
      return _react2.default.createElement("span", null);
    }, _this.renderChild = function (child, props) {
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

  FormRow.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        children = _getValidProps.children,
        className = _getValidProps.className,
        label = _getValidProps.label,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    this.fields = [];
    return _react2.default.createElement(
      "div",
      props,
      this.renderLabel(label),
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          switch (child.props.uirole) {
            case _lib.ROLE.INPUT:
              return _this2.renderChild(child, inherited);
            case _lib.ROLE.DATEPICKER:
              return _this2.renderChild(child, inherited);
            default:
              return child;
          }
        }
        return child;
      })
    );
  };

  return FormRow;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  uirole: _lib.ROLE.ROW
}), _temp2);
exports.default = FormRow;
module.exports = exports["default"];