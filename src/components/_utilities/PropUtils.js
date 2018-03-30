import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import isRequiredForA11y from "prop-types-extra/lib/isRequiredForA11y";
import classNames from "classnames";
import { isUsable } from "./CoreUtils.js";
import { objectClone } from "./DataUtils.js";

const nativeProps = [
  "id",
  "className",
  "role",
  "children",
  "onClick",
  "onSelect",
  "onChange",
  "onBlur",
  "onFocus",
  "onMouseDown",
  "onMouseUp",
  "onKeyDown",
  "onKeyUp",
  "onToggle"
];

const DefaultPropTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  componentClass: elementType,
  className: PropTypes.string,
  role: PropTypes.string,
  group: PropTypes.string,
  children: PropTypes.node,
  uiclass: PropTypes.string,
  uirole: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  to: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
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
  uidata: PropTypes.object
};

const DefaultPropValues = {
  componentClass: "div",
  className: null,
  role: null,
  group: null,
  children: null,
  uiclass: "",
  uirole: "",
  path: "/",
  text: null,
  icon: null,
  to: null,
  disabled: false,
  active: false,
  fixed: null,
  color: null,
  displaySize: null,
  orientation: null,
  textAlign: null,
  contentAlign: null,
  position: null,
  uidata: {}
};

export function getCorePropTypes(config, uidataConfig, A11y) {
  const obj = objectClone(DefaultPropTypes);
  if (A11y) {
    obj.id = isRequiredForA11y(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    );
  }
  if (typeof config !== "undefined" && config !== null) {
    Object.entries(config).forEach(([attr, prop]) => {
      if (typeof PropTypes[prop] !== "undefined") {
        obj[attr] = PropTypes[prop];
      }
    });
  }
  if (typeof uidataConfig !== "undefined" && uidataConfig !== null) {
    const uidata = {};
    Object.entries(uidataConfig).forEach(([attr, prop]) => {
      if (typeof PropTypes[prop] !== "undefined") {
        uidata[attr] = PropTypes[prop];
      }
    });
    obj.uidata = PropTypes.shape(uidata);
  }
  return obj;
}

export function getCorePropDefaults(config, uidataConfig) {
  const obj = objectClone(DefaultPropValues);
  if (typeof config !== "undefined" && config !== null) {
    Object.entries(config).forEach(([attr, prop]) => {
      if (typeof prop === "object") {
        obj[attr] = objectClone(prop);
      } else {
        obj[attr] = prop;
      }
    });
  }
  if (typeof uidataConfig !== "undefined" && uidataConfig !== null) {
    const d = {};
    Object.entries(uidataConfig).forEach(([attr, prop]) => {
      if (typeof prop === "object") {
        d[attr] = objectClone(prop);
      } else {
        d[attr] = prop;
      }
    });
    obj.uidata = d;
    obj.privatedata = d;
  }
  return obj;
}

export function getUIClassString(props) {
  const {
    uiclass,
    className,
    disabled,
    active,
    fixed,
    color,
    orientation,
    textAlign,
    contentAlign,
    position
  } = props;

  const classes = {
    [uiclass]: !className || className.indexOf(uiclass) === -1,
    disabled,
    active,
    fixed
  };

  if (isUsable(color)) {
    classes[`ui-${color}`] = true;
  }

  if (isUsable(orientation)) {
    classes[`ui-orientation-${orientation}`] = true;
  }
  if (isUsable(position)) {
    classes[`ui-position-${position}`] = true;
  }
  if (isUsable(contentAlign)) {
    classes[`ui-content-align-${contentAlign}`] = true;
  }
  if (isUsable(textAlign)) {
    classes[`ui-text-align-${textAlign}`] = true;
  }

  return classNames(className, classes);
}

export function getValidProps(source) {
  const obj = { props: {} };
  Object.entries(source).forEach(([key, value]) => {
    if (nativeProps.indexOf(key) !== -1 && value !== null) {
      obj[key] = value;
      obj.props[key] = value;
    } else if (key !== "uidata" && key !== "privatedata") {
      if (typeof value === "object") {
        obj[key] = objectClone(value);
      } else {
        obj[key] = value;
      }
    }
  });
  if (typeof source.privatedata !== "undefined") {
    obj.uidata = objectClone(source.privatedata, source.uidata);
  }
  const uiClassName = getUIClassString(source);
  obj.className = uiClassName;
  obj.props.className = uiClassName;
  return obj;
}
