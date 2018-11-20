/**
 * @memberof components
 * @namespace Footer
 * @author Steven Jackson
 * @scss ../../scss/components/Footer
 * @example <Footer>
             Example Title
           </Footer>
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Footer.css";

class Footer extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "footer",
    uirole: ROLE.FOOTER
  });

  renderChild = (child, props) => {
    const role = child.props.uirole || ROLE.CONTENT;
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
            return this.renderChild(child, { ...inherited });
          }
          return child;
        })}
      </Component>
    );
  }
}

export default Footer;
