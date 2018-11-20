/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import { Grid, Header } from "../../../src/index";

class NotFound extends React.Component {
  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>BOGUS!</Header.Title>
      </Header>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <img alt="404" src="demo/src/views/404.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <Header display="xxl" textAlign="center" key="view-title">
              <Header.Subtitle>Strange things are afoot...</Header.Subtitle>
              <Header.Subtitle>
                The page you requested was not found
              </Header.Subtitle>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default NotFound;
