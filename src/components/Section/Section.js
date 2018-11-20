/**
 * @memberof components
 * @namespace Section
 * @author Steven Jackson
* @scss ../../scss/components/Section
 * @example <Section>
             Example Title
           </Section>
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Section.css";

class Section extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "section",
    uirole: ROLE.SECTION
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

export default Section;
