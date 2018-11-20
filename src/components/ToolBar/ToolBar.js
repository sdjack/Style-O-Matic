/**
 * @memberof components
 * @namespace ToolBar
 * @author Steven Jackson
* @scss ../../scss/components/ToolBar
 * @example <ToolBar raised>
   <ToolBar.Content contentAlign="left">
     TITLE
     <Button>Button</Button>
     <Button>Button</Button>
   </ToolBar.Content>
   <ToolBar.Content contentAlign="right">
     <Text>Raised</Text>
     <Text>Example</Text>
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
import "./ToolBar.css";

class ToolBar extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOOLBAR
  });

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
