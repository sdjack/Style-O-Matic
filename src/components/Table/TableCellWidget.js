import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  isModifiedEvent,
  isLeftClickEvent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class TableCellWidget extends CoreComponent {
  static propTypes = getCorePropTypes({
    columnid: "number",
    rowid: "number",
    rowtype: "string",
    filterable: "bool",
    filtered: "bool",
    filtering: "func",
    sortable: "bool",
    sorted: "number",
    sorting: "func",
    editable: "bool",
    edited: "bool",
    editing: "func"
  });

  static defaultProps = getCorePropDefaults({
    columnid: 0,
    rowid: 0,
    uirole: ROLE.CELL,
    rowtype: "body",
    filterable: false,
    filtered: false,
    filtering: null,
    sortable: false,
    sorted: 0,
    sorting: null,
    editable: false,
    edited: false,
    editing: null
  });

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      filterValue: ""
    };
  }

  WillMount() {
    document.addEventListener("mousedown", this.handleOnToggle, false);
  }

  WillUnmount() {
    document.removeEventListener("mousedown", this.handleOnToggle, false);
  }

  handleOnToggle = e => {
    if (isModifiedEvent(e) || !isLeftClickEvent(e) || !this.state.open) {
      return;
    }
    if (this.node && !this.node.contains(e.target)) {
      // console.log("handleClickOutside",e.target);
      this.handleClose(e);
    }
  };

  handleClose = (event, eventDetails) => {
    if (!this.state.open) {
      return;
    }
    this.handleOnClick(event);
  };

  handleClickShield = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleSetFilter = e => {
    e.preventDefault();
    const { filtering } = this.props;
    this.setState({ open: false });
    filtering(this);
  };

  handleChangeFilter = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ filterValue: value });
    const dataColumn = this.props.data.getColumn(this.props.columnid);
    dataColumn.setFilterSearch(value);
  };

  handleOnClick = e => {
    e.preventDefault();
    const {
      filterable,
      filtering,
      sortable,
      sorting,
      editable,
      editing
    } = this.props;
    if (filterable) {
      const { open } = this.state;
      this.setState({ open: !open });
    } else if (sortable && sorting) {
      sorting(this);
    } else if (editable && editing) {
      editing(this);
    }
  };

  renderFilterWidget = () => {
    const output = [];
    if (this.props.filterable) {
      const { open } = this.state;
      const filterkey = `table-filter-input-${this.props.uuid}`;
      const filterClass = {
        active: open
      };
      output.push(
        <div
          className={classNames("table-filter", filterClass)}
          key={filterkey}
        >
          <div className="table-filter-outer-wrapper">
            <div className="table-filter-input-wrapper">
              <input
                id={filterkey}
                name={filterkey}
                type="text"
                className="table-filter-input"
                onClick={this.handleClickShield}
                onChange={this.handleChangeFilter}
                value={this.state.filterValue}
              />
            </div>
            <div className="table-filter-button-wrapper">
              <input
                type="submit"
                className="table-filter-button"
                onClick={this.handleSetFilter}
                value="&#10004;"
              />
            </div>
          </div>
        </div>
      );
    }
    return output;
  };

  render() {
    const {
      className,
      filterable,
      filtering,
      filtered,
      sortable,
      sorting,
      sorted,
      editable,
      editing,
      edited,
      rowtype,
      children,
      props
    } = getValidProps(this.props);

    const headerClasses = {
      interactive: filterable || sortable || editable,
      filtered,
      "sorted-asc": sorted === 1,
      "sorted-desc": sorted === 2,
      edited
    };

    return (
      <th
        {...props}
        ref={this.onSetRef}
        onClick={this.handleOnClick}
        className={classNames(className, headerClasses)}
      >
        {this.renderFilterWidget()}
        {children}
      </th>
    );
  }
}

export default TableCellWidget;
