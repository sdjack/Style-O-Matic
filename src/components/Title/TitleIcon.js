/**
 * @namespace Style-O-Matic UI
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import _ from "lodash";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class TitleIcon extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.ICON
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default TitleIcon;
