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

class AccordionContent extends React.Component {
  static propTypes = getCorePropTypes({ accordionindex: "string" });

  static defaultProps = getCorePropDefaults({
    componentClass: "dd",
    uirole: "content"
  });

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      active,
      accordionindex,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      [uiclass]: true,
      active
    };

    return (
      <Component
        {...props}
        className={classNames(className, classes)}
        accordionindex={accordionindex}
      >
        {children}
      </Component>
    );
  }
}

export default AccordionContent;
