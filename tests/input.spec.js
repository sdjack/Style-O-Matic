/**
 * Unit testing spec
 * @namespace input.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Input from "../src/components/Input";

describe("Input", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Input>SUCCESS</Input>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
