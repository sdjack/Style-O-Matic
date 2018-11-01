/**
 * @memberof components
 * @namespace Main
 * @author Steven Jackson
* @scss ../../scss/components/Main
 * @example <Main>
             Example Content
           </Main>
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import Drawer from "../Drawer/Drawer.js";
import MainContent from "./MainContent.js";
import Loading from "../Loading/Loading.js";
import "./Main.css";

class MainDrawer extends Drawer {
  static defaultProps = {
    renderAs: "div",
    uirole: ROLE.DRAWER,
    attach: "left"
  };
}

class Main extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.MAIN
  });

  static Drawer = MainDrawer;
  static Content = MainContent;

  renderChild = (child, props) => {
    const role = child.props.uirole;
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

  renderCore = () => {
    const {
      renderAs: Component,
      className,
      uiclass,
      children,
      uuid,
      props
    } = getValidProps(this.props);

    return (
      <Component {...props}>
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
      </Component>
    );
  };
}

export default Main;
