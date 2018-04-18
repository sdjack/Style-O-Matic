export const ROLE = {
  DEFAULT: "item",
  GROUP: "group",
  CONTENT: "content",
  DRAWER: "drawer",
  TITLE: "title",
  SUBTITLE: "subtitle",
  ITEM: "item",
  TEXT: "text",
  FOLDER: "folder",
  FORM: "form",
  ICON: "icon",
  TOGGLE: "toggle",
  BUTTON: "button",
  NAV: "nav",
  TABLE: "table",
  CELL: "cell",
  GRID: "grid",
  ROW: "row",
  INPUT: "input",
  COLUMN: "column",
  WIDGET: "widget",
  MODAL: "modal",
  TAB: "tab"
};

const NON_INHERITABLE = [
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

export function getInheritedClass(props) {
  return NON_INHERITABLE.indexOf(props.uirole) === -1
    ? props.uiclass
    : props.parentclass || "";
}
