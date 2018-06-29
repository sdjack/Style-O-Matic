import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getPropTypesA11y,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Select.css";

class Select extends CoreComponent {
  static propTypes = getPropTypesA11y({
    id: "string!",
    required: "bool",
    label: "string",
    validator: "func",
    options: "array"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "select",
    uirole: ROLE.INPUT,
    required: false,
    label: null,
    validator: null,
    options: []
  });

  constructor(props) {
    super(props);
    let defaultValue = props.value;
    const renderKey = `select_${this.GUID}`;
    if (!defaultValue) {
      defaultValue = props.options[0] ? props.options[0].Value : "";
    }
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

  renderSelectOptions = options => {
    const output = [];
    for (let i = 0; i < options.length; i++) {
      const optionData = options[i];
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

    const fieldName = name || id || this.state.renderKey;
    const fieldId = id || this.state.renderKey;
    const preParsedClass = "ui-select";
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
          >
            {children}
            {this.renderSelectOptions(options)}
          </Component>
        </div>
      </div>
    );
  }
}

export default Select;
