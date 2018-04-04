/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import { Button, Grid, Title } from "../../../src/index";

class DemoWelcome extends React.Component {
  render() {
    return [
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>Style-O-Matic UI</Title.Content>
        <Title.Subtitle showAs="h5">
          Custom CSS & React.js Framework
        </Title.Subtitle>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section className="panel">
              <Title showAs="h2" textAlign="center" key="view-title">
                <Title.Content>Basics</Title.Content>
                <Title.Subtitle>Essentials for all uses</Title.Subtitle>
              </Title>
              <br />
              <br />
            </section>
            <section className="panel">TBD</section>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default DemoWelcome;
