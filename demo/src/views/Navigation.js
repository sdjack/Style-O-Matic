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
        <Nav.Item to="/" icon="home" text="Home">
          <ToolTip position="bottom">Home</ToolTip>
        </Nav.Item>
        <Nav.Item to="/typography" icon="atom" text="Typography">
          <ToolTip position="bottom">Typography</ToolTip>
        </Nav.Item>
        <Nav.Item to="/layout" icon="shooting-star" text="Layout">
          <ToolTip position="bottom">Layout</ToolTip>
        </Nav.Item>
        <Nav.Folder to="/misc" text="Misc">
          <Nav.Item to="/toolbar" icon="star" text="ToolBar">
            <ToolTip position="right">ToolBar</ToolTip>
          </Nav.Item>
          <Nav.Item to="/grid" icon="star" text="Grid">
            <ToolTip position="right">Grid</ToolTip>
          </Nav.Item>
          <Nav.Item to="/cards" icon="star" text="Cards">
            <ToolTip position="right">Cards</ToolTip>
          </Nav.Item>
          <Nav.Item to="/buttons" icon="star" text="Buttons">
            <ToolTip position="right">Buttons</ToolTip>
          </Nav.Item>
          <Nav.Item to="/table" icon="star" text="Tables">
            <ToolTip position="right">Tables</ToolTip>
          </Nav.Item>
          <Nav.Item to="/form" icon="star" text="Forms">
            <ToolTip position="right">Forms</ToolTip>
          </Nav.Item>
          <Nav.Item to="/accordion" icon="star" text="Accordion">
            <ToolTip position="right">Accordion</ToolTip>
          </Nav.Item>
          <Nav.Item to="/modal" icon="star" text="Modal">
            <ToolTip position="right">Modal</ToolTip>
          </Nav.Item>
          <Nav.Item to="/tabs" icon="star" text="Tabs">
            <ToolTip position="right">Tabs</ToolTip>
          </Nav.Item>
          <Nav.Item to="/toasts" icon="star" text="Toasts">
            <ToolTip position="right">Toasts</ToolTip>
          </Nav.Item>
        </Nav.Folder>
      </Nav>
    );
  }
}

export default Navigation;
