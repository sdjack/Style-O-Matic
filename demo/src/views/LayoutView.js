/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Header, Footer, Main, Grid, Title } from "../../../src/index";

class LayoutView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title-header">
        <Title.Content dispatch="scroll">Layout - Header</Title.Content>
      </Title>,
      <Grid key="view-grid-header">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Header</Title.Content>
              <Title.Subtitle>Standard or Fixed</Title.Subtitle>
            </Title>
            <hr />
            <br />
            <Header raised>
              <Header.Content>
                <Header.Title>TITLE</Header.Title>
                <Header.Button>Header Button</Header.Button>
                <Header.Button>Header Button</Header.Button>
                <Header.Text>Header Text</Header.Text>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>,
      <Title renderAs="h1" textAlign="center" key="view-title-main">
        <Title.Content dispatch="scroll">Layout - Main</Title.Content>
      </Title>,
      <Grid key="view-grid-main">
        <Grid.Row>
          <Grid.Column>
            <Grid panel>
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
      <Title renderAs="h1" textAlign="center" key="view-title-footer">
        <Title.Content dispatch="scroll">Layout - Footer</Title.Content>
      </Title>,
      <Grid key="view-grid-footer">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Footer</Title.Content>
              <Title.Subtitle>Standard or Fixed</Title.Subtitle>
            </Title>
            <br />
            <br />
            <Footer inset>
              <Footer.Content>
                <Footer.Button>Footer Button</Footer.Button>
                <Footer.Button>Footer Button</Footer.Button>
                <Footer.Text>Footer Text</Footer.Text>
              </Footer.Content>
            </Footer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default LayoutView;
