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
  uID,
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
import Dropdown from "../Dropdown/Dropdown.js";
import "./Button.css";

class Button extends React.Component {
  static propTypes = getCorePropTypes(
    {
      dropdown: "bool"
    },
    null,
    true
  );

  static defaultProps = getCorePropDefaults({
    componentClass: "button",
    uirole: "button",
    id: `button_${uID()}`,
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
    if (this.props.dropdown) {
      const { className, style, id, label, children } = this.props;
      return (
        <Dropdown
          uiclass="ui-dropdown"
          style={style}
          id={id || "dropdown-button"}
        >
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
