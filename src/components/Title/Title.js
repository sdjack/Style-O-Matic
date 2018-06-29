import React, { cloneElement } from "react";
import cx from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";
import TitleContent from "./TitleContent.js";
import TitleSubtitle from "./TitleSubtitle.js";
import TitleIcon from "./TitleIcon";
import "./Title.css";

class Title extends CoreComponent {
  static propTypes = getCorePropTypes({
    sticky: "bool"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TITLE,
    sticky: false
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
    const {
      renderAs,
      className,
      sticky,
      children,
      props,
      inherited
    } = getValidProps(this.props);
    const classes = {
      "ui-sticky": sticky
    };

    const uiClassCore = cx(className, classes);
    delete props.className;

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
      <div {...props} className={uiClassCore}>
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
