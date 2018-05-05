/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  getPropTypesA11y,
  getCorePropDefaults,
  ROLE
} from "../../lib";
import Button from "../Button/Button.js";
import "./ButtonBar.css";

class ButtonBar extends CoreComponent {
  static propTypes = getPropTypesA11y();
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.BUTTONBAR,
    id: "buttonbar_id",
    dropdown: false
  });

  static Button = Button;

  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
  }

  dummyClick = e => {
    e.preventDefault();
  };

  handleOnClick = e => {
    e.preventDefault();
  };

  handleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const { itemdex } = e.currentTarget.attributes;
    const activeItem = itemdex.value;
    if (activeItem === this.state.activeItem) {
      this.setState({ activeItem: "" });
    } else {
      this.setState({ activeItem });
    }
  };

  renderChild = (child, props) => {
    const role = child.props.uirole || ROLE.BUTTON;
    const activeItem = `button-bar-item_${this.maxIndex}`;
    let ref = c => {
      this[activeItem] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    this.maxIndex = this.maxIndex + 1;
    return cloneElement(child, {
      ...props,
      ref,
      itemdex: activeItem,
      active: activeItem === this.state.activeItem,
      uiclass: this.childPrefix(role),
      onClick: this.chainFunction(child.props.onClick, this.handleOnClick)
    });
  };

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

export default ButtonBar;
