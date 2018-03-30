/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import classNames from "classnames";
import {
  setCoreClass,
  isUsable,
  dataExists,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils";
import { Roles } from "../_utilities/Enum";
import Header from "../Header/Header";
import Minion from "../_common/Minion";
// import "./ToolBar.css";

class Content extends Minion {
  static defaultProps = {
    uirole: "content",
    uiclass: "",
    className: "",
    componentClass: "h2",
    children: null
  };
}

class ToolBar extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    disabled: false,
    children: null
  };

  renderHeader = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this.header = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on toolbar components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  };

  renderContent = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this.content = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on toolbar components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, "content")
    });
  };

  render() {
    const { uiclass, className, disabled, children, ...props } = this.props;
    const classes = {
      [uiclass]: true,
      disabled
    };
    return (
      <div {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          switch (child.props.uirole) {
            case Roles.HEADER:
              return this.renderHeader(child, { uiclass });
            case Roles.CONTENT:
              return this.renderContent(child, { uiclass });
            default:
              return child;
          }
        })}
      </div>
    );
  }
}

ToolBar.Header = Header;
ToolBar.Content = Content;

// export default setCoreClass('toolbar', withStyles(s)(ToolBar));
export default setCoreClass("toolbar", ToolBar);
