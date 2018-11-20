/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Dropdown, Header, Nav, ToolTip } from "../../../src/index";

class Navigation extends React.Component {
  render() {
    const { active, orientation } = this.props;

    return (
      <Nav
        active={active}
        orientation={orientation}
        contentAlign="left"
        fit="flex"
      >
        <Nav.Item>
          <div className="ui-nav-title">Top Bar</div>
        </Nav.Item>
        <Nav.Item to="/" icon="home" label="Home">
          <ToolTip position="bottom">Home</ToolTip>
        </Nav.Item>
        <Nav.Item to="/typography" icon="atom" label="Typography">
          <ToolTip position="bottom">Typography</ToolTip>
        </Nav.Item>
        <Nav.Item to="/layout" icon="shooting-star" label="Layout">
          <ToolTip position="bottom">Layout</ToolTip>
        </Nav.Item>
        <Dropdown>
          <Dropdown.Toggle caret>Misc</Dropdown.Toggle>
          <Dropdown.List>
            <Header>Misc</Header>
            <Nav.Item to="/toolbar" icon="star" label="ToolBar" />
            <Nav.Item to="/grid" icon="star" label="Grid" />
            <Nav.Item to="/cards" icon="star" label="Cards" />
            <Nav.Item to="/buttons" icon="star" label="Buttons" />
            <Nav.Item to="/table" icon="star" label="Tables" />
            <Nav.Item to="/form" icon="star" label="Forms" />
            <Nav.Item to="/accordion" icon="star" label="Accordion" />
            <Nav.Item to="/modal" icon="star" label="Modal" />
            <Nav.Item to="/tabs" icon="star" label="Tabs" />
            <Nav.Item to="/toasts" icon="star" label="Toasts" />
          </Dropdown.List>
        </Dropdown>
      </Nav>
    );
  }
}

export default Navigation;
