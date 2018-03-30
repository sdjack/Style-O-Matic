/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import PropTypes from "prop-types";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../../_utilities/PropUtils";
import { Roles } from "../../_utilities/Enum";

class Minion extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults();

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      props
    } = getValidProps(this.props);

    const childclass =
      uiclass.indexOf(props.uirole) === -1
        ? `${uiclass}-${props.uirole}`
        : uiclass;

    delete props.uirole;

    const classes = {
      [childclass]: true
    };

    return (
      <Component {...props} className={classNames(className, classes)}>
        {children}
      </Component>
    );
  }
}

export default Minion;
