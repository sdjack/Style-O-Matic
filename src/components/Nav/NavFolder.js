/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";

class NavFolder extends React.Component {
  static propTypes = getCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = getCorePropDefaults({
    uirole: Roles.FOLDER,
    text: "",
    minimized: false
  });

  state = {
    expanded: ""
  };

  toggleExpansion = e => {
    e.preventDefault();
    if (!this.props.minimized) {
      this.setState({ expanded: !this.state.expanded });
    }
  };

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.ITEM;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on nav components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role),
      onClick: createChainedFunction(child.props.onClick, this.handleOnClick)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      to,
      path,
      text,
      icon,
      minimized,
      children,
      props
    } = getValidProps(this.props);

    const { expanded } = this.state;

    const classes = {
      expanded,
      minimized,
      active: path.indexOf(to) !== -1
    };

    const caretClass =
      !minimized && expanded ? "fa fa-caret-down" : "fa fa-caret-right";

    return (
      <div className="ui-nav-flyout-wrapper">
        <a className="ui-nav-item ui-tooltip" href={to} label={text}>
          <i className={`ui-nav-item-icon ${icon}`} />
          <span className="ui-nav-item-info">{text}</span>
          <span
            className={`ui-nav-item-caret ${caretClass}`}
            role="presentation"
            onKeyDown={this.toggleExpansion}
            onClick={this.toggleExpansion}
          />
        </a>
        <Component {...props} className={classNames(className, classes)}>
          <div className="ui-nav-folder-title">{text}</div>
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined"
            ) {
              return this.renderChild(child, { uiclass });
            }
            return child;
          })}
        </Component>
      </div>
    );
  }
}

export default NavFolder;
