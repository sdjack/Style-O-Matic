/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { setCoreClass } from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";

class GridRow extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    uirole: Roles.ROW
  });

  render() {
    const { componentClass: Component, children, props } = getValidProps(
      this.props
    );

    return <Component {...props}>{children}</Component>;
  }
}

export default setCoreClass("grid-row", GridRow);
