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
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>Typography</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title showAs="h2" textAlign="center" key="view-title">
              <Title.Content>Header Elements</Title.Content>
              <Title.Subtitle>h1 - h6</Title.Subtitle>
            </Title>
            <hr />
            <br />
            <div className="ui-well">
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
            </div>
            <div className="ui-well">
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
            </div>
            <div className="ui-well">
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
            </div>
            <div className="ui-well">
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
            </div>
            <div className="ui-well">
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
            </div>
            <div className="ui-well">
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
            </div>
            <div className="ui-well">
              <p>
                <strong>&lt;p&gt;</strong>Paragraph Text<strong>
                  &lt;/p&gt;
                </strong>
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title showAs="h2" textAlign="center" key="view-title">
                <Title.Content>Titles</Title.Content>
              </Title>
              <p className="well">Titles</p>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title showAs="h2" textAlign="center" key="view-title">
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
