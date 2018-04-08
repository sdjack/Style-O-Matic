/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint no-param-reassign: ["error", { "props": false }] */

import PropTypes from "prop-types";

const DEBUG = true;

/* eslint-disable */
export function debugMessage(...msgs) {
  if (DEBUG) {
    Object.values(msgs).forEach(msg => console.log(msg));
  }
}

function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
/* eslint-enable */

export function uID() {
  return `${s4() + s4()}-${s4()}-4${s4().substr(
    0,
    3
  )}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function GUID(prefixString) {
  return `${prefixString}_${s4() + s4()}-${s4()}-4${s4().substr(
    0,
    3
  )}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function isUsable(value) {
  if (typeof value !== "undefined" && value !== null) {
    if (typeof value === "string") {
      return /\S/.test(value);
    }
    return true;
  }
  return false;
}

export function dataExists(obj, failMessage) {
  const exists = typeof obj !== "undefined" && obj !== null;
  if (
    !exists &&
    DEBUG &&
    typeof failMessage !== "undefined" &&
    failMessage !== null
  ) {
    debugMessage("NOT FOUND", failMessage, obj);
  }
  return typeof obj !== "undefined" && obj !== null;
}

export function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error(
        "Invalid Argument Type, must only provide functions, undefined, or null."
      );
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

export function isLeftClickEvent(event) {
  return event.button === 0;
}

export function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function compileClass(fn) {
  return (...args) => {
    const last = args[args.length - 1];
    if (typeof last === "function") {
      return fn(...args);
    }
    return Component => fn(...args, Component);
  };
}

export function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function prefix(props, variant) {
  return props.uiclass + (variant ? `-${variant}` : "");
}

export const setCoreClass = compileClass((defaultClass, Component) => {
  const propTypes = Component.propTypes || (Component.propTypes = {});
  const defaultProps = Component.defaultProps || (Component.defaultProps = {});

  propTypes.uiclass = PropTypes.string;
  defaultProps.uiclass = defaultClass;

  return Component;
});
