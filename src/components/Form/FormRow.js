import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  getCorePropDefaults,
  ROLE
} from "../../lib";

class FormRow extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    uirole: ROLE.ROW
  });

  getFieldValue = fieldKey => {
    let value = null;
    this.fields.map(field => {
      if (field.key === fieldKey) {
        value = field.element.getValue();
      }
      return null;
    });
    return value;
  };

  getAllFieldValues = () => {
    const output = [];
    this.fields.map(field => {
      output.push({ key: field.key, value: field.element.getValue() });
      return null;
    });
    return output;
  };

  fields = [];

  renderLabel = label => {
    if (label !== null) {
      return (
        <span key={`label_${this.state.renderKey}`} className="label">
          {label}
        </span>
      );
    }
    return <span />;
  };

  renderChild = (child, props) => {
    const role = child.props.uirole || ROLE.INPUT;
    const key = child.props.name || child.props.id;
    let ref = c => {
      this.fields.push({ key, element: c });
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
    const { children, className, label, props, inherited } = getValidProps(
      this.props
    );

    this.fields = [];
    return (
      <div {...props}>
        {this.renderLabel(label)}
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.INPUT:
                return this.renderChild(child, inherited);
              default:
                return child;
            }
          }
          return child;
        })}
      </div>
    );
  }
}

export default FormRow;
