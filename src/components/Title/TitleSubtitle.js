/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import _ from "lodash";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class TitleSubtitle extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "h4",
    uirole: ROLE.SUBTITLE
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return <Component {...props}>{children}</Component>;
  }
}

export default TitleSubtitle;
