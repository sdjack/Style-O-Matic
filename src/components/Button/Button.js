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
} from "../_utilities/CoreUtils.js";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";
import "./Button.css";

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
      componentClass,
      uiclass,
      disabled,
      children,
      to,
      props
    } = getValidProps(this.props);

    const Component = to ? "a" : componentClass;
    if (to) {
      props.href = to;
      props.target = "_blank";
      props.onClick = null;
    } else {
      props.onClick = this.handleClick;
    }
    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (typeof child.props !== "undefined") {
            return this.renderChild(child, { uiclass, disabled });
          }
          return child;
        })}
      </Component>
    );
  }
}

export default setCoreClass("ui-button", Button);
