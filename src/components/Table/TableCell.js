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
  static propTypes = getCorePropTypes(null, {
    isHeader: "bool"
  });

  static defaultProps = getCorePropDefaults(
    {
      uirole: ROLE.CELL
    },
    {
      isHeader: false
    }
  );

  render() {
    const { uidata, children, props } = getValidProps(this.props);

    const { isHeader } = uidata;

    if (isHeader) {
      return <th {...props}>{children}</th>;
    }

    return <td {...props}>{children}</td>;
  }
}

export default TableCell;
