/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import { Form, Grid, Title } from "../../../src/index";

class Forms extends React.Component {
  render() {
    return [
      <Title showAs="h1" textAlign="center" key="view-title">
        <Title.Content>Forms</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title showAs="h2" textAlign="center" key="view-title">
              <Title.Content>Basic Form</Title.Content>
              <Title.Subtitle>Standard usage html form</Title.Subtitle>
            </Title>
            <hr />
            <br />
            <Form>
              <Form.Row>
                <Form.Input id="demo-input1" label="Text Input 1" />
                <Form.Input id="demo-input2" label="Text Input 2" />
                <Form.Input id="demo-input3" label="Text Input 3" />
              </Form.Row>
              <Form.Row>
                <Form.Input id="demo-input4" label="Text Input 4" />
                <Form.Input id="demo-input5" label="Text Input 5" />
                <Form.Input id="demo-input6" label="Text Input 6" />
                <Form.Input id="demo-input7" label="Text Input 7" />
              </Form.Row>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default Forms;
