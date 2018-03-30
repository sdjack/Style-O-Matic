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
import FooterContent from "./FooterContent.js";
import FooterDrawer from "./FooterDrawer.js";
import "./Footer.css";

class Footer extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "footer",
    uirole: "footer"
  });

  renderChild(child, props) {
    const role = child.props.uirole || Roles.DEFAULT;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on footer components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  }

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
        <div className="ui-footer-bolster" key="footer-bolster" />,
        <Component {...props} key="footer">
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

Footer.Content = FooterContent;
Footer.Drawer = FooterDrawer;

export default setCoreClass("ui-footer", Footer);
