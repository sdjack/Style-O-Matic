/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class AccordionContent extends CoreComponent {
  static propTypes = getCorePropTypes({ accordionindex: "string" });

  static defaultProps = getCorePropDefaults({
    renderAs: "dd",
    uirole: ROLE.CONTENT
  });

  render() {
    const {
      renderAs: Component,
      accordionindex,
      children,
      props
    } = getValidProps(this.props);

    return (
      <Component {...props} accordionindex={accordionindex}>
        {children}
      </Component>
    );
  }
}

export default AccordionContent;
