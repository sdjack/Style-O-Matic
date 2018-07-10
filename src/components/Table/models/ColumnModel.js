import RowModel from "./RowModel.js";

function NO_SORT(a, b) {
  return 0;
}

function ASC_SORT(a, b) {
  if (a.value && b.value) {
    const value1 = a.value.toUpperCase();
    const value2 = b.value.toUpperCase();
    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
  }
  return 0;
}

function DESC_SORT(a, b) {
  if (a.value && b.value) {
    const value1 = a.value.toUpperCase();
    const value2 = b.value.toUpperCase();
    if (value1 > value2) {
      return -1;
    }
    if (value1 < value2) {
      return 1;
    }
  }
  return 0;
}

const SORT_STATE = {
  DISABLED: 0,
  ASC: 1,
  DESC: 2
};

const FILTER_STATE = {
  DISABLED: 0,
  ENABLED: 1
};

const SORT_FUNC = [NO_SORT, ASC_SORT, DESC_SORT];

export default class ColumnModel {
  constructor(columnIndex) {
    this.index = columnIndex;
    this.rows = [];
    this.filterType = 0;
    this.filterState = 0;
    this.filterSearch = null;
    this.sortState = 0;
  }

  setValue = (index, value) => {
    if (!this.rows[index]) {
      this.rows.push(new RowModel(index, value));
    } else {
      this.rows[index].setValue(value);
    }
  };

  setFilterType = type => {
    this.filterType = type;
  };

  setFilterSearch = search => {
    if (search !== "") {
      this.filterSearch = search;
      this.filterState = FILTER_STATE.ENABLED;
    } else {
      this.filterSearch = null;
      this.filterState = FILTER_STATE.DISABLED;
    }
  };

  clearFilter = () => {
    this.filterState = FILTER_STATE.DISABLED;
    this.filterSearch = null;
  };

  changeFilterState = () => {
    this.filterState += 1;
    if (this.filterState > FILTER_STATE.ENABLED) {
      this.filterState = FILTER_STATE.DISABLED;
    }
  };

  changeSortState = () => {
    this.sortState += 1;
    if (this.sortState > SORT_STATE.DESC) {
      this.sortState = SORT_STATE.DISABLED;
    }
  };

  sortColumn = src => {
    const fn = SORT_FUNC[this.sortState];
    const mapped = this.rows.sort(fn);
    return mapped.map(row => src[row.index]);
  };

  filterColumn = src => {
    const filtered = [];
    this.rows.map(row => {
      if (row.value && row.value.indexOf(this.filterSearch) !== -1) {
        filtered.push(src[row.index]);
      }
      return null;
    });
    return filtered;
  };

  modify = src => {
    let visibleRows = src;
    if (this.rows.length > 0) {
      if (this.sortState > 0) {
        visibleRows = this.sortColumn(visibleRows);
      }
      if (this.filterSearch && this.filterState > 0) {
        visibleRows = this.filterColumn(visibleRows);
      }
    }
    return visibleRows;
  };
}
