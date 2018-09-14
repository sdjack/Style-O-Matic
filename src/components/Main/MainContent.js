import React from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class MainContent extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CONTENT
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return (
      <div uirole={ROLE.CONTENT} className="scroll-wrapper">
        <Component {...props}>{children}</Component>
      </div>
    );
  }
}

export default MainContent;
