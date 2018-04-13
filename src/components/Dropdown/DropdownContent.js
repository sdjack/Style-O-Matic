/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";

class DropdownContent extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: "content"
  });

  renderChildren = (child, { ...props }) => {
    let ref = c => {
      this.content = c;
    };
    if (typeof child.ref !== "string") {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      className: prefix(props, "item")
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      children,
      props
    } = getValidProps(this.props);

    return (
      <Component {...props}>
        {React.Children.map(children, child =>
          this.renderChildren(child, { uiclass: "ui-dropdown" })
        )}
      </Component>
    );
  }
}

export default DropdownContent;
