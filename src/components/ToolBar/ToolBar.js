/**
 * @memberof components
 * @namespace ToolBar
 * @author Steven Jackson
* @scss ../../scss/components/ToolBar
 * @example <ToolBar raised>
   <ToolBar.Content contentAlign="left">
     <ToolBar.Title>TITLE</ToolBar.Title>
     <ToolBar.Button>Button</ToolBar.Button>
     <ToolBar.Button>Button</ToolBar.Button>
   </ToolBar.Content>
   <ToolBar.Content contentAlign="right">
     <ToolBar.Text>Raised</ToolBar.Text>
     <ToolBar.Text>Example</ToolBar.Text>
   </ToolBar.Content>
 </ToolBar>
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropTypes,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import ToolBarContent from "./ToolBarContent.js";
import ToolBarItem from "./ToolBarItem.js";
import ToolBarTitle from "./ToolBarTitle.js";
import ToolBarText from "./ToolBarText.js";
import ToolBarIcon from "./ToolBarIcon.js";
import Button from "../Button/Button.js";
import "./ToolBar.css";

class ToolBar extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOOLBAR
  });

  static Content = ToolBarContent;
  static Item = ToolBarItem;
  static Icon = ToolBarIcon;
  static Title = ToolBarTitle;
  static Button = Button;
  static Text = ToolBarText;

  render() {
    const { renderAs: Component, children, props, inherited } = getValidProps(
      this.props
    );

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            return this.renderChild(child, inherited);
          }
          return child;
        })}
      </Component>
    );
  }
}

export default ToolBar;
