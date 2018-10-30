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
import ReactDOM from "react-dom";
import classNames from "classnames";
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
    position: "top"
  });

  constructor(props) {
    super(props);
    this.defaultCoords = {
      x: 0,
      y: 0
    };
    this.state = {
      open: false,
      topOffset: this.defaultCoords.y,
      leftOffset: this.defaultCoords.x
    };
  }

  setRefCallback = ref => {
    const { x, y } = ref.getBoundingClientRect();
    this.defaultCoords.x = x;
    this.defaultCoords.y = y;
    this.setState({
      topOffset: this.defaultCoords.y,
      leftOffset: this.defaultCoords.x
    });
  };

  handleMouseEnter = e => {
    if (!this.state.open) {
      if (this.node) {
        const { position } = this.props;
        const { x, width, bottom, height } = this.node.getBoundingClientRect();
        let leftOffset = x;
        let topOffset = bottom;
        if (position === "left") {
          topOffset -= height / 2;
        } else if (position === "right") {
          leftOffset += width;
          topOffset -= height / 2;
        } else if (position === "top") {
          topOffset -= height * 2;
        }
        this.setState({ open: true, topOffset, leftOffset });
      } else {
        this.setState({ open: true });
      }
    }
  };

  handleMouseLeave = e => {
    this.setState({
      open: false,
      topOffset: this.defaultCoords.y,
      leftOffset: this.defaultCoords.x
    });
  };

  render() {
    const { renderAs: Component, position, children, props } = getValidProps(
      this.props,
      this.state
    );
    const offsetStyle = {};
    let widgetClass = "ui-tooltip-widget ";
    if (this.node) {
      if (position) {
        widgetClass += `ui-tooltip-${position}`;
        if (position === "left") {
          offsetStyle.top = `${this.state.topOffset}px`;
          offsetStyle.right = `${this.state.leftOffset}px`;
        } else {
          offsetStyle.top = `${this.state.topOffset}px`;
          offsetStyle.left = `${this.state.leftOffset}px`;
        }
      } else {
        widgetClass += " ui-tooltip-top";
      }
    }

    const classes = {
      "ui--open": this.state.open
    };

    return (
      <Component
        {...props}
        ref={this.onSetRef}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        <div className="ui-tooltip-wrapper">
          <div className={classNames(widgetClass, classes)} style={offsetStyle}>
            <div className={classNames("ui-tooltip-content", classes)}>
              {children}
            </div>
          </div>
        </div>
      </Component>
    );
  }
}

export default ToolTip;
