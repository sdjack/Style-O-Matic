"use strict";

exports.__esModule = true;

var _class, _temp2; /**
                     * @memberof components
                     * @namespace Grid
                     * @author Steven Jackson
                    * @scss ../../scss/components/Grid
                     * @example <Grid>
                                 Example Content
                               </Grid>
                     */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _GridRow = require("./GridRow.js");

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require("./GridColumn.js");

var _GridColumn2 = _interopRequireDefault(_GridColumn);

require("./Grid.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = (_temp2 = _class = function (_CoreComponent) {
  _inherits(Grid, _CoreComponent);

  function Grid() {
    var _temp, _this, _ret;

    _classCallCheck(this, Grid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.renderCore = function () {
      var _getValidProps = (0, _lib.getValidProps)(_this.props),
          Component = _getValidProps.renderAs,
          children = _getValidProps.children,
          props = _getValidProps.props,
          inherited = _getValidProps.inherited;

      return _react2.default.createElement(
        Component,
        props,
        _react2.default.Children.map(children, function (child) {
          if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
            switch (child.props.uirole) {
              case _lib.ROLE.ROW:
                return _this.renderChild(child, inherited);
              default:
                return child;
            }
          }
          return child;
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Grid;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.GRID
}), _class.Row = _GridRow2.default, _class.Column = _GridColumn2.default, _temp2);
exports.default = Grid;
module.exports = exports["default"];