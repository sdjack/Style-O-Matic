/**
 * Unit testing spec
 * @namespace grid.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Grid from "../src/components/Grid";

describe("Grid", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<Grid>SUCCESS</Grid>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
