/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Dropdown from "../Dropdown/Dropdown.js";
import SelectBoxItem from "./SelectBoxItem.js";
import { setCoreClass, uID } from "../_utilities/CoreUtils.js";
import "./SelectBox.css";

class SelectBox extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    uiclass: PropTypes.string,
    uirole: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    config: PropTypes.shape({
      name: PropTypes.string,
      placeholder: PropTypes.string,
      invalid: PropTypes.bool,
      searchable: PropTypes.bool,
      onSelect: PropTypes.func,
      value: PropTypes.node,
      selectData: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    })
  };

  static defaultProps = {
    uirole: "selectbox",
    uiclass: null,
    className: null,
    children: null,
    disabled: false,
    config: {
      name: "selectbox_input",
      placeholder: "",
      invalid: false,
      searchable: false,
      onSelect: null,
      value: null,
      selectData: {}
    }
  };

  state = {
    renderKey: `selectbox_${uID()}`,
    searchValue: ""
  };

  componentDidMount() {
    const { selectData, value } = this.props.config;
    this.buildOptionsTable(selectData);
    if (value) {
      this.setState({ searchValue: value });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { selectData, value } = nextProps.config;
    this.buildOptionsTable(selectData);
    if (value) {
      this.setState({ searchValue: value });
    }
  }

  activeOptions = null;

  buildOptionsTable = options => {
    if (typeof options !== "undefined") {
      const newOptions = {};
      const keys = Object.keys(options);
      const values = Object.values(options);
      for (let i = 0; i <= values.length; i += 1) {
        const item = values[i];
        if (item && item.Name !== "") {
          newOptions[keys[i]] = item;
        }
      }
      this.activeOptions = newOptions;
    }
  };

  searchOptionsTable = newValue => {
    const { selectData } = this.props.config;
    if (typeof selectData !== "undefined") {
      if (newValue) {
        const keyText = newValue.replace(/\W/g, "").toLowerCase();
        const newOptions = [];
        const keys = Object.keys(selectData);
        const values = Object.values(selectData);
        for (let i = 0; i <= values.length; i += 1) {
          const item = values[i];
          if (item && item.Name !== "") {
            if (!keyText || keyText === null || !/[^\s]/.test(keyText)) {
              newOptions[keys[i]] = item;
            } else {
              const searchString = item.Name.replace(/\W/g, "").toLowerCase();
              if (searchString.indexOf(keyText) !== -1) {
                newOptions[keys[i]] = item;
              }
            }
          }
        }
        this.activeOptions = newOptions;
      } else {
        this.activeOptions = selectData;
      }
    }
  };

  handleOnChange = e => {
    const { value } = e.target;
    if (/[^\s]/.test(value)) {
      this.searchOptionsTable(value);
    } else {
      const { selectData } = this.props.config;
      this.buildOptionsTable(selectData);
    }
    this.props.config.invalid = false;
    // console.log(this.props.config);
    this.setState({ searchValue: value });
  };

  handleOnClosed = () => {
    const { selectData } = this.props.config;
    this.buildOptionsTable(selectData);
  };

  handleOnSelect = obj => {
    const { onSelect } = this.props.config;
    this.props.config.invalid = false;
    // console.log(this.props.config);
    this.setState({ searchValue: obj.Name });
    if (onSelect) {
      onSelect(obj, this.props.config.name);
    }
    document.dispatchEvent(new MouseEvent("mousedown"));
  };

  renderOptions = () => {
    const rows = [];
    const options = this.activeOptions;
    const keys = Object.keys(options);
    const values = Object.values(options);
    for (let i = 0; i <= values.length; i += 1) {
      const item = values[i];
      const key = keys[i];
      if (item) {
        const selectedClass =
          item.Name === this.state.searchValue
            ? " dropdown-option-selected"
            : "";
        rows.push(
          <SelectBoxItem
            key={`${this.state.renderKey}_option_${key}`}
            className={`dropdown-option theme-input${selectedClass}`}
            data={item}
            name={item.Name}
            callback={this.handleOnSelect}
          />
        );
      }
    }
    return rows;
  };

  render() {
    const { uiclass, className, disabled, config, ...props } = this.props;
    // console.log(this.props.config);
    const { name, placeholder, selectData, invalid } = config;
    const themeClass = invalid ? "" : " theme-input";
    const invalidClass = invalid ? " invalid" : "";

    const classes = {
      [uiclass]: true,
      disabled
    };

    delete props.uirole;

    if (!this.activeOptions) {
      this.activeOptions = selectData;
    }

    return (
      <Dropdown
        {...props}
        className={classNames(className, classes)}
        id={this.state.renderKey}
        onClose={this.handleOnClosed}
      >
        <Dropdown.Toggle
          key={`selectbox-toggle_${this.state.renderKey}`}
          id={`selectbox-toggle_${this.state.renderKey}`}
          className={`selectbox input-text fill-width ${themeClass}${invalidClass}`}
          componentClass="div"
        >
          <input
            key={`selectbox-input_${this.state.renderKey}`}
            type="text"
            name={name}
            className={`fill-parent ${invalidClass}`}
            value={this.state.searchValue}
            placeholder={placeholder}
            onChange={this.handleOnChange}
            onFocus={this.handleOnChange}
          />
          <span className="fa selectbox-caret" />
        </Dropdown.Toggle>
        <Dropdown.Content
          key={`selectbox-window_${this.state.renderKey}`}
          id={`selectbox-window_${uID()}`}
        >
          {this.renderOptions()}
        </Dropdown.Content>
      </Dropdown>
    );
  }
}

export default setCoreClass("ui-selectbox", SelectBox);
