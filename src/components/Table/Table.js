/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import {
  setCoreClass,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";
import TableHead from "./TableHead.js";
import TableBody from "./TableBody.js";
import TableFoot from "./TableFoot.js";
import TableRow from "./TableRow.js";
import TableCell from "./TableCell.js";
import "./Table.css";

class Table extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "table",
    uirole: "table"
  });

  renderChild = (child, props) => {
    const role = child.props.role;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on table components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, child.props.uirole)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      [uiclass]: true
    };

    delete props.uirole;

    return (
      <Component {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case TableHead.defaultProps.uirole:
                return this.renderChild(child, { uiclass });
              case TableBody.defaultProps.uirole:
                return this.renderChild(child, { uiclass });
              case TableFoot.defaultProps.uirole:
                return this.renderChild(child, { uiclass });
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

Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Cell = TableCell;

export default setCoreClass("ui-table", Table);
