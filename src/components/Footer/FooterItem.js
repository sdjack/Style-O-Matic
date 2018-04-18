/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class FooterItem extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.ITEM,
    text: ""
  });

  render() {
    const {
      renderAs,
      uiclass,
      className,
      to,
      path,
      text,
      icon,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      active: path.indexOf(to) !== -1
    };

    if (icon || text) {
      const Component = "a";
      return (
        <Component
          {...props}
          className={classNames(className, classes)}
          href={to}
          label={text}
        >
          <i className={`${uiclass}-icon ${icon}`} />
          <span className={`${uiclass}-info`}>{text}</span>
          {children}
        </Component>
      );
    }
    const Component = renderAs;

    return (
      <Component {...props} className={classNames(className, classes)}>
        {children}
      </Component>
    );
  }
}

export default FooterItem;
