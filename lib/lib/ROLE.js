"use strict";

exports.__esModule = true;
exports.getParentClass = getParentClass;
exports.getChildClass = getChildClass;
/**
 * @memberof utilities
 * @namespace ROLE
 * @author Steven Jackson
 */
var ROLE = exports.ROLE = {
  DEFAULT: "item",
  ACCORDION: "accordion",
  APP: "app",
  BADGE: "badge",
  BOTTOMBAR: "bottom-bar",
  BREADCRUMBS: "breadcrumbs",
  BUTTON: "button",
  BUTTONBAR: "buttonbar",
  BUTTONMENU: "buttonmenu",
  CARD: "card",
  CELL: "cell",
  COLUMN: "column",
  CONTENT: "content",
  DATEPICKER: "datepicker",
  DROPDOWN: "dropdown",
  DRAWER: "drawer",
  FOLDER: "folder",
  FOLDERITEM: "folder-item",
  FOOTER: "footer",
  FORM: "form",
  GRID: "grid",
  GROUP: "group",
  HEADER: "header",
  ICON: "icon",
  INPUT: "input",
  ITEM: "item",
  LINK: "link",
  LIST: "list",
  LOADING: "loading",
  MAIN: "main",
  MODAL: "modal",
  NAV: "nav",
  PAGINATION: "pagination",
  PILL: "pill",
  PRESENTATION: "presentation",
  RADIO: "radio",
  ROW: "row",
  SECTION: "section",
  SELECT: "select",
  SUBTITLE: "subtitle",
  TABS: "tabs",
  TABTOGGLE: "tabs-tab",
  TABCONTENT: "tabs-content",
  TABLE: "table",
  TBODY: "tbody",
  TEXT: "text",
  TEXTAREA: "textarea",
  TFOOT: "tfoot",
  THEAD: "thead",
  TITLE: "title",
  TOASTS: "toasts",
  TOAST: "toasts-toast",
  TOGGLE: "toggle",
  TOOLBAR: "toolbar",
  TOOLTIP: "tooltip",
  TOPBAR: "top-bar",
  UI: "ui",
  WIDGET: "widget"
};
/**
 * [NON_INHERITABLE description]
 * @type {Array}
 */
var NON_INHERITABLE = [ROLE.DEFAULT, ROLE.GROUP, ROLE.DRAWER, ROLE.FOLDERITEM, ROLE.HEADER, ROLE.FOOTER, ROLE.SECTION, ROLE.ITEM, ROLE.TEXT, ROLE.ICON, ROLE.CELL, ROLE.ROW, ROLE.INPUT, ROLE.COLUMN, ROLE.WIDGET];
/**
 * [NON_INHERITING description]
 * @type {Array}
 */
var NON_INHERITING = [ROLE.ACCORDION, ROLE.APP, ROLE.BREADCRUMBS, ROLE.CARD, ROLE.CONTENT, ROLE.DATEPICKER, ROLE.DRAWER, ROLE.GRID, ROLE.HEADER, ROLE.FOOTER, ROLE.SECTION, ROLE.ICON, ROLE.MODAL, ROLE.PAGINATION, ROLE.TABLE, ROLE.TOASTS, ROLE.TOOLBAR, ROLE.TOOLTIP];
/**
 * [THEME_ENABLED description]
 * @type {Array}
 */
var THEME_ENABLED = [ROLE.DEFAULT, ROLE.GROUP, ROLE.CONTENT, ROLE.FOLDERITEM, ROLE.ITEM, ROLE.TEXT, ROLE.HEADER, ROLE.FOOTER, ROLE.SECTION, ROLE.ICON, ROLE.CELL, ROLE.ROW, ROLE.INPUT, ROLE.COLUMN, ROLE.WIDGET];
/**
 * [getParentClass description]
 * @param  {String} props [description]
 * @return {String}       [description]
 */
function getParentClass(props) {
  if (NON_INHERITING.indexOf(props.uirole) !== -1) {
    return props.uirole || "";
  }
  return NON_INHERITABLE.indexOf(props.uirole) === -1 ? props.uiclass : props.parentclass || "";
}
/**
 * [getChildClass description]
 * @param  {String} parentClass [description]
 * @param  {String} role        [description]
 * @return {String}             [description]
 */
function getChildClass(parentClass, role) {
  if (NON_INHERITING.indexOf(role) !== -1) {
    return role ? "" + role : "";
  }
  return (parentClass ? parentClass + "-" : "") + (role ? "" + role : "");
}