import React from "react";
import ReactDOM from "react-dom";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./ToolTip.css";

class ToolTip extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    uirole: "tooltip",
    position: "right"
  });

  render() {
    const { position, ...sorceProps } = this.props;
    const { clientWidth, clientHeight } = this.getParentDimensions();
    const { renderAs: Component, children, props } = getValidProps(sorceProps);

    let widgetClass = "ui-tooltip-widget ";
    const tipDimensions = {
      width: `${clientWidth}px`,
      height: `${clientHeight}px`
    };

    if (position) {
      widgetClass += `ui-tooltip-${position}`;
    } else {
      widgetClass += " ui-tooltip-top";
    }

    return (
      <Component {...props} style={tipDimensions} ref={this.onSetRef}>
        <div className="ui-tooltip-wrapper">
          <div className={widgetClass}>
            <div className="ui-tooltip-content">{children}</div>
          </div>
        </div>
      </Component>
    );
  }
}

export default ToolTip;
