"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof components
                                      * @namespace ButtonBar
                                      * @author Steven Jackson
                                     * @scss ../../scss/components/ButtonBar
                                      * @example <ButtonBar>
                                        <ButtonBar.Button>1</ButtonBar.Button>
                                        <ButtonBar.Button>2</ButtonBar.Button>
                                        <ButtonBar.Button>3</ButtonBar.Button>
                                        <ButtonBar.Button>4</ButtonBar.Button>
                                      </ButtonBar>
                                      */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _Button = require("../Button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

require("./ButtonBar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonBar = (_temp = _class = function (_CoreComponent) {
  _inherits(ButtonBar, _CoreComponent);

  function ButtonBar(props) {
    _classCallCheck(this, ButtonBar);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      activeItem: ""
    };
    return _this;
  }

  ButtonBar.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    return _react2.default.createElement(
      Component,
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _lib.ROLE.BUTTON) {
          return _this2.renderChild(child, inherited);
        }
        return child;
      })
    );
  };

  return ButtonBar;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)(), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.BUTTONBAR,
  id: "buttonbar_id",
  dropdown: false
}), _class.Button = _Button2.default, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleOnClick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    var itemdex = e.currentTarget.attributes.itemdex;

    var activeItem = itemdex.value;
    if (activeItem === _this3.state.activeItem) {
      _this3.setState({ activeItem: "" });
    } else {
      _this3.setState({ activeItem: activeItem });
    }
  };

  this.renderChild = function (child, props) {
    var role = child.props.uirole || _lib.ROLE.BUTTON;
    var activeItem = "button-bar-item_" + _this3.maxIndex;
    var ref = function ref(c) {
      _this3[activeItem] = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this3.chainFunction(child.ref, ref);
    }
    _this3.maxIndex = _this3.maxIndex + 1;
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: ref,
      itemdex: activeItem,
      active: activeItem === _this3.state.activeItem,
      uiclass: _this3.childPrefix(role),
      onClick: _this3.chainFunction(child.props.onClick, _this3.handleOnClick)
    }));
  };
}, _temp);
exports.default = ButtonBar;
module.exports = exports["default"];