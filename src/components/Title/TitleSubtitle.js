import _ from "lodash";
import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class TitleSubtitle extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "h4",
    uirole: "subtitle"
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default TitleSubtitle;
