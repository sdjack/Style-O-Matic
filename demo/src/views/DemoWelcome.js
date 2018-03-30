/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import ReactDOM from "react-dom";
import { Button, Grid, Title } from "../../../src/index";

class DemoWelcome extends React.Component {
  render() {
    return [
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>Style-O-Matic UI</Title.Content>
        <Title.Subtitle showAs="h5">
          Custom CSS & React.js Framework
        </Title.Subtitle>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <section className="panel">
              <Title showAs="h2" textAlign="center" key="view-title">
                <Title.Content>Basics</Title.Content>
              </Title>
              <div className="well">
                <h1>
                  <strong>&lt;h1&gt;</strong> Header Element
                  <strong>&lt;/h1&gt;</strong>
                  <br />
                  <small>
                    <strong>&lt;small&gt;</strong>small text<strong>
                      &lt;/small&gt;
                    </strong>
                  </small>
                </h1>
                <h2>
                  <strong>&lt;h2&gt;</strong> Header Element
                  <strong>&lt;/h2&gt;</strong>
                  <br />
                  <small>
                    <strong>&lt;small&gt;</strong>small text<strong>
                      &lt;/small&gt;
                    </strong>
                  </small>
                </h2>
                <h3>
                  <strong>&lt;h3&gt;</strong> Header Element
                  <strong>&lt;/h3&gt;</strong>
                  <br />
                  <small>
                    <strong>&lt;small&gt;</strong>small text<strong>
                      &lt;/small&gt;
                    </strong>
                  </small>
                </h3>
                <h4>
                  <strong>&lt;h4&gt;</strong> Header Element
                  <strong>&lt;/h4&gt;</strong>
                  <br />
                  <small>
                    <strong>&lt;small&gt;</strong>small text<strong>
                      &lt;/small&gt;
                    </strong>
                  </small>
                </h4>
                <h5>
                  <strong>&lt;h5&gt;</strong> Header Element
                  <strong>&lt;/h5&gt;</strong>
                  <br />
                  <small>
                    <strong>&lt;small&gt;</strong>small text<strong>
                      &lt;/small&gt;
                    </strong>
                  </small>
                </h5>
                <h6>
                  <strong>&lt;h6&gt;</strong> Header Element
                  <strong>&lt;/h6&gt;</strong>
                  <br />
                  <small>
                    <strong>&lt;small&gt;</strong>small text<strong>
                      &lt;/small&gt;
                    </strong>
                  </small>
                </h6>
                <hr />
                <br />
                <p>
                  <strong>&lt;p&gt;</strong>Paragraph Text<strong>
                    &lt;/p&gt;
                  </strong>
                </p>
              </div>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <section className="panel">
              <Title showAs="h2" textAlign="center" key="view-buttons-title">
                <Title.Content>Buttons</Title.Content>
              </Title>
              <Grid>
                <Grid.Row>
                  <Grid.Column cols={2}>
                    <Button
                      color="red"
                      to="https://github.com/sdjack/Style-O-Matic"
                    >
                      Red Button
                    </Button>
                  </Grid.Column>
                  <Grid.Column cols={2}>
                    <Button color="orange">Orange Button</Button>
                  </Grid.Column>
                  <Grid.Column cols={2}>
                    <Button color="yellow">Yellow Button</Button>
                  </Grid.Column>
                  <Grid.Column cols={2}>
                    <Button color="green">Green Button</Button>
                  </Grid.Column>
                  <Grid.Column cols={2}>
                    <Button color="blue">Blue Button</Button>
                  </Grid.Column>
                  <Grid.Column cols={2}>
                    <Button color="violet">Violet Button</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column cols={12} textAlign="center">
            <section className="panel">
              <Title showAs="h2" textAlign="center">
                <Title.Content>Blockquotes</Title.Content>
              </Title>
              <p className="well">Blockquotes</p>
            </section>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default DemoWelcome;
