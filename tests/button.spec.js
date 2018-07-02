/**
 * Unit testing spec
 * @namespace button.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Button from "../src/components/Button";

describe("Button", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Button>SUCCESS</Button>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
