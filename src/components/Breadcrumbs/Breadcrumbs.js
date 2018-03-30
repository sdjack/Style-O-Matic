/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import classNames from "classnames";
import { setCoreClass, isUsable, uID } from "../_utilities/CoreUtils";
import "./Breadcrumbs.css";

class Breadcrumbs extends React.Component {
  static propTypes = {
    componentClass: elementType,
    uirole: PropTypes.string,
    uiclass: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    path: PropTypes.string,
    pathnames: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    uirole: "group",
    uiclass: "group",
    className: null,
    componentClass: "div",
    children: null,
    path: "",
    pathnames: []
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = (target, name) => {
    // console.log(target);
    if (typeof target === "string") {
      return (
        <a className="breadcrumb" href={target}>
          {name}
        </a>
      );
    }
    return null;
  };

  renderItems = path => {
    const rows = [];
    if (isUsable(path)) {
      const crumbs = path.match(/(\/\w+)\/([^/A-Za-z]+)/g);
      if (crumbs && crumbs.length > 0) {
        let directPath = "";
        for (let i = 0; i < crumbs.length; i += 1) {
          const bc = crumbs[i];
          const label = isUsable(this.props.pathnames[bc])
            ? this.props.pathnames[bc]
            : bc.replace(/\W/g, " ");
          if (i > 0) {
            rows.push(
              <span key={`breadcrumb-divider_${uID()}`} className="breadcrumb">
                &nbsp;/&nbsp;
              </span>
            );
          }
          directPath += bc;
          rows.push(this.renderItem(directPath, label));
        }
      } else {
        const label = this.props.pathnames[path];
        if (typeof label !== "undefined" && typeof path !== "undefined") {
          rows.push(this.renderItem(path, label));
        } else {
          rows.push(this.renderItem("/", "Home"));
        }
      }
    }
    return rows;
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      path,
      children,
      ...props
    } = this.props;

    delete props.uirole;

    const classes = {
      [uiclass]: true
    };

    return (
      <Component {...props} className={classNames(className, classes)}>
        {this.renderItems(path)}
        {children}
      </Component>
    );
  }
}

export default setCoreClass("ui-breadcrumbs", Breadcrumbs);
