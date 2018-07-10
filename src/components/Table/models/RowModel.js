export default class RowModel {
  constructor(index, value) {
    this.defaultIndex = index;
    this.index = index;
    this.value = value;
  }

  setValue = value => {
    this.value = value;
  };

  setIndex = index => {
    this.index = index;
  };

  resetIndex = () => {
    this.index = this.defaultIndex;
  };
}
