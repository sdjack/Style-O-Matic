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
import "./Radio.css";

class Radio extends React.Component {
  static propTypes = getCorePropTypes(
    {
      id: "string!",
      required: "bool",
      label: "string",
      validator: "func",
      options: "array"
    },
    null,
    true
  );

  static defaultProps = getCorePropDefaults({
    componentClass: "div",
    uirole: Roles.INPUT,
    type: "text",
    checked: false,
    required: false,
    label: null,
    validator: null,
    validPattern: null,
    maskPattern: null,
    options: []
  });

  getValue = () => {
    let value = null;
    this.fields.map(field => {
      if (field.checked) {
        value = field.value;
      }
      return null;
    });
    return value;
  };

  handleOnRef = e => {
    this.fields.push(e);
  };

  fields = [];
  valid = true;
  renderKey = `radio_${uID()}`;

  renderLabel = (id, label, required) => {
    if (label !== null) {
      const validationClass = required ? " required" : "";
      return (
        <label
          key={`label_${this.renderKey}`}
          htmlFor={id}
          className={validationClass}
        >
          {label}
        </label>
      );
    }
    return <span />;
  };

  renderRadioOptions = (parentKey, options) => {
    const output = [];
    for (let i = 0; i < options.length; i++) {
      const optionData = options[i];
      const optionId = `${parentKey}_${i}`;
      output.push(
        <label key={optionId} htmlFor={optionId}>
          <input
            type="radio"
            id={optionId}
            name={parentKey}
            value={optionData.Value}
            ref={this.handleOnRef}
          />
          {optionData.Label}
        </label>
      );
    }
    return output;
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
      options,
      props
    } = getValidProps(this.props);

    delete props.name;
    delete props.id;

    const fieldId = name || id || this.renderKey;
    const preParsedClass = "ui-radio";
    const wrapperClasses = {
      disabled,
      invalid: !this.valid
    };

    this.fields = [];

    return (
      <div className={className}>
        {this.renderLabel(fieldId, label, required)}
        <Component
          key={this.renderKey}
          {...props}
          className={classNames(preParsedClass, wrapperClasses)}
        >
          {this.renderRadioOptions(fieldId, options)}
          {children}
        </Component>
      </div>
    );
  }
}

export default setCoreClass("ui-radio", Radio);
