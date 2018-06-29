import React, { cloneElement } from "react";
import cx from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import TableHead from "./TableHead.js";
import TableBody from "./TableBody.js";
import TableFoot from "./TableFoot.js";
import TableRow from "./TableRow.js";
import TableCell from "./TableCell.js";
import "./Table.css";

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

export default Table;
