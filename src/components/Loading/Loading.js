/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { setCoreClass } from "../_utilities/CoreUtils";
import "./Loading.css";

class Loading extends React.Component {
  static propTypes = {
    closed: PropTypes.bool
  };

  static defaultProps = {
    uirole: "loading",
    closed: false
  };

  render() {
    const {
      uiclass,
      className,
      closed,
      overlay,
      message,
      ...props
    } = this.props;

    delete props.uirole;
    delete props.onToggle;

    const classes = {
      [uiclass]: true,
      closed,
      overlay
    };

    return (
      <div {...props} className={classNames(className, classes)}>
        <div className="loading-content">
          <div className="loading-message">{message}</div>
          <div className="loading-ring">
            <div className="loading-ring-dot loading-ring1" />
            <div className="loading-ring-dot loading-ring2" />
            <div className="loading-ring-dot loading-ring3" />
            <div className="loading-ring-dot loading-ring4" />
            <div className="loading-ring-dot loading-ring5" />
            <div className="loading-ring-dot loading-ring6" />
            <div className="loading-ring-dot loading-ring7" />
            <div className="loading-ring-dot loading-ring8" />
            <div className="loading-ring-dot loading-ring9" />
            <div className="loading-ring-dot loading-ring10" />
            <div className="loading-ring-dot loading-ring11" />
            <div className="loading-ring-dot loading-ring12" />
          </div>
        </div>
      </div>
    );
  }
}

export default setCoreClass("loading", Loading);
