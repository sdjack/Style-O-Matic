/**
 * @memberof components
 * @namespace Dropdown
 * @author Steven Jackson
* @scss ../../scss/components/Dropdown
 * @example <Dropdown>
   <Dropdown.Toggle>Example Dropdown</Dropdown.Toggle>
   <Dropdown.Content>
     <span>Option 1</span>
     <span>Option 2</span>
     <span>Option 3</span>
     <span>Option 4</span>
     <span>Option 5</span>
     <span>Option 6</span>
   </Dropdown.Content>
 </Dropdown>
 */
import React, { cloneElement } from "react";
import activeElement from "dom-helpers/activeElement";
import contains from "dom-helpers/query/contains";
import keycode from "keycode";
import {
  CoreComponent,
  isModifiedEvent,
  isLeftClickEvent,
  getValidProps,
  setPropTypesA11y,
  setPropDefaultsAutoId,
  ROLE
} from "../../lib";
import DropdownToggle from "./DropdownToggle.js";
import DropdownList from "./DropdownList.js";
import "./Dropdown.css";

class Dropdown extends CoreComponent {
  static defaultProps = setPropDefaultsAutoId({
    renderAs: "div",
    uirole: ROLE.DROPDOWN
  });

  static Toggle = DropdownToggle;
  static List = DropdownList;

  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false
    };
    this.focusInDropdown = false;
    this.lastOpenEventType = null;
  }

  componentDidMount() {
    this.focusNextOnOpen();
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextState.active && this.state.active && this.node) {
      this.focusInDropdown = contains(this.node, activeElement(document));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { active } = this.state;
    const prevOpen = prevState.active;
    if (active && !prevOpen) {
      this.focusNextOnOpen();
    }
    if (!active && prevOpen) {
      if (this.focusInDropdown) {
        this.focusInDropdown = false;
        this.focus();
      }
    }
  }

  WillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  }

  WillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  }

  handleOnToggle = e => {
    if (isModifiedEvent(e) || !isLeftClickEvent(e) || !this.state.active) {
      return;
    }
    if (this.node && !this.node.contains(e.target)) {
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
    if (!this.node || !this.node.focusNext) {
      return;
    }
    if (
      this.lastOpenEventType === "keydown" ||
      this.props.role === "dropdown-item"
    ) {
      this.node.focusNext();
    }
  };

  handleClick = event => {
    if (this.props.disabled) {
      return;
    }
    this.toggleOpen(event, { source: "click" });
  };

  handleClose = (event, eventDetails) => {
    if (!this.state.active) {
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
        if (!this.state.active) {
          this.toggleOpen(event, { source: "keydown" });
        } else if (this.node.focusNext) {
          this.node.focusNext();
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
    const active = !this.state.active;
    if (active) {
      this.lastOpenEventType = eventDetails.source;
    } else if (this.props.onClose) {
      this.props.onClose(event);
    }
    this.setState({ active });
    if (this.props.onToggle) {
      this.props.onToggle(active, event, eventDetails);
    }
  };

  renderToggle = (child, { id, ...props }) => {
    let ref = c => {
      this.toggle = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      id: `toggle_${id}`,
      onClick: this.chainFunction(child.props.onClick, this.handleClick),
      onKeyDown: this.chainFunction(child.props.onKeyDown, this.handleKeyDown)
    });
  };

  renderContent = (child, { id, onSelect, ...props }) => {
    let ref = c => {
      this.content = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      id: `list_${id}`,
      uiclass: this.childPrefix("list"),
      onMouseDown(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      },
      onSelect: this.chainFunction(
        child.props.onSelect,
        onSelect,
        (key, event) => this.handleClose(event, { source: "select" })
      )
    });
  };

  render() {
    const {
      renderAs: Component,
      id,
      uiclass,
      disabled,
      children,
      rootcloseevent,
      onSelect,
      props
    } = getValidProps(this.props, this.state);

    const { active } = this.state;

    const listChildren = [];

    return (
      <Component
        {...props}
        data-no-hover="true"
        ref={this.onSetRef}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.TOGGLE:
                return this.renderToggle(child, {
                  id,
                  disabled,
                  active,
                  uiclass
                });
              case ROLE.BUTTON:
                return this.renderToggle(child, {
                  id,
                  disabled,
                  active
                });
              case ROLE.LIST:
                return this.renderContent(child, {
                  id,
                  onSelect,
                  rootcloseevent,
                  active,
                  uiclass
                });
              default:
                return child;
            }
          }
          return child;
        })}
      </Component>
    );
  }
}

export default Dropdown;
