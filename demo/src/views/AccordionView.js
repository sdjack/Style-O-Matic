/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Accordion, Button, Grid, Title } from "../../../src/index";

class AccordionView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title">
        <Title.Content>Accordion</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Accordion</Title.Content>
            </Title>
            <hr />
            <br />
            <Accordion>
              <Accordion.Title>Example Title 1</Accordion.Title>
              <Accordion.Content color="red">
                Example Content 1
              </Accordion.Content>
              <Accordion.Title>Example Title 2</Accordion.Title>
              <Accordion.Content>Example Content 2</Accordion.Content>
              <Accordion.Title>Example Title 3</Accordion.Title>
              <Accordion.Content>Example Content 3</Accordion.Content>
              <Accordion.Title>Example Title 4</Accordion.Title>
              <Accordion.Content>Example Content 4</Accordion.Content>
            </Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default AccordionView;
