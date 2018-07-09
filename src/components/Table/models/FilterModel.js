const FILTER_TYPES = {
  STRING: 0,
  NUMBER: 1,
  DATE: 2,
  SELECT: 3
};

export default class FilterModel {
  constructor() {
    this.filterType = FILTER_TYPES.STRING;
    this.xHeaders = [];
    this.yHeaders = [];
    this.xCount = 0;
    this.yCount = 0;
    this.pageNum = 1;
    this.pageTotal = 1;
  }
}
