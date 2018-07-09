export default class RowModel {
  constructor(index) {
    this.defaultIndex = index;
    this.activeIndex = index;
  }

  setOrder = index => {
    this.activeIndex = index;
  };

  unsetOrder = () => {
    this.activeIndex = this.defaultIndex;
  };
}
