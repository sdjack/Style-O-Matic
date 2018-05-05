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

class HeaderContent extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CONTENT
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default HeaderContent;
