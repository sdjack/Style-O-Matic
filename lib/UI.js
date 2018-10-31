"use strict";

exports.__esModule = true;

var _EventManager = require("./lib/EventManager");

var _EventManager2 = _interopRequireDefault(_EventManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @class
                                                                                                                                                           * @ignore
                                                                                                                                                           */


var UI = function UI() {
  _classCallCheck(this, UI);

  this.setTheme = function (value) {
    _EventManager2.default.applySetting("theme", value);
  };

  this.getTheme = function () {
    return _EventManager2.default.readSetting("theme");
  };
};

exports.default = new UI();
module.exports = exports["default"];