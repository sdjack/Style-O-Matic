import React, { cloneElement } from "react";
import {
  CoreComponent,
  setCorePropTypes,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import Input from "../Input/Input.js";
import Radio from "../Radio/Radio.js";
import Select from "../Select/Select.js";
import Textarea from "../Textarea/Textarea.js";
import FormRow from "./FormRow.js";
import "./Form.css";

class Form extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "form",
    uirole: ROLE.FORM
  });

  static Row = FormRow;
  static Input = Input;
  static Radio = Radio;
  static Select = Select;
  static Textarea = Textarea;

  getFieldValue = fieldKey => {
    let value = null;
    for (let i = 0; i < this.rows.length; i += 1) {
      const row = this.rows[i];
      const fieldValue = row.getFieldValue(fieldKey);
      if (fieldValue) {
        value = fieldValue;
      }
    }
    if (!value) {
      this.fields.map(field => {
        if (field.key === fieldKey) {
          value = field.element.getValue();
        }
        return null;
      });
    }
    return value;
  };

  getFormData = () => {
    const formData = {};
    for (let i = 0; i < this.rows.length; i += 1) {
      const row = this.rows[i];
      const rowFields = row.getAllFieldValues();
      for (let x = 0; x < rowFields.length; x += 1) {
        const field = rowFields[x];
        formData[field.key] = field.value;
      }
    }
    this.fields.map(field => {
      formData[field.key] = field.element.getValue();
      return null;
    });
    return formData;
  };

  rows = [];
  fields = [];

  handleForcedUpdate = () => {
    if (this.node) {
      this.forceUpdate();
    }
  };

  handleOnInvalid = e => {
    // console.log(e);
  };

  handleOnSubmit = e => {
    if (this.props.onSubmit) {
      const formData = this.getFormData();
      this.props.onSubmit(e, formData);
    }
  };

  renderRow = (child, props) => {
    const role = child.props.uirole || ROLE.ROW;
    let ref = c => {
      if (c) {
        this.rows.push(c);
      }
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: this.childPrefix(role)
    });
  };

  renderInput = (child, props) => {
    const role = child.props.uirole || ROLE.INPUT;
    const key = child.props.name || child.props.id;
    let ref = c => {
      if (c) {
        this.fields.push({ key, element: c });
      }
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: this.childPrefix(role)
    });
  };

  render() {
    const { renderAs: Component, children, props, inherited } = getValidProps(
      this.props
    );

    this.rows = [];
    this.fields = [];

    delete props.onSubmit;

    return (
      <Component {...props} ref={this.onSetRef} onSubmit={this.handleOnSubmit}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.ROW:
                return this.renderRow(child, inherited);
              case ROLE.INPUT:
                return this.renderInput(child, inherited);
              case ROLE.DATEPICKER:
                return this.renderInput(child, inherited);
              default:
                return child;
            }
          }
          return child;
        })}
      </Component>
    );
  }
}

export default Form;
