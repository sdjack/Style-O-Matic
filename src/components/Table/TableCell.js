import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";
import TableCellFilter from "./TableCellFilter.js";

class TableCell extends CoreComponent {
  static propTypes = getCorePropTypes({
    columnid: "number",
    rowid: "number",
    rowtype: "string"
  });

  static defaultProps = getCorePropDefaults({
    columnid: 0,
    rowid: 0,
    uirole: ROLE.CELL,
    rowtype: "body"
  });

  render() {
    if (this.props.rowtype && this.props.rowtype === "head") {
      const { ...props } = this.props;
      return <TableCellFilter {...this.props} />;
    }
    const { children, props } = getValidProps(this.props);

    return <td {...props}>{children}</td>;
  }
}

export default TableCell;
