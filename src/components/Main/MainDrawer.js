/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";
import Button from "../Button";
import MainDrawerContent from "./MainDrawerContent";

class MainDrawer extends React.Component {
  static propTypes = getCorePropTypes({
    minimizable: "bool",
    defaultOpen: "bool"
  });

  static defaultProps = getCorePropDefaults({
    uirole: Roles.DRAWER,
    minimizable: true,
    defaultOpen: false
  });

  constructor(props) {
    super(props);
    this.state = {
      navActive: false
    };
  }

  onToggleHandler = e => {
    e.preventDefault();
    const { navActive } = this.state;
    this.setState({ navActive: !navActive });
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
      disabled,
      minimizable,
      children,
      props
    } = getValidProps(this.props);

    delete props.onToggle;
    const active = this.state.navActive;
    const classes = {
      active,
      minimized: !active && minimizable
    };

    const toggle = [];
    if (minimizable) {
      toggle.push(
        <button
          key="drawer_toggle_left"
          className="drawer-toggle-button fa fa-bars"
          onClick={this.onToggleHandler}
        />
      );
    }

    return (
      <Component {...props} className={classNames(className, classes)}>
        {toggle}
        {React.Children.map(children, child =>
          this.renderChild(child, {
            disabled,
            uiclass,
            active
          })
        )}
      </Component>
    );
  }
}

MainDrawer.Content = MainDrawerContent;

export default MainDrawer;
