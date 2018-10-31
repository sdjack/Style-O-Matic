"use strict";

exports.__esModule = true;

var _class, _temp, _initialiseProps;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

var _TableHead = require("./TableHead.js");

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableBody = require("./TableBody.js");

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableFoot = require("./TableFoot.js");

var _TableFoot2 = _interopRequireDefault(_TableFoot);

var _TableRow = require("./TableRow.js");

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCell = require("./TableCell.js");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableData = require("./models/TableData.js");

var _TableData2 = _interopRequireDefault(_TableData);

var _Pagination = require("../Pagination/Pagination.js");

var _Pagination2 = _interopRequireDefault(_Pagination);

require("./Table.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @memberof components
                                                                                                                                                                                                                              * @namespace Table
                                                                                                                                                                                                                              * @author Steven Jackson
                                                                                                                                                                                                                             * @scss ../../scss/components/Table
                                                                                                                                                                                                                              */


function ParseSectionData(data, UUID, colSpan) {
  var output = [];
  var rowCount = data.length;
  for (var i = 0; i < rowCount; i += 1) {
    var readRow = data[i];
    var dataRow = [];
    for (var x = 0; x < colSpan; x += 1) {
      var column = readRow[x];
      if (column instanceof Object) {
        var content = column.content,
            props = _objectWithoutProperties(column, ["content"]);

        dataRow.push(_react2.default.createElement(
          _TableCell2.default,
          _extends({ key: "td_" + UUID + "_cell_" + i + x }, props),
          content
        ));
      } else {
        dataRow.push(_react2.default.createElement(
          _TableCell2.default,
          { key: "td_" + UUID + "_cell_" + i + x },
          column
        ));
      }
    }
    output.push(_react2.default.createElement(
      _TableRow2.default,
      { key: "td_" + UUID + "_cellrow" + i },
      dataRow
    ));
  }
  return output;
}

function ParseTableData(data) {
  var output = [];
  var UUID = (0, _lib.uID)();
  var colSpan = 0;
  if (data.head && data.head[0]) {
    colSpan = data.head[0].length;
    var compiled = ParseSectionData(data.head, UUID, colSpan);
    output.push(_react2.default.createElement(
      _TableHead2.default,
      { key: "thead_" + UUID },
      compiled
    ));
  }
  if (data.body && data.body[0]) {
    colSpan = colSpan === 0 ? data.body[0].length : colSpan;
    var _compiled = ParseSectionData(data.body, UUID, colSpan);
    output.push(_react2.default.createElement(
      _TableBody2.default,
      { key: "tbody_" + UUID },
      _compiled
    ));
  }
  if (data.foot && data.foot[0]) {
    colSpan = colSpan === 0 ? data.foot[0].length : colSpan;
    var _compiled2 = ParseSectionData(data.foot, UUID, colSpan);
    output.push(_react2.default.createElement(
      _TableFoot2.default,
      { key: "tfoot_" + UUID },
      _compiled2
    ));
  }
  return output;
}

var Table = (_temp = _class = function (_CoreComponent) {
  _inherits(Table, _CoreComponent);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.columns = {};
    _this.data = _TableData2.default.init(_this);
    return _this;
  }

  /* eslint-disable */

  /* eslint-enable */

  return Table;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  bordered: "bool",
  padded: "bool",
  hover: "bool",
  spaced: "bool",
  striped: "bool",
  pagination: "number"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "table",
  uirole: _lib.ROLE.TABLE,
  bordered: false,
  padded: false,
  hover: false,
  spaced: false,
  striped: false,
  pagination: null
}), _class.Head = _TableHead2.default, _class.Body = _TableBody2.default, _class.Foot = _TableFoot2.default, _class.Row = _TableRow2.default, _class.Cell = _TableCell2.default, _class.FactoryData = ParseTableData, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleFilter = function (node) {
    _this2.forceUpdate();
  };

  this.handleSort = function (node) {
    var _node$props = node.props,
        rowid = _node$props.rowid,
        columnid = _node$props.columnid;

    var dataColumn = _this2.data.getColumn(columnid);
    dataColumn.changeSortState();
    _this2.forceUpdate();
  };

  this.handleEdit = function (node) {
    _this2.forceUpdate();
  };

  this.handlePageChange = function (pageNum) {
    _this2.data.setPagination(pageNum);
    _this2.forceUpdate();
  };

  this.preParseChildren = function (children) {
    if (children && (children.head || children.body || children.foot)) {
      return ParseTableData(children);
    }
    return children;
  };

  this.renderInteractiveChild = function (child, props) {
    var role = child.props.uirole;
    var ref = function ref(c) {
      _this2[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this2.chainFunction(child.ref, ref);
    }
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: ref,
      data: _this2.data,
      uiclass: _this2.childPrefix(child.props.uirole),
      filtering: _this2.handleFilter,
      sorting: _this2.handleSort,
      editing: _this2.handleEdit
    }));
  };

  this.renderChild = function (child, props) {
    var role = child.props.uirole;
    var ref = function ref(c) {
      _this2[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this2.chainFunction(child.ref, ref);
    }
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: ref,
      data: _this2.data,
      uiclass: _this2.childPrefix(child.props.uirole)
    }));
  };

  this.preRenderBody = function (children, inherited) {
    var output = [];
    _react2.default.Children.map(children, function (child) {
      if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _TableBody2.default.defaultProps.uirole) {
        output.push(_this2.renderChild(child, inherited));
      }
      return null;
    });
    return output;
  };

  this.renderPagination = function () {
    var output = [];
    if (_this2.props.pagination) {
      var pageConfig = _this2.data.getPagination(_this2);
      var uuid = _this2.props.uuid;

      output.push(_react2.default.createElement(
        _TableFoot2.default,
        { key: "tfoot_pagination_" + uuid, data: _this2.data },
        _react2.default.createElement(
          _TableRow2.default,
          { key: "td_pagination_" + uuid + "_cellrow" },
          _react2.default.createElement(
            _TableCell2.default,
            {
              key: "td_pagination_" + uuid + "_cell",
              colSpan: pageConfig.cols
            },
            _react2.default.createElement(_Pagination2.default, {
              pageTotal: pageConfig.pageTotal,
              pageNum: pageConfig.pageNum,
              onPageChange: _this2.handlePageChange
            })
          )
        )
      ));
    }
    return output;
  };

  this.renderCore = function () {
    var _getValidProps = (0, _lib.getValidProps)(_this2.props),
        Component = _getValidProps.renderAs,
        className = _getValidProps.className,
        bordered = _getValidProps.bordered,
        padded = _getValidProps.padded,
        hover = _getValidProps.hover,
        spaced = _getValidProps.spaced,
        striped = _getValidProps.striped,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var classes = {
      "ui-table-bordered": bordered,
      "ui-table-padded": padded,
      "ui-table-hover": hover,
      "ui-table-spaced": spaced,
      "ui-table-striped": striped
    };

    var uiClassCore = (0, _classnames2.default)(className, classes);
    delete props.className;
    var tableContents = _this2.preParseChildren(children);

    var bodyRows = _this2.preRenderBody(tableContents, inherited);

    return _react2.default.createElement(
      Component,
      _extends({ className: uiClassCore }, props),
      _react2.default.Children.map(tableContents, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _TableHead2.default.defaultProps.uirole) {
          return _this2.renderInteractiveChild(child, inherited);
        }
        return null;
      }),
      bodyRows,
      _react2.default.Children.map(tableContents, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole !== _TableHead2.default.defaultProps.uirole && child.props.uirole !== _TableBody2.default.defaultProps.uirole) {
          switch (child.props.uirole) {
            case _TableFoot2.default.defaultProps.uirole:
              return _this2.renderInteractiveChild(child, inherited);
            default:
              return child;
          }
        }
        return null;
      }),
      _this2.renderPagination()
    );
  };
}, _temp);
exports.default = Table;

/**
 * @example <Table bordered panel>
   {Table.FactoryData({
     head: [
       [
         {
           content: "Name",
           filterable: true
         },
         {
           content: "Email",
           editable: true
         },
         {
           content: "ID",
           sortable: true
         }
       ]
     ],
     body: [
       ["Default User", "generic@email.com", "001"],
       ["Another User", "another@email.com", "002"],
       ["Mystery User", "mystery@email.com", "003"],
       ["Ignored User", "ignored@email.com", "004"],
       ["Broken User", null, "005"],
       [null, "ghost@email.com", "000"]
     ]
   })}
 </Table>
 */

module.exports = exports["default"];