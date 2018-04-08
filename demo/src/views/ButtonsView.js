/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Button, Grid, Title } from "../../../src/index";

class ButtonsView extends React.Component {
  render() {
    return [
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>Buttons</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title showAs="h2" textAlign="center" key="view-title">
              <Title.Content>Buttons</Title.Content>
            </Title>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button color="red">RED</Button>&nbsp;&nbsp;
                  <Button color="orange">ORANGE</Button>&nbsp;&nbsp;
                  <Button color="yellow">YELLOW</Button>&nbsp;&nbsp;
                  <Button color="green">GREEN</Button>&nbsp;&nbsp;
                  <Button color="blue">BLUE</Button>&nbsp;&nbsp;
                  <Button color="indigo">INDIGO</Button>&nbsp;&nbsp;
                  <Button color="violet">VIOLET</Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button color="black">BLACK</Button>&nbsp;&nbsp;
                  <Button>DEFAULT</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default ButtonsView;
