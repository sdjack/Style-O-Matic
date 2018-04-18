/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */
import _ from "lodash";
import React, { cloneElement } from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";
import "./Toasts.css";

class Toasts extends CoreComponent {
  static propTypes = getCorePropTypes({
    messages: "array"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: "toasts",
    messages: []
  });

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.messages &&
      nextProps.messages.length !== this.state.messages.length
    ) {
      if (this.removalTimer) {
        clearTimeout(this.removalTimer);
      }
      this.setState({ messages: nextProps.messages });
    }
  }

  renderToasts = () => {
    const output = [];
    const items = this.state.messages;
    for (let i = 0; i < items.length; i++) {
      const msg = items[i];
      output.push(
        <span className="ui-toasts-toast" key={`toast-message_${i}`}>
          {msg}
        </span>
      );
    }
    if (this.removalTimer) {
      clearTimeout(this.removalTimer);
    }
    this.removalTimer = setTimeout(() => {
      const { messages } = this.state;
      messages.pop();
      this.setState({ messages });
    }, 5000);
    return output;
  };

  render() {
    const { renderAs: Component, props } = getValidProps(this.props);

    return <Component {...props}>{this.renderToasts()}</Component>;
  }
}

export default Toasts;
