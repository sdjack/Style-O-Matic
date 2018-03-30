/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import classNames from "classnames";
import warning from "warning";
import {
  setCoreClass,
  createChainedFunction,
  prefix,
  uID
} from "../_utilities/CoreUtils";
import {
  getValidProps,
  getCorePropTypes,
  getCorePropDefaults
} from "../_utilities/PropUtils";
import { Roles } from "../_utilities/Enum";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
import "./Accordion.css";

class Accordion extends React.Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults({
    componentClass: "dl",
    uirole: "accordion"
  });

  constructor(props) {
    super(props);
    this.GUID = uID();
    this.maxIndex = -1;
    this.state = {
      activeItem: `accordion_${this.GUID}_item_0`
    };
  }

  getTitleIndex = () => {
    this.maxIndex = this.maxIndex + 1;
    return this.maxIndex;
  };

  getContentIndex = () => this.maxIndex;

  handleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const { accordionindex } = e.currentTarget.attributes;
    const activeItem = accordionindex.value;
    if (activeItem === this.state.activeItem) {
      this.setState({ activeItem: "" });
    } else {
      this.setState({ activeItem });
    }
  };

  renderChild = (child, props, parentId, getIndex) => {
    const role = child.props.uirole;
    const index = getIndex();
    const activeItem = `${parentId}_item_${index}`;
    let ref = c => {
      this[activeItem] = c;
    };
    if (typeof child.ref === "string") {
      warning(false, "String refs are not supported on accordion components.");
    } else {
      ref = createChainedFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      accordionindex: activeItem,
      active: activeItem === this.state.activeItem,
      uiclass: prefix(props, role)
    });
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      [uiclass]: true
    };

    this.maxIndex = -1;
    const id = `accordion_${this.GUID}`;

    return (
      <Component {...props} className={classNames(className, classes)} id={id}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case Roles.TITLE:
                return this.renderChild(
                  child,
                  {
                    uiclass,
                    onClick: this.handleOnClick
                  },
                  id,
                  this.getTitleIndex
                );
              case Roles.CONTENT:
                return this.renderChild(
                  child,
                  { uiclass },
                  id,
                  this.getContentIndex
                );
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

Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default setCoreClass("ui-accordion", Accordion);
