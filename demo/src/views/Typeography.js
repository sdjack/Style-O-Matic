/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import { Grid, Title } from "../../../src/index";
/* eslint-disable */
class Typeography extends React.Component {
  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Typography</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center">
              <Title.Content className="ui-serif">Header Elements</Title.Content>
              <Title.Subtitle>h1 - h6</Title.Subtitle>
            </Title>
            <br />
            <hr />
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
          <Grid.Column textAlign="center">
            <section>
              <Title renderAs="h2" textAlign="center">
                <Title.Content className="ui-serif">Articles</Title.Content>
              </Title>
              <br />
              <hr />
              <p className="well">Articles</p>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" panel>
              <Title.Content className="ui-serif">Pre / Code</Title.Content>
            </Title>
            <section className="ui-extra-margin">
              <p className="well">Pre / Code</p>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" panel>
              <Title.Content className="ui-serif">User Comments</Title.Content>
            </Title>
            <section className="ui-extra-margin">
              <div className="ui-user-comment">
                <div className="ui-user-avatar" />
                <q>I remember this one time, I said a thing... </q>
              </div>
              <div className="ui-user-comment-flip">
                <div className="ui-user-avatar" />
                <q>...Then someone else said another thing...</q>
              </div>
              <div className="ui-user-comment">
                <div className="ui-user-avatar" />
                <q>...It was crazy!</q>
              </div>
              <div className="ui-user-comment">
                <div className="ui-user-avatar" data-user-initials="SJ" data-bg-color="green" />
                <q>Then there was this other time... </q>
              </div>
              <div className="ui-user-comment-flip">
                <div className="ui-user-avatar" data-user-initials="SJ" data-bg-color="red" />
                <q>...People had initials next to them...</q>
              </div>
              <div className="ui-user-comment ui-user-image">
                <img src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-02-icon.png" alt="" className="ui-user-avatar" />
                <q>...Some even had images...</q>
              </div>
              <div className="ui-user-comment ui-user-image">
                <img src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-02-icon.png" alt="" className="ui-user-avatar" />
                <q>...Wat do?</q>
              </div>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" panel>
              <Title.Content className="ui-serif">Detail Lists</Title.Content>
            </Title>
            <section className="ui-extra-margin">
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
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Title renderAs="h2" textAlign="center" panel>
              <Title.Content className="ui-serif">Quotes & Blockquotes</Title.Content>
            </Title>
            <Grid>
              <Grid.Row>
                <Grid.Column className="ui-divider-right" textAlign="center" cols={7}>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content className="ui-extra-margin">Blockquotes</Title.Content>
                  </Title>
                  <section className="ui-separate-top">
                    <aside className="ui-pull-quote">
                      <p>
                        For 50 years, WWF has been protecting the future of nature. The
                        world&apos;s leading conservation organization, WWF works in 100
                        countries and is supported by 1.2 million members in the United
                        States and close to 5 million globally.
                      </p>
                    </aside>
                    <figure>
                      <blockquote cite="http://www.worldwildlife.org/who/index.html">
                        <p>
                          For 50 years, WWF has been protecting the future of nature. The
                          world&apos;s leading conservation organization, WWF works in 100
                          countries and is supported by 1.2 million members in the United
                          States and close to 5 million globally.
                        </p>
                      </blockquote>

                      <figcaption>
                        <cite>
                          <small>
                            <a href="http://www.worldwildlife.org/who/index.html">
                              World Wildlife Foundation
                            </a>
                          </small>
                        </cite>
                      </figcaption>
                    </figure>
                  </section>
                </Grid.Column>
                <Grid.Column textAlign="center" cols={5}>
                  <Title renderAs="h5" textAlign="center">
                    <Title.Content className="ui-extra-margin">Drop Caps</Title.Content>
                  </Title>
                  <section className="ui-separate-top">
                    <p className="ui-drop-cap">
                      Embracing the fluid & flexible aspect of responsive web design
                      was an easy decision, but I’ve been less sure-footed when it
                      comes to balancing that with setting type on the web.
                      Embracing the fluid & flexible aspect of responsive web design
                      was an easy decision, but I’ve been less sure-footed when it
                      comes to balancing that with setting type on the web.<br />
                      Embracing the fluid & flexible aspect of responsive web design
                      was an easy decision, but I’ve been less sure-footed when it
                      comes to balancing that with setting type on the web.
                    </p>
                  </section>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default Typeography;
