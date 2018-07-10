/**
 * Unit testing spec
 * @namespace card.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Card from "../src/components/Card";

describe("Card", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Card>SUCCESS</Card>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
