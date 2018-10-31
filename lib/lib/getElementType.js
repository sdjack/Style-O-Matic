"use strict";

exports.__esModule = true;
/**
 * @memberof utilities
 * @name getElementType
 * @author Steven Jackson
 */
/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {function} [getDefault] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
function getElementType(Component, props, getDefault) {
  var _Component$defaultPro = Component.defaultProps,
      defaultProps = _Component$defaultPro === undefined ? {} : _Component$defaultPro;

  // ----------------------------------------
  // user defined "renderAs" element type

  if (props.renderAs && props.renderAs !== defaultProps.renderAs) {
    return props.renderAs;
  }

  // ----------------------------------------
  // computed default element type

  if (getDefault) {
    var computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  }

  // ----------------------------------------
  // infer anchor links

  if (props.href || props.to) return "a";

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.renderAs || "div";
}

exports.default = getElementType;
module.exports = exports["default"];