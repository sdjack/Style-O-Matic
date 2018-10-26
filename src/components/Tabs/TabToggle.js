/**
 * @memberof components
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

class TabToggle extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TABTOGGLE
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default TabToggle;
