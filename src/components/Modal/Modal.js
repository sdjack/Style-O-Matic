/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import elementType from "prop-types-extra/lib/elementType";
import { setCoreClass } from "../_utilities/CoreUtils.js";
import "./Modal.css";

class Modal extends React.Component {
  static propTypes = {
    componentClass: elementType,
    open: PropTypes.bool
  };

  static defaultProps = {
    uirole: "modal",
    componentClass: "div",
    open: false
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      open,
      ...props
    } = this.props;

    delete props.uirole;

    const preParsedClass = open ? `${uiclass} open` : uiclass;

    return (
      <div className={preParsedClass}>
        <Component {...props} className="modal-dialog theme-content">
          {children}
        </Component>
      </div>
    );
  }
}

export default setCoreClass("modal", Modal);
