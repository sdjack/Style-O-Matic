/**
 * @namespace Style-O-Matic UI
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class BadgeIcon extends CoreComponent {
  static defaultProps = setCorePropDefaults({
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
