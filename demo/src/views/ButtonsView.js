/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Button, Dropdown, Grid, Title } from "../../../src/index";

class ButtonsView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Buttons</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Default</Title.Content>
            </Title>
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
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Filled</Title.Content>
            </Title>
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
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Outlined</Title.Content>
            </Title>
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
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Bonus Features</Title.Content>
            </Title>
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
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Dropdown</Title.Content>
            </Title>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Dropdown id="dd1">
                    <Dropdown.Toggle color="red">
                      Example Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Content>
                      <span>Option 1</span>
                      <span>Option 2</span>
                      <span>Option 3</span>
                      <span>Option 4</span>
                      <span>Option 5</span>
                      <span>Option 6</span>
                    </Dropdown.Content>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button
                    className="ui-color ui-indigo"
                    id="dd2"
                    dropdown
                    label="Example Dropdown"
                  >
                    <span>Option 1</span>
                    <span>Option 2</span>
                    <span>Option 3</span>
                    <span>Option 4</span>
                    <span>Option 5</span>
                    <span>Option 6</span>
                  </Button>
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
