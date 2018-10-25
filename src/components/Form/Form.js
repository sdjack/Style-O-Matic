/**
 * @namespace Style-O-Matic UI
 * @name Form
 * @author Steven Jackson
 * @external scssdir
 * @see ../../scss/components/Form
 */
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

/**
 * @example <Form>
   <Form.Row>
     <Input id="demo-input1" label="Text" />
     <Input id="demo-input2" label="Password" type="password" />
     <Input id="demo-input3" label="Color" type="color" />
   </Form.Row>
   <Form.Row>
     <Select
       id="demo-input4"
       label="Select"
       options={[
         { value: "Option1", label: "Select Option 1" },
         { value: "Option2", label: "Select Option 2" },
         { value: "Option3", label: "Select Option 3" },
         { value: "Option4", label: "Select Option 4" },
         { value: "Option5", label: "Select Option 5" },
         { value: "Option6", label: "Select Option 6" },
         { value: "Option7", label: "Select Option 7" }
       ]}
     />
     <Input id="demo-input6" label="Time" type="time" />
     <Input id="demo-input7" label="Number" type="number" />
   </Form.Row>
   <Form.Row>
     <Input id="demo-input8" label="Email" type="email" />
     <Input id="demo-input9" label="Telephone" type="tel" />
     <Input id="demo-input10" label="URL" type="url" />
   </Form.Row>
   <Form.Row>
     <Input id="demo-input5a" label="Date (Browser Native)" type="date" />
     <DatePicker
       id="demo-input5b"
       label="DatePicker (SoM Component)"
       inputenabled
       iconenabled
     />
   </Form.Row>
   <Form.Row>
     <Radio
       id="demo-input11"
       label="Radio"
       options={[
         { value: "Radio1", label: "Radio 1" },
         { value: "Radio2", label: "Radio 2" },
         { value: "Radio3", label: "Radio 3" },
         { value: "Radio4", label: "Radio 4" },
         { value: "Radio5", label: "Radio 5" },
         { value: "Radio6", label: "Radio 6" },
         { value: "Radio7", label: "Radio 7" }
       ]}
     />
   </Form.Row>
   <Form.Row>
     <Input
       id="demo-input12"
       label="Checkbox 1"
       type="checkbox"
       value="Check"
       required
     />
     <Input
       id="demo-input13"
       label="Checkbox 2"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input14"
       label="Checkbox 3"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input15"
       label="Checkbox 4"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input16"
       label="Checkbox 5"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input17"
       label="Checkbox 6"
       type="checkbox"
       value="Check"
     />
     <Input
       id="demo-input18"
       label="Checkbox 7"
       type="checkbox"
       value="Check"
     />
   </Form.Row>
   <Form.Row>
     <Textarea id="demo-input19" label="Text Area" />
   </Form.Row>
   <Form.Row>
     <Input id="demo-input99" label="SUBMIT" type="submit" color="blue" />
   </Form.Row>
 </Form>
 */
