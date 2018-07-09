import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropDefaults,
  getCorePropTypes,
  getValidProps,
  ROLE
} from "../../lib";

class TableCell extends CoreComponent {
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
      showFilter: false,
      filterValue: ""
    };
  }

  handleClickShield = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleClickFilter = e => {
    e.preventDefault();
    const { filterable, filtering } = this.props;
    const { showFilter } = this.state;
    if (filterable) {
      this.setState({ showFilter: !showFilter });
    }
  };

  handleSetFilter = e => {
    e.preventDefault();
    const { filtering } = this.props;
    this.setState({ showFilter: false });
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
    const { sortable, sorting, editable, editing } = this.props;
    if (sortable && sorting) {
      sorting(this);
    } else if (editable && editing) {
      editing(this);
    }
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

    if (rowtype && rowtype === "head") {
      const headerClasses = {
        interactive: filterable || sortable || editable,
        filtered,
        "sorted-asc": sorted === 1,
        "sorted-desc": sorted === 2,
        edited
      };

      if (filterable) {
        const { showFilter } = this.state;
        const filterkey = `table-filter-input-${this.props.uuid}`;
        const filterClass = {
          active: showFilter
        };
        return (
          <th
            {...props}
            onClick={this.handleClickFilter}
            className={classNames(className, headerClasses)}
          >
            <div className={classNames("table-filter-input", filterClass)}>
              <div className="ui-form-row">
                <div className="ui-input-text">
                  <input
                    id={filterkey}
                    name={filterkey}
                    type="text"
                    onClick={this.handleClickShield}
                    onChange={this.handleChangeFilter}
                    value={this.state.filterValue}
                  />
                </div>
                <div className="append-button">
                  <input
                    type="submit"
                    className="ui-button"
                    onClick={this.handleSetFilter}
                    value="+"
                  />
                </div>
              </div>
            </div>
            {children}
          </th>
        );
      }
      return (
        <th
          {...props}
          onClick={this.handleOnClick}
          className={classNames(className, headerClasses)}
        >
          {children}
        </th>
      );
    }

    return <td {...props}>{children}</td>;
  }
}

export default TableCell;
