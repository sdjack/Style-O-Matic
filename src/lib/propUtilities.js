/**
 * @memberof utilities
 * @namespace propUtilities
 * @author Steven Jackson
 */
import _ from "lodash";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import isRequiredForA11y from "prop-types-extra/lib/isRequiredForA11y";
import cx from "classnames";
import { ROLE, getParentClass } from "./ROLE.js";
import { uID } from "./coreUtilities.js";
import UIGlobals from "./UIGlobals.js";
/**
 * [OBSERVABLE_EVENTS description]
 * @type {Array}
 */
const OBSERVABLE_EVENTS = [
  "scroll",
  "wheel",
  "mousemove",
  "keypress",
  "copy",
  "paste",
  "touchmove",
  "touchstart",
  "error",
  "load",
  "toggle"
];
/**
 * [NATIVE_PROPS description]
 * @type {Array}
 */
const NATIVE_PROPS = [
  "id",
  "name",
  "type",
  "value",
  "checked",
  "defaultChecked",
  "required",
  "className",
  "role",
  "style",
  "href",
  "target",
  "src",
  "width",
  "height",
  "colSpan",
  "children",
  "onClick",
  "onSelect",
  "onChange",
  "onBlur",
  "onFocus",
  "onMouseDown",
  "onMouseUp",
  "onMouseEnter",
  "onMouseLeave",
  "onKeyDown",
  "onKeyUp",
  "onToggle",
  "onSubmit"
];
/**
 * [INHERITED_PROPS description]
 * @type {Array}
 */
const INHERITED_PROPS = ["uiclass", "path", "disabled", "uidata", "invalid"];
/**
 * [DefaultPropTypes description]
 * @type {Object}
 */
const DefaultPropTypes = {
  uuid: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  loader: PropTypes.oneOf(["cube", "sheep"]),
  reversed: PropTypes.bool,
  invalid: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  inset: PropTypes.bool,
  raised: PropTypes.bool,
  reveal: PropTypes.bool,
  well: PropTypes.bool,
  panel: PropTypes.bool,
  rounded: PropTypes.bool,
  circular: PropTypes.bool,
  masked: PropTypes.bool,
  renderAs: elementType,
  className: PropTypes.string,
  role: PropTypes.string,
  group: PropTypes.string,
  tooltip: PropTypes.string,
  children: PropTypes.node,
  uiclass: PropTypes.string,
  uirole: PropTypes.string,
  uigroup: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  collapsed: PropTypes.bool,
  open: PropTypes.bool,
  closed: PropTypes.bool,
  hidden: PropTypes.bool,
  shown: PropTypes.bool,
  active: PropTypes.bool,
  overlay: PropTypes.bool,
  fixed: PropTypes.bool,
  vertical: PropTypes.bool,
  fit: PropTypes.oneOf(["width", "height", "parent", "flex", "screen"]),
  color: PropTypes.oneOf([
    "transparent",
    "white",
    "grey",
    "black",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "!white",
    "!grey",
    "!black",
    "!red",
    "!orange",
    "!yellow",
    "!green",
    "!blue",
    "!indigo",
    "!violet"
  ]),
  colorStyle: PropTypes.oneOf(["fill", "outline", "text"]),
  colorHover: PropTypes.bool,
  displaySize: PropTypes.oneOf([
    "smallest",
    "small",
    "medium",
    "large",
    "largest"
  ]),
  align: PropTypes.oneOf(["left", "right", "center"]),
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  contentAlign: PropTypes.oneOf(["left", "right", "center"]),
  position: PropTypes.oneOf([
    "left",
    "before",
    "right",
    "after",
    "top",
    "above",
    "bottom",
    "below"
  ]),
  shadow: PropTypes.string,
  observe: PropTypes.oneOf(OBSERVABLE_EVENTS),
  dispatch: PropTypes.oneOf(OBSERVABLE_EVENTS),
  uidata: PropTypes.object
};
/**
 * [DefaultPropValues description]
 * @type {Object}
 */
const DefaultPropValues = {
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
  uigroup: ROLE.UI,
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
  const required = String(propString).indexOf("!") !== -1;
  const prop = String(propString).replace("!", "");
  if (typeof PropTypes[prop] !== "undefined") {
    return required ? PropTypes[prop].isRequired : PropTypes[prop];
  }
  return PropTypes.string;
}
/**
 * [assignPropType description]
 * @param  {String} propVal [description]
 * @return {String}         [description]
 */
function assignPropType(propVal) {
  if (_.isArray(propVal)) {
    let assignMethod = "oneOf";
    const typeValues = propVal.map(val => {
      if (typeof PropTypes[val] !== "undefined") {
        assignMethod = "oneOfType";
        return stringToPropType(val);
      }
      return val;
    });
    if (typeof PropTypes[assignMethod] !== "undefined") {
      return PropTypes[assignMethod](typeValues);
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
function setPropTypes(isA11y = false, config, uidataConfig) {
  const obj = _.clone(DefaultPropTypes);
  if (isA11y) {
    obj.id = isRequiredForA11y(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    );
  }
  if (typeof config !== "undefined" && config !== null) {
    Object.entries(config).forEach(([attr, val]) => {
      obj[attr] = assignPropType(val);
    });
  }
  if (typeof uidataConfig !== "undefined" && uidataConfig !== null) {
    const uidata = {};
    Object.entries(uidataConfig).forEach(([attr, val]) => {
      uidata[attr] = assignPropType(val);
    });
    obj.uidata = PropTypes.shape(uidata);
  }
  return obj;
}
/**
 * [setCorePropTypes description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
export function setCorePropTypes(config, uidataConfig) {
  return setPropTypes(false, config, uidataConfig);
}
/**
 * [setPropTypesA11y description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
export function setPropTypesA11y(config, uidataConfig) {
  return setPropTypes(true, config, uidataConfig);
}
/**
 * [setPropDefaults description]
 * @param {String} autoId       [description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
function setPropDefaults(autoId, config, uidataConfig) {
  const obj = _.clone(DefaultPropValues);
  obj.uuid = uID();
  if (typeof config !== "undefined" && config !== null) {
    Object.entries(config).forEach(([attr, prop]) => {
      if (typeof prop === "object") {
        obj[attr] = _.clone(prop);
      } else {
        obj[attr] = prop;
      }
    });
  }
  if (typeof uidataConfig !== "undefined" && uidataConfig !== null) {
    const d = {};
    Object.entries(uidataConfig).forEach(([attr, prop]) => {
      if (typeof prop === "object") {
        d[attr] = _.clone(prop);
      } else {
        d[attr] = prop;
      }
    });
    obj.uidata = d;
    obj.privatedata = d;
  }
  if (_.isNil(obj.uiclass) && !_.isNil(obj.uirole)) {
    obj.uiclass = obj.uirole;
  }
  if (autoId && _.isNil(obj.id)) {
    obj.id = `${obj.uirole}_${obj.uuid}`;
  }
  return obj;
}
/**
 * [setCorePropDefaults description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
export function setCorePropDefaults(config, uidataConfig) {
  return setPropDefaults(false, config, uidataConfig);
}
/**
 * [setPropDefaultsAutoId description]
 * @param {String} config       [description]
 * @param {String} uidataConfig [description]
 */
export function setPropDefaultsAutoId(config, uidataConfig) {
  return setPropDefaults(true, config, uidataConfig);
}
/**
 * [getUIClassString description]
 * @param  {String} props [description]
 * @param  {String} state [description]
 * @return {String}       [description]
 */
export function getUIClassString(props, state) {
  const {
    uiclass,
    className,
    overlay,
    fixed,
    inset,
    raised,
    reveal,
    well,
    panel,
    rounded,
    circular,
    masked,
    fit,
    color,
    colorStyle,
    colorHover,
    textAlign,
    contentAlign,
    anchor,
    shadow,
    icon,
    reversed,
    vertical,
    loader
  } = props;

  const disabled =
    state && !_.isNil(state.disabled) ? state.disabled : props.disabled;
  const active = state && !_.isNil(state.active) ? state.active : props.active;
  const collapsed =
    state && !_.isNil(state.collapsed) ? state.collapsed : props.collapsed;
  const open = state && !_.isNil(state.open) ? state.open : props.open;
  const closed = state && !_.isNil(state.closed) ? state.closed : props.closed;
  const hidden = state && !_.isNil(state.hidden) ? state.hidden : props.hidden;
  const shown = state && !_.isNil(state.shown) ? state.shown : props.shown;
  const invalid =
    state && !_.isNil(state.invalid) ? state.invalid : props.invalid;

  const sUIclass = `ui-${uiclass}`;
  const hasUIclass = !className || className.indexOf(sUIclass) === -1;
  const coreClasses = {
    [sUIclass]: hasUIclass,
    [`ui-anchor-${anchor}`]: anchor,
    [`ui-content-align-${contentAlign}`]: contentAlign,
    [`ui-text-align-${textAlign}`]: textAlign,
    [`ui-fit-${fit}`]: fit,
    "ui-overlay": overlay,
    "ui-fixed": fixed,
    "ui-inset": inset,
    "ui-raised": raised,
    "ui-reveal": reveal,
    "ui-rounded": rounded,
    "ui-circular": circular,
    "ui-well": well,
    "ui-panel": panel,
    "ui-masked": masked,
    "ui-shadow": shadow,
    "ui--active": active,
    "ui--locked": !!loader,
    "ui--vertical": vertical,
    "ui--reversed": reversed,
    "ui--collapsed": collapsed,
    "ui--open": open,
    "ui--closed": closed,
    "ui--hidden": hidden,
    "ui--shown": shown,
    "ui--disabled": disabled,
    "ui--invalid": invalid
  };

  const theme = UIGlobals.readSetting("theme");
  const styleClasses = {
    [`${sUIclass}-theme-${theme}`]: uiclass && theme
  };

  if (!_.isNil(color)) {
    const cleanColor = String(color).replace(/[^\w]/g, "");
    let colorClass = `ui-${cleanColor}`;
    if (!_.isNil(colorStyle)) {
      colorClass += `-${colorStyle}`;
    }
    styleClasses[colorClass] = true;
  }
  const iconPre =
    icon && icon.indexOf("ui-icon-") !== -1 ? icon : `ui-icon ui-icon-${icon}`;
  const iconClass = {
    [iconPre]: icon
  };
  // if (!_.isNil(anchor)) {
  //   classes[`ui-anchor-${anchor}`] = true;
  // }
  // if (!_.isNil(contentAlign)) {
  //   classes[`ui-content-align-${contentAlign}`] = true;
  // }
  // if (!_.isNil(textAlign)) {
  //   classes[`ui-text-align-${textAlign}`] = true;
  // }
  const uiClassCore = cx(className, coreClasses);
  const uiClassIcon = cx("", iconClass);
  const uiClassStyle = cx(uiClassIcon, styleClasses);
  const uiClassFull = cx(uiClassCore, uiClassStyle);
  return [uiClassFull, uiClassCore, uiClassStyle, uiClassIcon];
}
/**
 * [getValidProps description]
 * @param  {String} source [description]
 * @param  {String} state  [description]
 * @return {String}        [description]
 */
export function getValidProps(source, state) {
  const obj = { props: {}, inherited: {} };
  if (source.style) {
    const uiStyle = {};
    Object.entries(source.style).forEach(([attr, prop]) => {
      if (typeof prop === "object") {
        uiStyle[attr] = _.clone(prop);
      } else {
        uiStyle[attr] = prop;
      }
    });
    obj.props.style = uiStyle;
  }
  Object.entries(source).forEach(([attr, value]) => {
    if (attr !== "style") {
      if (NATIVE_PROPS.indexOf(attr) !== -1 && value !== null) {
        obj[attr] = value;
        obj.props[attr] = value;
      } else if (attr !== "uidata" && attr !== "privatedata") {
        if (typeof value === "object") {
          obj[attr] = _.clone(value);
        } else {
          obj[attr] = value;
        }
      }
      if (INHERITED_PROPS.indexOf(attr) !== -1 && !_.isNil(value)) {
        obj.inherited[attr] = value;
      }
    }
  });
  if (typeof source.privatedata !== "undefined") {
    obj.uidata = _.clone(source.privatedata, source.uidata);
  }
  const uiClassNames = getUIClassString(source, state);
  obj.className = uiClassNames[0];
  obj.coreClassName = uiClassNames[1];
  obj.styleClassName = uiClassNames[2];
  obj.iconClassName = uiClassNames[3];
  obj.props.className = uiClassNames[0];
  if (_.isNil(obj.props.key)) {
    obj.props.key = `component-${obj.props.uuid}`;
  }
  if (_.isNil(obj.parentclass)) {
    obj.parentclass = getParentClass(obj);
  }
  obj.inherited.parentclass = obj.parentclass;
  if (_.isNil(obj.inherited.uiclass)) {
    obj.inherited.uiclass = "";
  }
  return obj;
}
