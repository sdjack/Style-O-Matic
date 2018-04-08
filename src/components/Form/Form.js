/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import warning from "warning";
import {
  setCoreClass,
  createChainedFunction,
  prefix
} from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";
import Input from "../Input/Input.js";
import Radio from "../Radio/Radio.js";
import Select from "../Select/Select.js";
import Textarea from "../Textarea/Textarea.js";
import FormRow from "./FormRow.js";
import "./Form.css";

class Form extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "form",
    uirole: Roles.FORM
  });

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

  elRef = null;
  rows = [];
  fields = {};

  handleOnRef = e => {
    this.elRef = e;
  };

  handleForcedUpdate = () => {
    if (this.elRef) {
      this.forceUpdate();
    }
  };

  handleOnSubmit = e => {
    if (this.props.onSubmit) {
      const formData = this.getFormData();
      this.props.onSubmit(e, formData);
    }
  };

  renderRow = (child, props) => {
    const role = child.props.uirole || Roles.ROW;
    let ref = c => {
      this.rows.push(c);
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on form row components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  };

  renderInput = (child, props) => {
    const role = child.props.uirole || Roles.INPUT;
    const key = child.props.name || child.props.id;
    let ref = c => {
      this.fields.push({ key, value: c });
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on input components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, role)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      children,
      props
    } = getValidProps(this.props);

    this.rows = [];
    this.fields = [];

    delete props.onSubmit;

    return (
      <Component
        {...props}
        ref={this.handleOnRef}
        onSubmit={this.handleOnSubmit}
      >
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.ROW:
                return this.renderRow(child, { uiclass });
              case Roles.INPUT:
                return this.renderInput(child, { uiclass });
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

Form.Row = FormRow;
Form.Input = Input;
Form.Radio = Radio;
Form.Select = Select;
Form.Textarea = Textarea;

export default setCoreClass("ui-form", Form);
