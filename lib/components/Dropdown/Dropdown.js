"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof components
                                      * @namespace Dropdown
                                      * @author Steven Jackson
                                     * @scss ../../scss/components/Dropdown
                                      * @example <Dropdown>
                                        <Dropdown.Toggle>Example Dropdown</Dropdown.Toggle>
                                        <Dropdown.Content>
                                          <span>Option 1</span>
                                          <span>Option 2</span>
                                          <span>Option 3</span>
                                          <span>Option 4</span>
                                          <span>Option 5</span>
                                          <span>Option 6</span>
                                        </Dropdown.Content>
                                      </Dropdown>
                                      */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _activeElement = require("dom-helpers/activeElement");

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = require("dom-helpers/query/contains");

var _contains2 = _interopRequireDefault(_contains);

var _keycode = require("keycode");

var _keycode2 = _interopRequireDefault(_keycode);

var _lib = require("../../lib");

var _DropdownToggle = require("./DropdownToggle.js");

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownContent = require("./DropdownContent.js");

var _DropdownContent2 = _interopRequireDefault(_DropdownContent);

require("./Dropdown.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = (_temp = _class = function (_CoreComponent) {
  _inherits(Dropdown, _CoreComponent);

  function Dropdown(props, context) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props, context));

    _initialiseProps.call(_this);

    _this.state = {
      open: false
    };
    _this.focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  Dropdown.prototype.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  Dropdown.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    if (!nextState.open && this.state.open) {
      this.focusInDropdown = (0, _contains2.default)(this.content, (0, _activeElement2.default)(document));
    }
  };

  Dropdown.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var open = this.state.open;

    var prevOpen = prevState.open;
    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }
    if (!open && prevOpen) {
      if (this.focusInDropdown) {
        this.focusInDropdown = false;
        this.focus();
      }
    }
  };

  Dropdown.prototype.WillMount = function WillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  };

  Dropdown.prototype.WillUnmount = function WillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  };

  Dropdown.prototype.render = function render() {
    var _this2 = this;

    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        id = _getValidProps.id,
        uiclass = _getValidProps.uiclass,
        disabled = _getValidProps.disabled,
        children = _getValidProps.children,
        rootcloseevent = _getValidProps.rootcloseevent,
        onSelect = _getValidProps.onSelect,
        props = _getValidProps.props;

    var open = this.state.open;


    return _react2.default.createElement(
      Component,
      _extends({}, props, { ref: this.onSetRef }),
      _react2.default.Children.map(children, function (child) {
        switch (child.props.uirole) {
          case _lib.ROLE.TOGGLE:
            return _this2.renderToggle(child, {
              id: id,
              disabled: disabled,
              open: open,
              uiclass: uiclass
            });
          case _lib.ROLE.BUTTON:
            return _this2.renderToggle(child, {
              id: id,
              disabled: disabled,
              open: open,
              uiclass: "ui-dropdown"
            });
          case _lib.ROLE.CONTENT:
            return _this2.renderContent(child, {
              id: id,
              onSelect: onSelect,
              rootcloseevent: rootcloseevent,
              open: open,
              uiclass: uiclass
            });
          default:
            return child;
        }
      })
    );
  };

  return Dropdown;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setPropTypesA11y)(), _class.defaultProps = (0, _lib.setPropDefaultsAutoId)({
  renderAs: "div",
  uirole: _lib.ROLE.DROPDOWN
}), _class.Toggle = _DropdownToggle2.default, _class.Content = _DropdownContent2.default, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleOnToggle = function (e) {
    if ((0, _lib.isModifiedEvent)(e) || !(0, _lib.isLeftClickEvent)(e) || !_this3.state.open) {
      return;
    }
    if (_this3.node && !_this3.node.contains(e.target)) {
      // console.log("handleClickOutside",e.target);
      _this3.handleClose(e);
    }
  };

  this.focus = function () {
    if (_this3.toggle && _this3.toggle.focus) {
      _this3.toggle.focus();
    }
  };

  this.focusNextOnOpen = function () {
    if (!_this3.content || !_this3.content.focusNext) {
      return;
    }
    if (_this3.lastOpenEventType === "keydown" || _this3.props.role === "dropdown-item") {
      _this3.content.focusNext();
    }
  };

  this.handleClick = function (event) {
    if (_this3.props.disabled) {
      return;
    }
    _this3.toggleOpen(event, { source: "click" });
  };

  this.handleClose = function (event, eventDetails) {
    if (!_this3.state.open) {
      return;
    }
    _this3.toggleOpen(event, eventDetails);
  };

  this.handleKeyDown = function (event) {
    if (_this3.props.disabled) {
      return;
    }
    switch (event.keyCode) {
      case _keycode2.default.codes.down:
        if (!_this3.state.open) {
          _this3.toggleOpen(event, { source: "keydown" });
        } else if (_this3.content.focusNext) {
          _this3.content.focusNext();
        }
        event.preventDefault();
        break;
      case _keycode2.default.codes.esc:
        _this3.handleClose(event, { source: "keydown" });
        break;
      default:
    }
  };

  this.toggleOpen = function (event, eventDetails) {
    var open = !_this3.state.open;
    if (open) {
      _this3.lastOpenEventType = eventDetails.source;
    } else if (_this3.props.onClose) {
      _this3.props.onClose(event);
    }
    _this3.setState({ open: open });
    if (_this3.props.onToggle) {
      _this3.props.onToggle(open, event, eventDetails);
    }
  };

  this.renderToggle = function (child, _ref) {
    var id = _ref.id,
        props = _objectWithoutProperties(_ref, ["id"]);

    var ref = function ref(c) {
      _this3.toggle = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this3.chainFunction(child.ref, ref);
    }
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: ref,
      id: "toggle_" + id,
      uiclass: _this3.childPrefix("toggle"),
      onClick: _this3.chainFunction(child.props.onClick, _this3.handleClick),
      onKeyDown: _this3.chainFunction(child.props.onKeyDown, _this3.handleKeyDown)
    }));
  };

  this.renderContent = function (child, _ref2) {
    var id = _ref2.id,
        onSelect = _ref2.onSelect,
        props = _objectWithoutProperties(_ref2, ["id", "onSelect"]);

    var ref = function ref(c) {
      _this3.content = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this3.chainFunction(child.ref, ref);
    }
    return (0, _react.cloneElement)(child, _extends({}, props, {
      ref: ref,
      id: "content_" + id,
      uiclass: _this3.childPrefix("content"),
      onMouseDown: function onMouseDown(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      },

      onSelect: _this3.chainFunction(child.props.onSelect, onSelect, function (key, event) {
        return _this3.handleClose(event, { source: "select" });
      })
    }));
  };
}, _temp);
exports.default = Dropdown;
module.exports = exports["default"];