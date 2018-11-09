/**
 * @memberof components
 * @namespace Nav
 * @author Steven Jackson
* @scss ../../scss/components/Nav
 * @example <Nav>
             Example Content
           </Nav>
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropTypes,
  setCorePropDefaults,
  getValidProps,
  UIGlobals,
  ROLE
} from "../../lib";
import NavItem from "./NavItem.js";
import NavFolder from "./NavFolder.js";
import NavWidget from "./NavWidget.js";
import "./Nav.css";

class Nav extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "nav",
    uirole: ROLE.NAV,
    orientation: "horizontal"
  });

  static Item = NavItem;
  static Folder = NavFolder;
  static Widget = NavWidget;

  constructor(props, ...args) {
    super(props, ...args);
    const isMobile = window.innerWidth <= 1024;
    const collapsed = isMobile ? true : props.collapsed;
    this.state = {
      orientation: props.orientation,
      collapsed,
      isMobile
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.detectIfMobile);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.detectIfMobile);
  }

  handleOnClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  detectIfMobile = () => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  };

  renderChild = (child, props) => {
    const role = child.props.uirole || ROLE.ITEM;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: this.childPrefix(role)
    });
  };

  renderCore = () => {
    const {
      renderAs: Component,
      canMinimize,
      children,
      props,
      inherited
    } = getValidProps(this.props, this.state);
    const { collapsed, isMobile } = this.state;
    return (
      <Component {...props}>
        {isMobile ? (
          <div className="ui-nav-toggle">
            <button
              className="ui-nav-toggle-button"
              onClick={this.handleOnClick}
            >
              <i className="ui-icon-menu" />
            </button>
          </div>
        ) : null}
        <ul className="ui-nav-list">
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined"
            ) {
              return this.renderChild(child, {
                collapsed,
                ...inherited
              });
            }
            return child;
          })}
        </ul>
      </Component>
    );
  };
}

export default Nav;
