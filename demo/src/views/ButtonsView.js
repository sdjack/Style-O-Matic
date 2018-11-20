/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import {
  Button,
  ButtonBar,
  Dropdown,
  Grid,
  Pill,
  Header
} from "../../../src/index";

class ButtonsView extends React.Component {
  handlePillAction = () => null;

  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Buttons</Header.Title>
      </Header>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Default</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button>DEFAULT</Button>&nbsp;&nbsp;
                  <Button color="black">BLACK</Button>&nbsp;&nbsp;
                  <Button color="red">RED</Button>&nbsp;&nbsp;
                  <Button color="orange">ORANGE</Button>&nbsp;&nbsp;
                  <Button color="yellow">YELLOW</Button>&nbsp;&nbsp;
                  <Button color="green">GREEN</Button>&nbsp;&nbsp;
                  <Button color="blue">BLUE</Button>&nbsp;&nbsp;
                  <Button color="indigo">INDIGO</Button>&nbsp;&nbsp;
                  <Button color="violet">VIOLET</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Header display="xl" textAlign="center">
              <Header.Title>Filled</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button color="black" colorStyle="fill">
                    BLACK
                  </Button>&nbsp;&nbsp;
                  <Button color="red" colorStyle="fill">
                    RED
                  </Button>&nbsp;&nbsp;
                  <Button color="orange" colorStyle="fill">
                    ORANGE
                  </Button>&nbsp;&nbsp;
                  <Button color="yellow" colorStyle="fill">
                    YELLOW
                  </Button>&nbsp;&nbsp;
                  <Button color="green" colorStyle="fill">
                    GREEN
                  </Button>&nbsp;&nbsp;
                  <Button color="blue" colorStyle="fill">
                    BLUE
                  </Button>&nbsp;&nbsp;
                  <Button color="indigo" colorStyle="fill">
                    INDIGO
                  </Button>&nbsp;&nbsp;
                  <Button color="violet" colorStyle="fill">
                    VIOLET
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Header display="xl" textAlign="center">
              <Header.Title>Outlined</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button color="black" colorStyle="outline">
                    BLACK
                  </Button>&nbsp;&nbsp;
                  <Button color="red" colorStyle="outline">
                    RED
                  </Button>&nbsp;&nbsp;
                  <Button color="orange" colorStyle="outline">
                    ORANGE
                  </Button>&nbsp;&nbsp;
                  <Button color="yellow" colorStyle="outline">
                    YELLOW
                  </Button>&nbsp;&nbsp;
                  <Button color="green" colorStyle="outline">
                    GREEN
                  </Button>&nbsp;&nbsp;
                  <Button color="blue" colorStyle="outline">
                    BLUE
                  </Button>&nbsp;&nbsp;
                  <Button color="indigo" colorStyle="outline">
                    INDIGO
                  </Button>&nbsp;&nbsp;
                  <Button color="violet" colorStyle="outline">
                    VIOLET
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Header display="xl" textAlign="center">
              <Header.Title>Conditions</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button color="black" disabled>
                    DISABLED
                  </Button>&nbsp;&nbsp;
                  <Button color="red" disabled>
                    DISABLED
                  </Button>&nbsp;&nbsp;
                  <Button color="orange" disabled>
                    DISABLED
                  </Button>&nbsp;&nbsp;
                  <Button color="yellow" disabled>
                    DISABLED
                  </Button>&nbsp;&nbsp;
                  <Button color="green" disabled>
                    DISABLED
                  </Button>&nbsp;&nbsp;
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Header display="xl" textAlign="center">
              <Header.Title>Bonus Features</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button color="black" reveal>
                    <span className="ui-reveal-hover">Revealed Text</span>
                    <span className="ui-reveal-default">Hover to Reveal</span>
                  </Button>&nbsp;&nbsp;
                  <Button color="yellow" reveal>
                    <span className="ui-reveal-hover ui-green-text">
                      Revealed Text
                    </span>
                    <span className="ui-reveal-default ui-violet-text">
                      Hover to Reveal
                    </span>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Dropdown</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Dropdown id="dd1">
                    <Button color="red">Example Dropdown</Button>
                    <Dropdown.List>
                      <span>Option 1</span>
                      <span>Option 2</span>
                      <span>Option 3</span>
                      <span>Option 4</span>
                      <span>Option 5</span>
                      <span>Option 6</span>
                    </Dropdown.List>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Pills</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Pill id="pill1" onAction={this.handlePillAction}>
                    Action
                  </Pill>
                  <Pill id="pill2" onRemove={this.handlePillAction}>
                    Closable
                  </Pill>
                  <Pill
                    id="pill3"
                    onAction={this.handlePillAction}
                    onRemove={this.handlePillAction}
                  >
                    Both
                  </Pill>
                  <Pill
                    id="pill4"
                    onAction={this.handlePillAction}
                    onRemove={this.handlePillAction}
                    disabled
                  >
                    Disabled
                  </Pill>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Button Bar</Header.Title>
            </Header>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <ButtonBar id="bb1">
                    <ButtonBar.Button>1</ButtonBar.Button>
                    <ButtonBar.Button>2</ButtonBar.Button>
                    <ButtonBar.Button>3</ButtonBar.Button>
                    <ButtonBar.Button>4</ButtonBar.Button>
                  </ButtonBar>
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
