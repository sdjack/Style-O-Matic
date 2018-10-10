/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Card, Grid, Title } from "../../../src/index";

class CardView extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Cards</Title.Content>
      </Title>,
      <Grid key="view-grid" panel>
        <Grid.Row>
          <Grid.Column textAlign="center">&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" contentAlign="center" cols={3}>
            <br />
            <br />
            <br />
            <br />
            <strong>Standard</strong>
          </Grid.Column>
          <Grid.Column textAlign="center" cols={3}>
            <strong>Left Aligned</strong>
            <Card align="left">
              <Card.Header>Card Header</Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column textAlign="center" cols={3}>
            <strong>Center Aligned</strong>
            <Card align="center">
              <Card.Header>Card Header</Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column textAlign="center" cols={3}>
            <strong>Right Aligned</strong>
            <Card align="right">
              <Card.Header>Card Header</Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" contentAlign="center" cols={3}>
            <br />
            <br />
            <br />
            <br />
            <strong>Styled</strong>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card styled>
              <Card.Header>Card Header</Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="center" styled round>
              <Card.Header>Card Header</Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="right" styled>
              <Card.Header>Card Header</Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" contentAlign="center" cols={3}>
            <br />
            <br />
            <br />
            <br />
            <strong>w/ Icons</strong>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card styled>
              <Card.Header>
                <Card.Icon icon="cart" />
                Card Header
              </Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>
                Card Footer
                <Card.Icon icon="warning" />
              </Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="center" styled round>
              <Card.Header>
                <Card.Icon icon="star" />
                Card Header
                <Card.Icon icon="star" />
              </Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>
                <Card.Icon icon="star" />
                Card Footer
                <Card.Icon icon="star" />
              </Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="right" styled>
              <Card.Header>
                <Card.Icon icon="speech" />
                Card Header
              </Card.Header>
              <Card.Content>Card Content</Card.Content>
              <Card.Footer>
                Card Footer
                <Card.Icon icon="warning" />
              </Card.Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" contentAlign="center" cols={3}>
            <br />
            <br />
            <br />
            <br />
            <strong>Colored</strong>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card styled>
              <Card.Header color="white">Card Header</Card.Header>
              <Card.Content color="black">Card Content</Card.Content>
              <Card.Footer color="white">Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="center" styled>
              <Card.Header color="red">Card Header</Card.Header>
              <Card.Content color="orange">Card Content</Card.Content>
              <Card.Footer color="yellow">Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="right" styled>
              <Card.Header color="green">Card Header</Card.Header>
              <Card.Content color="blue">Card Content</Card.Content>
              <Card.Footer color="violet">Card Footer</Card.Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">&nbsp;</Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default CardView;
