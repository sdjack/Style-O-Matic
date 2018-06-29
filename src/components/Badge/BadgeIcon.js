import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class BadgeIcon extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "span",
    uirole: ROLE.ICON
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return (
      <Component {...props} role="img">
        {children}
      </Component>
    );
  }
}

export default BadgeIcon;
