/**
 * @memberof components
 * @namespace Accordion
 * @author Steven Jackson
 * @scss ../../scss/components/Accordion
 * @example <Accordion>
   <Accordion.Title>
     Example Title
   </Accordion.Title>
   <Accordion.Content>
     Example Content
   </Accordion.Content>
 </Accordion>
 */
import React, { cloneElement } from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropTypes,
  setPropDefaultsAutoId,
  ROLE
} from "../../lib";
import AccordionTitle from "./AccordionTitle.js";
import AccordionContent from "./AccordionContent.js";
import "./Accordion.css";

class Accordion extends CoreComponent {
  static propTypes = setCorePropTypes({
    caret: "bool"
  });

  static defaultProps = setPropDefaultsAutoId({
    renderAs: "dl",
    uirole: ROLE.ACCORDION,
    caret: false
  });

  static Title = AccordionTitle;
  static Content = AccordionContent;

  constructor(props) {
    super(props);
    this.maxIndex = -1;
    this.state = {
      activeItem: `${props.id}_item_0`
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
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(
      child,
      this.setChildProps(role, ref, {
        ...props,
        accordionindex: activeItem,
        active: activeItem === this.state.activeItem
      })
    );
  };

  renderCore = () => {
    const {
      renderAs: Component,
      id,
      caret,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    this.maxIndex = -1;

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.TITLE:
                return this.renderChild(
                  child,
                  {
                    ...inherited,
                    caret,
                    onClick: this.handleOnClick
                  },
                  id,
                  this.getTitleIndex
                );
              case ROLE.CONTENT:
                return this.renderChild(
                  child,
                  {
                    ...inherited,
                    caret
                  },
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
  };
}

export default Accordion;
