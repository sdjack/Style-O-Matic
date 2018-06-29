/* eslint no-param-reassign: ["error", { "props": false }] */

const DEBUG = true;

/* eslint-disable */
function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
/* eslint-enable */

export function uID() {
  return `${s4() + s4()}-${s4()}-4${s4().substr(
    0,
    3
  )}-${s4()}-${s4()}${s4()}${s4()}`;
}

/* eslint-disable */
export function debugMessage(...msgs) {
  if (DEBUG) {
    Object.values(msgs).forEach(msg => console.log(msg));
  }
}
/* eslint-enable */

export function isLeftClickEvent(event) {
  return event.button === 0;
}

export function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
