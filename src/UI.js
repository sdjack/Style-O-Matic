/**
 * @class
 * @ignore
 */
import EventManager from "./lib/EventManager";

class UI {
  setTheme = value => {
    EventManager.applySetting("theme", value);
  };

  getTheme = () => EventManager.readSetting("theme");
}

export default new UI();
