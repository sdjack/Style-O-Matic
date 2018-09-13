import React from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropDefaults,
  ROLE
} from "../../lib";
import "./Icon.css";

class Icon extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "i",
    uirole: ROLE.ICON
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);
    return <Component {...props}>{children}</Component>;
  }
}

export default Icon;
