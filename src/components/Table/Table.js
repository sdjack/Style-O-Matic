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
import "./Table.css";

function ParseSectionData(data, UUID) {
  const output = [];
  let xCount;
  if (data.labels && data.labels.x) {
    xCount = data.labels.x.length;
    const labelRow = [];
    for (let i = 0; i < xCount; i += 1) {
      labelRow.push(
        <TableCell key={`td_${UUID}_label_${i}`}>{data.labels.x[i]}</TableCell>
      );
    }
    output.push(<TableRow key={`td_${UUID}_labelrow`}>{labelRow}</TableRow>);
  }
  if (data.rows) {
    const rowCount = data.rows.length;
    const colCount = xCount || data.rows[0].length;
    for (let i = 0; i < rowCount; i += 1) {
      const readRow = data.rows[i];
      const dataRow = [];
      for (let x = 0; x < colCount; x += 1) {
        dataRow.push(
          <TableCell key={`td_${UUID}_cell_${i}${x}`}>{readRow[x]}</TableCell>
        );
      }
      output.push(
        <TableRow key={`td_${UUID}_cellrow${i}`}>{dataRow}</TableRow>
      );
    }
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
      uiclass: this.childPrefix(child.props.uirole)
    });
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

    return (
      <Component className={uiClassCore} {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case TableHead.defaultProps.uirole:
                return this.renderChild(child, inherited);
              case TableBody.defaultProps.uirole:
                return this.renderChild(child, inherited);
              case TableFoot.defaultProps.uirole:
                return this.renderChild(child, inherited);
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

// const sampleData = {
//   head: {
//     labels: {
//       x: [],
//       y: []
//     },
//     rows: []
//   },
//   body: {
//     labels: {
//       x: [],
//       y: []
//     },
//     rows: []
//   },
//   foot: {
//     labels: {
//       x: [],
//       y: []
//     },
//     rows: []
//   }
// };

export default Table;
