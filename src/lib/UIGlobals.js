/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import _ from "lodash";

class UIGlobals {
  applySetting = (param, value) => {
    localStorage.setItem(param, value);
  };

  readSetting = param => localStorage.getItem(param);
}

export default new UIGlobals();
