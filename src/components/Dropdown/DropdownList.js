/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class DropdownList extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "ul",
    uirole: ROLE.LIST
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
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.HEADER:
                return this.renderChild(child, inherited);
              default:
                return <li>{this.renderChild(child, inherited)}</li>;
            }
          }
          return <li>{this.renderChild(child, inherited)}</li>;
        })}
      </Component>
    );
  }
}

export default DropdownList;
