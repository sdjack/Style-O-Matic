import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  setCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class TableHead extends CoreComponent {
  static propTypes = setCorePropTypes({
    filtering: "func",
    sorting: "func",
    editing: "func"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "thead",
    uirole: ROLE.THEAD,
    filtering: null,
    sorting: null,
    editing: null
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
      uiclass: this.childPrefix(child.props.uirole),
      rowtype: "head",
      data: this.props.data,
      filtering: this.props.filtering,
      sorting: this.props.sorting,
      editing: this.props.editing
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

export default TableHead;
