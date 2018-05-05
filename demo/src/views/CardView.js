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
      <Grid key="view-grid">
        <Grid.Row panel>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Basic Cards</Title.Content>
            </Title>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column cols={4}>
                  <Card>
                    <Card.Header>Card Header</Card.Header>
                    <Card.Content>Card Content</Card.Content>
                    <Card.Footer>Card Footer</Card.Footer>
                  </Card>
                </Grid.Column>
                <Grid.Column cols={4}>
                  <Card textAlign="center">
                    <Card.Header>Card Header</Card.Header>
                    <Card.Content>Card Content</Card.Content>
                    <Card.Footer>Card Footer</Card.Footer>
                  </Card>
                </Grid.Column>
                <Grid.Column cols={4}>
                  <Card textAlign="right">
                    <Card.Header>Card Header</Card.Header>
                    <Card.Content>Card Content</Card.Content>
                    <Card.Footer>Card Footer</Card.Footer>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row panel>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Fancy Cards</Title.Content>
            </Title>
            <hr />
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column cols={4}>
                  <Card striped>
                    <Card.Header>Card Header</Card.Header>
                    <Card.Content>Card Content</Card.Content>
                    <Card.Footer>Card Footer</Card.Footer>
                  </Card>
                </Grid.Column>
                <Grid.Column cols={4}>
                  <Card textAlign="center" striped circular>
                    <Card.Header>Card Header</Card.Header>
                    <Card.Content>Card Content</Card.Content>
                    <Card.Footer>Card Footer</Card.Footer>
                  </Card>
                </Grid.Column>
                <Grid.Column cols={4}>
                  <Card textAlign="right" rounded>
                    <Card.Header color="blue">Card Header</Card.Header>
                    <Card.Content>Card Content</Card.Content>
                    <Card.Footer color="orange">Card Footer</Card.Footer>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default CardView;
