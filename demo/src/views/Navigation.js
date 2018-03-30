/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Nav } from "../../../src/index";

class Navigation extends React.Component {
  render() {
    const { active } = this.props;

    return (
      <Nav active={active}>
        <Nav.Item to="/" icon="fa fa-home" text="Home" />
        <Nav.Item to="/typography" icon="fa fa-font" text="Typography" />
        <Nav.Item to="/layout" icon="fa fa-object-group" text="Layout" />
        <Nav.Item to="/grid" icon="fa fa-th" text="Grid" />
        <Nav.Item to="/navigation" icon="fa fa-sitemap" text="Navigation" />
        <Nav.Item to="/buttons" icon="fa fa-cube" text="Buttons" />
        <Nav.Item to="/table" icon="fa fa-table" text="Tables" />
        <Nav.Item to="/form" icon="fa fa-wpforms" text="Forms" />
        <Nav.Item to="/accordion" icon="fa fa-th-list" text="Accordion" />
        <Nav.Item
          to="/breadcrumbs"
          icon="fa fa-angle-double-right"
          text="Breadcrumbs"
        />
        <Nav.Item to="/modal" icon="fa fa-window-restore" text="Modal" />
        <Nav.Folder to="/misc" icon="fa fa-folder" text="Misc">
          <Nav.Item to="/toolbar" icon="fa fa-cogs" text="ToolBar" />
          <Nav.Item to="/tabs" icon="fa fa-bookmark" text="Tabs" />
          <Nav.Item to="/toasts" icon="fa fa-comment" text="Toasts" />
        </Nav.Folder>
      </Nav>
    );
  }
}

export default Navigation;
