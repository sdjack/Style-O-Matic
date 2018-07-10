/**
 * Unit testing spec
 * @namespace form.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Form from "../src/components/Form";

describe("Form", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Form>SUCCESS</Form>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
