"use strict";

exports.__esModule = true;

var _class, _temp2; /**
                     * @memberof components
                     * @namespace TopBar
                     * @author Steven Jackson
                    * @scss ../../scss/components/TopBar
                     * @example <TopBar>
                                 Example Content
                               </TopBar>
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

require("./TopBar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = (_temp2 = _class = function (_CoreComponent) {
  _inherits(TopBar, _CoreComponent);

  function TopBar() {
    var _temp, _this, _ret;

    _classCallCheck(this, TopBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.renderCore = function () {
      var _getValidProps = (0, _lib.getValidProps)(_this.props),
          Component = _getValidProps.renderAs,
          children = _getValidProps.children,
          props = _getValidProps.props;

      return _react2.default.createElement(
        Component,
        props,
        children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TopBar;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.TOPBAR
}), _temp2);
exports.default = TopBar;
module.exports = exports["default"];