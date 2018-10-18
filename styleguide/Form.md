Form
================
Form: ver.0.0.0 
---
**Typical render usage:**

```
const FormExample = () => (
  <Form>
    <Form.Row>
      <Input id="demo-input1" label="Text" />
      <Input id="demo-input2" label="Password" type="password" />
      <Input id="demo-input3" label="Color" type="color" />
    </Form.Row>
    <Form.Row>
      <Select
        id="demo-input4"
        label="Select"
        options={[
          { value: "Option1", label: "Select Option 1" },
          { value: "Option2", label: "Select Option 2" },
          { value: "Option3", label: "Select Option 3" },
          { value: "Option4", label: "Select Option 4" },
          { value: "Option5", label: "Select Option 5" },
          { value: "Option6", label: "Select Option 6" },
          { value: "Option7", label: "Select Option 7" }
        ]}
      />
      <Input id="demo-input6" label="Time" type="time" />
      <Input id="demo-input7" label="Number" type="number" />
    </Form.Row>
    <Form.Row>
      <Input id="demo-input8" label="Email" type="email" />
      <Input id="demo-input9" label="Telephone" type="tel" />
      <Input id="demo-input10" label="URL" type="url" />
    </Form.Row>
    <Form.Row>
      <Input id="demo-input5a" label="Date (Browser Native)" type="date" />
      <DatePicker
        id="demo-input5b"
        label="DatePicker (SoM Component)"
        inputenabled
        iconenabled
      />
    </Form.Row>
    <Form.Row>
      <Radio
        id="demo-input11"
        label="Radio"
        options={[
          { value: "Radio1", label: "Radio 1" },
          { value: "Radio2", label: "Radio 2" },
          { value: "Radio3", label: "Radio 3" },
          { value: "Radio4", label: "Radio 4" },
          { value: "Radio5", label: "Radio 5" },
          { value: "Radio6", label: "Radio 6" },
          { value: "Radio7", label: "Radio 7" }
        ]}
      />
    </Form.Row>
    <Form.Row>
      <Input
        id="demo-input12"
        label="Checkbox 1"
        type="checkbox"
        value="Check"
        required
      />
      <Input
        id="demo-input13"
        label="Checkbox 2"
        type="checkbox"
        value="Check"
      />
      <Input
        id="demo-input14"
        label="Checkbox 3"
        type="checkbox"
        value="Check"
      />
      <Input
        id="demo-input15"
        label="Checkbox 4"
        type="checkbox"
        value="Check"
      />
      <Input
        id="demo-input16"
        label="Checkbox 5"
        type="checkbox"
        value="Check"
      />
      <Input
        id="demo-input17"
        label="Checkbox 6"
        type="checkbox"
        value="Check"
      />
      <Input
        id="demo-input18"
        label="Checkbox 7"
        type="checkbox"
        value="Check"
      />
    </Form.Row>
    <Form.Row>
      <Textarea id="demo-input19" label="Text Area" />
    </Form.Row>
    <Form.Row>
      <Input id="demo-input99" label="SUBMIT" type="submit" color="blue" />
    </Form.Row>
  </Form>
);

export default FormExample;
```

## License
Copyright (c) 2018 Steven Jackson

Licensed under the MIT license.
