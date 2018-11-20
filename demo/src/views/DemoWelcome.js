/* eslint-disable */
import React from "react";
import {
  Badge,
  Icon,
  Grid,
  Loading,
  Breadcrumbs,
  Pagination,
  Header
} from "../../../src/index";
const PRIVATE = true;
class DemoWelcome extends React.Component {
  render() {
    const titleText = PRIVATE ? '...' : 'Style-O-Matic UI';
    const subTitleText = PRIVATE ? '...' : 'Custom CSS & React.js Framework';
    return [
      <Header display="xxl" textAlign="center" key="view-title">
        <Header.Title>{titleText}</Header.Title>
        <Header.Subtitle display="s">{subTitleText}</Header.Subtitle>
      </Header>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Pagination</Header.Title>
              <Header.Subtitle>
                A handy pager component for any page
              </Header.Subtitle>
            </Header>
            <br />
            <Pagination pageTotal={999} panel/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Breadcrumbs</Header.Title>
              <Header.Subtitle>Simple breadcrumb component</Header.Subtitle>
            </Header>
            <br />
            <Breadcrumbs path="/demo/page1/page2/page3/page4" panel />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Badges</Header.Title>
              <Header.Subtitle>
                Circular badge [button] components
              </Header.Subtitle>
            </Header>
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Badge color="black">
                    <Icon>star</Icon>
                  </Badge>
                  <Badge color="red">
                    <Icon>spider</Icon>
                  </Badge>
                  <Badge color="orange">
                    <Icon>bat</Icon>
                  </Badge>
                  <Badge color="yellow">
                    <Icon>ghost</Icon>
                  </Badge>
                  <Badge color="green">
                    <Icon>skull</Icon>
                  </Badge>
                  <Badge color="blue">
                    <Icon>doot</Icon>
                  </Badge>
                  <Badge color="indigo">
                    <Icon>robot</Icon>
                  </Badge>
                  <Badge color="violet">
                    <Icon>sheep</Icon>
                  </Badge>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Badge color="black" colorStyle="fill">
                    <i className="ui-icon">&#9918;</i>
                  </Badge>
                  <Badge color="red" colorStyle="fill">
                    <i className="ui-icon">&#9749;</i>
                  </Badge>
                  <Badge color="orange" colorStyle="fill">
                    <i className="ui-icon">&#9889;</i>
                  </Badge>
                  <Badge color="yellow" colorStyle="fill">
                    <i className="ui-icon">&#9924;</i>
                  </Badge>
                  <Badge color="green" colorStyle="fill">
                    <i className="ui-icon">&#9748;</i>
                  </Badge>
                  <Badge color="blue" colorStyle="fill">
                    <i className="ui-icon">&#9995;</i>
                  </Badge>
                  <Badge color="indigo" colorStyle="fill">
                    <i className="ui-icon">&#9200;</i>
                  </Badge>
                  <Badge color="violet" colorStyle="fill">
                    <i className="ui-icon">&#10024;</i>
                  </Badge>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Badge color="black" colorStyle="outline">
                    <i className="ui-icon">&#9918;</i>
                  </Badge>
                  <Badge color="red" colorStyle="outline">
                    <i className="ui-icon">&#9749;</i>
                  </Badge>
                  <Badge color="orange" colorStyle="outline">
                    <i className="ui-icon">&#9889;</i>
                  </Badge>
                  <Badge color="yellow" colorStyle="outline">
                    <i className="ui-icon">&#9924;</i>
                  </Badge>
                  <Badge color="green" colorStyle="outline">
                    <i className="ui-icon">&#9748;</i>
                  </Badge>
                  <Badge color="blue" colorStyle="outline">
                    <i className="ui-icon">&#9995;</i>
                  </Badge>
                  <Badge color="indigo" colorStyle="outline">
                    <i className="ui-icon">&#9200;</i>
                  </Badge>
                  <Badge color="violet" colorStyle="outline">
                    <i className="ui-icon">&#10024;</i>
                  </Badge>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Header display="xl" textAlign="center">
              <Header.Title>Loading</Header.Title>
              <Header.Subtitle>
                A fancy loading animation component
              </Header.Subtitle>
            </Header>
            <br />
            <Grid>
              <Grid.Row>
                <Grid.Column textAlign="center" masked>
                  <Loading scene="cube" active />
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
