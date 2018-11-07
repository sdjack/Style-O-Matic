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
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center">
                <Title.Content>Articles</Title.Content>
              </Title>
              <br />
              <hr />
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
              <br />
              <hr />
              <p className="well">Pre / Code</p>
            </section>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center">
                <Title.Content>User Comments</Title.Content>
              </Title>
              <br />
              <hr />
              <div className="ui-user-comment">
                <p>
                  <q>I remember this one time, I said a thing... </q>
                </p>
              </div>
              <div className="ui-user-comment-flip">
                <p>
                  <q>...Then someone else said another thing...</q>
                </p>
              </div>
              <div className="ui-user-comment">
                <p>
                  <q>...It was crazy!</q>
                </p>
              </div>
              <div className="ui-user-comment" data-user-initials="SJ">
                <p>
                  <q>Then there was this other time... </q>
                </p>
              </div>
              <div className="ui-user-comment-flip" data-user-initials="SJ">
                <p>
                  <q>...People had initials next to them...</q>
                </p>
              </div>
              <div className="ui-user-comment ui-user-image">
                <img src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-02-icon.png" alt="" />
                <p>
                  <q>...Some even had images...</q>
                </p>
              </div>
              <div className="ui-user-comment ui-user-image">
                <img src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/256/robot-02-icon.png" alt="" />
                <p>
                  <q>...Wat do?</q>
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
              <br />
              <hr />
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
          <Grid.Column textAlign="center" panel>
            <section>
              <Title renderAs="h2" textAlign="center">
                <Title.Content>Other Goodies</Title.Content>
              </Title>
              <br />
              <hr />
              <Grid>
                <Grid.Row>
                  <Grid.Column textAlign="center" cols={7}>
                    <section>
                      <Title renderAs="h5" textAlign="center">
                        <Title.Content>Blockquotes</Title.Content>
                      </Title>
                      <hr />
                      <aside className="ui-pull-quote">
                        <blockquote cite="http://www.worldwildlife.org/who/index.html">
                          <p>
                            For 50 years, WWF has been protecting the future of nature. The
                            world&apos;s leading conservation organization, WWF works in 100
                            countries and is supported by 1.2 million members in the United
                            States and close to 5 million globally.
                          </p>
                        </blockquote>
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
                              <a href="http://www.worldwildlife.org/who/index.html">World Wildlife Foundation</a>
                            </small>
                          </cite>
                        </figcaption>
                      </figure>
                    </section>
                  </Grid.Column>
                  <Grid.Column textAlign="center" cols={5}>
                    <section>
                      <Title renderAs="h5" textAlign="center">
                        <Title.Content>Drop Caps</Title.Content>
                      </Title>
                      <hr />
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
            </section>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default Typeography;
