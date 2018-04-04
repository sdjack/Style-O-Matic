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

  fields = [];

  renderChild = (child, props) => {
    let ref = c => {
      this.fields.push(c);
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on table-row components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uiclass: prefix(props, child.props.uirole)
    });
  };

  render() {
    const { uiclass, children, props } = getValidProps(this.props);

    console.log(this.props);

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
