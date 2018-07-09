import React, { cloneElement } from "react";
import cx from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  ROLE,
  uID
} from "../../lib";
import TableHead from "./TableHead.js";
import TableBody from "./TableBody.js";
import TableFoot from "./TableFoot.js";
import TableRow from "./TableRow.js";
import TableCell from "./TableCell.js";
import TableData from "./models/TableData.js";
import "./Table.css";

function ParseSectionData(data, UUID) {
  const output = [];
  const rowCount = data.length;
  const colCount = data[0].length;
  for (let i = 0; i < rowCount; i += 1) {
    const readRow = data[i];
    const dataRow = [];
    for (let x = 0; x < colCount; x += 1) {
      const column = readRow[x];
      if (column instanceof Object) {
        const { content, ...props } = column;
        dataRow.push(
          <TableCell key={`td_${UUID}_cell_${i}${x}`} {...props}>
            {content}
          </TableCell>
        );
      } else {
        dataRow.push(
          <TableCell key={`td_${UUID}_cell_${i}${x}`}>{column}</TableCell>
        );
      }
    }
    output.push(<TableRow key={`td_${UUID}_cellrow${i}`}>{dataRow}</TableRow>);
  }
  return output;
}

class Table extends CoreComponent {
  static propTypes = getCorePropTypes({
    bordered: "bool",
    padded: "bool",
    hover: "bool",
    spaced: "bool",
    striped: "bool"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "table",
    uirole: ROLE.TABLE,
    bordered: false,
    padded: false,
    hover: false,
    spaced: false,
    striped: false
  });

  static Head = TableHead;
  static Body = TableBody;
  static Foot = TableFoot;
  static Row = TableRow;
  static Cell = TableCell;

  static FactoryData = data => {
    const output = [];
    const UUID = uID();
    if (data.head) {
      const compiled = ParseSectionData(data.head, UUID);
      output.push(<TableHead key={`thead_${UUID}`}>{compiled}</TableHead>);
    }
    if (data.body) {
      const compiled = ParseSectionData(data.body, UUID);
      output.push(<TableBody key={`tbody_${UUID}`}>{compiled}</TableBody>);
    }
    if (data.foot) {
      const compiled = ParseSectionData(data.foot, UUID);
      output.push(<TableFoot key={`tfoot_${UUID}`}>{compiled}</TableFoot>);
    }
    return output;
  };

  constructor(props) {
    super(props);
    this.columns = {};
    this.data = TableData.init(this);
  }

  /* eslint-disable */

  handleFilter = node => {
    this.forceUpdate();
  };

  handleSort = node => {
    const { rowid, columnid } = node.props;
    const dataColumn = this.data.getColumn(columnid);
    dataColumn.changeSortState();
    this.forceUpdate();
  };

  handleEdit = node => {
    this.forceUpdate();
  };
  /* eslint-enable */

  renderInteractiveChild = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      data: this.data,
      uiclass: this.childPrefix(child.props.uirole),
      filtering: this.handleFilter,
      sorting: this.handleSort,
      editing: this.handleEdit
    });
  };

  renderChild = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      data: this.data,
      uiclass: this.childPrefix(child.props.uirole)
    });
  };

  preRenderBody = (children, inherited) => {
    const output = [];
    React.Children.map(children, child => {
      if (
        typeof child.props !== "undefined" &&
        typeof child.props.uirole !== "undefined" &&
        child.props.uirole === TableBody.defaultProps.uirole
      ) {
        output.push(this.renderChild(child, inherited));
      }
      return null;
    });
    return output;
  };

  render() {
    const {
      renderAs: Component,
      className,
      bordered,
      padded,
      hover,
      spaced,
      striped,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    const classes = {
      "ui-table-bordered": bordered,
      "ui-table-padded": padded,
      "ui-table-hover": hover,
      "ui-table-spaced": spaced,
      "ui-table-striped": striped
    };

    const uiClassCore = cx(className, classes);
    delete props.className;

    const bodyRows = this.preRenderBody(children, inherited);

    return (
      <Component className={uiClassCore} {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === TableHead.defaultProps.uirole
          ) {
            return this.renderInteractiveChild(child, inherited);
          }
          return null;
        })}
        {bodyRows}
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole !== TableHead.defaultProps.uirole &&
            child.props.uirole !== TableBody.defaultProps.uirole
          ) {
            switch (child.props.uirole) {
              case TableFoot.defaultProps.uirole:
                return this.renderInteractiveChild(child, inherited);
              default:
                return child;
            }
          }
          return null;
        })}
      </Component>
    );
  }
}

export default Table;
