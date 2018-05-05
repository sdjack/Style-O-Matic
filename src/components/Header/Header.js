/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropDefaults,
  ROLE
} from "../../lib";
import Drawer from "../Drawer/Drawer.js";
import HeaderContent from "./HeaderContent.js";
import "./Header.css";

class HeaderDrawer extends Drawer {
  static defaultProps = {
    renderAs: "div",
    uirole: ROLE.DRAWER,
    attach: "top"
  };
}

class Header extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "header",
    uirole: ROLE.HEADER
  });

  static Drawer = HeaderDrawer;
  static Content = HeaderContent;

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
    const {
      renderAs: Component,
      uiclass,
      fixed,
      children,
      props
    } = getValidProps(this.props);

    const output = [];

    output.push(
      <Component {...props} key="header">
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

    if (fixed) {
      output.push(<div className="ui-header-bolster" key="header-bolster" />);
    }

    return output;
  }
}

export default Header;
