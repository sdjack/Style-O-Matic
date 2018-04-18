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
import FooterContent from "./FooterContent.js";
import FooterDrawer from "./FooterDrawer.js";
import FooterItem from "./FooterItem.js";
import FooterText from "./FooterText.js";
import Button from "../Button/Button.js";
import "./Footer.css";

class Footer extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "footer",
    uirole: "footer"
  });

  static Content = FooterContent;
  static Drawer = FooterDrawer;
  static Item = FooterItem;
  static Button = Button;
  static Text = FooterText;

  renderChild(child, props) {
    const role = child.props.uirole || ROLE.DEFAULT;
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
  }

  render() {
    const {
      renderAs: Component,
      uiclass,
      fixed,
      children,
      props
    } = getValidProps(this.props);

    if (fixed) {
      return [
        <div className="ui-footer-bolster" key="footer-bolster" />,
        <Component {...props} key="footer">
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined"
            ) {
              return this.renderChild(child, { uiclass });
            }
            return child;
          })}
        </Component>
      ];
    }
    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.CONTENT || ROLE.DRAWER:
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

export default Footer;
