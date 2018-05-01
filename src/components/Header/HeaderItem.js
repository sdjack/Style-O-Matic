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
  getValidProps,
  getElementType,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class HeaderItem extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.ITEM,
    text: ""
  });

  render() {
    const {
      uiclass,
      className,
      to,
      path,
      text,
      icon,
      children,
      props
    } = getValidProps(this.props);

    const ElementType = getElementType(HeaderItem, this.props);

    const classes = {
      active: to && to === path
    };

    if (icon || text) {
      return (
        <ElementType
          {...props}
          className={classNames(className, classes)}
          href={to}
          label={text}
        >
          <i className={`${uiclass}-icon ${icon}`} />
          <span className={`${uiclass}-info`}>{text}</span>
          {children}
        </ElementType>
      );
    }

    return (
      <ElementType {...props} className={classNames(className, classes)}>
        {children}
      </ElementType>
    );
  }
}

export default HeaderItem;
