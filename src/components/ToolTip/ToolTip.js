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

  constructor(props) {
    super(props);
    this.useParentNode = true;
  }

  render() {
    const { position, ...sorceProps } = this.props;
    const { renderAs: Component, children, props } = getValidProps(sorceProps);

    let widgetClass = "ui-tooltip-widget ";
    const tipDimensions = {};
    const offsetStyle = {};
    if (this.node) {
      const { clientWidth, clientHeight } = this.node.parentNode;
      tipDimensions.width = `${clientWidth}px`;
      tipDimensions.height = `${clientHeight}px`;
      const { x, y, width, bottom } = this.node.getBoundingClientRect();
      offsetStyle.left = `${x + width}px`;
      offsetStyle.top = `${bottom}px`;
    }

    if (position) {
      widgetClass += `ui-tooltip-${position}`;
    } else {
      widgetClass += " ui-tooltip-top";
    }

    return (
      <Component {...props} style={tipDimensions} ref={this.onSetRef}>
        <div className="ui-tooltip-wrapper">
          <div className={widgetClass} style={offsetStyle}>
            <div className="ui-tooltip-content">{children}</div>
          </div>
        </div>
      </Component>
    );
  }
}

export default ToolTip;
