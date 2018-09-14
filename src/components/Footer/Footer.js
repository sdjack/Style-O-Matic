import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import Drawer from "../Drawer/Drawer.js";
import FooterContent from "./FooterContent.js";
import "./Footer.css";

class FooterDrawer extends Drawer {
  static defaultProps = {
    renderAs: "div",
    uirole: ROLE.DRAWER,
    attach: "bottom"
  };
}

class Footer extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "footer",
    uirole: ROLE.FOOTER
  });

  static Drawer = FooterDrawer;
  static Content = FooterContent;

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

    if (fixed) {
      output.push(<div className="ui-footer-bolster" key="footer-bolster" />);
    }

    output.push(
      <Component {...props} key="footer">
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

    return output;
  }
}

export default Footer;
