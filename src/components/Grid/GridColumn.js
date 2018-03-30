/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import classNames from "classnames";
import { setCoreClass, isUsable } from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";

class GridColumn extends React.Component {
  static propTypes = getCorePropTypes({
    cols: "number"
  });

  static defaultProps = getCorePropDefaults({
    uirole: Roles.CELL,
    cols: 12,
    textAlign: "left"
  });

  render() {
    const {
      componentClass: Component,
      className,
      children,
      props
    } = getValidProps(this.props);

    const classes = {};

    if (isUsable(this.props.cols)) {
      classes[`span-${this.props.cols}`] = true;
    }

    return (
      <Component {...props} className={classNames(className, classes)}>
        {children}
      </Component>
    );
  }
}

export default setCoreClass("grid-column", GridColumn);
