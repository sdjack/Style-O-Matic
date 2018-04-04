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
} from "../_utilities/CoreUtils.js";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";
import HeaderContent from "./HeaderContent.js";
import HeaderDrawer from "./HeaderDrawer.js";
import HeaderItem from "./HeaderItem.js";
import Button from "../Button/Button.js";
import "./Header.css";

class Header extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "header",
    uirole: "header"
  });

  renderChild = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on header components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, "content")
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      fixed,
      children,
      props
    } = getValidProps(this.props);

    if (fixed) {
      return [
        <Component {...props} key="header">
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined"
            ) {
              switch (child.props.uirole) {
                case Roles.CONTENT:
                  return this.renderChild(child, { uiclass });
                default:
                  return child;
              }
            }
            return child;
          })}
        </Component>,
        <div className="ui-header-bolster" key="header-bolster" />
      ];
    }
    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.CONTENT || Roles.DRAWER:
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

Header.Content = HeaderContent;
Header.Drawer = HeaderDrawer;
Header.Item = HeaderItem;
Header.Button = Button;

export default setCoreClass("ui-header", Header);
