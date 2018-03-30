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

class MainContent extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: "content"
  });

  render() {
    const { componentClass: Component, children, props } = getValidProps(
      this.props
    );

    return (
      <div className="scroll-wrapper">
        <Component {...props}>{children}</Component>
      </div>
    );
  }
}

export default MainContent;
