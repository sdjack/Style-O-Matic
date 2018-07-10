/**
 * Unit testing spec
 * @namespace header.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Header from "../src/components/Header";

describe("Header", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Header>SUCCESS</Header>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
