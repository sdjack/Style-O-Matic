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

class AccordionTitle extends React.Component {
  static propTypes = getCorePropTypes({ accordionindex: "string" });

  static defaultProps = getCorePropDefaults({
    componentClass: "dt",
    uirole: "title"
  });

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      active,
      accordionindex,
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
        <i className="accordion-caret" aria-hidden="true" />
        {children}
      </Component>
    );
  }
}

export default AccordionTitle;
