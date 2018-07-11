/* eslint-disable */
import React from "react";
import {
  Badge,
  Grid,
  Loading,
  Breadcrumbs,
  Pagination,
  Title
} from "../../../src/index";

class DemoWelcome extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Style-O-Matic UI</Title.Content>
        <Title.Subtitle renderAs="h5">
          Custom CSS & React.js Framework
        </Title.Subtitle>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Pagination</Title.Content>
              <Title.Subtitle>
                A handy pager component for any page
              </Title.Subtitle>
            </Title>
            <br />
            <Pagination pageTotal={999} panel/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Breadcrumbs</Title.Content>
              <Title.Subtitle>Simple breadcrumb component</Title.Subtitle>
            </Title>
            <br />
            <Breadcrumbs path="/demo/page1/page2/page3/page4" panel />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Badges</Title.Content>
              <Title.Subtitle>
                Circular badge [button] components
              </Title.Subtitle>
            </Title>
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Badge color="black">
                    <Badge.Icon>&#9918;</Badge.Icon>
                  </Badge>
                  <Badge color="red">
                    <Badge.Icon>&#9749;</Badge.Icon>
                  </Badge>
                  <Badge color="orange">
                    <Badge.Icon>&#9889;</Badge.Icon>
                  </Badge>
                  <Badge color="yellow">
                    <Badge.Icon>&#9924;</Badge.Icon>
                  </Badge>
                  <Badge color="green">
                    <Badge.Icon>&#9748;</Badge.Icon>
                  </Badge>
                  <Badge color="blue">
                    <Badge.Icon>&#9995;</Badge.Icon>
                  </Badge>
                  <Badge color="indigo">
                    <Badge.Icon>&#9200;</Badge.Icon>
                  </Badge>
                  <Badge color="violet">
                    <Badge.Icon>&#10024;</Badge.Icon>
                  </Badge>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Badge color="black" colorStyle="fill">
                    <Badge.Icon>&#9918;</Badge.Icon>
                  </Badge>
                  <Badge color="red" colorStyle="fill">
                    <Badge.Icon>&#9749;</Badge.Icon>
                  </Badge>
                  <Badge color="orange" colorStyle="fill">
                    <Badge.Icon>&#9889;</Badge.Icon>
                  </Badge>
                  <Badge color="yellow" colorStyle="fill">
                    <Badge.Icon>&#9924;</Badge.Icon>
                  </Badge>
                  <Badge color="green" colorStyle="fill">
                    <Badge.Icon>&#9748;</Badge.Icon>
                  </Badge>
                  <Badge color="blue" colorStyle="fill">
                    <Badge.Icon>&#9995;</Badge.Icon>
                  </Badge>
                  <Badge color="indigo" colorStyle="fill">
                    <Badge.Icon>&#9200;</Badge.Icon>
                  </Badge>
                  <Badge color="violet" colorStyle="fill">
                    <Badge.Icon>&#10024;</Badge.Icon>
                  </Badge>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Badge color="black" colorStyle="outline">
                    <Badge.Icon>&#9918;</Badge.Icon>
                  </Badge>
                  <Badge color="red" colorStyle="outline">
                    <Badge.Icon>&#9749;</Badge.Icon>
                  </Badge>
                  <Badge color="orange" colorStyle="outline">
                    <Badge.Icon>&#9889;</Badge.Icon>
                  </Badge>
                  <Badge color="yellow" colorStyle="outline">
                    <Badge.Icon>&#9924;</Badge.Icon>
                  </Badge>
                  <Badge color="green" colorStyle="outline">
                    <Badge.Icon>&#9748;</Badge.Icon>
                  </Badge>
                  <Badge color="blue" colorStyle="outline">
                    <Badge.Icon>&#9995;</Badge.Icon>
                  </Badge>
                  <Badge color="indigo" colorStyle="outline">
                    <Badge.Icon>&#9200;</Badge.Icon>
                  </Badge>
                  <Badge color="violet" colorStyle="outline">
                    <Badge.Icon>&#10024;</Badge.Icon>
                  </Badge>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center">
              <Title.Content>Loading</Title.Content>
              <Title.Subtitle>
                A fancy loading animation component
              </Title.Subtitle>
            </Title>
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center" masked>
                  <Loading active />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default DemoWelcome;
