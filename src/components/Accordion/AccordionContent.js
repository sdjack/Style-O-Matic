/**
 * @namespace Style-O-Matic UI
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropTypes,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class AccordionContent extends CoreComponent {
  static propTypes = setCorePropTypes({ accordionindex: "string" });

  static defaultProps = setCorePropDefaults({
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
