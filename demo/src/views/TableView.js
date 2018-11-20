/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Table, Header } from "../../../src/index";

class TableView extends React.Component {
  render() {
    const sampleData = Table.FactoryData({
      head: [
        [
          {
            content: "Name",
            filterable: true
          },
          {
            content: "Email",
            editable: true
          },
          {
            content: "ID",
            sortable: true
          }
        ]
      ],
      body: [
        ["Default User", "generic@email.com", "001"],
        ["Another User", "another@email.com", "002"],
        ["Mystery User", "mystery@email.com", "003"],
        ["Ignored User", "ignored@email.com", "004"],
        ["Broken User", null, "005"],
        [null, "ghost@email.com", "000"]
      ]
    });
    return [
      <Header display="xxl" textAlign="center" key="grip-title1">
        <Header.Title>Tables</Header.Title>
      </Header>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Default</Header.Title>
                  </Header>
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
                  <Header textAlign="center">
                    <Header.Title>Bordered</Header.Title>
                  </Header>
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
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Bordered, Padded</Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Table bordered padded panel>
                    {sampleData}
                  </Table>
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
                  <Header textAlign="center">
                    <Header.Title>Bordered, Padded, Hover</Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Table bordered padded hover panel>
                    {sampleData}
                  </Table>
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
                  <Header textAlign="center">
                    <Header.Title>
                      Bordered, Padded, Hover, Striped, Paginated
                    </Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Table pagination={4} bordered padded hover striped panel>
                    {sampleData}
                  </Table>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default TableView;
