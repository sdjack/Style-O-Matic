/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import { Grid, Title } from "../../../src/index";

class Typeography extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Typography</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Header Elements</Title.Content>
              <Title.Subtitle>h1 - h6</Title.Subtitle>
            </Title>
            <hr />
            <br />
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
            <p>
              <strong>&lt;p&gt;</strong>Paragraph Text<strong>
                &lt;/p&gt;
              </strong>
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center" key="view-title">
                <Title.Content>Titles</Title.Content>
              </Title>
              <p className="well">Titles</p>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center" key="view-title">
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

export default Typeography;
