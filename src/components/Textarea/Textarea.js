/**
 * @namespace Style-O-Matic UI
 * @name Textarea
 * @author Steven Jackson
 * @external scssdir
 * @see ../../scss/components/Textarea
 * @example <Textarea>
             Example Content
           </Textarea>
 */
import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  setCorePropDefaults,
  setPropTypesA11y,
  getValidProps,
  ROLE
} from "../../lib";
import "./Textarea.css";

class Textarea extends CoreComponent {
  static propTypes = setPropTypesA11y({
    id: "string!",
    required: "bool",
    label: "string",
    validator: "func"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "textarea",
    uirole: ROLE.INPUT,
    required: false,
    label: null,
    validator: null
  });

  constructor(props) {
    super(props);
    this.value = props.value || "";
    this.valid = true;
    this.renderKey = `textarea_${props.uuid}`;
  }

  getValue = () => this.value;

  handleOnChange = e => {
    e.preventDefault();
    this.value = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  renderLabel = (id, label, required) => {
    if (label !== null) {
      const validationClass = required ? " required" : "";
      return (
        <label
          htmlFor={id}
          key={`label_${this.renderKey}`}
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
      renderAs: Component,
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

    const fieldName = name || id || this.renderKey;
    const fieldId = id || this.renderKey;
    const preParsedClass = "ui-textarea";
    const wrapperClasses = {
      disabled,
      invalid: !this.valid
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
            defaultValue={this.value}
          />
          {children}
        </div>
      </div>
    );
  }
}

export default Textarea;
