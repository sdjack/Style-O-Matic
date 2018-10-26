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
import DropdownContent from "./DropdownContent.js";
import "./Dropdown.css";

class Dropdown extends CoreComponent {
  static propTypes = setPropTypesA11y();

  static defaultProps = setPropDefaultsAutoId({
    renderAs: "div",
    uirole: ROLE.DROPDOWN
  });

  static Toggle = DropdownToggle;
  static Content = DropdownContent;

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    this.focusInDropdown = false;
    this.lastOpenEventType = null;
  }

  componentDidMount() {
    this.focusNextOnOpen();
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextState.open && this.state.open) {
      this.focusInDropdown = contains(this.content, activeElement(document));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { open } = this.state;
    const prevOpen = prevState.open;
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

  WillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  }

  WillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  }

  handleOnToggle = e => {
    if (isModifiedEvent(e) || !isLeftClickEvent(e) || !this.state.open) {
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
    if (!this.state.open) {
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
        if (!this.state.open) {
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
    const open = !this.state.open;
    if (open) {
      this.lastOpenEventType = eventDetails.source;
    } else if (this.props.onClose) {
      this.props.onClose(event);
    }
    this.setState({ open });
    if (this.props.onToggle) {
      this.props.onToggle(open, event, eventDetails);
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
      uiclass: this.childPrefix("toggle"),
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
      id: `content_${id}`,
      uiclass: this.childPrefix("content"),
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
    } = getValidProps(this.props);

    const { open } = this.state;

    return (
      <Component {...props} ref={this.onSetRef}>
        {React.Children.map(children, child => {
          switch (child.props.uirole) {
            case ROLE.TOGGLE:
              return this.renderToggle(child, {
                id,
                disabled,
                open,
                uiclass
              });
            case ROLE.BUTTON:
              return this.renderToggle(child, {
                id,
                disabled,
                open,
                uiclass: "ui-dropdown"
              });
            case ROLE.CONTENT:
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

export default Dropdown;
