/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Dropdown, Nav, Grid, Icon, Header, ToolTip } from "../../../src/index";

class LayoutView extends React.Component {
  render() {
    return (
      <Grid key="view-grid-header">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header display="xxl" textAlign="center">
              Layout
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" cols="6">
            <Header textAlign="center">
              Navigation
              <Header.Subtitle>Horizontal</Header.Subtitle>
            </Header>
            <hr />
          </Grid.Column>
          <Grid.Column textAlign="center" cols="6">
            <Header textAlign="center">
              Navigation
              <Header.Subtitle>Vertical</Header.Subtitle>
            </Header>
            <hr />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" cols="6">
            <Nav>
              <Nav.Item icon="home" label="Home">
                <ToolTip position="bottom">Home</ToolTip>
              </Nav.Item>
              <Nav.Item icon="robot" label="Blog">
                <ToolTip position="top">Blog</ToolTip>
              </Nav.Item>
              <Nav.Item icon="user" label="About">
                <ToolTip position="bottom">About</ToolTip>
              </Nav.Item>
              <Nav.Item icon="star" label="Contact">
                <ToolTip position="top">Contact</ToolTip>
              </Nav.Item>
              <Dropdown>
                <Dropdown.Toggle caret>Misc</Dropdown.Toggle>
                <Dropdown.List>
                  <Header>Misc</Header>
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                </Dropdown.List>
              </Dropdown>
            </Nav>
          </Grid.Column>
          <Grid.Column textAlign="center" cols="6">
            <Nav vertical>
              <Nav.Item icon="home" label="Home">
                <ToolTip position="left">Home</ToolTip>
              </Nav.Item>
              <Nav.Item icon="robot" label="Blog">
                <ToolTip position="left">Blog</ToolTip>
              </Nav.Item>
              <Nav.Item icon="user" label="About">
                <ToolTip position="left">About</ToolTip>
              </Nav.Item>
              <Nav.Item icon="star" label="Contact">
                <ToolTip position="left">Contact</ToolTip>
              </Nav.Item>
              <Dropdown>
                <Dropdown.Toggle caret>Misc</Dropdown.Toggle>
                <Dropdown.List>
                  <Header>Misc</Header>
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                  <Nav.Item to="/" icon="tools" label="TBD" />
                </Dropdown.List>
              </Dropdown>
            </Nav>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <hr />
            <Header textAlign="center">
              Navigation
              <Header.Subtitle>Widgets</Header.Subtitle>
            </Header>
            <hr />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Nav>
              <Nav.Item>
                <div className="ui-nav-title">Nav Title</div>
              </Nav.Item>
              <Nav.Item icon="home" label="Home">
                <ToolTip position="bottom">Home</ToolTip>
              </Nav.Item>
              <Nav.Item icon="robot" label="Blog">
                <ToolTip position="top">Blog</ToolTip>
              </Nav.Item>
              <Nav.Item icon="user" label="About">
                <ToolTip position="bottom">About</ToolTip>
              </Nav.Item>
              <Nav.Item icon="star" label="Contact">
                <ToolTip position="top">Contact</ToolTip>
              </Nav.Item>
              <Nav.Item label="Search" renderAs="form">
                <div className="ui-input-combo">
                  <input
                    type="text"
                    placeholder="Search"
                    name="q"
                    id="search-input"
                  />
                  <button type="submit" className="ui-blue" id="search-submit">
                    <Icon>search</Icon>
                  </button>
                </div>
              </Nav.Item>
            </Nav>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LayoutView;
