import React from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class BadgeContent extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CONTENT
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return (
      <Component {...props} ref={this.onSetRef}>
        {children}
      </Component>
    );
  }
}

export default BadgeContent;
