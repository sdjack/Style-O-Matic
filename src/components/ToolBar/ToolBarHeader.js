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

class ToolBarHeader extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "h2",
    uirole: "header"
  });

  render() {
    const { componentClass: Component, children, props } = getValidProps(
      this.props
    );

    return <Component {...props}>{children}</Component>;
  }
}

export default ToolBarHeader;
