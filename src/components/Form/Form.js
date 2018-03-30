/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import elementType from "prop-types-extra/lib/elementType";
import {
  setCoreClass,
  isUsable,
  dataExists,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils";
import Input from "../Input";
import "./Form.css";

const INPUT_ROLE = Input.defaultProps.uirole;

class Form extends React.Component {
  static propTypes = {
    componentClass: elementType
  };

  static defaultProps = {
    uirole: "form",
    componentClass: "form"
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.props.submit) {
      this.props.submit(e);
    }
  };

  renderInput = (child, props) => {
    const role = child.props.uirole;
    const ref = child.ref;
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      ...props
    } = this.props;

    const classes = {
      [uiclass]: true
    };

    delete props.uirole;

    return (
      <Component {...props} className={classNames(className, classes)}>
        {React.Children.map(children, child => {
          switch (child.props.uirole) {
            case INPUT_ROLE:
              return this.renderInput(child, { uiclass });
            default:
              return child;
          }
        })}
      </Component>
    );
  }
}

Form.Input = Input;

export default setCoreClass("form", Form);
