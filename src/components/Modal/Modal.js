import React, { cloneElement } from "react";
import ReactDOM from "react-dom";
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
  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.MODAL
  });

  static Header = ModalHeader;
  static Content = ModalContent;
  static Footer = ModalFooter;

  constructor(props, context) {
    super(props, context);
    this.useParentNode = true;
    this.elevatedContainer = null;
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    if (!this.elevatedContainer) {
      this.elevatedContainer = document.getElementById("modal-container");
      if (!this.elevatedContainer) {
        this.elevatedContainer = document.createElement("div");
        this.elevatedContainer.setAttribute("id", "modal-container");
        document.body.appendChild(this.elevatedContainer);
      }
    }
  }

  componentDidUpdate() {
    this.renderElevated(this.props);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClickShield = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  renderElevated(activeProps) {
    const {
      renderAs: Component,
      className,
      children,
      props,
      inherited
    } = getValidProps(activeProps, this.state);

    if (this.elevatedContainer) {
      ReactDOM.render(
        <Component {...props}>
          <div
            className="ui-modal-outer-wrapper"
            role="presentation"
            onClick={this.handleClose}
          >
            <div
              className="ui-modal-inner-wrapper"
              role="presentation"
              onClick={this.handleClickShield}
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
          </div>
        </Component>,
        this.elevatedContainer
      );
    }
  }

  render() {
    this.parentNode.onclick = this.handleToggle;
    return <span ref={this.onSetRef} />;
  }
}

export default Modal;
