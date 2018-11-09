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

class NavWidget extends CoreComponent {
  static propTypes = setCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "li",
    uirole: ROLE.WIDGET,
    label: null,
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
      minimized,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      active: to && path.indexOf(to) !== -1,
      minimized
    };

    return (
      <Component {...props} className={classNames(coreClassName, classes)}>
        {children}
      </Component>
    );
  }
}

export default NavWidget;
