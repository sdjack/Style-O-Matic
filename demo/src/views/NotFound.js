/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import ReactDOM from "react-dom";
import { Grid, Title } from "../../../src/index";

class NotFound extends React.Component {
  render() {
    return [
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>BOGUS!</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <img alt="404" src="public/images/404.png" height="600px" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <Title showAs="h1" textAlign="center" key="view-title">
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

if (document.getElementById("collection-view")) {
  ReactDOM.render(<NotFound />, document.getElementById("collection-view"));
}
