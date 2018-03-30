/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import warning from "warning";
import {
  setCoreClass,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";
import ToolBarHeader from "./ToolBarHeader";
import ToolBarContent from "./ToolBarContent";
import "./ToolBar.css";

class ToolBar extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    uirole: "toolbar"
  });

  renderHeader = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this.header = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on toolbar components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  };

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.CONTENT;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on toolbar components.");
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
      children,
      props
    } = getValidProps(this.props);

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            return this.renderChild(child, { uiclass });
          }
          return child;
        })}
      </Component>
    );
  }
}

ToolBar.Header = ToolBarHeader;
ToolBar.Content = ToolBarContent;

export default setCoreClass("ui-toolbar", ToolBar);
