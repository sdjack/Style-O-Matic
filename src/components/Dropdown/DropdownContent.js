import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class DropdownContent extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CONTENT
  });

  items = [];

  renderChild = (child, props) => {
    let ref = c => {
      this.items.push(c);
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ref,
      className: "ui-dropdown-item"
    });
  };

  render() {
    const { renderAs: Component, children, props, inherited } = getValidProps(
      this.props
    );

    this.items = [];

    return (
      <Component {...props}>
        {React.Children.map(children, child =>
          this.renderChild(child, inherited)
        )}
      </Component>
    );
  }
}

export default DropdownContent;
