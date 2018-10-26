/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import _ from "lodash";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class ToastMessage extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOAST
  });

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return (
      <Component {...props}>
        <div className="ui-toasts-toast-icon">&#128365;</div>
        <div className="ui-toasts-toast-msg">{children}</div>
        <div
          className="ui-toasts-toast-close"
          role="presentation"
          onClick={this.props.onClick}
        >
          &#10005;
        </div>
      </Component>
    );
  }
}

export default ToastMessage;
