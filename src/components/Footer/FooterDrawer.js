/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import uncontrollable from "uncontrollable";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils.js";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";
import FooterDrawerContent from "./FooterDrawerContent.js";

class FooterDrawer extends React.Component {
  static propTypes = getCorePropTypes(null, {
    minimizable: "bool",
    defaultOpen: "bool"
  });

  static defaultProps = getCorePropDefaults(
    {
      uirole: Roles.DRAWER
    },
    {
      minimizable: false,
      defaultOpen: false
    }
  );

  handleOnToggle = e => {
    e.preventDefault();
    const open = !this.props.open;
    if (this.props.onToggle) {
      this.props.onToggle(open, e, { source: "click" });
    }
  };

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.CONTENT;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on drawer components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
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
      active,
      disabled,
      uidata,
      children,
      props
    } = getValidProps(this.props);

    const { minimizable } = uidata;

    delete props.onToggle;

    const classes = {
      minimized: !active && minimizable
    };

    return (
      <Component {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            return this.renderChild(child, {
              disabled,
              uiclass
            });
          }
          return child;
        })}
      </Component>
    );
  }
}

FooterDrawer.Content = FooterDrawerContent;

export default uncontrollable(FooterDrawer, { open: "onToggle" });
