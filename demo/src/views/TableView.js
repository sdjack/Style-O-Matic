/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Table, Title } from "../../../src/index";

class TableView extends React.Component {
  render() {
    const sampleData = Table.FactoryData({
      head: {
        labels: {
          x: ["Name", "Email", "ID"]
        }
      },
      body: {
        rows: [
          ["Default User", "generic@email.com", "001"],
          ["Another User", "another@email.com", "002"],
          ["Mystery User", "mystery@email.com", "003"],
          ["Ignored User", "ignored@email.com", "004"],
          ["Broken User", null, "005"],
          [null, "ghost@email.com", "000"]
        ]
      }
    });
    return [
      <Title renderAs="h1" textAlign="center" key="grip-title1" sticky>
        <Title.Content>Table</Title.Content>
      </Title>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h2" textAlign="center">
                    <Title.Content>Default</Title.Content>
                  </Title>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Table panel>{sampleData}</Table>
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
                    <Title.Content>Bordered</Title.Content>
                  </Title>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Table bordered panel>
                    {sampleData}
                  </Table>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Bordered, Padded</Title.Content>
            </Title>
            <hr />
            <br />
            <Table bordered padded>
              {sampleData}
            </Table>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Bordered, Padded, Hover</Title.Content>
            </Title>
            <hr />
            <br />
            <Table bordered padded hover>
              {sampleData}
            </Table>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Bordered, Padded, Hover, Striped</Title.Content>
            </Title>
            <hr />
            <br />
            <Table bordered padded hover striped>
              {sampleData}
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default TableView;
