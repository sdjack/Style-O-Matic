/**
 * Unit testing spec
 * @namespace textarea.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Textarea from "../src/components/Textarea";

describe("Textarea", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Textarea id="testtextarea">SUCCESS</Textarea>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
