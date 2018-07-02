/**
 * Unit testing spec
 * @namespace accordion.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Accordion from "../src/components/Accordion";

describe("Accordion", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Accordion>SUCCESS</Accordion>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
