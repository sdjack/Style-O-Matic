import React, { cloneElement } from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  UIGlobals,
  ROLE
} from "../../lib";
import NavItem from "./NavItem.js";
import NavFolder from "./NavFolder.js";
import "./Nav.css";

class Nav extends CoreComponent {
  static propTypes = getCorePropTypes({
    defaultOpen: "bool",
    canMinimize: "bool"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "nav",
    uirole: ROLE.NAV,
    orientation: "horizontal",
    defaultOpen: true,
    canMinimize: false
  });

  static Item = NavItem;
  static Folder = NavFolder;

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      orientation: props.orientation,
      open: props.defaultOpen,
      isMobile: window.innerWidth <= 1024
    };
  }

  componentDidMount() {
    this.ensureOrientation();
    window.addEventListener("resize", this.detectIfMobile);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.detectIfMobile);
  }

  handleOnClick = () => {
    this.setState({ open: !this.state.open });
  };

  ensureOrientation = () => {
    if (this.node) {
      const { orientation } = this.state;
      const { width, height } = this.node.getBoundingClientRect();
      const {
        height: screenHeight,
        width: screenWidth
      } = UIGlobals.getScreenDimensions();
      let newOrientation = orientation;
      if (height > screenHeight / 2) {
        newOrientation = "vertical";
      } else {
        newOrientation = "horizontal";
      }
      if (newOrientation !== orientation) {
        this.setState({ orientation: newOrientation });
      }
    }
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
      uiclass: this.childPrefix(role),
      onClick: this.chainFunction(child.props.onClick, this.handleOnClick)
    });
  };

  render() {
    const {
      renderAs: Component,
      canMinimize,
      children,
      props,
      inherited
    } = getValidProps(this.props, this.state);

    const contentClass =
      !canMinimize && !this.state.open ? " ui-nav-hidden" : "";

    return (
      <Component {...props}>
        <div className="ui-nav-toggle">
          <button className="ui-nav-toggle-button" onClick={this.handleOnClick}>
            <i className="ui-icon-menu" />
          </button>
        </div>
        <div className={`ui-nav-content${contentClass}`}>
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined"
            ) {
              return this.renderChild(child, {
                ...inherited
              });
            }
            return child;
          })}
        </div>
      </Component>
    );
  }
}

export default Nav;
