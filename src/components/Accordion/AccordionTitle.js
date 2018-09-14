import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropTypes,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class AccordionTitle extends CoreComponent {
  static propTypes = setCorePropTypes({ accordionindex: "string" });

  static defaultProps = setCorePropDefaults({
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

    const caretClass = active ? "ui-icon-folder-open" : "ui-icon-folder";

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
