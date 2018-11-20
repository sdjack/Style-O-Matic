/**
 * @memberof components
 * @namespace DatePicker
 * @author Steven Jackson
* @scss ../../scss/components/DatePicker
 * @example <DatePicker label="DatePicker" inputenabled iconenabled />
 */
import _ from "lodash";
import React from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import {
  CoreComponent,
  isModifiedEvent,
  isLeftClickEvent,
  uID,
  getValidProps,
  setPropTypesA11y,
  setPropDefaultsAutoId,
  ROLE
} from "../../lib";
import Calendar from "./Calendar.js";
import "./DatePicker.css";

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

class DatePicker extends CoreComponent {
  static propTypes = setPropTypesA11y({
    inputenabled: "bool",
    iconenabled: "bool",
    label: "string",
    expiredlock: "bool"
  });

  static defaultProps = setPropDefaultsAutoId({
    renderAs: "div",
    uirole: ROLE.DATEPICKER,
    label: null,
    inputenabled: false,
    iconenabled: false,
    expiredlock: false
  });

  constructor(props) {
    super(props);
    const { value } = props;
    let date;
    let dateLocale;
    let selected;
    if (!_.isNil(value) && value.indexOf) {
      const dateString = value.indexOf("Z") !== -1 ? value : `${value}Z`;
      date = new Date(dateString);
      dateLocale = date.toLocaleDateString({ timeZone: tz });
      selected = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    } else {
      date = new Date();
      dateLocale = "";
      selected = {
        day: 0,
        month: 0,
        year: 0
      };
    }
    const renderKey = `input_${props.uuid}`;
    this.useParentNode = true;
    this.state = {
      renderKey,
      open: false,
      loadedDate: date,
      value: dateLocale,
      viewYear: date.getFullYear(),
      viewType: "days",
      selectedDate: selected
    };
  }

  // componentWillReceiveProps = nextProps => {
  //   const { value } = nextProps;
  //   this.reset(value);
  // };

  WillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  }

  WillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  }

  reset = defaultDate => {
    let date;
    let dateLocale;
    let selected;
    if (!_.isNil(defaultDate) && defaultDate.indexOf) {
      const dateProp = defaultDate;
      const dateString =
        dateProp.indexOf("Z") !== -1 ? dateProp : `${dateProp}Z`;
      date = new Date(dateString);
      dateLocale = date.toLocaleDateString({ timeZone: tz });
      selected = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    } else {
      date = new Date();
      dateLocale = "";
      selected = {
        day: 0,
        month: 0,
        year: 0
      };
    }
    this.setState({
      loadedDate: date,
      value: dateLocale,
      viewType: "days",
      selectedDate: selected
    });
  };

  getValue = () => this.state.value;

  updateDateValues = (date, viewType, keepOpen) => {
    const { name, onSelect } = this.props;
    const value = date.toLocaleDateString({ timeZone: tz });
    const newData = this.state;
    newData.loadedDate = date;
    newData.value = value;
    newData.viewType = viewType;
    newData.selectedDate = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
    newData.open = keepOpen;
    this.setState(newData);
    if (onSelect) {
      onSelect(date.toISOString(), name);
    }
  };

  handleOnToggle = e => {
    if (isModifiedEvent(e) || !isLeftClickEvent(e) || !this.state.open) {
      return;
    }
    if (this.node && !this.node.contains(e.target)) {
      this.handleClose(e);
    }
  };

  handleClose = (event, eventDetails) => {
    if (!this.state.open) {
      return;
    }
    this.handleOnClick(event);
  };

  handleOnClear = () => {
    const { name, onSelect } = this.props;
    if (onSelect) {
      onSelect(null, name);
    }
    this.setState({ open: false });
  };

  handleOnChange = e => {
    const { name, onSelect } = this.props;
    if (onSelect) {
      onSelect(e.target.value, name);
    }
  };

  handleOnClick = e => {
    e.preventDefault();
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handlePrevClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const t = this.state.viewType;
    if (t === "years") {
      const newData = this.state;
      newData.viewYear = this.state.viewYear - 1;
      if (newData.viewYear >= Calendar.yearMin) {
        this.setState(newData);
      }
    } else {
      const date = this.state.loadedDate;
      if (t === "months") {
        date.setYear(date.getFullYear() - 1);
        if (date.getFullYear() < Calendar.yearMin) {
          return date.setYear(date.getFullYear() + 1);
        }
      } else {
        date.setMonth(date.getMonth() - 1);
        if (date.getFullYear() < Calendar.yearMin) {
          return date.setMonth(date.getMonth() + 1);
        }
      }
      this.updateDateValues(date, t, true);
    }
    return true;
  };

  handleNextClick = e => {
    e.preventDefault();
    e.stopPropagation();
    const t = this.state.viewType;
    if (t === "years") {
      const newData = this.state;
      newData.viewYear = this.state.viewYear + 1;
      if (newData.viewYear <= Calendar.yearViewMax) {
        this.setState(newData);
      }
    } else {
      const date = this.state.loadedDate;
      if (t === "months") {
        date.setYear(date.getFullYear() + 1);
        if (date.getFullYear() > Calendar.yearMax) {
          return date.setYear(date.getFullYear() - 1);
        }
      } else {
        date.setMonth(date.getMonth() + 1);
        if (date.getFullYear() > Calendar.yearMax) {
          return date.setMonth(date.getMonth() - 1);
        }
      }
      this.updateDateValues(date, t, true);
    }
    return true;
  };

  handleViewChange = e => {
    e.preventDefault();
    const attr = e.target.attributes;
    this.setState({ viewType: attr.viewtype.value });
  };

  handleDateChange = e => {
    e.preventDefault();
    const attr = e.target.attributes;
    const d = attr.day.value;
    const m = attr.month.value;
    const y = attr.year.value;
    const date = new Date(y, m, d);
    this.updateDateValues(date, "days", true);
  };

  handleDateSelect = e => {
    e.preventDefault();
    const attr = e.target.attributes;
    const d = attr.day.value;
    const m = attr.month.value;
    const y = attr.year.value;
    const t = this.state.viewType;
    const date = new Date(y, m, d);
    this.updateDateValues(date, t, false);
  };

  renderSingleDay = (monthVal, data) => {
    const { expiredlock } = this.props;
    const sd = this.state.selectedDate;
    const keyName = `${data.day}-${data.month}-${data.year}`;
    const selectedClass =
      data.year === sd.year && data.month === sd.month && data.day === sd.day
        ? " theme-content_active"
        : "";
    if ((expiredlock && !data.enabled) || data.month !== monthVal) {
      return (
        <td
          key={`day-cell_${keyName}`}
          className={`ui-datepicker-day-cell ui-datepicker-cell-disabled ${selectedClass}`}
        >
          <span
            key={`day-button_${keyName}`}
            className={`ui-datepicker-day ui-datepicker-disabled ${selectedClass}`}
          >
            {data.day}
          </span>
        </td>
      );
    }
    return (
      <td
        key={`day-cell_${keyName}`}
        className={`ui-datepicker-day-cell theme-content-item ${selectedClass}`}
      >
        <span
          key={`day-button_${keyName}`}
          className={`ui-datepicker-day theme-content-item ${selectedClass}`}
          day={data.day}
          month={data.month}
          year={data.year}
          onClick={this.handleDateSelect}
          onKeyDown={this.handleDateSelect}
          role="presentation"
        >
          {data.day}
        </span>
      </td>
    );
  };

  renderSingleWeek = (monthVal, weekData) => (
    <tr key={uID()}>
      {this.renderSingleDay(monthVal, weekData[0])}
      {this.renderSingleDay(monthVal, weekData[1])}
      {this.renderSingleDay(monthVal, weekData[2])}
      {this.renderSingleDay(monthVal, weekData[3])}
      {this.renderSingleDay(monthVal, weekData[4])}
      {this.renderSingleDay(monthVal, weekData[5])}
      {this.renderSingleDay(monthVal, weekData[6])}
    </tr>
  );

  renderCalendar = (monthVal, yearVal) => {
    const output = [];
    if (!_.isNil(yearVal) && !_.isNil(Calendar.data[yearVal])) {
      const monthData = Calendar.data[yearVal][monthVal];
      if (monthData) {
        for (let i = 0; i < 5; i += 1) {
          output.push(this.renderSingleWeek(monthVal, monthData[i]));
        }
      }
    }
    return output;
  };

  renderMonthRow = value => {
    const monthVal = parseInt(value, 10);
    const date = this.state.loadedDate;
    const dayVal = date.getDate();
    const viewMonth = date.getMonth();
    const yearVal = date.getFullYear();
    const class1 = viewMonth === monthVal ? " ui-datepicker-cell-active" : "";
    const class2 =
      viewMonth === monthVal + 1 ? " ui-datepicker-cell-active" : "";
    const class3 =
      viewMonth === monthVal + 2 ? " ui-datepicker-cell-active" : "";
    return (
      <tr key={uID()}>
        <td className={`ui-datepicker-month-cell ${class1}`}>
          <span
            className="ui-datepicker-control"
            day={dayVal}
            month={monthVal}
            year={yearVal}
            onClick={this.handleDateChange}
            onKeyDown={this.handleDateChange}
            role="presentation"
          >
            {Calendar.monthName[monthVal]}
          </span>
        </td>
        <td className={`ui-datepicker-month-cell ${class2}`}>
          <span
            className="ui-datepicker-control"
            day={dayVal}
            month={monthVal + 1}
            year={yearVal}
            onClick={this.handleDateChange}
            onKeyDown={this.handleDateChange}
            role="presentation"
          >
            {Calendar.monthName[monthVal + 1]}
          </span>
        </td>
        <td className={`ui-datepicker-month-cell ${class3}`}>
          <span
            className="ui-datepicker-control"
            day={dayVal}
            month={monthVal + 2}
            year={yearVal}
            onClick={this.handleDateChange}
            onKeyDown={this.handleDateChange}
            role="presentation"
          >
            {Calendar.monthName[monthVal + 2]}
          </span>
        </td>
      </tr>
    );
  };

  renderYearRow = value => {
    const yearVal = parseInt(value, 10);
    const date = this.state.loadedDate;
    const dayVal = date.getDate();
    const monthVal = date.getMonth();
    const viewYear = date.getFullYear();
    const class1 = viewYear === yearVal ? " ui-datepicker-cell-active" : "";
    const class2 = viewYear === yearVal + 1 ? " ui-datepicker-cell-active" : "";
    const class3 = viewYear === yearVal + 2 ? " ui-datepicker-cell-active" : "";
    const class4 = viewYear === yearVal + 3 ? " ui-datepicker-cell-active" : "";
    return (
      <tr key={uID()}>
        <td className={`ui-datepicker-year-cell ${class1}`}>
          <span
            className="ui-datepicker-control"
            day={dayVal}
            month={monthVal}
            year={yearVal}
            onClick={this.handleDateChange}
            onKeyDown={this.handleDateChange}
            role="presentation"
          >
            {yearVal}
          </span>
        </td>
        <td className={`ui-datepicker-year-cell ${class2}`}>
          <span
            className="ui-datepicker-control"
            day={dayVal}
            month={monthVal}
            year={yearVal + 1}
            onClick={this.handleDateChange}
            onKeyDown={this.handleDateChange}
            role="presentation"
          >
            {yearVal + 1}
          </span>
        </td>
        <td className={`ui-datepicker-year-cell ${class3}`}>
          <span
            className="ui-datepicker-control"
            day={dayVal}
            month={monthVal}
            year={yearVal + 2}
            onClick={this.handleDateChange}
            onKeyDown={this.handleDateChange}
            role="presentation"
          >
            {yearVal + 2}
          </span>
        </td>
        <td className={`ui-datepicker-year-cell ${class4}`}>
          <span
            className="ui-datepicker-control"
            day={dayVal}
            month={monthVal}
            year={yearVal + 3}
            onClick={this.handleDateChange}
            onKeyDown={this.handleDateChange}
            role="presentation"
          >
            {yearVal + 3}
          </span>
        </td>
      </tr>
    );
  };

  renderWindow = disabled => {
    if (disabled) {
      return <span />;
    }
    const activeDate = !_.isNil(this.state.loadedDate)
      ? this.state.loadedDate
      : Calendar.today;
    const viewMonth = activeDate.getMonth();
    let viewYear = activeDate.getFullYear();
    const windowClass = this.state.open
      ? "ui-datepicker-window ui--open"
      : "ui-datepicker-window";
    const footer = [];
    if (this.state.viewType === "years") {
      viewYear = this.state.viewYear;
      const years = [];
      years.push(this.renderYearRow(viewYear));
      years.push(this.renderYearRow(viewYear + 4));
      years.push(this.renderYearRow(viewYear + 8));
      years.push(this.renderYearRow(viewYear + 12));
      years.push(this.renderYearRow(viewYear + 16));
      years.push(this.renderYearRow(viewYear + 20));
      if (!_.isNil(this.state.value)) {
        footer.push(
          <tfoot key={uID()}>
            <tr>
              <td colSpan={4}>
                <span
                  className="ui-datepicker-clear"
                  onClick={this.handleOnClear}
                  onKeyDown={this.handleOnClear}
                  role="presentation"
                >
                  Remove Selected Date
                </span>
              </td>
            </tr>
          </tfoot>
        );
      }
      return (
        <div className={windowClass}>
          <table className="ui-datepicker-table">
            <thead>
              <tr>
                <th className="ui-datepicker-control-cell">
                  <span
                    className="ui-datepicker-control"
                    onClick={this.handlePrevClick}
                    onKeyDown={this.handlePrevClick}
                    role="presentation"
                  >
                    <i className="ui-icon ui-icon-left" />
                  </span>
                </th>
                <th colSpan={2} className="ui-datepicker-header-cell">
                  <span className="ui-datepicker-control">Select a year</span>
                </th>
                <th className="ui-datepicker-control-cell">
                  <span
                    className="ui-datepicker-control"
                    onClick={this.handleNextClick}
                    onKeyDown={this.handleNextClick}
                    role="presentation"
                  >
                    <i className="ui-icon ui-icon-right" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>{years}</tbody>
            {footer}
          </table>
        </div>
      );
    } else if (this.state.viewType === "months") {
      const months = [];
      months.push(this.renderMonthRow(0));
      months.push(this.renderMonthRow(3));
      months.push(this.renderMonthRow(6));
      months.push(this.renderMonthRow(9));
      if (!_.isNil(this.state.value)) {
        footer.push(
          <tfoot key={uID()}>
            <tr>
              <td colSpan={3}>
                <span
                  className="ui-datepicker-clear"
                  onClick={() => {}}
                  onKeyDown={this.handleOnClear}
                  role="presentation"
                >
                  Remove Selected Date
                </span>
              </td>
            </tr>
          </tfoot>
        );
      }
      return (
        <div className={windowClass}>
          <table className="ui-datepicker-table">
            <thead>
              <tr>
                <th className="ui-datepicker-control-cell">
                  <span
                    className="ui-datepicker-control"
                    onClick={this.handlePrevClick}
                    onKeyDown={this.handlePrevClick}
                    role="presentation"
                  >
                    <i className="ui-icon ui-icon-left" />
                  </span>
                </th>
                <th className="ui-datepicker-header-cell">
                  <span
                    className="ui-datepicker-control"
                    viewtype="years"
                    onClick={this.handleViewChange}
                    onKeyDown={this.handleViewChange}
                    role="presentation"
                  >
                    {viewYear}
                  </span>
                </th>
                <th className="ui-datepicker-control-cell">
                  <span
                    className="ui-datepicker-control"
                    onClick={this.handleNextClick}
                    onKeyDown={this.handleNextClick}
                    role="presentation"
                  >
                    <i className="ui-icon ui-icon-right" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>{months}</tbody>
            {footer}
          </table>
        </div>
      );
    }
    const headerText = `${Calendar.monthName[viewMonth]} ${viewYear}`;
    if (!_.isNil(this.state.value)) {
      footer.push(
        <tfoot key={uID()}>
          <tr>
            <td colSpan={7}>
              <span
                className="ui-datepicker-clear"
                onClick={this.handleOnClear}
                onKeyDown={this.handleOnClear}
                role="presentation"
              >
                Remove Selected Date
              </span>
            </td>
          </tr>
        </tfoot>
      );
    }
    return (
      <div className={windowClass}>
        <table className="ui-datepicker-table">
          <thead>
            <tr>
              <th colSpan={1} className="ui-datepicker-control-cell">
                <span
                  className="ui-datepicker-control"
                  onClick={this.handlePrevClick}
                  onKeyDown={this.handlePrevClick}
                  role="presentation"
                >
                  <i className="ui-icon ui-icon-left" />
                </span>
              </th>
              <th colSpan={5} className="ui-datepicker-header-cell">
                <span
                  className="ui-datepicker-control"
                  viewtype="months"
                  onClick={this.handleViewChange}
                  onKeyDown={this.handleViewChange}
                  role="presentation"
                >
                  {headerText}
                </span>
              </th>
              <th colSpan={1} className="ui-datepicker-control-cell">
                <span
                  className="ui-datepicker-control"
                  onClick={this.handleNextClick}
                  onKeyDown={this.handleNextClick}
                  role="presentation"
                >
                  <i className="ui-icon ui-icon-right" />
                </span>
              </th>
            </tr>
            <tr>
              <th className="ui-datepicker-weekday-cell ui-datepicker-bordered-b-r">
                <span className="ui-datepicker-weekday">
                  {Calendar.dayAbbrev[0]}
                </span>
              </th>
              <th className="ui-datepicker-weekday-cell ui-datepicker-bordered-b-r">
                <span className="ui-datepicker-weekday">
                  {Calendar.dayAbbrev[1]}
                </span>
              </th>
              <th className="ui-datepicker-weekday-cell ui-datepicker-bordered-b-r">
                <span className="ui-datepicker-weekday">
                  {Calendar.dayAbbrev[2]}
                </span>
              </th>
              <th className="ui-datepicker-weekday-cell ui-datepicker-bordered-b-r">
                <span className="ui-datepicker-weekday">
                  {Calendar.dayAbbrev[3]}
                </span>
              </th>
              <th className="ui-datepicker-weekday-cell ui-datepicker-bordered-b-r">
                <span className="ui-datepicker-weekday">
                  {Calendar.dayAbbrev[4]}
                </span>
              </th>
              <th className="ui-datepicker-weekday-cell ui-datepicker-bordered-b-r">
                <span className="ui-datepicker-weekday">
                  {Calendar.dayAbbrev[5]}
                </span>
              </th>
              <th className="ui-datepicker-weekday-cell ui-datepicker-bordered-b">
                <span className="ui-datepicker-weekday">
                  {Calendar.dayAbbrev[6]}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>{this.renderCalendar(viewMonth, viewYear)}</tbody>
          {footer}
        </table>
      </div>
    );
  };

  renderToggle = (id, iconenabled, inputenabled, disabled, invalid) => {
    const { expiredlock } = this.props;
    const icon = [];
    const invalidClass = invalid ? " invalid" : "";
    let expiredClass = "";
    let iconClass = "";
    if (expiredlock && Calendar.isExpired(this.state.loadedDate)) {
      expiredClass = " ui-datepicker-expired";
    }
    if (disabled) {
      const label = !_.isNil(this.state.value)
        ? this.state.value
        : "MM/DD/YYYY";
      return (
        <span className="ui-datepicker-toggle ui-datepicker-disabled">
          {icon}
          {label}
        </span>
      );
    }
    if (inputenabled) {
      if (iconenabled) {
        iconClass = " prepend-icon";
        icon.push(
          <i
            key={`ui-datepicker-icon_${id}`}
            id={`ui-datepicker-icon_${this.props.uuid}`}
            className="ui-icon ui-icon-calendar ui-datepicker-icon"
            aria-hidden="true"
          />
        );
      }
      return (
        <div
          key={`ui-datepicker-toggle_${id}`}
          id={`ui-datepicker-toggle_${this.props.uuid}`}
          className={`ui-input-text ${expiredClass}${iconClass}${invalidClass}`}
          role="presentation"
          onKeyUp={this.handleOnClick}
          onClick={this.handleOnClick}
        >
          {icon}
          <input
            key={`ui-datepicker-input_${id}`}
            id={`ui-datepicker-input_${this.props.uuid}`}
            type="text"
            className={`ui-datepicker-text ui-form-input ${invalidClass}`}
            onChange={this.handleOnChange}
            value={this.state.value}
            placeholder="MM/DD/YYYY"
          />
        </div>
      );
    }
    if (iconenabled) {
      icon.push(
        <i
          key={`ui-datepicker-icon_${id}`}
          id={`ui-datepicker-icon_${this.props.uuid}`}
          className="ui-icon ui-icon-calendar ui-datepicker-icon"
          aria-hidden="true"
        />
      );
    }
    const label = !_.isNil(this.state.value) ? this.state.value : "MM/DD/YYYY";
    return (
      <div
        key={`ui-datepicker-toggle_${id}`}
        id={`ui-datepicker-toggle_${this.props.uuid}`}
        className={`ui-datepicker-toggle ${expiredClass}`}
        role="presentation"
        onKeyUp={this.handleOnClick}
        onClick={this.handleOnClick}
      >
        {icon}
        <span className={`ui-datepicker-text ${invalidClass}`}>{label}</span>
      </div>
    );
  };

  renderLabel = (id, label, required) => {
    if (label !== null) {
      const validationClass = required ? "label required-label" : "label";
      return (
        <span key={`label_${this.state.renderKey}`} className={validationClass}>
          {label}
        </span>
      );
    }
    return <span />;
  };

  render() {
    const {
      renderAs: Component,
      id,
      required,
      disabled,
      label,
      iconenabled,
      inputenabled,
      invalid,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    const fieldId = id || this.state.renderKey;

    return (
      <Component {...props} ref={this.onSetRef}>
        {this.renderLabel(fieldId, label, required)}
        {this.renderToggle(id, iconenabled, inputenabled, disabled, invalid)}
        {this.renderWindow(disabled)}
      </Component>
    );
  }
}

export default DatePicker;
