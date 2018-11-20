/**
 * @memberof components
 * @namespace Modal
 * @author Steven Jackson
* @scss ../../scss/components/Modal
 * @example <Modal>
             Example Content
           </Modal>
 */
import React, { cloneElement } from "react";
import ReactDOM from "react-dom";
import {
  CoreComponent,
  setCorePropDefaults,
  setCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

import "./Modal.css";

class Modal extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.MODAL
  });

  constructor(props, context) {
    super(props, context);
    this.useParentNode = true;
    this.elevatedContainer = null;
    this.state = {
      shown: false
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
    this.setState({ shown: true });
  };

  handleClose = () => {
    this.setState({ shown: false });
  };

  handleToggle = () => {
    this.setState({ shown: !this.state.shown });
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
                {children}
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
