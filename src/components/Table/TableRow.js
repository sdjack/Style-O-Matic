/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class TableRow extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    uirole: ROLE.ROW
  });

  cells = [];

  renderChild = (child, props) => {
    let ref = c => {
      this.cells.push(c);
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: this.childPrefix(child.props.uirole)
    });
  };

  render() {
    const { children, props, inherited } = getValidProps(this.props);

    this.cells = [];

    return (
      <tr {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === ROLE.CELL
          ) {
            return this.renderChild(child, inherited);
          }
          return child;
        })}
      </tr>
    );
  }
}

export default TableRow;
