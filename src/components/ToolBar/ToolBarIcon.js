import React from "react";
import {
  CoreComponent,
  getValidProps,
  getElementType,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class ToolBarIcon extends CoreComponent {
  static defaultProps = getCorePropDefaults({
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
