import EventManager from "./lib/EventManager.js";

class UI {
  setTheme = value => {
    EventManager.applySetting("theme", value);
  };

  getTheme = () => EventManager.readSetting("theme");
}

export default new UI();
