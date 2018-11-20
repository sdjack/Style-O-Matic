/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Accordion, Grid, Header } from "../../../src/index";

class AccordionView extends React.Component {
  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Accordion</Header.Title>
      </Header>,
      <Grid key="view-grid" panel>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header display="xl" textAlign="center" key="view-title">
              <Header.Title>Accordion</Header.Title>
            </Header>
            <hr />
            <br />
            <Accordion>
              <Accordion.Title>Example Title 1</Accordion.Title>
              <Accordion.Content>Example Content 1</Accordion.Content>
              <Accordion.Title>Example Title 2</Accordion.Title>
              <Accordion.Content>Example Content 2</Accordion.Content>
              <Accordion.Title>Example Title 3</Accordion.Title>
              <Accordion.Content>Example Content 3</Accordion.Content>
              <Accordion.Title>Example Title 4</Accordion.Title>
              <Accordion.Content>Example Content 4</Accordion.Content>
              <Accordion.Title>Example Title 5</Accordion.Title>
              <Accordion.Content>Example Content 5</Accordion.Content>
            </Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default AccordionView;
