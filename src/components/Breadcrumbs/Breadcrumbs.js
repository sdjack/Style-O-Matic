/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */
import _ from "lodash";
import React from "react";
import { CoreComponent, getValidProps, getCorePropDefaults } from "../../lib";
import "./Breadcrumbs.css";

class Breadcrumbs extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    uirole: "breadcrumbs"
  });

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
    if (!_.isNil(path)) {
      const crumbs = path.match(/(\/\w+)\/([^/A-Za-z]+)/g);
      if (crumbs && crumbs.length > 0) {
        let directPath = "";
        for (let i = 0; i < crumbs.length; i += 1) {
          const bc = crumbs[i];
          const label = !_.isNil(this.props.pathnames[bc])
            ? this.props.pathnames[bc]
            : bc.replace(/\W/g, " ");
          if (i > 0) {
            rows.push(
              <span
                key={`breadcrumb-divider_${this.GUID}`}
                className="breadcrumb-divider"
              >
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
    const { renderAs: Component, path, children, ...props } = getValidProps(
      this.props
    );

    return (
      <Component {...props}>
        {this.renderItems(path)}
        {children}
      </Component>
    );
  }
}

export default Breadcrumbs;
