/**
 * @memberof components
 * @namespace Main
 * @author Steven Jackson
* @scss ../../scss/components/Main
 * @example <Main>
             Example Content
           </Main>
 */
import React from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Main.css";

class Main extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "main",
    uirole: ROLE.MAIN
  });

  renderCore = () => {
    const { renderAs: Component, children, props } = getValidProps(this.props);
    return <Component {...props}>{children}</Component>;
  };
}

export default Main;
