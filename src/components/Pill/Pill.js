/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getPropTypesA11y,
  getValidProps,
  ROLE
} from "../../lib";
import "./Pill.css";

class Pill extends CoreComponent {
  static propTypes = getPropTypesA11y(null, {
    actionIcon: "string",
    pillData: "object",
    onRemove: "func",
    onAction: "func"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.PAGINATION,
    actionIcon: "fa fa-arrow-up",
    pillData: {},
    onRemove: null,
    onAction: null
  });

  handleOnRemove = e => {
    const { pillData, onRemove } = this.props;
    if (!this.props.disabled && onRemove) {
      e.preventDefault();
      onRemove(pillData);
    }
  };

  handleOnAction = e => {
    const { pillData, onAction } = this.props;
    if (!this.props.disabled && onAction) {
      e.preventDefault();
      onAction(pillData);
    }
  };

  renderAction = () => {
    const { actionIcon, onAction } = this.props;
    if (onAction) {
      return (
        <span
          className="ui-pill-action"
          role="presentation"
          onClick={this.handleOnAction}
        >
          <i className={actionIcon} aria-hidden="true" />
        </span>
      );
    }
    return null;
  };

  renderRemove = () => {
    const { onRemove } = this.props;
    if (onRemove) {
      return (
        <span
          className="ui-pill-close"
          role="presentation"
          onClick={this.handleOnRemove}
        >
          <i className="fa fa-times" aria-hidden="true" />
        </span>
      );
    }
    return null;
  };

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);

    return (
      <Component {...props}>
        {this.renderAction()}
        <span className="ui-pill-text">{children}</span>
        {this.renderRemove()}
      </Component>
    );
  }
}

export default Pill;
