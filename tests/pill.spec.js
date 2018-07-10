/**
 * Unit testing spec
 * @namespace pill.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Pill from "../src/components/Pill";

describe("Pill", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Pill>SUCCESS</Pill>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
