/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Nav, Grid, Title, ToolTip } from "../../../src/index";

class LayoutView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title-header" sticky>
        <Title.Content dispatch="scroll">...</Title.Content>
      </Title>,
      <Grid key="view-grid-header">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center" cols="6">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Navigation</Title.Content>
                    <Title.Subtitle>Horizontal</Title.Subtitle>
                  </Title>
                  <hr />
                </Grid.Column>
                <Grid.Column textAlign="center" cols="6">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Navigation</Title.Content>
                    <Title.Subtitle>Vertical</Title.Subtitle>
                  </Title>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols="6">
                  <Nav>
                    <Nav.Item icon="ui-icon-home" label="Home">
                      <ToolTip position="bottom">Home</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-robot" label="Blog">
                      <ToolTip position="top">Blog</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-user" label="About">
                      <ToolTip position="bottom">About</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-star" label="Contact">
                      <ToolTip position="top">Contact</ToolTip>
                    </Nav.Item>
                    <Nav.Folder to="/misc" label="Misc">
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                    </Nav.Folder>
                  </Nav>
                </Grid.Column>
                <Grid.Column textAlign="center" cols="6">
                  <Nav orientation="vertical">
                    <Nav.Item icon="ui-icon-home" label="Home">
                      <ToolTip position="left">Home</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-robot" label="Blog">
                      <ToolTip position="left">Blog</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-user" label="About">
                      <ToolTip position="left">About</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-star" label="Contact">
                      <ToolTip position="left">Contact</ToolTip>
                    </Nav.Item>
                    <Nav.Folder to="/misc" label="Misc">
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                    </Nav.Folder>
                  </Nav>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Nav>
                    <Nav.Item icon="ui-icon-home" label="Home">
                      <ToolTip position="bottom">Home</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-robot" label="Blog">
                      <ToolTip position="top">Blog</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-user" label="About">
                      <ToolTip position="bottom">About</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="ui-icon-star" label="Contact">
                      <ToolTip position="top">Contact</ToolTip>
                    </Nav.Item>
                    <Nav.Folder to="/misc" label="Misc">
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                      <Nav.Item to="/" icon="ui-icon-tools" label="TBD" />
                    </Nav.Folder>
                    <Nav.Item icon="ui-icon-search" label="Search">
                      <form className="ui-nav-form" role="search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            name="q"
                            id="search-input"
                          />
                          <div className="input-group-btn">
                            <button
                              className="btn btn-default"
                              id="search-submit"
                            >
                              <i className="ui-icon-search" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </Nav.Item>
                  </Nav>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default LayoutView;
