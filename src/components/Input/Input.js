/* ========================================================================
* Style-O-Matic UI
*
* @author: Steven Jackson
* ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import elementType from "prop-types-extra/lib/elementType";
import { setCoreClass, uID } from "../_utilities/CoreUtils.js";
import "./Input.css";

class Input extends React.Component {
  static propTypes = {
    componentClass: elementType,
    disabled: PropTypes.bool,
    uiclass: PropTypes.string,
    uirole: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    value: PropTypes.string,
    checked: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    config: PropTypes.shape({
      required: PropTypes.bool,
      label: PropTypes.string,
      validator: PropTypes.func,
      validPattern: PropTypes.regexp,
      maskPattern: PropTypes.regexp
    })
  };

  static defaultProps = {
    componentClass: "input",
    uirole: "input",
    uiclass: null,
    disabled: false,
    className: null,
    children: null,
    value: "",
    checked: false,
    name: null,
    type: "text",
    onChange: null,
    config: {
      required: false,
      label: null,
      validator: null,
      validPattern: null,
      maskPattern: null
    }
  };

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

  renderLabel = (label, required) => {
    if (label !== null) {
      const validationClass = required ? " required" : "";
      return (
        <span key={`label_${this.state.renderKey}`} className={validationClass}>
          {label}
        </span>
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
      disabled,
      children,
      config,
      ...props
    } = this.props;

    const { required, label } = config;

    const wrapperClasses = {
      disabled,
      invalid: !this.state.valid
    };

    const classes = {
      disabled,
      required,
      invalid: !this.state.valid
    };

    delete props.uirole;
    delete props.type;

    const preParsedClass =
      className && className === "invalid"
        ? `${className} input-${type}`
        : `input-${type} theme-input`;

    if (type === "checkbox") {
      return (
        <div
          key={`wrapper_${this.state.renderKey}`}
          className={classNames(preParsedClass, wrapperClasses)}
        >
          {this.renderLabel(label, required)}
          <Component
            key={this.state.renderKey}
            {...props}
            type={type}
            className={classNames(className, classes)}
            onChange={this.handleOnChecked}
          />
          {children}
          {this.renderTypeComponents(type)}
        </div>
      );
    } else if (type === "number") {
      return (
        <div
          key={`wrapper_${this.state.renderKey}`}
          className={classNames(preParsedClass, wrapperClasses)}
        >
          {this.renderLabel(label, required)}
          <Component
            key={this.state.renderKey}
            {...props}
            type={type}
            className={classNames(className, classes)}
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
      );
    }
    return (
      <div
        key={`wrapper_${this.state.renderKey}`}
        className={classNames(preParsedClass, wrapperClasses)}
      >
        {this.renderLabel(label, required)}
        <Component
          key={this.state.renderKey}
          {...props}
          type={type}
          className={classNames(className, classes)}
          onChange={this.handleOnChange}
        />
        {children}
      </div>
    );
  }
}

export default setCoreClass("ui-input", Input);
