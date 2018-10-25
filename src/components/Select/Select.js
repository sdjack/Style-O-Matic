/**
 * @namespace Style-O-Matic UI
 * @name Select
 * @author Steven Jackson
 * @external scssdir
 * @see ../../scss/components/Select
 * @example <Select>
             Example Content
           </Select>
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
import "./Select.css";

class Select extends CoreComponent {
  static propTypes = setPropTypesA11y({
    id: "string!",
    required: "bool",
    label: "string",
    validator: "func",
    options: "array"
  });

  static defaultProps = setCorePropDefaults({
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
    this.renderKey = `select_${props.uuid}`;
    if (!defaultValue) {
      defaultValue = props.options[0] ? props.options[0].value : "";
    }
    this.state = {
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

  renderSelectOptions = options => {
    const output = [];
    for (let i = 0; i < options.length; i += 1) {
      const optionData = options[i];
      output.push(
        <option
          key={`option_${i}_${this.renderKey}`}
          id={`option_${i}`}
          name={`option_${i}`}
          value={optionData.value}
        >
          {optionData.label}
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

    const fieldName = name || id || this.renderKey;
    const fieldId = id || name || this.renderKey;
    const preParsedClass = "ui-select";
    const wrapperClasses = {
      disabled,
      invalid: !this.state.valid
    };

    return (
      <div className={className}>
        {this.renderLabel(fieldId, label, required)}
        <div
          key={`wrapper_${this.renderKey}`}
          className={classNames(preParsedClass, wrapperClasses)}
        >
          <Component
            key={this.renderKey}
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
