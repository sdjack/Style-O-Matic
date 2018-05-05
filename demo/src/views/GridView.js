/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Title } from "../../../src/index";

class GridView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Grid</Title.Content>
      </Title>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Grid Row: 1 Column</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 12</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Grid Row: 2 Columns</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={6} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 6</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={6} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 6</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Grid Row: 3 Columns</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={4} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 4</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={4} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 4</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={4} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 4</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Grid Row: 4 Columns</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 3</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 3</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 3</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={3} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 3</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Grid Row: 6 Columns</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 2</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 2</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 2</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 2</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 2</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={2} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 2</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h4" textAlign="center">
                    <Title.Content>Grid Row: 12 Columns</Title.Content>
                  </Title>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={1} panel>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content>Span 1</Title.Content>
                  </Title>
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
