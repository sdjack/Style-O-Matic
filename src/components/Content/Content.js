/**
 * @memberof components
 * @namespace Content
 * @author Steven Jackson
* @scss ../../scss/components/Content
 * @example <Content>
             Example Content
           </Content>
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class Content extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CONTENT
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);
    return <Component {...props}>{children}</Component>;
  }
}

export default Content;
