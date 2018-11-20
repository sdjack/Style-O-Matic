/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Header, Tabs } from "../../../src/index";

class TabsView extends React.Component {
  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Tabs</Header.Title>
      </Header>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header display="xl" textAlign="center">
                    <Header.Title>Basic Tabs</Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Tabs panel>
                    <Tabs.Tab>Tab 1</Tabs.Tab>
                    <Tabs.Tab>Tab 2</Tabs.Tab>
                    <Tabs.Content>Tab 1 Content</Tabs.Content>
                    <Tabs.Content>Tab 2 Content</Tabs.Content>
                    <Tabs.Tab>Tab 3</Tabs.Tab>
                    <Tabs.Tab>Tab 4</Tabs.Tab>
                    <Tabs.Content>Tab 3 Content</Tabs.Content>
                    <Tabs.Content>Tab 4 Content</Tabs.Content>
                  </Tabs>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header display="xl" textAlign="center">
                    <Header.Title>Custom Tabs</Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Tabs panel>
                    <Tabs.Tab color="blue">Tab 1</Tabs.Tab>
                    <Tabs.Tab color="green">Tab 2</Tabs.Tab>
                    <Tabs.Content>Tab 1 Content</Tabs.Content>
                    <Tabs.Content>Tab 2 Content</Tabs.Content>
                    <Tabs.Tab color="indigo">Tab 3</Tabs.Tab>
                    <Tabs.Tab color="violet">Tab 4</Tabs.Tab>
                    <Tabs.Content>Tab 3 Content</Tabs.Content>
                    <Tabs.Content>Tab 4 Content</Tabs.Content>
                  </Tabs>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default TabsView;
