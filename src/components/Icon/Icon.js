/**
 * @memberof components
 * @namespace Icon
 * @author Steven Jackson
* @scss ../../scss/components/Icon
 * @example <Icon>
             Example Content
           </Icon>
 */
import React from "react";
import cx from "classnames";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import "./Icon.css";

class Icon extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "i",
    uirole: ROLE.ICON
  });

  render() {
    const { renderAs: Component, className, children, props } = getValidProps(
      this.props
    );
    const classes = {
      [`ui-icon-${children}`]: children
    };
    const iconClass = cx(className, classes);
    delete props.children;
    return <Component {...props} className={iconClass} />;
  }
}

export default Icon;
