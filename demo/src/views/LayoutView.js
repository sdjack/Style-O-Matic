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
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>Layout</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title showAs="h2" textAlign="center" key="view-title">
              <Title.Content>Header</Title.Content>
              <Title.Subtitle>Standard or Fixed</Title.Subtitle>
            </Title>
            <hr />
            <br />
            <Header raised>
              <Header.Content>
                <Header.Button>Header Button</Header.Button>
                <Header.Button>Header Button</Header.Button>
                <Header.Item>Header Item</Header.Item>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title showAs="h2" textAlign="center" key="view-title">
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
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title showAs="h2" textAlign="center" key="view-title">
              <Title.Content>Footer</Title.Content>
              <Title.Subtitle>Standard or Fixed</Title.Subtitle>
            </Title>
            <br />
            <br />
            <Footer inset>
              <Footer.Content>
                <Footer.Button>Footer Button</Footer.Button>
                <Footer.Button>Footer Button</Footer.Button>
                <Footer.Item>Footer Item</Footer.Item>
              </Footer.Content>
            </Footer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default LayoutView;
