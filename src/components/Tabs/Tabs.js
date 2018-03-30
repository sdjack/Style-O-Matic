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
import {
  setCoreClass,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils";
import { Roles } from "../_utilities/Enum";
import Button from "../Button/Button";
import Minion from "../_common/Minion";
// import "./Tabs.css";

class Content extends Minion {
  static defaultProps = {
    uirole: "content",
    uiclass: "",
    className: "",
    componentClass: "h2",
    children: null
  };
}

class Tabs extends React.Component {
  static propTypes = {
    id: isRequiredForA11y(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    uiclass: PropTypes.string,
    uirole: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    componentClass: elementType,
    disabled: PropTypes.bool,
    automatic: PropTypes.bool,
    smart: PropTypes.bool,
    onSwitch: PropTypes.func
  };

  static defaultProps = {
    componentClass: "div",
    uirole: "tabs",
    uiclass: null,
    className: null,
    children: null,
    disabled: false,
    automatic: true,
    smart: false,
    onSwitch: null
  };

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: `tabs_${props.id}_tab_1` };
  }

  handleClick = event => {
    event.preventDefault();
    if (this.props.disabled) {
      return;
    }
    const { id } = event.target.attributes;
    this.setState({ activeTab: id.value });
    this.toggleSwitch(event);
  };

  toggleSwitch = event => {
    if (this.props.disabled) {
      return;
    }
    if (this.props.onSwitch) {
      this.props.onSwitch(event);
    }
  };

  renderToggle = (child, index, parentId, { ...props }) => {
    const id = `tabs_${parentId}_tab_${index}`;
    const activeClass = this.state.activeTab === id ? "tab active" : "tab";
    return cloneElement(child, {
      ...props,
      ref: child.ref,
      id,
      uiclass: prefix(props, activeClass),
      onClick: createChainedFunction(child.props.onClick, this.handleClick)
    });
  };

  renderContent = (child, index, parentId, { ...props }) => {
    let id = `tabs_${parentId}_tab_${index}`;
    const activeClass =
      this.state.activeTab === id ? "tab-content active" : "tab-content";
    id += "_content";
    return cloneElement(child, {
      ...props,
      ref: child.ref,
      id,
      uiclass: prefix(props, activeClass)
    });
  };

  render() {
    const {
      componentClass: Component,
      id,
      uiclass,
      className,
      disabled,
      smart,
      automatic,
      children,
      ...props
    } = this.props;

    delete props.uirole;
    delete props.onSwitch;
    delete props.smart;

    const classes = {
      [uiclass]: true,
      disabled
    };

    const preSorted = { tabs: [], content: [] };

    if (automatic) {
      React.Children.map(children, child => {
        switch (child.props.uirole) {
          case Roles.BUTTON: {
            const tindex = preSorted.tabs.length + 1;
            preSorted.tabs.push(
              this.renderToggle(child, tindex, id, { disabled, uiclass })
            );
            break;
          }
          case Roles.CONTENT: {
            const cindex = preSorted.content.length + 1;
            preSorted.content.push(
              this.renderContent(child, cindex, id, { disabled, uiclass })
            );
            break;
          }
          default:
            break;
        }
      });
      const columns = preSorted.tabs.length;

      return (
        <Component
          id={`tabs_${id}`}
          {...props}
          className={classNames(className, classes)}
        >
          <div
            className={classNames("tabs-container", {
              smart: smart && columns < 2
            })}
          >
            {preSorted.tabs}
          </div>
          {preSorted.content}
        </Component>
      );
    }
    return (
      <Component
        id={`tabs_${id}`}
        {...props}
        className={classNames(className, classes)}
      >
        {React.Children.map(children, child => {
          switch (child.props.uirole) {
            case Roles.BUTTON: {
              const tindex = preSorted.tabs.length + 1;
              return this.renderToggle(child, tindex, id, {
                disabled,
                uiclass
              });
            }
            case Roles.CONTENT: {
              const cindex = preSorted.content.length + 1;
              return this.renderContent(child, cindex, id, {
                disabled,
                uiclass
              });
            }
            default:
              return child;
          }
        })}
      </Component>
    );
  }
}

Tabs.Tab = Button;
Tabs.Content = Content;

export default setCoreClass("tabs", Tabs);
