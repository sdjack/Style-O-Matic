/**
 * Unit testing spec
 * @namespace radio.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Radio from "../src/components/Radio";

describe("Radio", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Radio>SUCCESS</Radio>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
