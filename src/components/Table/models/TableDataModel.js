import _ from "lodash";
import RowModel from "./RowModel.js";
import ColumnModel from "./ColumnModel.js";
/* eslint-disable */

export default class TableDataModel {
  constructor(node) {
    this.component = node;
    this.columns = {};
    this.registry = {};
    this.rows = [];
    this.pageNum = 1;
    this.pageTotal = 1;
  }

  setRow = node => {
    const { rowid } = node.props;
    const tag = `row${rowid}`;
    if (!this.registry[tag]) {
      this.registry[tag] = true;
      this.rows.push(new RowModel(rowid));
    }
  };

  getRow = rowid => this.rows[`row${rowid}`];

  setColumn = node => {
    const { rowid, columnid, children } = node.props;
    const columnTag = `column${columnid}`;
    if (!this.columns[columnTag]) {
      this.columns[columnTag] = new ColumnModel(columnid);
    }
    this.columns[columnTag].setValue(rowid, children);
  };

  getColumn = columnid => {
    const columnTag = `column${columnid}`;
    if (!this.columns[columnTag]) {
      this.columns[columnTag] = new ColumnModel(columnid);
    }
    return this.columns[columnTag];
  };

  applyChanges = src => {
    const self = this;
    if (src && src.length > 0) {
      let ordered = src;
      Object.entries(this.columns).forEach(([columnTag, column]) => {
        ordered = column.modify(ordered);
      });
      return ordered;
    }
    return src;
  };
}
