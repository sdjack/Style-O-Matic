/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import { Card, Icon, Grid, Header, Footer, Section } from "../../../src/index";
/* eslint-disable */
class CardView extends React.Component {
  render() {
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>Cards</Header.Title>
      </Header>,
      <Grid key="view-grid" panel>
        <Grid.Row>
          <Grid.Column>&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={3}>
            <strong>Standard</strong>
          </Grid.Column>
          <Grid.Column cols={3}>
            <strong>Left Aligned</strong>
            <Card align="left">
              <Header>
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>Card Footer</Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <strong>Center Aligned</strong>
            <Card align="center">
              <Header>
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>Card Footer</Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <strong>Right Aligned</strong>
            <Card align="right">
              <Header>
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>Card Footer</Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={3}>
            <strong>Large</strong>
          </Grid.Column>
          <Grid.Column cols={9}>
            <Card align="left">
              <Header display="l">
                <Header.Title>Card Header</Header.Title>
                <Header.Subtitle>Card SubHeader</Header.Subtitle>
              </Header>
              <Section>
                <Header>
                  Some text..
                </Header>
                <p>
                  Sunt in culpa qui officia deserunt mollit anim id
                  est laborum consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </Section>
              <Footer>Card Footer</Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={3}>
            <strong>Styled</strong>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card styled>
              <Header>
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>Card Footer</Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="center" styled round>
              <Header>
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>Card Footer</Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="right" styled>
              <Header>
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>Card Footer</Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={3}>
            <strong>w/ Icons</strong>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card styled>
              <Header>
                <Header.Title>
                  <Icon>cart</Icon>
                  Card Header
                </Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>
                <Icon>warning</Icon>
                Card Footer
              </Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="center" styled round>
              <Header>
                <Header.Title>
                  <Icon>star</Icon>
                  Card Header
                  <Icon reversed>star</Icon>
                </Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>
                <Icon>star</Icon>
                Card Footer
                <Icon reversed>star</Icon>
              </Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="right" styled>
              <Header>
                <Header.Title icon="speech" reversed>Card Header</Header.Title>
              </Header>
              <Section>Card Content</Section>
              <Footer>
                Card Footer
                <Icon reversed>warning</Icon>
              </Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>&nbsp;</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={3}>
            <strong>Colored</strong>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card styled>
              <Header color="white">
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section className="ui-black">Card Content</Section>
              <Footer className="ui-white">Card Footer</Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="center" styled>
              <Header color="red">
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section className="ui-orange">Card Content</Section>
              <Footer className="ui-yellow">Card Footer</Footer>
            </Card>
          </Grid.Column>
          <Grid.Column cols={3}>
            <Card align="right" styled>
              <Header color="green">
                <Header.Title>Card Header</Header.Title>
              </Header>
              <Section className="ui-blue">Card Content</Section>
              <Footer className="ui-violet">Card Footer</Footer>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>&nbsp;</Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default CardView;
