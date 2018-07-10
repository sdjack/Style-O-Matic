import _ from "lodash";
import ColumnModel from "./ColumnModel.js";
/* eslint-disable */

export default class TableDataModel {
  constructor(node) {
    this.columns = {};
    this.registry = {};
    this.pageNum = 1;
    this.pageTotal = 1;
    this.rowTotal = 0;
    this.columnTotal = 0;
    this.perPage = node.props.pagination || 0;
  }

  setPagination = (page, showing) => {
    this.pageNum = page;
    this.perPage = showing || this.perPage;
  };

  setColumn = node => {
    const { rowid, columnid, children } = node.props;
    const columnTag = `column${columnid}`;
    if (!this.columns[columnTag]) {
      this.columns[columnTag] = new ColumnModel(columnid);
      this.columnTotal += 1;
    }
    this.columns[columnTag].setValue(rowid, children);
  };

  getColumn = columnid => {
    const columnTag = `column${columnid}`;
    if (!this.columns[columnTag]) {
      this.columns[columnTag] = new ColumnModel(columnid);
      this.columnTotal += 1;
    }
    return this.columns[columnTag];
  };

  getPagination = () => {
    const rowCount = this.rowTotal;
    const colCount = this.columnTotal;
    const perPage = this.perPage > 0 ? this.perPage : rowCount;
    const pageCount = Math.floor(rowCount / perPage);
    const showPager = rowCount > perPage;
    return {
      totalRows: rowCount,
      pageNum: this.pageNum,
      perPage: perPage,
      pageTotal: pageCount,
      enabled: showPager,
      cols: colCount
    };
  };

  getPaginated = src => {
    if (this.perPage > 0) {
      const startIndex = (this.pageNum - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return _.slice(src, startIndex, endIndex);
    }
    return src;
  };

  applyChanges = src => {
    this.rowTotal = src.length;
    let visibleRows = src;
    if (src && src.length > 0) {
      Object.entries(this.columns).forEach(([columnTag, column]) => {
        visibleRows = column.modify(visibleRows);
      });
    }
    return this.getPaginated(visibleRows);
  };
}
