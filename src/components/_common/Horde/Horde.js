/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import classNames from "classnames";
import warning from "warning";
import { createChainedFunction } from "../../_utilities/CoreUtils";
import { Roles } from "../../_utilities/Enum";

class Horde extends React.Component {
  static propTypes = {
    uirole: PropTypes.string,
    uiclass: PropTypes.string,
    className: PropTypes.string,
    componentClass: elementType,
    children: PropTypes.node,
    open: PropTypes.bool
  };

  static defaultProps = {
    uirole: "group",
    uiclass: "group",
    className: null,
    componentClass: "div",
    children: null,
    open: false
  };

  renderChild = (child, uiclass) => {
    const role = child.props.uirole || Roles.DEFAULT;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on title components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ref,
      uiclass
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      open,
      children,
      ...props
    } = this.props;

    delete props.uirole;

    const classes = {
      [uiclass]: true,
      open
    };

    return (
      <Component {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child =>
          this.renderChild(child, uiclass)
        )}
      </Component>
    );
  }
}

export default Horde;
