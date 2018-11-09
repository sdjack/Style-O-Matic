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
  static propTypes = setCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "li",
    uirole: ROLE.ITEM,
    label: null,
    minimized: false
  });

  render() {
    const {
      renderAs: Component,
      uirole,
      iconClassName,
      to,
      path,
      label,
      minimized,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      active: to && path.indexOf(to) !== -1,
      minimized
    };

    const contents = children || label;
    delete props.className;

    return (
      <Component {...props} className={classNames("ui-nav-item", classes)}>
        {to ? (
          <a href={to} label={label} className={`ui-icon ${iconClassName}`}>
            {contents}
          </a>
        ) : (
          <div className={`ui-icon ${iconClassName}`}>{contents}</div>
        )}
      </Component>
    );
  }
}

export default NavItem;
