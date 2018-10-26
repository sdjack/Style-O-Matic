/**
 * @memberof Badge
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
/**
 * [BadgeIcon description]
 * @extends CoreComponent
 */
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
