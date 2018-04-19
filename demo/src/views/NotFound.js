/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import { Grid, Title } from "../../../src/index";

class NotFound extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title">
        <Title.Content>BOGUS!</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <img alt="404" src="demo/src/views/404.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <Title renderAs="h1" textAlign="center" key="view-title">
              <Title.Subtitle>Strange things are afoot...</Title.Subtitle>
              <Title.Subtitle>
                The page you requested was not found
              </Title.Subtitle>
            </Title>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default NotFound;
