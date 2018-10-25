/**
 * @namespace Style-O-Matic UI
 * @name Tabs
 * @author Steven Jackson
 * @external scssdir
 * @see ../../scss/components/Tabs
 * @example <Tabs panel>
   <Tabs.Tab>Tab 1</Tabs.Tab>
   <Tabs.Tab>Tab 2</Tabs.Tab>
   <Tabs.Content>Tab 1 Content</Tabs.Content>
   <Tabs.Content>Tab 2 Content</Tabs.Content>
   <Tabs.Tab>Tab 3</Tabs.Tab>
   <Tabs.Tab>Tab 4</Tabs.Tab>
   <Tabs.Content>Tab 3 Content</Tabs.Content>
   <Tabs.Content>Tab 4 Content</Tabs.Content>
 </Tabs>
 */
import React, { cloneElement } from "react";
import classNames from "classnames";
import {
  CoreComponent,
  setPropDefaultsAutoId,
  setPropTypesA11y,
  getValidProps,
  ROLE
} from "../../lib";
import TabContent from "./TabContent.js";
import TabToggle from "./TabToggle.js";
import "./Tabs.css";

class Tabs extends CoreComponent {
  static propTypes = setPropTypesA11y({
    smart: "bool",
    onSwitch: "func"
  });

  static defaultProps = setPropDefaultsAutoId({
    renderAs: "div",
    uirole: ROLE.TABS,
    smart: false,
    onSwitch: null
  });

  static Tab = TabToggle;
  static Content = TabContent;

  constructor(props, context) {
    super(props, context);
    this.state = { activeTab: `${props.id}_tab_1` };
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
    const id = `${parentId}_tab_${index}`;
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
    let id = `${parentId}_tab_${index}`;
    const activeClass =
      this.state.activeTab === id ? "content active" : "content";
    id += "_content";
    return cloneElement(child, {
      ...props,
      ref: child.ref,
      id,
      uiclass: this.childPrefix(activeClass)
    });
  };

  renderCore = () => {
    const {
      renderAs: Component,
      id,
      uiclass,
      disabled,
      smart,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    let tabCount = 0;
    let contentCount = 0;

    return (
      <Component {...props}>
        <div className="ui-tabs-tab-wrapper">
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined" &&
              child.props.uirole === ROLE.TABTOGGLE
            ) {
              tabCount += 1;
              return this.renderToggle(child, tabCount, id, inherited);
            }
            return null;
          })}
        </div>
        <div className="ui-tabs-content-wrapper">
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined" &&
              child.props.uirole === ROLE.TABCONTENT
            ) {
              contentCount += 1;
              return this.renderContent(child, contentCount, id, inherited);
            }
            return null;
          })}
        </div>
      </Component>
    );
  };
}

export default Tabs;
