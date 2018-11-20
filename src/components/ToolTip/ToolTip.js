/**
 * @memberof components
 * @namespace ToolTip
 * @author Steven Jackson
 * @scss ../../scss/components/ToolTip
 * @example <div>
   <ToolTip position="right">Example Tooltip</ToolTip>
 </div>
 */
import React from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./ToolTip.css";

class ToolTip extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "span",
    uirole: ROLE.TOOLTIP,
    position: "top"
  });

  render() {
    const {
      renderAs: Component,
      text,
      position,
      children,
      props
    } = getValidProps(this.props);
    const tipText = text || escape(children);
    return (
      <Component data-ui-tooltip={tipText} data-ui-tooltip-pos={position}>
        {children}
      </Component>
    );
  }
}

export default ToolTip;
