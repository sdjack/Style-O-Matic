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
import "./Input.css";

class Input extends React.Component {
  static propTypes = getCorePropTypes(
    {
      required: "bool",
      label: "string",
      validator: "func",
      validPattern: "regexp",
      maskPattern: "regexp",
      selectOptions: "array"
    },
    null,
    true
  );

  static defaultProps = getCorePropDefaults({
    componentClass: "input",
    uirole: Roles.INPUT,
    type: "text",
    checked: false,
    required: false,
    label: null,
    validator: null,
    validPattern: null,
    maskPattern: null,
    selectOptions: []
  });

  state = {
    renderKey: `input_${uID()}`,
    value: "",
    valid: true
  };

  handleOnChecked = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handleOnChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handleOnValidated = e => {
    e.preventDefault();
    const input = e.target;
    const {
      required,
      validator,
      validPattern,
      maskPattern
    } = this.props.config;
    let { value } = input;
    let isValid = true;
    if (required) {
      if (maskPattern !== null) {
        value = value.replace(maskPattern, "");
      }
      if (validator !== null) {
        isValid = validator(value);
      } else if (validPattern !== null) {
        isValid = validPattern.test(value);
      }
    }
    if (isValid && this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handleOnNumUp = e => {
    e.preventDefault();
    const currentValue =
      this.state.value && this.state.value !== "" ? this.state.value : 0;
    const newValue = parseInt(currentValue, 10);
    this.setState({ value: newValue + 1 });
  };

  handleOnNumDown = e => {
    e.preventDefault();
    const currentValue =
      this.state.value && this.state.value !== "" ? this.state.value : 0;
    const newValue = parseInt(currentValue, 10);
    this.setState({ value: newValue - 1 });
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

  renderSelectOptions = selectOptions => {
    const output = [];
    for (let i = 0; i < selectOptions.length; i++) {
      const optionData = selectOptions[i];
      output.push(
        <option
          key={`option_${i}_${this.state.renderKey}`}
          id={`option_${i}`}
          name={`option_${i}`}
          value={optionData.Value}
        >
          {optionData.Label}
        </option>
      );
    }
    return output;
  };

  render() {
    const {
      componentClass,
      className,
      type,
      id,
      required,
      disabled,
      label,
      children,
      selectOptions,
      props
    } = getValidProps(this.props);

    const wrapperClasses = {
      disabled,
      invalid: !this.state.valid
    };

    const Component =
      type === "select" || type === "textarea" ? type : componentClass;

    const preParsedClass = `ui-input-${type}`;

    if (type === "select") {
      return (
        <div className={className}>
          {this.renderLabel(id, label, required)}
          <div
            key={`wrapper_${this.state.renderKey}`}
            className={classNames(preParsedClass, wrapperClasses)}
          >
            <Component
              key={this.state.renderKey}
              {...props}
              type={type}
              onChange={this.handleOnChange}
              value={this.state.value}
            >
              {children}
              {this.renderSelectOptions(selectOptions)}
            </Component>
          </div>
        </div>
      );
    } else if (type === "checkbox") {
      return (
        <div className={className}>
          {this.renderLabel(id, label, required)}
          <div
            key={`wrapper_${this.state.renderKey}`}
            className={classNames(preParsedClass, wrapperClasses)}
          >
            <Component
              key={this.state.renderKey}
              {...props}
              type={type}
              value={this.state.value}
              onChange={this.handleOnChecked}
            />
            {children}
          </div>
        </div>
      );
    } else if (type === "number") {
      return (
        <div className={className}>
          {this.renderLabel(id, label, required)}
          <div
            key={`wrapper_${this.state.renderKey}`}
            className={classNames(preParsedClass, wrapperClasses)}
          >
            <Component
              key={this.state.renderKey}
              {...props}
              type={type}
              onChange={this.handleOnChange}
              value={this.state.value}
            />
            {children}
            <button
              key={`number-button_${this.state.renderKey}_up`}
              className="ui-input-number-up"
              onClick={this.handleOnNumUp}
            >
              +
            </button>
            <button
              key={`number-button_${this.state.renderKey}_down`}
              className="ui-input-number-down"
              onClick={this.handleOnNumDown}
            >
              -
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className={className}>
        {this.renderLabel(id, label, required)}
        <div
          key={`wrapper_${this.state.renderKey}`}
          className={classNames(preParsedClass, wrapperClasses)}
        >
          <Component
            key={this.state.renderKey}
            {...props}
            type={type}
            onChange={this.handleOnChange}
            value={this.state.value}
          />
          {children}
        </div>
      </div>
    );
  }
}

export default setCoreClass("ui-input", Input);
