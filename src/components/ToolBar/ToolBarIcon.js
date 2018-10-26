/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  getElementType,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class ToolBarIcon extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.ICON
  });

  render() {
    const { children, props } = getValidProps(this.props);

    const ElementType = getElementType(ToolBarIcon, this.props);

    return <ElementType {...props}>{children}</ElementType>;
  }
}

export default ToolBarIcon;
