/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import isRequiredForA11y from "prop-types-extra/lib/isRequiredForA11y";
import classNames from "classnames";
import warning from "warning";
import {
  // uID,
  setCoreClass,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils.js";
import { Roles } from "../_utilities/Enum.js";
import { HexColor } from "../_utilities/ThemeUtils.js";
import Button from "../Button/Button.js";
import "./ButtonBar.css";

class ButtonBar extends React.Component {
  static propTypes = {
    id: isRequiredForA11y(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    componentClass: elementType,
    uiclass: PropTypes.string,
    uirole: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    id: "button-bar_0",
    componentClass: "button",
    uiclass: "button",
    uirole: "button",
    className: null,
    children: null,
    disabled: false
  };

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
    const role = child.props.uirole;
    const activeItem = `button-bar-item_${this.maxIndex}`;
    let ref = c => {
      this[activeItem] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on button-bar components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    this.maxIndex = this.maxIndex + 1;
    return cloneElement(child, {
      ...props,
      ref,
      itemdex: activeItem,
      active: activeItem === this.state.activeItem,
      uiclass: prefix(props, role),
      onClick: createChainedFunction(child.props.onClick, this.handleOnClick)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      disabled,
      children,
      ...props
    } = this.props;

    delete props.uirole;

    const classes = {
      [uiclass]: true,
      disabled
    };

    delete props.uirole;

    return (
      <Component className={classNames(className, classes)} {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === Roles.BUTTON
          ) {
            return this.renderChild(child, { uiclass });
          }
          return child;
        })}
      </Component>
    );
  }
}

ButtonBar.Button = Button;

export default setCoreClass("ui-buttonbar", ButtonBar);
