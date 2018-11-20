/**
 * @memberof components
 * @namespace Badge
 * @author Steven Jackson
* @scss ../../scss/components/Badge
 * @example <Badge color="black">
   <Badge.Icon icon="star" />
 </Badge>,
 <Badge color="red">
   <Badge.Icon icon="spider" />
 </Badge>,
 <Badge color="orange">
   <Badge.Icon icon="bat" />
 </Badge>,
 <Badge color="yellow">
   <Badge.Icon icon="ghost" />
 </Badge>,
 <Badge color="green">
   <Badge.Icon icon="skull" />
 </Badge>,
 <Badge color="blue">
   <Badge.Icon icon="doot" />
 </Badge>,
 <Badge color="indigo">
   <Badge.Icon icon="robot" />
 </Badge>,
 <Badge color="violet">
   <Badge.Icon icon="sheep" />
 </Badge>
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import "./Badge.css";

class Badge extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    uirole: ROLE.BADGE,
    role: ROLE.PRESENTATION
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

export default Badge;
