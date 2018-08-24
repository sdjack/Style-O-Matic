export const ROLE = {
  DEFAULT: "item",
  ACCORDION: "accordion",
  APP: "app",
  BADGE: "badge",
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
  FOOTER: "footer",
  FORM: "form",
  GRID: "grid",
  GROUP: "group",
  HEADER: "header",
  ICON: "icon",
  INPUT: "input",
  ITEM: "item",
  LOADING: "loading",
  MAIN: "main",
  MODAL: "modal",
  NAV: "nav",
  PAGINATION: "pagination",
  PILL: "pill",
  RADIO: "radio",
  ROW: "row",
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
  UI: "ui",
  WIDGET: "widget"
};

const NON_INHERITABLE = [
  ROLE.DEFAULT,
  ROLE.GROUP,
  ROLE.CONTENT,
  ROLE.DRAWER,
  ROLE.ITEM,
  ROLE.TEXT,
  ROLE.ICON,
  ROLE.CELL,
  ROLE.ROW,
  ROLE.INPUT,
  ROLE.COLUMN,
  ROLE.WIDGET
];

const NON_INHERITING = [
  ROLE.ACCORDION,
  ROLE.APP,
  ROLE.BREADCRUMBS,
  ROLE.CARD,
  ROLE.DATEPICKER,
  ROLE.GRID,
  ROLE.MODAL,
  ROLE.PAGINATION,
  ROLE.TABLE,
  ROLE.TOASTS,
  ROLE.TOOLBAR,
  ROLE.TOOLTIP
];

const THEME_ENABLED = [
  ROLE.DEFAULT,
  ROLE.GROUP,
  ROLE.CONTENT,
  ROLE.ITEM,
  ROLE.TEXT,
  ROLE.ICON,
  ROLE.CELL,
  ROLE.ROW,
  ROLE.INPUT,
  ROLE.COLUMN,
  ROLE.WIDGET
];

export function getParentClass(props) {
  if (NON_INHERITING.indexOf(props.uirole) !== -1) {
    return props.uirole || "";
  }
  return NON_INHERITABLE.indexOf(props.uirole) === -1
    ? props.uiclass
    : props.parentclass || "";
}

export function getChildClass(parentClass, role) {
  if (NON_INHERITING.indexOf(role) !== -1) {
    return role ? `${role}` : "";
  }
  return (parentClass ? `${parentClass}-` : "") + (role ? `${role}` : "");
}
