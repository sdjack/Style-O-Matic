"use strict";

exports.__esModule = true;
exports.uID = uID;
exports.debugMessage = debugMessage;
exports.isLeftClickEvent = isLeftClickEvent;
exports.isModifiedEvent = isModifiedEvent;
/**
 * @memberof utilities
 * @namespace coreUtilities
 * @author Steven Jackson
 */
var DEBUG = true;

/* eslint-disable */
/**
 * [s4 description]
 * @return {String} [description]
 */
function s4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}
/* eslint-enable */
/**
 * [uID description]
 * @return {String} [description]
 */
function uID() {
  return s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4();
}

/* eslint-disable */
/**
 * [debugMessage description]
 * @param  {String} msgs [description]
 * @return {String}      [description]
 */
function debugMessage() {
  if (DEBUG) {
    for (var _len = arguments.length, msgs = Array(_len), _key = 0; _key < _len; _key++) {
      msgs[_key] = arguments[_key];
    }

    Object.values(msgs).forEach(function (msg) {
      return console.log(msg);
    });
  }
}
/* eslint-enable */
/**
 * [isLeftClickEvent description]
 * @param  {String}  event [description]
 * @return {Boolean}       [description]
 */
function isLeftClickEvent(event) {
  return event.button === 0;
}
/**
 * [isModifiedEvent description]
 * @param  {String}  event [description]
 * @return {Boolean}       [description]
 */
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}