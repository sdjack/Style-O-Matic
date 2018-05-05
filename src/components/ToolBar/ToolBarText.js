/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class ToolBarText extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TEXT,
    text: ""
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default ToolBarText;
