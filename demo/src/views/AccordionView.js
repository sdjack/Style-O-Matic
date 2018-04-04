/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Grid, Title } from "../../../src/index";

class AccordionView extends React.Component {
  render() {
    return [
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>Accordion</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title showAs="h2" textAlign="center" key="view-title">
              <Title.Content>Accordion</Title.Content>
            </Title>
            <hr />
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default AccordionView;
