import React from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class AccordionTitle extends CoreComponent {
  static propTypes = getCorePropTypes({ accordionindex: "string" });

  static defaultProps = getCorePropDefaults({
    renderAs: "dt",
    uirole: ROLE.TITLE
  });

  render() {
    const {
      renderAs: Component,
      active,
      children,
      accordionindex,
      props
    } = getValidProps(this.props);

    const caretClass = active ? "fa-caret-down" : "fa-caret-right";

    return (
      <Component {...props} accordionindex={accordionindex}>
        <span
          className={`ui-accordion-caret fa ${caretClass}`}
          aria-hidden="true"
        />
        {children}
      </Component>
    );
  }
}

export default AccordionTitle;
