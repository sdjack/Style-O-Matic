/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import activeElement from "dom-helpers/activeElement";
import contains from "dom-helpers/query/contains";
import keycode from "keycode";
import warning from "warning";
import PropTypes from "prop-types";
import isRequiredForA11y from "prop-types-extra/lib/isRequiredForA11y";
import uncontrollable from "uncontrollable";
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
import DropdownToggle from "./DropdownToggle.js";
import DropdownContent from "./DropdownContent.js";
import "./Dropdown.css";

class Dropdown extends React.Component {
  static propTypes = getCorePropTypes({
    id: isRequiredForA11y(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  });

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: "dropdown"
  });

  constructor(props, context) {
    super(props, context);
    this.focusInDropdown = false;
    this.lastOpenEventType = null;
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  }

  componentDidMount() {
    this.focusNextOnOpen();
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.open && this.props.open) {
      this.focusInDropdown = contains(this.content, activeElement(document));
    }
  }

  componentDidUpdate(prevProps) {
    const { open } = this.props;
    const prevOpen = prevProps.open;
    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }
    if (!open && prevOpen) {
      if (this.focusInDropdown) {
        this.focusInDropdown = false;
        this.focus();
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleOnToggle = e => {
    if (isModifiedEvent(e) || !isLeftClickEvent(e) || !this.props.open) {
      return;
    }
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      // console.log("handleClickOutside",e.target);
      this.handleClose(e);
    }
  };

  focus = () => {
    if (this.toggle && this.toggle.focus) {
      this.toggle.focus();
    }
  };

  focusNextOnOpen = () => {
    if (!this.content || !this.content.focusNext) {
      return;
    }
    if (
      this.lastOpenEventType === "keydown" ||
      this.props.role === "dropdown-item"
    ) {
      this.content.focusNext();
    }
  };

  handleClick = event => {
    if (this.props.disabled) {
      return;
    }
    this.toggleOpen(event, { source: "click" });
  };

  handleClose = (event, eventDetails) => {
    if (!this.props.open) {
      return;
    }
    this.toggleOpen(event, eventDetails);
  };

  handleKeyDown = event => {
    if (this.props.disabled) {
      return;
    }
    switch (event.keyCode) {
      case keycode.codes.down:
        if (!this.props.open) {
          this.toggleOpen(event, { source: "keydown" });
        } else if (this.content.focusNext) {
          this.content.focusNext();
        }
        event.preventDefault();
        break;
      case keycode.codes.esc:
        this.handleClose(event, { source: "keydown" });
        break;
      default:
    }
  };

  toggleOpen = (event, eventDetails) => {
    const open = !this.props.open;
    if (open) {
      this.lastOpenEventType = eventDetails.source;
    } else if (this.props.onClose) {
      this.props.onClose(event);
    }
    if (this.props.onToggle) {
      this.props.onToggle(open, event, eventDetails);
    }
  };

  renderToggle = (child, { id, ...props }) => {
    let ref = c => {
      this.toggle = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on dropdown components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      id: `toggle_${id}`,
      uiclass: prefix(props, "toggle"),
      onClick: createChainedFunction(child.props.onClick, this.handleClick),
      onKeyDown: createChainedFunction(
        child.props.onKeyDown,
        this.handleKeyDown
      )
    });
  };

  renderContent = (child, { id, onSelect, ...props }) => {
    let ref = c => {
      this.content = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on dropdown components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      id: `content_${id}`,
      uiclass: prefix(props, "content"),
      onMouseDown(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      },
      onSelect: createChainedFunction(
        child.props.onSelect,
        onSelect,
        (key, event) => this.handleClose(event, { source: "select" })
      )
    });
  };

  render() {
    const {
      componentClass: Component,
      id,
      uiclass,
      disabled,
      open,
      children,
      rootcloseevent,
      onSelect,
      props
    } = getValidProps(this.props);

    delete props.onToggle;
    delete props.onClose;

    return (
      <Component {...props} ref={this.setWrapperRef}>
        {React.Children.map(children, child => {
          switch (child.props.uirole) {
            case Roles.TOGGLE:
              return this.renderToggle(child, {
                id,
                disabled,
                open,
                uiclass
              });
            case Roles.CONTENT:
              return this.renderContent(child, {
                id,
                onSelect,
                rootcloseevent,
                open,
                uiclass
              });
            default:
              return child;
          }
        })}
      </Component>
    );
  }
}

setCoreClass("ui-dropdown", Dropdown);

const UncontrolledDropdown = uncontrollable(Dropdown, { open: "onToggle" });
UncontrolledDropdown.Toggle = DropdownToggle;
UncontrolledDropdown.Content = DropdownContent;

export default UncontrolledDropdown;
