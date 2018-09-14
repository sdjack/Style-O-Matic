import React from "react";
import ReactDOM from "react-dom";
import {
  CoreComponent,
  getValidProps,
  getElementType,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class ToolBarTitle extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.TITLE,
    text: ""
  });

  constructor(...args) {
    super(...args);
    this.state = {
      dynamicText: null
    };
  }

  onEventDispatch = (eventName, eventData, eventSenders) => {
    if (eventName === "scroll" && this.node) {
      const { text, children } = this.props;
      const currentTitle = text || children;
      let newTitle = "";
      for (let i = 0; i < eventSenders.length; i += 1) {
        const sender = eventSenders[i];
        if (sender) {
          const { scrollTop } = this.node.offsetParent;
          const { offsetTop, clientHeight } = this.node;
          const targetOffset = offsetTop + clientHeight;
          const pageOffset = scrollTop + 70;
          const titleText = sender.props.children;
          if (scrollTop > 0 && targetOffset < pageOffset) {
            newTitle = titleText;
          }
        }
      }
      if (currentTitle !== newTitle) {
        this.setState({ dynamicText: newTitle });
      }
    }
  };

  render() {
    const { text, children, props } = getValidProps(this.props);

    const { dynamicText } = this.state;

    const ElementType = getElementType(ToolBarTitle, this.props);
    const titleText = dynamicText || text || children;

    return <ElementType {...props}>{titleText}</ElementType>;
  }
}

export default ToolBarTitle;
