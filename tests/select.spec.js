/**
 * Unit testing spec
 * @namespace select.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Select from "../src/components/Select";

describe("Select", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Select>SUCCESS</Select>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
