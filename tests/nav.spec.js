/**
 * Unit testing spec
 * @namespace nav.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Nav from "../src/components/Nav";

describe("Nav", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Nav>SUCCESS</Nav>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
