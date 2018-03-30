/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { isUsable } from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";

class TitleContent extends React.Component {
  static propTypes = getCorePropTypes({
    showAs: "string"
  });

  static defaultProps = getCorePropDefaults({
    componentClass: "h1",
    uirole: "content"
  });

  render() {
    const { componentClass, showAs, children, props } = getValidProps(
      this.props
    );

    let Component = componentClass;

    if (isUsable(showAs)) {
      switch (showAs) {
        case "h1":
          Component = "h1";
          break;
        case "h2":
          Component = "h2";
          break;
        case "h3":
          Component = "h3";
          break;
        case "h4":
          Component = "h4";
          break;
        case "h5":
          Component = "h5";
          break;
        case "h6":
          Component = "h6";
          break;
        default:
          Component = componentClass;
          break;
      }
    }

    return <Component {...props}>{children}</Component>;
  }
}

export default TitleContent;
