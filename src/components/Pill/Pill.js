/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import elementType from "prop-types-extra/lib/elementType";
import classNames from "classnames";
import { setCoreClass } from "../_utilities/CoreUtils";
import "./Pill.css";

const REMOVE_ROLE = "remove";
const ACTION_ROLE = "action";

class Pill extends React.Component {
  static propTypes = {
    componentClass: elementType,
    disabled: PropTypes.bool,
    config: PropTypes.shape({
      label: PropTypes.string,
      actionIcon: PropTypes.string,
      pillData: PropTypes.object,
      onRemove: PropTypes.func,
      onAction: PropTypes.func
    })
  };

  static defaultProps = {
    uirole: "pill",
    componentClass: "div",
    disabled: false,
    config: {
      label: "...",
      actionIcon: "fa-arrow-up",
      pillData: {},
      onRemove: null,
      onAction: null
    }
  };

  handleOnRemove = e => {
    const { pillData, onRemove } = this.props.config;
    if (!this.props.disabled && onRemove) {
      e.preventDefault();
      onRemove(pillData);
    }
  };

  handleOnAction = e => {
    const { pillData, onAction } = this.props.config;
    if (!this.props.disabled && onAction) {
      e.preventDefault();
      onAction(pillData);
    }
  };

  renderAction = () => {
    const { actionIcon, onAction } = this.props.config;
    if (onAction) {
      return (
        <span className="pill-action" onClick={this.handleOnAction}>
          <i className={`fa ${actionIcon}`} aria-hidden="true" />
        </span>
      );
    }
  };

  renderRemove = () => {
    const { onRemove } = this.props.config;
    if (onRemove) {
      return (
        <span className="pill-close" onClick={this.handleOnRemove}>
          <i className="fa fa-times" aria-hidden="true" />
        </span>
      );
    }
  };

  render() {
    const {
      componentClass: Component,
      uiclass,
      className,
      disabled,
      config,
      ...props
    } = this.props;

    const { label, onRemove, onAction } = config;

    const classes = {
      [uiclass]: true,
      disabled,
      padleft: onAction && !onRemove,
      padright: !onAction && onRemove,
      padboth: onAction && onRemove
    };

    delete props.uirole;

    const preParsedClass = className
      ? `${className} theme-button_hover`
      : "theme-button_hover";

    return (
      <Component {...props} className={classNames(preParsedClass, classes)}>
        {this.renderAction()}
        <span className="pill-text">{label}</span>
        {this.renderRemove()}
      </Component>
    );
  }
}

export default setCoreClass("ui-pill", Pill);
