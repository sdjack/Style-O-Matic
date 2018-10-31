"use strict";

exports.__esModule = true;
exports.default = undefined;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _ColumnModel = require("./ColumnModel.js");

var _ColumnModel2 = _interopRequireDefault(_ColumnModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable */

var TableDataModel = function TableDataModel() {
  var _this = this;

  _classCallCheck(this, TableDataModel);

  this.setPagination = function (page, showing) {
    _this.pageNum = page;
    _this.perPage = showing || _this.perPage;
  };

  this.setColumn = function (node) {
    var _node$props = node.props,
        rowid = _node$props.rowid,
        columnid = _node$props.columnid,
        children = _node$props.children;

    var columnTag = "column" + columnid;
    if (!_this.columns[columnTag]) {
      _this.columns[columnTag] = new _ColumnModel2.default(columnid);
      _this.columnTotal += 1;
    }
    _this.columns[columnTag].setValue(rowid, children);
  };

  this.getColumn = function (columnid) {
    var columnTag = "column" + columnid;
    if (!_this.columns[columnTag]) {
      _this.columns[columnTag] = new _ColumnModel2.default(columnid);
      _this.columnTotal += 1;
    }
    return _this.columns[columnTag];
  };

  this.getPagination = function (node) {
    _this.perPage = node.props.pagination || 0;
    var rowCount = _this.rowTotal;
    var colCount = _this.columnTotal;
    var perPage = _this.perPage > 0 ? _this.perPage : rowCount;
    var pageCount = Math.round(rowCount / perPage);
    var showPager = rowCount > perPage;
    return {
      totalRows: rowCount,
      pageNum: _this.pageNum,
      perPage: perPage,
      pageTotal: pageCount,
      enabled: showPager,
      cols: colCount
    };
  };

  this.getPaginated = function (src) {
    if (_this.perPage > 0) {
      var startIndex = (_this.pageNum - 1) * _this.perPage;
      var endIndex = startIndex + _this.perPage;
      return _lodash2.default.slice(src, startIndex, endIndex);
    }
    return src;
  };

  this.applyChanges = function (src) {
    _this.rowTotal = src.length;
    var visibleRows = src;
    if (src && src.length > 0) {
      Object.entries(_this.columns).forEach(function (_ref) {
        var columnTag = _ref[0],
            column = _ref[1];

        visibleRows = column.modify(visibleRows);
      });
    }
    return _this.getPaginated(visibleRows);
  };

  this.columns = {};
  this.registry = {};
  this.pageNum = 1;
  this.pageTotal = 1;
  this.rowTotal = 0;
  this.columnTotal = 0;
  this.perPage = 0;
};

exports.default = TableDataModel;
module.exports = exports["default"];