/**
 * @memberof components
 * @namespace Drawer
 * @author Steven Jackson
* @scss ../../scss/components/Drawer
 * @example <Drawer>
             Example Content
           </Drawer>
 */
import React from "react";
import _ from "lodash";
import classNames from "classnames";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  UIGlobals,
  ROLE
} from "../../lib";
import Content from "../Content/Content.js";
import "./Drawer.css";

class Drawer extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    uirole: ROLE.DRAWER,
    collapsed: true
  });

  render() {
    const {
      renderAs: Component,
      uiclass,
      color,
      colorStyle,
      uuid,
      fixed,
      disabled,
      collapsed,
      children,
      props
    } = getValidProps(this.props);
    return (
      <Component {...props}>
        <Content>
          {React.Children.map(children, child =>
            this.renderChild(child, {
              disabled,
              uiclass,
              collapsed
            })
          )}
        </Content>
      </Component>
    );
  }
}

export default Drawer;
