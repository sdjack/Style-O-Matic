/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getPropTypesA11y,
  getValidProps,
  ROLE
} from "../../lib";
import TabContent from "./TabContent.js";
import TabToggle from "./TabToggle.js";
import "./Tabs.css";

class Tabs extends CoreComponent {
  static propTypes = getPropTypesA11y({
    smart: "bool",
    onSwitch: "func"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: "tabs",
    smart: false,
    onSwitch: null
  });

  static Tab = TabToggle;
  static Content = TabContent;

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
      uiclass: this.childPrefix(activeClass),
      onClick: this.chainFunction(child.props.onClick, this.handleClick)
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
      uiclass: this.childPrefix(activeClass)
    });
  };

  render() {
    const {
      renderAs: Component,
      id,
      uiclass,
      disabled,
      smart,
      automatic,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    const preSorted = { tabs: [], content: [] };

    if (automatic) {
      React.Children.map(children, child => {
        switch (child.props.uirole) {
          case ROLE.BUTTON: {
            const tindex = preSorted.tabs.length + 1;
            preSorted.tabs.push(
              this.renderToggle(child, tindex, id, inherited)
            );
            break;
          }
          case ROLE.CONTENT: {
            const cindex = preSorted.content.length + 1;
            preSorted.content.push(
              this.renderContent(child, cindex, id, inherited)
            );
            break;
          }
          default:
            break;
        }
      });
      const columns = preSorted.tabs.length;

      return (
        <Component id={`tabs_${id}`} {...props}>
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
      <Component id={`tabs_${id}`} {...props}>
        {React.Children.map(children, child => {
          switch (child.props.uirole) {
            case ROLE.BUTTON: {
              const tindex = preSorted.tabs.length + 1;
              return this.renderToggle(child, tindex, id, inherited);
            }
            case ROLE.CONTENT: {
              const cindex = preSorted.content.length + 1;
              return this.renderContent(child, cindex, id, inherited);
            }
            default:
              return child;
          }
        })}
      </Component>
    );
  }
}

export default Tabs;
