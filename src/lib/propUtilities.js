import _ from "lodash";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import isRequiredForA11y from "prop-types-extra/lib/isRequiredForA11y";
import cx from "classnames";
import { getInheritedClass } from "./ROLE.js";
import { uID } from "./coreUtilities.js";

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
  "required",
  "className",
  "role",
  "style",
  "href",
  "src",
  "width",
  "height",
  "colspan",
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

const INHERITED_PROPS = [
  "uiclass",
  "path",
  "disabled",
  "open",
  "active",
  "uidata",
  "invalid"
];

const DefaultPropTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  checked: PropTypes.bool,
  required: PropTypes.bool,
  inset: PropTypes.bool,
  raised: PropTypes.bool,
  reveal: PropTypes.bool,
  well: PropTypes.bool,
  panel: PropTypes.bool,
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
  overlay: PropTypes.bool,
  fixed: PropTypes.bool,
  color: PropTypes.oneOf([
    "black",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
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
  observe: PropTypes.oneOf(OBSERVABLE_EVENTS),
  dispatch: PropTypes.oneOf(OBSERVABLE_EVENTS),
  uidata: PropTypes.object
};

const DefaultPropValues = {
  renderAs: "div",
  className: null,
  role: null,
  name: null,
  type: null,
  label: null,
  value: null,
  invalid: null,
  checked: null,
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
  masked: null,
  to: null,
  disabled: false,
  open: false,
  active: false,
  overlay: null,
  fixed: null,
  color: null,
  colorStyle: null,
  colorHover: null,
  displaySize: null,
  orientation: null,
  textAlign: null,
  contentAlign: null,
  position: null,
  observe: null,
  dispatch: null,
  uidata: {}
};

function setPropTypes(isA11y = false, config, uidataConfig) {
  const obj = _.clone(DefaultPropTypes);
  if (isA11y) {
    obj.id = isRequiredForA11y(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    );
  }
  if (typeof config !== "undefined" && config !== null) {
    Object.entries(config).forEach(([attr, propString]) => {
      const required = String(propString).indexOf("!") !== -1;
      const prop = String(propString).replace("!", "");
      if (typeof PropTypes[prop] !== "undefined") {
        obj[attr] = required ? PropTypes[prop].isRequired : PropTypes[prop];
      }
    });
  }
  if (typeof uidataConfig !== "undefined" && uidataConfig !== null) {
    const uidata = {};
    Object.entries(uidataConfig).forEach(([attr, propString]) => {
      const required = String(propString).indexOf("!") !== -1;
      const prop = String(propString).replace("!", "");
      if (typeof PropTypes[prop] !== "undefined") {
        uidata[attr] = required ? PropTypes[prop].isRequired : PropTypes[prop];
      }
    });
    obj.uidata = PropTypes.shape(uidata);
  }
  return obj;
}

export function getCorePropTypes(config, uidataConfig) {
  return setPropTypes(false, config, uidataConfig);
}

export function getPropTypesA11y(config, uidataConfig) {
  return setPropTypes(true, config, uidataConfig);
}

function setPropDefaults(autoId, config, uidataConfig) {
  const obj = _.clone(DefaultPropValues);
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
    obj.id = `${obj.uirole}_${uID()}`;
  }
  return obj;
}

export function getCorePropDefaults(config, uidataConfig) {
  return setPropDefaults(false, config, uidataConfig);
}

export function getPropDefaultsAutoId(config, uidataConfig) {
  return setPropDefaults(true, config, uidataConfig);
}

export function getUIClassString(props) {
  const {
    uiclass,
    className,
    disabled,
    active,
    open,
    overlay,
    fixed,
    inset,
    raised,
    reveal,
    well,
    panel,
    masked,
    invalid,
    color,
    colorStyle,
    colorHover,
    orientation,
    textAlign,
    contentAlign,
    position
  } = props;

  const coreClasses = {
    [`ui-${uiclass}`]: !className || className.indexOf(`ui-${uiclass}`) === -1,
    disabled,
    active,
    open,
    invalid,
    "ui-overlay": overlay,
    "ui-fixed": fixed,
    [`ui-position-${position}`]: position,
    [`ui-orientation-${orientation}`]: orientation,
    [`ui-content-align-${contentAlign}`]: contentAlign,
    [`ui-text-align-${textAlign}`]: textAlign
  };

  const styleClasses = {
    "ui-inset": inset,
    "ui-raised": raised,
    "ui-reveal": reveal,
    "ui-well": well,
    "ui-panel": panel,
    "ui-masked": masked
  };
  if (!_.isNil(color)) {
    let colorClass = `ui-${color}`;
    if (!_.isNil(colorStyle)) {
      colorClass += `-${colorStyle}`;
    }
    if (!_.isNil(colorHover)) {
      colorClass += "-hover";
    }
    styleClasses[colorClass] = true;
  }
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
  const uiClassStyle = cx("", styleClasses);
  const uiClassFull = cx(uiClassCore, uiClassStyle);
  return [uiClassFull, uiClassCore, uiClassStyle];
}

export function getValidProps(source) {
  const obj = { props: {}, inherited: {} };
  Object.entries(source).forEach(([attr, value]) => {
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
  });
  if (typeof source.privatedata !== "undefined") {
    obj.uidata = _.clone(source.privatedata, source.uidata);
  }
  const uiClassNames = getUIClassString(source);
  obj.className = uiClassNames[0];
  obj.coreClassName = uiClassNames[1];
  obj.styleClassName = uiClassNames[2];
  obj.props.className = uiClassNames[0];
  if (_.isNil(obj.parentclass)) {
    obj.parentclass = getInheritedClass(obj);
  }
  obj.inherited.parentclass = obj.parentclass;
  if (_.isNil(obj.inherited.uiclass)) {
    obj.inherited.uiclass = "";
  }
  return obj;
}
