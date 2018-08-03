/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Title, Tabs } from "../../../src/index";

class TabsView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Tabs</Title.Content>
      </Title>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h2" textAlign="center">
                    <Title.Content>Basic Tabs</Title.Content>
                  </Title>
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
                  <Title renderAs="h2" textAlign="center">
                    <Title.Content>Custom Tabs</Title.Content>
                  </Title>
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
