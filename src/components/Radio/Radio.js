/**
 * @memberof components
 * @namespace Radio
 * @author Steven Jackson
* @scss ../../scss/components/Radio
 * @example <Radio>
             Example Content
           </Radio>
 */
import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  setPropTypesA11y,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Radio.css";

class Radio extends CoreComponent {
  static propTypes = setPropTypesA11y({
    id: "string!",
    required: "bool",
    label: "string",
    validator: "func",
    options: "array"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.INPUT,
    type: "text",
    checked: false,
    required: false,
    label: null,
    validator: null,
    validPattern: null,
    maskPattern: null,
    options: []
  });

  constructor(props) {
    super(props);
    this.value = props.value;
    if (!this.value) {
      this.value = props.options[0] ? props.options[0].value : "";
    }
    this.fields = [];
    this.valid = true;
    this.renderKey = `radio_${props.uuid}`;
  }

  getValue = () => this.value;

  getCheckedValue = () => {
    let value = null;
    this.fields.map(field => {
      if (field.checked) {
        value = field.value;
      }
      return null;
    });
    return value;
  };

  handleOnChange = e => {
    this.value = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handleOnRef = e => {
    this.fields.push(e);
  };

  renderLabel = (fieldId, label, required) => {
    if (label !== null) {
      const validationClass = required ? "label required-label" : "label";
      return (
        <span key={`label_${fieldId}`} className={validationClass}>
          {label}
        </span>
      );
    }
    return <span />;
  };

  renderRadioOptions = (fieldId, options) => {
    const output = [];
    for (let i = 0; i < options.length; i += 1) {
      const optionData = options[i];
      const optionId = `${fieldId}_${i}`;
      output.push(
        <label key={optionId} htmlFor={optionId}>
          <input
            type="radio"
            id={optionId}
            name={fieldId}
            onChange={this.handleOnChange}
            value={optionData.value}
            ref={this.handleOnRef}
          />
          {optionData.label}
        </label>
      );
    }
    return output;
  };

  render() {
    const {
      renderAs: Component,
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

export default Radio;
