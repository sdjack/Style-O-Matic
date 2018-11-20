/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import cx from "classnames";
import {
  CoreComponent,
  setCorePropTypes,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class DropdownToggle extends CoreComponent {
  static propTypes = setCorePropTypes({
    caret: "bool"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOGGLE,
    role: ROLE.PRESENTATION,
    caret: false
  });

  render() {
    const {
      renderAs: Component,
      className,
      caret,
      children,
      props
    } = getValidProps(this.props);
    const classes = {
      "ui-caret": caret
    };
    const uiClassCore = cx(className, classes);
    delete props.className;
    return (
      <Component {...props} className={uiClassCore}>
        {children}
      </Component>
    );
  }
}

export default DropdownToggle;
