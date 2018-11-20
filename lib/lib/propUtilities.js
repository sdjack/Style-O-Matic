"use strict";

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @memberof utilities
                                                                                                                                                                                                                                                                               * @namespace propUtilities
                                                                                                                                                                                                                                                                               * @author Steven Jackson
                                                                                                                                                                                                                                                                               */


exports.setCorePropTypes = setCorePropTypes;
exports.setPropTypesA11y = setPropTypesA11y;
exports.setCorePropDefaults = setCorePropDefaults;
exports.setPropDefaultsAutoId = setPropDefaultsAutoId;
exports.getUIClassString = getUIClassString;
exports.getValidProps = getValidProps;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = require("prop-types-extra/lib/elementType");

var _elementType2 = _interopRequireDefault(_elementType);

var _isRequiredForA11y = require("prop-types-extra/lib/isRequiredForA11y");

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _ROLE = require("./ROLE.js");

var _coreUtilities = require("./coreUtilities.js");

var _UIGlobals = require("./UIGlobals.js");

var _UIGlobals2 = _interopRequireDefault(_UIGlobals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [OBSERVABLE_EVENTS description]
 * @type {Array}
 */
var OBSERVABLE_EVENTS = ["scroll", "wheel", "mousemove", "keypress", "copy", "paste", "touchmove", "touchstart", "error", "load", "toggle"];
/**
 * [NATIVE_PROPS description]
 * @type {Array}
 */
var NATIVE_PROPS = ["id", "name", "type", "value", "checked", "defaultChecked", "required", "className", "role", "style", "href", "target", "src", "width", "height", "colSpan", "children", "onClick", "onSelect", "onChange", "onBlur", "onFocus", "onMouseDown", "onMouseUp", "onMouseEnter", "onMouseLeave", "onKeyDown", "onKeyUp", "onToggle", "onSubmit"];
/**
 * [INHERITED_PROPS description]
 * @type {Array}
 */
var INHERITED_PROPS = ["uiclass", "path", "disabled", "uidata", "invalid"];
/**
 * [DefaultPropTypes description]
 * @type {Object}
 */
var DefaultPropTypes = {
  uuid: _propTypes2.default.string,
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  value: _propTypes2.default.string,
  label: _propTypes2.default.string,
  loader: _propTypes2.default.oneOf(["cube", "sheep"]),
  reversed: _propTypes2.default.bool,
  invalid: _propTypes2.default.bool,
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  inset: _propTypes2.default.bool,
  raised: _propTypes2.default.bool,
  reveal: _propTypes2.default.bool,
  well: _propTypes2.default.bool,
  panel: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  circular: _propTypes2.default.bool,
  masked: _propTypes2.default.bool,
  renderAs: _elementType2.default,
  className: _propTypes2.default.string,
  role: _propTypes2.default.string,
  group: _propTypes2.default.string,
  tooltip: _propTypes2.default.string,
  children: _propTypes2.default.node,
  uiclass: _propTypes2.default.string,
  uirole: _propTypes2.default.string,
  uigroup: _propTypes2.default.string,
  path: _propTypes2.default.string,
  text: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  to: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  collapsed: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  closed: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  shown: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  overlay: _propTypes2.default.bool,
  fixed: _propTypes2.default.bool,
  vertical: _propTypes2.default.bool,
  fit: _propTypes2.default.oneOf(["width", "height", "parent", "flex", "screen"]),
  color: _propTypes2.default.oneOf(["transparent", "white", "grey", "black", "red", "orange", "yellow", "green", "blue", "indigo", "violet", "!white", "!grey", "!black", "!red", "!orange", "!yellow", "!green", "!blue", "!indigo", "!violet"]),
  colorStyle: _propTypes2.default.oneOf(["fill", "outline", "text"]),
  colorHover: _propTypes2.default.bool,
  displaySize: _propTypes2.default.oneOf(["smallest", "small", "medium", "large", "largest"]),
  align: _propTypes2.default.oneOf(["left", "right", "center"]),
  textAlign: _propTypes2.default.oneOf(["left", "right", "center"]),
  contentAlign: _propTypes2.default.oneOf(["left", "right", "center"]),
  position: _propTypes2.default.oneOf(["left", "before", "right", "after", "top", "above", "bottom", "below"]),
  shadow: _propTypes2.default.string,
  observe: _propTypes2.default.oneOf(OBSERVABLE_EVENTS),
  dispatch: _propTypes2.default.oneOf(OBSERVABLE_EVENTS),
  uidata: _propTypes2.default.object
};
/**
 * [DefaultPropValues description]
 * @type {Object}
 */
var DefaultPropValues = {
  uuid: null,
  renderAs: "div",
  className: null,
  role: null,
  name: null,
  type: null,
  label: null,
  loader: null,
  value: null,
  reversed: null,
  invalid: null,
  checked: null,
  defaultChecked: null,
  required: null,
  group: null,
  tooltip: null,
  children: null,
  uiclass: null,
  uirole: "",
  uigroup: _ROLE.ROLE.UI,
  path: "/",
  text: null,
  icon: null,
  inset: null,
  raised: null,
  reveal: null,
  well: null,
  panel: null,
  rounded: null,
  circular: null,
  masked: null,
  to: null,
  disabled: null,
  collapsed: null,
  open: null,
  closed: null,
  hidden: null,
  shown: null,
  active: null,
  overlay: null,
  fixed: null,
  vertical: null,
  fit: null,
  color: null,
  colorStyle: null,
  colorHover: null,
  displaySize: null,
  align: null,
  textAlign: null,
  contentAlign: null,
  position: null,
  shadow: null,
  observe: null,
  dispatch: null,
  uidata: {}
};
/**
 * [stringToPropType description]
 * @param  {String} propString [description]
 * @return {String}            [description]
 */
function stringToPropType(propString) {
  var required = String(propString).indexOf("!") !== -1;
  var prop = String(propString).replace("!", "");
  if (typeof _propTypes2.default[prop] !== "undefined") {
    return required ? _propTypes2.default[prop].isRequired : _propTypes2.default[prop];
  }
  return _propTypes2.default.string;
}
/**
 * [assignPropType description]
 * @param  {String} propVal [description]
 * @return {String}         [description]
 */
function assignPropType(propVal) {
  if (_lodash2.default.isArray(propVal)) {
    var assignMethod = "oneOf";
    var typeValues = propVal.map(function (val) {
      if (typeof _propTypes2.default[val] !== "undefined") {
        assignMethod = "oneOfType";
        return stringToPropType(val);
      }
      return val;
    });
    if (typeof _propTypes2.default[assignMethod] !== "undefined") {
      return _propTypes2.default[assignMethod](typeValues);
    }
  }
  return stringToPropType(propVal);
}
/**
 * [setPropTypes description]
 * @param {Boolean} [isA11y=false] [description]
 * @param {String}  config         [description]
 * @param {String}  uidataConfig   [description]
 */
function setPropTypes() {
  var isA11y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var config = arguments[1];
  var uidataConfig = arguments[2];

  var obj = _lodash2.default.clone(DefaultPropTypes);
  if (isA11y) {
    obj.id = (0, _isRequiredForA11y2.default)(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]));
  }
  if (typeof config !== "undefined" && config !== null) {
    Object.entries(config).forEach(function (_ref) {
      var attr = _ref[0],
          val = _ref[1];

      obj[attr] = assignPropType(val);
    });
  }
  if (typeof uidataConfig !== "undefined" && uidataConfig !== null) {
    var uidata = {};
    Object.entries(uidataConfig).forEach(function (_ref2) {
      var attr = _ref2[0],
          val = _ref2[1];

      uidata[attr] = assignPropType(val);
    });
    obj.uidata = _propTypes2.default.shape(uidata);
  }
  return obj;
}
/**
 * [setCorePropTypes description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
function setCorePropTypes(config, uidataConfig) {
  return setPropTypes(false, config, uidataConfig);
}
/**
 * [setPropTypesA11y description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
function setPropTypesA11y(config, uidataConfig) {
  return setPropTypes(true, config, uidataConfig);
}
/**
 * [setPropDefaults description]
 * @param {String} autoId       [description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
function setPropDefaults(autoId, config, uidataConfig) {
  var obj = _lodash2.default.clone(DefaultPropValues);
  obj.uuid = (0, _coreUtilities.uID)();
  if (typeof config !== "undefined" && config !== null) {
    Object.entries(config).forEach(function (_ref3) {
      var attr = _ref3[0],
          prop = _ref3[1];

      if ((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object") {
        obj[attr] = _lodash2.default.clone(prop);
      } else {
        obj[attr] = prop;
      }
    });
  }
  if (typeof uidataConfig !== "undefined" && uidataConfig !== null) {
    var d = {};
    Object.entries(uidataConfig).forEach(function (_ref4) {
      var attr = _ref4[0],
          prop = _ref4[1];

      if ((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object") {
        d[attr] = _lodash2.default.clone(prop);
      } else {
        d[attr] = prop;
      }
    });
    obj.uidata = d;
    obj.privatedata = d;
  }
  if (_lodash2.default.isNil(obj.uiclass) && !_lodash2.default.isNil(obj.uirole)) {
    obj.uiclass = obj.uirole;
  }
  if (autoId && _lodash2.default.isNil(obj.id)) {
    obj.id = obj.uirole + "_" + obj.uuid;
  }
  return obj;
}
/**
 * [setCorePropDefaults description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
function setCorePropDefaults(config, uidataConfig) {
  return setPropDefaults(false, config, uidataConfig);
}
/**
 * [setPropDefaultsAutoId description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
function setPropDefaultsAutoId(config, uidataConfig) {
  return setPropDefaults(true, config, uidataConfig);
}
/**
 * [getUIClassString description]
 * @param  {String} props [description]
 * @param  {String} state [description]
 * @return {String}       [description]
 */
function getUIClassString(props, state) {
  var _coreClasses, _styleClasses, _iconClass;

  var uiclass = props.uiclass,
      className = props.className,
      overlay = props.overlay,
      fixed = props.fixed,
      inset = props.inset,
      raised = props.raised,
      reveal = props.reveal,
      well = props.well,
      panel = props.panel,
      rounded = props.rounded,
      circular = props.circular,
      masked = props.masked,
      fit = props.fit,
      color = props.color,
      colorStyle = props.colorStyle,
      colorHover = props.colorHover,
      textAlign = props.textAlign,
      contentAlign = props.contentAlign,
      anchor = props.anchor,
      shadow = props.shadow,
      icon = props.icon,
      reversed = props.reversed,
      vertical = props.vertical,
      loader = props.loader;


  var disabled = state && !_lodash2.default.isNil(state.disabled) ? state.disabled : props.disabled;
  var active = state && !_lodash2.default.isNil(state.active) ? state.active : props.active;
  var collapsed = state && !_lodash2.default.isNil(state.collapsed) ? state.collapsed : props.collapsed;
  var open = state && !_lodash2.default.isNil(state.open) ? state.open : props.open;
  var closed = state && !_lodash2.default.isNil(state.closed) ? state.closed : props.closed;
  var hidden = state && !_lodash2.default.isNil(state.hidden) ? state.hidden : props.hidden;
  var shown = state && !_lodash2.default.isNil(state.shown) ? state.shown : props.shown;
  var invalid = state && !_lodash2.default.isNil(state.invalid) ? state.invalid : props.invalid;

  var sUIclass = "ui-" + uiclass;
  var hasUIclass = !className || className.indexOf(sUIclass) === -1;
  var coreClasses = (_coreClasses = {}, _coreClasses[sUIclass] = hasUIclass, _coreClasses["ui-anchor-" + anchor] = anchor, _coreClasses["ui-content-align-" + contentAlign] = contentAlign, _coreClasses["ui-text-align-" + textAlign] = textAlign, _coreClasses["ui-fit-" + fit] = fit, _coreClasses["ui-overlay"] = overlay, _coreClasses["ui-fixed"] = fixed, _coreClasses["ui-inset"] = inset, _coreClasses["ui-raised"] = raised, _coreClasses["ui-reveal"] = reveal, _coreClasses["ui-rounded"] = rounded, _coreClasses["ui-circular"] = circular, _coreClasses["ui-well"] = well, _coreClasses["ui-panel"] = panel, _coreClasses["ui-masked"] = masked, _coreClasses["ui-shadow"] = shadow, _coreClasses["ui--active"] = active, _coreClasses["ui--locked"] = !!loader, _coreClasses["ui--vertical"] = vertical, _coreClasses["ui--reversed"] = reversed, _coreClasses["ui--collapsed"] = collapsed, _coreClasses["ui--open"] = open, _coreClasses["ui--closed"] = closed, _coreClasses["ui--hidden"] = hidden, _coreClasses["ui--shown"] = shown, _coreClasses["ui--disabled"] = disabled, _coreClasses["ui--invalid"] = invalid, _coreClasses);

  var theme = _UIGlobals2.default.readSetting("theme");
  var styleClasses = (_styleClasses = {}, _styleClasses[sUIclass + "-theme-" + theme] = uiclass && theme, _styleClasses);

  if (!_lodash2.default.isNil(color)) {
    var cleanColor = String(color).replace(/[^\w]/g, "");
    var colorClass = "ui-" + cleanColor;
    if (!_lodash2.default.isNil(colorStyle)) {
      colorClass += "-" + colorStyle;
    }
    styleClasses[colorClass] = true;
  }
  var iconPre = icon && icon.indexOf("ui-icon-") !== -1 ? icon : "ui-icon ui-icon-" + icon;
  var iconClass = (_iconClass = {}, _iconClass[iconPre] = icon, _iconClass);
  // if (!_.isNil(anchor)) {
  //   classes[`ui-anchor-${anchor}`] = true;
  // }
  // if (!_.isNil(contentAlign)) {
  //   classes[`ui-content-align-${contentAlign}`] = true;
  // }
  // if (!_.isNil(textAlign)) {
  //   classes[`ui-text-align-${textAlign}`] = true;
  // }
  var uiClassCore = (0, _classnames2.default)(className, coreClasses);
  var uiClassIcon = (0, _classnames2.default)("", iconClass);
  var uiClassStyle = (0, _classnames2.default)(uiClassIcon, styleClasses);
  var uiClassFull = (0, _classnames2.default)(uiClassCore, uiClassStyle);
  return [uiClassFull, uiClassCore, uiClassStyle, uiClassIcon];
}
/**
 * [getValidProps description]
 * @param  {String} source [description]
 * @param  {String} state  [description]
 * @return {String}        [description]
 */
function getValidProps(source, state) {
  var obj = { props: {}, inherited: {} };
  if (source.style) {
    var uiStyle = {};
    Object.entries(source.style).forEach(function (_ref5) {
      var attr = _ref5[0],
          prop = _ref5[1];

      if ((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object") {
        uiStyle[attr] = _lodash2.default.clone(prop);
      } else {
        uiStyle[attr] = prop;
      }
    });
    obj.props.style = uiStyle;
  }
  Object.entries(source).forEach(function (_ref6) {
    var attr = _ref6[0],
        value = _ref6[1];

    if (attr !== "style") {
      if (NATIVE_PROPS.indexOf(attr) !== -1 && value !== null) {
        obj[attr] = value;
        obj.props[attr] = value;
      } else if (attr !== "uidata" && attr !== "privatedata") {
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
          obj[attr] = _lodash2.default.clone(value);
        } else {
          obj[attr] = value;
        }
      }
      if (INHERITED_PROPS.indexOf(attr) !== -1 && !_lodash2.default.isNil(value)) {
        obj.inherited[attr] = value;
      }
    }
  });
  if (typeof source.privatedata !== "undefined") {
    obj.uidata = _lodash2.default.clone(source.privatedata, source.uidata);
  }
  var uiClassNames = getUIClassString(source, state);
  obj.className = uiClassNames[0];
  obj.coreClassName = uiClassNames[1];
  obj.styleClassName = uiClassNames[2];
  obj.iconClassName = uiClassNames[3];
  obj.props.className = uiClassNames[0];
  if (_lodash2.default.isNil(obj.props.key)) {
    obj.props.key = "component-" + obj.props.uuid;
  }
  if (_lodash2.default.isNil(obj.parentclass)) {
    obj.parentclass = (0, _ROLE.getParentClass)(obj);
  }
  obj.inherited.parentclass = obj.parentclass;
  if (_lodash2.default.isNil(obj.inherited.uiclass)) {
    obj.inherited.uiclass = "";
  }
  return obj;
}