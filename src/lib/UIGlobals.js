import _ from "lodash";

const defaultRect = {
  x: 0,
  y: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0
};

class UIGlobals {
  getScreenDimensions = () => {
    if (document && document.body) {
      return document.body.getBoundingClientRect();
    }
    return defaultRect;
  };

  applySetting = (param, value) => {
    localStorage.setItem(param, value);
  };

  readSetting = param => localStorage.getItem(param);
}

export default new UIGlobals();
