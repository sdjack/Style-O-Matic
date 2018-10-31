"use strict";

exports.__esModule = true;
exports.default = undefined;

var _RowModel = require("./RowModel.js");

var _RowModel2 = _interopRequireDefault(_RowModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NO_SORT(a, b) {
  return 0;
}

function ASC_SORT(a, b) {
  if (a.value && b.value) {
    var value1 = a.value.toUpperCase();
    var value2 = b.value.toUpperCase();
    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
  }
  return 0;
}

function DESC_SORT(a, b) {
  if (a.value && b.value) {
    var value1 = a.value.toUpperCase();
    var value2 = b.value.toUpperCase();
    if (value1 > value2) {
      return -1;
    }
    if (value1 < value2) {
      return 1;
    }
  }
  return 0;
}

var SORT_STATE = {
  DISABLED: 0,
  ASC: 1,
  DESC: 2
};

var FILTER_STATE = {
  DISABLED: 0,
  ENABLED: 1
};

var SORT_FUNC = [NO_SORT, ASC_SORT, DESC_SORT];

var ColumnModel = function ColumnModel(columnIndex) {
  var _this = this;

  _classCallCheck(this, ColumnModel);

  this.setValue = function (index, value) {
    if (!_this.rows[index]) {
      _this.rows.push(new _RowModel2.default(index, value));
    } else {
      _this.rows[index].setValue(value);
    }
  };

  this.setFilterType = function (type) {
    _this.filterType = type;
  };

  this.setFilterSearch = function (search) {
    if (search !== "") {
      _this.filterSearch = search;
      _this.filterState = FILTER_STATE.ENABLED;
    } else {
      _this.filterSearch = null;
      _this.filterState = FILTER_STATE.DISABLED;
    }
  };

  this.clearFilter = function () {
    _this.filterState = FILTER_STATE.DISABLED;
    _this.filterSearch = null;
  };

  this.changeFilterState = function () {
    _this.filterState += 1;
    if (_this.filterState > FILTER_STATE.ENABLED) {
      _this.filterState = FILTER_STATE.DISABLED;
    }
  };

  this.changeSortState = function () {
    _this.sortState += 1;
    if (_this.sortState > SORT_STATE.DESC) {
      _this.sortState = SORT_STATE.DISABLED;
    }
  };

  this.sortColumn = function (src) {
    var fn = SORT_FUNC[_this.sortState];
    var mapped = _this.rows.sort(fn);
    return mapped.map(function (row) {
      return src[row.index];
    });
  };

  this.filterColumn = function (src) {
    var filtered = [];
    _this.rows.map(function (row) {
      if (row.value && row.value.indexOf(_this.filterSearch) !== -1) {
        filtered.push(src[row.index]);
      }
      return null;
    });
    return filtered;
  };

  this.modify = function (src) {
    var visibleRows = src;
    if (_this.rows.length > 0) {
      if (_this.sortState > 0) {
        visibleRows = _this.sortColumn(visibleRows);
      }
      if (_this.filterSearch && _this.filterState > 0) {
        visibleRows = _this.filterColumn(visibleRows);
      }
    }
    return visibleRows;
  };

  this.index = columnIndex;
  this.rows = [];
  this.filterType = 0;
  this.filterState = 0;
  this.filterSearch = null;
  this.sortState = 0;
};

exports.default = ColumnModel;
module.exports = exports["default"];