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
    const { active, orientation } = this.props;

    return (
      <Nav active={active} orientation={orientation}>
        <Nav.Item to="/" icon="fa fa-home" text="Home">
          <ToolTip position="bottom">Home</ToolTip>
        </Nav.Item>
        <Nav.Item to="/typography" icon="fa fa-font" text="Typography">
          <ToolTip position="bottom">Typography</ToolTip>
        </Nav.Item>
        <Nav.Item to="/layout" icon="fa fa-object-group" text="Layout">
          <ToolTip position="bottom">Layout</ToolTip>
        </Nav.Item>
        <Nav.Item to="/toolbar" icon="fa fa-cogs" text="ToolBar">
          <ToolTip position="bottom">ToolBar</ToolTip>
        </Nav.Item>
        <Nav.Item to="/grid" icon="fa fa-th" text="Grid">
          <ToolTip position="bottom">Grid</ToolTip>
        </Nav.Item>
        <Nav.Item to="/cards" icon="fa fa-window-restore" text="Cards">
          <ToolTip position="bottom">Cards</ToolTip>
        </Nav.Item>
        <Nav.Item to="/buttons" icon="fa fa-cube" text="Buttons">
          <ToolTip position="bottom">Buttons</ToolTip>
        </Nav.Item>
        <Nav.Item to="/table" icon="fa fa-table" text="Tables">
          <ToolTip position="bottom">Tables</ToolTip>
        </Nav.Item>
        <Nav.Item to="/form" icon="fab fa-wpforms" text="Forms">
          <ToolTip position="bottom">Forms</ToolTip>
        </Nav.Item>
        <Nav.Item to="/accordion" icon="fa fa-th-list" text="Accordion">
          <ToolTip position="bottom">Accordion</ToolTip>
        </Nav.Item>
        <Nav.Item to="/modal" icon="fa fa-window-restore" text="Modal">
          <ToolTip position="bottom">Modal</ToolTip>
        </Nav.Item>
        <Nav.Item to="/tabs" icon="fa fa-bookmark" text="Tabs">
          <ToolTip position="bottom">Tabs</ToolTip>
        </Nav.Item>
        <Nav.Item to="/toasts" icon="fa fa-comment" text="Toasts">
          <ToolTip position="bottom">Toasts</ToolTip>
        </Nav.Item>
        <Nav.Folder to="/misc" icon="fa fa-folder" text="Misc">
          <Nav.Item to="/" icon="fa fa-cogs" text="TBD" />
          <Nav.Item to="/" icon="fa fa-cogs" text="TBD" />
          <Nav.Item to="/" icon="fa fa-cogs" text="TBD" />
          <Nav.Item to="/" icon="fa fa-cogs" text="TBD" />
          <Nav.Item to="/" icon="fa fa-cogs" text="TBD" />
          <Nav.Item to="/" icon="fa fa-cogs" text="TBD" />
        </Nav.Folder>
      </Nav>
    );
  }
}

export default Navigation;
