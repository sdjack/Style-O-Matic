/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import {
  isModifiedEvent,
  isLeftClickEvent,
  CoreComponent,
  getPropTypesA11y,
  getPropDefaultsAutoId,
  getValidProps,
  getElementType,
  ROLE
} from "../../lib";
import Dropdown from "../Dropdown/Dropdown.js";
import "./Button.css";

class Button extends CoreComponent {
  static propTypes = getPropTypesA11y({
    dropdown: "bool"
  });

  static defaultProps = getPropDefaultsAutoId({
    renderAs: "button",
    uirole: ROLE.BUTTON,
    dropdown: false
  });

  handleClick = e => {
    if (this.props.disabled) {
      return;
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    if (isModifiedEvent(e) || !isLeftClickEvent(e)) {
      return;
    }
    if (e.defaultPrevented === true) {
      return;
    }
    e.preventDefault();
  };

  handleKeyDown = e => {
    if (this.props.disabled) {
      e.preventDefault();
    }
  };

  render() {
    if (this.props.dropdown) {
      const { className, style, id, label, children } = this.props;
      return (
        <Dropdown style={style} id={id || "dropdown-button"}>
          <Dropdown.Toggle
            className={className}
            id={id || "dropdown-button-toggle"}
          >
            {label}
          </Dropdown.Toggle>
          <Dropdown.Content>{children}</Dropdown.Content>
        </Dropdown>
      );
    }

    const { children, to, props, inherited } = getValidProps(this.props);

    const ElementType = getElementType(Button, this.props);
    if (to) {
      props.href = props.href || to;
      props.target = props.target || "_blank";
      props.onClick = null;
    } else {
      props.onClick = this.handleClick;
    }

    return (
      <ElementType {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            return this.renderChild(child, {
              ...inherited,
              onClick: this.chainFunction(child.props.onClick, () => {}),
              onKeyDown: this.chainFunction(child.props.onKeyDown, () => {})
            });
          }
          return child;
        })}
      </ElementType>
    );
  }
}

export default Button;
