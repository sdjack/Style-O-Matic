import React, { cloneElement } from "react";
import cx from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalFooter from "./ModalFooter";

import "./Modal.css";

class Modal extends CoreComponent {
  static propTypes = getCorePropTypes({
    slidefrom: "string"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.MODAL,
    slidefrom: "top"
  });

  static Header = ModalHeader;
  static Content = ModalContent;
  static Footer = ModalFooter;

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleToggle = () => {
    console.log(this);
    this.setState({ open: !this.state.open });
  };

  handleClickShield = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const {
      renderAs: Component,
      className,
      slidefrom,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    delete props.className;
    const pn = this.getParentNode();
    pn.onclick = this.handleToggle;

    return (
      <Component
        {...props}
        className={cx("ui-modal", { open: this.state.open })}
        ref={this.onSetRef}
      >
        <div
          className={cx("ui-modal-wrapper", {
            [`from-${slidefrom}`]: slidefrom
          })}
          role="presentation"
          onClick={this.handleClose}
        >
          <div
            className="ui-modal-dialog"
            role="presentation"
            onClick={this.handleClickShield}
          >
            <div
              className="ui-modal-close"
              role="presentation"
              onClick={this.handleClose}
            >
              <i className="ui-icon ui-icon-close" aria-hidden="true" />
            </div>
            {React.Children.map(children, child => {
              if (
                typeof child.props !== "undefined" &&
                typeof child.props.uirole !== "undefined"
              ) {
                return this.renderChild(child, inherited);
              }
              return child;
            })}
          </div>
        </div>
      </Component>
    );
  }
}

export default Modal;
