"use strict";

exports.__esModule = true;

var _class, _temp, _initialiseProps;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RowModel = (_temp = _class = function RowModel(index, value) {
  _classCallCheck(this, RowModel);

  _initialiseProps.call(this);

  this.defaultIndex = index;
  this.index = index;
  this.value = value;
}, _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.setValue = function (value) {
    _this.value = value;
  };

  this.setIndex = function (index) {
    _this.index = index;
  };

  this.resetIndex = function () {
    _this.index = _this.defaultIndex;
  };
}, _temp);
exports.default = RowModel;
module.exports = exports["default"];