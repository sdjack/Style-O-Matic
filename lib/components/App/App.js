"use strict";

exports.__esModule = true;

var _class, _temp2; /**
                     * @memberof components
                     * @namespace App
                     * @author Steven Jackson
                    * @scss ../../scss/components/App
                     * @example <App>
                                 Example Content
                               </App>
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _lib = require("../../lib");

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_temp2 = _class = function (_CoreComponent) {
  _inherits(App, _CoreComponent);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.parseContainers = function (children) {
      var drawer = [];
      var header = [];
      var footer = [];
      var main = [];
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          switch (child.props.uirole) {
            case _lib.ROLE.DRAWER:
              drawer.push(child);
              return null;
            case _lib.ROLE.HEADER:
              header.push(child);
              return null;
            case _lib.ROLE.FOOTER:
              footer.push(child);
              return null;
            default:
              main.push(child);
              return null;
          }
        }
        return null;
      });
      var output = [];
      if (header.length > 0) {
        output = _lodash2.default.concat(output, header);
      }
      output.push(_react2.default.createElement(
        "div",
        { className: "ui-app-container", key: "app-drawer" },
        drawer,
        main
      ));
      if (footer.length > 0) {
        output = _lodash2.default.concat(output, footer);
      }
      return output;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  App.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var containers = this.parseContainers(children);

    return _react2.default.createElement(
      Component,
      props,
      containers
    );
  };

  return App;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.APP
}), _temp2);
exports.default = App;
module.exports = exports["default"];