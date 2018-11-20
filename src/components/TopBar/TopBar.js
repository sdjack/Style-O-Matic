/**
 * @memberof components
 * @namespace TopBar
 * @author Steven Jackson
* @scss ../../scss/components/TopBar
 * @example <TopBar>
             Example Content
           </TopBar>
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import "./TopBar.css";

class TopBar extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOPBAR
  });

  renderCore = () => {
    const { renderAs: Component, children, props } = getValidProps(this.props);
    return <Component {...props}>{children}</Component>;
  };
}

export default TopBar;
