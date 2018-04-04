/* ========================================================================
* Style-O-Matic UI
*
* @author: Steven Jackson
* ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import classNames from "classnames";
import elementType from "prop-types-extra/lib/elementType";
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
      maskPattern: "regexp"
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
    maskPattern: null
  });

  state = {
    renderKey: `input_${uID()}`,
    value: "",
    valid: true
  };

  handleOnChecked = e => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handleOnChange = e => {
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

  handleOnNumUp = () => {
    const newValue = parseInt(this.state.value || 0, 10);
    this.setState({ value: newValue + 1 });
  };

  handleOnNumDown = () => {
    const newValue = parseInt(this.state.value || 0, 10);
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

  renderTypeComponents = type => {
    if (type === "number") {
      return [
        <div
          key={`number-button_${this.state.renderKey}_up`}
          className="input-number-up"
          onClick={this.handleOnNumUp}
          onKeyDown={this.handleOnNumUp}
          role="presentation"
        >
          +
        </div>,
        <div
          key={`number-button_${this.state.renderKey}_down`}
          className="input-number-down"
          onClick={this.handleOnNumDown}
          onKeyDown={this.handleOnNumDown}
          role="presentation"
        >
          -
        </div>
      ];
    } else if (type === "test") {
      return <i className="fa fa-times anchor-right" aria-hidden="true" />;
    }
    return null;
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      type,
      id,
      required,
      disabled,
      label,
      children,
      props
    } = getValidProps(this.props);

    const wrapperClasses = {
      disabled,
      invalid: !this.state.valid
    };

    const preParsedClass = `ui-input-${type}`;

    if (type === "checkbox") {
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
              onChange={this.handleOnChecked}
            />
            {children}
            {this.renderTypeComponents(type)}
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
            />
            {children}
            <div
              key={`number-button_${this.state.renderKey}_up`}
              className="input-number-up"
              onClick={() => {}}
              onKeyDown={this.handleOnNumUp}
              role="presentation"
            >
              +
            </div>
            <div
              key={`number-button_${this.state.renderKey}_down`}
              className="input-number-down"
              onClick={() => {}}
              onKeyDown={this.handleOnNumDown}
              role="presentation"
            >
              -
            </div>
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
          />
          {children}
        </div>
      </div>
    );
  }
}

export default setCoreClass("ui-input", Input);
