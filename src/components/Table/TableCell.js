/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class TableCell extends CoreComponent {
  static propTypes = getCorePropTypes({
    rowtype: "string"
  });

  static defaultProps = getCorePropDefaults({
    uirole: ROLE.CELL,
    rowtype: "body"
  });

  render() {
    const { rowtype, children, props } = getValidProps(this.props);

    if (rowtype && rowtype === "head") {
      return <th {...props}>{children}</th>;
    }

    return <td {...props}>{children}</td>;
  }
}

export default TableCell;
