/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

class ManagedEvent {
  constructor(eventName) {
    this.initialized = false;
    this.name = eventName;
    this.observers = [];
    this.observerRegistry = [];
    this.dispatchers = [];
    this.dispatcherRegistry = [];
    this.ready = true;
    this.timer = null;
  }

  onEvent = eventData => {
    const self = this;
    if (self.ready) {
      self.ready = false;
      if (self.observers.length > 0) {
        for (let i = 0; i < self.observers.length; i += 1) {
          const observer = self.observers[i];
          observer.onEventDispatch(self.name, eventData, self.dispatchers);
        }
      }
      if (self.timer) {
        clearTimeout(self.timer);
      }
      self.timer = setInterval(() => {
        self.ready = true;
      }, 100);
    }
  };
}

class EventManager {
  constructor() {
    this.registry = {};
    this.events = {
      scroll: new ManagedEvent("scroll"),
      wheel: new ManagedEvent("wheel"),
      mousemove: new ManagedEvent("mousemove"),
      keypress: new ManagedEvent("keypress"),
      copy: new ManagedEvent("copy"),
      paste: new ManagedEvent("paste"),
      touchmove: new ManagedEvent("touchmove"),
      touchstart: new ManagedEvent("touchstart"),
      error: new ManagedEvent("error"),
      load: new ManagedEvent("load")
    };
  }

  addListener = eventName => {
    const eventObject = this.events[eventName];
    document.documentElement.addEventListener(
      eventName,
      eventObject.onEvent,
      true
    );
    eventObject.initialized = true;
  };

  registerObserver = (registrant, eventName) => {
    const event = this.events[eventName];
    if (typeof event !== "undefined") {
      const guid = registrant.GUID;
      if (event.observerRegistry.indexOf(guid) === -1) {
        event.observerRegistry.push(guid);
        event.observers.push(registrant);
      }
      if (!event.initialized) {
        this.addListener(eventName);
      }
    }
  };

  unregisterObserver = (registrant, eventName) => {
    const event = this.events[eventName];
    if (typeof event !== "undefined" && event.observers.length > 0) {
      const guid = registrant.GUID;
      const newList = [];
      const newRegistry = [];
      for (let i = 0; i < event.observers.length; i += 1) {
        const observer = event.observers[i];
        if (observer.GUID !== guid) {
          newList.push(observer);
          newRegistry.push(observer.GUID);
        }
      }
      event.observers = newList;
      event.observerRegistry = newRegistry;
    }
  };

  registerDispatcher = (registrant, eventName) => {
    const event = this.events[eventName];
    if (typeof event !== "undefined") {
      const guid = registrant.GUID;
      if (event.dispatcherRegistry.indexOf(guid) === -1) {
        event.dispatcherRegistry.push(guid);
        event.dispatchers.push(registrant);
      }
      if (!event.initialized) {
        this.addListener(eventName);
      }
    }
  };

  unregisterDispatcher = (registrant, eventName) => {
    const event = this.events[eventName];
    if (typeof event !== "undefined" && event.dispatchers.length > 0) {
      const guid = registrant.GUID;
      const newList = [];
      const newRegistry = [];
      for (let i = 0; i < event.dispatchers.length; i += 1) {
        const dispatcher = event.dispatchers[i];
        if (dispatcher.GUID !== guid) {
          newList.push(dispatcher);
          newRegistry.push(dispatcher.GUID);
        }
      }
      event.dispatchers = newList;
      event.dispatcherRegistry = newRegistry;
    }
  };
}

export default new EventManager();
