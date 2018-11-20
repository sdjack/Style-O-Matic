/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Button, Grid, Header, Toasts, ToolTip } from "../../../src/index";

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
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Toasts</Header.Title>
      </Header>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header display="xl" textAlign="center">
                    <Header.Title>Basic Toasts</Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button id="modal1-toggle" onClick={this.handleOnClick}>
                    <ToolTip text="Click To Add Toasts">Load Messages</ToolTip>
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
