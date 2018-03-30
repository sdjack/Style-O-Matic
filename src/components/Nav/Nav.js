/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import NavItem from "./NavItem.js";
import NavFolder from "./NavFolder.js";
import {
  setCoreClass,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils.js";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";
import "./Nav.css";

class Nav extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "nav",
    uirole: "nav",
    orientation: "vertical"
  });

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.ITEM;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on nav components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role),
      onClick: createChainedFunction(child.props.onClick, this.handleOnClick)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      path,
      active,
      children,
      props
    } = getValidProps(this.props);

    const minimized = !active;

    const classes = {
      minimized
    };

    return (
      <Component {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            return this.renderChild(child, { uiclass, path, minimized });
          }
          return child;
        })}
      </Component>
    );
  }
}

Nav.Item = NavItem;
Nav.Folder = NavFolder;

export default setCoreClass("ui-nav", Nav);
