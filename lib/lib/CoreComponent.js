"use strict";

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof utilities
                                      * @namespace CoreComponent
                                      * @author Steven Jackson
                                      */
/* eslint-disable */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _coreUtilities = require("./coreUtilities.js");

var _propUtilities = require("./propUtilities.js");

var _ROLE = require("./ROLE.js");

var _EventManager = require("./EventManager.js");

var _EventManager2 = _interopRequireDefault(_EventManager);

var _UIGlobals = require("./UIGlobals.js");

var _UIGlobals2 = _interopRequireDefault(_UIGlobals);

var _LoadingStateless = require("../components/Loading/LoadingStateless.js");

var _LoadingStateless2 = _interopRequireDefault(_LoadingStateless);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-enable */
/* eslint "react/prop-types": [0] */

var CoreComponent = (_temp = _class = function (_Component) {
  _inherits(CoreComponent, _Component);

  function CoreComponent(props) {
    _classCallCheck(this, CoreComponent);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this, props].concat(args)));

    _initialiseProps.call(_this);

    _this.GUID = props.uuid;
    var state = _this.state || {};
    _this.state = _extends({}, state);
    _this.node = null;
    _this.useParentNode = false;
    _this.debugging = false;
    _this.parentNode = { clientWidth: 1, clientHeight: 1 };
    return _this;
  }

  CoreComponent.prototype.componentWillMount = function componentWillMount() {
    _EventManager2.default.registerComponent(this);
    if (this.props.observe) {
      _EventManager2.default.registerObserver(this, this.props.observe);
    }
    if (this.props.dispatch) {
      _EventManager2.default.registerDispatcher(this, this.props.dispatch);
    }
    if (this.WillMount) {
      this.WillMount();
    }
  };

  CoreComponent.prototype.componentDidMount = function componentDidMount() {
    var srcState = this.state;
    var newState = srcState || {};
    if (this.props.persistentId) {
      if (srcState && !_lodash2.default.isEmpty(srcState)) {
        var storage = _UIGlobals2.default.readSetting(this.props.persistentId);
        if (storage) {
          var savedState = JSON.parse(storage);
          _lodash2.default.forIn(srcState, function (value, key) {
            if (savedState && typeof savedState[key] !== "undefined") {
              newState[key] = savedState[key];
            } else {
              newState[key] = value;
            }
          });
        }
      }
    }
    /* eslint-disable */
    this.setState(newState);
    /* eslint-enable */
  };

  CoreComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    _EventManager2.default.unregisterComponent(this);
    if (this.props.observe) {
      _EventManager2.default.unregisterObserver(this, this.props.observe);
    }
    if (this.props.dispatch) {
      _EventManager2.default.unregisterDispatcher(this, this.props.dispatch);
    }
    if (this.WillUnmount) {
      this.WillUnmount();
    }
  };

  CoreComponent.prototype.render = function render() {
    var _props = this.props,
        uuid = _props.uuid,
        loader = _props.loader;

    var rendered = [this.renderCore()];
    if (loader) {
      rendered.push(_react2.default.createElement(_LoadingStateless2.default, { key: "loading-" + uuid, scene: loader }));
    }
    return rendered;
  };

  return CoreComponent;
}(_react.Component), _class.defaultProps = (0, _propUtilities.setCorePropDefaults)(), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSetRef = function (ref) {
    if (ref) {
      var needsUpdate = _this2.node === null;
      _this2.node = ref;
      _this2.parentNode = ref.parentNode;
      if (needsUpdate) {
        if (_this2.setRefCallback) {
          _this2.setRefCallback(ref);
        } else if (_this2.useParentNode) {
          _this2.forceUpdate();
        }
      }
    }
  };

  this.onEventDispatch = function () {
    if (_this2.props.onDispatch) {
      var _props2;

      (_props2 = _this2.props).onDispatch.apply(_props2, arguments);
    }
  };

  this.setPersistentState = function (newState) {
    if (_this2.props.persistentId) {
      _UIGlobals2.default.applySetting(_this2.props.persistentId, JSON.stringify(newState));
    }
    _this2.setState(newState);
  };

  this.setChildProps = function (role, ref, props) {
    var parentClass = (0, _ROLE.getParentClass)(_this2.props);
    var childClass = (0, _ROLE.getChildClass)(parentClass, role);
    return _extends({}, props, {
      ref: ref,
      parentclass: parentClass,
      uiclass: childClass
    });
  };

  this.chainFunction = function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    return funcs.filter(function (f) {
      return f !== null;
    }).reduce(function (acc, f) {
      if (f && typeof f !== "function") {
        throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
      }

      if (!acc) {
        return f;
      }

      return function chainedFunction() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        acc.apply(this, args);
        f.apply(this, args);
      };
    }, null);
  };

  this.childPrefix = function (variant) {
    return (0, _ROLE.getParentClass)(_this2.props) + (variant ? "-" + variant : "");
  };

  this.renderChild = function (child, props) {
    if (child.props) {
      var role = child.props.uirole || _ROLE.ROLE.CONTENT;
      var ref = function ref(c) {
        _this2[role] = c;
      };
      if (typeof child.ref === "string") {
        throw new Error("Child components cannot set ref to string.");
      } else {
        ref = _this2.chainFunction(child.ref, ref);
      }
      return (0, _react.cloneElement)(child, _this2.setChildProps(role, ref, props));
    }
    return child;
  };

  this.renderOrphan = function (child, props) {
    if (child.props) {
      var role = child.props.uirole || _ROLE.ROLE.CONTENT;
      var ref = function ref(c) {
        _this2[role] = c;
      };
      if (typeof child.ref === "string") {
        throw new Error("Child components cannot set ref to string.");
      } else {
        ref = _this2.chainFunction(child.ref, ref);
      }
      return (0, _react.cloneElement)(child, _extends({}, props, {
        ref: ref,
        parentclass: role,
        uiclass: role
      }));
    }
    return child;
  };

  this.renderCore = function () {
    var _getValidProps = (0, _propUtilities.getValidProps)(_this2.props),
        ElementType = _getValidProps.renderAs,
        children = _getValidProps.children,
        props = _getValidProps.props;

    return _react2.default.createElement(
      ElementType,
      props,
      children
    );
  };
}, _temp);
exports.default = CoreComponent;
CoreComponent.propTypes = process.env.NODE_ENV !== "production" ? (0, _propUtilities.setCorePropTypes)() : {};
module.exports = exports["default"];