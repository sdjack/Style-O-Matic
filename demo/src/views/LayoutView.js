/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { ToolBar, Main, Grid, Title } from "../../../src/index";

class LayoutView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title-header" panel>
        <Title.Content dispatch="scroll">Layout - Header</Title.Content>
      </Title>,
      <Grid key="view-grid-header" panel>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Header</Title.Content>
              <Title.Subtitle>Standard or Fixed</Title.Subtitle>
            </Title>
            <hr />
            <br />
            <ToolBar raised>
              <ToolBar.Content>
                <ToolBar.Title>TITLE</ToolBar.Title>
                <ToolBar.Button>ToolBar Button</ToolBar.Button>
                <ToolBar.Button>ToolBar Button</ToolBar.Button>
                <ToolBar.Text>ToolBar Text</ToolBar.Text>
              </ToolBar.Content>
            </ToolBar>
          </Grid.Column>
        </Grid.Row>
      </Grid>,
      <Title renderAs="h1" textAlign="center" key="view-title-main" panel>
        <Title.Content dispatch="scroll">Layout - Main</Title.Content>
      </Title>,
      <Grid key="view-grid-main" panel>
        <Grid.Row>
          <Grid.Column>
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h2" textAlign="center" key="view-title">
                    <Title.Content>Main</Title.Content>
                    <Title.Subtitle>With or without drawers</Title.Subtitle>
                  </Title>
                  <br />
                  <br />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Main well fixed={false}>
                    <Main.Content>Main Content</Main.Content>
                  </Main>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>,
      <Title renderAs="h1" textAlign="center" key="view-title-footer" panel>
        <Title.Content dispatch="scroll">Layout - Footer</Title.Content>
      </Title>,
      <Grid key="view-grid-footer" panel>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Footer</Title.Content>
              <Title.Subtitle>Standard or Fixed</Title.Subtitle>
            </Title>
            <br />
            <br />
            <ToolBar inset>
              <ToolBar.Content>
                <ToolBar.Button>Footer Button</ToolBar.Button>
                <ToolBar.Button>Footer Button</ToolBar.Button>
                <ToolBar.Text>Footer Text</ToolBar.Text>
              </ToolBar.Content>
            </ToolBar>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default LayoutView;
