/**
 * Unit testing spec
 * @namespace toolbar.spec
 */
import expect from "expect";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import ToolBar from "../src/components/ToolBar";

describe("ToolBar", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("displays a success message", () => {
    render(<ToolBar>SUCCESS</ToolBar>, node, () => {
      expect(node.innerHTML).toContain("SUCCESS");
    });
  });
});
