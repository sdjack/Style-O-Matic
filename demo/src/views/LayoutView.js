/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { ToolBar, Nav, Main, Grid, Title, ToolTip } from "../../../src/index";

class LayoutView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title-header" panel>
        <Title.Content dispatch="scroll">...</Title.Content>
      </Title>,
      <Grid key="view-grid-header" panel>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Navigation</Title.Content>
              <Title.Subtitle>Horizontal</Title.Subtitle>
            </Title>
            <hr />
            <br />
            <Nav>
              <Nav.Item to="/" icon="fa fa-home" text="Home">
                <ToolTip>Home</ToolTip>
              </Nav.Item>
              <Nav.Item to="/typography" icon="fa fa-font" text="Typography">
                <ToolTip>Typography</ToolTip>
              </Nav.Item>
              <Nav.Item to="/layout" icon="fa fa-object-group" text="Layout">
                <ToolTip>Layout</ToolTip>
              </Nav.Item>
              <Nav.Item to="/toolbar" icon="fa fa-cogs" text="ToolBar">
                <ToolTip>ToolBar</ToolTip>
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
              <Nav.Item to="/tabs" icon="fa fa-bookmark" text="Tabs">
                <ToolTip>Tabs</ToolTip>
              </Nav.Item>
              <Nav.Item to="/toasts" icon="fa fa-comment" text="Toasts">
                <ToolTip>Toasts</ToolTip>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default LayoutView;
