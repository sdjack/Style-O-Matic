"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @namespace Pagination
                    * @author Steven Jackson
                    * @scss ../../scss/components/Pagination
                    * @example <Pagination pageTotal={999} />
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

require("./Pagination.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = (_temp = _class = function (_CoreComponent) {
  _inherits(Pagination, _CoreComponent);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.handlePageClick = function (e, pageRequest) {
      e.preventDefault();
      var currentPage = _this.state.currentPage;
      var onPageChange = _this.props.onPageChange;

      if (pageRequest !== -1 && pageRequest !== currentPage) {
        if (onPageChange) {
          onPageChange(pageRequest);
        }
      }
      _this.setState({ currentPage: pageRequest });
    };

    _this.handleForwardClick = function (e) {
      e.preventDefault();
      var currentPage = _this.state.currentPage;
      var _this$props = _this.props,
          pageTotal = _this$props.pageTotal,
          onPageChange = _this$props.onPageChange;

      if (currentPage + 1 <= pageTotal) {
        if (onPageChange) {
          onPageChange(currentPage + 1);
        }
        _this.setState({ currentPage: currentPage + 1 });
      }
    };

    _this.handleBackwardClick = function (e) {
      e.preventDefault();
      var currentPage = _this.state.currentPage;
      var onPageChange = _this.props.onPageChange;

      if (currentPage - 1 > 0) {
        if (onPageChange) {
          onPageChange(currentPage - 1);
        }
        _this.setState({ currentPage: currentPage - 1 });
      }
    };

    _this.handleFastForwardClick = function (e) {
      e.preventDefault();
      var currentPage = _this.state.currentPage;
      var _this$props2 = _this.props,
          pageTotal = _this$props2.pageTotal,
          onPageChange = _this$props2.onPageChange;

      if (currentPage !== pageTotal) {
        if (onPageChange) {
          onPageChange(pageTotal);
        }
        _this.setState({ currentPage: pageTotal });
      }
    };

    _this.handleFastBackwardClick = function (e) {
      e.preventDefault();
      var currentPage = _this.state.currentPage;
      var onPageChange = _this.props.onPageChange;

      if (currentPage !== 1) {
        if (onPageChange) {
          onPageChange(1);
        }
        _this.setState({ currentPage: 1 });
      }
    };

    _this.state = {
      currentPage: props.pageNum || 1
    };
    return _this;
  }

  Pagination.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        coreClassName = _getValidProps.coreClassName,
        styleClassName = _getValidProps.styleClassName,
        pageTotal = _getValidProps.pageTotal;

    var currentPage = this.state.currentPage;


    var prevPage = currentPage > 1 ? currentPage - 1 : 1;
    var nextPage = currentPage < pageTotal ? currentPage + 1 : pageTotal;

    var buttonClass = "ui-pagination-button " + styleClassName;
    var prevClass = currentPage < 2 ? buttonClass + " disabled" : buttonClass;
    var nextClass = currentPage >= pageTotal ? buttonClass + " disabled" : buttonClass;
    var prevPageClass = prevPage === -1 ? buttonClass + " disabled" : buttonClass;
    var nextPageClass = nextPage === -1 ? buttonClass + " disabled" : buttonClass;

    return _react2.default.createElement(
      Component,
      { className: coreClassName },
      _react2.default.createElement(
        "button",
        {
          className: prevClass,
          onClick: function onClick(e) {
            return _this2.handleFastBackwardClick(e);
          }
        },
        _react2.default.createElement(
          "div",
          { className: "ui-pagination-control " + prevClass },
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-icon", "aria-hidden": "true" },
            "\u23EE\xA0"
          ),
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-num" },
            "1"
          )
        )
      ),
      _react2.default.createElement(
        "button",
        {
          className: prevClass,
          onClick: function onClick(e) {
            return _this2.handleBackwardClick(e);
          }
        },
        _react2.default.createElement(
          "div",
          { className: "ui-pagination-control " + prevClass },
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-icon", "aria-hidden": "true" },
            "\u23F4"
          ),
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-num" },
            prevPage
          )
        )
      ),
      _react2.default.createElement(
        "button",
        {
          className: prevClass,
          onClick: function onClick(e) {
            return _this2.handlePageClick(e, prevPage);
          }
        },
        _react2.default.createElement(
          "div",
          { className: "ui-pagination-page" },
          prevPage
        )
      ),
      _react2.default.createElement(
        "button",
        {
          className: buttonClass,
          onClick: function onClick(e) {
            return _this2.handlePageClick(e, currentPage);
          }
        },
        _react2.default.createElement(
          "div",
          { className: "ui-pagination-page active" },
          currentPage
        )
      ),
      _react2.default.createElement(
        "button",
        {
          className: nextClass,
          onClick: function onClick(e) {
            return _this2.handlePageClick(e, nextPage);
          }
        },
        _react2.default.createElement(
          "div",
          { className: "ui-pagination-page" },
          nextPage
        )
      ),
      _react2.default.createElement(
        "button",
        { className: nextClass, onClick: function onClick(e) {
            return _this2.handleForwardClick(e);
          } },
        _react2.default.createElement(
          "div",
          { className: "ui-pagination-control " + nextClass },
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-num" },
            nextPage
          ),
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-icon", "aria-hidden": "true" },
            "\u23F5"
          )
        )
      ),
      _react2.default.createElement(
        "button",
        {
          className: nextClass,
          onClick: function onClick(e) {
            return _this2.handleFastForwardClick(e);
          }
        },
        _react2.default.createElement(
          "div",
          { className: "ui-pagination-control " + nextClass },
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-num" },
            pageTotal
          ),
          _react2.default.createElement(
            "span",
            { className: "ui-pagination-icon", "aria-hidden": "true" },
            "\xA0\u23ED"
          )
        )
      )
    );
  };

  return Pagination;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  pageNum: "number",
  pageTotal: "number",
  onPageChange: "func"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.PAGINATION,
  id: "pagination_id",
  pageNum: 1,
  pageTotal: 1,
  onPageChange: null
}), _temp);
exports.default = Pagination;
module.exports = exports["default"];