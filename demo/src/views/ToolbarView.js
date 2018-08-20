/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Title, ToolBar } from "../../../src/index";

class ToolbarView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Toolbars</Title.Content>
      </Title>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h2" textAlign="center">
                    <Title.Content>Basic Toolbar</Title.Content>
                  </Title>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <ToolBar color="red" raised>
                    <ToolBar.Content contentAlign="left">
                      <ToolBar.Title>TITLE</ToolBar.Title>
                      <ToolBar.Button>Button</ToolBar.Button>
                      <ToolBar.Button>Button</ToolBar.Button>
                    </ToolBar.Content>
                    <ToolBar.Content contentAlign="right">
                      <ToolBar.Text>Raised</ToolBar.Text>
                      <ToolBar.Text>Red</ToolBar.Text>
                    </ToolBar.Content>
                  </ToolBar>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <ToolBar color="green" raised>
                    <ToolBar.Content contentAlign="left">
                      <ToolBar.Title>TITLE</ToolBar.Title>
                      <ToolBar.Button>Button</ToolBar.Button>
                      <ToolBar.Button>Button</ToolBar.Button>
                    </ToolBar.Content>
                    <ToolBar.Content contentAlign="right">
                      <ToolBar.Text>Raised</ToolBar.Text>
                      <ToolBar.Text>Green</ToolBar.Text>
                    </ToolBar.Content>
                  </ToolBar>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <ToolBar color="blue" raised>
                    <ToolBar.Content contentAlign="left">
                      <ToolBar.Title>TITLE</ToolBar.Title>
                      <ToolBar.Button>Button</ToolBar.Button>
                      <ToolBar.Button>Button</ToolBar.Button>
                    </ToolBar.Content>
                    <ToolBar.Content contentAlign="right">
                      <ToolBar.Text>Raised</ToolBar.Text>
                      <ToolBar.Text>Blue</ToolBar.Text>
                    </ToolBar.Content>
                  </ToolBar>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default ToolbarView;
