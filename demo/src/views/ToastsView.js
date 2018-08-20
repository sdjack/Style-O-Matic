/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Button, Grid, Title, Toasts, ToolTip } from "../../../src/index";

class ToastsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoMsgs: []
    };
  }

  handleOnClick = () => {
    this.setState({
      demoMsgs: [
        "Message 1|red",
        "Message 2|blue",
        "Message 3|violet",
        "Message 4|yellow"
      ]
    });
  };

  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Toasts</Title.Content>
      </Title>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Title renderAs="h2" textAlign="center">
                    <Title.Content>Basic Toasts</Title.Content>
                  </Title>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button id="modal1-toggle" onClick={this.handleOnClick}>
                    Load Messages
                    <ToolTip>Click To Add Toasts</ToolTip>
                  </Button>
                  <Toasts messages={this.state.demoMsgs} timeout={1000}>
                    Component
                  </Toasts>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default ToastsView;
