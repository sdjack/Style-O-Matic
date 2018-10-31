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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableFoot = (_temp2 = _class = function (_CoreComponent) {
  _inherits(TableFoot, _CoreComponent);

  function TableFoot() {
    var _temp, _this, _ret;

    _classCallCheck(this, TableFoot);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.rows = [], _this.rowCount = 0, _this.renderChild = function (child, props) {
      var ref = function ref(c) {
        _this.rows.push(c);
      };
      if (typeof child.ref !== "string") {
        ref = _this.chainFunction(child.ref, ref);
      }
      var index = _this.rowCount;
      _this.rowCount += 1;
      return (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        rowid: index,
        data: _this.props.data,
        uiclass: _this.childPrefix(child.props.uirole),
        rowtype: "foot"
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TableFoot.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    this.rows = [];
    this.rowCount = 0;

    return _react2.default.createElement(
      Component,
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _lib.ROLE.ROW) {
          return _this2.renderChild(child, inherited);
        }
        return child;
      })
    );
  };

  return TableFoot;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "tfoot",
  uirole: _lib.ROLE.TFOOT
}), _temp2);
exports.default = TableFoot;
module.exports = exports["default"];