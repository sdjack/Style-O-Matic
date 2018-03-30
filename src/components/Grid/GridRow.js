/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import warning from "warning";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils";
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

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.COLUMN;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(
        false,
        `String refs are not supported on grid-${role} components.`
      );
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  };

  render() {
    const { componentClass: Component, children, props } = getValidProps(
      this.props
    );

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.COLUMN:
                return this.renderChild(child, { uiclass: "ui-grid" });
              default:
                return child;
            }
          }
          return child;
        })}
      </Component>
    );
  }
}

export default GridRow;
