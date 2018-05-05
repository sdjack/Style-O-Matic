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
// import "./UI.css";

class UI extends CoreComponent {
  static propTypes = getCorePropTypes({
    theme: "string"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: "ui",
    theme: "default"
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default UI;
