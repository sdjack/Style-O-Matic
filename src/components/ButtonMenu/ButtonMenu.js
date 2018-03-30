/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import {
  uID,
  isLeftClickEvent,
  isModifiedEvent
} from "../_utilities/CoreUtils.js";
import "./ButtonMenu.css";

function getInitials(source) {
  if (typeof source !== "undefined" && source !== "Unassigned") {
    const initials = source.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
    return initials.join("");
  }
  return "?";
}

export class ButtonMenu extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    dropclass: PropTypes.string,
    disabled: PropTypes.bool,
    config: PropTypes.shape({
      name: PropTypes.string,
      userId: PropTypes.number,
      referenceId: PropTypes.number,
      assignedTo: PropTypes.number,
      onChangeAssigned: PropTypes.func,
      onUnassign: PropTypes.func,
      directory: PropTypes.arrayOf(
        PropTypes.shape({
          Name: PropTypes.string,
          Key: PropTypes.number
        })
      )
    })
  };

  static defaultProps = {
    className: "button-menu",
    dropclass: "anchor-below anchor-right",
    disabled: false,
    config: {
      name: "Unassigned",
      userId: null,
      referenceId: null,
      assignedTo: null,
      onChangeAssigned: null,
      onUnassign: null,
      directory: []
    }
  };

  state = {
    renderKey: `button-menu_${uID()}`,
    isFocused: false,
    isActive: false,
    searchValue: "",
    activeUsers: []
  };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutside, false);
  }

  componentDidMount() {
    const { directory } = this.props.config;
    this.buildUsersTable(directory);
  }

  componentWillReceiveProps(nextProps) {
    if (
      typeof nextProps.config !== "undefined" &&
      typeof nextProps.config.directory !== "undefined"
    ) {
      this.buildUsersTable(nextProps.config.directory);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, false);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (
      isModifiedEvent(event) ||
      !isLeftClickEvent(event) ||
      !this.state.isActive
    ) {
      return;
    }
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.handleClose();
    }
  };

  buildUsersTable = directory => {
    if (typeof directory !== "undefined") {
      const newUsers = [];
      const values = Object.values(directory);
      for (let i = 0; i <= values.length; i += 1) {
        const user = values[i];
        if (user && user.Name !== "") {
          newUsers.push(user);
        }
      }
      this.setState({ activeUsers: newUsers });
    }
  };

  handleClose = () => {
    if (this.state.isActive || this.state.isFocused) {
      this.setState({ isActive: false, isFocused: false, searchValue: "" });
      const { directory } = this.props.config;
      this.buildUsersTable(directory);
    }
  };

  interceptClick = e => {
    e.stopPropagation();
    e.preventDefault();
  };

  handleOnClick = e => {
    e.stopPropagation();
    e.preventDefault();
    if (!this.props.disabled) {
      const newActive = !this.state.isActive;
      this.setState({ isActive: newActive });
    }
  };

  handleOnFocus = e => {
    e.stopPropagation();
    e.preventDefault();
    // this.setState({isActive: true, isFocused: true});
  };

  handleOnBlur = e => {
    e.stopPropagation();
    e.preventDefault();
    // this.setState({isFocused: false});
  };

  handleOnChange = e => {
    e.stopPropagation();
    e.preventDefault();
    const newValue = e.target.value;
    const { directory } = this.props.config;
    if (
      this.state.searchValue !== newValue &&
      typeof directory !== "undefined"
    ) {
      const keyText = newValue.replace(/\W/g, "").toLowerCase();
      const newUsers = [];
      const values = Object.values(directory);
      if (newValue !== "") {
        for (let i = 0; i <= values.length; i += 1) {
          const user = values[i];
          if (user) {
            const searchString = user.Name.replace(/\W/g, "").toLowerCase();
            if (searchString.indexOf(keyText) !== -1 && newUsers.length < 3) {
              newUsers.push(user);
            }
          }
        }
      } else {
        for (let i = 0; i <= values.length; i += 1) {
          const user = values[i];
          if (user && user.Name !== "") {
            const searchString = user.Name.replace(/\W/g, "").toLowerCase();
            if (searchString.indexOf(keyText) !== -1) {
              newUsers.push(user);
            }
          }
        }
      }
      this.setState({ searchValue: newValue, activeUsers: newUsers });
    }
  };

  handleProxyAssign = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ isActive: false });
    const { onChangeAssigned, referenceId } = this.props.config;
    if (onChangeAssigned) {
      const newValue = e.target.attributes.userid
        ? e.target.attributes.userid.value
        : null;
      onChangeAssigned(referenceId, newValue);
    }
  };

  handleProxyUnassign = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ isActive: false });
    const { onUnassign, referenceId } = this.props.config;
    if (onUnassign) {
      const newValue = e.target.attributes.userid
        ? e.target.attributes.userid.value
        : null;
      onUnassign(referenceId, newValue);
    }
  };

  handleDummyClick = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ isActive: true, isFocused: true });
  };

  renderUsers = (userId, assignedTo) => {
    const rows = [];
    const options = this.state.activeUsers;
    if (assignedTo === userId) {
      rows.push(
        <button
          key={`button-menu-assignto-me_${this.state.renderKey}`}
          className="button-menu-dropdown-item theme-input bold"
          userid={userId}
          onClick={e => this.handleDummyClick(e)}
        >
          <i
            className="fa fa-check button-menu-active-item"
            aria-hidden="true"
          />
          Assigned To Me
        </button>
      );
    } else {
      rows.push(
        <button
          key={`button-menu-assignto-me_${this.state.renderKey}`}
          className="button-menu-dropdown-item theme-input"
          userid={userId}
          onClick={e => this.handleProxyAssign(e)}
        >
          Assign To Me
        </button>
      );
    }
    if (!assignedTo) {
      rows.push(
        <button
          key={`button-menu-assignto-none_${this.state.renderKey}`}
          className="button-menu-dropdown-item theme-input bold"
          userid={null}
          onClick={e => this.handleDummyClick(e)}
        >
          <i
            className="fa fa-check button-menu-active-item"
            aria-hidden="true"
          />
          Unassigned
        </button>
      );
    } else {
      rows.push(
        <button
          key={`button-menu-assignto-none_${this.state.renderKey}`}
          className="button-menu-dropdown-item theme-input"
          userid={null}
          onClick={e => this.handleProxyUnassign(e)}
        >
          Unassign
        </button>
      );
    }
    if (typeof options !== "undefined") {
      for (let i = 0; i < options.length; i += 1) {
        const item = options[i];
        if (item.Key !== userId) {
          if (item.Key === assignedTo) {
            rows.push(
              <button
                key={`button-menu-dropdown-item theme-input_${i}_${
                  this.state.renderKey
                }`}
                className="button-menu-dropdown-item theme-input bold"
                userid={item.Key}
                onClick={e => this.handleDummyClick(e)}
              >
                <i
                  className="fa fa-check button-menu-active-item"
                  aria-hidden="true"
                />
                {item.Name}
              </button>
            );
          } else {
            rows.push(
              <button
                key={`button-menu-dropdown-item theme-input_${i}_${
                  this.state.renderKey
                }`}
                className="button-menu-dropdown-item theme-input"
                userid={item.Key}
                onClick={e => this.handleProxyAssign(e)}
              >
                {item.Name}
              </button>
            );
          }
        }
      }
    }
    return rows;
  };

  renderContent = (userId, assignedTo, dropclass, disabled) => {
    if (!disabled && this.state.isActive) {
      return (
        <div
          key={`button-menu-content_${this.state.renderKey}`}
          className={`button-menu-dropdown ${dropclass}`}
        >
          <div className="button-menu-input-item input-text unstyled prepend-icon">
            <i
              className="fa fa-search input-icon prepended"
              aria-hidden="true"
            />
            <input
              type="text"
              id={`button-menu-input_${this.state.renderKey}`}
              key={`button-menu-input_${this.state.renderKey}`}
              name={`button-menu-user-search_${this.state.renderKey}`}
              placeholder="Search"
              value={this.state.searchValue}
              onChange={e => this.handleOnChange(e)}
              onClick={e => this.handleOnFocus(e)}
            />
          </div>
          <div className="button-menu-dropdown-list">
            {this.renderUsers(userId, assignedTo)}
          </div>
        </div>
      );
    }
    return <span />;
  };

  render() {
    const { className, dropclass, config, disabled } = this.props;
    const { name, userId, assignedTo } = config;
    const initials = getInitials(name);
    let engagedClass = className ? ` ${className}` : "";
    engagedClass += this.state.isActive ? " open" : "";
    engagedClass += !disabled ? " enabled" : "";
    return (
      <div
        key={this.state.renderKey}
        className={`button-menu${engagedClass}`}
        ref={this.setWrapperRef}
      >
        <button
          key={`button-menu-toggle_${this.state.renderKey}`}
          className="theme-button theme-hover button-menu-toggle"
          onClick={e => this.interceptClick(e)}
          onMouseUp={e => this.handleOnClick(e)}
        >
          <span className="button-menu-text">{initials}</span>
          <span className="button-menu-text-alt">{name}</span>
          <span className="button-menu-caret" />
        </button>
        {this.renderContent(userId, assignedTo, dropclass, disabled)}
      </div>
    );
  }
}

export default ButtonMenu;
