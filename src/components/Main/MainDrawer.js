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
import MainDrawerContent from "./MainDrawerContent.js";

class MainDrawer extends CoreComponent {
  static propTypes = getCorePropTypes({
    minimizable: "bool",
    defaultOpen: "bool"
  });

  static defaultProps = getCorePropDefaults({
    uirole: ROLE.DRAWER,
    minimizable: true,
    defaultOpen: false
  });

  static Content = MainDrawerContent;

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
      disabled,
      minimizable,
      children,
      props
    } = getValidProps(this.props);

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

export default MainDrawer;
