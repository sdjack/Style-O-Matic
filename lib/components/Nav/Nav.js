"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof components
                                      * @namespace Nav
                                      * @author Steven Jackson
                                     * @scss ../../scss/components/Nav
                                      * @example <Nav>
                                                  Example Content
                                                </Nav>
                                      */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _NavItem = require("./NavItem.js");

var _NavItem2 = _interopRequireDefault(_NavItem);

require("./Nav.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = (_temp = _class = function (_CoreComponent) {
  _inherits(Nav, _CoreComponent);

  function Nav(props) {
    _classCallCheck(this, Nav);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this, props].concat(args)));

    _initialiseProps.call(_this);

    var isMobile = window.innerWidth <= 1024;
    var collapsed = isMobile ? true : props.collapsed;
    _this.state = {
      collapsed: collapsed,
      isMobile: isMobile
    };
    return _this;
  }

  Nav.prototype.componentDidMount = function componentDidMount() {
    window.addEventListener("resize", this.detectIfMobile);
  };

  Nav.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.detectIfMobile);
  };

  return Nav;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "nav",
  uirole: _lib.ROLE.NAV
}), _class.Item = _NavItem2.default, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleOnClick = function () {
    _this2.setState({ collapsed: !_this2.state.collapsed });
  };

  this.detectIfMobile = function () {
    var isMobile = window.innerWidth <= 1024;
    if (isMobile !== _this2.state.isMobile) {
      _this2.setState({ isMobile: isMobile });
    }
  };

  this.renderChild = function (child, props) {
    var role = child.props.uirole || _lib.ROLE.ITEM;
    var ref = function ref(c) {
      _this2[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this2.chainFunction(child.ref, ref);
    }
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: ref,
      uiclass: _this2.childPrefix(role)
    }));
  };

  this.renderCore = function () {
    var _getValidProps = (0, _lib.getValidProps)(_this2.props, _this2.state),
        Component = _getValidProps.renderAs,
        canMinimize = _getValidProps.canMinimize,
        id = _getValidProps.id,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var _state = _this2.state,
        collapsed = _state.collapsed,
        isMobile = _state.isMobile;

    var listChildren = [];
    _react2.default.Children.map(children, function (child) {
      if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && typeof child.props.uigroup !== "undefined" && child.props.uigroup === _lib.ROLE.NAV) {
        listChildren.push(_react2.default.createElement(
          "li",
          { key: id + "_" + listChildren.length },
          _this2.renderChild(child, _extends({
            collapsed: collapsed
          }, inherited))
        ));
      } else {
        listChildren.push(_react2.default.createElement(
          "li",
          { key: id + "_" + listChildren.length },
          child
        ));
      }
      return null;
    });
    return _react2.default.createElement(
      Component,
      props,
      isMobile ? _react2.default.createElement(
        "div",
        { className: "ui-nav-toggle" },
        _react2.default.createElement(
          "button",
          {
            className: "ui-nav-toggle-button",
            onClick: _this2.handleOnClick
          },
          _react2.default.createElement("i", { className: "ui-icon-menu" })
        )
      ) : null,
      _react2.default.createElement(
        "ul",
        { className: "ui-nav-list" },
        listChildren
      )
    );
  };
}, _temp);
exports.default = Nav;
module.exports = exports["default"];