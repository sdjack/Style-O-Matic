"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof components
                                      * @namespace Tabs
                                      * @author Steven Jackson
                                     * @scss ../../scss/components/Tabs
                                      * @example <Tabs panel>
                                        <Tabs.Tab>Tab 1</Tabs.Tab>
                                        <Tabs.Tab>Tab 2</Tabs.Tab>
                                        <Tabs.Content>Tab 1 Content</Tabs.Content>
                                        <Tabs.Content>Tab 2 Content</Tabs.Content>
                                        <Tabs.Tab>Tab 3</Tabs.Tab>
                                        <Tabs.Tab>Tab 4</Tabs.Tab>
                                        <Tabs.Content>Tab 3 Content</Tabs.Content>
                                        <Tabs.Content>Tab 4 Content</Tabs.Content>
                                      </Tabs>
                                      */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require("../../lib");

var _TabContent = require("./TabContent.js");

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabToggle = require("./TabToggle.js");

var _TabToggle2 = _interopRequireDefault(_TabToggle);

require("./Tabs.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = (_temp = _class = function (_CoreComponent) {
  _inherits(Tabs, _CoreComponent);

  function Tabs(props, context) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = { activeTab: props.id + "_tab_1" };
    return _this;
  }

  return Tabs;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)({
  smart: "bool",
  onSwitch: "func"
}), _class.defaultProps = (0, _lib.setPropDefaultsAutoId)({
  renderAs: "div",
  uirole: _lib.ROLE.TABS,
  smart: false,
  onSwitch: null
}), _class.Tab = _TabToggle2.default, _class.Content = _TabContent2.default, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleClick = function (event) {
    event.preventDefault();
    if (_this2.props.disabled) {
      return;
    }
    var id = event.target.attributes.id;

    _this2.setState({ activeTab: id.value });
    _this2.toggleSwitch(event);
  };

  this.toggleSwitch = function (event) {
    if (_this2.props.disabled) {
      return;
    }
    if (_this2.props.onSwitch) {
      _this2.props.onSwitch(event);
    }
  };

  this.renderToggle = function (child, index, parentId, _ref) {
    var props = _objectWithoutProperties(_ref, []);

    var id = parentId + "_tab_" + index;
    var activeClass = _this2.state.activeTab === id ? "tab ui--active" : "tab";
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: child.ref,
      id: id,
      uiclass: _this2.childPrefix(activeClass),
      onClick: _this2.chainFunction(child.props.onClick, _this2.handleClick)
    }));
  };

  this.renderContent = function (child, index, parentId, _ref2) {
    var props = _objectWithoutProperties(_ref2, []);

    var id = parentId + "_tab_" + index;
    var activeClass = _this2.state.activeTab === id ? "content ui--active" : "content";
    id += "_content";
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: child.ref,
      id: id,
      uiclass: _this2.childPrefix(activeClass)
    }));
  };

  this.renderCore = function () {
    var _getValidProps = (0, _lib.getValidProps)(_this2.props),
        Component = _getValidProps.renderAs,
        id = _getValidProps.id,
        uiclass = _getValidProps.uiclass,
        disabled = _getValidProps.disabled,
        smart = _getValidProps.smart,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    var tabCount = 0;
    var contentCount = 0;

    return _react2.default.createElement(
      Component,
      props,
      _react2.default.createElement(
        "div",
        { className: "ui-tabs-tab-wrapper" },
        _react2.default.Children.map(children, function (child) {
          if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _lib.ROLE.TABTOGGLE) {
            tabCount += 1;
            return _this2.renderToggle(child, tabCount, id, inherited);
          }
          return null;
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "ui-tabs-content-wrapper" },
        _react2.default.Children.map(children, function (child) {
          if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined" && child.props.uirole === _lib.ROLE.TABCONTENT) {
            contentCount += 1;
            return _this2.renderContent(child, contentCount, id, inherited);
          }
          return null;
        })
      )
    );
  };
}, _temp);
exports.default = Tabs;
module.exports = exports["default"];