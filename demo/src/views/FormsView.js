/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
import React from "react";
import { Form, Grid, Title, UI } from "../../../src/index";

class FormsView extends React.Component {
  handleOnSubmit = (e, formData) => {
    e.preventDefault();
    UI.setTheme("foo");
    console.log("Theme: foo");
  };

  render() {
    return [
      <Title renderAs="h1" textAlign="center" key="view-title" sticky>
        <Title.Content>Forms</Title.Content>
      </Title>,
      <Grid key="view-grid">
        <Grid.Row>
          <Grid.Column textAlign="center" panel>
            <Title renderAs="h2" textAlign="center" key="view-title">
              <Title.Content>Basic Form</Title.Content>
              <Title.Subtitle>Standard usage html form</Title.Subtitle>
            </Title>
            <hr />
            <br />
            <Form onSubmit={this.handleOnSubmit}>
              <Form.Row>
                <Form.Input id="demo-input1" label="Text" />
                <Form.Input id="demo-input2" label="Password" type="password" />
                <Form.Input id="demo-input3" label="Color" type="color" />
              </Form.Row>
              <Form.Row>
                <Form.Select
                  id="demo-input4"
                  label="Select"
                  options={[
                    { Value: "Option1", Label: "Select Option 1" },
                    { Value: "Option2", Label: "Select Option 2" },
                    { Value: "Option3", Label: "Select Option 3" },
                    { Value: "Option4", Label: "Select Option 4" },
                    { Value: "Option5", Label: "Select Option 5" },
                    { Value: "Option6", Label: "Select Option 6" },
                    { Value: "Option7", Label: "Select Option 7" }
                  ]}
                />
                <Form.Input id="demo-input5" label="Date" type="date" />
                <Form.Input id="demo-input6" label="Time" type="time" />
                <Form.Input id="demo-input7" label="Number" type="number" />
              </Form.Row>
              <Form.Row>
                <Form.Input id="demo-input8" label="Email" type="email" />
                <Form.Input id="demo-input9" label="Telephone" type="tel" />
                <Form.Input id="demo-input10" label="URL" type="url" />
              </Form.Row>
              <Form.Row>
                <Form.Radio
                  id="demo-input11"
                  label="Radio"
                  options={[
                    { Value: "Radio1", Label: "Radio 1" },
                    { Value: "Radio2", Label: "Radio 2" },
                    { Value: "Radio3", Label: "Radio 3" },
                    { Value: "Radio4", Label: "Radio 4" },
                    { Value: "Radio5", Label: "Radio 5" },
                    { Value: "Radio6", Label: "Radio 6" },
                    { Value: "Radio7", Label: "Radio 7" }
                  ]}
                />
              </Form.Row>
              <Form.Row>
                <Form.Input
                  id="demo-input12"
                  label="Checkbox 1"
                  type="checkbox"
                  value="Check"
                  required
                />
                <Form.Input
                  id="demo-input13"
                  label="Checkbox 2"
                  type="checkbox"
                  value="Check"
                />
                <Form.Input
                  id="demo-input14"
                  label="Checkbox 3"
                  type="checkbox"
                  value="Check"
                />
                <Form.Input
                  id="demo-input15"
                  label="Checkbox 4"
                  type="checkbox"
                  value="Check"
                />
                <Form.Input
                  id="demo-input16"
                  label="Checkbox 5"
                  type="checkbox"
                  value="Check"
                />
                <Form.Input
                  id="demo-input17"
                  label="Checkbox 6"
                  type="checkbox"
                  value="Check"
                />
                <Form.Input
                  id="demo-input18"
                  label="Checkbox 7"
                  type="checkbox"
                  value="Check"
                />
              </Form.Row>
              <Form.Row>
                <Form.Textarea id="demo-input99" label="Text Area" />
              </Form.Row>
              <Form.Row>
                <Form.Input
                  id="demo-input99"
                  label="SUBMIT"
                  type="submit"
                  color="blue"
                />
              </Form.Row>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ];
  }
}

export default FormsView;
