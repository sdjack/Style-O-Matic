/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Header } from "../../../src/index";

class GridView extends React.Component {
  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Grid</Header.Title>
      </Header>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Grid Row: 1 Column</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 12</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Grid Row: 2 Columns</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={6} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 6</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={6} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 6</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Grid Row: 3 Columns</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={4} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 4</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={4} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 4</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={4} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 4</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Grid Row: 4 Columns</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 3</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 3</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 3</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 3</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Grid Row: 6 Columns</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 2</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 2</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 2</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 2</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 2</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 2</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header textAlign="center">
                    <Header.Title>Grid Row: 12 Columns</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Header display="s" textAlign="center">
                    <Header.Title>Span 1</Header.Title>
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default GridView;
