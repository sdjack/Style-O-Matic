/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Title } from "../../../src/index";

class NavigationView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title">
        <Title.Content>Navigation</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Nav</Title.Content>
            </Title>
            <hr />
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default NavigationView;
