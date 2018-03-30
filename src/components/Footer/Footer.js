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
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";
import FooterContent from "./FooterContent";
// import "./Footer.css";

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
        </Component>,
        <div className="ui-footer-bolster" key="footer-bolster" />
      ];
    }
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

Footer.Content = FooterContent;

export default setCoreClass("ui-footer", Footer);
