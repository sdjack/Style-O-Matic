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
  const { defaultProps = {} } = Component;

  // ----------------------------------------
  // user defined "renderAs" element type

  if (props.renderAs && props.renderAs !== defaultProps.renderAs)
    return props.renderAs;

  // ----------------------------------------
  // computed default element type

  if (getDefault) {
    const computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  }

  // ----------------------------------------
  // infer anchor links

  if (props.href || props.to) return "a";

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.renderAs || "div";
}

export default getElementType;
