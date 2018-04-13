/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";

class DropdownToggle extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: "toggle"
  });

  render() {
    const { componentClass: Component, children, props } = getValidProps(
      this.props
    );

    return (
      <Component {...props}>
        {children}
        <span className="ui-dropdown-caret fa fa-caret-right" />
      </Component>
    );
  }
}

export default DropdownToggle;
