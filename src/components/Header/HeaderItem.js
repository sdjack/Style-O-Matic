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

class HeaderItem extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "a",
    uirole: Roles.ITEM,
    text: ""
  });

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      to,
      path,
      text,
      icon,
      props
    } = getValidProps(this.props);

    const classes = {
      active: path.indexOf(to) !== -1
    };

    return (
      <Component
        {...props}
        className={classNames(className, classes)}
        href={to}
        label={text}
      >
        <i className={`${uiclass}-icon ${icon}`} />
        <span className={`${uiclass}-info`}>{text}</span>
      </Component>
    );
  }
}

export default HeaderItem;
