import _ from "lodash";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import isRequiredForA11y from "prop-types-extra/lib/isRequiredForA11y";
import cx from "classnames";
import { getParentClass } from "./ROLE.js";
import { uID } from "./coreUtilities.js";
import UIGlobals from "./UIGlobals.js";

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

const INHERITED_PROPS = ["uiclass", "path", "disabled", "uidata", "invalid"];

const DefaultPropTypes = {
  uuid: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  loader: PropTypes.oneOf(["cube", "sheep"]),
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
  path: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  active: PropTypes.bool,
  visible: PropTypes.bool,
  overlay: PropTypes.bool,
  fixed: PropTypes.bool,
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
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
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
  invalid: null,
  checked: null,
  defaultChecked: null,
  required: null,
  group: null,
  tooltip: null,
  children: null,
  uiclass: null,
  uirole: "",
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
  open: null,
  active: null,
  visible: null,
  overlay: null,
  fixed: null,
  color: null,
  colorStyle: null,
  colorHover: null,
  displaySize: null,
  orientation: null,
  align: null,
  textAlign: null,
  contentAlign: null,
  position: null,
  shadow: null,
  observe: null,
  dispatch: null,
  uidata: {}
};

function stringToPropType(propString) {
  const required = String(propString).indexOf("!") !== -1;
  const prop = String(propString).replace("!", "");
  if (typeof PropTypes[prop] !== "undefined") {
    return required ? PropTypes[prop].isRequired : PropTypes[prop];
  }
  return PropTypes.string;
}

function assignPropType(propVal) {
  if (_.isArray(propVal)) {
    const typeValues = propVal.map(val => stringToPropType(val));
    return PropTypes.oneOfType(typeValues);
  }
  return stringToPropType(propVal);
}

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

export function setCorePropTypes(config, uidataConfig) {
  return setPropTypes(false, config, uidataConfig);
}

export function setPropTypesA11y(config, uidataConfig) {
  return setPropTypes(true, config, uidataConfig);
}

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

export function setCorePropDefaults(config, uidataConfig) {
  return setPropDefaults(false, config, uidataConfig);
}

export function setPropDefaultsAutoId(config, uidataConfig) {
  return setPropDefaults(true, config, uidataConfig);
}

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
    color,
    colorStyle,
    colorHover,
    textAlign,
    contentAlign,
    position,
    shadow,
    icon,
    loader
  } = props;

  const disabled =
    state && !_.isNil(state.disabled) ? state.disabled : props.disabled;
  const active = state && !_.isNil(state.active) ? state.active : props.active;
  const open = state && !_.isNil(state.open) ? state.open : props.open;
  const visible =
    state && !_.isNil(state.visible) ? state.visible : props.visible;
  const invalid =
    state && !_.isNil(state.invalid) ? state.invalid : props.invalid;
  const orientation =
    state && state.orientation ? state.orientation : props.orientation;

  const sUIclass = `ui-${uiclass}`;
  const hasUIclass = !className || className.indexOf(sUIclass) === -1;
  const coreClasses = {
    [sUIclass]: hasUIclass,
    [`ui-position-${position}`]: position,
    [`ui-orientation-${orientation}`]: orientation,
    [`ui-content-align-${contentAlign}`]: contentAlign,
    [`ui-text-align-${textAlign}`]: textAlign,
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
    "ui-blurred": !!loader,
    disabled,
    active,
    open,
    visible,
    invalid
  };

  const theme = UIGlobals.readSetting("theme");
  const styleClasses = {
    [`${sUIclass}-theme-${theme}`]: uiclass && theme
  };

  if (!_.isNil(color)) {
    const nohover = String(color).indexOf("!") !== -1;
    const cleanColor = String(color).replace("!", "");
    let colorClass = `ui-${cleanColor}`;
    if (!_.isNil(colorStyle)) {
      colorClass += `-${colorStyle}`;
    }
    if (nohover) {
      colorClass += "-no-hover";
    } else if (!_.isNil(colorHover)) {
      colorClass += "-hover";
    }
    styleClasses[colorClass] = true;
  }
  const iconPre =
    icon && icon.indexOf("ui-icon-") !== -1 ? icon : `ui-icon-${icon}`;
  const iconClass = {
    [iconPre]: icon
  };
  // if (!_.isNil(orientation)) {
  //   classes[`ui-orientation-${orientation}`] = true;
  // }
  // if (!_.isNil(position)) {
  //   classes[`ui-position-${position}`] = true;
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
