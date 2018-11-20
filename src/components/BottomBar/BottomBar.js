/**
 * @memberof components
 * @namespace BottomBar
 * @author Steven Jackson
* @scss ../../scss/components/BottomBar
 * @example <BottomBar>
   Example Content
 </BottomBar>
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import "./BottomBar.css";

class BottomBar extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.BOTTOMBAR
  });

  renderCore = () => {
    const { renderAs: Component, children, props } = getValidProps(this.props);
    return <Component {...props}>{children}</Component>;
  };
}

export default BottomBar;
