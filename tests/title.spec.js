/**
 * Unit testing spec
 * @namespace title.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Title from "../src/components/Title";

describe("Title", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Title>SUCCESS</Title>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
