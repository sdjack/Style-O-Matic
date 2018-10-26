/**
 * @memberof utilities
 * @namespace coreUtilities
 * @author Steven Jackson
 */
const DEBUG = true;

/* eslint-disable */
/**
 * [s4 description]
 * @return {String} [description]
 */
function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
/* eslint-enable */
/**
 * [uID description]
 * @return {String} [description]
 */
export function uID() {
  return `${s4() + s4()}-${s4()}-4${s4().substr(
    0,
    3
  )}-${s4()}-${s4()}${s4()}${s4()}`;
}

/* eslint-disable */
/**
 * [debugMessage description]
 * @param  {String} msgs [description]
 * @return {String}      [description]
 */
export function debugMessage(...msgs) {
  if (DEBUG) {
    Object.values(msgs).forEach(msg => console.log(msg));
  }
}
/* eslint-enable */
/**
 * [isLeftClickEvent description]
 * @param  {String}  event [description]
 * @return {Boolean}       [description]
 */
export function isLeftClickEvent(event) {
  return event.button === 0;
}
/**
 * [isModifiedEvent description]
 * @param  {String}  event [description]
 * @return {Boolean}       [description]
 */
export function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
