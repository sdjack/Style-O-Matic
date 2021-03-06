/**
 * @memberof components
 * @namespace Breadcrumbs
 * @author Steven Jackson
* @scss ../../scss/components/Breadcrumbs
 * @example <Breadcrumbs path="/demo/page1/page2/page3/page4" />
 */
import _ from "lodash";
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  setCorePropTypes,
  ROLE
} from "../../lib";
import "./Breadcrumbs.css";

class Breadcrumbs extends CoreComponent {
  static propTypes = setCorePropTypes({
    pathnames: "array"
  });

  static defaultProps = setCorePropDefaults({
    uirole: ROLE.BREADCRUMBS,
    pathnames: []
  });

  renderItem = (target, name, index) => {
    // console.log(target);
    if (typeof target === "string") {
      return (
        <a
          className="ui-breadcrumb"
          href={target}
          key={`breadcrumb-link_${index}`}
        >
          {name}
        </a>
      );
    }
    return null;
  };

  renderItems = path => {
    const rows = [];
    if (!_.isNil(path)) {
      const { pathnames } = this.props;
      const crumbs = path.match(/(\/\w+)/g);
      if (crumbs && crumbs.length > 0) {
        let directPath = "";
        for (let i = 0; i < crumbs.length; i += 1) {
          const bc = crumbs[i];
          const label = !_.isNil(pathnames[bc])
            ? pathnames[bc]
            : bc.replace(/\W/g, " ");
          if (i > 0) {
            rows.push(
              <span
                key={`breadcrumb-divider_${this.props.uuid}_${i}`}
                className="ui-breadcrumb-divider"
              >
                &nbsp;/&nbsp;
              </span>
            );
          }
          directPath += bc;
          rows.push(this.renderItem(directPath, label, i));
        }
      } else {
        const label = pathnames[path];
        if (typeof label !== "undefined" && typeof path !== "undefined") {
          rows.push(this.renderItem(path, label, 1));
        } else {
          rows.push(this.renderItem("/", "Home", 1));
        }
      }
    }
    return rows;
  };

  render() {
    const { renderAs: Component, path, children, props } = getValidProps(
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
