import React, { cloneElement } from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Modal.css";

class Modal extends CoreComponent {
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.MODAL
  });

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    const { open } = this.state;

    return (
      <Component {...props} open={open}>
        {children}
      </Component>
    );
  }
}

export default Modal;
