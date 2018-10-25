/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Accordion, Grid, Title } from "../../../src/index";

class AccordionView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Accordion</Title.Content>
      </Title>,
      <Grid key="view-grid" panel>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Accordion</Title.Content>
            </Title>
            <hr />
            <br />
            <Accordion>
              <Accordion.Title>Example Title</Accordion.Title>
              <Accordion.Content>Example Content</Accordion.Content>
            </Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default AccordionView;
