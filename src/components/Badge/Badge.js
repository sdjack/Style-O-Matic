import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import BadgeContent from "./BadgeContent";
import BadgeIcon from "./BadgeIcon";
import "./Badge.css";

class Badge extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    uirole: ROLE.BADGE
  });

  static Content = BadgeContent;
  static Icon = BadgeIcon;

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

export default Badge;
