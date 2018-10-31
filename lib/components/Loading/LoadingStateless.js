"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./Loading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
var LoadingStateless = function LoadingStateless(_ref) {
  var scene = _ref.scene;

  var wrapperClass = "ui-loading-" + scene;
  var actorClass = "ui-loading-" + scene + "-actor";
  var leftClass = "ui-loading-" + scene + "-left";
  var rightClass = "ui-loading-" + scene + "-right";
  var centerClass = "ui-loading-" + scene + "-center";
  return _react2.default.createElement(
    "div",
    { className: "ui-loading ui-overlay active" },
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

exports.default = LoadingStateless;
module.exports = exports["default"];