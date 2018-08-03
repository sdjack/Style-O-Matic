import _ from "lodash";
import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class ToastMessage extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOAST
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return (
      <Component {...props}>
        <div className="ui-toasts-toast-msg">{children}</div>
      </Component>
    );
  }
}

export default ToastMessage;
