/**
 * @namespace Style-O-Matic UI
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class TableBody extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "tbody",
    uirole: ROLE.TBODY
  });

  rows = [];
  rowCount = 0;

  renderChild = (child, props) => {
    let ref = c => {
      if (c && this.props.data) {
        this.rows.push(c);
      }
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    const index = this.rowCount;
    this.rowCount += 1;
    return cloneElement(child, {
      ...props,
      ref,
      data: this.props.data,
      rowid: index,
      uiclass: this.childPrefix(child.props.uirole),
      rowtype: "body"
    });
  };

  render() {
    const { renderAs: Component, children, props, inherited } = getValidProps(
      this.props
    );

    this.rows = [];
    this.rowCount = 0;

    const visibleRows = this.props.data.applyChanges(children);

    return (
      <Component {...props}>
        {React.Children.map(visibleRows, child => {
          if (
            child &&
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

export default TableBody;
