import React, { cloneElement } from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class NavFolder extends CoreComponent {
  static propTypes = getCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = getCorePropDefaults({
    uirole: ROLE.FOLDER,
    text: "",
    minimized: false
  });

  constructor(props) {
    super(props);
    this.useParentNode = true;
    this.state = {
      expanded: ""
    };
  }

  toggleExpansion = e => {
    e.preventDefault();
    if (!this.props.minimized) {
      this.setState({ expanded: !this.state.expanded });
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
      uiclass,
      className,
      to,
      path,
      text,
      icon,
      minimized,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    const { expanded } = this.state;

    const classes = {
      expanded,
      minimized,
      active: to && path.indexOf(to) !== -1
    };

    const offsetStyle = {};

    if (this.node) {
      const {
        bottom: screenBottom,
        height: screenHeight
      } = document.body.getBoundingClientRect();
      const { y, height, bottom } = this.node.getBoundingClientRect();
      if (y > screenHeight / 2) {
        offsetStyle.bottom = `${screenHeight - bottom + height / 2}px`;
      }
    }

    const caretClass =
      !minimized && expanded ? "fa fa-caret-down" : "fa fa-caret-right";

    return (
      <div className="ui-nav-flyout-wrapper" ref={this.onSetRef}>
        <a className="ui-nav-item" href={to} label={text}>
          <i className={`ui-nav-item-icon ${icon}`} />
          <span className="ui-nav-item-info">{text}</span>
          <span
            className={`ui-nav-item-caret ${caretClass}`}
            role="presentation"
            onKeyDown={this.toggleExpansion}
            onClick={this.toggleExpansion}
          />
        </a>
        <Component
          {...props}
          className={classNames(className, classes)}
          style={offsetStyle}
        >
          <div className="ui-nav-folder-title">{text}</div>
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined"
            ) {
              return this.renderChild(child, inherited);
            }
            return child;
          })}
        </Component>
      </div>
    );
  }
}

export default NavFolder;
