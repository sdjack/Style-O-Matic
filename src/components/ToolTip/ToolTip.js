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
    position: "bottom"
  });

  render() {
    const { renderAs: Component, position, children, props } = getValidProps(
      this.props
    );

    return (
      <Component
        data-ui-tooltip={`${escape(children)}`}
        data-ui-tooltip-pos={position}
      >
        {children}
      </Component>
    );
  }
}

export default ToolTip;
