import _ from "lodash";
import TableDataModel from "./TableDataModel.js";

class TableData {
  static FILTER_TYPE = {
    NONE: 0,
    STRING: 1,
    NUMBER: 2,
    DATE: 3,
    SELECT: 4
  };

  static FILTER_STATE = {
    DISABLED: 0,
    ENABLED: 1
  };

  static SORT_STATE = {
    DISABLED: 0,
    ASC: 1,
    DESC: 2
  };

  static TABLE_TYPE = {
    DEFAULT: 0,
    HORIZONTAL: 1,
    OMNI: 2,
    NO_HEADERS: 3
  };

  constructor() {
    this.instances = {};
  }

  init = node => {
    const tag = node.props.uuid;
    if (!this.instances[tag]) {
      this.instances[tag] = new TableDataModel();
    }
    return this.instances[tag];
  };
}

export default new TableData();
