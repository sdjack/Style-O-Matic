import React, { cloneElement } from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class TableFoot extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "tfoot",
    uirole: "tfoot"
  });

  rows = [];
  rowCount = 0;

  renderChild = (child, props) => {
    let ref = c => {
      this.rows.push(c);
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    const index = this.rowCount;
    this.rowCount += 1;
    return cloneElement(child, {
      ...props,
      ref,
      rowid: index,
      data: this.props.data,
      uiclass: this.childPrefix(child.props.uirole),
      rowtype: "foot"
    });
  };

  render() {
    const { renderAs: Component, children, props, inherited } = getValidProps(
      this.props
    );

    this.rows = [];
    this.rowCount = 0;

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === ROLE.ROW
          ) {
            return this.renderChild(child, inherited);
          }
          return child;
        })}
      </Component>
    );
  }
}

export default TableFoot;
