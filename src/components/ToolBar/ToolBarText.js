/**
 * @memberof components
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

class ToolBarText extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TEXT,
    text: ""
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default ToolBarText;
