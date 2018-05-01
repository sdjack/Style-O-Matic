/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class TableRow extends CoreComponent {
  static propTypes = getCorePropTypes({
    rowtype: "string"
  });

  static defaultProps = getCorePropDefaults({
    uirole: ROLE.ROW,
    rowtype: "body"
  });

  cells = [];

  renderChild = (child, props, rowtype) => {
    let ref = c => {
      this.cells.push(c);
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: this.childPrefix(child.props.uirole),
      rowtype
    });
  };

  render() {
    const { rowtype, children, props, inherited } = getValidProps(this.props);

    this.cells = [];

    return (
      <tr {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === ROLE.CELL
          ) {
            return this.renderChild(child, inherited, rowtype);
          }
          return child;
        })}
      </tr>
    );
  }
}

export default TableRow;
