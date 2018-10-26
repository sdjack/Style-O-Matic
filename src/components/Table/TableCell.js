/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  setCorePropDefaults,
  setCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";
import TableCellWidget from "./TableCellWidget.js";

class TableCell extends CoreComponent {
  static propTypes = setCorePropTypes({
    columnid: "number",
    rowid: "number",
    rowtype: "string"
  });

  static defaultProps = setCorePropDefaults({
    columnid: 0,
    rowid: 0,
    uirole: ROLE.CELL,
    rowtype: "body"
  });

  render() {
    if (this.props.rowtype && this.props.rowtype === "head") {
      const { ...props } = this.props;
      return <TableCellWidget {...this.props} />;
    }
    const { children, props } = getValidProps(this.props);

    return <td {...props}>{children}</td>;
  }
}

export default TableCell;
