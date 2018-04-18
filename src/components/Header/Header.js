/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults,
  ROLE
} from "../../lib";
import HeaderContent from "./HeaderContent.js";
import HeaderDrawer from "./HeaderDrawer.js";
import HeaderItem from "./HeaderItem.js";
import HeaderTitle from "./HeaderTitle.js";
import HeaderText from "./HeaderText.js";
import Button from "../Button/Button.js";
import "./Header.css";

class Header extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "header",
    uirole: "header"
  });

  static Content = HeaderContent;
  static Drawer = HeaderDrawer;
  static Item = HeaderItem;
  static Title = HeaderTitle;
  static Button = Button;
  static Text = HeaderText;

  render() {
    const {
      renderAs: Component,
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
                case ROLE.CONTENT:
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
              case ROLE.CONTENT || ROLE.DRAWER:
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

export default Header;
