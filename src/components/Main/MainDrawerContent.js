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
} from "../_utilities/PropUtils";

class MainDrawerContent extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: "drawer-content"
  });

  render() {
    const { componentClass: Component, children, props } = getValidProps(
      this.props
    );

    return <Component {...props}>{children}</Component>;
  }
}

export default MainDrawerContent;
