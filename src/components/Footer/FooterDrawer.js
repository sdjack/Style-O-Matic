/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import FooterDrawerContent from "./FooterDrawerContent.js";

class FooterDrawer extends CoreComponent {
  static propTypes = getCorePropTypes(null, {
    minimizable: "bool",
    defaultOpen: "bool"
  });

  static defaultProps = getCorePropDefaults(
    {
      uirole: ROLE.DRAWER
    },
    {
      minimizable: false,
      defaultOpen: false
    }
  );

  static Content = FooterDrawerContent;

  handleOnToggle = e => {
    e.preventDefault();
    const open = !this.props.open;
    if (this.props.onToggle) {
      this.props.onToggle(open, e, { source: "click" });
    }
  };

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
    const {
      renderAs: Component,
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

export default FooterDrawer;
