/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import _ from "lodash";
import classNames from "classnames";
import {
  CoreComponent,
  getValidProps,
  setCorePropTypes,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class GridColumn extends CoreComponent {
  static propTypes = setCorePropTypes({
    cols: ["string", "number"]
  });

  static defaultProps = setCorePropDefaults({
    uirole: ROLE.COLUMN,
    cols: 12
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
