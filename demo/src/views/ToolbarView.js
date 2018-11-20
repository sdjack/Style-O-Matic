/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Button, Content, Grid, Header, ToolBar } from "../../../src/index";

class ToolbarView extends React.Component {
  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Toolbars</Header.Title>
      </Header>,
      <Grid key="grip-panel1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Grid panel>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Header display="xl" textAlign="center">
                    <Header.Title>Basic Toolbar</Header.Title>
                  </Header>
                  <hr />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <ToolBar color="!red" raised>
                    <Content contentAlign="left">
                      <span>TITLE</span>
                      <Button>Button</Button>
                      <Button>Button</Button>
                    </Content>
                    <Content contentAlign="right">
                      <span>Raised</span>
                      <span>Red</span>
                    </Content>
                  </ToolBar>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <ToolBar color="!green" raised>
                    <Content contentAlign="left">
                      <span>TITLE</span>
                      <Button>Button</Button>
                      <Button>Button</Button>
                    </Content>
                    <Content contentAlign="right">
                      <span>Raised</span>
                      <span>Green</span>
                    </Content>
                  </ToolBar>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <ToolBar color="!blue" raised>
                    <Content contentAlign="left">
                      <span>TITLE</span>
                      <Button>Button</Button>
                      <Button>Button</Button>
                    </Content>
                    <Content contentAlign="right">
                      <span>Raised</span>
                      <span>Blue</span>
                    </Content>
                  </ToolBar>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default ToolbarView;
