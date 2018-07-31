/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Nav, ToolTip } from "../../../src/index";

class Navigation extends React.Component {
  render() {
    const { active } = this.props;

    return (
      <Nav active={active}>
        <Nav.Item to="/" icon="fa fa-home" text="Home">
          <ToolTip>Home</ToolTip>
        </Nav.Item>
        <Nav.Item to="/typography" icon="fa fa-font" text="Typography">
          <ToolTip>Typography</ToolTip>
        </Nav.Item>
        <Nav.Item to="/layout" icon="fa fa-object-group" text="Layout">
          <ToolTip>Layout</ToolTip>
        </Nav.Item>
        <Nav.Item to="/grid" icon="fa fa-th" text="Grid">
          <ToolTip>Grid</ToolTip>
        </Nav.Item>
        <Nav.Item to="/cards" icon="fa fa-window-restore" text="Cards">
          <ToolTip>Cards</ToolTip>
        </Nav.Item>
        <Nav.Item to="/buttons" icon="fa fa-cube" text="Buttons">
          <ToolTip>Buttons</ToolTip>
        </Nav.Item>
        <Nav.Item to="/table" icon="fa fa-table" text="Tables">
          <ToolTip>Tables</ToolTip>
        </Nav.Item>
        <Nav.Item to="/form" icon="fab fa-wpforms" text="Forms">
          <ToolTip>Forms</ToolTip>
        </Nav.Item>
        <Nav.Item to="/accordion" icon="fa fa-th-list" text="Accordion">
          <ToolTip>Accordion</ToolTip>
        </Nav.Item>
        <Nav.Item to="/modal" icon="fa fa-window-restore" text="Modal">
          <ToolTip>Modal</ToolTip>
        </Nav.Item>
        <Nav.Folder to="/misc" icon="fa fa-folder" text="Misc">
          <Nav.Item to="/" icon="fa fa-angle-double-right" text="Breadcrumbs" />
          <Nav.Item to="/" icon="fa fa-cogs" text="ToolBar" />
          <Nav.Item to="/" icon="fa fa-bookmark" text="Tabs" />
          <Nav.Item to="/" icon="fa fa-comment" text="Toasts" />
        </Nav.Folder>
      </Nav>
    );
  }
}

export default Navigation;
