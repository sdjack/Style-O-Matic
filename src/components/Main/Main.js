/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import Drawer from "../Drawer/Drawer.js";
import MainContent from "./MainContent.js";
import "./Main.css";

class Main extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "main",
    uirole: ROLE.MAIN,
    fixed: false
  });

  static Drawer = Drawer;
  static Content = MainContent;

  renderChild = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: this.childPrefix(role)
    });
  };

  render() {
    const { renderAs: Component, uiclass, children, props } = getValidProps(
      this.props
    );

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.CONTENT:
                return this.renderChild(child, { uiclass });
              default:
                return child;
            }
          }
          return child;
        })}
      </Component>
    );
  }
}

export default Main;
