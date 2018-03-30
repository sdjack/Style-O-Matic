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
  isUsable,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";
import TitleContent from "./TitleContent";
import TitleSubtitle from "./TitleSubtitle";
import TitleIcon from "./TitleIcon";
// import "./Title.css";

class Title extends React.Component {
  static propTypes = getCorePropTypes({
    showAs: "string"
  });

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: "title",
    showAs: "h2"
  });

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.CONTENT;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on title components.");
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
      showAs,
      children,
      props
    } = getValidProps(this.props);

    let contentElement = "h2";
    let subtitleElement = "h5";

    if (isUsable(showAs)) {
      switch (showAs) {
        case "h1":
          contentElement = "h1";
          subtitleElement = "h4";
          break;
        case "h3":
          contentElement = "h3";
          subtitleElement = "h6";
          break;
        case "h4":
          contentElement = "h4";
          subtitleElement = "h6";
          break;
        case "h5":
          contentElement = "h5";
          subtitleElement = "small";
          break;
        case "h6":
          contentElement = "h6";
          subtitleElement = "small";
          break;
        default:
          contentElement = "h2";
          subtitleElement = "h5";
          break;
      }
    }

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.SUBTITLE:
                return this.renderChild(child, {
                  uiclass,
                  componentClass: subtitleElement
                });
              case Roles.CONTENT || Roles.ICON:
                return this.renderChild(child, {
                  uiclass,
                  componentClass: contentElement
                });
              default:
                return child;
            }
          } else {
            return child;
          }
        })}
      </Component>
    );
  }
}

Title.Content = TitleContent;
Title.Subtitle = TitleSubtitle;
Title.Icon = TitleIcon;

export default setCoreClass("title", Title);
