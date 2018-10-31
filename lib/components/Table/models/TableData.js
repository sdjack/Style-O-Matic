"use strict";

exports.__esModule = true;

var _class, _temp;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _TableDataModel = require("./TableDataModel.js");

var _TableDataModel2 = _interopRequireDefault(_TableDataModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableData = (_temp = _class = function TableData() {
  var _this = this;

  _classCallCheck(this, TableData);

  this.init = function (node) {
    var tag = node.props.uuid;
    if (!_this.instances[tag]) {
      _this.instances[tag] = new _TableDataModel2.default();
    }
    return _this.instances[tag];
  };

  this.instances = {};
}, _class.FILTER_TYPE = {
  NONE: 0,
  STRING: 1,
  NUMBER: 2,
  DATE: 3,
  SELECT: 4
}, _class.FILTER_STATE = {
  DISABLED: 0,
  ENABLED: 1
}, _class.SORT_STATE = {
  DISABLED: 0,
  ASC: 1,
  DESC: 2
}, _class.TABLE_TYPE = {
  DEFAULT: 0,
  HORIZONTAL: 1,
  OMNI: 2,
  NO_HEADERS: 3
}, _temp);
exports.default = new TableData();
module.exports = exports["default"];