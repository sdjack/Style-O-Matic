"use strict";

exports.__esModule = true;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @memberof utilities
                                                                                                                                                           * @namespace UIGlobals
                                                                                                                                                           * @author Steven Jackson
                                                                                                                                                           */


/**
 * [defaultRect description]
 * @type {Object}
 */
var defaultRect = {
  x: 0,
  y: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0
};
/**
 * [UIGlobals description]
 * @class
 */

var UIGlobals = function UIGlobals() {
  _classCallCheck(this, UIGlobals);

  this.getScreenDimensions = function () {
    if (document && document.body) {
      return document.body.getBoundingClientRect();
    }
    return defaultRect;
  };

  this.applySetting = function (param, value) {
    localStorage.setItem(param, value);
  };

  this.readSetting = function (param) {
    return localStorage.getItem(param);
  };
};

exports.default = new UIGlobals();
module.exports = exports["default"];