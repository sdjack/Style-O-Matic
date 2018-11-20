"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof components
                    * @namespace Card
                    * @author Steven Jackson
                   * @scss ../../scss/components/Card
                    * @example <Card align="center" styled round>
                      <Card.Header>
                        <Card.Icon icon="star" />
                        Card Header
                        <Card.Icon icon="star" />
                      </Card.Header>
                      <Card.Content>Card Content</Card.Content>
                      <Card.Footer>
                        <Card.Icon icon="star" />
                        Card Footer
                        <Card.Icon icon="star" />
                      </Card.Footer>
                    </Card>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

require("./Card.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = (_temp = _class = function (_CoreComponent) {
  _inherits(Card, _CoreComponent);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  Card.prototype.render = function render() {
    var _classes,
        _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        className = _getValidProps.className,
        align = _getValidProps.align,
        styled = _getValidProps.styled,
        round = _getValidProps.round,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var classes = (_classes = {}, _classes["ui-card-align-" + align] = align, _classes["ui-card-styled"] = styled, _classes["ui-card-round"] = round, _classes);

    var uiClassCore = (0, _classnames2.default)(className, classes);
    delete props.className;
    return _react2.default.createElement(
      Component,
      _extends({}, props, { className: uiClassCore }),
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          return _this2.renderChild(child, inherited);
        }
        return child;
      })
    );
  };

  return Card;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  styled: "bool",
  round: "bool"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.CARD,
  styled: false,
  round: false
}), _temp);
exports.default = Card;
module.exports = exports["default"];