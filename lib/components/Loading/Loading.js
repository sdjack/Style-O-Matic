"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @namespace Loading
                    * @author Steven Jackson
                    * @scss ../../scss/components/Loading
                    * @example <Loading>
                                Example Content
                              </Loading>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

require("./Loading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = (_temp = _class = function (_CoreComponent) {
  _inherits(Loading, _CoreComponent);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  Loading.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        scene = _getValidProps.scene,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var wrapperClass = "ui-loading-" + scene;
    var actorClass = "ui-loading-" + scene + "-actor";
    var leftClass = "ui-loading-" + scene + "-left";
    var rightClass = "ui-loading-" + scene + "-right";
    var centerClass = "ui-loading-" + scene + "-center";
    return _react2.default.createElement(
      "div",
      props,
      _react2.default.createElement(
        "div",
        { className: "ui-loading-scene-wrapper " + wrapperClass },
        _react2.default.createElement(
          "div",
          { className: "ui-loading-scene" },
          _react2.default.createElement("div", { className: actorClass + " " + leftClass }),
          _react2.default.createElement(
            "div",
            { className: actorClass + " " + centerClass },
            _react2.default.createElement("div", { className: centerClass + "1" }),
            _react2.default.createElement("div", { className: centerClass + "2" }),
            _react2.default.createElement("div", { className: centerClass + "3" }),
            _react2.default.createElement("div", { className: centerClass + "4" }),
            _react2.default.createElement("div", { className: centerClass + "5" }),
            _react2.default.createElement("div", { className: centerClass + "6" }),
            _react2.default.createElement("div", { className: centerClass + "7" }),
            _react2.default.createElement("div", { className: centerClass + "8" }),
            _react2.default.createElement("div", { className: centerClass + "9" })
          ),
          _react2.default.createElement("div", { className: actorClass + " " + rightClass })
        )
      )
    );
  };

  return Loading;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  scene: "string"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.LOADING,
  scene: "sheep"
}), _temp);
exports.default = Loading;
module.exports = exports["default"];