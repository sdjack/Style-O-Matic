/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import isRequiredForA11y from "prop-types-extra/lib/isRequiredForA11y";
import warning from "warning";
import {
  setCoreClass,
  isLeftClickEvent,
  isModifiedEvent,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";
// import "./Button.css";

class Button extends React.Component {
  static propTypes = getCorePropTypes({
    id: isRequiredForA11y(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  });

  static defaultProps = getCorePropDefaults({
    componentClass: "button",
    uirole: "button"
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

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.DEFAULT;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on dropdown components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role),
      onClick: createChainedFunction(child.props.onClick, () => {}),
      onKeyDown: createChainedFunction(child.props.onKeyDown, () => {})
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      disabled,
      children,
      props
    } = getValidProps(this.props);

    const ActiveComponent = this.props.href ? "a" : Component;

    return (
      <ActiveComponent {...props} onClick={this.handleClick}>
        {React.Children.map(children, child => {
          if (typeof child.props !== "undefined") {
            return this.renderChild(child, { uiclass, disabled });
          }
          return child;
        })}
      </ActiveComponent>
    );
  }
}

export default setCoreClass("button", Button);
