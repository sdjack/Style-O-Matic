/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import classNames from "classnames";
import { isUsable } from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";

class TableCell extends React.Component {
  static propTypes = getCorePropTypes(null, {
    isHeader: "bool"
  });

  static defaultProps = getCorePropDefaults(
    {
      uirole: Roles.CELL
    },
    {
      isHeader: false
    }
  );

  render() {
    const {
      uiclass,
      className,
      textAlign,
      uidata,
      children,
      props
    } = getValidProps(this.props);

    const { isHeader } = uidata;

    const classes = {
      [uiclass]: true
    };

    if (isUsable(textAlign)) {
      classes[`ui-align-${textAlign}`] = true;
    }

    delete props.uirole;

    if (isHeader) {
      return (
        <th {...props} className={classNames(className, classes)}>
          {children}
        </th>
      );
    }

    return (
      <td {...props} className={classNames(className, classes)}>
        {children}
      </td>
    );
  }
}

export default TableCell;
