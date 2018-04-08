/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import warning from "warning";
import { createChainedFunction, prefix } from "../_utilities/CoreUtils.js";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils.js";
import { Roles } from "../_utilities/Enum.js";

class FormRow extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    uirole: Roles.ROW
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

  renderChild = (child, props) => {
    const role = child.props.uirole || Roles.INPUT;
    const key = child.props.name || child.props.id;
    let ref = c => {
      this.fields.push({ key, element: c });
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on table-row components.");
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
    const { uiclass, children, props } = getValidProps(this.props);

    this.fields = [];
    return (
      <div {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.INPUT:
                return this.renderChild(child, { uiclass });
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
