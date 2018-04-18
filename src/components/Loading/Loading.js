/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { CoreComponent, getCorePropDefaults, getValidProps } from "../../lib";
import "./Loading.css";

class Loading extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: "loading"
  });

  render() {
    const { children, props } = getValidProps(this.props);

    return (
      <div {...props}>
        <div className="loading-content">
          <div className="loading-message">{children}</div>
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

export default Loading;
