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

class ToolBarItem extends CoreComponent {
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

    const ElementType = getElementType(ToolBarItem, this.props);

    const classes = {
      active: to && path.indexOf(to) !== -1
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

export default ToolBarItem;
