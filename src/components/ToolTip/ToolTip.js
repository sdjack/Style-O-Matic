/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { setCoreClass } from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import "./ToolTip.css";

class ToolTip extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    uirole: "tooltip",
    position: "right"
  });

  constructor() {
    super();
    this.state = {
      clientWidth: 1,
      clientHeight: 1
    };
  }

  componentDidMount() {
    const { clientWidth, clientHeight } = ReactDOM.findDOMNode(this).parentNode;
    this.setState({ clientWidth, clientHeight });
  }

  render() {
    const { position, ...sorceProps } = this.props;
    const { clientWidth, clientHeight } = this.state;
    const { componentClass: Component, children, props } = getValidProps(
      sorceProps
    );

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
      <Component {...props} style={tipDimensions}>
        <div className="ui-tooltip-wrapper">
          <div className={widgetClass}>
            <div className="ui-tooltip-content">{children}</div>
          </div>
        </div>
      </Component>
    );
  }
}

export default setCoreClass("ui-tooltip", ToolTip);
