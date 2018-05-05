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
    return [
      <Title renderAs="h1" textAlign="center" sticky>
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
                  <Table panel>
                    <Table.Head>
                      <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>Email</Table.Cell>
                        <Table.Cell>ID</Table.Cell>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                    </Table.Body>
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
                  <Title renderAs="h2" textAlign="center">
                    <Title.Content>Bordered</Title.Content>
                  </Title>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Table bordered panel>
                    <Table.Head>
                      <Table.Row>
                        <Table.Cell>Name</Table.Cell>
                        <Table.Cell>Email</Table.Cell>
                        <Table.Cell>ID</Table.Cell>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Default User</Table.Cell>
                        <Table.Cell />
                        <Table.Cell />
                      </Table.Row>
                    </Table.Body>
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
              <Table.Head>
                <Table.Row>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell>ID</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
              </Table.Body>
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
              <Table.Head>
                <Table.Row>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell>ID</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
              </Table.Body>
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
              <Table.Head>
                <Table.Row>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell>ID</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Default User</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default TableView;
