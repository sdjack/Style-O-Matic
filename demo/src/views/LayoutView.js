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
                    <Nav.Item icon="fa fa-home" text="Home">
                      <ToolTip>Home</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="fa fa-font" text="Blog">
                      <ToolTip>Blog</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="fa fa-bookmark" text="About">
                      <ToolTip>About</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="fa fa-comment" text="Contact">
                      <ToolTip>Contact</ToolTip>
                    </Nav.Item>
                  </Nav>
                </Grid.Column>
                <Grid.Column textAlign="center" cols="6">
                  <Nav orientation="vertical">
                    <Nav.Item icon="fa fa-home" text="Home">
                      <ToolTip>Home</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="fa fa-font" text="Blog">
                      <ToolTip>Blog</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="fa fa-bookmark" text="About">
                      <ToolTip>About</ToolTip>
                    </Nav.Item>
                    <Nav.Item icon="fa fa-comment" text="Contact">
                      <ToolTip>Contact</ToolTip>
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
