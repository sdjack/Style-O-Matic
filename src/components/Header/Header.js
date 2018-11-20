/**
 * @memberof components
 * @namespace Header
 * @author Steven Jackson
* @scss ../../scss/components/Header
 * @example <Header>
             Example Title
           </Header>
 */
import React, { cloneElement } from "react";
import cx from "classnames";
import {
  CoreComponent,
  setCorePropDefaults,
  setCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";
import HeaderTitle from "./HeaderTitle.js";
import HeaderSubtitle from "./HeaderSubtitle.js";
import "./Header.css";

class Header extends CoreComponent {
  static propTypes = setCorePropTypes({
    display: ["xxxl", "xxl", "xl", "l", "m"]
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "header",
    uirole: ROLE.HEADER,
    display: null
  });

  static Title = HeaderTitle;
  static Subtitle = HeaderSubtitle;

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
      className,
      display,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    let titleElement = "h6";
    let subtitleElement = "small";

    switch (display) {
      case "xxxl":
        titleElement = "h1";
        subtitleElement = "h4";
        break;
      case "xxl":
        titleElement = "h2";
        subtitleElement = "h4";
        break;
      case "xl":
        titleElement = "h3";
        subtitleElement = "h5";
        break;
      case "l":
        titleElement = "h4";
        subtitleElement = "h6";
        break;
      case "m":
        titleElement = "h5";
        subtitleElement = "small";
        break;
      default:
        titleElement = "h6";
        subtitleElement = "small";
        break;
    }
    return (
      <Component {...props}>
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
              case ROLE.TITLE:
                return this.renderChild(child, {
                  ...inherited,
                  renderAs: titleElement
                });
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

export default Header;
