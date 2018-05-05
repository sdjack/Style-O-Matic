/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class CardHeader extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.HEADER
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

export default CardHeader;
