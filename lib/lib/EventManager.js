"use strict";

exports.__esModule = true;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @memberof utilities
                                                                                                                                                           * @namespace EventManager
                                                                                                                                                           * @author Steven Jackson
                                                                                                                                                           */


/**
 * [ManagedEvent description]
 */
var ManagedEvent = function ManagedEvent(eventName) {
  var _this = this;

  _classCallCheck(this, ManagedEvent);

  this.onEvent = function (eventData) {
    var self = _this;
    self.data = eventData;
    if (self.ready) {
      self.ready = false;
      if (self.timer) {
        clearTimeout(self.timer);
      }
      self.timer = setTimeout(function () {
        self.ready = true;
        if (self.observers.length > 0) {
          for (var i = 0; i < self.observers.length; i += 1) {
            var observer = self.observers[i];
            observer.onEventDispatch(self.name, self.data, self.dispatchers);
          }
        }
      }, 250);
    }
  };

  this.initialized = false;
  this.name = eventName;
  this.observers = [];
  this.observerRegistry = [];
  this.dispatchers = [];
  this.dispatcherRegistry = [];
  this.data = {};
  this.ready = true;
  this.timer = null;
};
/**
 * [EventManager description]
 */


var EventManager = function EventManager() {
  var _this2 = this;

  _classCallCheck(this, EventManager);

  this.applySetting = function (prop, value) {
    localStorage.setItem(prop, value);
    Object.entries(_this2.registry).forEach(function (_ref) {
      var guid = _ref[0],
          registrant = _ref[1];

      if (!_lodash2.default.isNil(registrant)) {
        registrant.forceUpdate();
      }
    });
  };

  this.readSetting = function (prop) {
    return localStorage.getItem(prop);
  };

  this.registerComponent = function (registrant) {
    _this2.registry[registrant.GUID] = registrant;
  };

  this.unregisterComponent = function (registrant) {
    _this2.registry[registrant.GUID] = null;
  };

  this.addListener = function (eventName) {
    var eventObject = _this2.events[eventName];
    document.documentElement.addEventListener(eventName, eventObject.onEvent, true);
    eventObject.initialized = true;
  };

  this.registerObserver = function (registrant, eventName) {
    var event = _this2.events[eventName];
    if (typeof event !== "undefined") {
      var guid = registrant.GUID;
      if (event.observerRegistry.indexOf(guid) === -1) {
        event.observerRegistry.push(guid);
        event.observers.push(registrant);
      }
      if (!event.initialized) {
        _this2.addListener(eventName);
      }
    }
  };

  this.unregisterObserver = function (registrant, eventName) {
    var event = _this2.events[eventName];
    if (typeof event !== "undefined" && event.observers.length > 0) {
      var guid = registrant.GUID;
      var newList = [];
      var newRegistry = [];
      for (var i = 0; i < event.observers.length; i += 1) {
        var observer = event.observers[i];
        if (observer.GUID !== guid) {
          newList.push(observer);
          newRegistry.push(observer.GUID);
        }
      }
      event.observers = newList;
      event.observerRegistry = newRegistry;
    }
  };

  this.registerDispatcher = function (registrant, eventName) {
    var event = _this2.events[eventName];
    if (typeof event !== "undefined") {
      var guid = registrant.GUID;
      if (event.dispatcherRegistry.indexOf(guid) === -1) {
        event.dispatcherRegistry.push(guid);
        event.dispatchers.push(registrant);
      }
      if (!event.initialized) {
        _this2.addListener(eventName);
      }
    }
  };

  this.unregisterDispatcher = function (registrant, eventName) {
    var event = _this2.events[eventName];
    if (typeof event !== "undefined" && event.dispatchers.length > 0) {
      var guid = registrant.GUID;
      var newList = [];
      var newRegistry = [];
      for (var i = 0; i < event.dispatchers.length; i += 1) {
        var dispatcher = event.dispatchers[i];
        if (dispatcher.GUID !== guid) {
          newList.push(dispatcher);
          newRegistry.push(dispatcher.GUID);
        }
      }
      event.dispatchers = newList;
      event.dispatcherRegistry = newRegistry;
    }
  };

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
};

exports.default = new EventManager();
module.exports = exports["default"];