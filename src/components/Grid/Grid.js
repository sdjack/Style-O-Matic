/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import warning from "warning";
import {
  setCoreClass,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";
import GridRow from "./GridRow";
import GridColumn from "./GridColumn";
import "./Grid.css";

class Grid extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: "grid"
  });

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.ROW;
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
    const {
      componentClass: Component,
      uiclass,
      children,
      props
    } = getValidProps(this.props);

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.ROW:
                return this.renderChild(child, { uiclass });
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

Grid.Row = GridRow;
Grid.Column = GridColumn;

export default setCoreClass("ui-grid", Grid);
