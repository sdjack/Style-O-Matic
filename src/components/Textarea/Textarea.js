/* ========================================================================
* Style-O-Matic UI
*
* @author: Steven Jackson
* ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import classNames from "classnames";
import { setCoreClass, uID } from "../_utilities/CoreUtils.js";
import {
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";
import "./Textarea.css";

class Textarea extends React.Component {
  static propTypes = getCorePropTypes(
    {
      id: "string!",
      required: "bool",
      label: "string",
      validator: "func"
    },
    null,
    true
  );

  static defaultProps = getCorePropDefaults({
    componentClass: "textarea",
    uirole: Roles.INPUT,
    required: false,
    label: null,
    validator: null
  });

  constructor(props) {
    super(props);
    const defaultValue = props.value || "";
    const renderKey = `textarea_${uID()}`;
    this.state = {
      renderKey,
      value: defaultValue,
      valid: true
    };
  }

  getValue = () => this.state.value;

  handleOnChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  renderLabel = (id, label, required) => {
    if (label !== null) {
      const validationClass = required ? " required" : "";
      return (
        <label
          key={`label_${this.state.renderKey}`}
          htmlFor={id}
          className={validationClass}
        >
          {label}
        </label>
      );
    }
    return <span />;
  };

  render() {
    const {
      componentClass: Component,
      className,
      id,
      name,
      required,
      disabled,
      label,
      children,
      props
    } = getValidProps(this.props);

    delete props.name;
    delete props.id;
    delete props.className;

    const fieldName = name || id || this.state.renderKey;
    const fieldId = id || this.state.renderKey;
    const preParsedClass = "ui-textarea";
    const wrapperClasses = {
      disabled,
      invalid: !this.state.valid
    };

    return (
      <div className={className}>
        {this.renderLabel(fieldId, label, required)}
        <div
          key={`wrapper_${this.state.renderKey}`}
          className={classNames(preParsedClass, wrapperClasses)}
        >
          <Component
            key={this.state.renderKey}
            {...props}
            id={fieldId}
            name={fieldName}
            onChange={this.handleOnChange}
            value={this.state.value}
          />
          {children}
        </div>
      </div>
    );
  }
}

export default setCoreClass("ui-textarea", Textarea);
