import _ from "lodash";
import React, { cloneElement } from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";
import ToastMessage from "./ToastMessage.js";
import "./Toasts.css";

class Toasts extends CoreComponent {
  static propTypes = getCorePropTypes({
    messages: "array"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TOASTS,
    messages: []
  });

  static Message = ToastMessage;

  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      activeQueue: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.messages &&
      nextProps.messages.length !== this.state.queue.length
    ) {
      if (this.removalTimer) {
        clearTimeout(this.removalTimer);
      }
      this.setState({
        active: true,
        queue: _.cloneDeep(nextProps.messages),
        activeQueue: _.cloneDeep(nextProps.messages)
      });
    }
  }

  renderToasts = () => {
    const self = this;
    const output = [];
    const items = self.state.queue;
    const activeItems = self.state.activeQueue;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i += 1) {
        const key = `toast-message_${i}`;
        const msg = items[i].split("|");
        output.push(
          <ToastMessage
            key={key}
            color={msg[1].toLowerCase()}
            active={!!activeItems[i]}
          >
            {msg[0]}
          </ToastMessage>
        );
      }
      if (self.removalTimer) {
        clearTimeout(self.removalTimer);
      }
      if (activeItems.length > 0) {
        self.removalTimer = setTimeout(() => {
          const garbage = self.state.activeQueue || [];
          garbage.pop();
          self.setState({ activeQueue: garbage });
        }, 5000);
      } else {
        self.removalTimer = setTimeout(() => {
          self.setState({ queue: [], activeQueue: [] });
        }, 5000);
      }
    }
    return output;
  };

  render() {
    const { renderAs: Component, props } = getValidProps(this.props);

    return <Component {...props}>{this.renderToasts()}</Component>;
  }
}

export default Toasts;
