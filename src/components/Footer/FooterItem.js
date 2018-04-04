/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import classNames from "classnames";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";

class FooterItem extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: Roles.ITEM,
    text: ""
  });

  render() {
    const {
      componentClass,
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
    const Component = componentClass;

    return (
      <Component {...props} className={classNames(className, classes)}>
        {children}
      </Component>
    );
  }
}

export default FooterItem;
