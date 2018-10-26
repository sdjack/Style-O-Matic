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
    renderAs: "div",
    uirole: ROLE.ITEM,
    text: "",
    minimized: false
  });

  render() {
    const {
      renderAs: Component,
      uirole,
      coreClassName,
      iconClassName,
      to,
      path,
      text,
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
        <Component {...props} className={classNames(coreClassName, classes)}>
          <a className="ui-nav-item-link" href={to} label={text}>
            <span className={`ui-nav-${uirole}-info`}>{text}</span>
            <span className={`ui-nav-${uirole}-icon ${iconClassName}`} />
            {children}
          </a>
        </Component>
      );
    }
    return (
      <Component {...props} className={classNames(coreClassName, classes)}>
        <a className="ui-nav-item-link" href={to} label={text}>
          <span className={`ui-nav-${uirole}-icon ${iconClassName}`} />
          <span className={`ui-nav-${uirole}-info`}>{text}</span>
          {children}
        </a>
      </Component>
    );
  }
}

export default NavItem;
