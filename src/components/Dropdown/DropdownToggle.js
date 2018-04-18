/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class DropdownToggle extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "button",
    uirole: ROLE.TOGGLE
  });

  render() {
    const { renderAs: Component, open, children, props } = getValidProps(
      this.props
    );

    const caretClass = open ? "fa-caret-down" : "fa-caret-right";

    return (
      <Component {...props}>
        {children}
        <span className={`ui-dropdown-caret fa ${caretClass}`} />
      </Component>
    );
  }
}

export default DropdownToggle;
