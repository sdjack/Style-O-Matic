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

    const caretClass = active ? "ui-icon-folder-open" : "ui-icon-folder-closed";

    return (
      <Component {...props} accordionindex={accordionindex}>
        <span
          className={`ui-accordion-caret ${caretClass}`}
          aria-hidden="true"
        />
        {children}
      </Component>
    );
  }
}

export default AccordionTitle;
