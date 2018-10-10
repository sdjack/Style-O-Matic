import React from "react";
import cx from "classnames";
import {
  CoreComponent,
  getValidProps,
  setCorePropTypes,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardIcon from "./CardIcon";
import "./Card.css";

class Card extends CoreComponent {
  static propTypes = setCorePropTypes({
    styled: "bool",
    round: "bool"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CARD,
    align: "left",
    styled: false,
    round: false
  });

  static Header = CardHeader;
  static Content = CardContent;
  static Footer = CardFooter;
  static Icon = CardIcon;

  render() {
    const {
      renderAs: Component,
      className,
      align,
      styled,
      round,
      children,
      props,
      inherited
    } = getValidProps(this.props);
    const classes = {
      [`ui-card-align-${align}`]: align,
      "ui-card-styled": styled,
      "ui-card-round": round
    };

    const uiClassCore = cx(className, classes);
    delete props.className;
    return (
      <Component {...props} className={uiClassCore}>
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

export default Card;
