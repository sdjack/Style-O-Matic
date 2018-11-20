"use strict";

exports.__esModule = true;

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

var DropdownContent = (_temp2 = _class = function (_CoreComponent) {
  _inherits(DropdownContent, _CoreComponent);

  function DropdownContent() {
    var _temp, _this, _ret;

    _classCallCheck(this, DropdownContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.items = [], _this.renderChild = function (child, props) {
      var ref = function ref(c) {
        _this.items.push(c);
      };
      if (typeof child.ref !== "string") {
        ref = _this.chainFunction(child.ref, ref);
      }
      return (0, _react.cloneElement)(child, {
        ref: ref,
        className: "ui-dropdown-item"
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DropdownContent.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    this.items = [];

    return _react2.default.createElement(
      Component,
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          switch (child.props.uirole) {
            case _lib.ROLE.HEADER:
              return _this2.renderChild(child, inherited);
            default:
              return _react2.default.createElement(
                "li",
                null,
                _this2.renderChild(child, inherited)
              );
          }
        }
        return _react2.default.createElement(
          "li",
          null,
          _this2.renderChild(child, inherited)
        );
      })
    );
  };

  return DropdownContent;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "ul",
  uirole: _lib.ROLE.CONTENT
}), _temp2);
exports.default = DropdownContent;
module.exports = exports["default"];