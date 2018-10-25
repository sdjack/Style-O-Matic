/**
 * @namespace Style-O-Matic UI
 * @name Main
 * @author Steven Jackson
 * @external scssdir
 * @see ../../scss/components/Main
 * @example <Main>
             Example Content
           </Main>
 */
import React, { cloneElement } from "react";
import cx from "classnames";
import {
  CoreComponent,
  setCorePropTypes,
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
  static propTypes = setCorePropTypes({
    header: "bool",
    footer: "bool"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "main",
    uirole: ROLE.MAIN,
    fixed: false,
    header: false,
    footer: false
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
      header,
      footer,
      uiclass,
      children,
      uuid,
      props
    } = getValidProps(this.props);

    const classes = {
      "with-header": header && !footer,
      "with-footer": !header && footer,
      "with-header-and-footer": header && footer
    };

    const uiClassCore = cx(className, classes);
    delete props.className;

    return (
      <Component className={uiClassCore} {...props}>
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
