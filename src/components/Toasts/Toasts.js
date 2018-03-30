/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import classNames from "classnames";
import { setCoreClass, isUsable } from "../_utilities/CoreUtils";
// import "./Toasts.css";

class Toasts extends React.Component {
  static propTypes = {
    componentClass: elementType,
    messages: PropTypes.array
  };

  static defaultProps = {
    uirole: "toasts",
    componentClass: "div",
    messages: []
  };

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
      this.setState({ messages });
    }
  }

  renderToasts = () => {
    const output = [];
    const items = this.state.messages;
    for (let i = 0; i < items.length; i++) {
      const msg = items[i];
      output.push(
        <span className="toast" key={`toast-message_${i}`}>
          {msg}
        </span>
      );
    }
    if (this.removalTimer) {
      clearTimeout(this.removalTimer);
    }
    this.removalTimer = setTimeout(() => {
      const messages = this.state.messages;
      messages.pop();
      this.setState({ messages });
    }, 5000);
    return output;
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      ...props
    } = this.props;

    const classes = {
      [uiclass]: true,
      active: this.state.messages.length > 0
    };

    return (
      <Component {...props} className={classNames(className, classes)}>
        {this.renderToasts()}
      </Component>
    );
  }
}

export default setCoreClass("toasts", Toasts);
