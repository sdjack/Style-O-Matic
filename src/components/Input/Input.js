/* ========================================================================
* Style-O-Matic UI
*
* @author: Steven Jackson
* ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getPropTypesA11y,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Input.css";

class Input extends CoreComponent {
  static propTypes = getPropTypesA11y({
    id: "string!",
    required: "bool",
    label: "string",
    validator: "func",
    validPattern: "regexp",
    maskPattern: "regexp",
    selectOptions: "array"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "input",
    uirole: ROLE.INPUT,
    type: "text",
    checked: false,
    required: false,
    label: null,
    validator: null,
    validPattern: null,
    maskPattern: null,
    selectOptions: []
  });

  constructor(props) {
    super(props);
    let defaultValue = props.value;
    const renderKey = `input_${this.GUID}`;
    if (!defaultValue) {
      switch (props.type) {
        case "select":
          defaultValue = props.selectOptions[0]
            ? props.selectOptions[0].Value
            : "";
          break;
        case "number":
          defaultValue = 0;
          break;
        case "color":
          defaultValue = "#263646";
          break;
        default:
          defaultValue = "";
          break;
      }
    }
    this.state = {
      renderKey,
      value: defaultValue,
      valid: true
    };
  }

  getValue = () => this.state.value;

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
      const validationClass = required ? "label required-label" : "label";
      return (
        <span key={`label_${this.state.renderKey}`} className={validationClass}>
          {label}
        </span>
      );
    }
    return <span />;
  };

  renderSelectOptions = selectOptions => {
    const output = [];
    for (let i = 0; i < selectOptions.length; i += 1) {
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
      renderAs,
      className,
      coreClassName,
      styleClassName,
      type,
      id,
      name,
      required,
      disabled,
      label,
      children,
      selectOptions,
      value,
      props
    } = getValidProps(this.props);

    const fieldName = name || id || this.state.renderKey;
    const fieldId = id || this.state.renderKey;
    delete props.name;
    delete props.id;

    const wrapperClasses = {
      disabled,
      invalid: !this.state.valid
    };

    const Component =
      type === "select" || type === "textarea" ? type : renderAs;

    const preParsedClass = `ui-input-${type}`;
    const validationClass = required ? " required" : "";

    if (type === "submit" || type === "button") {
      return (
        <div className={coreClassName}>
          <div
            key={`wrapper_${this.state.renderKey}`}
            className={classNames(preParsedClass, wrapperClasses)}
          >
            <Component
              key={this.state.renderKey}
              {...props}
              className={styleClassName}
              id={fieldId}
              name={fieldName}
              type={type}
              value={label}
            />
            {children}
          </div>
        </div>
      );
    } else if (type === "select") {
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
    } else if (type === "radio" || type === "checkbox") {
      delete props.checked;
      return (
        <div className={className}>
          {this.renderLabel(fieldId, label, required)}
          <div
            key={`wrapper_${this.state.renderKey}`}
            className={classNames(preParsedClass, wrapperClasses)}
          >
            <label
              key={`label_${this.state.renderKey}`}
              htmlFor={fieldId}
              className={validationClass}
            >
              <Component
                key={this.state.renderKey}
                {...props}
                id={fieldId}
                name={fieldName}
                type={type}
                defaultChecked={value === this.state.value}
                onClick={this.handleOnChange}
              />
              {value}
            </label>
          </div>
        </div>
      );
    } else if (type === "number") {
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
    } else if (type === "hidden") {
      return (
        <Component
          key={this.state.renderKey}
          {...props}
          id={fieldId}
          name={fieldName}
          type={type}
          onChange={this.handleOnChange}
          value={this.state.value}
        />
      );
    }
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

export default Input;
