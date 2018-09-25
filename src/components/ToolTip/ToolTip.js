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
    this.useParentNode = true;
    this.state = {
      open: false,
      topOffset: 0,
      leftOffset: 0
    };
  }

  componentDidMount() {
    this.handleMouseLeave();
  }

  handleMouseEnter = e => {
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
  };

  handleMouseLeave = e => {
    if (this.node) {
      const { position } = this.props;
      const { x, y, width } = this.node.getBoundingClientRect();
      let leftOffset = x;
      let topOffset = y;
      if (position === "left") {
        leftOffset += 40;
      } else if (position === "right") {
        leftOffset += width - 40;
        topOffset += 40;
      } else if (position === "bottom") {
        leftOffset += 20;
        topOffset += 60;
      } else {
        leftOffset += 20;
        topOffset -= 40;
      }
      this.setState({ open: false, topOffset, leftOffset });
    } else {
      this.setState({ open: false });
    }
  };

  render() {
    const {
      renderAs: Component,
      position,
      open,
      children,
      props
    } = getValidProps(this.props, this.state);
    const offsetStyle = position === "left" ? {
      top: `${this.state.topOffset}px`,
      right: `${this.state.leftOffset}px`
    } : {
      top: `${this.state.topOffset}px`,
      left: `${this.state.leftOffset}px`
    };
    let widgetClass = "ui-tooltip-widget ";
    if (position) {
      widgetClass += `ui-tooltip-${position}`;
    } else {
      widgetClass += " ui-tooltip-top";
    }

    const classes = {
      open: this.state.open
    };

    return (
      <Component
        {...props}
        ref={this.onSetRef}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="ui-tooltip-wrapper">
          <div
            className={classNames(widgetClass, classes)}
            style={offsetStyle}
          >
            <div
              className={classNames("ui-tooltip-content", classes)}
            >
              {children}
            </div>
          </div>
        </div>
      </Component>
    );
  }
}

export default ToolTip;
