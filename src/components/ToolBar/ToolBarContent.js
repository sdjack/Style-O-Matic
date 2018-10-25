/**
 * @namespace Style-O-Matic UI
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class ToolBarContent extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CONTENT
  });

  render() {
    const { renderAs: Component, children, props, inherited } = getValidProps(
      this.props
    );

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            return this.renderChild(child, inherited);
          }
          return child;
        })}
      </Component>
    );
  }
}

export default ToolBarContent;
