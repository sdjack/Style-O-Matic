import _ from "lodash";
import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class GridColumn extends CoreComponent {
  static propTypes = getCorePropTypes({
    cols: "number"
  });

  static defaultProps = getCorePropDefaults({
    uirole: ROLE.COLUMN,
    cols: 12,
    textAlign: "left"
  });

  render() {
    const { renderAs: Component, className, children, props } = getValidProps(
      this.props
    );

    const classes = {};

    if (!_.isNil(this.props.cols)) {
      classes[`span-${this.props.cols}`] = true;
    }

    return (
      <Component {...props} className={classNames(className, classes)}>
        {children}
      </Component>
    );
  }
}

export default GridColumn;
