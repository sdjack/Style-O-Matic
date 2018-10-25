/**
 * @namespace Style-O-Matic UI
 * @author Steven Jackson
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropTypes,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class TableRow extends CoreComponent {
  static propTypes = setCorePropTypes({
    rowid: "number",
    rowtype: "string",
    filtering: "func",
    sorting: "func",
    editing: "func"
  });

  static defaultProps = setCorePropDefaults({
    rowid: 0,
    uirole: ROLE.ROW,
    rowtype: "body",
    filtering: null,
    sorting: null,
    editing: null
  });

  columns = [];
  columnCount = 0;

  renderChild = (child, props, rowtype) => {
    let ref = c => {
      this.columns.push(c);
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    const index = this.columnCount;
    this.columnCount += 1;
    const dataColumn = this.props.data.getColumn(index);
    const cell = cloneElement(child, {
      ...props,
      ref,
      rowid: this.props.rowid,
      data: this.props.data,
      columnid: index,
      uiclass: this.childPrefix(child.props.uirole),
      rowtype,
      filtering: this.props.filtering,
      filtered: dataColumn.filterState !== 0,
      sorting: this.props.sorting,
      sorted: dataColumn.sortState,
      editing: this.props.editing,
      edited: false
    });
    if (this.props.rowtype === "body") {
      this.props.data.setColumn(cell);
    }
    return cell;
  };

  render() {
    const { rowtype, children, props, inherited } = getValidProps(this.props);

    this.columns = [];
    this.columnCount = 0;

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
