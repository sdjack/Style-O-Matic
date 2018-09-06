import React, { cloneElement } from "react";
import cx from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  ROLE,
  uID
} from "../../lib";
import TableHead from "./TableHead.js";
import TableBody from "./TableBody.js";
import TableFoot from "./TableFoot.js";
import TableRow from "./TableRow.js";
import TableCell from "./TableCell.js";
import TableData from "./models/TableData.js";
import Pagination from "../Pagination/Pagination.js";
import "./Table.css";

function ParseSectionData(data, UUID, colSpan) {
  const output = [];
  const rowCount = data.length;
  for (let i = 0; i < rowCount; i += 1) {
    const readRow = data[i];
    const dataRow = [];
    for (let x = 0; x < colSpan; x += 1) {
      const column = readRow[x];
      if (column instanceof Object) {
        const { content, ...props } = column;
        dataRow.push(
          <TableCell key={`td_${UUID}_cell_${i}${x}`} {...props}>
            {content}
          </TableCell>
        );
      } else {
        dataRow.push(
          <TableCell key={`td_${UUID}_cell_${i}${x}`}>{column}</TableCell>
        );
      }
    }
    output.push(<TableRow key={`td_${UUID}_cellrow${i}`}>{dataRow}</TableRow>);
  }
  return output;
}

class Table extends CoreComponent {
  static propTypes = getCorePropTypes({
    bordered: "bool",
    padded: "bool",
    hover: "bool",
    spaced: "bool",
    striped: "bool",
    pagination: "number"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "table",
    uirole: ROLE.TABLE,
    bordered: false,
    padded: false,
    hover: false,
    spaced: false,
    striped: false,
    pagination: null
  });

  static Head = TableHead;
  static Body = TableBody;
  static Foot = TableFoot;
  static Row = TableRow;
  static Cell = TableCell;

  static FactoryData = data => {
    const output = [];
    const UUID = uID();
    let colSpan = 0;
    if (data.head && data.head[0]) {
      colSpan = data.head[0].length;
      const compiled = ParseSectionData(data.head, UUID, colSpan);
      output.push(<TableHead key={`thead_${UUID}`}>{compiled}</TableHead>);
    }
    if (data.body && data.body[0]) {
      colSpan = colSpan === 0 ? data.body[0].length : colSpan;
      const compiled = ParseSectionData(data.body, UUID, colSpan);
      output.push(<TableBody key={`tbody_${UUID}`}>{compiled}</TableBody>);
    }
    if (data.foot && data.foot[0]) {
      colSpan = colSpan === 0 ? data.foot[0].length : colSpan;
      const compiled = ParseSectionData(data.foot, UUID, colSpan);
      output.push(<TableFoot key={`tfoot_${UUID}`}>{compiled}</TableFoot>);
    }
    return output;
  };

  constructor(props) {
    super(props);
    this.columns = {};
    this.data = TableData.init(this);
  }

  /* eslint-disable */

  handleFilter = node => {
    this.forceUpdate();
  };

  handleSort = node => {
    const { rowid, columnid } = node.props;
    const dataColumn = this.data.getColumn(columnid);
    dataColumn.changeSortState();
    this.forceUpdate();
  };

  handleEdit = node => {
    this.forceUpdate();
  };

  handlePageChange = pageNum => {
    this.data.setPagination(pageNum);
    this.forceUpdate();
  };
  /* eslint-enable */

  renderInteractiveChild = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      data: this.data,
      uiclass: this.childPrefix(child.props.uirole),
      filtering: this.handleFilter,
      sorting: this.handleSort,
      editing: this.handleEdit
    });
  };

  renderChild = (child, props) => {
    const role = child.props.uirole;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      data: this.data,
      uiclass: this.childPrefix(child.props.uirole)
    });
  };

  preRenderBody = (children, inherited) => {
    const output = [];
    React.Children.map(children, child => {
      if (
        typeof child.props !== "undefined" &&
        typeof child.props.uirole !== "undefined" &&
        child.props.uirole === TableBody.defaultProps.uirole
      ) {
        output.push(this.renderChild(child, inherited));
      }
      return null;
    });
    return output;
  };

  renderPagination = () => {
    const output = [];
    if (this.props.pagination) {
      const pageConfig = this.data.getPagination(this);
      const { uuid } = this.props;
      output.push(
        <TableFoot key={`tfoot_pagination_${uuid}`} data={this.data}>
          <TableRow key={`td_pagination_${uuid}_cellrow`}>
            <TableCell
              key={`td_pagination_${uuid}_cell`}
              colSpan={pageConfig.cols}
            >
              <Pagination
                pageTotal={pageConfig.pageTotal}
                pageNum={pageConfig.pageNum}
                onPageChange={this.handlePageChange}
              />
            </TableCell>
          </TableRow>
        </TableFoot>
      );
    }
    return output;
  };

  render() {
    const {
      renderAs: Component,
      className,
      bordered,
      padded,
      hover,
      spaced,
      striped,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    const classes = {
      "ui-table-bordered": bordered,
      "ui-table-padded": padded,
      "ui-table-hover": hover,
      "ui-table-spaced": spaced,
      "ui-table-striped": striped
    };

    const uiClassCore = cx(className, classes);
    delete props.className;

    const bodyRows = this.preRenderBody(children, inherited);

    return (
      <Component className={uiClassCore} {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole === TableHead.defaultProps.uirole
          ) {
            return this.renderInteractiveChild(child, inherited);
          }
          return null;
        })}
        {bodyRows}
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined" &&
            child.props.uirole !== TableHead.defaultProps.uirole &&
            child.props.uirole !== TableBody.defaultProps.uirole
          ) {
            switch (child.props.uirole) {
              case TableFoot.defaultProps.uirole:
                return this.renderInteractiveChild(child, inherited);
              default:
                return child;
            }
          }
          return null;
        })}
        {this.renderPagination()}
      </Component>
    );
  }
}

export default Table;
