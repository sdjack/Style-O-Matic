/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";

class TableRow extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    uirole: Roles.ROW
  });

  cells = [];

  renderChild = (child, props) => {
    let ref = c => {
      this.cells.push(c);
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on table-row components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, child.props.uirole)
    });
  };

  render() {
    const { uiclass, className, children, props } = getValidProps(this.props);

    const classes = {
      [uiclass]: true
    };

    delete props.uirole;
    this.cells = [];
    return (
      <tr {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === Roles.CELL
          ) {
            return this.renderChild(child, { uiclass });
          }
          return child;
        })}
      </tr>
    );
  }
}

export default TableRow;
