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
        {uirole !== ROLE.FOLDERITEM ? (
          <span className={`ui-nav-icon ${iconClassName}`} />
        ) : null}
        {to ? (
          <a className="ui-nav-content" href={to} label={label}>
            {contents}
          </a>
        ) : (
          <span className="ui-nav-content">{contents}</span>
        )}
        {uirole === ROLE.FOLDERITEM ? (
          <span className={`ui-nav-icon ${iconClassName}`} />
        ) : null}
      </Component>
    );
  }
}

export default NavItem;
