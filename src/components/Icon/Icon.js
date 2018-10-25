/**
 * @namespace Style-O-Matic UI
 * @name Icon
 * @author Steven Jackson
 * @external scssdir
 * @see ../../scss/components/Icon
 * @example <Icon>
             Example Content
           </Icon>
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import "./Icon.css";

class Icon extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "i",
    uirole: ROLE.ICON
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);
    return <Component {...props}>{children}</Component>;
  }
}

export default Icon;
