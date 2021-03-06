/**
 * @memberof components
 * @namespace Card
 * @author Steven Jackson
* @scss ../../scss/components/Card
 * @example <Card align="center" styled round>
   <Card.Header>
     <Card.Icon icon="star" />
     Card Header
     <Card.Icon icon="star" />
   </Card.Header>
   <Card.Content>Card Content</Card.Content>
   <Card.Footer>
     <Card.Icon icon="star" />
     Card Footer
     <Card.Icon icon="star" />
   </Card.Footer>
 </Card>
 */
import React from "react";
import cx from "classnames";
import {
  CoreComponent,
  getValidProps,
  setCorePropTypes,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import "./Card.css";

class Card extends CoreComponent {
  static propTypes = setCorePropTypes({
    styled: "bool",
    round: "bool"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.CARD,
    styled: false,
    round: false
  });

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
