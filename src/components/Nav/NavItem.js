/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  setCorePropDefaults,
  setCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class NavItem extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.ITEM,
    uigroup: ROLE.NAV,
    label: null
  });

  render() {
    const {
      renderAs: Component,
      className,
      uirole,
      to,
      path,
      label,
      children,
      props
    } = getValidProps(this.props);

    const contents = children || label;

    return to ? (
      <a {...props} href={to} label={label}>
        {contents}
      </a>
    ) : (
      <Component {...props}>{contents}</Component>
    );
  }
}

export default NavItem;
