import React from "react";
import ReactDOM from "react-dom";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./ToolTip.css";

class ToolTip extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOOLTIP,
    position: "right"
  });

  constructor(props) {
    super(props);
    this.useParentNode = true;
    this.state = {
      topOffset: 0,
      leftOffset: 0
    };
  }

  handleMouseEnter = e => {
    if (this.node) {
      const { x, width, bottom, height } = this.node.getBoundingClientRect();
      const leftOffset = x + width;
      let topOffset = bottom;
      topOffset -= height / 2;
      this.setState({ topOffset, leftOffset });
    }
  };

  render() {
    const { position, ...sorceProps } = this.props;
    const { renderAs: Component, children, props } = getValidProps(sorceProps);
    const offsetStyle = {
      top: `${this.state.topOffset}px`,
      left: `${this.state.leftOffset}px`
    };
    let widgetClass = "ui-tooltip-widget ";
    if (position) {
      widgetClass += `ui-tooltip-${position}`;
    } else {
      widgetClass += " ui-tooltip-top";
    }

    return (
      <Component
        {...props}
        ref={this.onSetRef}
        onMouseEnter={this.handleMouseEnter}
      >
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
