import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class NavItem extends CoreComponent {
  static propTypes = getCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.ITEM,
    text: "",
    minimized: false
  });

  render() {
    const {
      renderAs: Component,
      uirole,
      className,
      to,
      path,
      text,
      icon,
      minimized,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      active: to && path.indexOf(to) !== -1,
      minimized
    };

    if (uirole === ROLE.FOLDERITEM) {
      return (
        <Component {...props} className={classNames(className, classes)}>
          <a className="ui-nav-item-link" href={to} label={text}>
            <span className={`ui-nav-${uirole}-info`}>{text}</span>
            <span className={`ui-nav-${uirole}-icon ${icon}`} />
            {children}
          </a>
        </Component>
      );
    }
    return (
      <Component {...props} className={classNames(className, classes)}>
        <a className="ui-nav-item-link" href={to} label={text}>
          <span className={`ui-nav-${uirole}-icon ${icon}`} />
          <span className={`ui-nav-${uirole}-info`}>{text}</span>
          {children}
        </a>
      </Component>
    );
  }
}

export default NavItem;
