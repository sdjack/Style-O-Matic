"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof components
                                      * @todo Write sub-component documentation
                                      * @author Steven Jackson
                                      */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _activeElement = require("dom-helpers/activeElement");

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = require("dom-helpers/query/contains");

var _contains2 = _interopRequireDefault(_contains);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyleOffset(ref) {
  var _UIGlobals$getScreenD = _lib.UIGlobals.getScreenDimensions(),
      screenBottom = _UIGlobals$getScreenD.bottom,
      screenHeight = _UIGlobals$getScreenD.height,
      screenWidth = _UIGlobals$getScreenD.width;

  var _ref$getBoundingClien = ref.getBoundingClientRect(),
      x = _ref$getBoundingClien.x,
      y = _ref$getBoundingClien.y,
      height = _ref$getBoundingClien.height,
      bottom = _ref$getBoundingClien.bottom,
      folderWidth = _ref$getBoundingClien.width;

  var offset = {};
  if (y > screenHeight / 2) {
    var bottomOffset = y;
    bottomOffset += height * 2;
    bottomOffset -= bottom;
    offset.bottom = bottomOffset + "px";
  }
  if (x + folderWidth > screenWidth - 10) {
    offset.right = "10px";
  }
  return offset;
}

var NavFolder = (_temp = _class = function (_CoreComponent) {
  _inherits(NavFolder, _CoreComponent);

  function NavFolder(props) {
    _classCallCheck(this, NavFolder);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.folder = null;
    _this.state = {
      closed: props.closed,
      offset: {}
    };
    return _this;
  }

  NavFolder.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        uiclass = _getValidProps.uiclass,
        coreClassName = _getValidProps.coreClassName,
        iconClassName = _getValidProps.iconClassName,
        to = _getValidProps.to,
        path = _getValidProps.path,
        label = _getValidProps.label,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var _state = this.state,
        offset = _state.offset,
        closed = _state.closed;


    var classes = {
      "ui--closed": closed,
      active: to && path.indexOf(to) !== -1
    };

    var itemClass = closed ? "ui-nav-item" : "ui-nav-item ui--open";
    return _react2.default.createElement(
      "div",
      { className: itemClass, ref: this.onSetRef },
      _react2.default.createElement("i", { className: "ui-nav-caret" }),
      _react2.default.createElement(
        "div",
        {
          className: "ui-nav-item-content",
          role: "presentation",
          onKeyDown: this.toggleExpansion,
          onClick: this.toggleExpansion
        },
        label
      ),
      _react2.default.createElement(
        Component,
        _extends({}, props, {
          className: (0, _classnames2.default)(coreClassName, classes),
          style: offset,
          ref: this.setFolderRef
        }),
        _react2.default.createElement(
          "div",
          { className: "ui-nav-title" },
          label
        ),
        _react2.default.Children.map(children, function (child) {
          if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _lib.ROLE.ITEM) {
            return _this2.renderChild(child, _extends({
              label: label
            }, inherited));
          }
          return child;
        })
      )
    );
  };

  return NavFolder;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  minimized: "bool"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  uirole: _lib.ROLE.FOLDER,
  label: ""
}), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.setRefCallback = function (ref) {
    if (ref) {
      var newState = _this3.state;
      newState.offset = getStyleOffset(ref);
      _this3.setState(newState);
    }
  };

  this.toggleExpansion = function (e) {
    e.preventDefault();
    var newState = _this3.state;
    if (newState.closed && _this3.node) {
      newState.offset = getStyleOffset(_this3.node);
    }
    newState.closed = !newState.closed;
    _this3.setState(newState);
  };

  this.renderChild = function (child, props) {
    var role = child.props.uirole || _lib.ROLE.ITEM;
    var ref = function ref(c) {
      _this3[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this3.chainFunction(child.ref, ref);
    }
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: ref,
      uirole: _lib.ROLE.FOLDERITEM,
      uiclass: _this3.childPrefix(role)
    }));
  };
}, _temp);
exports.default = NavFolder;
module.exports = exports["default"];