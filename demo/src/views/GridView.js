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
      <Title renderAs="h1" textAlign="center" key="view-title">
        <Title.Content>Grids</Title.Content>
      </Title>,
      <section className="ui-panel">
        <Title renderAs="h3" textAlign="center" key="view-title">
          <Title.Content>Grid</Title.Content>
        </Title>
        <hr />
        <br />
        <Grid key="view-grid">
          <Grid.Row>
            <Grid.Column textAlign="center" panel>
              <Title renderAs="h2" textAlign="center" key="view-title">
                <Title.Content>Grid Column</Title.Content>
              </Title>
              <hr />
              <br />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    ];
  }
}

export default GridView;
