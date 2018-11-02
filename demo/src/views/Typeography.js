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
            <Title renderAs="h2" textAlign="center">
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
              <Title renderAs="h2" textAlign="center">
                <Title.Content>Articles</Title.Content>
              </Title>
              <p className="well">Articles</p>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center">
                <Title.Content>Pre / Code</Title.Content>
              </Title>
              <p className="well">Pre / Code</p>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center">
                <Title.Content>Blockquotes</Title.Content>
              </Title>
              <blockquote cite="http://www.worldwildlife.org/who/index.html">
                For 50 years, WWF has been protecting the future of nature. The
                world&apos;s leading conservation organization, WWF works in 100
                countries and is supported by 1.2 million members in the United
                States and close to 5 million globally.
              </blockquote>
              <div className="steve-says">
                <p>
                  <q>I remember this one time, I said a thing... </q>
                </p>
              </div>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center">
                <Title.Content>Detail Lists</Title.Content>
              </Title>
              <dl>
                <dt>Item 1</dt>
                <dd>Loreum Ipsum Lazy Description 1</dd>
                <dt>Item 2</dt>
                <dd>Loreum Ipsum Lazy Description 2</dd>
                <dt>Item 3</dt>
                <dd>Loreum Ipsum Lazy Description 3</dd>
              </dl>
            </section>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default Typeography;
