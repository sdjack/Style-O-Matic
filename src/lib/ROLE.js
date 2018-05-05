export const ROLE = {
  DEFAULT: "item",
  ACCORDION: "accordion",
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
  TABLE: "table",
  TEXT: "text",
  TEXTAREA: "textarea",
  TITLE: "title",
  TOASTS: "toasts",
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
  return NON_INHERITABLE.indexOf(props.uirole) === -1
    ? props.uiclass
    : props.parentclass || "";
}

export function getChildClass(parentClass, role) {
  return (parentClass ? `${parentClass}-` : "") + (role ? `${role}` : "");
}
