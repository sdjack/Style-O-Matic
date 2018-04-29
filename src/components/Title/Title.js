/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */
import _ from "lodash";
import React, { cloneElement } from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import TitleContent from "./TitleContent.js";
import TitleSubtitle from "./TitleSubtitle.js";
import TitleIcon from "./TitleIcon";
import "./Title.css";

class Title extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: "title"
  });

  static Content = TitleContent;
  static Subtitle = TitleSubtitle;
  static Icon = TitleIcon;

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
    const { renderAs, children, props, inherited } = getValidProps(this.props);

    let contentElement = "h2";
    let subtitleElement = "h5";

    switch (renderAs) {
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

    return (
      <div {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.SUBTITLE:
                return this.renderChild(child, {
                  ...inherited,
                  renderAs: subtitleElement
                });
              case ROLE.CONTENT || ROLE.ICON:
                return this.renderChild(child, {
                  ...inherited,
                  renderAs: contentElement
                });
              default:
                return child;
            }
          } else {
            return child;
          }
        })}
      </div>
    );
  }
}

export default Title;
