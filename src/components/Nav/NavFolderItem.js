import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class NavFolderItem extends CoreComponent {
  static propTypes = getCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.FOLDERITEM,
    text: "",
    minimized: false
  });

  render() {
    const {
      renderAs: Component,
      uiclass,
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

    return (
      <Component {...props} className={classNames(className, classes)}>
        <a className="ui-nav-item-link" href={to} label={text}>
          <span className={`ui-${uiclass}-icon ${icon}`} />
          <span className={`ui-${uiclass}-info`}>{text}</span>
          {children}
        </a>
      </Component>
    );
  }
}

export default NavFolderItem;
