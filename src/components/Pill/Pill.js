import React from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  setPropTypesA11y,
  getValidProps,
  ROLE
} from "../../lib";
import "./Pill.css";

class Pill extends CoreComponent {
  static propTypes = setPropTypesA11y(null, {
    actionIcon: "string",
    pillData: "object",
    onRemove: "func",
    onAction: "func"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.PILL,
    actionIcon: "ui-icon ui-icon-star",
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
        <div
          className="ui-pill-action"
          role="presentation"
          onClick={this.handleOnAction}
        >
          <i className={actionIcon} aria-hidden="true" />
        </div>
      );
    }
    return null;
  };

  renderRemove = () => {
    const { onRemove } = this.props;
    if (onRemove) {
      return (
        <div
          className="ui-pill-action"
          role="presentation"
          onClick={this.handleOnRemove}
        >
          <i className="ui-icon ui-icon-close" aria-hidden="true" />
        </div>
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
