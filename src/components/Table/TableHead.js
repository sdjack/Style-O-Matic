/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";

class TableHead extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "thead",
    uirole: "thead"
  });

  rows = [];

  renderChild = (child, props) => {
    let ref = c => {
      this.rows.push(c);
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on table components.");
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
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      [uiclass]: true
    };

    delete props.uirole;
    this.rows = [];
    return (
      <Component {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === Roles.ROW
          ) {
            return this.renderChild(child, { uiclass });
          }
          return child;
        })}
      </Component>
    );
  }
}

export default TableHead;
