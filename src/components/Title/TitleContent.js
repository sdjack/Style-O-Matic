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

class TitleContent extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "h1",
    uirole: ROLE.CONTENT
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return (
      <Component {...props} ref={this.onSetRef}>
        {children}
      </Component>
    );
  }
}

export default TitleContent;
