/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";

class AccordionGroup extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    uirole: Roles.GROUP
  });

  renderChild = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on accordion components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    this.maxIndex = this.maxIndex + 1;
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      active,
      onClick,
      props
    } = getValidProps(this.props);

    const classes = {
      [uiclass]: true,
      active
    };

    return (
      <Component {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.TITLE:
                return this.renderChild(child, { uiclass, onClick });
              case Roles.CONTENT:
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

export default AccordionGroup;
